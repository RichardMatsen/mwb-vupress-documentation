(function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
  }
  var n = {};
  t.m = e, t.c = n, t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1,
      enumerable: !0,
      get: r
    })
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return t.d(n, "a", n), n
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, t.p = "/", t(t.s = 7)
})([function (e, t, n) {
  "use strict";

  function r() {}

  function o(e, t) {
    var n, o, i, a, u = A;
    for (a = arguments.length; a-- > 2;) O.push(arguments[a]);
    for (t && null != t.children && (O.length || O.push(t.children), delete t.children); O.length;)
      if ((o = O.pop()) && void 0 !== o.pop)
        for (a = o.length; a--;) O.push(o[a]);
      else "boolean" == typeof o && (o = null), (i = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o = String(o) : "string" != typeof o && (i = !1)), i && n ? u[u.length - 1] += o : u === A ? u = [o] : u.push(o), n = i;
    var l = new r;
    return l.nodeName = e, l.children = u, l.attributes = null == t ? void 0 : t, l.key = null == t ? void 0 : t.key, void 0 !== F.vnode && F.vnode(l), l
  }

  function i(e, t) {
    for (var n in t) e[n] = t[n];
    return e
  }

  function a(e, t) {
    return o(e.nodeName, i(i({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children)
  }

  function u(e) {
    !e._dirty && (e._dirty = !0) && 1 == I.push(e) && (F.debounceRendering || G)(l)
  }

  function l() {
    var e, t = I;
    for (I = []; e = t.pop();) e._dirty && L(e)
  }

  function c(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && s(e, t.nodeName) : n || e._componentConstructor === t.nodeName
  }

  function s(e, t) {
    return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
  }

  function f(e) {
    var t = i({}, e.attributes);
    t.children = e.children;
    var n = e.nodeName.defaultProps;
    if (void 0 !== n)
      for (var r in n) void 0 === t[r] && (t[r] = n[r]);
    return t
  }

  function h(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
    return n.normalizedNodeName = e, n
  }

  function p(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
  }

  function d(e, t, n, r, o) {
    if ("className" === t && (t = "class"), "key" === t);
    else if ("ref" === t) n && n(null), r && r(e);
    else if ("class" !== t || o)
      if ("style" === t) {
        if (r && "string" != typeof r && "string" != typeof n || (e.style.cssText = r || ""), r && "object" == typeof r) {
          if ("string" != typeof n)
            for (var i in n) i in r || (e.style[i] = "");
          for (var i in r) e.style[i] = "number" == typeof r[i] && !1 === E.test(i) ? r[i] + "px" : r[i]
        }
      } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");
    else if ("o" == t[0] && "n" == t[1]) {
      var a = t !== (t = t.replace(/Capture$/, ""));
      t = t.toLowerCase().substring(2), r ? n || e.addEventListener(t, v, a) : e.removeEventListener(t, v, a), (e._listeners || (e._listeners = {}))[t] = r
    } else if ("list" !== t && "type" !== t && !o && t in e) b(e, t, null == r ? "" : r), null != r && !1 !== r || e.removeAttribute(t);
    else {
      var u = o && t !== (t = t.replace(/^xlink\:?/, ""));
      null == r || !1 === r ? u ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (u ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r))
    } else e.className = r || ""
  }

  function b(e, t, n) {
    try {
      e[t] = n
    } catch (e) {}
  }

  function v(e) {
    return this._listeners[e.type](F.event && F.event(e) || e)
  }

  function g() {
    for (var e; e = B.pop();) F.afterMount && F.afterMount(e), e.componentDidMount && e.componentDidMount()
  }

  function y(e, t, n, r, o, i) {
    R++ || (H = null != o && void 0 !== o.ownerSVGElement, N = null != e && !("__preactattr_" in e));
    var a = m(e, t, n, r, i);
    return o && a.parentNode !== o && o.appendChild(a), --R || (N = !1, i || g()), a
  }

  function m(e, t, n, r, o) {
    var i = e,
      a = H;
    if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || o) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), w(e, !0))), i.__preactattr_ = !0, i;
    var u = t.nodeName;
    if ("function" == typeof u) return _(e, t, n, r);
    if (H = "svg" === u || "foreignObject" !== u && H, u = String(u), (!e || !s(e, u)) && (i = h(u, H), e)) {
      for (; e.firstChild;) i.appendChild(e.firstChild);
      e.parentNode && e.parentNode.replaceChild(i, e), w(e, !0)
    }
    var l = i.firstChild,
      c = i.__preactattr_,
      f = t.children;
    if (null == c) {
      c = i.__preactattr_ = {};
      for (var p = i.attributes, d = p.length; d--;) c[p[d].name] = p[d].value
    }
    return !N && f && 1 === f.length && "string" == typeof f[0] && null != l && void 0 !== l.splitText && null == l.nextSibling ? l.nodeValue != f[0] && (l.nodeValue = f[0]) : (f && f.length || null != l) && x(i, f, n, r, N || null != c.dangerouslySetInnerHTML), T(i, t.attributes, c), H = a, i
  }

  function x(e, t, n, r, o) {
    var i, a, u, l, s, f = e.childNodes,
      h = [],
      d = {},
      b = 0,
      v = 0,
      g = f.length,
      y = 0,
      x = t ? t.length : 0;
    if (0 !== g)
      for (var C = 0; C < g; C++) {
        var T = f[C],
          S = T.__preactattr_,
          z = x && S ? T._component ? T._component.__key : S.key : null;
        null != z ? (b++, d[z] = T) : (S || (void 0 !== T.splitText ? !o || T.nodeValue.trim() : o)) && (h[y++] = T)
      }
    if (0 !== x)
      for (var C = 0; C < x; C++) {
        l = t[C], s = null;
        var z = l.key;
        if (null != z) b && void 0 !== d[z] && (s = d[z], d[z] = void 0, b--);
        else if (!s && v < y)
          for (i = v; i < y; i++)
            if (void 0 !== h[i] && c(a = h[i], l, o)) {
              s = a, h[i] = void 0, i === y - 1 && y--, i === v && v++;
              break
            } s = m(s, l, n, r), u = f[C], s && s !== e && s !== u && (null == u ? e.appendChild(s) : s === u.nextSibling ? p(u) : e.insertBefore(s, u))
      }
    if (b)
      for (var C in d) void 0 !== d[C] && w(d[C], !1);
    for (; v <= y;) void 0 !== (s = h[y--]) && w(s, !1)
  }

  function w(e, t) {
    var n = e._component;
    n ? j(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), C(e))
  }

  function C(e) {
    for (e = e.lastChild; e;) {
      var t = e.previousSibling;
      w(e, !0), e = t
    }
  }

  function T(e, t, n) {
    var r;
    for (r in n) t && null != t[r] || null == n[r] || d(e, r, n[r], n[r] = void 0, H);
    for (r in t) "children" === r || "innerHTML" === r || r in n && t[r] === ("value" === r || "checked" === r ? e[r] : n[r]) || d(e, r, n[r], n[r] = t[r], H)
  }

  function S(e) {
    var t = e.constructor.name;
    (W[t] || (W[t] = [])).push(e)
  }

  function z(e, t, n) {
    var r, o = W[e.name];
    if (e.prototype && e.prototype.render ? (r = new e(t, n), P.call(r, t, n)) : (r = new P(t, n), r.constructor = e, r.render = k), o)
      for (var i = o.length; i--;)
        if (o[i].constructor === e) {
          r.nextBase = o[i].nextBase, o.splice(i, 1);
          break
        } return r
  }

  function k(e, t, n) {
    return this.constructor(e, n)
  }

  function M(e, t, n, r, o) {
    e._disable || (e._disable = !0, (e.__ref = t.ref) && delete t.ref, (e.__key = t.key) && delete t.key, !e.base || o ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r), r && r !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = r), e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && !1 === F.syncComponentUpdates && e.base ? u(e) : L(e, 1, o)), e.__ref && e.__ref(e))
  }

  function L(e, t, n, r) {
    if (!e._disable) {
      var o, a, u, l = e.props,
        c = e.state,
        s = e.context,
        h = e.prevProps || l,
        p = e.prevState || c,
        d = e.prevContext || s,
        b = e.base,
        v = e.nextBase,
        m = b || v,
        x = e._component,
        C = !1;
      if (b && (e.props = h, e.state = p, e.context = d, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(l, c, s) ? C = !0 : e.componentWillUpdate && e.componentWillUpdate(l, c, s), e.props = l, e.state = c, e.context = s), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1, !C) {
        o = e.render(l, c, s), e.getChildContext && (s = i(i({}, s), e.getChildContext()));
        var T, S, k = o && o.nodeName;
        if ("function" == typeof k) {
          var _ = f(o);
          a = x, a && a.constructor === k && _.key == a.__key ? M(a, _, 1, s, !1) : (T = a, e._component = a = z(k, _, s), a.nextBase = a.nextBase || v, a._parentComponent = e, M(a, _, 0, s, !1), L(a, 1, n, !0)), S = a.base
        } else u = m, T = x, T && (u = e._component = null), (m || 1 === t) && (u && (u._component = null), S = y(u, o, s, n || !b, m && m.parentNode, !0));
        if (m && S !== m && a !== x) {
          var P = m.parentNode;
          P && S !== P && (P.replaceChild(S, m), T || (m._component = null, w(m, !1)))
        }
        if (T && j(T), e.base = S, S && !r) {
          for (var D = e, O = e; O = O._parentComponent;)(D = O).base = S;
          S._component = D, S._componentConstructor = D.constructor
        }
      }
      if (!b || n ? B.unshift(e) : C || (e.componentDidUpdate && e.componentDidUpdate(h, p, d), F.afterUpdate && F.afterUpdate(e)), null != e._renderCallbacks)
        for (; e._renderCallbacks.length;) e._renderCallbacks.pop().call(e);
      R || r || g()
    }
  }

  function _(e, t, n, r) {
    for (var o = e && e._component, i = o, a = e, u = o && e._componentConstructor === t.nodeName, l = u, c = f(t); o && !l && (o = o._parentComponent);) l = o.constructor === t.nodeName;
    return o && l && (!r || o._component) ? (M(o, c, 3, n, r), e = o.base) : (i && !u && (j(i), e = a = null), o = z(t.nodeName, c, n), e && !o.nextBase && (o.nextBase = e, a = null), M(o, c, 1, n, r), e = o.base, a && e !== a && (a._component = null, w(a, !1))), e
  }

  function j(e) {
    F.beforeUnmount && F.beforeUnmount(e);
    var t = e.base;
    e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
    var n = e._component;
    n ? j(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.nextBase = t, p(t), S(e), C(t)), e.__ref && e.__ref(null)
  }

  function P(e, t) {
    this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}
  }

  function D(e, t, n) {
    return y(n, e, {}, !1, t, !1)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), n.d(t, "h", function () {
    return o
  }), n.d(t, "createElement", function () {
    return o
  }), n.d(t, "cloneElement", function () {
    return a
  }), n.d(t, "Component", function () {
    return P
  }), n.d(t, "render", function () {
    return D
  }), n.d(t, "rerender", function () {
    return l
  }), n.d(t, "options", function () {
    return F
  });
  var F = {},
    O = [],
    A = [],
    G = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
    E = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
    I = [],
    B = [],
    R = 0,
    H = !1,
    N = !1,
    W = {};
  i(P.prototype, {
    setState: function (e, t) {
      var n = this.state;
      this.prevState || (this.prevState = i({}, n)), i(n, "function" == typeof e ? e(n, this.props) : e), t && (this._renderCallbacks = this._renderCallbacks || []).push(t), u(this)
    },
    forceUpdate: function (e) {
      e && (this._renderCallbacks = this._renderCallbacks || []).push(e), L(this, 2)
    },
    render: function () {}
  });
  var U = {
    h: o,
    createElement: o,
    cloneElement: a,
    Component: P,
    render: D,
    rerender: l,
    options: F
  };
  t.default = U
}, function (e, t) {
  function n(e, t) {
    var n = e[1] || "",
      o = e[3];
    if (!o) return n;
    if (t && "function" == typeof btoa) {
      var i = r(o);
      return [n].concat(o.sources.map(function (e) {
        return "/*# sourceURL=" + o.sourceRoot + e + " */"
      })).concat([i]).join("\n")
    }
    return [n].join("\n")
  }

  function r(e) {
    return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
  }
  e.exports = function (e) {
    var t = [];
    return t.toString = function () {
      return this.map(function (t) {
        var r = n(t, e);
        return t[2] ? "@media " + t[2] + "{" + r + "}" : r
      }).join("")
    }, t.i = function (e, n) {
      "string" == typeof e && (e = [
        [null, e, ""]
      ]);
      for (var r = {}, o = 0; o < this.length; o++) {
        var i = this[o][0];
        "number" == typeof i && (r[i] = !0)
      }
      for (o = 0; o < e.length; o++) {
        var a = e[o];
        "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
      }
    }, t
  }
}, function (e, t, n) {
  function r(e, t) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        o = d[r.id];
      if (o) {
        o.refs++;
        for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
        for (; i < r.parts.length; i++) o.parts.push(s(r.parts[i], t))
      } else {
        for (var a = [], i = 0; i < r.parts.length; i++) a.push(s(r.parts[i], t));
        d[r.id] = {
          id: r.id,
          refs: 1,
          parts: a
        }
      }
    }
  }

  function o(e, t) {
    for (var n = [], r = {}, o = 0; o < e.length; o++) {
      var i = e[o],
        a = t.base ? i[0] + t.base : i[0],
        u = i[1],
        l = i[2],
        c = i[3],
        s = {
          css: u,
          media: l,
          sourceMap: c
        };
      r[a] ? r[a].parts.push(s) : n.push(r[a] = {
        id: a,
        parts: [s]
      })
    }
    return n
  }

  function i(e, t) {
    var n = g(e.insertInto);
    if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    var r = x[x.length - 1];
    if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), x.push(t);
    else if ("bottom" === e.insertAt) n.appendChild(t);
    else {
      if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
      var o = g(e.insertInto + " " + e.insertAt.before);
      n.insertBefore(t, o)
    }
  }

  function a(e) {
    if (null === e.parentNode) return !1;
    e.parentNode.removeChild(e);
    var t = x.indexOf(e);
    t >= 0 && x.splice(t, 1)
  }

  function u(e) {
    var t = document.createElement("style");
    return e.attrs.type = "text/css", c(t, e.attrs), i(e, t), t
  }

  function l(e) {
    var t = document.createElement("link");
    return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", c(t, e.attrs), i(e, t), t
  }

  function c(e, t) {
    Object.keys(t).forEach(function (n) {
      e.setAttribute(n, t[n])
    })
  }

  function s(e, t) {
    var n, r, o, i;
    if (t.transform && e.css) {
      if (!(i = t.transform(e.css))) return function () {};
      e.css = i
    }
    if (t.singleton) {
      var c = m++;
      n = y || (y = u(t)), r = f.bind(null, n, c, !1), o = f.bind(null, n, c, !0)
    } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t), r = p.bind(null, n, t), o = function () {
      a(n), n.href && URL.revokeObjectURL(n.href)
    }) : (n = u(t), r = h.bind(null, n), o = function () {
      a(n)
    });
    return r(e),
      function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          r(e = t)
        } else o()
      }
  }

  function f(e, t, n, r) {
    var o = n ? "" : r.css;
    if (e.styleSheet) e.styleSheet.cssText = C(t, o);
    else {
      var i = document.createTextNode(o),
        a = e.childNodes;
      a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
    }
  }

  function h(e, t) {
    var n = t.css,
      r = t.media;
    if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
    else {
      for (; e.firstChild;) e.removeChild(e.firstChild);
      e.appendChild(document.createTextNode(n))
    }
  }

  function p(e, t, n) {
    var r = n.css,
      o = n.sourceMap,
      i = void 0 === t.convertToAbsoluteUrls && o;
    (t.convertToAbsoluteUrls || i) && (r = w(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
    var a = new Blob([r], {
        type: "text/css"
      }),
      u = e.href;
    e.href = URL.createObjectURL(a), u && URL.revokeObjectURL(u)
  }
  var d = {},
    b = function (e) {
      var t;
      return function () {
        return void 0 === t && (t = e.apply(this, arguments)), t
      }
    }(function () {
      return window && document && document.all && !window.atob
    }),
    v = function (e) {
      return document.querySelector(e)
    },
    g = function (e) {
      var t = {};
      return function (e) {
        if ("function" == typeof e) return e();
        if (void 0 === t[e]) {
          var n = v.call(this, e);
          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head
          } catch (e) {
            n = null
          }
          t[e] = n
        }
        return t[e]
      }
    }(),
    y = null,
    m = 0,
    x = [],
    w = n(17);
  e.exports = function (e, t) {
    if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
    t = t || {}, t.attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = b()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
    var n = o(e, t);
    return r(n, t),
      function (e) {
        for (var i = [], a = 0; a < n.length; a++) {
          var u = n[a],
            l = d[u.id];
          l.refs--, i.push(l)
        }
        if (e) {
          r(o(e, t), t)
        }
        for (var a = 0; a < i.length; a++) {
          var l = i[a];
          if (0 === l.refs) {
            for (var c = 0; c < l.parts.length; c++) l.parts[c]();
            delete d[l.id]
          }
        }
      }
  };
  var C = function () {
    var e = [];
    return function (t, n) {
      return e[t] = n, e.filter(Boolean).join("\n")
    }
  }()
}, function (e, t, n) {
  var r, o;
  (function () {
    "use strict";

    function n() {
      for (var e = [], t = 0; t < arguments.length; t++) {
        var r = arguments[t];
        if (r) {
          var o = typeof r;
          if ("string" === o || "number" === o) e.push(r);
          else if (Array.isArray(r)) e.push(n.apply(null, r));
          else if ("object" === o)
            for (var a in r) i.call(r, a) && r[a] && e.push(a)
        }
      }
      return e.join(" ")
    }
    var i = {}.hasOwnProperty;
    void 0 !== e && e.exports ? e.exports = n : (r = [], void 0 !== (o = function () {
      return n
    }.apply(t, r)) && (e.exports = o))
  })()
}, function (e, t, n) {
  var r = n(20);
  "string" == typeof r && (r = [
    [e.i, r, ""]
  ]);
  var o = {
    hmr: !0
  };
  o.transform = void 0, o.insertInto = void 0;
  n(2)(r, o);
  r.locals && (e.exports = r.locals)
}, function (e, t, n) {
  "use strict";

  function r(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
      return n
    }
    return Array.from(e)
  }

  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function a(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function u(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var l = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    c = n(0),
    s = n(24),
    f = r(s),
    h = n(6),
    p = r(h),
    d = Symbol("ALL_ITEM"),
    b = function (e) {
      function t(e) {
        i(this, t);
        var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return n.handleToggleAllCheck = function () {
          var e = n.isAllChecked() ? [] : n.props.items;
          n.setState({
            checkedItems: e
          }), n.informAboutChange(e)
        }, n.handleItemCheck = function (e) {
          var t = void 0;
          t = n.isItemChecked(e) ? n.state.checkedItems.filter(function (t) {
            return t !== e
          }) : [].concat(o(n.state.checkedItems), [e]), n.setState({
            checkedItems: t
          }), n.informAboutChange(t)
        }, n.state = {
          checkedItems: e.checkedItems || e.items
        }, n
      }
      return u(t, e), l(t, [{
        key: "componentWillReceiveProps",
        value: function (e) {
          var t = this;
          if (e.items !== this.props.items)
            if (this.isAllChecked()) this.setState({
              checkedItems: e.items
            }), this.informAboutChange(e.items);
            else if (this.state.checkedItems.length) {
            var n = e.items.filter(function (e) {
              return t.state.checkedItems.find(function (t) {
                return t.label === e.label
              })
            });
            this.setState({
              checkedItems: n
            }), this.informAboutChange(n)
          }
        }
      }, {
        key: "render",
        value: function () {
          var e = this,
            t = this.props,
            n = t.label,
            r = t.items,
            o = t.renderLabel;
          return (0, c.h)("div", {
            className: p.default.container
          }, (0, c.h)("div", {
            className: p.default.label
          }, n, ":"), (0, c.h)("div", null, (0, c.h)(f.default, {
            item: d,
            checked: this.isAllChecked(),
            onChange: this.handleToggleAllCheck
          }, o), r.map(function (t) {
            return (0, c.h)(f.default, {
              key: t.label,
              item: t,
              checked: e.isItemChecked(t),
              onChange: e.handleItemCheck
            }, o)
          })))
        }
      }, {
        key: "isItemChecked",
        value: function (e) {
          return this.state.checkedItems.includes(e)
        }
      }, {
        key: "isAllChecked",
        value: function () {
          return this.props.items.length === this.state.checkedItems.length
        }
      }, {
        key: "informAboutChange",
        value: function (e) {
          var t = this;
          setTimeout(function () {
            return t.props.onChange(e)
          })
        }
      }]), t
    }(c.Component);
  b.ALL_ITEM = d, t.default = b
}, function (e, t, n) {
  var r = n(25);
  "string" == typeof r && (r = [
    [e.i, r, ""]
  ]);
  var o = {
    hmr: !0
  };
  o.transform = void 0, o.insertInto = void 0;
  n(2)(r, o);
  r.locals && (e.exports = r.locals)
}, function (e, t, n) {
  "use strict";

  function r(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o(e, t) {
    s = (0, i.render)((0, i.h)(u.default, {
      chunks: e,
      defaultSizes: window.defaultSizes
    }), document.getElementById("app"), s)
  }
  var i = n(0),
    a = n(8),
    u = r(a),
    l = n(28),
    c = (r(l), void 0);
  try {
    c = new WebSocket("ws://" + location.host)
  } catch (e) {
    console.warn("Couldn't connect to analyzer websocket server so you'll have to reload page manually to see updates in the treemap")
  }
  window.addEventListener("load", function () {
    o(window.chartData), c && c.addEventListener("message", function (e) {
      var t = JSON.parse(e.data);
      "chartDataUpdated" === t.event && o(t.data)
    })
  }, !1);
  var s = void 0
}, function (e, t, n) {
  "use strict";

  function r(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
      return n
    }
    return Array.from(e)
  }

  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function a(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function u(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var l = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    c = n(0),
    s = n(9),
    f = r(s),
    h = n(11),
    p = n(12),
    d = r(p),
    b = n(14),
    v = r(b),
    g = n(18),
    y = r(g),
    m = n(21),
    x = r(m),
    w = n(5),
    C = r(w),
    T = n(26),
    S = r(T),
    z = [{
      label: "Stat",
      prop: "statSize"
    }, {
      label: "Parsed",
      prop: "parsedSize"
    }, {
      label: "Gzipped",
      prop: "gzipSize"
    }],
    k = function (e) {
      function t(e) {
        i(this, t);
        var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return n.renderChunkItemLabel = function (e, t) {
          var r = e === C.default.ALL_ITEM,
            o = r ? "All" : e.label,
            i = r ? n.totalChunksSize : e[n.state.activeSizeItem.prop];
          return (0, c.h)("span", {
            className: t
          }, o, " (", (0, c.h)("strong", null, (0, f.default)(i)), ")")
        }, n.handleSizeSwitch = function (e) {
          n.updateChunks(n.chunks, {
            activeSizeItem: e
          })
        }, n.handleVisibleChunksChange = function (e) {
          n.visibleChunkItems = e, n.updateVisibleChunks()
        }, n.handleMouseLeaveTreemap = function () {
          n.setState({
            showTooltip: !1
          })
        }, n.handleTreemapGroupHover = function (e) {
          var t = e.group;
          t ? n.setState({
            showTooltip: !0,
            tooltipContent: n.getTooltipContent(t)
          }) : n.setState({
            showTooltip: !1
          })
        }, n.updateChunks(e.chunks, {
          initial: !0
        }), n
      }
      return u(t, e), l(t, [{
        key: "componentWillReceiveProps",
        value: function (e) {
          e.chunks !== this.props.chunks && this.updateChunks(e.chunks)
        }
      }, {
        key: "render",
        value: function () {
          var e = this.state,
            t = e.visibleChunks,
            n = e.showTooltip,
            r = e.tooltipContent,
            o = e.activeSizeItem;
          return (0, c.h)("div", {
            className: S.default.container
          }, (0, c.h)(x.default, null, (0, c.h)("div", {
            className: S.default.sidebarGroup
          }, (0, c.h)(y.default, {
            label: "Treemap sizes",
            items: this.sizeSwitchItems,
            activeItem: o,
            onSwitch: this.handleSizeSwitch
          })), this.state.chunkItems.length > 1 && (0, c.h)("div", {
            className: S.default.sidebarGroup
          }, (0, c.h)(C.default, {
            label: "Show chunks",
            items: this.state.chunkItems,
            checkedItems: this.visibleChunkItems,
            renderLabel: this.renderChunkItemLabel,
            onChange: this.handleVisibleChunksChange
          }))), (0, c.h)(d.default, {
            className: S.default.map,
            data: t,
            weightProp: o.prop,
            onMouseLeave: this.handleMouseLeaveTreemap,
            onGroupHover: this.handleTreemapGroupHover
          }), (0, c.h)(v.default, {
            visible: n
          }, r))
        }
      }, {
        key: "renderModuleSize",
        value: function (e, t) {
          var n = t + "Size",
            r = e[n],
            o = z.find(function (e) {
              return e.prop === n
            }).label,
            i = this.state.activeSizeItem.prop === n;
          return "number" == typeof r ? (0, c.h)("div", {
            className: i ? S.default.activeSize : ""
          }, o, " size: ", (0, c.h)("strong", null, (0, f.default)(r))) : null
        }
      }, {
        key: "updateChunks",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.initial,
            r = t.activeSizeItem;
          this.chunks = e;
          var i = e.some(h.isChunkParsed);
          if (this.sizeSwitchItems = i ? z : z.slice(0, 1), !r) {
            var a = n ? this.props.defaultSizes + "Size" : this.state.activeSizeItem.prop;
            r = this.sizeSwitchItems.find(function (e) {
              return e.prop === a
            }), r || (r = this.sizeSwitchItems[0])
          }
          var u = [].concat(o(e));
          "statSize" !== r.prop && (u = u.filter(h.isChunkParsed)), u.sort(function (e, t) {
            return t[r.prop] - e[r.prop]
          }), n && (this.visibleChunkItems = u), this.setState({
            showTooltip: !1,
            tooltipContent: null,
            activeSizeItem: r,
            chunkItems: u
          }), this.updateVisibleChunks()
        }
      }, {
        key: "updateVisibleChunks",
        value: function () {
          var e = this;
          this.setState({
            visibleChunks: this.chunks.filter(function (t) {
              return e.visibleChunkItems.find(function (e) {
                return t.label === e.label
              })
            })
          })
        }
      }, {
        key: "getTooltipContent",
        value: function (e) {
          return e ? (0, c.h)("div", null, (0, c.h)("div", null, (0, c.h)("strong", null, e.label)), (0, c.h)("br", null), this.renderModuleSize(e, "stat"), !e.inaccurateSizes && this.renderModuleSize(e, "parsed"), !e.inaccurateSizes && this.renderModuleSize(e, "gzip"), e.path && (0, c.h)("div", null, "Path: ", (0, c.h)("strong", null, e.path))) : null
        }
      }, {
        key: "totalChunksSize",
        get: function () {
          var e = this.state.activeSizeItem.prop;
          return this.chunks.reduce(function (t, n) {
            return t + (n[e] || 0)
          }, 0)
        }
      }]), t
    }(c.Component);
  t.default = k
}, function (e, t, n) {
  "use strict";
  (function (t) {
    (function (t) {
      function n(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = [],
          a = 0,
          u = void 0,
          l = void 0,
          c = void 0,
          s = void 0,
          f = void 0,
          h = void 0,
          p = void 0,
          d = void 0,
          b = void 0,
          v = void 0,
          g = void 0,
          y = void 0,
          m = void 0,
          x = void 0;
        if (isNaN(e)) throw new Error("Invalid arguments");
        return c = !0 === t.bits, g = !0 === t.unix, l = t.base || 2, v = void 0 !== t.round ? t.round : g ? 1 : 2, y = void 0 !== t.spacer ? t.spacer : g ? "" : " ", x = t.symbols || t.suffixes || {}, m = 2 === l ? t.standard || "jedec" : "jedec", b = t.output || "string", f = !0 === t.fullform, h = t.fullforms instanceof Array ? t.fullforms : [], u = void 0 !== t.exponent ? t.exponent : -1, d = Number(e), p = d < 0, s = l > 2 ? 1e3 : 1024, p && (d = -d), (-1 === u || isNaN(u)) && (u = Math.floor(Math.log(d) / Math.log(s))) < 0 && (u = 0), u > 8 && (u = 8), 0 === d ? (n[0] = 0, n[1] = g ? "" : o[m][c ? "bits" : "bytes"][u]) : (a = d / (2 === l ? Math.pow(2, 10 * u) : Math.pow(1e3, u)), c && (a *= 8) >= s && u < 8 && (a /= s, u++), n[0] = Number(a.toFixed(u > 0 ? v : 0)), n[1] = 10 === l && 1 === u ? c ? "kb" : "kB" : o[m][c ? "bits" : "bytes"][u], g && (n[1] = "jedec" === m ? n[1].charAt(0) : u > 0 ? n[1].replace(/B$/, "") : n[1], r.test(n[1]) && (n[0] = Math.floor(n[0]), n[1] = ""))), p && (n[0] = -n[0]), n[1] = x[n[1]] || n[1], "array" === b ? n : "exponent" === b ? u : "object" === b ? {
          value: n[0],
          suffix: n[1],
          symbol: n[1]
        } : (f && (n[1] = h[u] ? h[u] : i[m][u] + (c ? "bit" : "byte") + (1 === n[0] ? "" : "s")), n.join(y))
      }
      var r = /^(b|B)$/,
        o = {
          iec: {
            bits: ["b", "Kib", "Mib", "Gib", "Tib", "Pib", "Eib", "Zib", "Yib"],
            bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
          },
          jedec: {
            bits: ["b", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"],
            bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
          }
        },
        i = {
          iec: ["", "kibi", "mebi", "gibi", "tebi", "pebi", "exbi", "zebi", "yobi"],
          jedec: ["", "kilo", "mega", "giga", "tera", "peta", "exa", "zetta", "yotta"]
        };
      n.partial = function (e) {
        return function (t) {
          return n(t, e)
        }
      }, e.exports = n
    })("undefined" != typeof window && window)
  }).call(t, n(10))
}, function (e, t) {
  var n;
  n = function () {
    return this
  }();
  try {
    n = n || Function("return this")() || (0, eval)("this")
  } catch (e) {
    "object" == typeof window && (n = window)
  }
  e.exports = n
}, function (e, t, n) {
  "use strict";

  function r(e) {
    return "number" == typeof e.parsedSize
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.isChunkParsed = r
}, function (e, t, n) {
  "use strict";

  function r(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function o(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function i(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }

  function a(e, t) {
    return e.reduce(function (e, n) {
      return n[t] && (n.groups && (n = Object.assign({}, n, {
        groups: a(n.groups, t)
      })), n.weight = n[t], e.push(n)), e
    }, [])
  }

  function u(e) {
    e.preventDefault()
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var l = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    c = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    s = n(0),
    f = n(13),
    h = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(f),
    p = function (e) {
      function t(e) {
        r(this, t);
        var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return n.saveNode = function (e) {
          return n.node = e
        }, n.treemap = null, n.zoomOutDisabled = !1, n
      }
      return i(t, e), c(t, [{
        key: "componentDidMount",
        value: function () {
          this.updateData(this.props.weightProp), this.treemap = this.createTreemap(), window.addEventListener("resize", this.treemap.resize)
        }
      }, {
        key: "componentWillReceiveProps",
        value: function (e) {
          e.data === this.props.data && e.weightProp === this.props.weightProp || (this.updateData(e.weightProp, e.data), this.treemap.set({
            dataObject: this.treemapDataObject
          }))
        }
      }, {
        key: "shouldComponentUpdate",
        value: function () {
          return !1
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          window.removeEventListener("resize", this.treemap.resize), this.treemap.dispose()
        }
      }, {
        key: "render",
        value: function () {
          return (0, s.h)("div", l({}, this.props, {
            ref: this.saveNode
          }))
        }
      }, {
        key: "createTreemap",
        value: function () {
          var e = this,
            t = this.props,
            n = !1;
          return new h.default({
            element: this.node,
            layout: "squarified",
            stacking: "flattened",
            pixelRatio: window.devicePixelRatio || 1,
            maxGroupLevelsDrawn: Number.MAX_VALUE,
            maxGroupLabelLevelsDrawn: Number.MAX_VALUE,
            groupLabelVerticalPadding: .2,
            rolloutDuration: 0,
            pullbackDuration: 0,
            fadeDuration: 0,
            zoomMouseWheelDuration: 300,
            openCloseDuration: 200,
            dataObject: this.treemapDataObject,
            titleBarDecorator: function (e, t, n) {
              n.titleBarShown = !1
            },
            onGroupClick: function (e) {
              u(e), n = !1, this.zoom(e.group)
            },
            onGroupDoubleClick: u,
            onGroupHover: function (n) {
              if (n.group && n.group.attribution) return void n.preventDefault();
              t.onGroupHover && t.onGroupHover.call(e, n)
            },
            onGroupMouseWheel: function (e) {
              if (e.delta < 0) {
                if (n) return u(e);
                this.get("viewport").scale < 1 && (n = !0, u(e))
              } else n = !1
            }
          })
        }
      }, {
        key: "update",
        value: function () {
          this.treemap.update()
        }
      }, {
        key: "updateData",
        value: function (e, t) {
          t = t || this.props.data, this.data = a(t, e)
        }
      }, {
        key: "treemapDataObject",
        get: function () {
          return {
            groups: this.data
          }
        }
      }]), t
    }(s.Component);
  t.default = p
}, function (e, t) {
  (function () {
    function e() {
      function e() {
        if (!i) throw "AF0";
        var e = F.now();
        0 !== a && (n.Jd = e - a), a = e, o = o.filter(function (e) {
          return null !== e
        }), n.frames++;
        for (var r = 0; r < o.length; r++) {
          var u = o[r];
          null !== u && (!0 === u.ze.call(u.Yg) ? o[r] = null : H.Rc(u.repeat) && (u.repeat = u.repeat - 1, 0 >= u.repeat && (o[r] = null)))
        }
        o = o.filter(function (e) {
          return null !== e
        }), i = !1, t(), e = F.now() - e, 0 !== e && (n.Id = e), n.totalTime += e, n.Pe = 1e3 * n.frames / n.totalTime, a = 0 === o.length ? 0 : F.now()
      }

      function t() {
        0 < o.length && !i && (i = !0, r(e))
      }
      var n = this.rg = {
        frames: 0,
        totalTime: 0,
        Id: 0,
        Jd: 0,
        Pe: 0
      };
      P = n;
      var r = function () {
          return D.mf() ? function (e) {
            window.setTimeout(e, 0)
          } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function () {
            var e = F.create();
            return function (t) {
              var n = 0;
              window.setTimeout(function () {
                var r = e.now();
                t(), n = e.now() - r
              }, 16 > n ? 16 - n : 0)
            }
          }()
        }(),
        o = [],
        i = !1,
        a = 0;
      this.repeat = function (e, n, r) {
        this.cancel(e), o.push({
          ze: e,
          Yg: r,
          repeat: n
        }), t()
      }, this.d = function (e, t) {
        this.repeat(e, 1, t)
      }, this.cancel = function (e) {
        for (var t = 0; t < o.length; t++) {
          var n = o[t];
          null !== n && n.ze === e && (o[t] = null)
        }
      }, this.k = function () {
        o = []
      }
    }

    function t(e) {
      function t(e) {
        s[e].style.opacity = h * f[e]
      }

      function n(e) {
        e.width = Math.round(i * e.n), e.height = Math.round(a * e.n)
      }

      function r() {
        return /relative|absolute|fixed/.test(window.getComputedStyle(o, null).getPropertyValue("position"))
      }
      var o, i, a, u, l, c = [],
        s = {},
        f = {},
        h = 0;
      this.H = function (t) {
        o = t, r() || (o.style.position = "relative"), 0 != o.clientWidth && 0 != o.clientHeight || $.Pa("element has zero dimensions: " + o.clientWidth + " x " + o.clientHeight + "."), o.innerHTML = "", i = o.clientWidth, a = o.clientHeight, u = 0 !== i ? i : void 0, l = 0 !== a ? a : void 0, "embedded" === o.getAttribute("data-foamtree") && $.Pa("visualization already embedded in the element."), o.setAttribute("data-foamtree", "embedded"), e.c.p("stage:initialized", this, o, i, a)
      }, this.kb = function () {
        o.removeAttribute("data-foamtree"), c = [], s = {}, e.c.p("stage:disposed", this, o)
      }, this.k = function () {
        if (r() || (o.style.position = "relative"), i = o.clientWidth, a = o.clientHeight, 0 !== i && 0 !== a && (i !== u || a !== l)) {
          for (var t = c.length - 1; 0 <= t; t--) n(c[t]);
          e.c.p("stage:resized", u, l, i, a), u = i, l = a
        }
      }, this.ej = function (e, t) {
        e.n = t, n(e)
      }, this.oc = function (r, i, a) {
        var u = document.createElement("canvas");
        return u.setAttribute("style", "position: absolute; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; -webkit-touch-callout: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;"), u.n = i, n(u), c.push(u), s[r] = u, f[r] = 1, t(r), a || o.appendChild(u), e.c.p("stage:newLayer", r, u), u
      }, this.kc = function (e, n) {
        return H.V(n) || (f[e] = n, t(e)), f[e]
      }, this.d = function (e) {
        return H.V(e) || (h = e, H.Ga(s, function (e, n) {
          t(n)
        })), h
      }
    }

    function n(e) {
      function t(e, t, n) {
        return y = !0, d.x = 0, d.y = 0, b.x = 0, b.y = 0, a = h, u.x = p.x, u.y = p.y, t(), l *= e, c = n ? l / a : e, c = Math.max(.25 / a, c), !0
      }

      function n(e, t) {
        return t.x = e.x / h + p.x, t.y = e.y / h + p.y, t
      }

      function r(e, t, n, r, o, i, a, u, l) {
        var c = (e - n) * (i - u) - (t - r) * (o - a);
        return !(1e-5 > Math.abs(c)) && (l.x = ((e * r - t * n) * (o - a) - (e - n) * (o * u - i * a)) / c, l.y = ((e * r - t * n) * (i - u) - (t - r) * (o * u - i * a)) / c, !0)
      }
      var o, i, a = 1,
        u = {
          x: 0,
          y: 0
        },
        l = 1,
        c = 1,
        s = 1,
        f = {
          x: 0,
          y: 0
        },
        h = 1,
        p = {
          x: 0,
          y: 0
        },
        d = {
          x: 0,
          y: 0
        },
        b = {
          x: 0,
          y: 0
        },
        v = {
          x: 0,
          y: 0,
          f: 0,
          i: 0
        },
        g = {
          x: 0,
          y: 0,
          f: 0,
          i: 0,
          scale: 1
        },
        y = !0;
      e.c.j("stage:initialized", function (e, t, n, r) {
        o = n, i = r, v.x = 0, v.y = 0, v.f = n, v.i = r, g.x = 0, g.y = 0, g.f = n, g.i = r, g.scale = 1
      }), e.c.j("stage:resized", function (e, t, n, r) {
        function a(e) {
          e.x *= c, e.y *= s
        }

        function l(e) {
          a(e), e.f *= c, e.i *= s
        }
        o = n, i = r;
        var c = n / e,
          s = r / t;
        a(u), a(p), a(f), a(d), a(b), l(v), l(g)
      }), this.Yb = function (e, r) {
        return t(r, function () {
          n(e, f)
        }, !0)
      }, this.Y = function (e, n) {
        if (1 == Math.round(1e4 * n) / 1e4) {
          var o = v.x - p.x,
            i = v.y - p.y;
          return t(1, function () {}, !0), this.d(-o, -i)
        }
        return t(n, function () {
          for (var t = !1; !t;) var t = Math.random(),
            n = Math.random(),
            o = Math.random(),
            i = Math.random(),
            t = r(e.x + t * e.f, e.y + n * e.i, v.x + t * v.f, v.y + n * v.i, e.x + o * e.f, e.y + i * e.i, v.x + o * v.f, v.y + i * v.i, f)
        }, !0)
      }, this.sc = function (e, n) {
        var a, u, l, c;
        return a = e.f / e.i, u = o / i, a < u ? (l = e.i * u, c = e.i, a = e.x - .5 * (l - e.f), u = e.y) : a > u ? (l = e.f, c = e.f * i / o, a = e.x, u = e.y - .5 * (c - e.i)) : (a = e.x, u = e.y, l = e.f, c = e.i), a -= l * n, u -= c * n, l *= 1 + 2 * n, r(a, u, p.x, p.y, a + l, u, p.x + o / h, p.y, f) ? t(o / h / l, H.ta, !1) : (y = !1, this.d(h * (p.x - a), h * (p.y - u)))
      }, this.d = function (e, t) {
        var n = Math.round(1e4 * e) / 1e4,
          r = Math.round(1e4 * t) / 1e4;
        return b.x += n / h, b.y += r / h, 0 !== n || 0 !== r
      }, this.reset = function (e) {
        return e && this.content(0, 0, o, i), this.Y({
          x: v.x + p.x,
          y: v.y + p.y,
          f: v.f / h,
          i: v.i / h
        }, s / l)
      }, this.Pb = function (e) {
        s = Math.min(1, Math.round(1e4 * (e || l)) / 1e4)
      }, this.k = function () {
        return p.x < v.x ? (v.x - p.x) * h : p.x + o / h > v.x + v.f ? -(p.x + o / h - v.x - v.f) * h : 0
      }, this.A = function () {
        return p.y < v.y ? (v.y - p.y) * h : p.y + i / h > v.y + v.i ? -(p.y + i / h - v.y - v.i) * h : 0
      }, this.update = function (e) {
        var t = Math.abs(Math.log(c));
        6 > t ? t = 2 : (t /= 4, t += 3 * t * (1 < c ? e : 1 - e)), t = 1 < c ? Math.pow(e, t) : 1 - Math.pow(1 - e, t), t = (y ? t : 1) * (c - 1) + 1, h = a * t, p.x = f.x - (f.x - u.x) / t, p.y = f.y - (f.y - u.y) / t, p.x -= d.x * (1 - e) + b.x * e, p.y -= d.y * (1 - e) + b.y * e, 1 === e && (d.x = b.x, d.y = b.y), g.x = p.x, g.y = p.y, g.f = o / h, g.i = i / h, g.scale = h
      }, this.S = function (e) {
        return e.x = g.x, e.y = g.y, e.scale = g.scale, e
      }, this.absolute = function (e, t) {
        return n(e, t || {})
      }, this.md = function (e, t) {
        var n = t || {};
        return n.x = (e.x - p.x) * h, n.y = (e.y - p.y) * h, n
      }, this.Gc = function (e) {
        return this.scale() < s / e
      }, this.Rd = function () {
        return H.Ed(h, 1)
      }, this.scale = function () {
        return Math.round(1e4 * h) / 1e4
      }, this.content = function (e, t, n, r) {
        v.x = e, v.y = t, v.f = n, v.i = r
      }, this.Ic = function (e, t) {
        var n;
        for (n = e.length - 1; 0 <= n; n--) {
          var r = e[n];
          r.save(), r.scale(h, h), r.translate(-p.x, -p.y)
        }
        for (t(g), n = e.length - 1; 0 <= n; n--) r = e[n], r.restore()
      }
    }

    function r() {
      var e, t = !1,
        n = [],
        r = this,
        o = new function () {
          this.N = function (o) {
            return o && (t ? o.apply(r, e) : n.push(o)), this
          }, this.ih = function (e) {
            return r = e, {
              then: this.N
            }
          }
        };
      this.J = function () {
        e = arguments;
        for (var o = 0; o < n.length; o++) n[o].apply(r, e);
        return t = !0, this
      }, this.L = function () {
        return o
      }
    }

    function o(e) {
      var t = new r,
        n = e.length;
      if (0 < e.length)
        for (var o = e.length - 1; 0 <= o; o--) e[o].N(function () {
          0 == --n && t.J()
        });
      else t.J();
      return t.L()
    }

    function i(e) {
      var t = 0;
      this.d = function () {
        t++
      }, this.k = function () {
        0 === --t && e()
      }, this.clear = function () {
        t = 0
      }, this.A = function () {
        return 0 === t
      }
    }

    function a() {
      var e = document,
        t = {};
      this.addEventListener = function (n, r) {
        var o = t[n];
        o || (o = [], t[n] = o), o.push(r), e.addEventListener(n, r)
      }, this.d = function () {
        H.Ga(t, function (t, n) {
          for (var r = t.length - 1; 0 <= r; r--) e.removeEventListener(n, t[r])
        })
      }
    }

    function u(e) {
      function t(e) {
        return function (t) {
          n(t) && e.apply(this, arguments)
        }
      }

      function n(t) {
        for (t = t.target; t;) {
          if (t === e) return !0;
          t = t.parentElement
        }
        return !1
      }

      function r(e, t, n) {
        n = n || {}, o(e, n);
        for (var r = 0; r < t.length; r++) t[r].call(e.target, n);
        return (void 0 === n.Lb && n.yi || "prevent" === n.Lb) && e.preventDefault(), n
      }

      function o(t, n) {
        return B.Je(e, t.clientX, t.clientY, n), n.altKey = t.altKey, n.metaKey = t.metaKey, n.ctrlKey = t.ctrlKey, n.shiftKey = t.shiftKey, n.wb = 3 === t.which, n
      }
      var i = new a,
        u = [],
        l = [],
        c = [],
        s = [],
        f = [],
        h = [],
        p = [],
        d = [],
        b = [],
        v = [],
        g = [];
      this.d = function (e) {
        u.push(e)
      }, this.k = function (e) {
        f.push(e)
      }, this.ya = function (e) {
        l.push(e)
      }, this.Ba = function (e) {
        c.push(e)
      }, this.Pa = function (e) {
        s.push(e)
      }, this.Aa = function (e) {
        g.push(e)
      }, this.za = function (e) {
        h.push(e)
      }, this.Ja = function (e) {
        p.push(e)
      }, this.Y = function (e) {
        d.push(e)
      }, this.A = function (e) {
        b.push(e)
      }, this.S = function (e) {
        v.push(e)
      }, this.kb = function () {
        i.d()
      };
      var y, m, x, w, C = {
          x: 0,
          y: 0
        },
        T = {
          x: 0,
          y: 0
        },
        S = !1,
        z = !1;
      i.addEventListener("mousedown", t(function (t) {
        if (t.target !== e) {
          var n = r(t, c);
          T.x = n.x, T.y = n.y, C.x = n.x, C.y = n.y, S = !0, r(t, d), m = !1, y = window.setTimeout(function () {
            100 > V.d(C, n) && (window.clearTimeout(w), r(t, l), m = !0)
          }, 400)
        }
      })), i.addEventListener("mouseup", function (e) {
        if (r(e, s), S) {
          if (z && r(e, v), window.clearTimeout(y), !m && !z && n(e)) {
            var t = function (e) {
              var t = {};
              return t.x = e.pageX, t.y = e.pageY, t
            }(e);
            x && 100 > V.d(t, x) ? r(e, f) : r(e, u), x = t, w = window.setTimeout(function () {
              x = null
            }, 350)
          }
          z = S = !1
        }
      }), i.addEventListener("mousemove", function (e) {
        var t = o(e, {});
        n(e) && r(e, h, {
          type: "move"
        }), C.x = t.x, C.y = t.y, S && !z && 100 < V.d(T, C) && (z = !0), z && r(e, b, t)
      }), i.addEventListener("mouseout", t(function (e) {
        r(e, p, {
          type: "out"
        })
      })), i.addEventListener(void 0 !== document.onmousewheel ? "mousewheel" : "MozMousePixelScroll", t(function (e) {
        var t = e.wheelDelta,
          n = e.detail;
        r(e, g, {
          vd: (n ? t ? 0 < t / n / 40 * n ? 1 : -1 : -n / (D.nf() ? 40 : 19) : t / 40) / 3,
          yi: !0
        })
      })), i.addEventListener("contextmenu", t(function (e) {
        e.preventDefault()
      }))
    }

    function l() {
      var e = {};
      this.j = function (t, n) {
        var r = e[t];
        r || (r = [], e[t] = r), r.push(n)
      }, this.p = function (t, n) {
        var r = e[t];
        if (r)
          for (var o = Array.prototype.slice.call(arguments, 1), i = 0; i < r.length; i++) r[i].apply(this, o)
      }
    }

    function c(e) {
      function t(t, n, r) {
        var i, s = this,
          f = 0;
        this.id = u++, this.name = r || "{unnamed on " + t + "}", this.target = function () {
          return t
        }, this.Fb = function () {
          return -1 != c.indexOf(s)
        }, this.start = function () {
          if (!s.Fb()) {
            if (-1 == c.indexOf(s)) {
              var t = l.now();
              !0 === s.xf(t) && (c = c.slice(), c.push(s))
            }
            0 < c.length && e.repeat(o)
          }
          return this
        }, this.stop = function () {
          for (a(s); i < n.length; i++) {
            var e = n[i];
            e.ib && e.Xa.call()
          }
          return this
        }, this.eg = function () {
          i = void 0
        }, this.xf = function (e) {
          if (f++, 0 !== n.length) {
            var t;
            for (H.V(i) ? (i = 0, t = n[i], t.W && t.W.call(t, e, f, s)) : t = n[i]; i < n.length;) {
              if (t.Xa && t.Xa.call(t, e, f, s)) return !0;
              t.Da && t.Da.call(t, e, f, s), H.V(i) && (i = -1), ++i < n.length && (t = n[i], t.W && t.W.call(t, e, f, s))
            }
          }
          return !1
        }
      }

      function n(e) {
        return H.V(e) ? c.slice() : c.filter(function (t) {
          return t.target() === e
        })
      }

      function o() {
        i(), 0 == c.length && e.cancel(o)
      }

      function i() {
        var e = l.now();
        c.forEach(function (t) {
          !0 !== t.xf(e) && a(t)
        })
      }

      function a(e) {
        c = c.filter(function (t) {
          return t !== e
        })
      }
      var u = 0,
        l = F.create(),
        c = [];
      this.d = function () {
        for (var e = c.length - 1; 0 <= e; e--) c[e].stop();
        c = []
      }, this.D = function () {
        function e() {}

        function o(e) {
          var t, n, r = e.target,
            o = e.duration,
            i = e.ca;
          this.W = function () {
            t = {};
            for (var o in e.G) r.hasOwnProperty(o) && (t[o] = {
              start: H.V(e.G[o].start) ? r[o] : H.Fd(e.G[o].start) ? e.G[o].start.call(void 0) : e.G[o].start,
              end: H.V(e.G[o].end) ? r[o] : H.Fd(e.G[o].end) ? e.G[o].end.call(void 0) : e.G[o].end,
              P: H.V(e.G[o].P) ? R.Ib : e.G[o].P
            });
            n = l.now()
          }, this.Xa = function () {
            var e, a = l.now() - n,
              a = 0 === o ? 1 : Math.min(o, a) / o;
            for (e in t) {
              var u = t[e];
              r[e] = u.start + (u.end - u.start) * u.P(a)
            }
            return i && i.call(r, a), 1 > a
          }
        }

        function i(e, t, n) {
          this.ib = n, this.Xa = function () {
            return e.call(t), !1
          }
        }

        function a(e) {
          var t;
          this.W = function (n, r) {
            t = r + e
          }, this.Xa = function (e, n) {
            return n < t
          }
        }

        function u(e) {
          var t;
          this.W = function (n) {
            t = n + e
          }, this.Xa = function (e) {
            return e < t
          }
        }

        function c(e) {
          this.W = function () {
            e.forEach(function (e) {
              e.start()
            })
          }, this.Xa = function () {
            for (var t = 0; t < e.length; t++)
              if (e[t].Fb()) return !0;
            return !1
          }
        }
        return e.m = function (e, n) {
          return new function () {
            function l(t, n, r, o) {
              return n ? (H.V(r) && (r = e), t.Ab(new i(n, r, o))) : t
            }
            var s = [];
            this.Ab = function (e) {
              return s.push(e), this
            }, this.fb = function (e) {
              return this.Ab(new u(e))
            }, this.oe = function (e) {
              return this.Ab(new a(e || 1))
            }, this.call = function (e, t) {
              return l(this, e, t, !1)
            }, this.ib = function (e, t) {
              return l(this, e, t, !0)
            }, this.ia = function (t) {
              return H.V(t.target) && (t.target = e), this.Ab(new o(t))
            }, this.Ya = function (e) {
              return this.Ab(new c(e))
            }, this.eg = function () {
              return this.Ab({
                Xa: function (e, t) {
                  return t.eg(), !0
                }
              })
            }, this.xa = function () {
              return new t(e, s, n)
            }, this.start = function () {
              return this.xa().start()
            }, this.Fg = function () {
              var e = new r;
              return this.oe().call(e.J).xa(), e.L()
            }, this.bb = function () {
              var e = this.Fg();
              return this.start(), e
            }
          }
        }, e.tc = function (t) {
          return n(t).forEach(function (e) {
            e.stop()
          }), e.m(t, void 0)
        }, e
      }()
    }

    function s(e) {
      var t, n = {},
        r = e.Ud;
      e.c.j("model:loaded", function (e) {
        t = e
      }), this.H = function () {
        e.c.p("api:initialized", this)
      }, this.Cc = function (e, t, o, i) {
        this.od(n, t), this.pd(n, t), this.nd(n, t, !1), i && i(n), e(r, n, o)
      }, this.td = function (e, n, r, o, i, a, u) {
        if (e) {
          for (e = n.length - 1; 0 <= e; e--) {
            var l = n[e],
              c = H.extend({
                group: l.group
              }, i);
            c[r] = o(l), a(c)
          }
          0 < n.length && u(H.extend({
            groups: q.Lc(t, o).map(function (e) {
              return e.group
            })
          }, i))
        }
      }, this.pd = function (e, t) {
        return e.selected = t.selected, e.hovered = t.Db, e.open = t.open, e.openness = t.Kb, e.exposed = t.U, e.exposure = t.ka, e.transitionProgress = t.ua, e.revealed = !t.ba.Na(), e.browseable = t.Qa ? t.M : void 0, e.visible = t.ea, e.labelDrawn = t.ra && t.ra.la, e
      }, this.od = function (e, t) {
        var n = t.parent;
        return e.group = t.group, e.parent = n && n.group, e.weightNormalized = t.xg, e.level = t.R - 1, e.siblingCount = n && n.e.length, e.hasChildren = !t.empty(), e.index = t.index, e.indexByWeight = t.Dd, e.description = t.description, e.attribution = t.na, e
      }, this.nd = function (e, t, n) {
        if (e.polygonCenterX = t.K.x, e.polygonCenterY = t.K.y, e.polygonArea = t.K.ja, e.boxLeft = t.q.x, e.boxTop = t.q.y, e.boxWidth = t.q.f, e.boxHeight = t.q.i, t.ra && t.ra.la) {
          var r = t.ra.da;
          e.labelBoxLeft = r.x, e.labelBoxTop = r.y, e.labelBoxWidth = r.f, e.labelBoxHeight = r.i, e.labelFontSize = t.ra.fontSize
        }
        return n && t.aa && (e.polygon = t.aa.map(function (e) {
          return {
            x: e.x,
            y: e.y
          }
        }), e.neighbors = t.C && t.C.map(function (e) {
          return e && e.group
        })), e
      }
    }

    function f(e) {
      function t(t, r) {
        t.e = [], t.La = !0;
        var i = o(r),
          a = 0;
        if ("flattened" == e.ab && 0 < r.length && 0 < t.R) {
          var u = r.reduce(function (e, t) {
              return e + H.B(t.weight, 1)
            }, 0),
            l = n(t.group, !1);
          l.description = !0, l.T = u * e.cc, l.index = a++, l.parent = t, l.R = t.R + 1, l.id = l.id + "_d", t.e.push(l)
        }
        for (u = 0; u < r.length; u++) {
          var c = r[u],
            l = H.B(c.weight, 1);
          if (0 >= l) {
            if (!e.tj) continue;
            l = .9 * i
          }
          c = n(c, !0), c.T = l, c.index = a, c.parent = t, c.R = t.R + 1, t.e.push(c), a++
        }
      }

      function n(e, t) {
        var n = new z;
        return r(e), n.id = e.__id, n.group = e, t && (c[e.__id] = n), n
      }

      function r(e) {
        H.Q(e, "__id") || (Object.defineProperty(e, "__id", {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: l
        }), l++)
      }

      function o(e) {
        for (var t = Number.MAX_VALUE, n = 0; n < e.length; n++) {
          var r = e[n].weight;
          0 < r && t > r && (t = r)
        }
        return t === Number.MAX_VALUE && (t = 1), t
      }

      function i(e) {
        if (!e.empty()) {
          e = e.e;
          var t, n = 0;
          for (t = e.length - 1; 0 <= t; t--) {
            var r = e[t].T;
            n < r && (n = r)
          }
          for (t = e.length - 1; 0 <= t; t--) r = e[t], r.xg = r.T / n
        }
      }

      function a(e) {
        if (!e.empty()) {
          e = e.e.slice(0).sort(function (e, t) {
            return e.T < t.T ? 1 : e.T > t.T ? -1 : e.index - t.index
          });
          for (var t = 0; t < e.length; t++) e[t].Dd = t
        }
      }

      function u() {
        for (var t = d.e.reduce(function (e, t) {
            return e + t.T
          }, 0), n = 0; n < d.e.length; n++) {
          var r = d.e[n];
          r.na && (r.T = Math.max(.025, e.Ug) * t)
        }
      }
      var l, c, s, f, h, p = this,
        d = new z;
      this.H = function () {
        return d
      }, this.S = function (n) {
        var r = n.group.groups,
          o = e.pi;
        return !!(!n.e && !n.description && r && 0 < r.length && h + r.length <= o) && (h += r.length, t(n, r), i(n), a(n), !0)
      }, this.Y = function (e) {
        function o(e) {
          var t = e.groups;
          if (t)
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              r(i);
              var a = i.__id;
              c[a] = null, f[a] = e, a = i.id, H.V(a) || (s[a] = i), o(i)
            }
        }

        function p(e, t) {
          if (!e) return t;
          var n = Math.max(t, e.__id || 0),
            r = e.groups;
          if (r && 0 < r.length)
            for (var o = r.length - 1; 0 <= o; o--) n = p(r[o], n);
          return n
        }
        d.group = e, d.Ca = !1, d.M = !1, d.Qa = !1, d.open = !0, d.Kb = 1, l = p(e, 0) + 1, c = {}, s = {}, f = {}, h = 0, e && (r(e), c[e.__id] = d, H.V(e.id) || (s[e.id] = e), o(e)), t(d, e && e.groups || []),
          function (e) {
            if (!e.empty()) {
              var t = n({
                attribution: !0
              });
              t.index = e.e.length, t.parent = e, t.R = e.R + 1, t.na = !0, e.e.push(t)
            }
          }(d), i(d), u(), a(d)
      }, this.update = function () {
        q.Fa(d, function (e) {
          if (!e.empty()) {
            e = e.e;
            for (var t = o(e.map(function (e) {
                return e.group
              })), n = 0; n < e.length; n++) {
              var r = e[n];
              r.T = 0 < r.group.weight ? r.group.weight : .9 * t
            }
          }
        }), i(d), u(), a(d)
      }, this.A = function (e) {
        return function () {
          if (H.V(e) || H.of(e)) return [];
          if (Array.isArray(e)) return e.map(p.d, p);
          if (H.jc(e)) {
            if (H.Q(e, "__id")) return [p.d(e)];
            if (H.Q(e, "all")) {
              var t = [];
              return q.F(d, function (e) {
                t.push(e)
              }), t
            }
            if (H.Q(e, "groups")) return p.A(e.groups)
          }
          return [p.d(e)]
        }().filter(function (e) {
          return void 0 !== e
        })
      }, this.d = function (e) {
        if (H.jc(e) && H.Q(e, "__id")) {
          if (e = e.__id, H.Q(c, e)) {
            if (null === c[e]) {
              for (var t = f[e], n = []; t && (t = t.__id, n.push(t), !c[t]);) t = f[t];
              for (t = n.length - 1; 0 <= t; t--) this.S(c[n[t]])
            }
            return c[e]
          }
        } else if (H.Q(s, e)) return this.d(s[e])
      }, this.k = function (e, t, n) {
        return {
          e: p.A(e),
          Ia: H.B(e && e[t], !0),
          Ha: H.B(e && e.keepPrevious, n)
        }
      }
    }

    function h(e, t, n) {
      var r = {};
      t.Ha && q.F(e, function (e) {
        n(e) && (r[e.id] = e)
      }), e = t.e, t = t.Ia;
      for (var o = e.length - 1; 0 <= o; o--) {
        var i = e[o];
        r[i.id] = t ? i : void 0
      }
      var a = [];
      return H.Ga(r, function (e) {
        void 0 !== e && a.push(e)
      }), a
    }

    function p(e) {
      function t(e, t) {
        var n = e.ka;
        t.opacity = 1, t.Ka = 1, t.va = 0 > n ? 1 - k.ei / 100 * n : 1, t.wa = 0 > n ? 1 - k.fi / 100 * n : 1, t.fa = 0 > n ? 1 + .5 * n : 1
      }

      function n(e) {
        return e = e.ka, Math.max(.001, 0 === e ? 1 : 1 + e * (k.Va - 1))
      }

      function i(e, t) {
        for (var n = e.reduce(function (e, t) {
            return e[t.id] = t, e
          }, {}), r = e.length - 1; 0 <= r; r--) q.F(e[r], function (e) {
          n[e.id] = void 0
        });
        var i = [];
        H.Ga(n, function (e) {
          e && q.He(e, function (e) {
            e.open || i.push(e)
          })
        });
        var a = [];
        return H.Ga(n, function (e) {
          e && e.open && a.push(e)
        }), r = [], 0 !== i.length && r.push(w.Jb({
          e: i,
          Ia: !0,
          Ha: !0
        }, t, !0)), o(r)
      }

      function a(t, n, i, a) {
        var h = c();
        if (0 === t.length && !h) return (new r).J().L();
        var d = t.reduce(function (e, t) {
            return e[t.id] = !0, e
          }, {}),
          b = [];
        if (t = [], C.reduce(function (e, t) {
            return e || d[t.id] && (!t.U || 1 !== t.ka) || !d[t.id] && !t.parent.U && (t.U || -1 !== t.ka)
          }, !1)) {
          var g = [],
            w = {};
          C.forEach(function (e) {
            d[e.id] && (e.U || b.push(e), e.U = !0, q.Fa(e, function (e) {
              g.push(f(e, 1)), w[e.id] = !0
            }))
          }), 0 < g.length ? (q.F(v, function (e) {
            d[e.id] || (e.U && b.push(e), e.U = !1), w[e.id] || g.push(f(e, -1))
          }), t.push(x.D.m({}).Ya(g).call(p).bb()), u(d), t.push(l(h)), i && (m.sc(T, k.Pc, k.Ua, R.pa(k.gc)), m.Pb())) : (t.push(s(i)), n && q.F(v, function (e) {
            e.U && b.push(e)
          }))
        }
        return o(t).N(function () {
          y.td(n, b, "exposed", function (e) {
            return e.U
          }, {
            indirect: a
          }, e.options.Ef, e.options.Df)
        })
      }

      function u(e) {
        C.reduce(d(!0, void 0, function (t) {
          return t.U || e[t.id]
        }), b(T)), T.x -= T.f * (k.Va - 1) / 2, T.y -= T.i * (k.Va - 1) / 2, T.f *= k.Va, T.i *= k.Va
      }

      function l(t) {
        return t || !m.Rd() ? x.D.m(g).ia({
          duration: .7 * k.Ua,
          G: {
            x: {
              end: T.x + T.f / 2,
              P: R.pa(k.gc)
            },
            y: {
              end: T.y + T.i / 2,
              P: R.pa(k.gc)
            }
          },
          ca: function () {
            e.c.p("foamtree:dirty", !0)
          }
        }).bb() : (g.x = T.x + T.f / 2, g.y = T.y + T.i / 2, (new r).J().L())
      }

      function c() {
        return !!C && C.reduce(function (e, t) {
          return e || 0 !== t.ka
        }, !1)
      }

      function s(e) {
        var t = [],
          n = [];
        return q.F(v, function (e) {
          0 !== e.ka && n.push(f(e, 0, function () {
            this.U = !1
          }))
        }), t.push(x.D.m({}).Ya(n).bb()), m.content(0, 0, S, z), e && (t.push(m.reset(k.Ua, R.pa(k.gc))), m.Pb()), o(t)
      }

      function f(n, r, o) {
        var i = x.D.m(n);
        return 0 === n.ka && 0 !== r && i.call(function () {
          this.Bc(M), this.zb(t)
        }), i.ia({
          duration: k.Ua,
          G: {
            ka: {
              end: r,
              P: R.pa(k.gc)
            }
          },
          ca: function () {
            v.I = !0, v.Ma = !0, e.c.p("foamtree:dirty", !0)
          }
        }), 0 === r && i.call(function () {
          this.Md(), this.nc(), this.ed(M), this.dd(t)
        }), i.call(o).xa()
      }

      function p() {
        var e = v.e.reduce(d(!1, M.Tb, void 0), b({})).da,
          t = k.Pc,
          n = Math.min(e.x, T.x - T.f * t),
          r = Math.max(e.x + e.f, T.x + T.f * (1 + t)),
          o = Math.min(e.y, T.y - T.i * t),
          e = Math.max(e.y + e.i, T.y + T.i * (1 + t));
        m.content(n, o, r - n, e - o)
      }

      function d(e, t, n) {
        var r = {};
        return function (o, i) {
          if (!n || n(i)) {
            for (var a, u = e ? i.aa || i.o : i.o, l = u.length - 1; 0 <= l; l--) a = void 0 !== t ? t(i, u[l], r) : u[l], o.Zc = Math.min(o.Zc, a.x), o.Od = Math.max(o.Od, a.x), o.$c = Math.min(o.$c, a.y), o.Pd = Math.max(o.Pd, a.y);
            o.da.x = o.Zc, o.da.y = o.$c, o.da.f = o.Od - o.Zc, o.da.i = o.Pd - o.$c
          }
          return o
        }
      }

      function b(e) {
        return {
          Zc: Number.MAX_VALUE,
          Od: Number.MIN_VALUE,
          $c: Number.MAX_VALUE,
          Pd: Number.MIN_VALUE,
          da: e
        }
      }
      var v, g, y, m, x, w, C, T, S, z, k = e.options,
        M = {
          sf: function (e, t) {
            return t.scale = n(e), !1
          },
          Sb: function (e, t) {
            var r = n(e),
              o = g.x,
              i = g.y;
            t.translate(o, i), t.scale(r, r), t.translate(-o, -i)
          },
          Ub: function (e, t, r) {
            e = n(e);
            var o = g.x,
              i = g.y;
            r.x = (t.x - o) / e + o, r.y = (t.y - i) / e + i
          },
          Tb: function (e, t, r) {
            e = n(e);
            var o = g.x,
              i = g.y;
            return r.x = (t.x - o) * e + o, r.y = (t.y - i) * e + i, r
          }
        };
      e.c.j("stage:initialized", function (e, t, n, r) {
        g = {
          x: n / 2,
          y: r / 2
        }, S = n, z = r, T = {
          x: 0,
          y: 0,
          f: S,
          i: z
        }
      }), e.c.j("stage:resized", function (e, t, n, r) {
        g.x *= n / e, g.y *= r / t, S = n, z = r
      }), e.c.j("api:initialized", function (e) {
        y = e
      }), e.c.j("zoom:initialized", function (e) {
        m = e
      }), e.c.j("model:loaded", function (e, t) {
        v = e, C = t
      }), e.c.j("model:childrenAttached", function (e) {
        C = e
      }), e.c.j("timeline:initialized", function (e) {
        x = e
      }), e.c.j("openclose:initialized", function (e) {
        w = e
      });
      var L = ["groupExposureScale", "groupUnexposureScale", "groupExposureZoomMargin"];
      e.c.j("options:changed", function (e) {
        H.nb(e, L) && c() && (u({}), m.Aj(T, k.Pc), m.Pb())
      }), this.H = function () {
        e.c.p("expose:initialized", this)
      }, this.fc = function (e, t, n, o) {
        var u = e.e.reduce(function (e, t) {
            for (var n = t; n = n.parent;) e[n.id] = !0;
            return e
          }, {}),
          l = h(v, e, function (e) {
            return e.U && !e.open && !u[e.id]
          }),
          c = new r;
        return i(l, t).N(function () {
          a(l.filter(function (e) {
            return e.o && e.aa
          }), t, n, o).N(c.J)
        }), c.L()
      }
    }

    function d(e) {
      function t(t) {
        function n(e, t) {
          var n = Math.min(1, Math.max(0, e.ua));
          t.opacity = n, t.va = 1, t.wa = n, t.Ka = n, t.fa = e.Gb
        }
        var i = e.options,
          a = i.oj,
          s = i.pj,
          f = i.lj,
          h = i.mj,
          p = i.nj,
          d = i.fe,
          b = a + s + f + h + p,
          v = 0 < b ? d / b : 0,
          g = [];
        if (c.gb(i.hg, i.gg, i.ig, i.jg, i.fg), 0 === v && t.e && t.M) {
          for (d = t.e, b = 0; b < d.length; b++) {
            var y = d[b];
            y.ua = 1, y.Gb = 1, y.zb(n), y.nc(), y.dd(n)
          }
          return t.I = !0, e.c.p("foamtree:dirty", 0 < v), (new r).J().L()
        }
        if (t.e && t.M) {
          Y.Ja(t, Y.ya(t, e.options.he), function (t, r, u) {
            t.Bc(c), t.zb(n), u = "groups" === e.options.ge ? u : r, r = o.D.m(t).fb(u * v * a).ia({
              duration: v * s,
              G: {
                ua: {
                  end: 1,
                  P: R.pa(i.kj)
                }
              },
              ca: function () {
                this.I = !0, e.c.p("foamtree:dirty", 0 < v)
              }
            }).xa(), u = o.D.m(t).fb(l ? v * (f + u * h) : 0).ia({
              duration: l ? v * p : 0,
              G: {
                Gb: {
                  end: 1,
                  P: R.Ib
                }
              },
              ca: function () {
                this.I = !0, e.c.p("foamtree:dirty", 0 < v)
              }
            }).xa(), t = o.D.m(t).Ya([r, u]).oe().ib(function () {
              this.Md(), this.nc(), this.ed(c), this.dd(n)
            }).xa(), g.push(t)
          }), u.d();
          var m = new r;
          return o.D.m({}).Ya(g).call(function () {
            u.k(), m.J()
          }).start(), m.L()
        }
        return (new r).J().L()
      }
      var n, o, a = [],
        u = new i(H.ta);
      e.c.j("stage:initialized", function () {}), e.c.j("stage:resized", function () {}), e.c.j("stage:newLayer", function (e, t) {
        a.push(t)
      }), e.c.j("model:loaded", function (e) {
        n = e, u.clear()
      }), e.c.j("zoom:initialized", function () {}), e.c.j("timeline:initialized", function (e) {
        o = e
      });
      var l = !1;
      e.c.j("render:renderers:resolved", function (e) {
        l = e.labelPlainFill || !1
      });
      var c = new function () {
        var e = 0,
          t = 0,
          n = 0,
          r = 0,
          o = 0,
          i = 0;
        this.gb = function (a, u, l, c, s) {
          e = 1 + u, t = 1 - e, n = l, r = c, o = s, i = a
        }, this.sf = function (i, a) {
          return a.scale = e + t * i.ua, 0 !== o || 0 !== n || 0 !== r
        }, this.Sb = function (a, u) {
          var l = e + t * a.ua,
            c = a.parent,
            s = i * a.x + (1 - i) * c.x,
            f = i * a.y + (1 - i) * c.y;
          u.translate(s, f), u.scale(l, l), l = 1 - a.ua, u.rotate(o * Math.PI * l), u.translate(-s, -f), u.translate(c.q.f * n * l, c.q.i * r * l)
        }, this.Ub = function (o, a, u) {
          var l = e + t * o.ua,
            c = i * o.x + (1 - i) * o.parent.x,
            s = i * o.y + (1 - i) * o.parent.y,
            f = 1 - o.ua;
          o = o.parent, u.x = (a.x - c) / l + c - o.q.f * n * f, u.y = (a.y - s) / l + s - o.q.i * r * f
        }, this.Tb = function (o, a, u) {
          var l = e + t * o.ua,
            c = i * o.x + (1 - i) * o.parent.x,
            s = i * o.y + (1 - i) * o.parent.y,
            f = 1 - o.ua;
          o = o.parent, u.x = (a.x - c) * l + c - o.q.f * n * f, u.y = (a.y - s) * l + s - o.q.i * r * f
        }
      };
      this.H = function () {}, this.k = function () {
        function t(e, t) {
          var n = Math.min(1, Math.max(0, e.ua));
          t.opacity = n, t.va = 1, t.wa = n, t.Ka = n, t.fa = e.Gb
        }

        function r(e, t) {
          var n = Math.min(1, Math.max(0, e.Zd));
          t.opacity = n, t.Ka = n, t.va = 1, t.wa = 1, t.fa = e.Gb
        }
        var i = e.options,
          a = i.Yd,
          s = i.Hi,
          f = i.Ii,
          h = i.Ji,
          p = i.Di,
          d = i.Ei,
          b = i.Fi,
          v = i.zi,
          g = i.Ai,
          y = i.Bi,
          m = p + d + b + v + g + y + s + f + h,
          x = 0 < m ? a / m : 0,
          w = [];
        return u.A() ? c.gb(i.Ni, i.Li, i.Oi, i.Pi, i.Ki) : c.gb(i.hg, i.gg, i.ig, i.jg, i.fg), Y.Ja(n, Y.ya(n, e.options.Mi), function (n, a, u) {
          var m = "groups" === e.options.Gi ? u : a;
          w.push(o.D.m(n).call(function () {
            this.zb(t)
          }).fb(l ? x * (p + m * d) : 0).ia({
            duration: l ? x * b : 0,
            G: {
              Gb: {
                end: 0,
                P: R.Ib
              }
            },
            ca: function () {
              this.I = !0, e.c.p("foamtree:dirty", !0)
            }
          }).xa()), q.F(n, function (t) {
            w.push(o.D.m(t).call(function () {
              this.Bc(c), this.zb(r)
            }).fb(x * (v + g * m)).ia({
              duration: x * y,
              G: {
                Zd: {
                  end: 0,
                  P: R.Ib
                }
              },
              ca: function () {
                this.I = !0, e.c.p("foamtree:dirty", !0)
              }
            }).ib(function () {
              this.selected = !1, this.ed(c)
            }).xa())
          }), w.push(o.D.m(n).call(function () {
            this.Bc(c)
          }).fb(x * (s + f * m)).ia({
            duration: x * h,
            G: {
              ua: {
                end: 0,
                P: R.pa(i.Ci)
              }
            },
            ca: function () {
              this.I = !0, e.c.p("foamtree:dirty", !0)
            }
          }).ib(function () {
            this.selected = !1, this.ed(c)
          }).xa())
        }), o.D.m({}).Ya(w).bb()
      }, this.d = function (e) {
        return t(e)
      }
    }

    function b(e) {
      function t(e, t) {
        var n = [];
        if (q.F(u, function (t) {
            if (t.e) {
              var r = H.Q(e, t.id);
              t.open !== r && (r || t.U || q.F(t, function (e) {
                if (e.U) return n.push(t), !1
              }))
            }
          }), 0 === n.length) return (new r).J().L();
        var o;
        for (o = n.length - 1; 0 <= o; o--) n[o].open = !1;
        var i = a.fc({
          e: n,
          Ia: !0,
          Ha: !0
        }, t, !0, !0);
        for (o = n.length - 1; 0 <= o; o--) n[o].open = !0;
        return i
      }

      function n(t, n, a) {
        function c(t, n) {
          t.zb(s);
          var r = i.D.m(t).ia({
            duration: e.options.bd,
            G: {
              Kb: {
                end: n ? 1 : 0,
                P: R.Ae
              }
            },
            ca: function () {
              this.I = !0, e.c.p("foamtree:dirty", !0)
            }
          }).call(function () {
            this.open = n, t.Vb = !1
          }).ib(function () {
            this.nc(), this.dd(s), delete o[this.id]
          }).xa();
          return o[t.id] = r
        }

        function s(e, t) {
          t.opacity = 1 - e.Kb, t.va = 1, t.wa = 1, t.fa = 1, t.Ka = 1
        }
        var f = [],
          h = [];
        return q.F(u, function (e) {
          if (e.M && e.X) {
            var n = H.Q(t, e.id),
              r = o[e.id];
            if (r && r.Fb()) r.stop();
            else if (e.open === n) return;
            e.Vb = n, n || (e.open = n, e.Td = !1), h.push(e), f.push(c(e, n))
          }
        }), 0 < f.length ? (e.c.p("openclose:changing"), i.D.m({}).Ya(f).bb().N(function () {
          l.td(n, h, "open", function (e) {
            return e.open
          }, {
            indirect: a
          }, e.options.Mf, e.options.Lf)
        })) : (new r).J().L()
      }
      var o, i, a, u, l;
      e.c.j("api:initialized", function (e) {
        l = e
      }), e.c.j("model:loaded", function (e) {
        u = e, o = {}
      }), e.c.j("timeline:initialized", function (e) {
        i = e
      }), e.c.j("expose:initialized", function (e) {
        a = e
      }), this.H = function () {
        e.c.p("openclose:initialized", this)
      }, this.Jb = function (o, i, a) {
        if ("flattened" == e.options.ab) return (new r).J().L();
        o = h(u, o, function (e) {
          return e.open || e.Vb
        });
        for (var l = new r, c = 0; c < o.length; c++) o[c].Vb = !0;
        0 < o.length && e.c.p("foamtree:attachChildren");
        var s = o.reduce(function (e, t) {
          return e[t.id] = !0, e
        }, {});
        return t(s, i).N(function () {
          n(s, i, a).N(l.J)
        }), l.L()
      }
    }

    function v(e) {
      function t(t, o) {
        var i = h(n, t, function (e) {
          return e.selected
        });
        q.F(n, function (e) {
          !0 === e.selected && (e.selected = !e.selected, e.I = !e.I, e.$a = !e.$a)
        });
        var a;
        for (a = i.length - 1; 0 <= a; a--) {
          var u = i[a];
          u.selected = !u.selected, u.I = !u.I, u.$a = !u.$a
        }
        var l = [];
        q.F(n, function (e) {
          e.I && l.push(e)
        }), 0 < l.length && e.c.p("foamtree:dirty", !1), r.td(o, l, "selected", function (e) {
          return e.selected
        }, {}, e.options.Of, e.options.Nf)
      }
      var n, r;
      e.c.j("api:initialized", function (e) {
        r = e
      }), e.c.j("model:loaded", function (e) {
        n = e
      }), this.H = function () {
        e.c.p("select:initialized", this)
      }, this.select = function (e, n) {
        return t(e, n)
      }
    }

    function g(e) {
      function t(e) {
        return function (t) {
          e.call(this, {
            x: t.x,
            y: t.y,
            scale: t.scale,
            vd: t.delta,
            ctrlKey: t.ctrlKey,
            metaKey: t.metaKey,
            altKey: t.altKey,
            shiftKey: t.shiftKey,
            wb: t.secondary,
            touches: t.touches
          })
        }
      }

      function n() {
        function t(e) {
          return function (t) {
            return t.x *= L / f.clientWidth, t.y *= _ / f.clientHeight, e(t)
          }
        }
        "external" !== F.hf && ("hammerjs" === F.hf && H.Q(window, "Hammer") && (I.H(f), I.m("tap", t(P.d), !0), I.m("doubletap", t(P.k), !0), I.m("hold", t(P.ya), !0), I.m("touch", t(P.Aa), !1), I.m("release", t(P.Ba), !1), I.m("dragstart", t(P.Y), !0), I.m("drag", t(P.A), !0), I.m("dragend", t(P.S), !0), I.m("transformstart", t(P.Ta), !0), I.m("transform", t(P.Ja), !0), I.m("transformend", t(P.cb), !0)), k = new u(f), M = new a, k.d(t(P.d)), k.k(t(P.k)), k.ya(t(P.ya)), k.Ba(t(P.Aa)), k.Pa(t(P.Ba)), k.Y(t(P.Y)), k.A(t(P.A)), k.S(t(P.S)), k.za(t(P.za)), k.Ja(t(P.za)), k.Aa(t(P.Pa)), M.addEventListener("keyup", function (t) {
          var n = !1,
            r = void 0,
            o = F.Sf({
              keyCode: t.keyCode,
              preventDefault: function () {
                n = !0
              },
              preventOriginalEventDefault: function () {
                r = "prevent"
              },
              allowOriginalEventDefault: function () {
                r = "allow"
              }
            });
          "prevent" === r && t.preventDefault(), (n = n || 0 <= o.indexOf(!1)) || 27 === t.keyCode && e.c.p("interaction:reset")
        }))
      }

      function r() {
        h.Gc(2) ? e.c.p("interaction:reset") : h.normalize(F.wc, R.pa(F.xc))
      }

      function o(e) {
        return function () {
          y.empty() || e.apply(this, arguments)
        }
      }

      function i(e, t, n) {
        var r = {},
          o = {};
        return function (i) {
          var a;
          switch (e) {
            case "click":
              a = F.yf;
              break;
            case "doubleclick":
              a = F.zf;
              break;
            case "hold":
              a = F.Ff;
              break;
            case "hover":
              a = F.Gf;
              break;
            case "mousemove":
              a = F.If;
              break;
            case "mousewheel":
              a = F.Kf;
              break;
            case "mousedown":
              a = F.Hf;
              break;
            case "mouseup":
              a = F.Jf;
              break;
            case "dragstart":
              a = F.Cf;
              break;
            case "drag":
              a = F.Af;
              break;
            case "dragend":
              a = F.Bf;
              break;
            case "transformstart":
              a = F.Rf;
              break;
            case "transform":
              a = F.Pf;
              break;
            case "transformend":
              a = F.Qf
          }
          var u = !1,
            l = !a.empty(),
            f = h.absolute(i, r),
            p = (t || l) && c(f),
            d = (t || l) && s(f);
          l && (l = p ? p.group : null, f = p ? p.Ub(f, o) : f, i.Lb = void 0, a = a({
            type: e,
            group: l,
            topmostClosedGroup: l,
            bottommostOpenGroup: d ? d.group : null,
            x: i.x,
            y: i.y,
            xAbsolute: f.x,
            yAbsolute: f.y,
            scale: H.B(i.scale, 1),
            secondary: i.wb,
            touches: H.B(i.touches, 1),
            delta: H.B(i.vd, 0),
            ctrlKey: i.ctrlKey,
            metaKey: i.metaKey,
            altKey: i.altKey,
            shiftKey: i.shiftKey,
            preventDefault: function () {
              u = !0
            },
            preventOriginalEventDefault: function () {
              i.Lb = "prevent"
            },
            allowOriginalEventDefault: function () {
              i.Lb = "allow"
            }
          }), u = u || 0 <= a.indexOf(!1), p && p.na && "click" === e && (u = !1)), u || n && n({
            Dc: p,
            Wg: d
          }, i)
        }
      }

      function l(e) {
        function t(e, n) {
          var r = n.e;
          if (r) {
            for (var o, i = -Number.MAX_VALUE, a = 0; a < r.length; a++) {
              var u = r[a];
              !u.description && u.ea && N(u, e) && u.scale > i && (o = u, i = u.scale)
            }
            var l;
            return o && (l = t(e, o)), l || o
          }
        }
        return t(e, y)
      }

      function c(e, t) {
        var n;
        if ("flattened" == F.ab) n = l(e);
        else {
          n = t || 0;
          for (var r = A.length, o = void 0, i = 0; i < r; i++) {
            var a = A[i];
            a.scale > n && !1 === a.open && a.ea && N(a, e) && (o = a, n = a.scale)
          }
          n = o
        }
        return n
      }

      function s(e) {
        var t = void 0,
          n = 0;
        return q.Jc(y, function (r) {
          !0 === r.open && r.ea && r.scale > n && N(r, e) && (t = r, n = r.scale)
        }), t
      }
      var f, h, p, d, b, v, g, y, m, x, w, C, T, S, z, k, M, L, _, j = D.nf(),
        P = this,
        F = e.options,
        O = !1;
      e.c.j("stage:initialized", function (e, t, r, o) {
        f = t, L = r, _ = o, n()
      }), e.c.j("stage:resized", function (e, t, n, r) {
        L = n, _ = r
      }), e.c.j("stage:disposed", function () {
        k.kb(), I.kb(), M.d()
      }), e.c.j("expose:initialized", function (e) {
        d = e
      }), e.c.j("zoom:initialized", function (e) {
        h = e
      }), e.c.j("openclose:initialized", function (e) {
        b = e
      }), e.c.j("select:initialized", function (e) {
        v = e
      }), e.c.j("titlebar:initialized", function (e) {
        g = e
      }), e.c.j("timeline:initialized", function (e) {
        p = e
      });
      var A;
      e.c.j("model:loaded", function (e, t) {
        y = e, A = t
      }), e.c.j("model:childrenAttached", function (e) {
        A = e
      }), this.H = function () {}, this.Aa = o(i("mousedown", !1, function () {
        h.ui()
      })), this.Ba = o(i("mouseup", !1, void 0)), this.d = o(i("click", !0, function (e, t) {
        if (!t.wb && !t.shiftKey) {
          var n = e.Dc;
          n && (n.na ? document.location.href = U.kg("iuuq;..b`ssnurd`sbi/bnl.gn`lusdd") : v.select({
            e: [n],
            Ia: !n.selected,
            Ha: t.metaKey || t.ctrlKey
          }, !0))
        }
      })), this.k = o(i("doubleclick", !0, function (t, n) {
        var r, o;
        n.wb || n.shiftKey ? (r = t.Dc) && (r.parent.U && (r = r.parent), o = {
          e: r.parent !== y ? [r.parent] : [],
          Ia: !0,
          Ha: !1
        }, v.select(o, !0), d.fc(o, !0, !0, !1)) : (r = t.Dc) && (o = {
          e: [r],
          Ia: !0,
          Ha: !1
        }, r.Vb = !0, e.c.p("foamtree:attachChildren"), d.fc(o, !0, !0, !1)), r && p.D.m({}).fb(F.Ua / 2).call(function () {
          b.Jb({
            e: q.Lc(y, function (e) {
              return e.Td && !q.ki(r, e)
            }),
            Ia: !1,
            Ha: !0
          }, !0, !0), r.Td = !0, b.Jb({
            e: [r],
            Ia: !(n.wb || n.shiftKey),
            Ha: !0
          }, !0, !0)
        }).start()
      })), this.ya = o(i("hold", !0, function (e, t) {
        var n, r = !(t.metaKey || t.ctrlKey || t.shiftKey || t.wb);
        (n = r ? e.Dc : e.Wg) && n !== y && !n.empty() && b.Jb({
          e: [n],
          Ia: r,
          Ha: !0
        }, !0, !1)
      })), this.Y = o(i("dragstart", !1, function (e, t) {
        m = t.x, x = t.y, w = Date.now(), O = !0
      })), this.A = o(i("drag", !1, function (e, t) {
        if (O) {
          var n = Date.now();
          S = Math.min(1, n - w), w = n;
          var n = t.x - m,
            r = t.y - x;
          h.si(n, r), C = n, T = r, m = t.x, x = t.y
        }
      })), this.S = o(i("dragend", !1, function () {
        if (O) {
          O = !1;
          var e = Math.sqrt(C * C + T * T) / S;
          4 <= e ? h.ti(e, C, T) : h.wf()
        }
      })), this.Ta = o(i("transformstart", !1, function (e, t) {
        z = 1, m = t.x, x = t.y
      }));
      var G = 1,
        E = !1;
      this.Ja = o(i("transform", !1, function (e, t) {
        var n = t.scale - .01;
        h.Qg(t, n / z, t.x - m, t.y - x), z = n, m = t.x, x = t.y, G = z, E = E || 2 < t.touches
      })), this.cb = o(i("transformend", !1, function () {
        E && .8 > G ? e.c.p("interaction:reset") : r(), E = !1
      })), this.Pa = o(i("mousewheel", !1, function () {
        var e = H.ah(function () {
          r()
        }, 300);
        return function (t, n) {
          var o = F.Gj;
          1 !== o && (o = Math.pow(o, n.vd), j ? (h.Rg(n, o), e()) : h.Yb(n, o, F.wc, R.pa(F.xc)).N(r))
        }
      }())), this.za = o(function () {
        var t, n = void 0,
          r = {},
          o = !1,
          a = i("hover", !1, function () {
            n && (n.Db = !1, n.I = !0), t && (t.Db = !0, t.I = !0), g.update(t), e.c.p("foamtree:dirty", !1)
          }),
          u = i("mousemove", !1, void 0);
        return function (e) {
          if ("out" === e.type) t = void 0, o = t !== n;
          else if (h.absolute(e, r), n && !n.open && N(n, r)) {
            var i = c(r, n.scale);
            i && i != n ? (o = !0, t = i) : o = !1
          } else t = c(r), o = t !== n;
          o && (a(e), n = t, o = !1), n && u(e)
        }
      }()), this.gb = {
        click: t(this.d),
        doubleclick: t(this.k),
        hold: t(this.ya),
        mouseup: t(this.Ba),
        mousedown: t(this.Aa),
        dragstart: t(this.Y),
        drag: t(this.A),
        dragend: t(this.S),
        transformstart: t(this.Ta),
        transform: t(this.Ja),
        transformend: t(this.cb),
        hover: t(this.za),
        mousewheel: t(this.Pa)
      };
      var I = function () {
          function e(e, t) {
            return function (n) {
              n = n.gesture;
              var r = n.center,
                r = B.Je(f, r.pageX, r.pageY, {});
              r.scale = n.scale, r.wb = 1 < n.touches.length, r.touches = n.touches.length, e.call(f, r), (void 0 === r.Lb && t || "prevent" === r.Lb) && n.preventDefault()
            }
          }
          var t, n = {};
          return {
            H: function (e) {
              t = window.Hammer(e, {
                doubletap_interval: 350,
                hold_timeout: 400,
                doubletap_distance: 10
              })
            },
            m: function (r, o, i) {
              n[r] = o, t.on(r, e(o, i))
            },
            kb: function () {
              t && H.Ga(n, function (e, n) {
                t.off(n, e)
              })
            }
          }
        }(),
        N = function () {
          var e = {};
          return function (t, n) {
            return t.Ub(n, e), t.aa && V.Ta(t.aa, e)
          }
        }()
    }

    function y(e) {
      function t(e, t, n, r) {
        var o, i = 0,
          a = [];
        for (o = 0; o < t.length; o++) {
          var u = Math.sqrt(V.d(t[o], t[(o + 1) % t.length]));
          a.push(u), i += u
        }
        for (o = 0; o < a.length; o++) a[o] /= i;
        e[0].x = n.x, e[0].y = n.y;
        var l = u = i = 0;
        for (o = 1; o < e.length; o++) {
          for (var c = e[o], s = .95 * Math.pow(o / e.length, r), i = i + .3819; u < i;) u += a[l], l = (l + 1) % a.length;
          var f = (l - 1 + a.length) % a.length,
            h = 1 - (u - i) / a[f],
            p = t[f].x,
            f = t[f].y,
            d = t[l].x,
            b = t[l].y,
            p = (p - n.x) * s + n.x,
            f = (f - n.y) * s + n.y,
            d = (d - n.x) * s + n.x,
            b = (b - n.y) * s + n.y;
          c.x = p * (1 - h) + d * h, c.y = f * (1 - h) + b * h
        }
      }
      var n = {
        random: {
          Eb: function (e, t) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.x = t.x + Math.random() * t.f, r.y = t.y + Math.random() * t.i
            }
          },
          Zb: "box"
        },
        ordered: {
          Eb: function (e, t) {
            var n = e.slice(0);
            r.lc && n.sort(k), Q.Xb(n, t, !1, r.ce)
          },
          Zb: "box"
        },
        squarified: {
          Eb: function (e, t) {
            var n = e.slice(0);
            r.lc && n.sort(k), Q.ue(n, t, !1, r.ce)
          },
          Zb: "box"
        },
        fisheye: {
          Eb: function (e, n, o) {
            e = e.slice(0), r.lc && e.sort(k), t(e, n, o, .25)
          },
          Zb: "polygon"
        },
        blackhole: {
          Eb: function (e, n, o) {
            e = e.slice(0), r.lc && e.sort(k).reverse(), t(e, n, o, 1)
          },
          Zb: "polygon"
        }
      };
      n.order = n.ordered, n.treemap = n.squarified;
      var r = e.options;
      this.d = function (e, t, o) {
        if (0 < e.length) {
          if (o = n[o.relaxationInitializer || o.initializer || r.fj || "random"], "box" === o.Zb) {
            var i = V.q(t, {});
            o.Eb(e, i), V.qe(e, V.A(i), t)
          } else o.Eb(e, t, V.k(t, {}));
          for (i = e.length - 1; 0 <= i; i--) {
            if (o = e[i], o.description) {
              e = V.re(t, r.Hc, r.bh), o.x = e.x, o.y = e.y;
              break
            }
            if (o.na) {
              e = V.re(t, r.we, r.Sg), o.x = e.x, o.y = e.y;
              break
            }
          }
        }
      }
    }

    function m(e) {
      var t, n = e.options,
        r = new x(e, this),
        o = new w(e, this),
        i = {
          relaxed: r,
          ordered: o,
          squarified: o
        },
        a = i[e.options.Vc] || r;
      this.Bg = 5e-5, e.c.j("model:loaded", function (e) {
        t = e
      }), e.c.j("options:changed", function (e) {
        e.layout && H.Q(i, n.Vc) && (a = i[n.Vc])
      }), this.step = function (e, t, n, r) {
        return a.step(e, t, n, r)
      }, this.complete = function (e) {
        a.complete(e)
      }, this.lf = function (e) {
        return e === t || 2 * Math.sqrt(e.K.ja / (Math.PI * e.e.length)) >= Math.max(n.We, 5e-5)
      }, this.xd = function (e, t) {
        for (var r = Math.pow(n.Ra, e.R), o = n.lb * r, r = n.zd * r, i = e.e, u = i.length - 1; 0 <= u; u--) {
          var l = i[u];
          a.xe(l, r);
          var c = l;
          c.aa = 0 < o ? X.cb(c.o, o) : c.o, c.aa && (V.q(c.aa, c.q), V.se(c.aa, c.K)), l.e && t.push(l)
        }
      }, this.qc = function (e) {
        a.qc(e)
      }, this.Mb = function (e) {
        a.Mb(e)
      }
    }

    function x(e, t) {
      function n(e) {
        if (e.e) {
          e = e.e;
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n.uc = n.rc * f.Rh
          }
        }
      }

      function r(e, r) {
        t.lf(e) && (e.u || (e.u = X.cb(e.o, f.zd * Math.pow(f.Ra, e.R - 1)), e.u && "flattened" == f.ab && "stab" == f.dc && u(e)), e.u && (s.Mb(e), h.d(o(e), e.u, e.group), e.M = !0, r(e)), n(e))
      }

      function o(e) {
        return "stab" == f.dc && 0 < e.e.length && e.e[0].description ? e.e.slice(1) : e.e
      }

      function i(e) {
        var t = o(e);
        return J.S(t, e.u), J.zc(t, e.u), Y.Dg(e) * Math.sqrt(c.K.ja / e.K.ja)
      }

      function a(e) {
        return e < f.bg || 1e-4 > e
      }

      function u(e) {
        var t = f.cc / (1 + f.cc),
          n = V.q(e.u, {}),
          r = {
            x: n.x,
            y: 0
          },
          o = n.y,
          i = n.i,
          a = f.De * Math.pow(f.Ra, e.R - 1),
          u = i * f.Ce,
          l = f.Hc;
        "bottom" == l || 0 <= l && 180 > l ? (l = Math.PI, o += i, i = -1) : (l = 0, i = 1);
        for (var c, s = e.u, h = l, p = 0, d = 1, b = V.k(s, {}), v = b.ja, t = v * t, g = 0; p < d && 20 > g++;) {
          var y = (p + d) / 2;
          r.y = n.y + n.i * y, c = V.Wb(s, r, h), V.k(c[0], b);
          var m = b.ja - t;
          if (.01 >= Math.abs(m) / v) break;
          0 < (0 == h ? 1 : -1) * m ? d = y : p = y
        }
        V.q(c[0], n), (n.i < a || n.i > u) && (r.y = n.i < a ? o + i * Math.min(a, u) : o + i * u, c = V.Wb(e.u, r, l)), e.e[0].o = c[0], e.u = c[1]
      }

      function l(e) {
        e !== c && 2 * Math.sqrt(e.K.ja / (Math.PI * e.e.length)) < Math.max(.85 * f.We, t.Bg) && (e.M = !1, e.Ca = !1, e.Qa = !0, e.u = null)
      }
      var c, s = this,
        f = e.options,
        h = new y(e),
        p = 0;
      e.c.j("model:loaded", function (e) {
        c = e, p = 0
      }), this.step = function (e, n, u, s) {
        for (var h = 0, d = [c]; 0 < d.length;) h = Math.max(h, function (n) {
          if (n.M && n.Ca ? l(n) : n.Qa && n.o && r(n, function () {
              var t = o(n);
              J.S(t, n.u), J.zc(t, n.u), e(n)
            }), !n.u || !n.M) return 0;
          var u;
          return n.parent && n.parent.Z || n.La ? (u = i(n), s && s(n), n.La = !a(u), n.Z = !0) : u = 0, t.xd(n, d), u
        }(d.shift()));
        var b = a(h);
        return n && function (e, t, n) {
          p < e && (p = e);
          var r = f.bg;
          f.Sd(t ? 1 : 1 - (e - r) / (p - r || 1), t, n), t && (p = 0)
        }(h, b, u), b
      }, this.complete = function (e) {
        for (var n = [c]; 0 < n.length;) {
          var o = n.shift();
          if (!o.M && o.Qa && o.o && r(o, e), o.u) {
            if (o.parent && o.parent.Z || o.La) {
              for (var u = 1e-4 > o.K.ja, l = 0; !(a(i(o)) || u && 32 < l++););
              o.Z = !0, o.La = !1
            }
            t.xd(o, n)
          }
        }
      }, this.qc = function (e) {
        q.F(e, n)
      }, this.xe = function (e, t) {
        if (e.M) {
          var n = e.u;
          n && (e.Xd = n), e.u = X.cb(e.o, t), e.u && "flattened" == f.ab && "stab" == f.dc && u(e), n && !e.u && (e.Z = !0), e.u && e.Xd && V.qe(o(e), e.Xd, e.u)
        }
      }, this.Mb = function (e) {
        for (var t, n = o(e), r = e.ja, i = t = 0; i < n.length; i++) t += n[i].T;
        for (e.$j = t, e = 0; e < n.length; e++) i = n[e], i.qg = i.f, i.rc = r / Math.PI * (0 < t ? i.T / t : 1 / n.length)
      }
    }

    function w(e, t) {
      function n(e, n) {
        if (t.lf(e)) {
          if (!e.u || e.parent && e.parent.Z) {
            var r = u.zd * Math.pow(u.Ra, e.R - 1);
            e.u = V.A(o(V.q(e.o, {}), r))
          }
          e.u && (e.M = !0, n(e))
        } else e.M = !1, q.Fa(e, function (e) {
          e.u = null
        })
      }

      function r(e) {
        var t;
        "stab" == u.dc && 0 < e.e.length && e.e[0].description ? (t = e.e.slice(1), function (e) {
          function t() {
            r.o = V.A(o), r.x = o.x + o.f / 2, r.y = o.y + o.i / 2
          }
          var n = u.cc / (1 + u.cc),
            r = e.e[0],
            o = V.q(e.u, {}),
            i = o.i,
            n = Math.min(Math.max(i * n, u.De * Math.pow(u.Ra, e.R - 1)), i * u.Ce),
            a = u.Hc;
          "bottom" == a || 0 <= a && 180 > a ? (o.i = i - n, e.u = V.A(o), o.y += i - n, o.i = n, t()) : (o.i = n, t(), o.y += n, o.i = i - n, e.u = V.A(o))
        }(e)) : t = e.e, u.lc && t.sort(k), "floating" == u.dc && i(t, u.Hc, function (e) {
          return e.description
        }), i(t, u.we, function (e) {
          return e.na
        });
        var n = V.q(e.u, {});
        (l[u.Vc] || Q.Xb)(t, n, !0, u.ce), e.La = !1, e.Z = !0, e.I = !0, e.Ma = !0
      }

      function o(e, t) {
        var n = 2 * t;
        return e.x += t, e.y += t, e.f -= n, e.i -= n, e
      }

      function i(e, t, n) {
        for (var r = 0; r < e.length; r++) {
          var o = e[r];
          if (n(o)) {
            e.splice(r, 1), "topleft" == t || 135 <= t && 315 > t ? e.unshift(o) : e.push(o);
            break
          }
        }
      }
      var a, u = e.options,
        l = {
          squarified: Q.ue,
          ordered: Q.Xb
        };
      e.c.j("model:loaded", function (e) {
        a = e
      }), this.step = function (e, t, n) {
        return this.complete(e), t && u.Sd(1, !0, n), !0
      }, this.complete = function (e) {
        for (var o = [a]; 0 < o.length;) {
          var i = o.shift();
          (!i.M || i.parent && i.parent.Z) && i.Qa && i.o && n(i, e), i.u && ((i.parent && i.parent.Z || i.La) && r(i), t.xd(i, o))
        }
      }, this.Mb = this.qc = this.xe = H.ta
    }

    function C(e, t) {
      function n(e, t) {
        var n = e.K.Nb,
          r = n / 15,
          o = .5 * n / 15,
          n = n / 5,
          i = e.K.x,
          a = e.K.y;
        t.fillRect(i - o, a - o, r, r), t.fillRect(i - o - n, a - o, r, r), t.fillRect(i - o + n, a - o, r, r)
      }

      function r(e, t, n, r) {
        null === e && n.clearRect(0, 0, z, k);
        var o, i = Array(ie.length);
        for (o = ie.length - 1; 0 <= o; o--) i[o] = ie[o].qa(n, r);
        for (o = ie.length - 1; 0 <= o; o--) i[o] && ie[o].W(n, r);
        for (L.Ic([n, C], function (r) {
            var o;
            if (null !== e) {
              for (n.save(), n.globalCompositeOperation = "destination-out", n.fillStyle = n.strokeStyle = "rgba(255, 255, 255, 1)", o = e.length - 1; 0 <= o; o--) {
                var a = e[o],
                  u = a.o;
                u && (n.save(), n.beginPath(), a.Sb(n), E.le(n, u), n.fill(), a = Y.lb * Math.pow(Y.Ra, a.R - 1), 0 < a && (n.lineWidth = a / 2, n.stroke()), n.restore())
              }
              n.restore()
            }
            if (r = r.scale, 0 !== t.length) {
              for (o = {}, u = ie.length - 1; 0 <= u; u--) ie[u].Og(o);
              for (a = $.length - 1; 0 <= a; a--)
                if (u = $[a], o[u.id])
                  for (var l = u.be, u = 0; u < t.length; u++) {
                    var c = t[u];
                    !c.parent || c.parent.Ca && c.parent.M ? l(c, r) : c.ba.clear()
                  }
            }
            for (o = ie.length - 1; 0 <= o; o--) a = ie[o], i[o] && a.ee(t, n, r)
          }), o = ie.length - 1; 0 <= o; o--) i[o] && ie[o].Da(n);
        Y.qd && (n.canvas.style.opacity = .99, setTimeout(function () {
          n.canvas.style.opacity = 1
        }, 1))
      }

      function o(e) {
        d === v ? e < .9 * K && (d = b, y = m, l()) : e >= K && (d = v, y = x, l())
      }

      function i() {
        function e(t, n, r) {
          t.Bb = Math.floor(1e3 * t.scale) - r * n, 0 < t.opacity && !t.open && n++;
          var o = t.e;
          if (o)
            for (var i = o.length - 1; 0 <= i; i--) t.$ && e(o[i], n, r)
        }
        var t = null,
          n = null,
          r = null;
        return L.Ic([], function (i) {
            o(i.scale);
            var u = !1;
            q.F(F, function (e) {
              e.$ && (u = e.Md() || u, e.nc(), e.Wa = X.d(e) || e.Wa)
            }), u && (F.I = !0);
            var l = "onSurfaceDirty" === Y.oh;
            q.wd(F, function (e) {
              e.parent && e.parent.Z && (e.ba.clear(), e.Wa = !0, l || (e.Ec = !0, e.ac.clear())), l && (e.Ec = !0, e.ac.clear())
            });
            var c = i.scale * i.scale;
            if (q.wd(F, function (e) {
                if (e.M) {
                  for (var t = e.e, n = 0; n < t.length; n++)
                    if (5 < t[n].K.ja * c) return void(e.X = !0);
                  e.X = !1
                }
              }), f(i), r = [], q.Kc(F, function (e) {
                if (e.parent.X && e.ea && e.$) {
                  r.push(e);
                  for (var t = e.parent; t !== F && (t.open || 0 === t.opacity);) t = t.parent;
                  t !== F && .02 > Math.abs(t.scale - e.scale) && (e.scale = Math.min(e.scale, t.scale))
                }
              }), e(F, 0, "flattened" == Y.ab ? -1 : 1), r.sort(function (e, t) {
                return e.Bb - t.Bb
              }), a()) t = r, n = null;
            else {
              var s = {},
                h = {},
                p = "none" != Y.Bd && Y.lb < Y.mb / 2,
                d = Y.lb < Y.Qc / 2 + Y.Ad * Y.Ye.a;
              q.F(F, function (e) {
                if (e.$ && !e.description && (e.Z || e.I || e.Xc && e.parent.X && e.Wa)) {
                  var t, n, r = [e],
                    o = e.C || e.parent.e;
                  if (p)
                    for (t = 0; t < o.length; t++)(n = o[t]) && r.push(n);
                  else if (d)
                    if (!e.selected && e.$a) {
                      for (n = !0, t = 0; t < o.length; t++) o[t] ? r.push(o[t]) : n = !1;
                      !n && 1 < e.R && r.push(e.parent)
                    } else
                      for (t = 0; t < o.length; t++)(n = o[t]) && n.selected && r.push(n);
                  var i;
                  for (t = e.parent; t != F;) t.selected && (i = t), t = t.parent;
                  for (i && r.push(i), t = 0; t < r.length; t++) {
                    for (i = r[t], e = i.parent; e && e !== F;) 0 < e.opacity && (i = e), e = e.parent;
                    h[i.id] = !0, q.Fa(i, function (e) {
                      s[e.id] = !0
                    })
                  }
                }
              }), t = r.filter(function (e) {
                return s[e.id]
              }), n = t.filter(function (e) {
                return h[e.id]
              })
            }
          }),
          function () {
            var e = !1;
            Y.ag && q.F(F, function (t) {
              if (t.$ && 0 !== t.sa.a && 1 !== t.sa.a) return e = !0, !1
            }), e ? (q.Jc(F, function (e) {
              if (e.$ && (e.opacity !== e.ad || e.Ma)) {
                var t = e.e;
                if (t) {
                  for (var n = 0, r = t.length - 1; 0 <= r; r--) n = Math.max(n, t[r].Wc);
                  e.Wc = n + e.opacity * e.sa.a
                } else e.Wc = e.opacity * e.sa.a
              }
            }), q.F(F, function (e) {
              if (e.$ && (e.opacity !== e.ad || e.Ma)) {
                for (var t = e.Wc, n = e;
                  (n = n.parent) && n !== F;) t += n.opacity * n.sa.a * Y.Zf;
                e.rd = 0 < t ? 1 - Math.pow(1 - e.sa.a, 1 / t) : 0, e.ad = e.opacity
              }
            })) : q.F(F, function (e) {
              e.$ && (e.rd = 1, e.ad = -1)
            })
          }(), {
            wg: t,
            vg: n,
            ea: r
          }
      }

      function a() {
        var e = F.Z || F.I || "none" == Y.ff;
        if (!e && !F.empty()) {
          var t = F.e[0].scale;
          q.F(F, function (n) {
            if (n.$ && n.ea && n.scale !== t) return e = !0, !1
          })
        }
        return !e && 0 < Y.Se && 1 != Y.Va && q.F(F, function (t) {
          if (t.$ && 0 < t.ka) return e = !0, !1
        }), "accurate" == Y.ff && !(e = (e = e || 0 === Y.lb) || "none" != Y.Bd && Y.lb < Y.mb / 2) && Y.lb < Y.Qc / 2 + Y.Ad * Y.Ye.a && q.F(F, function (t) {
          if (t.$ && (t.selected && !t.$a || !t.selected && t.$a)) return e = !0, !1
        }), e
      }

      function u() {
        if (Y.n !== Y.xb) return !0;
        var e = "polygonPlainFill polygonPlainStroke polygonGradientFill polygonGradientStroke labelPlainFill contentDecoration".split(" ");
        q.F(F, function (t) {
          if (t.$ && t.U) return e.push("polygonExposureShadow"), !1
        });
        for (var t = e.length - 1; 0 <= t; t--) {
          var n = e[t];
          if (!!B[n] != !!U[n]) return !0
        }
        return !1
      }

      function l() {
        function e(e, n, r, o, i) {
          function a(e, t, n, r, o) {
            return e[r] && (t -= n * h[r], e[r] = !1, o && (t += n * h[o], e[o] = !0)), t
          }
          switch (e = H.extend({}, e), r) {
            case "never":
              e.labelPlainFill = !1;
              break;
            case "always":
            case "auto":
              e.labelPlainFill = !0
          }
          if (Y.Oc) switch (o) {
            case "never":
              e.contentDecoration = !1;
              break;
            case "always":
            case "auto":
              e.contentDecoration = !0
          } else e.contentDecoration = !1;
          var u = 0;
          return H.Ga(e, function (e, t) {
            e && (u += n * h["contentDecoration" === t ? "labelPlainFill" : t])
          }), e.polygonExposureShadow = t, (u += 2 * h.polygonExposureShadow) <= i || (u = a(e, u, 2, "polygonExposureShadow")) <= i || (u = a(e, u, n, "polygonGradientFill", "polygonPlainFill")) <= i || (u = a(e, u, n, "polygonGradientStroke")) <= i || (u = a(e, u, n, "polygonPlainStroke")) <= i || "auto" === o && (u = a(e, u, n, "contentDecoration")) <= i ? e : ("auto" === r && (u = a(e, u, n, "labelPlainFill")), e)
        }
        var t = d === b,
          n = 0,
          r = 0;
        q.Ie(F, function (e) {
          var t = 1;
          q.F(e, function () {
            t++
          }), n += t, r = Math.max(r, t)
        });
        var o = {};
        switch (Y.xh) {
          case "plain":
            o.polygonPlainFill = !0;
            break;
          case "gradient":
            o.polygonPlainFill = !t, o.polygonGradientFill = t
        }
        switch (Y.Bd) {
          case "plain":
            o.polygonPlainStroke = !0;
            break;
          case "gradient":
            o.polygonPlainStroke = !t, o.polygonGradientStroke = t
        }
        B = e(o, n, Y.Ej, Y.Cj, Y.Dj), U = e(o, 2 * r, "always", "always", Y.hh), W = e(o, n, "always", "always", Y.gh)
      }

      function c(e) {
        return function (t, n) {
          return t === d ? !0 === B[e] : !0 === (n ? U : W)[e]
        }
      }

      function s(e, t) {
        return function (n, r) {
          return e(n, r) && t(n, r)
        }
      }

      function f(e) {
        F.ea = !0, q.wd(F, function (t) {
          if (t.$ && t.X && t.Ca && t.M && (F.I || t.Z || t.me)) {
            t.me = !1;
            var n = t.e,
              r = {
                x: 0,
                y: 0,
                f: 0,
                i: 0
              },
              o = !!t.u;
            if (1 < z / e.f) {
              var i;
              for (i = n.length - 1; 0 <= i; i--) n[i].ea = !1;
              if (t.ea && o)
                for (i = n.length - 1; 0 <= i; i--)
                  if (t = n[i], 1 !== t.scale && (t.Ub(e, r), r.f = e.f / t.scale, r.i = e.i / t.scale), !1 === t.ea && t.o) {
                    var o = t.o,
                      a = o.length;
                    if (V.Ta(t.o, 1 === t.scale ? e : r)) t.ea = !0;
                    else
                      for (var u = 0; u < a; u++)
                        if (V.Mg(o[u], o[(u + 1) % a], 1 === t.scale ? e : r)) {
                          t.ea = !0, t.C && (t = t.C[u]) && (n[t.index].ea = !0);
                          break
                        }
                  }
            } else
              for (i = 0; i < n.length; i++) n[i].ea = o
          }
        })
      }
      var h, p, d, b, v, g, y, m, x, w, C, z, k, M, L, _, P, F, O, B, W, U, K = D.pf() ? 50 : 1e4,
        X = new T(e),
        J = new S(e),
        Y = e.options;
      e.c.j("stage:initialized", function (e, t, n, r) {
        M = e, z = n, k = r, p = M.oc("wireframe", Y.xb, !1), b = p.getContext("2d"), v = new A(b), g = M.oc("hifi", Y.n, !1), m = g.getContext("2d"), x = new A(m), d = b, y = m, b.n = Y.xb, v.n = Y.xb, m.n = Y.n, x.n = Y.n, w = M.oc("tmp", Math.max(Y.n, Y.xb), !0), C = w.getContext("2d"), C.n = 1, [b, m, C].forEach(function (e) {
          e.scale(e.n, e.n)
        })
      }), e.c.j("stage:resized", function (e, t, n, r) {
        z = n, k = r, [b, m, C].forEach(function (e) {
          e.scale(e.n, e.n)
        })
      }), e.c.j("model:loaded", function (t) {
        function n(e) {
          var t = 0;
          if (!e.empty()) {
            for (var r = e.e, o = r.length - 1; 0 <= o; o--) t = Math.max(t, n(r[o]));
            t += 1
          }
          return e.ng = t
        }
        F = t, O = !0, n(F), l(), e.c.p("render:renderers:resolved", B, U, W)
      });
      var Z = "groupFillType groupStrokeType wireframeDrawMaxDuration wireframeLabelDrawing wireframeContentDecorationDrawing finalCompleteDrawMaxDuration finalIncrementalDrawMaxDuration groupContentDecorator".split(" "),
        Q = ["groupLabelLightColor", "groupLabelDarkColor", "groupLabelColorThreshold", "groupUnexposureLabelColorThreshold"];
      e.c.j("options:changed", function (e) {
        function t(e, t, n, r) {
          M.ej(e, n), t.n = n, r && t.scale(n, n)
        }
        e.dataObject || (H.nb(e, Z) && l(), H.nb(e, Q) && q.F(F, function (e) {
          e.yd = -1
        }));
        var n = H.Q(e, "pixelRatio");
        e = H.Q(e, "wireframePixelRatio"), (n || e) && (n && t(g, y, Y.n, !0), e && t(p, d, Y.xb, !0), t(w, C, Math.max(Y.n, Y.xb), !1))
      }), e.c.j("zoom:initialized", function (e) {
        L = e
      }), e.c.j("timeline:initialized", function (e) {
        _ = e
      }), e.c.j("api:initialized", function (e) {
        P = e
      });
      var $ = [{
          id: "offsetPolygon",
          be: function (e) {
            if ((e.selected || 0 < e.opacity && !1 === e.open || !e.X) && e.ba.Na()) {
              var t = e.ba;
              if (t.clear(), e.aa) {
                var n = e.aa,
                  r = Y.jh;
                0 < r ? (r = Math.min(1, r * Math.pow(1 - Y.kh * r, e.ng)), E.qj(t, n, e.parent.K.Nb / 32, r)) : E.le(t, n)
              }
              e.Vd = !0
            }
          }
        }, {
          id: "label",
          be: function (e) {
            e.Wa && e.Xc && X.k(e)
          }
        }, {
          id: "custom",
          be: function (t, n) {
            if (t.aa && (0 < t.opacity && (!1 === t.open || !0 === t.selected) || !t.X) && t.Ec && e.options.Oc && !t.na) {
              var r = {};
              P.od(r, t), P.pd(r, t), P.nd(r, t, !0), r.context = t.ac, r.polygonContext = t.ba, r.labelContext = t.Tc, r.shapeDirty = t.Vd, r.viewportScale = n;
              var o = {
                groupLabelDrawn: !0,
                groupPolygonDrawn: !0
              };
              e.options.nh(e.Ud, r, o), o.groupLabelDrawn || (t.qf = !1), o.groupPolygonDrawn || (t.Wd = !1), t.Vd = !1, t.Ec = !1
            }
          }
        }].reverse(),
        ie = [new function (e) {
          var t = Array(e.length);
          this.ee = function (n, r, o) {
            if (0 !== n.length) {
              var i, a, u = [],
                l = n[0].Bb;
              for (i = 0; i < n.length; i++) a = n[i], a.Bb !== l && (u.push(i), l = a.Bb);
              u.push(i);
              for (var c = l = 0; c < u.length; c++) {
                for (var s = u[c], f = e.length - 1; 0 <= f; f--)
                  if (t[f]) {
                    var h = e[f];
                    for (r.save(), i = l; i < s; i++) a = n[i], r.save(), a.Sb(r), h.vb.call(h, a, r, o), r.restore();
                    h.hb.call(h, r, o), r.restore()
                  } l = s
              }
            }
          }, this.qa = function (n, r) {
            for (var o = !1, i = e.length - 1; 0 <= i; i--) t[i] = e[i].qa(n, r), o |= t[i];
            return o
          }, this.W = function (n, r) {
            for (var o = e.length - 1; 0 <= o; o--)
              if (t[o]) {
                var i = e[o];
                i.W.call(i, n, r)
              }
          }, this.Da = function (n) {
            for (var r = e.length - 1; 0 <= r; r--)
              if (t[r]) {
                var o = e[r];
                o.Da.call(o, n)
              }
          }, this.Og = function (n) {
            for (var r = e.length - 1; 0 <= r; r--) {
              var o = e[r];
              if (t[r])
                for (var i = o.Za.length - 1; 0 <= i; i--) n[o.Za[i]] = !0
            }
          }
        }([{
          Za: ["offsetPolygon"],
          qa: c("polygonExposureShadow"),
          W: function (e) {
            C.save(), C.scale(e.n, e.n)
          },
          Da: function () {
            C.restore()
          },
          d: function () {},
          hb: function (e) {
            this.mg && (this.mg = !1, e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.drawImage(w, 0, 0, e.canvas.width, e.canvas.height, 0, 0, e.canvas.width, e.canvas.height), e.restore(), C.save(), C.setTransform(1, 0, 0, 1, 0, 0), C.clearRect(0, 0, w.width, w.height), C.restore())
          },
          vb: function (e, t, n) {
            if (!(e.open && e.X || e.ba.Na())) {
              var r = Y.Se * e.opacity * e.ka * ("flattened" == Y.ab ? 1 - e.parent.ka : (1 - e.Kb) * e.parent.Kb) * (1.1 <= Y.Va ? 1 : (Y.Va - 1) / .1);
              0 < r && (C.save(), C.beginPath(), e.Sb(C), e.ba.Sa(C), C.shadowBlur = n * t.n * r, C.shadowColor = Y.ph, C.fillStyle = "rgba(0, 0, 0, 1)", C.globalCompositeOperation = "source-over", C.globalAlpha = e.opacity, C.fill(), C.shadowBlur = 0, C.shadowColor = "transparent", C.globalCompositeOperation = "destination-out", C.fill(), C.restore(), this.mg = !0)
            }
          }
        }, {
          Za: ["offsetPolygon"],
          qa: function () {
            return !0
          },
          W: function () {
            function e(e) {
              var n = e.sa,
                r = e.Db,
                o = e.selected,
                i = t(n.l * e.va + (r ? Y.Ch : 0) + (o ? Y.Th : 0)),
                a = t(n.s * e.wa + (r ? Y.Dh : 0) + (o ? Y.Uh : 0));
              return e = e.Re, e.h = (n.h + (r ? Y.Bh : 0) + (o ? Y.Sh : 0)) % 360, e.s = a, e.l = i, e
            }

            function t(e) {
              return 100 < e ? 100 : 0 > e ? 0 : e
            }
            var n = [{
                type: "fill",
                qa: c("polygonPlainFill"),
                gd: function (t, n) {
                  n.fillStyle = I.Ac(e(t))
                }
              }, {
                type: "fill",
                qa: c("polygonGradientFill"),
                gd: function (n, r) {
                  var o = n.K.Nb,
                    i = e(n),
                    o = r.createRadialGradient(n.x, n.y, 0, n.x, n.y, o * Y.th);
                  o.addColorStop(0, I.Y((i.h + Y.qh) % 360, t(i.s + Y.sh), t(i.l + Y.rh))), o.addColorStop(1, I.Y((i.h + Y.uh) % 360, t(i.s + Y.wh), t(i.l + Y.vh))), n.ba.Sa(r), r.fillStyle = o
                }
              }, {
                type: "stroke",
                qa: s(c("polygonPlainStroke"), function () {
                  return 0 < Y.mb
                }),
                gd: function (e, n) {
                  var r = e.sa,
                    o = e.Db,
                    i = e.selected;
                  n.strokeStyle = I.Y((r.h + Y.bf + (o ? Y.Te : 0) + (i ? Y.Ze : 0)) % 360, t(r.s * e.wa + Y.df + (o ? Y.Ve : 0) + (i ? Y.af : 0)), t(r.l * e.va + Y.cf + (o ? Y.Ue : 0) + (i ? Y.$e : 0))), n.lineWidth = Y.mb * Math.pow(Y.Ra, e.R - 1)
                }
              }, {
                type: "stroke",
                qa: s(c("polygonGradientStroke"), function () {
                  return 0 < Y.mb
                }),
                gd: function (e, n) {
                  var r = e.K.Nb * Y.$h,
                    o = e.sa,
                    i = Math.PI * Y.Wh / 180,
                    r = n.createLinearGradient(e.x + r * Math.cos(i), e.y + r * Math.sin(i), e.x + r * Math.cos(i + Math.PI), e.y + r * Math.sin(i + Math.PI)),
                    a = e.Db,
                    u = e.selected,
                    i = (o.h + Y.bf + (a ? Y.Te : 0) + (u ? Y.Ze : 0)) % 360,
                    l = t(o.s * e.wa + Y.df + (a ? Y.Ve : 0) + (u ? Y.af : 0)),
                    o = t(o.l * e.va + Y.cf + (a ? Y.Ue : 0) + (u ? Y.$e : 0));
                  r.addColorStop(0, I.Y((i + Y.Xh) % 360, t(l + Y.Zh), t(o + Y.Yh))), r.addColorStop(1, I.Y((i + Y.ai) % 360, t(l + Y.ci), t(o + Y.bi))), n.strokeStyle = r, n.lineWidth = Y.mb * Math.pow(Y.Ra, e.R - 1)
                }
              }],
              r = Array(n.length);
            return function (e, t) {
              for (var o = n.length - 1; 0 <= o; o--) r[o] = n[o].qa(e, t);
              this.uj = n, this.Xg = r
            }
          }(),
          Da: function () {},
          d: function () {},
          hb: function () {},
          vb: function (e, t) {
            if (e.Wd && !((0 === e.opacity || e.open) && e.X || e.ba.Na() || !Y.Ee && e.description)) {
              var n = this.uj,
                r = this.Xg;
              t.beginPath(), e.ba.Sa(t);
              for (var o = !1, i = !1, a = n.length - 1; 0 <= a; a--) {
                var u = n[a];
                if (r[a]) switch (u.gd(e, t), u.type) {
                  case "fill":
                    o = !0;
                    break;
                  case "stroke":
                    i = !0
                }
              }
              n = (e.X ? e.opacity : 1) * e.sa.a, r = !e.empty(), a = Y.ag ? e.rd : 1, o && (o = r && e.X && e.M && e.e[0].$ ? 1 - e.e.reduce(function (e, t) {
                return e + t.ua * t.Zd
              }, 0) / e.e.length * (1 - Y.Zf) : 1, t.globalAlpha = n * o * a, te(t)), i && (t.globalAlpha = n * (r ? Y.vi : 1) * a, t.closePath(), ne(t), t.stroke())
            }
          }
        }, {
          Za: ["offsetPolygon"],
          qa: function () {
            return 0 < Y.Qc
          },
          W: function () {},
          Da: function () {},
          d: function () {},
          hb: function () {},
          vb: function (e, t, n) {
            if (e.Wd && e.selected && !e.ba.Na()) {
              t.globalAlpha = e.Ka, t.beginPath();
              var r = Math.pow(Y.Ra, e.R - 1);
              t.lineWidth = Y.Qc * r, t.strokeStyle = Y.Vh;
              var o = Y.Ad;
              0 < o && (t.shadowBlur = o * r * n * t.n, t.shadowColor = Y.Xe), e.ba.Sa(t), t.closePath(), t.stroke()
            }
          }
        }, {
          Za: [],
          qa: function () {
            return !0
          },
          W: function () {},
          Da: function () {},
          d: function () {},
          hb: function () {},
          vb: function (e, t) {
            e.na && !e.ba.Na() && function (n) {
              var r = ee.yc.width,
                o = ee.yc.height,
                i = V.te(e.aa, e.K, r / o),
                i = Math.min(Math.min(.9 * i, .5 * e.q.i) / o, .5 * e.q.f / r);
              t.save(), t.translate(e.x, e.y), t.globalAlpha = e.opacity * e.fa, t.scale(i, i), t.translate(-r / 2, -o / 2), n(t), t.restore()
            }(function (e) {
              ee.Gg(e)
            })
          }
        }, {
          Za: [],
          qa: function (e, t) {
            return function (n, r) {
              return e(n, r) || t(n, r)
            }
          }(c("labelPlainFill"), s(c("contentDecoration"), function () {
            return Y.Oc
          })),
          W: function () {},
          Da: function () {},
          d: function () {},
          hb: function () {},
          vb: function (e, t, n) {
            (0 < e.opacity && 0 < e.fa && !e.open || !e.X) && !e.ba.Na() && (e.Uc = e.ra && e.ra.la && Y.n * e.ra.fontSize * e.scale * n >= Y.Ph, !Y.Ee && e.description ? e.qb = e.parent.qb : "auto" === e.Gd ? (t = e.Re, n = t.h + (t.s << 9) + (t.l << 16), e.yd !== n && (e.qb = I.Cg(t) > (0 > e.ka ? Y.di : Y.Eh) ? Y.Fh : Y.Oh, e.yd = n)) : e.qb = e.Gd)
          }
        }, {
          Za: ["custom"],
          qa: s(c("contentDecoration"), function () {
            return Y.Oc
          }),
          W: function () {},
          Da: function () {},
          d: function () {},
          hb: function () {},
          vb: function (e, t) {
            !(0 < e.opacity && 0 < e.fa && !e.open || !e.X) || e.ac.Na() || e.ba.Na() || (e.Uc || void 0 === e.ra ? (t.globalAlpha = e.fa * (e.X ? e.opacity : 1) * (e.empty() ? 1 : Y.$f), t.fillStyle = e.qb, t.strokeStyle = e.qb, e.ac.Sa(t)) : n(e, t))
          }
        }, {
          Za: ["label"],
          qa: c("labelPlainFill"),
          W: function () {},
          Da: function () {},
          d: function () {},
          hb: function () {},
          vb: function (e, t, r) {
            e.qf && e.Xc && (0 < e.opacity && 0 < e.fa && !e.open || !e.X) && !e.ba.Na() && e.ra && (t.fillStyle = e.qb, t.globalAlpha = e.fa * (e.X ? e.opacity : 1) * (e.empty() ? 1 : Y.$f), e.Uc ? oe(e, t, r) : n(e, t))
          }
        }].reverse())];
      this.H = function () {
        h = N.ji(function () {
          return G.eh()
        }, "CarrotSearchFoamTree", 12096e5)(j()), J.H()
      }, this.clear = function () {
        d.clearRect(0, 0, z, k), y.clearRect(0, 0, z, k)
      }, this.ee = function () {
        function e() {
          window.clearTimeout(n), n = setTimeout(function () {
            if (u()) {
              var e = !a();
              r(null, o.ea, y, e), H.defer(function () {
                ae.rj()
              })
            }
          }, Math.max(Y.Fj, 3 * t.rg.Jd, 3 * t.rg.Id))
        }
        var n, o;
        return function (t) {
          re(J), o = i();
          var n = null !== o.vg,
            a = 0 < M.kc("hifi"),
            u = a && (n || !t);
          t = n || O || !t, O = !1, a && !u && ae.sj(), r(o.vg, o.wg, u ? y : d, t), q.Fa(F, function (e) {
            e.Z = !1, e.I = !1, e.$a = !1
          }), u || e(), Y.Vf(n)
        }
      }(), this.d = function (e) {
        e = e || {}, re(J), F.I = !0;
        var t = i(),
          n = Y.n;
        try {
          var o = H.B(e.pixelRatio, Y.n);
          Y.n = o;
          var a = M.oc("export", o, !0),
            u = a.getContext("2d");
          d === v && (u = new A(u)), u.scale(o, o);
          var l = H.Q(e, "backgroundColor");
          l && (u.save(), u.fillStyle = e.backgroundColor, u.fillRect(0, 0, z, k), u.restore()), r(l ? [] : null, t.wg, u, !0)
        } finally {
          Y.n = n
        }
        return a.toDataURL(H.B(e.format, "image/png"), H.B(e.quality, .8))
      };
      var ae = function () {
        function e(e, t, r, o) {
          function i(e, t, n, r) {
            return _.D.m({
              opacity: M.kc(e)
            }).ia({
              duration: n,
              G: {
                opacity: {
                  end: t,
                  P: r
                }
              },
              ca: function () {
                M.kc(e, this.opacity)
              }
            }).xa()
          }
          var a = H.Ed(M.kc(e), 1),
            u = H.Ed(M.kc(r), 0);
          if (!a || !u) {
            for (var l = n.length - 1; 0 <= l; l--) n[l].stop();
            return n = [], a || n.push(i(e, 1, t, R.Qb)), u || n.push(i(r, 0, o, R.og)), _.D.m({}).Ya(n).start()
          }
        }
        var t, n = [];
        return {
          sj: function () {
            Y.qd ? 1 !== p.style.opacity && (p.style.visibility = "visible", g.style.visibility = "hidden", p.style.opacity = 1, g.style.opacity = 0) : t && t.Fb() || (t = e("wireframe", Y.Ne, "hifi", Y.Ne))
          },
          rj: function () {
            Y.qd ? (g.style.visibility = "visible", p.style.visibility = "hidden", p.style.opacity = 0, g.style.opacity = 1) : e("hifi", Y.yg, "wireframe", Y.yg)
          }
        }
      }();
      return re = function (e) {
        e.apply()
      }, te = function (e) {
        e.fill()
      }, ne = function (e) {
        e.stroke()
      }, this
    }

    function T(e) {
      function t(e) {
        return o.Nh ? (l.fontFamily = i.fontFamily, l.fontStyle = i.fontStyle, l.fontVariant = i.fontVariant, l.fontWeight = i.fontWeight, l.lineHeight = i.lineHeight, l.horizontalPadding = i.ob, l.verticalPadding = i.eb, l.maxTotalTextHeight = i.sb, l.maxFontSize = i.rb, r.Cc(o.Mh, e, l), a.fontFamily = l.fontFamily, a.fontStyle = l.fontStyle, a.fontVariant = l.fontVariant, a.fontWeight = l.fontWeight, a.lineHeight = l.lineHeight, a.ob = l.horizontalPadding, a.eb = l.verticalPadding, a.sb = l.maxTotalTextHeight, a.rb = l.maxFontSize, a) : i
      }

      function n(e) {
        void 0 !== e.groupLabelFontFamily && (i.fontFamily = e.groupLabelFontFamily), void 0 !== e.groupLabelFontStyle && (i.fontStyle = e.groupLabelFontStyle), void 0 !== e.groupLabelFontVariant && (i.fontVariant = e.groupLabelFontVariant), void 0 !== e.groupLabelFontWeight && (i.fontWeight = e.groupLabelFontWeight), void 0 !== e.groupLabelLineHeight && (i.lineHeight = e.groupLabelLineHeight), void 0 !== e.groupLabelHorizontalPadding && (i.ob = e.groupLabelHorizontalPadding), void 0 !== e.groupLabelVerticalPadding && (i.eb = e.groupLabelVerticalPadding), void 0 !== e.groupLabelMaxTotalHeight && (i.sb = e.groupLabelMaxTotalHeight), void 0 !== e.groupLabelMaxFontSize && (i.rb = e.groupLabelMaxFontSize)
      }
      var r, o = e.options,
        i = {},
        a = {},
        u = {
          groupLabel: ""
        },
        l = {};
      e.c.j("api:initialized", function (e) {
        r = e
      }), e.c.j("options:changed", n), n(e.Ud), this.d = function (e) {
        if (!e.aa) return !1;
        var t = e.group.label;
        return o.Hh && !e.na && (u.labelText = t, r.Cc(o.Gh, e, u), t = u.labelText), e.rf = t, e.Hd != t
      }, this.k = function (e) {
        var n = e.rf;
        e.Hd = n, e.Tc.clear(), e.ra = void 0, !e.aa || H.kf(n) || "flattened" == o.ab && !e.empty() && e.M || (e.ra = Z.ye(t(e), e.Tc, n, e.aa, e.q, e.K, !1, !1, e.li, e.K.ja, o.Qh, e.Wa)), e.Wa = !1
      }, oe = this.A = function (e, t) {
        e.Tc.Sa(t)
      }
    }

    function S(e) {
      function t(e, t) {
        var n, r, o = e.e,
          a = o.length,
          u = i.K.Nb;
        for (n = 0; n < a; n++) r = o[n], r.Cb = (180 * (Math.atan2(r.x - e.x, r.y - e.y) + t) / Math.PI + 180) / 360, r.Nc = Math.min(1, Math.sqrt(V.d(r, e)) / u)
      }

      function n(e, t) {
        var n = e.e,
          r = n.length;
        if (1 === r || 2 === r && n[0].description) n[0].Cb = .5;
        else {
          var o, i, a = 0,
            u = Number.MAX_VALUE,
            l = Math.sin(t),
            c = Math.cos(t);
          for (o = 0; o < r; o++) {
            i = n[o];
            var s = i.x * l + i.y * c;
            a < s && (a = s), u > s && (u = s), i.Cb = s, i.Nc = 1
          }
          for (o = 0; o < r; o++) i = n[o], i.Cb = (i.Cb - u) / (a - u)
        }
      }

      function r(e, t, n, r) {
        return (t = t[r]) + (n[r] - t) * e
      }
      var o, i, a = {
          radial: t,
          linear: n
        },
        u = e.options,
        l = {
          groupColor: null,
          labelColor: null
        };
      return e.c.j("model:loaded", function (e) {
        i = e
      }), e.c.j("api:initialized", function (e) {
        o = e
      }), this.H = function () {}, this.apply = function () {
        function e(t) {
          if (t.M && t.Ca) {
            var n, i, a = t.e;
            if (t.Z || t.Ma || b) {
              for (0 === t.R ? s(t, u.Ui * Math.PI / 180) : f(t, u.Yi * Math.PI / 180), n = a.length - 1; 0 <= n; n--) {
                i = a[n], i.Ma = !0;
                var y, m, x, w, C = i.Cb,
                  T = i.Qe;
                0 === t.R ? (y = r(C, h, p, "h"), m = (g + (1 - g) * i.Nc) * r(C, h, p, "s"), x = (1 + (0 > i.ka ? v * (i.ka + 1) : v) * (1 - i.Nc)) * r(C, h, p, "l"), w = r(C, h, p, "a")) : (x = t.sa, y = x.h, m = x.s, x = c(x.l, C, u.Zi, u.$i), w = t.Qe.a), T.h = y, T.s = m, T.l = x, T.a = w, y = i.sa, i.na ? (y.h = 0, y.s = 0, y.l = "light" == u.Tg ? 90 : 10, y.a = 1) : (y.h = T.h, y.s = T.s, y.l = T.l, y.a = T.a), b && !i.na && (l.groupColor = y, l.labelColor = "auto", o.Cc(d, i, l, function (e) {
                  e.ratio = C
                }), i.sa = I.Ba(l.groupColor), i.sa.a = H.Q(l.groupColor, "a") ? l.groupColor.a : 1, "auto" !== l.labelColor && (i.Gd = I.Ng(l.labelColor)))
              }
              t.Ma = !1
            }
            for (n = a.length - 1; 0 <= n; n--) e(a[n])
          }
        }

        function c(e, t, n, r) {
          var o = 0 > e + n * r ? 0 : 100 < e + n * r ? 100 : e + n * r;
          return o + t * ((0 > e - n * (1 - r) ? 0 : 100 < e - n * (1 - r) ? 100 : e - n * (1 - r)) - o)
        }
        var s = a[u.Ti] || t,
          f = n,
          h = u.cj,
          p = u.Wi,
          d = u.lh,
          b = u.mh,
          v = u.Xi,
          g = u.aj;
        e(i)
      }, this
    }

    function z() {
      this.uc = this.pe = this.rc = this.qg = this.f = this.xg = this.T = this.y = this.x = this.id = 0, this.o = this.parent = this.e = null, this.q = {
        x: 0,
        y: 0,
        f: 0,
        i: 0
      }, this.C = null, this.Hd = this.rf = void 0, this.kd = !1, this.Nc = this.Cb = 0, this.Qe = {
        h: 0,
        s: 0,
        l: 0,
        a: 0,
        model: "hsla"
      }, this.sa = {
        h: 0,
        s: 0,
        l: 0,
        a: 0,
        model: "hsla"
      }, this.Re = {
        h: 0,
        s: 0,
        l: 0,
        model: "hsl"
      }, this.yd = -1, this.Gd = "auto", this.qb = "#000", this.ng = this.R = this.Dd = this.index = 0, this.na = !1, this.ja = this.vf = 0, this.ea = !1, this.aa = null, this.K = {
        x: 0,
        y: 0,
        ja: 0,
        Nb: 0
      }, this.Xd = this.u = null, this.Xc = this.$ = this.$a = this.Ec = this.me = this.Vd = this.Wa = this.Ma = this.I = this.Z = this.La = this.Ca = this.M = this.Qa = !1, this.wa = this.va = this.Ka = this.fa = this.opacity = this.scale = 1, this.ua = 0, this.Zd = 1, this.Kb = this.ka = this.Gb = 0, this.description = this.selected = this.Db = this.Td = this.open = this.U = !1, this.Bb = 0, this.qf = this.Wd = this.X = !0, this.ra = void 0, this.Uc = !1, this.Tc = new O, this.ba = new O, this.ac = new O, this.li = Z.xi(), this.Wc = 0, this.rd = 1, this.ad = -1, this.empty = function () {
        return !this.e || 0 === this.e.length
      };
      var e = [];
      this.Bc = function (t) {
        e.push(t)
      }, this.ed = function (t) {
        H.cg(e, t)
      };
      var t = {
        scale: 1
      };
      this.Md = function () {
        var n = !1;
        this.scale = 1;
        for (var r = 0; r < e.length; r++) n = e[r].sf(this, t) || n, this.scale *= t.scale;
        return n
      }, this.Sb = function (t) {
        for (var n = 0; n < e.length; n++) e[n].Sb(this, t)
      }, this.Tb = function (t, n) {
        n.x = t.x, n.y = t.y;
        for (var r = 0; r < e.length; r++) e[r].Tb(this, n, n);
        return n
      }, this.Ub = function (t, n) {
        n.x = t.x, n.y = t.y;
        for (var r = 0; r < e.length; r++) e[r].Ub(this, n, n);
        return n
      };
      var n = [];
      this.zb = function (e) {
        n.push(e)
      }, this.dd = function (e) {
        H.cg(n, e)
      };
      var r = {
        opacity: 1,
        wa: 1,
        va: 1,
        fa: 1,
        Ka: 1
      };
      this.nc = function () {
        if (0 !== n.length) {
          this.Ka = this.fa = this.va = this.wa = this.opacity = 1;
          for (var e = n.length - 1; 0 <= e; e--)(0, n[e])(this, r), this.opacity *= r.opacity, this.va *= r.va, this.wa *= r.wa, this.fa *= r.fa, this.Ka *= r.Ka
        }
      }
    }

    function k(e, t) {
      return t.T > e.T ? 1 : t.T < e.T ? -1 : e.index - t.index
    }

    function M(e) {
      var t, n, r, o, i, a, u = this,
        l = e.options;
      e.c.j("stage:initialized", function (i, a, c, s) {
        r = c, o = s, t = i.oc("titlebar", l.n, !1), n = t.getContext("2d"), n.n = l.n, n.scale(n.n, n.n), e.c.p("titlebar:initialized", u)
      }), e.c.j("stage:resized", function (e, t, i, a) {
        r = i, o = a, n.scale(n.n, n.n)
      }), e.c.j("zoom:initialized", function (e) {
        a = e
      }), e.c.j("api:initialized", function (e) {
        i = e
      }), e.c.j("model:loaded", function () {
        n.clearRect(0, 0, r, o)
      }), this.update = function (e) {
        if (n.clearRect(0, 0, r, o), e) {
          !e.empty() && e.e[0].description && (e = e.e[0]);
          var t = l.zj,
            u = l.yj,
            c = Math.min(o / 2, l.ne + 2 * t),
            s = c - 2 * t,
            f = r - 2 * u;
          if (!(0 >= s || 0 >= f)) {
            var h, p = e.Uc ? e.ra.fontSize * e.scale * a.scale() : 0,
              d = {
                titleBarText: e.Hd,
                titleBarTextColor: l.ug,
                titleBarBackgroundColor: l.tg,
                titleBarMaxFontSize: l.ne,
                titleBarShown: p < l.qi
              };
            e.na ? h = U.kg("B`ssnu!Rd`sbi!Gn`lUsdd!whrt`mh{`uhno/!Bmhbj!uid!mnfn!un!fn!un!iuuq;..b`ssnurd`sbi/bnl.gn`lusdd!gns!lnsd!edu`hmr/") : (i.Cc(l.vj, e, d, function (e) {
              e.titleBarWidth = f, e.titleBarHeight = s, e.labelFontSize = p, e.viewportScale = a.scale()
            }), h = d.titleBarText), h && 0 !== h.length && d.titleBarShown && (e = a.md(e.Tb(e, {}), {}).y > o / 2, t = {
              x: u,
              y: e ? t : o - c + t,
              f: f,
              i: s
            }, u = V.A(t), n.fillStyle = l.tg, n.fillRect(0, e ? 0 : o - c, r, c), n.fillStyle = l.ug, Z.Me({
              fontFamily: l.wj || l.Ih,
              fontStyle: l.Xj || l.Jh,
              fontWeight: l.Zj || l.Lh,
              fontVariant: l.Yj || l.Kh,
              rb: l.ne,
              Yc: l.xj,
              ob: 0,
              eb: 0,
              sb: 1
            }, n, h, u, t, {
              x: t.x + t.f / 2,
              y: t.y + t.i / 2
            }, !0, !0).la || n.clearRect(0, 0, r, o))
          }
        }
      }
    }

    function L(e) {
      function t(e, t, n) {
        return m = !0, s && s.stop(), f && f.stop(), l(d.reset(e), t, n).N(function () {
          m = !1
        })
      }

      function o(t) {
        d.update(t), h.I = !0, e.c.p("foamtree:dirty", !0)
      }

      function i(e, t) {
        return d.d((0 !== d.k() ? .35 : 1) * e, (0 !== d.A() ? .35 : 1) * t)
      }

      function a() {
        if (1 === b.Ob) {
          var e = Math.round(1e4 * d.k()) / 1e4;
          0 !== e && (v.$d = e, s = p.D.tc(v).ia({
            duration: 500,
            G: {
              x: {
                start: e,
                end: 0,
                P: R.Qb
              }
            },
            ca: function () {
              d.d(v.x - v.$d, 0), o(1), v.$d = v.x
            }
          }).start())
        }
      }

      function u() {
        if (1 === b.Ob) {
          var e = Math.round(1e4 * d.A()) / 1e4;
          0 !== e && (g.ae = e, f = p.D.tc(g).ia({
            duration: 500,
            G: {
              y: {
                start: e,
                end: 0,
                P: R.Qb
              }
            },
            ca: function () {
              d.d(0, g.y - g.ae), o(1), g.ae = g.y
            }
          }).start())
        }
      }

      function l(e, t, n) {
        return e ? p.D.tc(b).ia({
          duration: void 0 === t ? 700 : t,
          G: {
            Ob: {
              start: 0,
              end: 1,
              P: n || R.pg
            }
          },
          ca: function () {
            o(b.Ob)
          }
        }).bb() : (new r).J().L()
      }

      function c(e) {
        return function () {
          return m ? (new r).J().L() : e.apply(this, arguments)
        }
      }
      var s, f, h, p, d = new n(e),
        b = {
          Ob: 1
        },
        v = {
          Fe: 0,
          x: 0,
          $d: 0
        },
        g = {
          Ge: 0,
          y: 0,
          ae: 0
        },
        y = this,
        m = !1;
      e.c.j("model:loaded", function (e) {
        h = e, d.reset(!1), d.update(1)
      }), e.c.j("timeline:initialized", function (e) {
        p = e
      }), this.H = function () {
        e.c.p("zoom:initialized", this)
      }, this.reset = function (e, n) {
        return d.Pb(1), t(!0, e, n)
      }, this.normalize = c(function (e, n) {
        d.Gc(1) ? t(!1, e, n) : y.wf()
      }), this.wf = function () {
        a(), u()
      }, this.k = c(function (e, t, n, r) {
        return y.sc(e.q, t, n, r)
      }), this.Yb = c(function (e, t, n, r) {
        return l(d.Yb(e, t), n, r)
      }), this.sc = c(function (e, t, n, r) {
        return l(d.sc(e, t), n, r)
      }), this.Aj = c(function (e, t) {
        d.sc(e, t) && o(1)
      }), this.si = c(function (e, t) {
        1 === b.Ob && i(e, t) && o(1)
      }), this.Rg = c(function (e, t) {
        d.Yb(e, t) && o(1)
      }), this.Qg = c(function (e, t, n, r) {
        e = 0 | d.Yb(e, t), (e |= i(n, r)) && o(1)
      }), this.ti = c(function (e, t, n) {
        1 === b.Ob && (s = p.D.tc(v).ia({
          duration: e / .03,
          G: {
            Fe: {
              start: t,
              end: 0,
              P: R.Qb
            }
          },
          ca: function () {
            d.d(v.Fe, 0) && o(1), a()
          }
        }).start(), f = p.D.tc(g).ia({
          duration: e / .03,
          G: {
            Ge: {
              start: n,
              end: 0,
              P: R.Qb
            }
          },
          ca: function () {
            i(0, g.Ge) && o(1), u()
          }
        }).start())
      }), this.ui = function () {
        s && 0 === d.k() && s.stop(), f && 0 === d.A() && f.stop()
      }, this.Ic = function (e, t) {
        d.Ic(e, t)
      }, this.Pb = function (e) {
        return d.Pb(e)
      }, this.Gc = function (e) {
        return d.Gc(e)
      }, this.Rd = function () {
        return d.Rd()
      }, this.absolute = function (e, t) {
        return d.absolute(e, t)
      }, this.md = function (e, t) {
        return d.md(e, t)
      }, this.scale = function () {
        return d.scale()
      }, this.d = function (e) {
        return d.S(e)
      }, this.content = function (e, t, n, r) {
        d.content(e, t, n, r)
      }
    }

    function _(n, a, u) {
      function h(e) {
        var t = [];
        return q.F(z, function (n) {
          e(n) && t.push(n.group)
        }), {
          groups: t
        }
      }

      function y(e, t) {
        var n = _.options,
          r = n.jj,
          o = n.ij,
          n = n.fe,
          i = 0 < r + o ? n : 0,
          a = [];
        return Y.Ja(e, Y.ya(e, _.options.he), function (e, n, u) {
          n = "groups" === _.options.ge ? u : n, e.e && (e = D.D.m(e).fb(i * (o + r * n)).call(t).xa(), a.push(e))
        }), D.D.m({}).Ya(a).bb()
      }

      function x(e) {
        ce || (ce = !0, j.d(function () {
          ce = !1, _.c.p("repaint:before"), N.ee(this.Pg)
        }, {
          Pg: e
        }))
      }

      function w() {
        function e(r, o) {
          var i = r.$;
          if (r.$ = o <= t, r.Xc = o <= n, r.$ != i && q.He(r, function (e) {
              e.me = !0
            }), r.open || r.Vb || o++, i = r.e)
            for (var a = 0; a < i.length; a++) e(i[a], o)
        }
        var t = _.options.Nd,
          n = Math.min(_.options.Nd, _.options.oi);
        e(z, 1)
      }

      function T() {
        var e = [],
          t = S();
        for (t.ri && _.c.p("model:childrenAttached", q.Lc(z)), t.dj && B.complete(function (t) {
            ue.pb(t), e.push(t)
          }), t = 0; t < e.length; t++) {
          var n = e[t];
          n.Ca = !0, K.d(n)
        }
      }

      function S() {
        var e = _.options.Nd,
          t = !1,
          n = !1;
        G.scale(), G.scale();
        for (var r = [z, 1]; 0 < r.length;) {
          var o = r.shift(),
            i = r.shift(),
            a = !o.na && i < e,
            n = n || a;
          o.Qa = o.Qa || a, o.open || o.Vb || i++;
          var u = o.e;
          if (!u && a && (t = I.S(o) || t, u = o.e), u)
            for (o = 0; o < u.length; o++) r.push(u[o], i)
        }
        return {
          ri: t,
          dj: n
        }
      }
      var z, k = this,
        _ = {
          c: new l,
          options: a,
          Ud: u
        },
        j = new e,
        D = new c(j),
        O = F.create(),
        A = new t(_),
        G = new L(_),
        E = new s(_),
        I = new f(_.options),
        B = new m(_),
        N = new C(_, j),
        W = new g(_);
      new M(_);
      var U = new p(_),
        K = new d(_),
        X = new b(_),
        J = new v(_);
      _.c.j("stage:initialized", function (e, t, n, r) {
        re.gf(n, r)
      }), _.c.j("stage:resized", function (e, t, n, r) {
        re.hj(e, t, n, r)
      }), _.c.j("foamtree:attachChildren", T), _.c.j("openclose:changing", w), _.c.j("interaction:reset", function () {
        le(!0)
      }), _.c.j("foamtree:dirty", x), this.H = function () {
        _.c.p("timeline:initialized", D), z = I.H(), A.H(n), E.H(), N.H(), W.H(), U.H(), K.H(), G.H(), X.H(), J.H()
      }, this.kb = function () {
        D.d(), ae.stop(), j.k(), A.kb()
      };
      var Z = "groupLabelFontFamily groupLabelFontStyle groupLabelFontVariant groupLabelFontWeight groupLabelLineHeight groupLabelHorizontalPadding groupLabelVerticalPadding groupLabelDottingThreshold groupLabelMaxTotalHeight groupLabelMinFontSize groupLabelMaxFontSize groupLabelDecorator".split(" "),
        Q = "rainbowColorDistribution rainbowLightnessDistribution rainbowColorDistributionAngle rainbowLightnessDistributionAngle rainbowColorModelStartPoint rainbowLightnessCorrection rainbowSaturationCorrection rainbowStartColor rainbowEndColor rainbowHueShift rainbowHueShiftCenter rainbowSaturationShift rainbowSaturationShiftCenter rainbowLightnessShift rainbowLightnessShiftCenter attributionTheme".split(" "),
        $ = !1,
        ee = ["groupBorderRadius", "groupBorderRadiusCorrection", "groupBorderWidth", "groupInsetWidth", "groupBorderWidthScaling"],
        te = ["maxGroupLevelsDrawn", "maxGroupLabelLevelsDrawn"];
      this.Wb = function (e) {
        _.c.p("options:changed", e), H.nb(e, Z) && q.F(z, function (e) {
          e.Wa = !0
        }), H.nb(e, Q) && (z.Ma = !0), H.nb(e, ee) && ($ = !0), H.nb(e, te) && (w(), T())
      }, this.reload = function () {
        oe.reload()
      }, this.Xb = function (e, t) {
        H.defer(function () {
          if ($) re.mi(e), $ = !1;
          else {
            if (t)
              for (var n = I.A(t), r = n.length - 1; 0 <= r; r--) n[r].I = !0;
            else z.I = !0;
            x(e)
          }
        })
      }, this.Y = function () {
        A.k()
      }, this.update = function () {
        I.update(), re.Bj()
      }, this.reset = function () {
        return le(!1)
      }, this.S = N.d, this.Ba = function () {
        var e = {};
        return function (t, n) {
          var r = I.d(t);
          return r ? E.nd(e, r, n) : null
        }
      }(), this.Aa = function () {
        var e = {
            x: 0,
            y: 0
          },
          t = {
            x: 0,
            y: 0
          };
        return function (n, r) {
          var o = I.d(n);
          return o ? (e.x = r.x, e.y = r.y, o.Tb(e, e), G.md(e, e), t.x = e.x, t.y = e.y, t) : null
        }
      }(), this.ya = function () {
        var e = {};
        return function (t) {
          return (t = I.d(t)) ? E.pd(e, t) : null
        }
      }(), this.gb = function () {
        var e = {};
        return function (t) {
          return (t = I.d(t)) ? E.od(e, t) : null
        }
      }(), this.za = function () {
        var e = {};
        return function () {
          return G.d(e)
        }
      }(), this.yc = function () {
        this.A({
          groups: h(function (e) {
            return e.group.selected
          }),
          newState: !0,
          keepPrevious: !1
        }), this.k({
          groups: h(function (e) {
            return e.group.open
          }),
          newState: !0,
          keepPrevious: !1
        }), this.d({
          groups: h(function (e) {
            return e.group.exposed
          }),
          newState: !0,
          keepPrevious: !1
        })
      }, this.Ja = function () {
        return h(function (e) {
          return e.U
        })
      }, this.d = function (e) {
        return oe.submit(function () {
          return U.fc(I.k(e, "exposed", !1), !1, !0, !1)
        })
      }, this.Pa = function () {
        return h(function (e) {
          return e.open
        })
      }, this.k = function (e) {
        return oe.submit(function () {
          return X.Jb(I.k(e, "open", !0), !1, !1)
        })
      }, this.cb = function () {
        return h(function (e) {
          return e.selected
        })
      }, this.A = function (e) {
        return oe.submit(function () {
          return J.select(I.k(e, "selected", !0), !1), (new r).J().L()
        })
      }, this.Ac = function (e) {
        return (e = I.d(e)) ? e === z ? G.reset(a.wc, R.pa(a.xc)) : G.k(e, a.Pc, a.wc, R.pa(a.xc)) : (new r).J().L()
      }, this.Ta = function (e) {
        return W.gb[e]
      }, this.zc = function () {
        var e = P;
        return {
          frames: e.frames,
          totalTime: e.totalTime,
          lastFrameTime: e.Id,
          lastInterFrameTime: e.Jd,
          fps: e.Pe
        }
      };
      var ne, re = function () {
          function e(e, o) {
            var i = e || n,
              u = o || r;
            n = i, r = u;
            var l = a.bc && a.bc.boundary;
            l && 2 < l.length ? z.o = l.map(function (e) {
              return {
                x: i * e.x,
                y: u * e.y
              }
            }) : z.o = [{
              x: 0,
              y: 0
            }, {
              x: i,
              y: 0
            }, {
              x: i,
              y: u
            }, {
              x: 0,
              y: u
            }], t()
          }

          function t() {
            z.Z = !0, z.u = z.o, z.q = V.q(z.o, z.q), z.K = z, V.se(z.o, z.K)
          }
          var n, r;
          return {
            gf: e,
            hj: function (t, n, r, o) {
              ue.stop();
              var i = r / t,
                a = o / n;
              q.Ie(z, function (e) {
                e.x = e.x * i + (Math.random() - .5) * r / 1e3, e.y = e.y * a + (Math.random() - .5) * o / 1e3
              }), e(r, o), z.La = !0, B.step(ue.pb, !0, !1, function (e) {
                var t = e.e;
                if (t) {
                  B.Mb(e);
                  for (var n = t.length - 1; 0 <= n; n--) {
                    var r = t[n];
                    r.f = r.rc
                  }
                  e.La = !0
                }
              }) ? x(!1) : (B.qc(z), _.options.de ? (x(!1), ae.dg(), ae.fd()) : (B.complete(ue.pb), z.Ma = !0, x(!1)))
            },
            mi: function (e) {
              var n = !1;
              return z.empty() || (t(), ae.Fb() || (n = B.step(ue.pb, !1, !1), x(e))), n
            },
            Bj: function () {
              q.Fa(z, function (e) {
                e.empty() || B.Mb(e)
              }), B.qc(z), _.options.de ? (ae.dg(), q.Fa(z, function (e) {
                e.empty() || ue.ef(e)
              })) : (q.Fa(z, function (e) {
                e.empty() || ue.pb(z)
              }), B.complete(ue.pb), z.Ma = !0, x(!1))
            }
          }
        }(),
        oe = function () {
          function e() {
            0 === a.Yd && G.reset(0), _.options.Uf(a.bc), re.gf(), I.Y(a.bc), S(), w(), _.c.p("model:loaded", z, q.Lc(z));
            var e;
            z.empty() || (z.open = !0, z.Qa = !0, a.de ? e = ae.fd() : (ae.wi(), e = u()), t(), 0 < a.fe ? (N.clear(), A.d(1)) : e = o([e, n(1)])), _.options.Tf(a.bc), e && (_.options.Xf(), e.N(function () {
              j.d(_.options.Wf)
            }))
          }

          function t() {
            var e = a.Ua,
              t = a.bd;
            a.Ua = 0, a.bd = 0, k.yc(), a.Ua = e, a.bd = t
          }

          function n(e, t) {
            return 0 === a.Le || t ? (A.d(e), (new r).J().L()) : D.D.m({
              opacity: A.d()
            }).oe(2).ia({
              duration: a.Le,
              G: {
                opacity: {
                  end: e,
                  P: R.pa(a.fh)
                }
              },
              ca: function () {
                A.d(this.opacity)
              }
            }).bb()
          }

          function u() {
            q.Fa(z, function (e) {
              e.Ca = !1
            });
            var e = new r,
              t = new i(e.J);
            return t.d(), z.Ca = !0, K.d(z).N(t.k), y(z, function e() {
              this.M && this.o && (this.Z = this.Ca = !0, t.d(), K.d(this).N(t.k), t.d(), y(this, e).N(t.k))
            }), e.L()
          }

          function l() {
            for (var e = 0; e < s.length; e++) {
              var t = s[e],
                n = t.action();
              H.Q(n, "then") ? n.N(t.Be.J) : t.Be.J()
            }
            s = []
          }
          var c = !1,
            s = [];
          return {
            reload: function () {
              c || (z.empty() ? e() : (ue.stop(), D.d(), ae.stop(), c = !0, o(0 < a.Yd ? [K.k(), le(!1)] : [n(0)]).N(function () {
                n(0, !0), c = !1, e(), H.defer(l)
              })))
            },
            submit: function (e) {
              if (c) {
                var t = new r;
                return s.push({
                  action: e,
                  Be: t
                }), t.L()
              }
              return e()
            }
          }
        }(),
        ie = new i(function () {
          ne.J()
        }),
        ae = function () {
          function e() {
            return i || (ie.A() && (ne = new r), ie.d(), t(), i = !0, j.repeat(n)), ne.L()
          }

          function t() {
            o = O.now()
          }

          function n() {
            var t = O.now() - o > a.gj,
              t = B.step(function (t) {
                t.Ca = !0, ue.ef(t), ie.d(), K.d(t).N(ie.k), ie.d(), y(t, function () {
                  this.Qa = !0, e()
                }).N(ie.k)
              }, !0, t) || t;
            return x(!0), t && (i = !1, ie.k()), t
          }
          var o, i = !1;
          return {
            wi: function () {
              B.complete(ue.pb)
            },
            fd: e,
            dg: t,
            Fb: function () {
              return !ie.A()
            },
            stop: function () {
              j.cancel(n), i = !1, ie.clear()
            }
          }
        }(),
        ue = function () {
          function e(e) {
            var t = !e.empty();
            if (e.Ca = !0, t) {
              for (var n = e.e, r = n.length - 1; 0 <= r; r--) {
                var o = n[r];
                o.f = o.rc
              }
              e.La = !0
            }
            return t
          }
          var t = [];
          return {
            ef: function (n) {
              var r = _.options,
                o = r.zh;
              0 < o ? Y.Ja(n, Y.ya(n, _.options.he), function (e, n, i) {
                n = "groups" === _.options.ge ? i : n, ie.d(), t.push(D.D.m(e).fb(n * r.yh * o).ia({
                  duration: o,
                  G: {
                    f: {
                      start: e.qg,
                      end: e.rc,
                      P: R.pa(r.Ah)
                    }
                  },
                  ca: function () {
                    this.f = Math.max(0, this.f), this.parent.La = !0, ae.fd()
                  }
                }).ib(ie.k).start())
              }) : e(n) && ae.fd()
            },
            pb: e,
            stop: function () {
              for (var e = t.length - 1; 0 <= e; e--) t[e].stop();
              t = []
            }
          }
        }(),
        le = function () {
          var e = !1;
          return function (t) {
            if (e) return (new r).J().L();
            e = !0;
            var n = [];
            n.push(G.reset(a.wc, R.pa(a.xc)));
            var i = new r;
            return U.fc({
              e: [],
              Ia: !1,
              Ha: !1
            }, t, !1, !0).N(function () {
              X.Jb({
                e: [],
                Ia: !1,
                Ha: !1
              }, t, !1).N(i.J)
            }), n.push(i.L()), o(n).N(function () {
              e = !1, t && a.Yf()
            })
          }
        }(),
        ce = !1
    }

    function j() {
      return {
        version: "3.4.4",
        build: "36955f78f6b79223438db3b18b9b64b5aad799bb/36955f78",
        brandingAllowed: !1
      }
    }
    var P, D = function () {
        var e, t = window.navigator.userAgent;
        try {
          window.localStorage.setItem("ftap5caavc", "ftap5caavc"), window.localStorage.removeItem("ftap5caavc"), e = !0
        } catch (t) {
          e = !1
        }
        return {
          pf: function () {
            return /webkit/i.test(t)
          },
          nf: function () {
            return /Mac/.test(t)
          },
          mf: function () {
            return /iPad|iPod|iPhone/.test(t)
          },
          jf: function () {
            return /Android/.test(t)
          },
          ii: function () {
            return "ontouchstart" in window || !!window.DocumentTouch && document instanceof window.DocumentTouch
          },
          hi: function () {
            return e
          },
          gi: function () {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
          },
          Cd: function (e, t) {
            return [].forEach && D.gi() ? e && e() : t && t()
          }
        }
      }(),
      F = function () {
        function e() {
          return window.performance && (window.performance.now || window.performance.mozNow || window.performance.msNow || window.performance.oNow || window.performance.webkitNow) || Date.now
        }
        var t = e();
        return {
          create: function () {
            return {
              now: function () {
                var t = e();
                return function () {
                  return t.call(window.performance)
                }
              }()
            }
          },
          now: function () {
            return t.call(window.performance)
          }
        }
      }(),
      O = D.Cd(function () {
        function e() {
          this.buffer = [], this.oa = 0, this.Fc = H.extend({}, a)
        }

        function t(e) {
          return function () {
            var t, n = this.buffer,
              r = this.oa;
            for (n[r++] = "call", n[r++] = e, n[r++] = arguments.length, t = 0; t < arguments.length; t++) n[r++] = arguments[t];
            this.oa = r
          }
        }

        function n(e) {
          return function () {
            return o[e].apply(o, arguments)
          }
        }
        var r = document.createElement("canvas");
        r.width = 1, r.height = 1;
        var o = r.getContext("2d"),
          r = ["font"],
          i = "fillStyle globalAlpha globalCompositeOperation lineCap lineDashOffset lineJoin lineWidth miterLimit shadowBlur shadowColor shadowOffsetX shadowOffsetY strokeStyle textAlign textBaseline".split(" "),
          a = {};
        return i.concat(r).forEach(function (e) {
          a[e] = o[e]
        }), e.prototype.clear = function () {
          this.oa = 0
        }, e.prototype.Na = function () {
          return 0 === this.oa
        }, e.prototype.Sa = function (e) {
          e instanceof O ? function (e, t, n) {
            for (var r = 0, o = e.oa, i = e.buffer; r < n;) i[o++] = t[r++];
            e.oa = o
          }(e, this.buffer, this.oa) : function (e, t, n, r) {
            for (var o = 0; o < n;) switch (t[o++]) {
              case "set":
                e[t[o++]] = t[o++];
                break;
              case "setGlobalAlpha":
                e[t[o++]] = t[o++] * r;
                break;
              case "call":
                var i = t[o++];
                switch (t[o++]) {
                  case 0:
                    e[i]();
                    break;
                  case 1:
                    e[i](t[o++]);
                    break;
                  case 2:
                    e[i](t[o++], t[o++]);
                    break;
                  case 3:
                    e[i](t[o++], t[o++], t[o++]);
                    break;
                  case 4:
                    e[i](t[o++], t[o++], t[o++], t[o++]);
                    break;
                  case 5:
                    e[i](t[o++], t[o++], t[o++], t[o++], t[o++]);
                    break;
                  case 6:
                    e[i](t[o++], t[o++], t[o++], t[o++], t[o++], t[o++]);
                    break;
                  case 7:
                    e[i](t[o++], t[o++], t[o++], t[o++], t[o++], t[o++], t[o++]);
                    break;
                  case 8:
                    e[i](t[o++], t[o++], t[o++], t[o++], t[o++], t[o++], t[o++], t[o++]);
                    break;
                  case 9:
                    e[i](t[o++], t[o++], t[o++], t[o++], t[o++], t[o++], t[o++], t[o++], t[o++]);
                    break;
                  default:
                    throw "CB0"
                }
            }
          }(e, this.buffer, this.oa, H.B(e.globalAlpha, 1))
        }, e.prototype.replay = e.prototype.Sa, e.prototype.d = function () {
          return new e
        }, e.prototype.scratch = e.prototype.d, "arc arcTo beginPath bezierCurveTo clearRect clip closePath drawImage fill fillRect fillText lineTo moveTo putImageData quadraticCurveTo rect rotate scale setLineDash setTransform stroke strokeRect strokeText transform translate".split(" ").forEach(function (n) {
          e.prototype[n] = t(n)
        }), ["measureText", "createLinearGradient", "createRadialGradient", "createPattern", "getLineDash"].forEach(function (t) {
          e.prototype[t] = n(t)
        }), ["save", "restore"].forEach(function (r) {
          e.prototype[r] = function (e, t) {
            return function () {
              e.apply(this, arguments), t.apply(this, arguments)
            }
          }(t(r), n(r))
        }), r.forEach(function (t) {
          Object.defineProperty(e.prototype, t, {
            set: function (e) {
              o[t] = e, this.Fc[t] = e;
              var n = this.buffer;
              n[this.oa++] = "set", n[this.oa++] = t, n[this.oa++] = e
            },
            get: function () {
              return this.Fc[t]
            }
          })
        }), i.forEach(function (t) {
          Object.defineProperty(e.prototype, t, {
            set: function (e) {
              this.Fc[t] = e;
              var n = this.buffer;
              n[this.oa++] = "globalAlpha" === t ? "setGlobalAlpha" : "set", n[this.oa++] = t, n[this.oa++] = e
            },
            get: function () {
              return this.Fc[t]
            }
          })
        }), e.prototype.roundRect = function (e, t, n, r, o) {
          this.beginPath(), this.moveTo(e + o, t), this.lineTo(e + n - o, t), this.quadraticCurveTo(e + n, t, e + n, t + o), this.lineTo(e + n, t + r - o), this.quadraticCurveTo(e + n, t + r, e + n - o, t + r), this.lineTo(e + o, t + r), this.quadraticCurveTo(e, t + r, e, t + r - o), this.lineTo(e, t + o), this.quadraticCurveTo(e, t, e + o, t), this.closePath()
        }, e.prototype.fillPolygonWithText = function (e, t, n, r, o) {
          o || (o = {});
          var i = {
              rb: H.B(o.maxFontSize, Z.Ea.rb),
              Yc: H.B(o.minFontSize, Z.Ea.Yc),
              lineHeight: H.B(o.lineHeight, Z.Ea.lineHeight),
              ob: H.B(o.horizontalPadding, Z.Ea.ob),
              eb: H.B(o.verticalPadding, Z.Ea.eb),
              sb: H.B(o.maxTotalTextHeight, Z.Ea.sb),
              fontFamily: H.B(o.fontFamily, Z.Ea.fontFamily),
              fontStyle: H.B(o.fontStyle, Z.Ea.fontStyle),
              fontVariant: H.B(o.fontVariant, Z.Ea.fontVariant),
              fontWeight: H.B(o.fontWeight, Z.Ea.fontWeight),
              verticalAlign: H.B(o.verticalAlign, Z.Ea.verticalAlign)
            },
            a = o.cache;
          if (a && H.Q(o, "area")) {
            a.hd || (a.hd = new O);
            var u = o.area,
              l = H.B(o.cacheInvalidationThreshold, .05);
            e = Z.ye(i, this, r, e, V.q(e, {}), {
              x: t,
              y: n
            }, o.allowForcedSplit || !1, o.allowEllipsis || !1, a, u, l, o.invalidateCache)
          } else e = Z.Me(i, this, r, e, V.q(e, {}), {
            x: t,
            y: n
          }, o.allowForcedSplit || !1, o.allowEllipsis || !1);
          return e.la ? {
            fit: !0,
            lineCount: e.mc,
            fontSize: e.fontSize,
            box: {
              x: e.da.x,
              y: e.da.y,
              w: e.da.f,
              h: e.da.i
            },
            ellipsis: e.ec
          } : {
            fit: !1
          }
        }, e
      }),
      A = D.Cd(function () {
        function e(e) {
          this.O = e, this.d = [], this.Hb = [void 0], this.Mc = ["#SIZE#px sans-serif"], this.Kd = [0], this.Ld = [1], this.ie = [0], this.je = [0], this.ke = [0], this.Qd = [10], this.hc = [10], this.Rb = [this.Hb, this.Mc, this.hc, this.Kd, this.Ld, this.ie, this.Qd, this.je, this.ke], this.ga = [1, 0, 0, 1, 0, 0]
        }

        function t(e) {
          var t = e.O,
            n = e.Rb[0].length - 1;
          e.Hb[n] && (t.setLineDash(e.Hb[n]), t.Sj = e.Kd[n]), t.miterLimit = e.Qd[n], t.lineWidth = e.Ld[n], t.shadowBlur = e.ie[n], t.shadowOffsetX = e.je[n], t.shadowOffsetY = e.ke[n], t.font = e.Mc[n].replace("#SIZE#", e.hc[n].toString())
        }

        function n(e) {
          return function () {
            return this.O[e].apply(this.O, arguments)
          }
        }

        function r(e) {
          return function (t, n) {
            var r = this.ga;
            return this.O[e].call(this.O, i(t, n, r), a(t, n, r))
          }
        }

        function o(e) {
          return function (t, n, r, o) {
            var u = this.ga;
            return this.O[e].call(this.O, i(t, n, u), a(t, n, u), r * u[0], o * u[3])
          }
        }

        function i(e, t, n) {
          return e * n[0] + t * n[2] + n[4]
        }

        function a(e, t, n) {
          return e * n[1] + t * n[3] + n[5]
        }

        function u(e, t) {
          for (var n = 0; n < e.length; n++) e[n] *= t[0];
          return e
        }
        e.prototype.save = function () {
          this.d.push(this.ga.slice(0));
          for (var e = 0; e < this.Rb.length; e++) {
            var t = this.Rb[e];
            t.push(t[t.length - 1])
          }
          this.O.save()
        }, e.prototype.restore = function () {
          this.ga = this.d.pop();
          for (var e = 0; e < this.Rb.length; e++) this.Rb[e].pop();
          this.O.restore(), t(this)
        }, e.prototype.scale = function (e, n) {
          var r = this.ga;
          r[0] *= e, r[1] *= e, r[2] *= n, r[3] *= n;
          var r = this.ga,
            o = this.Rb,
            i = o[0].length - 1,
            a = this.Hb[i];
          for (a && u(a, r), a = 2; a < o.length; a++) {
            o[a][i] *= r[0]
          }
          t(this)
        }, e.prototype.translate = function (e, t) {
          var n = this.ga;
          n[4] += n[0] * e + n[2] * t, n[5] += n[1] * e + n[3] * t
        }, ["moveTo", "lineTo"].forEach(function (t) {
          e.prototype[t] = r(t)
        }), ["clearRect", "fillRect", "strokeRect", "rect"].forEach(function (t) {
          e.prototype[t] = o(t)
        }), "fill stroke beginPath closePath clip createImageData createPattern getImageData putImageData getLineDash setLineDash".split(" ").forEach(function (t) {
          e.prototype[t] = n(t)
        }), [{
          ub: "lineDashOffset",
          yb: function (e) {
            return e.Kd
          }
        }, {
          ub: "lineWidth",
          yb: function (e) {
            return e.Ld
          }
        }, {
          ub: "miterLimit",
          yb: function (e) {
            return e.Qd
          }
        }, {
          ub: "shadowBlur",
          yb: function (e) {
            return e.ie
          }
        }, {
          ub: "shadowOffsetX",
          yb: function (e) {
            return e.je
          }
        }, {
          ub: "shadowOffsetY",
          yb: function (e) {
            return e.ke
          }
        }].forEach(function (t) {
          Object.defineProperty(e.prototype, t.ub, {
            set: function (e) {
              var n = t.yb(this);
              e *= this.ga[0], n[n.length - 1] = e, this.O[t.ub] = e
            }
          })
        });
        var l = /(\d+(?:\.\d+)?)px/;
        return Object.defineProperty(e.prototype, "font", {
          set: function (e) {
            var t = l.exec(e);
            if (1 < t.length) {
              var n = this.hc.length - 1;
              this.hc[n] = parseFloat(t[1]), this.Mc[n] = e.replace(l, "#SIZE#px"), this.O.font = this.Mc[n].replace("#SIZE#", (this.hc[n] * this.ga[0]).toString())
            }
          }
        }), "fillStyle globalAlpha globalCompositeOperation lineCap lineJoin shadowColor strokeStyle textAlign textBaseline".split(" ").forEach(function (t) {
          Object.defineProperty(e.prototype, t, {
            set: function (e) {
              this.O[t] = e
            }
          })
        }), e.prototype.arc = function (e, t, n, r, o, u) {
          var l = this.ga;
          this.O.arc(i(e, t, l), a(e, t, l), n * l[0], r, o, u)
        }, e.prototype.arcTo = function (e, t, n, r, o) {
          var u = this.ga;
          this.O.arc(i(e, t, u), a(e, t, u), i(n, r, u), a(n, r, u), o * u[0])
        }, e.prototype.bezierCurveTo = function (e, t, n, r, o, u) {
          var l = this.ga;
          this.O.bezierCurveTo(i(e, t, l), a(e, t, l), i(n, r, l), a(n, r, l), i(o, u, l), a(o, u, l))
        }, e.prototype.drawImage = function (e, t, n, r, o, u, l, c, s) {
          function f(t, n, r, o) {
            p.push(i(t, n, h)), p.push(a(t, n, h)), r = H.V(r) ? e.width : r, o = H.V(o) ? e.height : o, p.push(r * h[0]), p.push(o * h[3])
          }
          var h = this.ga,
            p = [e];
          H.V(u) ? f(t, n, r, o) : f(u, l, c, s), this.O.drawImage.apply(this.O, p)
        }, e.prototype.quadraticCurveTo = function (e, t, n, r) {
          var o = this.ga;
          this.O.quadraticCurveTo(i(e, t, o), a(e, t, o), i(n, r, o), a(n, r, o))
        }, e.prototype.fillText = function (e, t, n, r) {
          var o = this.ga;
          this.O.fillText(e, i(t, n, o), a(t, n, o), H.Rc(r) ? r * o[0] : 1e20)
        }, e.prototype.setLineDash = function (e) {
          e = u(e.slice(0), this.ga), this.Hb[this.Hb.length - 1] = e, this.O.setLineDash(e)
        }, e
      }),
      G = function () {
        var e = !D.pf() || D.mf() || D.jf() ? 1 : 7;
        return {
          eh: function () {
            function t(e) {
              e.beginPath(), E.le(e, u)
            }
            var n = document.createElement("canvas");
            n.width = 800, n.height = 600;
            var r, o = n.getContext("2d"),
              i = n.width,
              n = n.height,
              a = 0,
              u = [{
                x: 0,
                y: 100
              }];
            for (r = 1; 6 >= r; r++) a = 2 * r * Math.PI / 6, u.push({
              x: 0 + 100 * Math.sin(a),
              y: 0 + 100 * Math.cos(a)
            });
            r = {
              polygonPlainFill: [t, function (e) {
                e.fillStyle = "rgb(255, 0, 0)", e.fill()
              }],
              polygonPlainStroke: [t, function (e) {
                e.strokeStyle = "rgb(128, 0, 0)", e.lineWidth = 2, e.closePath(), e.stroke()
              }],
              polygonGradientFill: [t, function (e) {
                var t = e.createRadialGradient(0, 0, 10, 0, 0, 60);
                t.addColorStop(0, "rgb(255, 0, 0)"), t.addColorStop(1, "rgb(255, 255, 0)"), e.fillStyle = t, e.fill()
              }],
              polygonGradientStroke: [t, function (e) {
                var t = e.createLinearGradient(-100, -100, 100, 100);
                t.addColorStop(0, "rgb(224, 0, 0)"), t.addColorStop(1, "rgb(32, 0, 0)"), e.strokeStyle = t, e.lineWidth = 2, e.closePath(), e.stroke()
              }],
              polygonExposureShadow: [t, function (e) {
                e.shadowBlur = 50, e.shadowColor = "rgba(0, 0, 0, 1)", e.fillStyle = "rgba(0, 0, 0, 1)", e.globalCompositeOperation = "source-over", e.fill(), e.shadowBlur = 0, e.shadowColor = "transparent", e.globalCompositeOperation = "destination-out", e.fill()
              }],
              labelPlainFill: [function (e) {
                e.fillStyle = "#000", e.font = "24px sans-serif", e.textAlign = "center"
              }, function (e) {
                e.fillText("Some text", 0, -16), e.fillText("for testing purposes", 0, 16)
              }]
            };
            var l, a = 100 / Object.keys(r).length,
              c = F.now(),
              s = {};
            for (l in r) {
              var f, h = r[l],
                p = F.now(),
                d = 0;
              do {
                for (o.save(), o.translate(Math.random() * i, Math.random() * n), f = 3 * Math.random() + .5, o.scale(f, f), f = 0; f < h.length; f++) h[f](o);
                o.restore(), d++, f = F.now()
              } while (f - p < a);
              s[l] = e * (f - p) / d
            }
            return s.total = F.now() - c, s
          }
        }
      }(),
      E = {
        le: function (e, t) {
          var n = t[0];
          e.moveTo(n.x, n.y);
          for (var r = t.length - 1; 0 < r; r--) n = t[r], e.lineTo(n.x, n.y)
        },
        qj: function (e, t, n, r) {
          var o, i, a, u = [],
            l = 0,
            c = t.length;
          for (a = 0; a < c; a++) o = t[a], i = t[(a + 1) % c], o = V.d(o, i), o = Math.sqrt(o), u.push(o), l += o;
          n = r * (n + .5 * r * l / c);
          var s, f;
          r = {};
          var l = {},
            h = {},
            p = 0;
          for (a = 0; a < c; a++) o = t[a], i = t[(a + 1) % c], s = t[(a + 2) % c], f = u[(a + 1) % c], f = Math.min(.5, n / f), V.Aa(1 - f, i, s, l), V.Aa(f, i, s, h), p++, 0 == a && (s = Math.min(.5, n / u[0]), V.Aa(s, o, i, r), p++, e.moveTo(r.x, r.y)), e.quadraticCurveTo(i.x, i.y, l.x, l.y), e.lineTo(h.x, h.y);
          return !0
        }
      },
      I = new function () {
        function e(e) {
          if ("hsl" == e.model || "hsla" == e.model) return e;
          var t, n = e.r /= 255,
            r = e.g /= 255,
            o = e.b /= 255,
            i = Math.max(n, r, o),
            a = Math.min(n, r, o),
            u = (i + a) / 2;
          if (i == a) t = a = 0;
          else {
            var l = i - a,
              a = .5 < u ? l / (2 - i - a) : l / (i + a);
            switch (i) {
              case n:
                t = (r - o) / l + (r < o ? 6 : 0);
                break;
              case r:
                t = (o - n) / l + 2;
                break;
              case o:
                t = (n - r) / l + 4
            }
            t /= 6
          }
          return e.h = 360 * t, e.s = 100 * a, e.l = 100 * u, e.model = "hsl", e
        }
        var t = {
          h: 0,
          s: 0,
          l: 0,
          a: 1,
          model: "hsla"
        };
        this.Ba = function (n) {
          return H.Sc(n) ? e(I.Hg(n)) : H.jc(n) ? e(n) : t
        }, this.Hg = function (e) {
          var n;
          return (n = /rgba\(\s*([^,\s]+)\s*,\s*([^,\s]+)\s*,\s*([^,\s]+)\s*,\s*([^,\s]+)\s*\)/.exec(e)) && 5 == n.length ? {
            r: parseFloat(n[1]),
            g: parseFloat(n[2]),
            b: parseFloat(n[3]),
            a: parseFloat(n[4]),
            model: "rgba"
          } : (n = /hsla\(\s*([^,\s]+)\s*,\s*([^,%\s]+)%\s*,\s*([^,\s%]+)%\s*,\s*([^,\s]+)\s*\)/.exec(e)) && 5 == n.length ? {
            h: parseFloat(n[1]),
            s: parseFloat(n[2]),
            l: parseFloat(n[3]),
            a: parseFloat(n[4]),
            model: "hsla"
          } : (n = /rgb\(\s*([^,\s]+)\s*,\s*([^,\s]+)\s*,\s*([^,\s]+)\s*\)/.exec(e)) && 4 == n.length ? {
            r: parseFloat(n[1]),
            g: parseFloat(n[2]),
            b: parseFloat(n[3]),
            a: 1,
            model: "rgb"
          } : (n = /hsl\(\s*([^,\s]+)\s*,\s*([^,\s%]+)%\s*,\s*([^,\s%]+)%\s*\)/.exec(e)) && 4 == n.length ? {
            h: parseFloat(n[1]),
            s: parseFloat(n[2]),
            l: parseFloat(n[3]),
            a: 1,
            model: "hsl"
          } : (n = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(e)) && 4 == n.length ? {
            r: parseInt(n[1], 16),
            g: parseInt(n[2], 16),
            b: parseInt(n[3], 16),
            a: 1,
            model: "rgb"
          } : (n = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(e)) && 4 == n.length ? {
            r: 17 * parseInt(n[1], 16),
            g: 17 * parseInt(n[2], 16),
            b: 17 * parseInt(n[3], 16),
            a: 1,
            model: "rgb"
          } : t
        }, this.Cg = function (e) {
          function t(e, t, n) {
            return 0 > n && (n += 1), 1 < n && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : .5 > n ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
          }
          if ("rgb" == e.model || "rgba" == e.model) return Math.sqrt(e.r * e.r * .241 + e.g * e.g * .691 + e.b * e.b * .068) / 255;
          var n, r;
          n = e.l / 100;
          var o = e.s / 100;
          if (r = e.h / 360, 0 == e.Vj) n = e = r = n;
          else {
            var o = .5 > n ? n * (1 + o) : n + o - n * o,
              i = 2 * n - o;
            n = t(i, o, r + 1 / 3), e = t(i, o, r), r = t(i, o, r - 1 / 3)
          }
          return Math.sqrt(65025 * n * n * .241 + 65025 * e * e * .691 + 65025 * r * r * .068) / 255
        }, this.Ng = function (e) {
          if (H.Sc(e)) return e;
          if (!H.jc(e)) return "#000";
          switch (e.model) {
            case "hsla":
              return I.Ig(e);
            case "hsl":
              return I.Ac(e);
            case "rgba":
              return I.Lg(e);
            case "rgb":
              return I.Kg(e);
            default:
              return "#000"
          }
        }, this.Lg = function (e) {
          return "rgba(" + (.5 + e.r | 0) + "," + (.5 + e.g | 0) + "," + (.5 + e.b | 0) + "," + e.a + ")"
        }, this.Kg = function (e) {
          return "rgba(" + (.5 + e.r | 0) + "," + (.5 + e.g | 0) + "," + (.5 + e.b | 0) + ")"
        }, this.Ig = function (e) {
          return "hsla(" + (.5 + e.h | 0) + "," + (.5 + e.s | 0) + "%," + (.5 + e.l | 0) + "%," + e.a + ")"
        }, this.Ac = function (e) {
          return "hsl(" + (.5 + e.h | 0) + "," + (.5 + e.s | 0) + "%," + (.5 + e.l | 0) + "%)"
        }, this.Y = function (e, t, n) {
          return "hsl(" + (.5 + e | 0) + "," + (.5 + t | 0) + "%," + (.5 + n | 0) + "%)"
        }
      },
      B = {
        Je: function (e, t, n, r) {
          return r = r || {}, e = e.getBoundingClientRect(), r.x = t - e.left, r.y = n - e.top, r
        }
      },
      R = function () {
        function e(e) {
          return function (t) {
            return Math.pow(t, e)
          }
        }

        function t(e) {
          return function (t) {
            return 1 - Math.pow(1 - t, e)
          }
        }

        function n(e) {
          return function (t) {
            return 1 > (t *= 2) ? .5 * Math.pow(t, e) : 1 - .5 * Math.abs(Math.pow(2 - t, e))
          }
        }

        function r(e) {
          return function (t) {
            for (var n = 0; n < e.length; n++) t = (0, e[n])(t);
            return t
          }
        }
        return {
          pa: function (e) {
            switch (e) {
              case "linear":
                return R.Ib;
              case "bounce":
                return R.Vg;
              case "squareIn":
                return R.og;
              case "squareOut":
                return R.Qb;
              case "squareInOut":
                return R.pg;
              case "cubicIn":
                return R.Zg;
              case "cubicOut":
                return R.Ae;
              case "cubicInOut":
                return R.$g;
              case "quadIn":
                return R.Qi;
              case "quadOut":
                return R.Si;
              case "quadInOut":
                return R.Ri;
              default:
                return R.Ib
            }
          },
          Ib: function (e) {
            return e
          },
          Vg: r([n(2), function (e) {
            return 0 === e ? 0 : 1 === e ? 1 : e * (e * (e * (e * (25.9425 * e - 85.88) + 105.78) - 58.69) + 13.8475)
          }]),
          og: e(2),
          Qb: t(2),
          pg: n(2),
          Zg: e(3),
          Ae: t(3),
          $g: n(3),
          Qi: e(2),
          Si: t(2),
          Ri: n(2),
          d: r
        }
      }(),
      H = {
        V: function (e) {
          return void 0 === e
        },
        of: function (e) {
          return null === e
        },
        Rc: function (e) {
          return "[object Number]" === Object.prototype.toString.call(e)
        },
        Sc: function (e) {
          return "[object String]" === Object.prototype.toString.call(e)
        },
        Fd: function (e) {
          return "function" == typeof e
        },
        jc: function (e) {
          return e === Object(e)
        },
        Ed: function (e, t) {
          return 1e-6 > e - t && -1e-6 < e - t
        },
        kf: function (e) {
          return H.V(e) || H.of(e) || H.Sc(e) && !/\S/.test(e)
        },
        Q: function (e, t) {
          return e && e.hasOwnProperty(t)
        },
        nb: function (e, t) {
          if (e)
            for (var n = t.length - 1; 0 <= n; n--)
              if (e.hasOwnProperty(t[n])) return !0;
          return !1
        },
        extend: function (e) {
          return H.dh(Array.prototype.slice.call(arguments, 1), function (t) {
            if (t)
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }), e
        },
        A: function (e, t) {
          return e.map(function (e) {
            return e[t]
          }, [])
        },
        dh: function (e, t, n) {
          null != e && (e.forEach ? e.forEach(t, n) : H.Ga(e, t, n))
        },
        Ga: function (e, t, n) {
          for (var r in e)
            if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) break
        },
        B: function () {
          for (var e = 0; e < arguments.length; e++) {
            var t = arguments[e];
            if (!(H.V(t) || H.Rc(t) && isNaN(t) || H.Sc(t) && H.kf(t))) return t
          }
        },
        cg: function (e, t) {
          var n = e.indexOf(t);
          0 <= n && e.splice(n, 1)
        },
        ah: function (e, t, n) {
          var r;
          return function () {
            var o = this,
              i = arguments,
              a = n && !r;
            clearTimeout(r), r = setTimeout(function () {
              r = null, n || e.apply(o, i)
            }, t), a && e.apply(o, i)
          }
        },
        defer: function (e) {
          setTimeout(e, 1)
        },
        k: function (e) {
          return e
        },
        ta: function () {}
      },
      N = {
        ji: function (e, t, n) {
          return D.hi() ? function () {
            var r = t + ":" + JSON.stringify(arguments),
              o = window.localStorage.getItem(r);
            return o && (o = JSON.parse(o)), o && Date.now() - o.t < n ? o.v : (o = e.apply(this, arguments), window.localStorage.setItem(r, JSON.stringify({
              v: o,
              t: Date.now()
            })), o)
          } : e
        }
      },
      W = {
        m: function (e, t) {
          function n() {
            var n = [];
            if (Array.isArray(e))
              for (var r = 0; r < e.length; r++) {
                var o = e[r];
                o && n.push(o.apply(t, arguments))
              } else e && n.push(e.apply(t, arguments));
            return n
          }
          return n.empty = function () {
            return 0 === e.length && !H.Fd(e)
          }, n
        }
      },
      U = {
        kg: function (e) {
          for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(1 ^ e.charCodeAt(n));
          return t
        }
      },
      q = function () {
        var e = {
          Ie: function (e, t) {
            if (e.e)
              for (var n = e.e, r = 0; r < n.length; r++) t(n[r], r)
          },
          Jc: function (t, n) {
            if (t.e)
              for (var r = t.e, o = 0; o < r.length; o++)
                if (!1 === e.Jc(r[o], n) || !1 === n(r[o], o)) return !1
          }
        };
        return e.F = e.Jc, e.Kc = function (t, n) {
          if (t.e)
            for (var r = t.e, o = 0; o < r.length; o++)
              if (!1 === n(r[o], o) || !1 === e.Kc(r[o], n)) return !1
        }, e.Fa = function (t, n) {
          if (t.e)
            for (var r = t.e, o = 0; o < r.length; o++)
              if (!1 === e.Fa(r[o], n)) return !1;
          return n(t)
        }, e.Mj = e.Fa, e.wd = function (t, n) {
          !1 !== n(t) && e.Kc(t, n)
        }, e.Lc = function (t, n) {
          var r = [];
          return e.Kc(t, function (e) {
            r.push(e)
          }), n ? r.filter(n) : r
        }, e.He = function (e, t) {
          for (var n = e.parent; n && !1 !== t(n);) n = n.parent
        }, e.ki = function (e, t) {
          for (var n = e.parent; n && n !== t;) n = n.parent;
          return !!n
        }, e
      }(),
      V = new function () {
        function e(e, t) {
          var n = e.x - t.x,
            r = e.y - t.y;
          return n * n + r * r
        }

        function t(e, t, n) {
          for (var r = 0; r < e.length; r++) {
            var o = V.za(e[r], e[r + 1] || e[0], t, n, !0);
            if (o) return o
          }
        }
        return this.za = function (e, t, n, r, o) {
          var i = e.x;
          e = e.y;
          var a = t.x - i;
          t = t.y - e;
          var u = n.x,
            l = n.y;
          n = r.x - u;
          var c = r.y - l;
          if (!(1e-12 >= (r = a * c - n * t) && -1e-12 <= r) && (u -= i, l -= e, n = (u * c - n * l) / r, 0 <= (r = (u * t - a * l) / r) && (o || 1 >= r) && 0 <= n && 1 >= n)) return {
            x: i + a * n,
            y: e + t * n
          }
        }, this.Jg = function (e, t, n, r) {
          var o = e.x;
          e = e.y;
          var i = t.x - o;
          t = t.y - e;
          var a = n.x;
          n = n.y;
          var u = r.x - a;
          r = r.y - n;
          var l = i * r - u * t;
          if (!(1e-12 >= l && -1e-12 <= l) && 0 <= (r = ((a - o) * r - u * (n - e)) / l) && 1 >= r) return {
            x: o + i * r,
            y: e + t * r
          }
        }, this.qe = function (e, n, r) {
          for (var o, i = V.k(n, {}), a = V.k(r, {}), u = a.x - i.x, l = a.y - i.y, c = [], a = 0; a < r.length; a++) o = r[a], c.push({
            x: o.x - u,
            y: o.y - l
          });
          for (r = [], o = [], a = 0; a < e.length; a++) {
            var s = e[a],
              f = t(n, i, s);
            f ? (r.push(f), o.push(t(c, i, s))) : (r.push(null), o.push(null))
          }
          for (a = 0; a < e.length; a++)
            if (f = r[a], s = o[a], f && s) {
              n = e[a];
              var c = i,
                h = f.x - i.x,
                f = f.y - i.y,
                f = Math.sqrt(h * h + f * f);
              if (1e-12 < f) {
                var h = n.x - i.x,
                  p = n.y - i.y,
                  f = Math.sqrt(h * h + p * p) / f;
                n.x = c.x + f * (s.x - c.x), n.y = c.y + f * (s.y - c.y)
              } else n.x = c.x, n.y = c.y
            } for (a = 0; a < e.length; a++) o = e[a], o.x += u, o.y += l
        }, this.q = function (e, t) {
          if (0 !== e.length) {
            var n, r, o, i;
            n = r = e[0].x, o = i = e[0].y;
            for (var a = e.length; 0 < --a;) n = Math.min(n, e[a].x), r = Math.max(r, e[a].x), o = Math.min(o, e[a].y), i = Math.max(i, e[a].y);
            return t.x = n, t.y = o, t.f = r - n, t.i = i - o, t
          }
        }, this.A = function (e) {
          return [{
            x: e.x,
            y: e.y
          }, {
            x: e.x + e.f,
            y: e.y
          }, {
            x: e.x + e.f,
            y: e.y + e.i
          }, {
            x: e.x,
            y: e.y + e.i
          }]
        }, this.k = function (e, t) {
          for (var n = 0, r = 0, o = e.length, i = e[0], a = 0, u = 1; u < o - 1; u++) var l = e[u],
            c = e[u + 1],
            s = i.y + l.y + c.y,
            f = (l.x - i.x) * (c.y - i.y) - (c.x - i.x) * (l.y - i.y),
            n = n + f * (i.x + l.x + c.x),
            r = r + f * s,
            a = a + f;
          return t.x = n / (3 * a), t.y = r / (3 * a), t.ja = a / 2, t
        }, this.se = function (e, t) {
          this.k(e, t), t.Nb = Math.sqrt(t.ja / Math.PI)
        }, this.Ta = function (e, t) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = e[n + 1] || e[0];
            if (0 > (t.y - r.y) * (o.x - r.x) - (t.x - r.x) * (o.y - r.y)) return !1
          }
          return !0
        }, this.Mg = function (e, t, n) {
          var r = e.x,
            o = t.x;
          if (e.x > t.x && (r = t.x, o = e.x), o > n.x + n.f && (o = n.x + n.f), r < n.x && (r = n.x), r > o) return !1;
          var i = e.y,
            a = t.y,
            u = t.x - e.x;
          return 1e-7 < Math.abs(u) && (a = (t.y - e.y) / u, e = e.y - a * e.x, i = a * r + e, a = a * o + e), i > a && (r = a, a = i, i = r), a > n.y + n.i && (a = n.y + n.i), i < n.y && (i = n.y), i <= a
        }, this.te = function (n, r, o, i, a) {
          function u(o, i, a) {
            if (r.x === h.x && r.y === h.y) return a;
            var u = t(n, r, h),
              f = Math.sqrt(e(u, r) / (o * o + i * i));
            return f < s ? (s = f, l = u.x, c = u.y, 0 !== i ? Math.abs(c - r.y) / Math.abs(i) : Math.abs(l - r.x) / Math.abs(o)) : a
          }
          var l, c;
          i = H.B(i, .5), a = H.B(a, .5), o = H.B(o, 1);
          var s = Number.MAX_VALUE;
          c = l = 0;
          var f, h = {
              x: 0,
              y: 0
            },
            p = i * o;
          return o *= 1 - i, i = 1 - a, h.x = r.x - p, h.y = r.y - a, f = u(p, a, f), h.x = r.x + o, h.y = r.y - a, f = u(o, a, f), h.x = r.x - p, h.y = r.y + i, f = u(p, i, f), h.x = r.x + o, h.y = r.y + i, f = u(o, i, f)
        }, this.Eg = function (e, t) {
          function n(e, t, n) {
            var r = t.x,
              o = n.x;
            t = t.y, n = n.y;
            var i = o - r,
              a = n - t;
            return Math.abs(a * e.x - i * e.y - r * n + o * t) / Math.sqrt(i * i + a * a)
          }
          for (var r = e.length, o = n(t, e[r - 1], e[0]), i = 0; i < r - 1; i++) {
            var a = n(t, e[i], e[i + 1]);
            a < o && (o = a)
          }
          return o
        }, this.Wb = function (e, t, n) {
          var r;
          n = {
            x: t.x + Math.cos(n),
            y: t.y - Math.sin(n)
          };
          var o = [],
            i = [],
            a = e.length;
          for (r = 0; r < a; r++) {
            var u = V.Jg(e[r], e[(r + 1) % a], t, n);
            if (u && (o.push(u), 2 == i.push(r))) break
          }
          if (2 == o.length) {
            var u = o[0],
              o = o[1],
              l = i[0],
              i = i[1],
              c = [o, u];
            for (r = l + 1; r <= i; r++) c.push(e[r]);
            for (r = [u, o]; i != l;) i = (i + 1) % a, r.push(e[i]);
            return e = [c, r], a = n.x - t.x, r = o.x - u.x, 0 === a && (a = n.y - t.y, r = o.y - u.y), (0 > a ? -1 : 0 < a ? 1 : 0) != (0 > r ? -1 : 0 < r ? 1 : 0) && e.reverse(), e
          }
        }, this.Aa = function (e, t, n, r) {
          return r.x = e * (t.x - n.x) + n.x, r.y = e * (t.y - n.y) + n.y, r
        }, this.d = e, this.re = function (e, n, r) {
          if (H.Rc(n)) n = 2 * Math.PI * n / 360;
          else {
            var o = V.q(e, {});
            switch (n) {
              case "random":
                n = Math.random() * Math.PI * 2;
                break;
              case "top":
                n = Math.atan2(-o.i, 0);
                break;
              case "bottom":
                n = Math.atan2(o.i, 0);
                break;
              case "topleft":
                n = Math.atan2(-o.i, -o.f);
                break;
              default:
                n = Math.atan2(o.i, o.f)
            }
          }
          return o = V.k(e, {}), V.Aa(r, t(e, o, {
            x: o.x + Math.cos(n),
            y: o.y + Math.sin(n)
          }), o, {})
        }, this
      },
      K = new function () {
        function e(e, t) {
          this.face = e, this.jd = t, this.pc = this.cd = null
        }

        function t(e, t, n) {
          this.ma = [e, t, n], this.C = Array(3);
          var r = t.y - e.y,
            o = n.z - e.z,
            i = t.x - e.x;
          t = t.z - e.z;
          var a = n.x - e.x;
          e = n.y - e.y, this.Oa = {
            x: r * o - t * e,
            y: t * a - i * o,
            z: i * e - r * a
          }, this.jb = [], this.sd = this.visible = !1
        }
        this.S = function (r) {
          var i, a, u, l, c = r.length;
          for (i = 0; i < c; i++) r[i].index = i, r[i].$b = null;
          var s, f = [];
          if (0 < (s = function () {
              function n(e, n, r, o) {
                var i = (n.y - e.y) * (r.z - e.z) - (n.z - e.z) * (r.y - e.y),
                  a = (n.z - e.z) * (r.x - e.x) - (n.x - e.x) * (r.z - e.z),
                  u = (n.x - e.x) * (r.y - e.y) - (n.y - e.y) * (r.x - e.x);
                return i * o.x + a * o.y + u * o.z > i * e.x + a * e.y + u * e.z ? new t(e, n, r) : new t(r, n, e)
              }

              function o(e, t, n, r) {
                function o(e, t, n) {
                  return e = e.ma, t = e[0] == t ? 0 : e[1] == t ? 1 : 2, e[(t + 1) % 3] != n ? (t + 2) % 3 : t
                }
                t.C[o(t, n, r)] = e, e.C[o(e, r, n)] = t
              }
              if (4 > c) return 0;
              var i = r[0],
                a = r[1],
                u = r[2],
                l = r[3],
                s = n(i, a, u, l),
                h = n(i, u, l, a),
                p = n(i, a, l, u),
                d = n(a, u, l, i);
              for (o(s, h, u, i), o(s, p, i, a), o(s, d, a, u), o(h, p, l, i), o(h, d, u, l), o(p, d, l, a), f.push(s, h, p, d), i = 4; i < c; i++)
                for (a = r[i], u = 0; 4 > u; u++) l = f[u], s = l.ma[0], h = l.Oa, 0 > h.x * (a.x - s.x) + h.y * (a.y - s.y) + h.z * (a.z - s.z) && e.d(l, a);
              return 4
            }())) {
            for (; s < c;) {
              if (u = r[s], u.$b) {
                for (i = u.$b; null !== i;) i.face.visible = !0, i = i.pc;
                var h, p;
                i = 0;
                e: for (; i < f.length; i++)
                  if (l = f[i], !1 === l.visible) {
                    var d = l.C;
                    for (a = 0; 3 > a; a++)
                      if (!0 === d[a].visible) {
                        h = l, p = a;
                        break e
                      }
                  } l = [];
                var d = [],
                  b = h,
                  v = p;
                do {
                  if (l.push(b), d.push(v), v = (v + 1) % 3, !1 === b.C[v].visible)
                    do {
                      for (i = b.ma[v], b = b.C[v], a = 0; 3 > a; a++) b.ma[a] == i && (v = a)
                    } while (!1 === b.C[v].visible && (b !== h || v !== p))
                } while (b !== h || v !== p);
                var g = null,
                  y = null;
                for (i = 0; i < l.length; i++) {
                  var m, b = l[i],
                    v = d[i],
                    x = b.C[v],
                    w = b.ma[(v + 1) % 3],
                    C = b.ma[v],
                    T = w.y - u.y,
                    S = C.z - u.z,
                    z = w.x - u.x,
                    k = w.z - u.z,
                    M = C.x - u.x,
                    L = C.y - u.y;
                  0 < o.length ? (m = o.pop(), m.ma[0] = u, m.ma[1] = w, m.ma[2] = C, m.Oa.x = T * S - k * L, m.Oa.y = k * M - z * S, m.Oa.z = z * L - T * M, m.jb.length = 0, m.visible = !1, m.sd = !0) : m = {
                      ma: [u, w, C],
                      C: Array(3),
                      Oa: {
                        x: T * S - k * L,
                        y: k * M - z * S,
                        z: z * L - T * M
                      },
                      jb: [],
                      visible: !1
                    }, f.push(m), b.C[v] = m, m.C[1] = b, null !== y && (y.C[0] = m, m.C[2] = y), y = m, null === g && (g = m),
                    function (t, n, r) {
                      var o, i, u = t.ma[0],
                        l = t.Oa,
                        s = l.x,
                        f = l.y,
                        l = l.z,
                        h = Array(c);
                      for (n = n.jb, o = n.length, a = 0; a < o; a++) i = n[a].jd, h[i.index] = !0, 0 > s * (i.x - u.x) + f * (i.y - u.y) + l * (i.z - u.z) && e.d(t, i);
                      for (n = r.jb, o = n.length, a = 0; a < o; a++) i = n[a].jd, !0 !== h[i.index] && 0 > s * (i.x - u.x) + f * (i.y - u.y) + l * (i.z - u.z) && e.d(t, i)
                    }(m, b, x)
                }
                for (y.C[0] = g, g.C[2] = y, i = [], a = 0; a < f.length; a++)
                  if (l = f[a], !0 === l.visible) {
                    for (d = l.jb, b = d.length, u = 0; u < b; u++) v = d[u], g = v.cd, y = v.pc, null !== g && (g.pc = y), null !== y && (y.cd = g), null === g && (v.jd.$b = y), n.push(v);
                    l.sd && o.push(l)
                  } else i.push(l);
                f = i
              }
              s++
            }
            for (i = 0; i < f.length; i++) l = f[i], l.sd && o.push(l)
          }
          return {
            Ke: f
          }
        }, e.d = function (t, r) {
          var o;
          0 < n.length ? (o = n.pop(), o.face = t, o.jd = r, o.pc = null, o.cd = null) : o = new e(t, r), t.jb.push(o);
          var i = r.$b;
          null !== i && (i.cd = o), o.pc = i, r.$b = o
        };
        for (var n = Array(2e3), r = 0; r < n.length; r++) n[r] = new e(null, null);
        for (var o = Array(1e3), r = 0; r < o.length; r++) o[r] = {
          ma: Array(3),
          C: Array(3),
          Oa: {
            x: 0,
            y: 0,
            z: 0
          },
          jb: [],
          visible: !1
        }
      },
      X = new function () {
        function e(e, n, r, o, i, a, u, l) {
          var c = (e - r) * (a - l) - (n - o) * (i - u);
          return Math.abs(c) < t ? void 0 : {
            x: ((e * o - n * r) * (i - u) - (e - r) * (i * l - a * u)) / c,
            y: ((e * o - n * r) * (a - l) - (n - o) * (i * l - a * u)) / c
          }
        }
        var t = 1e-12;
        return this.cb = function (n, r) {
          for (var o = n[0], i = o.x, a = o.y, u = o.x, l = o.y, c = n.length - 1; 0 < c; c--) o = n[c], i = Math.min(i, o.x), a = Math.min(a, o.y), u = Math.max(u, o.x), l = Math.max(l, o.y);
          if (u - i < 3 * r || l - a < 3 * r) o = void 0;
          else {
            e: {
              for (o = !0, void 0 == o && (o = !1), i = [], a = n.length, u = 0; u <= a; u++) {
                var s, f, h, l = n[u % a],
                  c = n[(u + 1) % a],
                  p = n[(u + 2) % a];
                s = c.x - l.x, f = c.y - l.y, h = Math.sqrt(s * s + f * f);
                var d = r * s / h,
                  b = r * f / h;
                if (s = p.x - c.x, f = p.y - c.y, h = Math.sqrt(s * s + f * f), s = r * s / h, f = r * f / h, (l = e(l.x - b, l.y + d, c.x - b, c.y + d, c.x - f, c.y + s, p.x - f, p.y + s)) && (i.push(l), p = i.length, o && 3 <= p && (l = i[p - 3], c = i[p - 2], p = i[p - 1], 0 > (c.x - l.x) * (p.y - l.y) - (p.x - l.x) * (c.y - l.y)))) {
                  o = void 0;
                  break e
                }
              }
              i.shift(),
              o = 3 > i.length ? void 0 : i
            }
            if (!o) e: {
              for (i = n.slice(0), o = 0; o < n.length; o++) {
                if (u = n[o % n.length], c = n[(o + 1) % n.length], p = c.x - u.x, a = c.y - u.y, l = Math.sqrt(p * p + a * a), p = r * p / l, l = r * a / l, a = u.x - l, u = u.y + p, l = c.x - l, c = c.y + p, 0 != i.length) {
                  for (b = a - l, f = u - c, p = [], s = h = !0, d = void 0, d = 0; d < i.length; d++) {
                    var v = b * (u - i[d].y) - (a - i[d].x) * f;
                    v <= t && v >= -t && (v = 0), p.push(v), 0 < v && (h = !1), 0 > v && (s = !1)
                  }
                  if (h) i = [];
                  else if (!s) {
                    for (b = [], d = 0; d < i.length; d++) f = (d + 1) % i.length, h = p[d], s = p[f], 0 <= h && b.push(i[d]), (0 < h && 0 > s || 0 > h && 0 < s) && b.push(e(i[d].x, i[d].y, i[f].x, i[f].y, a, u, l, c));
                    i = b
                  }
                }
                if (3 > i.length) {
                  o = void 0;
                  break e
                }
              }
              o = i
            }
          }
          return o
        }, this
      },
      J = new function () {
        function e(e) {
          for (var t = e[0].x, n = e[0].y, r = t, o = n, i = 1; i < e.length; i++) var a = e[i],
            t = Math.min(t, a.x),
            n = Math.min(n, a.y),
            r = Math.max(r, a.x),
            o = Math.max(o, a.y);
          return e = r - t, o -= n, [{
            x: t + 2 * e,
            y: n + 2 * o,
            f: 0
          }, {
            x: t + 2 * e,
            y: n - 2 * o,
            f: 0
          }, {
            x: t - 2 * e,
            y: n + 2 * o,
            f: 0
          }]
        }
        var t = 1e-12;
        this.S = function (n, r) {
          if (1 === n.length) n[0].o = r.slice(0), n[0].C = [];
          else {
            var o, i;
            i = e(r);
            var a, u = [];
            for (o = 0; o < i.length; o++) a = i[o], u.push({
              x: a.x,
              y: a.y,
              z: a.x * a.x + a.y * a.y - a.f
            });
            for (o = 0; o < n.length; o++) a = n[o], a.o = null, u.push({
              x: a.x,
              y: a.y,
              z: a.x * a.x + a.y * a.y - a.f
            });
            var l = K.S(u).Ke;
            for (function () {
                for (o = 0; o < l.length; o++) {
                  var e = l[o],
                    t = e.ma,
                    n = t[0],
                    r = t[1],
                    i = t[2],
                    t = n.x,
                    a = n.y,
                    n = n.z,
                    u = r.x,
                    c = r.y,
                    r = r.z,
                    s = i.x,
                    f = i.y,
                    i = i.z,
                    h = t * (c - f) + u * (f - a) + s * (a - c);
                  e.ha = {
                    x: -(a * (r - i) + c * (i - n) + f * (n - r)) / h / 2,
                    y: -(n * (u - s) + r * (s - t) + i * (t - u)) / h / 2
                  }
                }
              }(), function (e) {
                for (o = 0; o < l.length; o++) {
                  var t = l[o];
                  t.tb = !V.Ta(e, t.ha)
                }
              }(r), u = function (e, t) {
                var n, r = Array(t.length);
                for (n = 0; n < r.length; n++) r[n] = [];
                for (n = 0; n < e.length; n++) {
                  var o = e[n];
                  if (!(0 > o.Oa.z))
                    for (var i = o.C, a = 0; a < i.length; a++) {
                      var u = i[a];
                      if (!(0 > u.Oa.z)) {
                        var l = o.ma,
                          c = l[(a + 1) % 3].index,
                          l = l[a].index;
                        2 < c && r[c - 3].push([o, u, 2 < l ? t[l - 3] : null])
                      }
                    }
                }
                return r
              }(l, n), o = 0; o < n.length; o++)
              if (a = u[o], 0 !== a.length) {
                var c = n[o];
                a = function (e) {
                  var t = [e[0]],
                    n = e[0][0],
                    r = e[0][1],
                    o = e.length,
                    i = 1;
                  e: for (; i < o; i++)
                    for (var a = 1; a < o; a++) {
                      var u = e[a];
                      if (null !== u) {
                        if (u[1] === n) {
                          if (t.unshift(u), n = u[0], e[a] = null, t.length === o) break e;
                          continue
                        }
                        if (u[0] === r && (t.push(u), r = u[1], e[a] = null, t.length === o)) break e
                      }
                    }
                  return t[0][0] != t[o - 1][1] && t.push([t[o - 1][1], t[0][0]]), t
                }(a);
                var s = a.length,
                  f = -1;
                for (i = 0; i < s; i++) a[i][0].tb && (f = i);
                if (0 <= f)(function (e, n, r, o) {
                  var i, a = [],
                    u = [],
                    l = r.length,
                    c = n.length,
                    s = 0,
                    f = -1,
                    h = -1,
                    p = -1,
                    d = null,
                    b = o;
                  for (o = 0; o < l; o++) {
                    var v = (b + 1) % l,
                      g = r[b][0],
                      y = r[v][0];
                    if (V.d(g.ha, y.ha) > t)
                      if (g.tb && y.tb) {
                        var m = [],
                          x = [];
                        for (i = 0; i < c && (f = (s + 1) % c, !(d = V.za(n[s], n[f], g.ha, y.ha, !1)) || (x.push(s), 2 !== m.push(d))); i++) s = f;
                        if (2 === m.length) {
                          if (f = m[1], d = V.d(g.ha, m[0]), f = V.d(g.ha, f), g = d < f ? 0 : 1, d = d < f ? 1 : 0, f = x[g], -1 === h && (h = f), -1 !== p)
                            for (; f != p;) p = (p + 1) % c, a.push(n[p]), u.push(null);
                          a.push(m[g], m[d]), u.push(r[b][2], null), p = x[d]
                        }
                      } else if (g.tb && !y.tb)
                      for (i = 0; i < c; i++) {
                        if (f = (s + 1) % c, d = V.za(n[s], n[f], g.ha, y.ha, !1)) {
                          if (-1 !== p)
                            for (m = p; s != m;) m = (m + 1) % c, a.push(n[m]), u.push(null);
                          a.push(d), u.push(r[b][2]), -1 === h && (h = s);
                          break
                        }
                        s = f
                      } else if (!g.tb && y.tb)
                        for (i = 0; i < c; i++) {
                          if (f = (s + 1) % c, d = V.za(n[s], n[f], g.ha, y.ha, !1)) {
                            a.push(g.ha, d), u.push(r[b][2], null), p = s;
                            break
                          }
                          s = f
                        } else a.push(g.ha), u.push(r[b][2]);
                    b = v
                  }
                  if (0 == a.length) u = a = null;
                  else if (-1 !== p)
                    for (; h != p;) p = (p + 1) % c, a.push(n[p]), u.push(null);
                  e.o = a, e.C = u
                })(c, r, a, f);
                else {
                  var f = [],
                    h = [];
                  for (i = 0; i < s; i++) V.d(a[i][0].ha, a[(i + 1) % s][0].ha) > t && (f.push(a[i][0].ha), h.push(a[i][2]));
                  c.o = f, c.C = h
                }
                c.o && 3 > c.o.length && (c.o = null, c.C = null)
              }
          }
        }, this.zc = function (t, n) {
          var r, o, i = !1,
            a = t.length;
          for (o = 0; o < a; o++) r = t[o], null === r.o && (i = !0), r.pe = r.f;
          if (i) {
            var u, l, i = e(n),
              c = [];
            for (o = t.length, r = 0; r < i.length; r++) u = i[r], c.push({
              x: u.x,
              y: u.y,
              z: u.x * u.x + u.y * u.y
            });
            for (r = 0; r < o; r++) u = t[r], c.push({
              x: u.x,
              y: u.y,
              z: u.x * u.x + u.y * u.y
            });
            for (u = K.S(c).Ke, i = Array(o), r = 0; r < o; r++) i[r] = {};
            for (c = u.length, r = 0; r < c; r++)
              if (l = u[r], 0 < l.Oa.z) {
                var s = l.ma,
                  f = s.length;
                for (l = 0; l < f - 1; l++) {
                  var h = s[l].index - 3,
                    p = s[l + 1].index - 3;
                  0 <= h && 0 <= p && (i[h][p] = !0, i[p][h] = !0)
                }
                l = s[0].index - 3, 0 <= p && 0 <= l && (i[p][l] = !0, i[l][p] = !0)
              } for (r = 0; r < o; r++) {
              l = i[r], u = t[r];
              var d, p = Number.MAX_VALUE,
                c = null;
              for (d in l) l = t[d], s = V.d(u, l), p > s && (p = s, c = l);
              u.Tj = c, u.vf = Math.sqrt(p)
            }
            for (o = 0; o < a; o++) r = t[o], d = Math.min(Math.sqrt(r.f), .95 * r.vf), r.f = d * d;
            for (this.S(t, n), o = 0; o < a; o++) r = t[o], r.pe !== r.f && 0 < r.uc && (d = Math.min(r.uc, r.pe - r.f), r.f += d, r.uc -= d)
          }
        }
      },
      Y = new function () {
        this.Dg = function (e) {
          e = e.e;
          for (var t = 0, n = e.length, r = 0; r < n; r++) {
            var o = e[r];
            if (o.o) {
              var i = o.x,
                a = o.y;
              V.k(o.o, o), i -= o.x, o = a - o.y, o = (0 < i ? i : -i) + (0 < o ? o : -o), t < o && (t = o)
            }
          }
          return t
        }, this.ya = function (e, t) {
          var n, r, o, i, a = e.e;
          switch (t) {
            case "random":
              return e.e[Math.floor(a.length * Math.random())];
            case "topleft":
              n = a[0];
              var u = n.x + n.y;
              for (i = 1; i < a.length; i++) r = a[i], (o = r.x + r.y) < u && (u = o, n = r);
              return n;
            case "bottomright":
              for (n = a[0], u = n.x + n.y, i = 1; i < a.length; i++) r = a[i], (o = r.x + r.y) > u && (u = o, n = r);
              return n;
            default:
              for (n = a[0], o = r = V.d(e, n), i = a.length - 1; 1 <= i; i--) u = a[i], (r = V.d(e, u)) < o && (o = r, n = u);
              return n
          }
        }, this.Ja = function (e, t, n) {
          var r = e.e;
          if (r[0].C) {
            var o = r.length;
            for (e = 0; e < o; e++) r[e].kd = !1, r[e].ic = 0;
            var i, a, o = [];
            for (a = i = 0, o[i++] = t || r[0], t = t.ic = 0; a < i;)
              if (r = o[a++], !r.kd && r.C) {
                n(r, t++, r.ic), r.kd = !0;
                var u = r.C,
                  l = u.length;
                for (e = 0; e < l; e++) {
                  var c = u[e];
                  c && !0 !== c.kd && (0 === c.ic && (c.ic = r.ic + 1), o[i++] = c)
                }
              }
          } else
            for (e = 0; e < r.length; e++) n(r[e], e, 1)
        }
      },
      Z = function () {
        function e(e, l, s, p, d, b, v, x) {
          var w = H.extend({}, u, e);
          1 > e.lineHeight && (e.lineHeight = 1), e = w.fontFamily;
          var C = w.fontStyle + " " + w.fontVariant + " " + w.fontWeight,
            T = w.rb,
            S = w.Yc,
            z = C + " " + e;
          w.Oe = z;
          var k = {
            la: !1,
            mc: 0,
            fontSize: 0
          };
          if (l.save(), l.font = C + " " + m + "px " + e, l.textBaseline = "middle", l.textAlign = "center", t(l, w), s = s.trim(), g.text = s, o(p, d, b, y), /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/.test(s) ? (r(g), n(l, g, z), i(w, g, y, S, T, !0, k)) : (n(l, g, z), i(w, g, y, S, T, !1, k), !k.la && (v && (r(g), n(l, g, z)), x || v) && (x && (k.ec = !0), i(w, g, y, S, S, !0, k))), k.la) {
            var M = "",
              L = 0,
              _ = Number.MAX_VALUE,
              j = Number.MIN_VALUE;
            a(w, g, k.mc, k.fontSize, y, k.ec, function (e, t) {
              0 < M.length && t === c && (M += c), M += e
            }, function (e, t, n, r, o) {
              r === h && (M += f), l.save(), l.translate(b.x, t), e = k.fontSize / m, l.scale(e, e), l.fillText(M, 0, 0), l.restore(), M = n, L < o && (L = o), _ > t && (_ = t), j < t && (j = t)
            }), k.da = {
              x: b.x - L / 2,
              y: _ - k.fontSize / 2,
              f: L,
              i: j - _ + k.fontSize
            }, l.restore()
          } else l.clear && l.clear();
          return k
        }

        function t(e, t) {
          var n = t.Oe,
            r = l[n];
          void 0 === r && (r = {}, l[n] = r), r[c] = e.measureText(c).width, r[s] = e.measureText(s).width
        }

        function n(e, t, n) {
          var r, o = t.text.split(/(\n|[ \f\r\t\v\u2028\u2029]+|\u00ad+|\u200b+)/),
            i = [],
            a = [],
            u = o.length >>> 1;
          for (r = 0; r < u; r++) i.push(o[2 * r]), a.push(o[2 * r + 1]);
          for (2 * r < o.length && (i.push(o[2 * r]), a.push(void 0)), n = l[n], r = 0; r < i.length; r++) o = i[r], void 0 === (u = n[o]) && (u = e.measureText(o).width, n[o] = u);
          t.ld = i, t.lg = a
        }

        function r(e) {
          for (var t = e.text.split(/\s+/), n = [], r = {
              ".": !0,
              ",": !0,
              ";": !0,
              "?": !0,
              "!": !0,
              ":": !0,
              "。": !0
            }, o = 0; o < t.length; o++) {
            var i = t[o];
            if (3 < i.length) {
              for (var a = "", a = a + i.charAt(0), a = a + i.charAt(1), u = 2; u < i.length - 2; u++) {
                var l = i.charAt(u);
                r[l] || (a += p), a += l
              }
              a += p, a += i.charAt(i.length - 2), a += i.charAt(i.length - 1), n.push(a)
            } else n.push(i)
          }
          e.text = n.join(c)
        }

        function o(e, t, n, r) {
          for (var o, i, a = 0; a < e.length; a++) e[a].y === t.y && (void 0 === o ? o = a : i = a);
          void 0 === i && (i = o), o !== i && e[i].x < e[o].x && (a = o, o = i, i = a), r.o = e, r.q = t, r.ud = n, r.tf = o, r.uf = i
        }

        function i(e, t, n, r, o, i, u) {
          var l = e.lineHeight,
            c = Math.max(e.eb, .001),
            s = e.sb,
            f = t.ld,
            h = n.ud,
            p = n.q,
            d = void 0,
            b = void 0;
          switch (e.verticalAlign) {
            case "top":
              h = p.y + p.i - h.y;
              break;
            case "bottom":
              h = h.y - p.y;
              break;
            default:
              h = 2 * Math.min(h.y - p.y, p.y + p.i - h.y)
          }
          if (0 >= (s = Math.min(h, s * n.q.i))) u.la = !1;
          else {
            h = r, o = Math.min(o, s), p = Math.min(1, s / Math.max(20, t.ld.length));
            do {
              var v = (h + o) / 2,
                g = Math.min(f.length, Math.floor((s + v * (l - 1 - 2 * c)) / (v * l))),
                y = void 0;
              if (0 < g)
                for (var m = 1, x = g;;) {
                  var w = Math.floor((m + x) / 2);
                  if (a(e, t, w, v, n, i && v === r && w === g, null, null)) {
                    if (x = d = y = w, m === x) break
                  } else if ((m = w + 1) > x) break
                }
              void 0 !== y ? h = b = v : o = v
            } while (o - h > p);
            void 0 === b ? (u.la = !1, u.fontSize = 0) : (u.la = !0, u.fontSize = b, u.mc = d, u.ec = i && v === h)
          }
        }

        function a(e, t, n, r, o, i, a, u) {
          var f = e.ob,
            h = r * (e.lineHeight - 1),
            p = e.verticalAlign,
            g = Math.max(e.eb, .001);
          e = l[e.Oe];
          var y = t.ld;
          t = t.lg;
          var x, w = o.o,
            C = o.ud,
            T = o.tf,
            S = o.uf;
          switch (p) {
            case "top":
              o = C.y + r / 2 + r * g, x = 1;
              break;
            case "bottom":
              o = C.y - (r * n + h * (n - 1)) + r / 2 - r * g, x = -1;
              break;
            default:
              o = C.y - (r * (n - 1) / 2 + h * (n - 1) / 2), x = 1
          }
          for (p = o, g = 0; g < n; g++) d[2 * g] = o - r / 2, d[2 * g + 1] = o + r / 2, o += x * r, o += x * h;
          for (; b.length < d.length;) b.push(Array(2));
          g = d, o = 2 * n, x = b;
          for (var z = w.length, k = T, T = (T - 1 + z) % z, M = S, S = (S + 1) % z, L = 0; L < o;) {
            for (var _ = g[L], j = w[T]; j.y < _;) k = T, T = (T - 1 + z) % z, j = w[T];
            for (var P = w[S]; P.y < _;) M = S, S = (S + 1) % z, P = w[S];
            var D = w[k],
              F = w[M],
              P = F.x + (P.x - F.x) * (_ - F.y) / (P.y - F.y);
            x[L][0] = D.x + (j.x - D.x) * (_ - D.y) / (j.y - D.y), x[L][1] = P, L++
          }
          for (g = 0; g < n; g++) w = 2 * g, o = C.x, x = o - b[w][0], z = b[w][1] - o, x = x < z ? x : z, z = o - b[w + 1][0], w = b[w + 1][1] - o, w = z < w ? z : w, v[g] = 2 * (x < w ? x : w) - f * r;
          for (k = e[c] * r / m, x = e[s] * r / m, f = 0, T = v[f], C = 0, w = void 0, g = 0; g < y.length; g++) {
            if (o = y[g], M = t[g], z = e[o] * r / m, C + z < T && y.length - g >= n - f && "\n" != w) C += z, " " === M && (C += k), a && a(o, w);
            else {
              if (z > T && (f !== n - 1 || !i)) return !1;
              if (f + 1 >= n) return !!i && (n = T - C - x, (n > x || z > x) && 0 < (n = Math.floor(o.length * n / z)) && a && a(o.substring(0, n), w), a && a(s, void 0), u && u(f, p, o, w, C), !0);
              if (f++, u && u(f, p, o, w, C), p += r, p += h, T = v[f], C = z, " " === M && (C += k), z > T && (f !== n || !i)) return !1
            }
            w = M
          }
          return u && u(f, p, void 0, void 0, C), !0
        }
        var u = {
            rb: 72,
            Yc: 0,
            lineHeight: 1.05,
            ob: 1,
            eb: .5,
            sb: .9,
            fontFamily: "sans-serif",
            fontStyle: "normal",
            fontWeight: "normal",
            fontVariant: "normal",
            verticalAlign: "center"
          },
          l = {},
          c = " ",
          s = "…",
          f = "‐",
          h = "­",
          p = "​",
          d = [],
          b = [],
          v = [],
          g = {
            text: "",
            ld: void 0,
            lg: void 0
          },
          y = {
            o: void 0,
            q: void 0,
            ud: void 0,
            tf: 0,
            uf: 0
          },
          m = 100;
        return {
          Me: e,
          ye: function (t, n, r, o, i, a, u, l, c, s, f, h) {
            var p, d = 0,
              b = 0;
            return r = r.toString().trim(), !h && c.result && r === c.sg && Math.abs(s - c.ve) / s <= f && (p = c.result, p.la && (d = a.x - c.zg, b = a.y - c.Ag, f = c.hd, n.save(), n.translate(d, b), f.Sa(n), n.restore())), p || (f = c.hd, f.clear(), p = e(t, f, r, o, i, a, u, l), p.la && f.Sa(n), c.ve = s, c.zg = a.x, c.Ag = a.y, c.result = p, c.sg = r), p.la ? {
              la: !0,
              mc: p.mc,
              fontSize: p.fontSize,
              da: {
                x: p.da.x + d,
                y: p.da.y + b,
                f: p.da.f,
                i: p.da.i
              },
              ec: p.ec
            } : {
              la: !1
            }
          },
          xi: function () {
            return {
              ve: 0,
              zg: 0,
              Ag: 0,
              result: void 0,
              hd: new O,
              sg: void 0
            }
          },
          Ea: u
        }
      }(),
      Q = new function () {
        function e(e, t) {
          return function (r, o, i, a) {
            function u(e, r, o, a, c) {
              if (0 != e.length) {
                var s, f, h, p, d = e.shift(),
                  b = n(d);
                if (t(a, c)) {
                  s = r, h = b / a;
                  do {
                    b = d.shift(), f = b.vc, p = f / h, f = b;
                    var v = o,
                      g = h;
                    f.x = s + p / 2, f.y = v + g / 2, i && l(b, s, o, p, h), s += p
                  } while (0 < d.length);
                  return u(e, r, o + h, a, c - h)
                }
                s = o, p = b / c;
                do {
                  b = d.shift(), f = b.vc, h = f / p, f = b, v = s, g = h, f.x = r + p / 2, f.y = v + g / 2, i && l(b, r, s, p, h), s += h
                } while (0 < d.length);
                return u(e, r + p, o, a - p, c)
              }
            }

            function l(e, t, n, r, o) {
              e.o = [{
                x: t,
                y: n
              }, {
                x: t + r,
                y: n
              }, {
                x: t + r,
                y: n + o
              }, {
                x: t,
                y: n + o
              }]
            }
            var c = o.x,
              s = o.y,
              f = o.f;
            if (o = o.i, 0 != r.length)
              if (1 == r.length) r[0].x = c + f / 2, r[0].y = s + o / 2, r[0].Dd = 0, i && l(r[0], c, s, f, o);
              else {
                r = r.slice(0);
                for (var h = 0, p = 0; p < r.length; p++) h += r[p].T;
                for (h = f * o / h, p = 0; p < r.length; p++) r[p].vc = r[p].T * h;
                a = e(r, f, o, [
                  [r.shift()]
                ], a), u(a, c, s, f, o)
              }
          }
        }

        function t(e, t, r, o) {
          function i(e) {
            return Math.max(Math.pow(l * e / u, r), Math.pow(u / (l * e), o))
          }
          var a = n(e),
            u = a * a,
            l = t * t;
          for (t = i(e[0].vc), a = 1; a < e.length; a++) t = Math.max(t, i(e[a].vc));
          return t
        }

        function n(e) {
          for (var t = 0, n = 0; n < e.length; n++) t += e[n].vc;
          return t
        }
        this.ue = e(function (e, r, o, i, a) {
          a = Math.pow(2, a);
          for (var u = 1 / a, l = r < o; 0 < e.length;) {
            var c = i[i.length - 1],
              s = e.shift(),
              f = l ? r : o,
              h = l ? a : u,
              p = l ? u : a,
              d = t(c, f, h, p);
            c.push(s), f = t(c, f, h, p), d < f && (c.pop(), i.push([s]), l ? o -= n(c) / r : r -= n(c) / o, l = r < o)
          }
          return i
        }, function (e, t) {
          return e < t
        }), this.Xb = e(function (e, n, r, o, i) {
          function a(e) {
            if (1 < o.length) {
              for (var r = o[o.length - 1], i = o[o.length - 2].slice(0), a = 0; a < r.length; a++) i.push(r[a]);
              t(i, n, u, l) < e && o.splice(-2, 2, i)
            }
          }
          for (var u = Math.pow(2, i), l = 1 / u; 0 < e.length;) {
            if (r = o[o.length - 1], i = t(r, n, u, l), 0 == e.length) return;
            var c = e.shift();
            r.push(c);
            i < t(r, n, u, l) && (r.pop(), a(i), o.push([c]))
          }
          return a(t(o[o.length - 1], n, u, l)), o
        }, function () {
          return !0
        })
      },
      $ = new function () {
        var e = window.console;
        this.Pa = function (e) {
          throw "FoamTree: " + e
        }, this.info = function (t) {
          e.info("FoamTree: " + t)
        }, this.warn = function (t) {
          e.warn("FoamTree: " + t)
        }
      },
      ee = new function () {
        this.Gg = function (e) {
          e.beginPath(), e.moveTo(3.2, 497), e.bezierCurveTo(.1, 495.1, 0, 494.1, 0, 449.6), e.bezierCurveTo(0, 403.5, -.1, 404.8, 4.1, 402.6), e.bezierCurveTo(5.2, 402, 7.4, 401.4, 9, 401.2), e.bezierCurveTo(10.6, 401, 31.2, 400.6, 54.7, 400.2), e.bezierCurveTo(99.5, 399.4, 101, 399.5, 104.6, 402.3), e.bezierCurveTo(107.9, 404.9, 107.6, 404, 129.3, 473.2), e.bezierCurveTo(131, 478.6, 132.9, 484.4, 133.4, 486.1), e.bezierCurveTo(135.2, 491.4, 135.4, 494.9, 134, 496.4), e.bezierCurveTo(132.8, 497.7, 131.7, 497.7, 68.6, 497.7), e.bezierCurveTo(24.2, 497.7, 4, 497.5, 3.2, 497), e.closePath(), e.fillStyle = "rgba(220,20,3,1)", e.fill(), e.beginPath(), e.moveTo(162.1, 497), e.bezierCurveTo(159.5, 496.3, 157.7, 494.6, 156.2, 491.6), e.bezierCurveTo(155.5, 490.3, 148.7, 469.4, 141.1, 445.2), e.bezierCurveTo(126.1, 397.5, 125.6, 395.4, 128.1, 389.8), e.bezierCurveTo(129.5, 386.7, 164.1, 339, 168, 334.9), e.bezierCurveTo(170.3, 332.5, 172.2, 332.1, 175.1, 333.7), e.bezierCurveTo(176.1, 334.2, 189.3, 347, 204.3, 362.1), e.bezierCurveTo(229.4, 387.4, 231.8, 390, 233.5, 394), e.bezierCurveTo(235.2, 397.8, 235.4, 399.2, 235.4, 404.3), e.bezierCurveTo(235.3, 415, 230.5, 489.9, 229.8, 492.5), e.bezierCurveTo(228.4, 497.5, 229.2, 497.4, 194.7, 497.5), e.bezierCurveTo(177.8, 497.6, 163.1, 497.4, 162.1, 497), e.closePath(), e.fillStyle = "rgba(220,20,3,1)", e.fill(), e.beginPath(), e.moveTo(258.7, 497), e.bezierCurveTo(255.8, 496.1, 252.6, 492.3, 252, 489.1), e.bezierCurveTo(251.4, 484.8, 256.8, 405.2, 258.1, 401.1), e.bezierCurveTo(260.4, 393.4, 262.7, 391.1, 300.4, 359.2), e.bezierCurveTo(319.9, 342.6, 337.7, 327.9, 339.9, 326.5), e.bezierCurveTo(347.4, 321.6, 350.4, 321, 372, 320.5), e.bezierCurveTo(393.4, 320, 400.5, 320.4, 407.5, 322.5), e.bezierCurveTo(413.9, 324.4, 487.4, 359.5, 490.6, 362.1), e.bezierCurveTo(492, 363.3, 493.9, 365.8, 495, 367.7), e.lineTo(496.8, 371.2), e.lineTo(497, 419.3), e.bezierCurveTo(497.1, 445.7, 497, 468, 496.8, 468.8), e.bezierCurveTo(496.2, 471.6, 489.6, 480.8, 485, 485.3), e.bezierCurveTo(478.6, 491.7, 474.9, 494.1, 468.2, 496), e.lineTo(462.3, 497.7), e.lineTo(361.6, 497.7), e.bezierCurveTo(303.1, 497.6, 259.9, 497.3, 258.7, 497), e.closePath(), e.fillStyle = "rgba(200,200,200,1)", e.fill(), e.beginPath(), e.moveTo(4.4, 380.8), e.bezierCurveTo(2.9, 380.2, 1.7, 379.8, 1.6, 379.8), e.bezierCurveTo(1.5, 379.8, 1.2, 378.8, .7, 377.6), e.bezierCurveTo(.2, 376.1, 0, 361.6, 0, 331.2), e.bezierCurveTo(0, 281.2, -.2, 283.1, 4.9, 280.9), e.bezierCurveTo(7.1, 279.9, 19.3, 278.2, 54.8, 274.1), e.bezierCurveTo(80.6, 271.1, 102.9, 268.6, 104.4, 268.6), e.bezierCurveTo(105.8, 268.6, 109.1, 269.4, 111.7, 270.4), e.bezierCurveTo(116, 272.1, 117.2, 273.2, 133.4, 289.3), e.bezierCurveTo(150.9, 306.8, 153.4, 310, 153.4, 314.5), e.bezierCurveTo(153.4, 317.6, 151.1, 321.3, 136.4, 341.2), e.bezierCurveTo(109.4, 377.8, 111.6, 375.3, 105.4, 378.1), e.lineTo(101.3, 380), e.lineTo(75.7, 380.5), e.bezierCurveTo(6.8, 381.8, 7.3, 381.8, 4.4, 380.8), e.closePath(), e.fillStyle = "rgba(220,20,3,1)", e.fill(), e.beginPath(), e.moveTo(243.5, 372.4), e.bezierCurveTo(240.2, 370.8, 136.6, 266.7, 134.2, 262.6), e.bezierCurveTo(132.1, 259, 131.7, 254.9, 133.2, 251.3), e.bezierCurveTo(134.5, 248.2, 166.3, 206, 169.3, 203.4), e.bezierCurveTo(172.6, 200.5, 178.5, 198.4, 183.2, 198.4), e.bezierCurveTo(187.1, 198.4, 275.2, 204.1, 281.6, 204.8), e.bezierCurveTo(289.7, 205.7, 294.6, 208.7, 297.6, 214.6), e.bezierCurveTo(300.5, 220.3, 327.4, 297.4, 327.8, 301.1), e.bezierCurveTo(328.3, 305.7, 326.7, 310.4, 323.4, 314), e.bezierCurveTo(322, 315.6, 307.8, 327.9, 291.9, 341.3), e.bezierCurveTo(256.2, 371.4, 256.6, 371.2, 253.9, 372.5), e.bezierCurveTo(251.1, 373.9, 246.5, 373.9, 243.5, 372.4), e.closePath(), e.fillStyle = "rgba(220,20,3,1)", e.fill(), e.beginPath(), e.moveTo(489.3, 339.1), e.bezierCurveTo(488.6, 338.9, 473.7, 331.9, 456.3, 323.6), e.bezierCurveTo(435.9, 313.9, 423.8, 307.8, 422.4, 306.4), e.bezierCurveTo(419.5, 303.7, 418, 300.2, 418, 296.1), e.bezierCurveTo(418, 292.5, 438, 185, 439.3, 181.6), e.bezierCurveTo(441.2, 176.6, 445.5, 173.1, 450.8, 172.1), e.bezierCurveTo(456, 171.2, 487.1, 169.2, 489.6, 169.7), e.bezierCurveTo(493.1, 170.3, 495.5, 171.9, 497, 174.7), e.bezierCurveTo(498.1, 176.7, 498.2, 181.7, 498.4, 253.2), e.bezierCurveTo(498.5, 295.3, 498.4, 330.9, 498.2, 332.5), e.bezierCurveTo(497.5, 337.4, 493.7, 340.2, 489.3, 339.1), e.closePath(), e.fillStyle = "rgba(220,20,3,1)", e.fill(), e.beginPath(), e.moveTo(353.2, 300.7), e.bezierCurveTo(350.4, 299.8, 347.9, 297.9, 346.5, 295.6), e.bezierCurveTo(345.8, 294.5, 338.2, 273.7, 329.6, 249.5), e.bezierCurveTo(314.6, 207.1, 314.1, 205.3, 314.1, 200.4), e.bezierCurveTo(314.1, 196.7, 314.4, 194.6, 315.3, 193), e.bezierCurveTo(316, 191.7, 322.5, 181.6, 329.8, 170.6), e.bezierCurveTo(346.8, 144.8, 345.4, 145.8, 365.8, 144.4), e.bezierCurveTo(380.9, 143.4, 385.7, 143.7, 390.6, 146.3), e.bezierCurveTo(397.3, 149.8, 417.4, 164.4, 419.2, 167), e.bezierCurveTo(422.4, 171.8, 422.4, 171.8, 410.6, 234.4), e.bezierCurveTo(402.3, 278.6, 399.3, 293.2, 398.1, 295.3), e.bezierCurveTo(395.4, 300.1, 393.7, 300.5, 373, 300.9), e.bezierCurveTo(363.1, 301.1, 354.2, 301, 353.2, 300.7), e.closePath(), e.fillStyle = "rgba(220,20,3,1)", e.fill(), e.beginPath(), e.moveTo(6.2, 259.9), e.bezierCurveTo(4.9, 259.2, 3.2, 257.8, 2.4, 256.8), e.bezierCurveTo(1, 254.9, 1, 254.8, .8, 148.7), e.bezierCurveTo(.7, 74, .9, 40.8, 1.4, 36.7), e.bezierCurveTo(2.3, 29.6, 4.7, 24.4, 9.8, 18.3), e.bezierCurveTo(14.1, 13.1, 20.9, 7.3, 25, 5.3), e.bezierCurveTo(26.5, 4.6, 31, 3.3, 34.9, 2.6), e.bezierCurveTo(41.3, 1.3, 44.2, 1.2, 68.5, 1.4), e.lineTo(95.1, 1.6), e.lineTo(99, 3.5), e.bezierCurveTo(101.2, 4.6, 103.9, 6.6, 105.2, 8.1), e.bezierCurveTo(107.7, 11, 153.1, 88.2, 155.8, 94), e.bezierCurveTo(159.1, 101.4, 159.6, 104.7, 159.5, 121.6), e.bezierCurveTo(159.5, 147.8, 158.4, 177.2, 157.3, 181), e.bezierCurveTo(156.8, 182.8, 155.6, 186.1, 154.6, 188.1), e.bezierCurveTo(152.6, 192.2, 119.5, 237.2, 115.1, 241.8), e.bezierCurveTo(112.1, 244.9, 106.3, 248.3, 102, 249.4), e.bezierCurveTo(99.2, 250.1, 13, 261.1, 10.1, 261.1), e.bezierCurveTo(9.2, 261.1, 7.5, 260.6, 6.2, 259.9), e.closePath(), e.fillStyle = "rgba(200,200,200,1)", e.fill(), e.beginPath(), e.moveTo(234.1, 183.4), e.bezierCurveTo(180.2, 179.7, 182.3, 180, 179.5, 174.5), e.lineTo(178, 171.4), e.lineTo(178.7, 142.4), e.bezierCurveTo(179.4, 114.8, 179.5, 113.3, 180.9, 110.4), e.bezierCurveTo(183.5, 105, 182.7, 105.2, 237.9, 95.3), e.bezierCurveTo(285.1, 86.7, 287.9, 86.3, 291, 87.1), e.bezierCurveTo(292.8, 87.6, 295.3, 88.8, 296.7, 89.9), e.bezierCurveTo(299.1, 91.8, 321.9, 124.4, 325, 130.3), e.bezierCurveTo(326.9, 134, 327.2, 139.1, 325.7, 142.6), e.bezierCurveTo(324.5, 145.5, 302.5, 179.1, 300.2, 181.5), e.bezierCurveTo(297, 184.9, 293.5, 186.3, 287.4, 186.5), e.bezierCurveTo(284.4, 186.6, 260.4, 185.2, 234.1, 183.4), e.closePath(), e.fillStyle = "rgba(220,20,3,1)", e.fill(), e.beginPath(), e.moveTo(435.8, 153.4), e.bezierCurveTo(434.8, 153.1, 433, 152.3, 431.7, 151.6), e.bezierCurveTo(428.4, 150, 410.1, 137.1, 407, 134.4), e.bezierCurveTo(404.1, 131.8, 402.7, 128.3, 403.2, 125.1), e.bezierCurveTo(403.6, 122.9, 420.3, 81.3, 423, 75.9), e.bezierCurveTo(424.7, 72.6, 426.6, 70.4, 429.3, 68.9), e.bezierCurveTo(431.1, 67.9, 435, 67.7, 462.2, 67.6), e.lineTo(493.1, 67.3), e.lineTo(495.4, 69.6), e.bezierCurveTo(497, 71.3, 497.8, 72.8, 498.1, 75), e.bezierCurveTo(498.4, 76.6, 498.5, 92.9, 498.4, 111.1), e.bezierCurveTo(498.2, 141.2, 498.1, 144.3, 497, 146.3), e.bezierCurveTo(494.8, 150.3, 493.3, 150.6, 470.3, 152.4), e.bezierCurveTo(448.6, 154, 438.8, 154.3, 435.8, 153.4), e.closePath(), e.fillStyle = "rgba(220,20,3,1)", e.fill(), e.beginPath(), e.moveTo(346.6, 125.3), e.bezierCurveTo(345, 124.5, 342.6, 122.6, 341.4, 121), e.bezierCurveTo(337.1, 115.7, 313, 79.8, 311.6, 76.7), e.bezierCurveTo(309.4, 71.7, 309.3, 68, 311.2, 58.2), e.bezierCurveTo(319.2, 16.9, 321.3, 7.1, 322.4, 5.2), e.bezierCurveTo(323.1, 4, 324.7, 2.4, 326, 1.6), e.bezierCurveTo(328.3, .3, 329.4, .3, 353.9, .3), e.bezierCurveTo(379.2, .3, 379.5, .3, 382.4, 1.8), e.bezierCurveTo(384, 2.7, 386, 4.5, 386.9, 5.9), e.bezierCurveTo(388.6, 8.6, 405.1, 46.3, 407.2, 52.2), e.bezierCurveTo(408.7, 56.3, 408.8, 60.7, 407.7, 64.1), e.bezierCurveTo(407.3, 65.4, 402.2, 78.2, 396.3, 92.7), e.bezierCurveTo(382.6, 126.3, 384.1, 124.6, 366.6, 126), e.bezierCurveTo(353.4, 127.1, 350, 127, 346.6, 125.3), e.closePath(), e.fillStyle = "rgba(220,20,3,1)", e.fill(), e.beginPath(), e.moveTo(179.2, 85.6), e.bezierCurveTo(175.7, 84.6, 171.9, 82, 170, 79.2), e.bezierCurveTo(167.2, 75.2, 130.6, 12.4, 129.3, 9.3), e.bezierCurveTo(128.2, 6.7, 128.1, 5.9, 128.8, 4.2);
          e.bezierCurveTo(130.5, 0, 125.2, .3, 211.7, 0), e.bezierCurveTo(255.3, -.1, 292.2, 0, 293.9, .3), e.bezierCurveTo(297.7, .8, 301.1, 4, 301.8, 7.6), e.bezierCurveTo(302.3, 10.5, 293.9, 55.2, 291.9, 59.6), e.bezierCurveTo(290.4, 63, 286.1, 66.9, 282.3, 68.3), e.bezierCurveTo(279.6, 69.3, 193.5, 85.1, 185.5, 86.1), e.bezierCurveTo(183.8, 86.3, 181, 86.1, 179.2, 85.6), e.closePath(), e.fillStyle = "rgba(220,20,3,1)", e.fill(), e.beginPath(), e.moveTo(431.9, 47.7), e.bezierCurveTo(428.7, 46.9, 426.4, 45.2, 424.6, 42.3), e.bezierCurveTo(421.8, 37.8, 409.2, 7.7, 409.2, 5.5), e.bezierCurveTo(409.2, 1.2, 408, 1.3, 451.6, 1.3), e.bezierCurveTo(495, 1.3, 494, 1.2, 496.1, 5.4), e.bezierCurveTo(497, 7.2, 497.2, 10.2, 497, 25.5), e.lineTo(496.8, 43.5), e.lineTo(494.9, 45.4), e.lineTo(493, 47.3), e.lineTo(474.8, 47.7), e.bezierCurveTo(450.1, 48.3, 434.5, 48.3, 431.9, 47.7), e.closePath(), e.fillStyle = "rgba(200,200,200,1)", e.fill(), e.beginPath(), e.moveTo(1.3, 511.9), e.lineTo(1.3, 514.3), e.lineTo(3.7, 514.3), e.bezierCurveTo(7.2, 514.4, 9.5, 515.5, 10.6, 517.6), e.bezierCurveTo(11.7, 519.8, 12.1, 522.7, 12, 526.3), e.lineTo(12, 591), e.lineTo(22.8, 591), e.lineTo(22.8, 553.2), e.lineTo(49.9, 553.2), e.lineTo(49.9, 548.5), e.lineTo(22.8, 548.5), e.lineTo(22.8, 516.7), e.lineTo(41.9, 516.7), e.bezierCurveTo(46.7, 516.7, 50.4, 517.8, 52.9, 520), e.bezierCurveTo(55.5, 522.2, 56.8, 525.7, 56.8, 530.5), e.lineTo(59.2, 530.5), e.lineTo(59.2, 521.5), e.bezierCurveTo(59.3, 519, 58.7, 516.8, 57.3, 514.9), e.bezierCurveTo(55.9, 513, 53.1, 512, 49, 511.9), e.closePath(), e.fillStyle = "rgba(220,20,3,1)", e.fill(), e.beginPath(), e.moveTo(107.6, 562.8), e.bezierCurveTo(107.6, 569.9, 106.2, 575.7, 103.5, 580.3), e.bezierCurveTo(100.8, 584.8, 97.2, 587.2, 92.7, 587.4), e.bezierCurveTo(88.1, 587.2, 84.5, 584.8, 81.8, 580.3), e.bezierCurveTo(79.1, 575.7, 77.8, 569.9, 77.7, 562.8), e.bezierCurveTo(77.8, 555.8, 79.1, 550, 81.8, 545.4), e.bezierCurveTo(84.5, 540.8, 88.1, 538.4, 92.7, 538.3), e.bezierCurveTo(97.2, 538.4, 100.8, 540.8, 103.5, 545.4), e.bezierCurveTo(106.2, 550, 107.6, 555.8, 107.6, 562.8), e.moveTo(66.3, 562.8), e.bezierCurveTo(66.4, 571.1, 68.7, 578, 73.2, 583.5), e.bezierCurveTo(77.8, 589.1, 84.2, 591.9, 92.7, 592.1), e.bezierCurveTo(101.1, 591.9, 107.6, 589.1, 112.1, 583.5), e.bezierCurveTo(116.7, 578, 118.9, 571.1, 119, 562.8), e.bezierCurveTo(118.9, 554.5, 116.7, 547.6, 112.1, 542.1), e.bezierCurveTo(107.6, 536.6, 101.1, 533.7, 92.7, 533.5), e.bezierCurveTo(84.2, 533.7, 77.8, 536.6, 73.2, 542.1), e.bezierCurveTo(68.7, 547.6, 66.4, 554.5, 66.3, 562.8), e.closePath(), e.fillStyle = "rgba(220,20,3,1)", e.fill(), e.beginPath(), e.moveTo(161.5, 579.6), e.bezierCurveTo(160.3, 581.4, 158.9, 583.1, 157.2, 584.5), e.bezierCurveTo(155.4, 585.9, 153.1, 586.7, 150.1, 586.8), e.bezierCurveTo(147, 586.8, 144.4, 585.9, 142.2, 584), e.bezierCurveTo(140, 582.1, 138.9, 579.3, 138.8, 575.4), e.bezierCurveTo(138.8, 571.7, 140.5, 568.9, 143.8, 566.7), e.bezierCurveTo(147.2, 564.6, 151.9, 563.5, 157.9, 563.4), e.lineTo(161.5, 563.4), e.moveTo(172.3, 591), e.lineTo(172.3, 558.6), e.bezierCurveTo(172.1, 548.2, 169.9, 541.3, 165.8, 538), e.bezierCurveTo(161.7, 534.7, 156.9, 533.2, 151.3, 533.5), e.bezierCurveTo(147.6, 533.5, 144.1, 533.8, 140.8, 534.5), e.bezierCurveTo(137.4, 535.1, 135, 536.2, 133.4, 537.7), e.bezierCurveTo(131.9, 539.2, 131.1, 540.8, 130.7, 542.6), e.bezierCurveTo(130.4, 544.4, 130.3, 546.4, 130.4, 548.5), e.lineTo(135.8, 548.5), e.bezierCurveTo(136.7, 544.6, 138.3, 542, 140.5, 540.5), e.bezierCurveTo(142.8, 538.9, 145.6, 538.2, 148.9, 538.3), e.bezierCurveTo(152.6, 538.1, 155.6, 539.4, 157.9, 542.2), e.bezierCurveTo(160.2, 545, 161.4, 550.5, 161.5, 558.6), e.lineTo(157.9, 558.6), e.bezierCurveTo(149.6, 558.5, 142.5, 559.7, 136.6, 562.1), e.bezierCurveTo(130.7, 564.5, 127.6, 568.9, 127.4, 575.4), e.bezierCurveTo(127.7, 581.8, 129.8, 586.3, 133.6, 588.7), e.bezierCurveTo(137.4, 591.1, 141.1, 592.3, 144.7, 592.1), e.bezierCurveTo(149.2, 592.1, 152.8, 591.3, 155.6, 590), e.bezierCurveTo(158.3, 588.6, 160.3, 587.1, 161.5, 585.6), e.lineTo(162.1, 585.6), e.lineTo(166.3, 591), e.closePath(), e.fillStyle = "rgba(220,20,3,1)", e.fill(), e.beginPath(), e.moveTo(200.3, 539.5), e.bezierCurveTo(199.8, 538, 198.7, 536.8, 197, 536), e.bezierCurveTo(195.4, 535.1, 193.1, 534.7, 190.2, 534.7), e.lineTo(179.4, 534.7), e.lineTo(179.4, 537.1), e.lineTo(181.8, 537.1), e.bezierCurveTo(185.3, 537.1, 187.6, 538.2, 188.7, 540.4), e.bezierCurveTo(189.8, 542.5, 190.3, 545.4, 190.2, 549.1), e.lineTo(190.2, 591), e.lineTo(200.9, 591), e.lineTo(200.9, 545.2), e.bezierCurveTo(202.4, 543.5, 204.2, 542, 206.2, 540.8), e.bezierCurveTo(208.3, 539.6, 210.5, 538.9, 212.9, 538.9), e.bezierCurveTo(215.9, 538.8, 218.3, 540, 219.9, 542.5), e.bezierCurveTo(221.6, 544.9, 222.4, 549.1, 222.5, 555), e.lineTo(222.5, 591), e.lineTo(233.2, 591), e.lineTo(233.2, 555), e.bezierCurveTo(233.3, 553.8, 233.2, 552.3, 233.2, 550.6), e.bezierCurveTo(233.1, 549, 232.9, 547.6, 232.6, 546.7), e.bezierCurveTo(233.9, 544.8, 235.7, 543, 238, 541.4), e.bezierCurveTo(240.4, 539.8, 242.7, 539, 245.2, 538.9), e.bezierCurveTo(248.2, 538.8, 250.6, 540, 252.3, 542.5), e.bezierCurveTo(253.9, 544.9, 254.8, 549.1, 254.8, 555), e.lineTo(254.8, 591), e.lineTo(265.6, 591), e.lineTo(265.6, 555), e.bezierCurveTo(265.4, 546.5, 263.8, 540.8, 260.6, 537.8), e.bezierCurveTo(257.4, 534.7, 253.4, 533.3, 248.8, 533.5), e.bezierCurveTo(245.4, 533.5, 242.2, 534.2, 238.9, 535.7), e.bezierCurveTo(235.7, 537.1, 233, 539.2, 230.9, 541.9), e.bezierCurveTo(229.3, 538.6, 227.3, 536.4, 224.8, 535.2), e.bezierCurveTo(222.3, 534, 219.5, 533.4, 216.5, 533.5), e.bezierCurveTo(212.9, 533.6, 209.8, 534.2, 207.1, 535.4), e.bezierCurveTo(204.5, 536.5, 202.4, 537.9, 200.9, 539.5), e.closePath(), e.fillStyle = "rgba(220,20,3,1)", e.fill(), e.beginPath(), e.moveTo(284, 511.9), e.bezierCurveTo(279.9, 512, 277.2, 513, 275.8, 514.9), e.bezierCurveTo(274.4, 516.8, 273.7, 519, 273.8, 521.5), e.lineTo(273.8, 530.5), e.lineTo(276.2, 530.5), e.bezierCurveTo(276.3, 525.7, 277.6, 522.2, 280.1, 520), e.bezierCurveTo(282.7, 517.8, 286.4, 516.7, 291.2, 516.7), e.lineTo(302, 516.7), e.lineTo(302, 590.9), e.lineTo(312.7, 590.9), e.lineTo(312.7, 516.7), e.lineTo(339.7, 516.7), e.lineTo(339.7, 511.9), e.closePath(), e.fillStyle = "rgba(220,20,3,1)", e.fill(), e.beginPath(), e.moveTo(349.4, 590.9), e.lineTo(360.2, 590.9), e.lineTo(360.2, 546.7), e.bezierCurveTo(361.4, 544.8, 363, 543.4, 364.9, 542.3), e.bezierCurveTo(366.9, 541.2, 369.1, 540.7, 371.5, 540.7), e.bezierCurveTo(373.7, 540.7, 375.5, 541, 377.2, 541.6), e.bezierCurveTo(378.9, 542.2, 380.2, 543.1, 381.1, 544.3), e.lineTo(385.9, 540.7), e.bezierCurveTo(385.3, 539.5, 384.7, 538.4, 384, 537.5), e.bezierCurveTo(383.4, 536.6, 382.6, 535.9, 381.7, 535.3), e.bezierCurveTo(380.8, 534.7, 379.7, 534.2, 378.3, 533.9), e.bezierCurveTo(377, 533.6, 375.8, 533.5, 374.5, 533.5), e.bezierCurveTo(370.9, 533.6, 367.9, 534.3, 365.5, 535.7), e.bezierCurveTo(363.2, 537, 361.4, 538.5, 360.2, 540.1), e.lineTo(359.6, 540.1), e.bezierCurveTo(359, 538.3, 357.9, 536.9, 356.3, 536), e.bezierCurveTo(354.6, 535.1, 352.4, 534.7, 349.4, 534.7), e.lineTo(339.8, 534.7), e.lineTo(339.8, 537.1), e.lineTo(341, 537.1), e.bezierCurveTo(344.5, 537.1, 346.8, 538.2, 347.9, 540.4), e.bezierCurveTo(349, 542.5, 349.5, 545.4, 349.4, 549.1), e.closePath(), e.fillStyle = "rgba(220,20,3,1)", e.fill(), e.beginPath(), e.moveTo(440.3, 559.8), e.bezierCurveTo(440.3, 551.4, 438.3, 544.9, 434.4, 540.4), e.bezierCurveTo(430.4, 535.8, 424.4, 533.5, 416.3, 533.5), e.bezierCurveTo(408.8, 533.7, 403, 536.6, 399, 542.1), e.bezierCurveTo(395, 547.6, 393, 554.5, 393, 562.8), e.bezierCurveTo(393, 571.1, 395.1, 578, 399.3, 583.5), e.bezierCurveTo(403.5, 589.1, 409.7, 591.9, 418.1, 592.1), e.bezierCurveTo(422.6, 592.2, 426.7, 591.2, 430.2, 589.2), e.bezierCurveTo(433.8, 587.2, 437, 584, 439.7, 579.6), e.lineTo(437.3, 577.8), e.bezierCurveTo(435.2, 580.8, 432.9, 583.1, 430.2, 584.8), e.bezierCurveTo(427.6, 586.5, 424.4, 587.3, 420.5, 587.4), e.bezierCurveTo(415.4, 587.2, 411.4, 585.1, 408.6, 580.9);
          e.bezierCurveTo(405.8, 576.8, 404.4, 571.3, 404.4, 564.6), e.lineTo(440, 564.6), e.moveTo(404.4, 559.8), e.bezierCurveTo(404.4, 553.7, 405.6, 548.7, 407.9, 544.9), e.bezierCurveTo(410.3, 541, 413.3, 539, 416.9, 538.9), e.bezierCurveTo(421.1, 538.9, 424.3, 540.8, 426.4, 544.4), e.bezierCurveTo(428.4, 548.1, 429.5, 553.2, 429.5, 559.8), e.closePath(), e.fillStyle = "rgba(220,20,3,1)", e.fill(), e.beginPath(), e.moveTo(497.1, 559.8), e.bezierCurveTo(497.1, 551.4, 495.1, 544.9, 491.2, 540.4), e.bezierCurveTo(487.2, 535.8, 481.2, 533.5, 473.1, 533.5), e.bezierCurveTo(465.6, 533.7, 459.9, 536.6, 455.9, 542.1), e.bezierCurveTo(451.9, 547.6, 449.8, 554.5, 449.8, 562.8), e.bezierCurveTo(449.8, 571.1, 451.9, 578, 456.1, 583.5), e.bezierCurveTo(460.3, 589.1, 466.6, 591.9, 474.9, 592.1), e.bezierCurveTo(479.4, 592.2, 483.5, 591.2, 487.1, 589.2), e.bezierCurveTo(490.6, 587.2, 493.8, 584, 496.5, 579.6), e.lineTo(494.1, 577.8), e.bezierCurveTo(492, 580.8, 489.7, 583.1, 487.1, 584.8), e.bezierCurveTo(484.4, 586.5, 481.2, 587.3, 477.3, 587.4), e.bezierCurveTo(472.2, 587.2, 468.2, 585.1, 465.4, 580.9), e.bezierCurveTo(462.6, 576.8, 461.2, 571.3, 461.2, 564.6), e.lineTo(496.8, 564.6), e.moveTo(461.2, 559.8), e.bezierCurveTo(461.2, 553.7, 462.4, 548.7, 464.8, 544.9), e.bezierCurveTo(467.1, 541, 470.1, 539, 473.7, 538.9), e.bezierCurveTo(477.9, 538.9, 481.1, 540.8, 483.2, 544.4), e.bezierCurveTo(485.3, 548.1, 486.3, 553.2, 486.3, 559.8), e.closePath(), e.fillStyle = "rgba(220,20,3,1)", e.fill()
        }
      };
    ee.yc = {
      width: 498,
      height: 592
    };
    var te, ne, re, oe;
    D.Cd(function () {
      window.CarrotSearchFoamTree = function (e) {
        function t(e, t) {
          if (!u || u.exists(e)) switch (e) {
            case "selection":
              return s.cb();
            case "open":
              return s.Pa();
            case "exposure":
              return s.Ja();
            case "state":
              return s.ya.apply(this, t);
            case "geometry":
              return s.Ba.apply(this, t);
            case "hierarchy":
              return s.gb.apply(this, t);
            case "containerCoordinates":
              return s.Aa.apply(this, t);
            case "imageData":
              return s.S.apply(this, t);
            case "viewport":
              return s.za();
            case "times":
              return s.zc();
            case "onModelChanged":
            case "onRedraw":
            case "onRolloutStart":
            case "onRolloutComplete":
            case "onRelaxationStep":
            case "onGroupHover":
            case "onGroupOpenOrCloseChanging":
            case "onGroupExposureChanging":
            case "onGroupSelectionChanging":
            case "onGroupSelectionChanged":
            case "onGroupClick":
            case "onGroupDoubleClick":
            case "onGroupHold":
              var n = l[e];
              return Array.isArray(n) ? n : [n];
            default:
              return l[e]
          }
        }

        function n(e) {
          function t(e, t) {
            return H.Q(n, e) ? (t(n[e]), delete n[e], 1) : 0
          }
          var n;
          if (0 === arguments.length) return 0;
          1 === arguments.length ? n = H.extend({}, arguments[0]) : 2 === arguments.length && (n = {}, n[arguments[0]] = arguments[1]), u && u.validate(n, c.ni);
          var r = 0;
          s && (r += t("selection", s.A), r += t("open", s.k), r += t("exposure", s.d));
          var i = {};
          return H.Ga(n, function (e, t) {
            (l[t] !== e || H.jc(e)) && (i[t] = e, r++), l[t] = e
          }), 0 < r && o(i), r
        }

        function r(e, t) {
          var n = "on" + e.charAt(0).toUpperCase() + e.slice(1),
            r = l[n];
          l[n] = t(Array.isArray(r) ? r : [r]), r = {}, r[n] = l[n], o(r)
        }

        function o(e) {
          (function () {
            function t(t, n) {
              return H.Q(e, t) || void 0 === n ? W.m(l[t], a) : n
            }
            c.ni = l.logging, c.bc = l.dataObject, c.n = l.pixelRatio, c.xb = l.wireframePixelRatio, c.ab = l.stacking, c.dc = l.descriptionGroupType, c.Hc = l.descriptionGroupPosition, c.bh = l.descriptionGroupDistanceFromCenter, c.cc = l.descriptionGroupSize, c.De = l.descriptionGroupMinHeight, c.Ce = l.descriptionGroupMaxHeight, c.Ee = l.descriptionGroupPolygonDrawn, c.Vc = l.layout, c.lc = l.layoutByWeightOrder, c.tj = l.showZeroWeightGroups, c.We = l.groupMinDiameter, c.ce = l.rectangleAspectRatioPreference, c.fj = l.initializer || l.relaxationInitializer, c.gj = l.relaxationMaxDuration, c.de = l.relaxationVisible, c.bg = l.relaxationQualityThreshold, c.Rh = l.groupResizingBudget, c.zh = l.groupGrowingDuration, c.yh = l.groupGrowingDrag, c.Ah = l.groupGrowingEasing, c.jh = l.groupBorderRadius, c.lb = l.groupBorderWidth, c.Ra = l.groupBorderWidthScaling, c.zd = l.groupInsetWidth, c.kh = l.groupBorderRadiusCorrection, c.mb = l.groupStrokeWidth, c.Qc = l.groupSelectionOutlineWidth, c.Vh = l.groupSelectionOutlineColor, c.Ad = l.groupSelectionOutlineShadowSize, c.Xe = l.groupSelectionOutlineShadowColor, c.Sh = l.groupSelectionFillHueShift, c.Uh = l.groupSelectionFillSaturationShift, c.Th = l.groupSelectionFillLightnessShift, c.Ze = l.groupSelectionStrokeHueShift, c.af = l.groupSelectionStrokeSaturationShift, c.$e = l.groupSelectionStrokeLightnessShift, c.xh = l.groupFillType, c.th = l.groupFillGradientRadius, c.qh = l.groupFillGradientCenterHueShift, c.sh = l.groupFillGradientCenterSaturationShift, c.rh = l.groupFillGradientCenterLightnessShift, c.uh = l.groupFillGradientRimHueShift, c.wh = l.groupFillGradientRimSaturationShift, c.vh = l.groupFillGradientRimLightnessShift, c.Bd = l.groupStrokeType, c.mb = l.groupStrokeWidth, c.bf = l.groupStrokePlainHueShift, c.df = l.groupStrokePlainSaturationShift, c.cf = l.groupStrokePlainLightnessShift, c.$h = l.groupStrokeGradientRadius, c.Wh = l.groupStrokeGradientAngle, c.ai = l.groupStrokeGradientUpperHueShift, c.ci = l.groupStrokeGradientUpperSaturationShift, c.bi = l.groupStrokeGradientUpperLightnessShift, c.Xh = l.groupStrokeGradientLowerHueShift, c.Zh = l.groupStrokeGradientLowerSaturationShift, c.Yh = l.groupStrokeGradientLowerLightnessShift, c.Bh = l.groupHoverFillHueShift, c.Dh = l.groupHoverFillSaturationShift, c.Ch = l.groupHoverFillLightnessShift, c.Te = l.groupHoverStrokeHueShift, c.Ve = l.groupHoverStrokeSaturationShift, c.Ue = l.groupHoverStrokeLightnessShift, c.Va = l.groupExposureScale, c.ph = l.groupExposureShadowColor, c.Se = l.groupExposureShadowSize, c.Pc = l.groupExposureZoomMargin, c.ei = l.groupUnexposureLightnessShift, c.fi = l.groupUnexposureSaturationShift, c.di = l.groupUnexposureLabelColorThreshold, c.Ua = l.exposeDuration, c.gc = l.exposeEasing, c.bd = l.openCloseDuration, c.lh = W.m(l.groupColorDecorator, a), c.mh = l.groupColorDecorator !== H.ta, c.Gh = W.m(l.groupLabelDecorator, a), c.Hh = l.groupLabelDecorator !== H.ta, c.Mh = W.m(l.groupLabelLayoutDecorator, a), c.Nh = l.groupLabelLayoutDecorator !== H.ta, c.nh = W.m(l.groupContentDecorator, a), c.Oc = l.groupContentDecorator !== H.ta, c.oh = l.groupContentDecoratorTriggering, c.bj = l.rainbowStartColor, c.Vi = l.rainbowEndColor, c.Ti = l.rainbowColorDistribution, c.Ui = l.rainbowColorDistributionAngle, c.Yi = l.rainbowLightnessDistributionAngle, c.Zi = l.rainbowLightnessShift, c.$i = l.rainbowLightnessShiftCenter, c.aj = l.rainbowSaturationCorrection, c.Xi = l.rainbowLightnessCorrection, c.Zf = l.parentFillOpacity, c.vi = l.parentStrokeOpacity, c.$f = l.parentLabelOpacity, c.ag = l.parentOpacityBalancing, c.Qh = l.groupLabelUpdateThreshold, c.Ih = l.groupLabelFontFamily, c.Jh = l.groupLabelFontStyle, c.Kh = l.groupLabelFontVariant, c.Lh = l.groupLabelFontWeight, c.Ph = l.groupLabelMinFontSize, c.Pj = l.groupLabelMaxFontSize, c.Oj = l.groupLabelLineHeight, c.Nj = l.groupLabelHorizontalPadding, c.Rj = l.groupLabelVerticalPadding, c.Qj = l.groupLabelMaxTotalHeight, c.Fh = l.groupLabelDarkColor, c.Oh = l.groupLabelLightColor, c.Eh = l.groupLabelColorThreshold, c.Dj = l.wireframeDrawMaxDuration, c.Ej = l.wireframeLabelDrawing, c.Cj = l.wireframeContentDecorationDrawing, c.yg = l.wireframeToFinalFadeDuration, c.Fj = l.wireframeToFinalFadeDelay, c.gh = l.finalCompleteDrawMaxDuration, c.hh = l.finalIncrementalDrawMaxDuration, c.Ne = l.finalToWireframeFadeDuration, c.qd = l.androidStockBrowserWorkaround, c.ff = l.incrementalDraw, c.pi = l.maxGroups, c.Nd = l.maxGroupLevelsDrawn, c.oi = l.maxGroupLabelLevelsDrawn, c.he = l.rolloutStartPoint, c.ge = l.rolloutMethod, c.kj = l.rolloutEasing, c.fe = l.rolloutDuration, c.gg = l.rolloutScalingStrength, c.ig = l.rolloutTranslationXStrength, c.jg = l.rolloutTranslationYStrength, c.fg = l.rolloutRotationStrength, c.hg = l.rolloutTransformationCenter, c.oj = l.rolloutPolygonDrag, c.pj = l.rolloutPolygonDuration, c.lj = l.rolloutLabelDelay, c.mj = l.rolloutLabelDrag, c.nj = l.rolloutLabelDuration, c.jj = l.rolloutChildGroupsDrag, c.ij = l.rolloutChildGroupsDelay, c.Mi = l.pullbackStartPoint, c.Gi = l.pullbackMethod, c.Ci = l.pullbackEasing, c.Uj = l.pullbackType, c.Yd = l.pullbackDuration, c.Li = l.pullbackScalingStrength, c.Oi = l.pullbackTranslationXStrength, c.Pi = l.pullbackTranslationYStrength, c.Ki = l.pullbackRotationStrength, c.Ni = l.pullbackTransformationCenter, c.Hi = l.pullbackPolygonDelay, c.Ii = l.pullbackPolygonDrag, c.Ji = l.pullbackPolygonDuration, c.Di = l.pullbackLabelDelay, c.Ei = l.pullbackLabelDrag, c.Fi = l.pullbackLabelDuration, c.zi = l.pullbackChildGroupsDelay, c.Ai = l.pullbackChildGroupsDrag, c.Bi = l.pullbackChildGroupsDuration, c.Le = l.fadeDuration, c.fh = l.fadeEasing, c.Gj = l.zoomMouseWheelFactor, c.wc = l.zoomMouseWheelDuration, c.xc = l.zoomMouseWheelEasing, c.qi = l.maxLabelSizeForTitleBar, c.wj = l.titleBarFontFamily, c.tg = l.titleBarBackgroundColor, c.ug = l.titleBarTextColor, c.xj = l.titleBarMinFontSize, c.ne = l.titleBarMaxFontSize, c.yj = l.titleBarTextPaddingLeftRight, c.zj = l.titleBarTextPaddingTopBottom, c.vj = l.titleBarDecorator, c.Kj = l.attributionText, c.Hj = l.attributionLogo, c.Jj = l.attributionLogoScale, c.Lj = l.attributionUrl, c.we = l.attributionPosition, c.Sg = l.attributionDistanceFromCenter, c.Ug = l.attributionWeight, c.Tg = l.attributionTheme, c.hf = l.interactionHandler, c.Uf = t("onModelChanging", c.Uf), c.Tf = t("onModelChanged", c.Tf), c.Vf = t("onRedraw", c.Vf), c.Xf = t("onRolloutStart", c.Xf), c.Wf = t("onRolloutComplete", c.Wf), c.Sd = t("onRelaxationStep", c.Sd), c.Yf = t("onViewReset", c.Yf), c.Mf = t("onGroupOpenOrCloseChanging", c.Mf), c.Lf = t("onGroupOpenOrCloseChanged", c.Lf), c.Ef = t("onGroupExposureChanging", c.Ef), c.Df = t("onGroupExposureChanged", c.Df), c.Of = t("onGroupSelectionChanging", c.Of), c.Nf = t("onGroupSelectionChanged", c.Nf), c.Gf = t("onGroupHover", c.Gf), c.If = t("onGroupMouseMove", c.If);
            c.yf = t("onGroupClick", c.yf), c.zf = t("onGroupDoubleClick", c.zf), c.Ff = t("onGroupHold", c.Ff), c.Kf = t("onGroupMouseWheel", c.Kf), c.Jf = t("onGroupMouseUp", c.Jf), c.Hf = t("onGroupMouseDown", c.Hf), c.Cf = t("onGroupDragStart", c.Cf), c.Af = t("onGroupDrag", c.Af), c.Bf = t("onGroupDragEnd", c.Bf), c.Rf = t("onGroupTransformStart", c.Rf), c.Pf = t("onGroupTransform", c.Pf), c.Qf = t("onGroupTransformEnd", c.Qf), c.Sf = t("onKeyUp", c.Sf)
          })(), c.cj = I.Ba(c.bj), c.Wi = I.Ba(c.Vi), c.Ye = I.Ba(c.Xe), c.Ij = null, s && (s.Wb(e), H.Q(e, "dataObject") && s.reload())
        }

        function i(e) {
          return function () {
            return e.apply(this, arguments).ih(a)
          }
        }
        var a = this,
          u = window.CarrotSearchFoamTree.asserts,
          l = H.extend({}, window.CarrotSearchFoamTree.defaults),
          c = {};
        n(e), (e = l.element || document.getElementById(l.id)) || $.Pa("Element to embed FoamTree in not found."), l.element = e;
        var s = new _(e, c, l);
        s.H();
        var f = {
          get: function (e) {
            return 0 === arguments.length ? H.extend({}, l) : t(arguments[0], Array.prototype.slice.call(arguments, 1))
          },
          set: n,
          on: function (e, t) {
            r(e, function (e) {
              return e.push(t), e
            })
          },
          off: function (e, t) {
            r(e, function (e) {
              return e.filter(function (e) {
                return e !== t
              })
            })
          },
          resize: s.Y,
          redraw: s.Xb,
          update: s.update,
          select: i(s.A),
          expose: i(s.d),
          open: i(s.k),
          reset: i(s.reset),
          zoom: i(s.Ac),
          trigger: function (e, t) {
            var n = s.Ta(e);
            n && n(t)
          },
          dispose: function () {
            function e() {
              throw "FoamTree instance disposed"
            }
            s.kb(), H.Ga(f, function (t, n) {
              "dispose" !== n && (a[n] = e)
            })
          }
        };
        H.Ga(f, function (e, t) {
          a[t] = e
        }), s.reload()
      }, window["CarrotSearchFoamTree.asserts"] && (window.CarrotSearchFoamTree.asserts = window["CarrotSearchFoamTree.asserts"], delete window["CarrotSearchFoamTree.asserts"]), window.CarrotSearchFoamTree.supported = !0, window.CarrotSearchFoamTree.version = j, window.CarrotSearchFoamTree.defaults = Object.freeze({
        id: void 0,
        element: void 0,
        logging: !1,
        dataObject: void 0,
        pixelRatio: 1,
        wireframePixelRatio: 1,
        layout: "relaxed",
        layoutByWeightOrder: !0,
        showZeroWeightGroups: !0,
        groupMinDiameter: 10,
        rectangleAspectRatioPreference: -1,
        relaxationInitializer: "fisheye",
        relaxationMaxDuration: 3e3,
        relaxationVisible: !1,
        relaxationQualityThreshold: 1,
        stacking: "hierarchical",
        descriptionGroupType: "stab",
        descriptionGroupPosition: 225,
        descriptionGroupDistanceFromCenter: 1,
        descriptionGroupSize: .125,
        descriptionGroupMinHeight: 35,
        descriptionGroupMaxHeight: .5,
        descriptionGroupPolygonDrawn: !1,
        maxGroups: 5e4,
        maxGroupLevelsDrawn: 4,
        maxGroupLabelLevelsDrawn: 3,
        groupGrowingDuration: 0,
        groupGrowingEasing: "bounce",
        groupGrowingDrag: 0,
        groupResizingBudget: 2,
        groupBorderRadius: .15,
        groupBorderWidth: 4,
        groupBorderWidthScaling: .6,
        groupInsetWidth: 6,
        groupBorderRadiusCorrection: 1,
        groupSelectionOutlineWidth: 5,
        groupSelectionOutlineColor: "#222",
        groupSelectionOutlineShadowSize: 0,
        groupSelectionOutlineShadowColor: "#fff",
        groupSelectionFillHueShift: 0,
        groupSelectionFillSaturationShift: 0,
        groupSelectionFillLightnessShift: 0,
        groupSelectionStrokeHueShift: 0,
        groupSelectionStrokeSaturationShift: 0,
        groupSelectionStrokeLightnessShift: -10,
        groupFillType: "gradient",
        groupFillGradientRadius: 1,
        groupFillGradientCenterHueShift: 0,
        groupFillGradientCenterSaturationShift: 0,
        groupFillGradientCenterLightnessShift: 20,
        groupFillGradientRimHueShift: 0,
        groupFillGradientRimSaturationShift: 0,
        groupFillGradientRimLightnessShift: -5,
        groupStrokeType: "plain",
        groupStrokeWidth: 1.5,
        groupStrokePlainHueShift: 0,
        groupStrokePlainSaturationShift: 0,
        groupStrokePlainLightnessShift: -10,
        groupStrokeGradientRadius: 1,
        groupStrokeGradientAngle: 45,
        groupStrokeGradientUpperHueShift: 0,
        groupStrokeGradientUpperSaturationShift: 0,
        groupStrokeGradientUpperLightnessShift: 20,
        groupStrokeGradientLowerHueShift: 0,
        groupStrokeGradientLowerSaturationShift: 0,
        groupStrokeGradientLowerLightnessShift: -20,
        groupHoverFillHueShift: 0,
        groupHoverFillSaturationShift: 0,
        groupHoverFillLightnessShift: 20,
        groupHoverStrokeHueShift: 0,
        groupHoverStrokeSaturationShift: 0,
        groupHoverStrokeLightnessShift: -10,
        groupExposureScale: 1.15,
        groupExposureShadowColor: "rgba(0, 0, 0, 0.5)",
        groupExposureShadowSize: 50,
        groupExposureZoomMargin: .1,
        groupUnexposureLightnessShift: 65,
        groupUnexposureSaturationShift: -65,
        groupUnexposureLabelColorThreshold: .35,
        exposeDuration: 700,
        exposeEasing: "squareInOut",
        groupColorDecorator: H.ta,
        groupLabelDecorator: H.ta,
        groupLabelLayoutDecorator: H.ta,
        groupContentDecorator: H.ta,
        groupContentDecoratorTriggering: "onLayoutDirty",
        openCloseDuration: 500,
        rainbowColorDistribution: "radial",
        rainbowColorDistributionAngle: -45,
        rainbowLightnessDistributionAngle: 45,
        rainbowSaturationCorrection: .1,
        rainbowLightnessCorrection: .4,
        rainbowStartColor: "hsla(0, 100%, 55%, 1)",
        rainbowEndColor: "hsla(359, 100%, 55%, 1)",
        rainbowLightnessShift: 30,
        rainbowLightnessShiftCenter: .4,
        parentFillOpacity: .7,
        parentStrokeOpacity: 1,
        parentLabelOpacity: 1,
        parentOpacityBalancing: !0,
        wireframeDrawMaxDuration: 15,
        wireframeLabelDrawing: "auto",
        wireframeContentDecorationDrawing: "auto",
        wireframeToFinalFadeDuration: 500,
        wireframeToFinalFadeDelay: 300,
        finalCompleteDrawMaxDuration: 80,
        finalIncrementalDrawMaxDuration: 100,
        finalToWireframeFadeDuration: 200,
        androidStockBrowserWorkaround: D.jf(),
        incrementalDraw: "fast",
        groupLabelFontFamily: "sans-serif",
        groupLabelFontStyle: "normal",
        groupLabelFontWeight: "normal",
        groupLabelFontVariant: "normal",
        groupLabelLineHeight: 1.05,
        groupLabelHorizontalPadding: 1,
        groupLabelVerticalPadding: 1,
        groupLabelMinFontSize: 6,
        groupLabelMaxFontSize: 160,
        groupLabelMaxTotalHeight: .9,
        groupLabelUpdateThreshold: .05,
        groupLabelDarkColor: "#000",
        groupLabelLightColor: "#fff",
        groupLabelColorThreshold: .35,
        rolloutStartPoint: "center",
        rolloutEasing: "squareOut",
        rolloutMethod: "groups",
        rolloutDuration: 2e3,
        rolloutScalingStrength: -.7,
        rolloutTranslationXStrength: 0,
        rolloutTranslationYStrength: 0,
        rolloutRotationStrength: -.7,
        rolloutTransformationCenter: .7,
        rolloutPolygonDrag: .1,
        rolloutPolygonDuration: .5,
        rolloutLabelDelay: .8,
        rolloutLabelDrag: .1,
        rolloutLabelDuration: .5,
        rolloutChildGroupsDrag: .1,
        rolloutChildGroupsDelay: .2,
        pullbackStartPoint: "center",
        pullbackEasing: "squareIn",
        pullbackMethod: "groups",
        pullbackDuration: 1500,
        pullbackScalingStrength: -.7,
        pullbackTranslationXStrength: 0,
        pullbackTranslationYStrength: 0,
        pullbackRotationStrength: -.7,
        pullbackTransformationCenter: .7,
        pullbackPolygonDelay: .3,
        pullbackPolygonDrag: .1,
        pullbackPolygonDuration: .8,
        pullbackLabelDelay: 0,
        pullbackLabelDrag: .1,
        pullbackLabelDuration: .3,
        pullbackChildGroupsDelay: .1,
        pullbackChildGroupsDrag: .1,
        pullbackChildGroupsDuration: .3,
        fadeDuration: 700,
        fadeEasing: "cubicInOut",
        zoomMouseWheelFactor: 1.5,
        zoomMouseWheelDuration: 500,
        zoomMouseWheelEasing: "squareOut",
        maxLabelSizeForTitleBar: 8,
        titleBarFontFamily: null,
        titleBarFontStyle: "normal",
        titleBarFontWeight: "normal",
        titleBarFontVariant: "normal",
        titleBarBackgroundColor: "rgba(0, 0, 0, 0.5)",
        titleBarTextColor: "rgba(255, 255, 255, 1)",
        titleBarMinFontSize: 10,
        titleBarMaxFontSize: 40,
        titleBarTextPaddingLeftRight: 20,
        titleBarTextPaddingTopBottom: 15,
        titleBarDecorator: H.ta,
        attributionText: null,
        attributionLogo: null,
        attributionLogoScale: .5,
        attributionUrl: "http://carrotsearch.com/foamtree",
        attributionPosition: "bottom-right",
        attributionDistanceFromCenter: 1,
        attributionWeight: .025,
        attributionTheme: "light",
        interactionHandler: D.ii() ? "hammerjs" : "builtin",
        onModelChanging: [],
        onModelChanged: [],
        onRedraw: [],
        onRolloutStart: [],
        onRolloutComplete: [],
        onRelaxationStep: [],
        onViewReset: [],
        onGroupOpenOrCloseChanging: [],
        onGroupOpenOrCloseChanged: [],
        onGroupExposureChanging: [],
        onGroupExposureChanged: [],
        onGroupSelectionChanging: [],
        onGroupSelectionChanged: [],
        onGroupHover: [],
        onGroupMouseMove: [],
        onGroupClick: [],
        onGroupDoubleClick: [],
        onGroupHold: [],
        onGroupMouseWheel: [],
        onGroupMouseUp: [],
        onGroupMouseDown: [],
        onGroupDragStart: [],
        onGroupDrag: [],
        onGroupDragEnd: [],
        onGroupTransformStart: [],
        onGroupTransform: [],
        onGroupTransformEnd: [],
        onKeyUp: [],
        selection: null,
        open: null,
        exposure: null,
        imageData: null,
        hierarchy: null,
        geometry: null,
        containerCoordinates: null,
        state: null,
        viewport: null,
        times: null
      }), window.CarrotSearchFoamTree.geometry = Object.freeze(function () {
        return {
          rectangleInPolygon: function (e, t, n, r, o, i, a) {
            return o = H.B(o, 1), i = H.B(i, .5), a = H.B(a, .5), e = V.te(e, {
              x: t,
              y: n
            }, r, i, a) * o, {
              x: t - e * r * i,
              y: n - e * a,
              w: e * r,
              h: e
            }
          },
          circleInPolygon: function (e, t, n) {
            return V.Eg(e, {
              x: t,
              y: n
            })
          },
          stabPolygon: function (e, t, n, r) {
            return V.Wb(e, {
              x: t,
              y: n
            }, r)
          },
          polygonCentroid: function (e) {
            return e = V.k(e, {}), {
              x: e.x,
              y: e.y,
              area: e.ja
            }
          },
          boundingBox: function (e) {
            for (var t = e[0].x, n = e[0].y, r = e[0].x, o = e[0].y, i = 1; i < e.length; i++) {
              var a = e[i];
              a.x < t && (t = a.x), a.y < n && (n = a.y), a.x > r && (r = a.x), a.y > o && (o = a.y)
            }
            return {
              x: t,
              y: n,
              w: r - t,
              h: o - n
            }
          }
        }
      }())
    }, function () {
      window.CarrotSearchFoamTree = function () {
        window.console.error("FoamTree is not supported on this browser.")
      }, window.CarrotSearchFoamTree.Wj = !1
    })
  })(), e.exports = CarrotSearchFoamTree
}, function (e, t, n) {
  "use strict";

  function r(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function a(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function u(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var l = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    c = n(0),
    s = n(3),
    f = r(s),
    h = n(15),
    p = r(h),
    d = function (e) {
      function t(e) {
        i(this, t);
        var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return n.saveNode = function (e) {
          return n.node = e
        }, n.onMouseMove = function (e) {
          Object.assign(n.mouseCoords, {
            x: e.pageX,
            y: e.pageY
          }), n.props.visible && n.updatePosition()
        }, n.mouseCoords = {
          x: 0,
          y: 0
        }, n.state = {
          left: 0,
          top: 0
        }, n
      }
      return u(t, e), l(t, [{
        key: "componentDidMount",
        value: function () {
          document.addEventListener("mousemove", this.onMouseMove, !1)
        }
      }, {
        key: "shouldComponentUpdate",
        value: function (e) {
          return this.props.visible || e.visible
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          document.removeEventListener("mousemove", this.onMouseMove)
        }
      }, {
        key: "render",
        value: function () {
          var e, t = this.props,
            n = t.children,
            r = t.visible,
            i = (0, f.default)((e = {}, o(e, p.default.container, !0), o(e, p.default.hidden, !r), e));
          return (0, c.h)("div", {
            ref: this.saveNode,
            className: i,
            style: this.getStyle()
          }, n)
        }
      }, {
        key: "getStyle",
        value: function () {
          return {
            left: this.state.left,
            top: this.state.top
          }
        }
      }, {
        key: "updatePosition",
        value: function () {
          if (this.props.visible) {
            var e = {
                left: this.mouseCoords.x + t.marginX,
                top: this.mouseCoords.y + t.marginY
              },
              n = this.node.getBoundingClientRect();
            e.left + n.width > window.innerWidth && (e.left = window.innerWidth - n.width), e.top + n.height > window.innerHeight && (e.top = this.mouseCoords.y - t.marginY - n.height), this.setState(e)
          }
        }
      }]), t
    }(c.Component);
  d.marginX = 10, d.marginY = 30, t.default = d
}, function (e, t, n) {
  var r = n(16);
  "string" == typeof r && (r = [
    [e.i, r, ""]
  ]);
  var o = {
    hmr: !0
  };
  o.transform = void 0, o.insertInto = void 0;
  n(2)(r, o);
  r.locals && (e.exports = r.locals)
}, function (e, t, n) {
  t = e.exports = n(1)(!1), t.push([e.i, ".Tooltip__container{font:normal 10px Verdana;position:absolute;padding:5px 10px;border-radius:4px;background:#fff;border:1px solid #aaa;opacity:.7;white-space:nowrap;visibility:visible;transition:opacity .2s ease,visibility .2s ease}.Tooltip__hidden{opacity:0;visibility:hidden}", ""]), t.locals = {
    container: "Tooltip__container",
    hidden: "Tooltip__hidden"
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "undefined" != typeof window && window.location;
    if (!t) throw new Error("fixUrls requires window.location");
    if (!e || "string" != typeof e) return e;
    var n = t.protocol + "//" + t.host,
      r = n + t.pathname.replace(/\/[^\/]*$/, "/");
    return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
      var o = t.trim().replace(/^"(.*)"$/, function (e, t) {
        return t
      }).replace(/^'(.*)'$/, function (e, t) {
        return t
      });
      if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o)) return e;
      var i;
      return i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")"
    })
  }
}, function (e, t, n) {
  "use strict";

  function r(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function i(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function a(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var u = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    l = n(0),
    c = n(19),
    s = r(c),
    f = n(4),
    h = r(f),
    p = function (e) {
      function t() {
        return o(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }
      return a(t, e), u(t, [{
        key: "render",
        value: function () {
          var e = this.props,
            t = e.label,
            n = e.items,
            r = e.activeItem,
            o = e.onSwitch;
          return (0, l.h)("div", {
            className: h.default.container
          }, (0, l.h)("div", {
            className: h.default.label
          }, t, ":"), (0, l.h)("div", null, n.map(function (e) {
            return (0, l.h)(s.default, {
              key: e.label,
              item: e,
              active: e === r,
              onClick: o
            })
          })))
        }
      }]), t
    }(l.Component);
  t.default = p
}, function (e, t, n) {
  "use strict";

  function r(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function a(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function u(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var l = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    c = n(0),
    s = n(3),
    f = r(s),
    h = n(4),
    p = r(h),
    d = function (e) {
      function t() {
        var e, n, r, o;
        i(this, t);
        for (var u = arguments.length, l = Array(u), c = 0; c < u; c++) l[c] = arguments[c];
        return n = r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(l))), r.handleClick = function () {
          r.props.onClick && r.props.onClick(r.props.item)
        }, o = n, a(r, o)
      }
      return u(t, e), l(t, [{
        key: "render",
        value: function () {
          var e, t = this.props,
            n = t.item,
            r = t.active,
            i = (0, f.default)((e = {}, o(e, p.default.item, !0), o(e, p.default.active, r), e));
          return (0, c.h)("span", {
            className: i,
            onClick: this.handleClick
          }, n.label)
        }
      }]), t
    }(c.Component);
  t.default = d
}, function (e, t, n) {
  t = e.exports = n(1)(!1), t.push([e.i, ".Switcher__container{font:normal 10px Verdana;white-space:nowrap}.Switcher__label{font-weight:700;font-size:11px;margin-bottom:7px}.Switcher__item{display:inline-block;border:1px solid #aaa;border-radius:4px;padding:5px 7px;cursor:pointer;transition:background .3s ease}.Switcher__item:hover{background:rgba(255,165,0,.15)}.Switcher__item.Switcher__active{cursor:default;background:orange}.Switcher__item+.Switcher__item{margin-left:5px}", ""]), t.locals = {
    container: "Switcher__container",
    label: "Switcher__label",
    item: "Switcher__item",
    active: "Switcher__active"
  }
}, function (e, t, n) {
  "use strict";

  function r(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function a(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function u(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var l = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    c = n(0),
    s = n(3),
    f = r(s),
    h = n(22),
    p = r(h),
    d = function (e) {
      function t() {
        var e, n, r, o;
        i(this, t);
        for (var u = arguments.length, l = Array(u), c = 0; c < u; c++) l[c] = arguments[c];
        return n = r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(l))), r.state = {
          visible: !0,
          renderContent: !0
        }, r.handleMouseEnter = function () {
          clearTimeout(r.hideTimeoutId), r.toggleVisibility(!0)
        }, r.handleMouseLeave = function () {
          return r.toggleVisibility(!1)
        }, o = n, a(r, o)
      }
      return u(t, e), l(t, [{
        key: "componentDidMount",
        value: function () {
          var e = this;
          this.hideTimeoutId = setTimeout(function () {
            return e.toggleVisibility(!1)
          }, 1500), this.hideContentTimeout = null
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          clearTimeout(this.hideTimeoutId), clearTimeout(this.hideContentTimeout)
        }
      }, {
        key: "render",
        value: function () {
          var e, t = this.props,
            n = t.position,
            r = t.children,
            i = this.state,
            a = i.visible,
            u = i.renderContent,
            l = (0, f.default)((e = {}, o(e, p.default.container, !0), o(e, p.default.left, "left" === n), o(e, p.default.hidden, !a), e));
          return (0, c.h)("div", {
            className: l,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave
          }, u ? r : null)
        }
      }, {
        key: "toggleVisibility",
        value: function (e) {
          var t = this;
          clearTimeout(this.hideContentTimeout), this.setState({
            visible: e
          }), e ? this.setState({
            renderContent: !0
          }) : this.hideContentTimeout = setTimeout(function () {
            return t.setState({
              renderContent: !1
            })
          }, 500)
        }
      }]), t
    }(c.Component);
  d.defaultProps = {
    position: "left"
  }, t.default = d
}, function (e, t, n) {
  var r = n(23);
  "string" == typeof r && (r = [
    [e.i, r, ""]
  ]);
  var o = {
    hmr: !0
  };
  o.transform = void 0, o.insertInto = void 0;
  n(2)(r, o);
  r.locals && (e.exports = r.locals)
}, function (e, t, n) {
  t = e.exports = n(1)(!1), t.push([e.i, ".Sidebar__container{background:#fff;border:none;border-right:1px solid #aaa;bottom:0;opacity:.95;overflow-y:auto;padding:20px;position:absolute;top:0;transition:transform .2s ease;z-index:1}.Sidebar__container.Sidebar__left{left:0}.Sidebar__container.Sidebar__left.Sidebar__hidden{transform:translateX(calc(-100% + 7px))}", ""]), t.locals = {
    container: "Sidebar__container",
    left: "Sidebar__left",
    hidden: "Sidebar__hidden"
  }
}, function (e, t, n) {
  "use strict";

  function r(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function i(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function a(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var u = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
    l = n(0),
    c = n(5),
    s = r(c),
    f = n(6),
    h = r(f),
    p = function (e) {
      function t() {
        var e, n, r, a;
        o(this, t);
        for (var u = arguments.length, l = Array(u), c = 0; c < u; c++) l[c] = arguments[c];
        return n = r = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(l))), r.handleChange = function () {
          r.props.onChange(r.props.item)
        }, a = n, i(r, a)
      }
      return a(t, e), u(t, [{
        key: "render",
        value: function () {
          var e = this.props.checked;
          return (0, l.h)("label", {
            className: h.default.item
          }, (0, l.h)("input", {
            className: h.default.checkbox,
            type: "checkbox",
            checked: e,
            onChange: this.handleChange
          }), this.renderLabel())
        }
      }, {
        key: "renderLabel",
        value: function () {
          var e = this.props,
            t = e.children,
            n = e.item;
          return t && t.length ? t[0](n, h.default.itemText) : (0, l.h)("span", {
            className: h.default.itemText
          }, n === s.default.ALL_ITEM ? "All" : n.label)
        }
      }]), t
    }(l.Component);
  t.default = p
}, function (e, t, n) {
  t = e.exports = n(1)(!1), t.push([e.i, ".CheckboxList__container{font:normal 10px Verdana;white-space:nowrap}.CheckboxList__label{font-size:11px;font-weight:700;margin-bottom:7px}.CheckboxList__checkbox{cursor:pointer}.CheckboxList__item{cursor:pointer;display:block;margin-bottom:3px}.CheckboxList__itemText{margin-left:3px;position:relative;top:-2px;vertical-align:middle}", ""]), t.locals = {
    container: "CheckboxList__container",
    label: "CheckboxList__label",
    checkbox: "CheckboxList__checkbox",
    item: "CheckboxList__item",
    itemText: "CheckboxList__itemText"
  }
}, function (e, t, n) {
  var r = n(27);
  "string" == typeof r && (r = [
    [e.i, r, ""]
  ]);
  var o = {
    hmr: !0
  };
  o.transform = void 0, o.insertInto = void 0;
  n(2)(r, o);
  r.locals && (e.exports = r.locals)
}, function (e, t, n) {
  t = e.exports = n(1)(!1), t.push([e.i, ".ModulesTreemap__container,.ModulesTreemap__map{position:relative;width:100%;height:100%}.ModulesTreemap__sidebarGroup{margin-bottom:20px}.ModulesTreemap__activeSize{font-weight:700}", ""]), t.locals = {
    container: "ModulesTreemap__container",
    map: "ModulesTreemap__map",
    sidebarGroup: "ModulesTreemap__sidebarGroup",
    activeSize: "ModulesTreemap__activeSize"
  }
}, function (e, t, n) {
  var r = n(29);
  "string" == typeof r && (r = [
    [e.i, r, ""]
  ]);
  var o = {
    hmr: !0
  };
  o.transform = void 0, o.insertInto = void 0;
  n(2)(r, o);
  r.locals && (e.exports = r.locals)
}, function (e, t, n) {
  t = e.exports = n(1)(!1), t.push([e.i, "#app,body,html{width:100%;height:100%;padding:0;margin:0;overflow:hidden}", ""])
}]);
//# sourceMappingURL=viewer.js.map