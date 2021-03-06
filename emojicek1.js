/*!
 * rns.js
 * ---
 * React & Share embeddable plugin
 * Release date: 2019-04-11
 * ---
 * Copyright (c) React & Share Oy
 * All rights reserved.
 * 
 */
! function(n) { var t = {};

    function r(s) { if (t[s]) return t[s].exports; var a = t[s] = { i: s, l: !1, exports: {} }; return n[s].call(a.exports, a, a.exports, r), a.l = !0, a.exports } r.m = n, r.c = t, r.d = function(n, t, s) { r.o(n, t) || Object.defineProperty(n, t, { enumerable: !0, get: s }) }, r.r = function(n) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 }) }, r.t = function(n, t) { if (1 & t && (n = r(n)), 8 & t) return n; if (4 & t && "object" == typeof n && n && n.__esModule) return n; var s = Object.create(null); if (r.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: n }), 2 & t && "string" != typeof n)
            for (var a in n) r.d(s, a, function(t) { return n[t] }.bind(null, a)); return s }, r.n = function(n) { var t = n && n.__esModule ? function() { return n.default } : function() { return n }; return r.d(t, "a", t), t }, r.o = function(n, t) { return Object.prototype.hasOwnProperty.call(n, t) }, r.p = "", r(r.s = 16) }([function(n, t, r) {
    (function(t, r) {! function() { "use strict";

            function s(n, t, r, s, a, e) { return { tag: n, key: t, attrs: r, children: s, text: a, dom: e, domSize: void 0, state: void 0, _state: void 0, events: void 0, instance: void 0, skip: !1 } } s.normalize = function(n) { return Array.isArray(n) ? s("[", void 0, void 0, s.normalizeChildren(n), void 0, void 0) : null != n && "object" != typeof n ? s("#", void 0, void 0, !1 === n ? "" : n, void 0, void 0) : n }, s.normalizeChildren = function(n) { for (var t = 0; t < n.length; t++) n[t] = s.normalize(n[t]); return n }; var a = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,
                e = {},
                i = {}.hasOwnProperty;

            function u(n) { for (var t in n)
                    if (i.call(n, t)) return !1; return !0 }

            function c(n) { var t, r = arguments[1],
                    c = 2; if (null == n || "string" != typeof n && "function" != typeof n && "function" != typeof n.view) throw Error("The selector must be either a string or a component."); if ("string" == typeof n) var o = e[n] || function(n) { for (var t, r = "div", s = [], i = {}; t = a.exec(n);) { var u = t[1],
                            c = t[2]; if ("" === u && "" !== c) r = c;
                        else if ("#" === u) i.id = c;
                        else if ("." === u) s.push(c);
                        else if ("[" === t[3][0]) { var o = t[6];
                            o && (o = o.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")), "class" === t[4] ? s.push(o) : i[t[4]] = "" === o ? o : o || !0 } } return s.length > 0 && (i.className = s.join(" ")), e[n] = { tag: r, attrs: i } }(n); if (null == r ? r = {} : ("object" != typeof r || null != r.tag || Array.isArray(r)) && (r = {}, c = 1), arguments.length === c + 1) t = arguments[c], Array.isArray(t) || (t = [t]);
                else
                    for (t = []; c < arguments.length;) t.push(arguments[c++]); var f = s.normalizeChildren(t); return "string" == typeof n ? function(n, t, r) { var a, e, c = !1,
                        o = t.className || t.class; if (!u(n.attrs) && !u(t)) { var f = {}; for (var h in t) i.call(t, h) && (f[h] = t[h]);
                        t = f } for (var h in n.attrs) i.call(n.attrs, h) && (t[h] = n.attrs[h]); for (var h in void 0 !== o && (void 0 !== t.class && (t.class = void 0, t.className = o), null != n.attrs.className && (t.className = n.attrs.className + " " + o)), t)
                        if (i.call(t, h) && "key" !== h) { c = !0; break } return Array.isArray(r) && 1 === r.length && null != r[0] && "#" === r[0].tag ? e = r[0].children : a = r, s(n.tag, t.key, c ? t : void 0, a, e) }(o, r, f) : s(n, r.key, r, f) } c.trust = function(n) { return null == n && (n = ""), s("<", void 0, void 0, n, void 0, void 0) }, c.fragment = function(n, t) { return s("[", n.key, n, s.normalizeChildren(t), void 0, void 0) }; var o = c; if ((f = function(n) { if (!(this instanceof f)) throw new Error("Promise must be called with `new`"); if ("function" != typeof n) throw new TypeError("executor must be a function"); var r = this,
                        s = [],
                        a = [],
                        e = o(s, !0),
                        i = o(a, !1),
                        u = r._instance = { resolvers: s, rejectors: a },
                        c = "function" == typeof t ? t : setTimeout;

                    function o(n, t) { return function e(o) { var f; try { if (!t || null == o || "object" != typeof o && "function" != typeof o || "function" != typeof(f = o.then)) c(function() { t || 0 !== n.length || console.error("Possible unhandled promise rejection:", o); for (var r = 0; r < n.length; r++) n[r](o);
                                    s.length = 0, a.length = 0, u.state = t, u.retry = function() { e(o) } });
                                else { if (o === r) throw new TypeError("Promise can't be resolved w/ itself");
                                    h(f.bind(o)) } } catch (n) { i(n) } } }

                    function h(n) { var t = 0;

                        function r(n) { return function(r) { t++ > 0 || n(r) } } var s = r(i); try { n(r(e), s) } catch (n) { s(n) } } h(n) }).prototype.then = function(n, t) { var r, s, a = this._instance;

                    function e(n, t, e, i) { t.push(function(t) { if ("function" != typeof n) e(t);
                            else try { r(n(t)) } catch (n) { s && s(n) } }), "function" == typeof a.retry && i === a.state && a.retry() } var i = new f(function(n, t) { r = n, s = t }); return e(n, a.resolvers, r, !0), e(t, a.rejectors, s, !1), i }, f.prototype.catch = function(n) { return this.then(null, n) }, f.resolve = function(n) { return n instanceof f ? n : new f(function(t) { t(n) }) }, f.reject = function(n) { return new f(function(t, r) { r(n) }) }, f.all = function(n) { return new f(function(t, r) { var s = n.length,
                            a = 0,
                            e = []; if (0 === n.length) t([]);
                        else
                            for (var i = 0; i < n.length; i++) ! function(i) {
                                function u(n) { a++, e[i] = n, a === s && t(e) } null == n[i] || "object" != typeof n[i] && "function" != typeof n[i] || "function" != typeof n[i].then ? u(n[i]) : n[i].then(u, r) }(i) }) }, f.race = function(n) { return new f(function(t, r) { for (var s = 0; s < n.length; s++) n[s].then(t, r) }) }, "undefined" != typeof window) { void 0 === window.Promise && (window.Promise = f); var f = window.Promise } else if (void 0 !== r) { void 0 === r.Promise && (r.Promise = f);
                f = r.Promise } var h = function(n) { if ("[object Object]" !== Object.prototype.toString.call(n)) return ""; var t = []; for (var r in n) s(r, n[r]); return t.join("&");

                    function s(n, r) { if (Array.isArray(r))
                            for (var a = 0; a < r.length; a++) s(n + "[" + a + "]", r[a]);
                        else if ("[object Object]" === Object.prototype.toString.call(r))
                            for (var a in r) s(n + "[" + a + "]", r[a]);
                        else t.push(encodeURIComponent(n) + (null != r && "" !== r ? "=" + encodeURIComponent(r) : "")) } },
                l = new RegExp("^file://", "i"),
                p = function(n, t) { var r, s = 0;

                    function a() { var n = 0;

                        function t() { 0 == --n && "function" == typeof r && r() } return function r(s) { var a = s.then; return s.then = function() { n++; var e = a.apply(s, arguments); return e.then(t, function(r) { if (t(), 0 === n) throw r }), r(e) }, s } }

                    function e(n, t) { if ("string" == typeof n) { var r = n;
                            null == (n = t || {}).url && (n.url = r) } return n }

                    function i(n, t) { if (null == t) return n; for (var r = n.match(/:[^\/]+/gi) || [], s = 0; s < r.length; s++) { var a = r[s].slice(1);
                            null != t[a] && (n = n.replace(r[s], t[a])) } return n }

                    function u(n, t) { var r = h(t); if ("" !== r) { var s = n.indexOf("?") < 0 ? "?" : "&";
                            n += s + r } return n }

                    function c(n) { try { return "" !== n ? JSON.parse(n) : null } catch (t) { throw new Error(n) } }

                    function o(n) { return n.responseText }

                    function f(n, t) { if ("function" == typeof n) { if (!Array.isArray(t)) return new n(t); for (var r = 0; r < t.length; r++) t[r] = new n(t[r]) } return t } return { request: function(r, s) { var h = a();
                            r = e(r, s); var p = new t(function(t, s) { null == r.method && (r.method = "GET"), r.method = r.method.toUpperCase(); var a = "GET" !== r.method && "TRACE" !== r.method && ("boolean" != typeof r.useBody || r.useBody); "function" != typeof r.serialize && (r.serialize = "undefined" != typeof FormData && r.data instanceof FormData ? function(n) { return n } : JSON.stringify), "function" != typeof r.deserialize && (r.deserialize = c), "function" != typeof r.extract && (r.extract = o), r.url = i(r.url, r.data), a ? r.data = r.serialize(r.data) : r.url = u(r.url, r.data); var e = new n.XMLHttpRequest,
                                    h = !1,
                                    p = e.abort; for (var m in e.abort = function() { h = !0, p.call(e) }, e.open(r.method, r.url, "boolean" != typeof r.async || r.async, "string" == typeof r.user ? r.user : void 0, "string" == typeof r.password ? r.password : void 0), r.serialize !== JSON.stringify || !a || r.headers && r.headers.hasOwnProperty("Content-Type") || e.setRequestHeader("Content-Type", "application/json; charset=utf-8"), r.deserialize !== c || r.headers && r.headers.hasOwnProperty("Accept") || e.setRequestHeader("Accept", "application/json, text/*"), r.withCredentials && (e.withCredentials = r.withCredentials), r.headers)({}).hasOwnProperty.call(r.headers, m) && e.setRequestHeader(m, r.headers[m]); "function" == typeof r.config && (e = r.config(e, r) || e), e.onreadystatechange = function() { if (!h && 4 === e.readyState) try { var n = r.extract !== o ? r.extract(e, r) : r.deserialize(r.extract(e, r)); if (e.status >= 200 && e.status < 300 || 304 === e.status || l.test(r.url)) t(f(r.type, n));
                                        else { var a = new Error(e.responseText); for (var i in n) a[i] = n[i];
                                            s(a) } } catch (n) { s(n) } }, a && null != r.data ? e.send(r.data) : e.send() }); return !0 === r.background ? p : h(p) }, jsonp: function(r, c) { var o = a();
                            r = e(r, c); var h = new t(function(t, a) { var e = r.callbackName || "_mithril_" + Math.round(1e16 * Math.random()) + "_" + s++,
                                    c = n.document.createElement("script");
                                n[e] = function(s) { c.parentNode.removeChild(c), t(f(r.type, s)), delete n[e] }, c.onerror = function() { c.parentNode.removeChild(c), a(new Error("JSONP request failed")), delete n[e] }, null == r.data && (r.data = {}), r.url = i(r.url, r.data), r.data[r.callbackKey || "callback"] = e, c.src = u(r.url, r.data), n.document.documentElement.appendChild(c) }); return !0 === r.background ? h : o(h) }, setCompletionCallback: function(n) { r = n } } }(window, f),
                m = function(n) { var t, r = n.document,
                        a = r.createDocumentFragment(),
                        e = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" };

                    function i(n) { return n.attrs && n.attrs.xmlns || e[n.tag] }

                    function u(n, t, r, s, a, e, i) { for (var u = r; u < s; u++) { var o = t[u];
                            null != o && c(n, o, a, i, e) } }

                    function c(n, t, e, h, l) { var p = t.tag; if ("string" != typeof p) return function(n, t, r, s, e) { if (f(t, r), null != t.instance) { var i = c(n, t.instance, r, s, e); return t.dom = t.instance.dom, t.domSize = null != t.dom ? t.instance.domSize : 0, w(n, i, e), i } return t.domSize = 0, a }(n, t, e, h, l); switch (t.state = {}, null != t.attrs && D(t.attrs, t, e), p) {
                            case "#":
                                return function(n, t, s) { return t.dom = r.createTextNode(t.children), w(n, t.dom, s), t.dom }(n, t, l);
                            case "<":
                                return o(n, t, l);
                            case "[":
                                return function(n, t, s, a, e) { var i = r.createDocumentFragment(); if (null != t.children) { var c = t.children;
                                        u(i, c, 0, c.length, s, null, a) } return t.dom = i.firstChild, t.domSize = i.childNodes.length, w(n, i, e), i }(n, t, e, h, l);
                            default:
                                return function(n, t, a, e, c) { var o = t.tag,
                                        f = t.attrs,
                                        h = f && f.is,
                                        l = (e = i(t) || e) ? h ? r.createElementNS(e, o, { is: h }) : r.createElementNS(e, o) : h ? r.createElement(o, { is: h }) : r.createElement(o);
                                    t.dom = l, null != f && function(n, t, r) { for (var s in t) T(n, s, null, t[s], r) }(t, f, e); if (w(n, l, c), null != t.attrs && null != t.attrs.contenteditable) b(t);
                                    else if (null != t.text && ("" !== t.text ? l.textContent = t.text : t.children = [s("#", void 0, void 0, t.text, void 0, void 0)]), null != t.children) { var p = t.children;
                                        u(l, p, 0, p.length, a, null, e),
                                            function(n) { var t = n.attrs; "select" === n.tag && null != t && ("value" in t && T(n, "value", null, t.value, void 0), "selectedIndex" in t && T(n, "selectedIndex", null, t.selectedIndex, void 0)) }(t) } return l }(n, t, e, h, l) } }

                    function o(n, t, s) { var a = { caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup" } [(t.children.match(/^\s*?<(\w+)/im) || [])[1]] || "div",
                            e = r.createElement(a);
                        e.innerHTML = t.children, t.dom = e.firstChild, t.domSize = e.childNodes.length; for (var i, u = r.createDocumentFragment(); i = e.firstChild;) u.appendChild(i); return w(n, u, s), u }

                    function f(n, t) { var r; if ("function" == typeof n.tag.view) { if (n.state = Object.create(n.tag), null != (r = n.state.view).$$reentrantLock$$) return a;
                            r.$$reentrantLock$$ = !0 } else { if (n.state = void 0, null != (r = n.tag).$$reentrantLock$$) return a;
                            r.$$reentrantLock$$ = !0, n.state = null != n.tag.prototype && "function" == typeof n.tag.prototype.view ? new n.tag(n) : n.tag(n) } if (n._state = n.state, null != n.attrs && D(n.attrs, n, t), D(n._state, n, t), n.instance = s.normalize(n._state.view.call(n.state, n)), n.instance === n) throw Error("A view cannot return the vnode it received as argument");
                        r.$$reentrantLock$$ = null }

                    function h(n, t, r, s, a, e, i) { if (t !== r && (null != t || null != r))
                            if (null == t) u(n, r, 0, r.length, a, e, i);
                            else if (null == r) y(t, 0, t.length, r);
                        else { if (t.length === r.length) { for (var o = !1, f = 0; f < r.length; f++)
                                    if (null != r[f] && null != t[f]) { o = null == r[f].key && null == t[f].key; break } if (o) { for (f = 0; f < t.length; f++) t[f] !== r[f] && (null == t[f] && null != r[f] ? c(n, r[f], a, i, g(t, f + 1, e)) : null == r[f] ? y(t, f, f + 1, r) : l(n, t[f], r[f], a, g(t, f + 1, e), s, i)); return } } if (s = s || function(n, t) { if (null != n.pool && Math.abs(n.pool.length - t.length) <= Math.abs(n.length - t.length)) { var r = n[0] && n[0].children && n[0].children.length || 0,
                                            s = n.pool[0] && n.pool[0].children && n.pool[0].children.length || 0,
                                            a = t[0] && t[0].children && t[0].children.length || 0; if (Math.abs(s - a) <= Math.abs(r - a)) return !0 } return !1 }(t, r)) { var h = t.pool;
                                t = t.concat(t.pool) } for (var b, C = 0, x = 0, T = t.length - 1, A = r.length - 1; T >= C && A >= x;) { if ((D = t[C]) !== (_ = r[x]) || s)
                                    if (null == D) C++;
                                    else if (null == _) x++;
                                else if (D.key === _.key) { var U = null != h && C >= t.length - h.length || null == h && s;
                                    x++, l(n, D, _, a, g(t, ++C, e), U, i), s && D.tag === _.tag && w(n, m(D), e) } else { if ((D = t[T]) !== _ || s)
                                        if (null == D) T--;
                                        else if (null == _) x++;
                                    else { if (D.key !== _.key) break;
                                        U = null != h && T >= t.length - h.length || null == h && s;
                                        l(n, D, _, a, g(t, T + 1, e), U, i), (s || x < A) && w(n, m(D), g(t, C, e)), T--, x++ } else T--, x++ } else C++, x++ } for (; T >= C && A >= x;) { var D, _; if ((D = t[T]) !== (_ = r[A]) || s)
                                    if (null == D) T--;
                                    else if (null == _) A--;
                                else if (D.key === _.key) { U = null != h && T >= t.length - h.length || null == h && s;
                                    l(n, D, _, a, g(t, T + 1, e), U, i), s && D.tag === _.tag && w(n, m(D), e), null != D.dom && (e = D.dom), T--, A-- } else { if (b || (b = p(t, T)), null != _) { var I = b[_.key]; if (null != I) { var O = t[I];
                                            U = null != h && I >= t.length - h.length || null == h && s;
                                            l(n, O, _, a, g(t, T + 1, e), s, i), w(n, m(O), e), t[I].skip = !0, null != O.dom && (e = O.dom) } else { e = c(n, _, a, i, e) } } A-- } else T--, A--; if (A < x) break } u(n, r, x, A + 1, a, e, i), y(t, C, T + 1, r) } }

                    function l(n, t, r, a, e, u, p) { var g = t.tag; if (g === r.tag) { if (r.state = t.state, r._state = t._state, r.events = t.events, !u && function(n, t) { var r, s;
                                    null != n.attrs && "function" == typeof n.attrs.onbeforeupdate && (r = n.attrs.onbeforeupdate.call(n.state, n, t)); "string" != typeof n.tag && "function" == typeof n._state.onbeforeupdate && (s = n._state.onbeforeupdate.call(n.state, n, t)); if (!(void 0 === r && void 0 === s || r || s)) return n.dom = t.dom, n.domSize = t.domSize, n.instance = t.instance, !0; return !1 }(r, t)) return; if ("string" == typeof g) switch (null != r.attrs && (u ? (r.state = {}, D(r.attrs, r, a)) : _(r.attrs, r, a)), g) {
                                case "#":
                                    ! function(n, t) { n.children.toString() !== t.children.toString() && (n.dom.nodeValue = t.children);
                                        t.dom = n.dom }(t, r); break;
                                case "<":
                                    ! function(n, t, r, s) { t.children !== r.children ? (m(t), o(n, r, s)) : (r.dom = t.dom, r.domSize = t.domSize) }(n, t, r, e); break;
                                case "[":
                                    ! function(n, t, r, s, a, e, i) { h(n, t.children, r.children, s, a, e, i); var u = 0,
                                            c = r.children; if (r.dom = null, null != c) { for (var o = 0; o < c.length; o++) { var f = c[o];
                                                null != f && null != f.dom && (null == r.dom && (r.dom = f.dom), u += f.domSize || 1) } 1 !== u && (r.domSize = u) } }(n, t, r, u, a, e, p); break;
                                default:
                                    ! function(n, t, r, a, e) { var u = t.dom = n.dom;
                                        e = i(t) || e, "textarea" === t.tag && (null == t.attrs && (t.attrs = {}), null != t.text && (t.attrs.value = t.text, t.text = void 0));
                                        (function(n, t, r, s) { if (null != r)
                                                for (var a in r) T(n, a, t && t[a], r[a], s); if (null != t)
                                                for (var a in t) null != r && a in r || ("className" === a && (a = "class"), "o" !== a[0] || "n" !== a[1] || A(a) ? "key" !== a && n.dom.removeAttribute(a) : U(n, a, void 0)) })(t, n.attrs, t.attrs, e), null != t.attrs && null != t.attrs.contenteditable ? b(t) : null != n.text && null != t.text && "" !== t.text ? n.text.toString() !== t.text.toString() && (n.dom.firstChild.nodeValue = t.text) : (null != n.text && (n.children = [s("#", void 0, void 0, n.text, void 0, n.dom.firstChild)]), null != t.text && (t.children = [s("#", void 0, void 0, t.text, void 0, void 0)]), h(u, n.children, t.children, r, a, null, e)) }(t, r, u, a, p) } else ! function(n, t, r, a, e, i, u) { if (i) f(r, a);
                                else { if (r.instance = s.normalize(r._state.view.call(r.state, r)), r.instance === r) throw Error("A view cannot return the vnode it received as argument");
                                    null != r.attrs && _(r.attrs, r, a), _(r._state, r, a) } null != r.instance ? (null == t.instance ? c(n, r.instance, a, u, e) : l(n, t.instance, r.instance, a, e, i, u), r.dom = r.instance.dom, r.domSize = r.instance.domSize) : null != t.instance ? (C(t.instance, null), r.dom = void 0, r.domSize = 0) : (r.dom = t.dom, r.domSize = t.domSize) }(n, t, r, a, e, u, p) } else C(t, null), c(n, r, a, p, e) }

                    function p(n, t) { var r = {},
                            s = 0; for (s = 0; s < t; s++) { var a = n[s]; if (null != a) { var e = a.key;
                                null != e && (r[e] = s) } } return r }

                    function m(n) { var t = n.domSize; if (null != t || null == n.dom) { var s = r.createDocumentFragment(); if (t > 0) { for (var a = n.dom; --t;) s.appendChild(a.nextSibling);
                                s.insertBefore(a, s.firstChild) } return s } return n.dom }

                    function g(n, t, r) { for (; t < n.length; t++)
                            if (null != n[t] && null != n[t].dom) return n[t].dom; return r }

                    function w(n, t, r) { r && r.parentNode ? n.insertBefore(t, r) : n.appendChild(t) }

                    function b(n) { var t = n.children; if (null != t && 1 === t.length && "<" === t[0].tag) { var r = t[0].children;
                            n.dom.innerHTML !== r && (n.dom.innerHTML = r) } else if (null != n.text || null != t && 0 !== t.length) throw new Error("Child node of a contenteditable must be trusted") }

                    function y(n, t, r, s) { for (var a = t; a < r; a++) { var e = n[a];
                            null != e && (e.skip ? e.skip = !1 : C(e, s)) } }

                    function C(n, t) { var r, s = 1,
                            a = 0;
                        n.attrs && "function" == typeof n.attrs.onbeforeremove && (null != (r = n.attrs.onbeforeremove.call(n.state, n)) && "function" == typeof r.then && (s++, r.then(e, e))); "string" != typeof n.tag && "function" == typeof n._state.onbeforeremove && (null != (r = n._state.onbeforeremove.call(n.state, n)) && "function" == typeof r.then && (s++, r.then(e, e)));

                        function e() { if (++a === s && (function n(t) { t.attrs && "function" == typeof t.attrs.onremove && t.attrs.onremove.call(t.state, t); if ("string" != typeof t.tag) "function" == typeof t._state.onremove && t._state.onremove.call(t.state, t), null != t.instance && n(t.instance);
                                    else { var r = t.children; if (Array.isArray(r))
                                            for (var s = 0; s < r.length; s++) { var a = r[s];
                                                null != a && n(a) } } }(n), n.dom)) { var r = n.domSize || 1; if (r > 1)
                                    for (var e = n.dom; --r;) x(e.nextSibling);
                                x(n.dom), null == t || null != n.domSize || null != (i = n.attrs) && (i.oncreate || i.onupdate || i.onbeforeremove || i.onremove) || "string" != typeof n.tag || (t.pool ? t.pool.push(n) : t.pool = [n]) } var i } e() }

                    function x(n) { var t = n.parentNode;
                        null != t && t.removeChild(n) }

                    function T(n, t, s, a, e) { var i = n.dom; if ("key" !== t && "is" !== t && (s !== a || function(n, t) { return "value" === t || "checked" === t || "selectedIndex" === t || "selected" === t && n.dom === r.activeElement }(n, t) || "object" == typeof a) && void 0 !== a && !A(t)) { var u, c = t.indexOf(":"); if (c > -1 && "xlink" === t.substr(0, c)) i.setAttributeNS("http://www.w3.org/1999/xlink", t.slice(c + 1), a);
                            else if ("o" === t[0] && "n" === t[1] && "function" == typeof a) U(n, t, a);
                            else if ("style" === t) ! function(n, t, r) { t === r && (n.style.cssText = "", t = null); if (null == r) n.style.cssText = "";
                                else if ("string" == typeof r) n.style.cssText = r;
                                else { for (var s in "string" == typeof t && (n.style.cssText = ""), r) n.style[s] = r[s]; if (null != t && "string" != typeof t)
                                        for (var s in t) s in r || (n.style[s] = "") } }(i, s, a);
                            else if (t in i && ("href" !== (u = t) && "list" !== u && "form" !== u && "width" !== u && "height" !== u) && void 0 === e && ! function(n) { return n.attrs.is || n.tag.indexOf("-") > -1 }(n)) { if ("value" === t) { var o = "" + a; if (("input" === n.tag || "textarea" === n.tag) && n.dom.value === o && n.dom === r.activeElement) return; if ("select" === n.tag)
                                        if (null === a) { if (-1 === n.dom.selectedIndex && n.dom === r.activeElement) return } else if (null !== s && n.dom.value === o && n.dom === r.activeElement) return; if ("option" === n.tag && null != s && n.dom.value === o) return } if ("input" === n.tag && "type" === t) return void i.setAttribute(t, a);
                                i[t] = a } else "boolean" == typeof a ? a ? i.setAttribute(t, "") : i.removeAttribute(t) : i.setAttribute("className" === t ? "class" : t, a) } }

                    function A(n) { return "oninit" === n || "oncreate" === n || "onupdate" === n || "onremove" === n || "onbeforeremove" === n || "onbeforeupdate" === n }

                    function U(n, r, s) { var a = n.dom,
                            e = "function" != typeof t ? s : function(n) { var r = s.call(a, n); return t.call(a, n), r }; if (r in a) a[r] = "function" == typeof s ? e : null;
                        else { var i = r.slice(2); if (void 0 === n.events && (n.events = {}), n.events[r] === e) return;
                            null != n.events[r] && a.removeEventListener(i, n.events[r], !1), "function" == typeof s && (n.events[r] = e, a.addEventListener(i, n.events[r], !1)) } }

                    function D(n, t, r) { "function" == typeof n.oninit && n.oninit.call(t.state, t), "function" == typeof n.oncreate && r.push(n.oncreate.bind(t.state, t)) }

                    function _(n, t, r) { "function" == typeof n.onupdate && r.push(n.onupdate.bind(t.state, t)) } return { render: function(n, t) { if (!n) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined."); var a = [],
                                e = r.activeElement,
                                i = n.namespaceURI;
                            null == n.vnodes && (n.textContent = ""), Array.isArray(t) || (t = [t]), h(n, n.vnodes, s.normalizeChildren(t), !1, a, null, "http://www.w3.org/1999/xhtml" === i ? void 0 : i), n.vnodes = t, null != e && r.activeElement !== e && e.focus(); for (var u = 0; u < a.length; u++) a[u]() }, setEventCallback: function(n) { return t = n } } }; var g = function(n) { var t = m(n);
                t.setEventCallback(function(n) {!1 === n.redraw ? n.redraw = void 0 : a() }); var r = [];

                function s(n) { var t = r.indexOf(n);
                    t > -1 && r.splice(t, 2) }

                function a() { for (var n = 1; n < r.length; n += 2) r[n]() } return { subscribe: function(n, t) { s(n), r.push(n, function(n) { var t = 0,
                                r = null,
                                s = "function" == typeof requestAnimationFrame ? requestAnimationFrame : setTimeout; return function() { var a = Date.now();
                                0 === t || a - t >= 16 ? (t = a, n()) : null === r && (r = s(function() { r = null, n(), t = Date.now() }, 16 - (a - t))) } }(t)) }, unsubscribe: s, redraw: a, render: t.render } }(window);
            p.setCompletionCallback(g.redraw); var w;
            o.mount = (w = g, function(n, t) { if (null === t) return w.render(n, []), void w.unsubscribe(n); if (null == t.view && "function" != typeof t) throw new Error("m.mount(element, component) expects a component, not a vnode");
                w.subscribe(n, function() { w.render(n, s(t)) }), w.redraw() }); var b = f,
                y = function(n) { if ("" === n || null == n) return {}; "?" === n.charAt(0) && (n = n.slice(1)); for (var t = n.split("&"), r = {}, s = {}, a = 0; a < t.length; a++) { var e = t[a].split("="),
                            i = decodeURIComponent(e[0]),
                            u = 2 === e.length ? decodeURIComponent(e[1]) : ""; "true" === u ? u = !0 : "false" === u && (u = !1); var c = i.split(/\]\[?|\[/),
                            o = r;
                        i.indexOf("[") > -1 && c.pop(); for (var f = 0; f < c.length; f++) { var h = c[f],
                                l = c[f + 1],
                                p = "" == l || !isNaN(parseInt(l, 10)),
                                m = f === c.length - 1; if ("" === h) null == s[i = c.slice(0, f).join()] && (s[i] = 0), h = s[i]++;
                            null == o[h] && (o[h] = m ? u : p ? [] : {}), o = o[h] } } return r },
                C = function(n) { var r, s = "function" == typeof n.history.pushState,
                        a = "function" == typeof t ? t : setTimeout;

                    function e(t) { var r = n.location[t].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent); return "pathname" === t && "/" !== r[0] && (r = "/" + r), r }

                    function i(n, t, r) { var s = n.indexOf("?"),
                            a = n.indexOf("#"),
                            e = s > -1 ? s : a > -1 ? a : n.length; if (s > -1) { var i = a > -1 ? a : n.length,
                                u = y(n.slice(s + 1, i)); for (var c in u) t[c] = u[c] } if (a > -1) { var o = y(n.slice(a + 1)); for (var c in o) r[c] = o[c] } return n.slice(0, e) } var u = { prefix: "#!", getPath: function() { switch (u.prefix.charAt(0)) {
                                case "#":
                                    return e("hash").slice(u.prefix.length);
                                case "?":
                                    return e("search").slice(u.prefix.length) + e("hash");
                                default:
                                    return e("pathname").slice(u.prefix.length) + e("search") + e("hash") } }, setPath: function(t, r, a) { var e = {},
                                c = {}; if (t = i(t, e, c), null != r) { for (var o in r) e[o] = r[o];
                                t = t.replace(/:([^\/]+)/g, function(n, t) { return delete e[t], r[t] }) } var f = h(e);
                            f && (t += "?" + f); var l = h(c); if (l && (t += "#" + l), s) { var p = a ? a.state : null,
                                    m = a ? a.title : null;
                                n.onpopstate(), a && a.replace ? n.history.replaceState(p, m, u.prefix + t) : n.history.pushState(p, m, u.prefix + t) } else n.location.href = u.prefix + t } }; return u.defineRoutes = function(t, e, c) {
                        function o() { var r = u.getPath(),
                                s = {},
                                a = i(r, s, s),
                                o = n.history.state; if (null != o)
                                for (var f in o) s[f] = o[f]; for (var h in t) { var l = new RegExp("^" + h.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "/?$"); if (l.test(a)) return void a.replace(l, function() { for (var n = h.match(/:[^\/]+/g) || [], a = [].slice.call(arguments, 1, -2), i = 0; i < n.length; i++) s[n[i].replace(/:|\./g, "")] = decodeURIComponent(a[i]);
                                    e(t[h], s, r, h) }) } c(r, s) } var f;
                        s ? n.onpopstate = (f = o, function() { null == r && (r = a(function() { r = null, f() })) }) : "#" === u.prefix.charAt(0) && (n.onhashchange = o), o() }, u };
            o.route = function(n, t) { var r, a, e, i, u, c = C(n),
                    o = function(n, o, f) { if (null == n) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined"); var h = function() { null != r && t.render(n, r(s(a, e.key, e))) },
                            l = function(n) { if (n === o) throw new Error("Could not resolve default route " + o);
                                c.setPath(o, null, { replace: !0 }) };
                        c.defineRoutes(f, function(n, t, s) { var c = u = function(n, o) { c === u && (a = null == o || "function" != typeof o.view && "function" != typeof o ? "div" : o, e = t, i = s, u = null, r = (n.render || function(n) { return n }).bind(n), h()) };
                            n.view || "function" == typeof n ? c({}, n) : n.onmatch ? b.resolve(n.onmatch(t, s)).then(function(t) { c(n, t) }, l) : c(n, "div") }, l), t.subscribe(n, h) }; return o.set = function(n, t, r) { null != u && ((r = r || {}).replace = !0), u = null, c.setPath(n, t, r) }, o.get = function() { return i }, o.prefix = function(n) { c.prefix = n }, o.link = function(n) { n.dom.setAttribute("href", c.prefix + n.attrs.href), n.dom.onclick = function(n) { if (!(n.ctrlKey || n.metaKey || n.shiftKey || 2 === n.which)) { n.preventDefault(), n.redraw = !1; var t = this.getAttribute("href");
                            0 === t.indexOf(c.prefix) && (t = t.slice(c.prefix.length)), o.set(t, void 0, void 0) } } }, o.param = function(n) { return void 0 !== e && void 0 !== n ? e[n] : e }, o }(window, g), o.withAttr = function(n, t, r) { return function(s) { t.call(r || this, n in s.currentTarget ? s.currentTarget[n] : s.currentTarget.getAttribute(n)) } }; var x = m(window);
            o.render = x.render, o.redraw = g.redraw, o.request = p.request, o.jsonp = p.jsonp, o.parseQueryString = y, o.buildQueryString = h, o.version = "1.1.6", o.vnode = s, n.exports = o }() }).call(this, r(5).setImmediate, r(2)) }, function(n, t, r) { var s, a;
    /*!
     * JavaScript Cookie v2.2.0
     * https://github.com/js-cookie/js-cookie
     *
     * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
     * Released under the MIT license
     */
    ! function(e) { if (void 0 === (a = "function" == typeof(s = e) ? s.call(t, r, t, n) : s) || (n.exports = a), !0, n.exports = e(), !!0) { var i = window.Cookies,
                u = window.Cookies = e();
            u.noConflict = function() { return window.Cookies = i, u } } }(function() {
        function n() { for (var n = 0, t = {}; n < arguments.length; n++) { var r = arguments[n]; for (var s in r) t[s] = r[s] } return t } return function t(r) {
            function s(t, a, e) { var i; if ("undefined" != typeof document) { if (arguments.length > 1) { if ("number" == typeof(e = n({ path: "/" }, s.defaults, e)).expires) { var u = new Date;
                            u.setMilliseconds(u.getMilliseconds() + 864e5 * e.expires), e.expires = u } e.expires = e.expires ? e.expires.toUTCString() : ""; try { i = JSON.stringify(a), /^[\{\[]/.test(i) && (a = i) } catch (n) {} a = r.write ? r.write(a, t) : encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape); var c = ""; for (var o in e) e[o] && (c += "; " + o, !0 !== e[o] && (c += "=" + e[o])); return document.cookie = t + "=" + a + c } t || (i = {}); for (var f = document.cookie ? document.cookie.split("; ") : [], h = /(%[0-9A-Z]{2})+/g, l = 0; l < f.length; l++) { var p = f[l].split("="),
                            m = p.slice(1).join("=");
                        this.json || '"' !== m.charAt(0) || (m = m.slice(1, -1)); try { var g = p[0].replace(h, decodeURIComponent); if (m = r.read ? r.read(m, g) : r(m, g) || m.replace(h, decodeURIComponent), this.json) try { m = JSON.parse(m) } catch (n) {}
                            if (t === g) { i = m; break } t || (i[g] = m) } catch (n) {} } return i } } return s.set = s, s.get = function(n) { return s.call(s, n) }, s.getJSON = function() { return s.apply({ json: !0 }, [].slice.call(arguments)) }, s.defaults = {}, s.remove = function(t, r) { s(t, "", n(r, { expires: -1 })) }, s.withConverter = t, s }(function() {}) }) }, function(n, t) { var r;
    r = function() { return this }(); try { r = r || new Function("return this")() } catch (n) { "object" == typeof window && (r = window) } n.exports = r }, function(n, t) { var r = { utf8: { stringToBytes: function(n) { return r.bin.stringToBytes(unescape(encodeURIComponent(n))) }, bytesToString: function(n) { return decodeURIComponent(escape(r.bin.bytesToString(n))) } }, bin: { stringToBytes: function(n) { for (var t = [], r = 0; r < n.length; r++) t.push(255 & n.charCodeAt(r)); return t }, bytesToString: function(n) { for (var t = [], r = 0; r < n.length; r++) t.push(String.fromCharCode(n[r])); return t.join("") } } };
    n.exports = r }, function(n, t, r) { var s, a, e, i, u;
    s = r(8), a = r(3).utf8, e = r(9), i = r(3).bin, (u = function(n, t) { n.constructor == String ? n = t && "binary" === t.encoding ? i.stringToBytes(n) : a.stringToBytes(n) : e(n) ? n = Array.prototype.slice.call(n, 0) : Array.isArray(n) || (n = n.toString()); for (var r = s.bytesToWords(n), c = 8 * n.length, o = 1732584193, f = -271733879, h = -1732584194, l = 271733878, p = 0; p < r.length; p++) r[p] = 16711935 & (r[p] << 8 | r[p] >>> 24) | 4278255360 & (r[p] << 24 | r[p] >>> 8);
        r[c >>> 5] |= 128 << c % 32, r[14 + (c + 64 >>> 9 << 4)] = c; var m = u._ff,
            g = u._gg,
            w = u._hh,
            b = u._ii; for (p = 0; p < r.length; p += 16) { var y = o,
                C = f,
                x = h,
                T = l;
            o = m(o, f, h, l, r[p + 0], 7, -680876936), l = m(l, o, f, h, r[p + 1], 12, -389564586), h = m(h, l, o, f, r[p + 2], 17, 606105819), f = m(f, h, l, o, r[p + 3], 22, -1044525330), o = m(o, f, h, l, r[p + 4], 7, -176418897), l = m(l, o, f, h, r[p + 5], 12, 1200080426), h = m(h, l, o, f, r[p + 6], 17, -1473231341), f = m(f, h, l, o, r[p + 7], 22, -45705983), o = m(o, f, h, l, r[p + 8], 7, 1770035416), l = m(l, o, f, h, r[p + 9], 12, -1958414417), h = m(h, l, o, f, r[p + 10], 17, -42063), f = m(f, h, l, o, r[p + 11], 22, -1990404162), o = m(o, f, h, l, r[p + 12], 7, 1804603682), l = m(l, o, f, h, r[p + 13], 12, -40341101), h = m(h, l, o, f, r[p + 14], 17, -1502002290), o = g(o, f = m(f, h, l, o, r[p + 15], 22, 1236535329), h, l, r[p + 1], 5, -165796510), l = g(l, o, f, h, r[p + 6], 9, -1069501632), h = g(h, l, o, f, r[p + 11], 14, 643717713), f = g(f, h, l, o, r[p + 0], 20, -373897302), o = g(o, f, h, l, r[p + 5], 5, -701558691), l = g(l, o, f, h, r[p + 10], 9, 38016083), h = g(h, l, o, f, r[p + 15], 14, -660478335), f = g(f, h, l, o, r[p + 4], 20, -405537848), o = g(o, f, h, l, r[p + 9], 5, 568446438), l = g(l, o, f, h, r[p + 14], 9, -1019803690), h = g(h, l, o, f, r[p + 3], 14, -187363961), f = g(f, h, l, o, r[p + 8], 20, 1163531501), o = g(o, f, h, l, r[p + 13], 5, -1444681467), l = g(l, o, f, h, r[p + 2], 9, -51403784), h = g(h, l, o, f, r[p + 7], 14, 1735328473), o = w(o, f = g(f, h, l, o, r[p + 12], 20, -1926607734), h, l, r[p + 5], 4, -378558), l = w(l, o, f, h, r[p + 8], 11, -2022574463), h = w(h, l, o, f, r[p + 11], 16, 1839030562), f = w(f, h, l, o, r[p + 14], 23, -35309556), o = w(o, f, h, l, r[p + 1], 4, -1530992060), l = w(l, o, f, h, r[p + 4], 11, 1272893353), h = w(h, l, o, f, r[p + 7], 16, -155497632), f = w(f, h, l, o, r[p + 10], 23, -1094730640), o = w(o, f, h, l, r[p + 13], 4, 681279174), l = w(l, o, f, h, r[p + 0], 11, -358537222), h = w(h, l, o, f, r[p + 3], 16, -722521979), f = w(f, h, l, o, r[p + 6], 23, 76029189), o = w(o, f, h, l, r[p + 9], 4, -640364487), l = w(l, o, f, h, r[p + 12], 11, -421815835), h = w(h, l, o, f, r[p + 15], 16, 530742520), o = b(o, f = w(f, h, l, o, r[p + 2], 23, -995338651), h, l, r[p + 0], 6, -198630844), l = b(l, o, f, h, r[p + 7], 10, 1126891415), h = b(h, l, o, f, r[p + 14], 15, -1416354905), f = b(f, h, l, o, r[p + 5], 21, -57434055), o = b(o, f, h, l, r[p + 12], 6, 1700485571), l = b(l, o, f, h, r[p + 3], 10, -1894986606), h = b(h, l, o, f, r[p + 10], 15, -1051523), f = b(f, h, l, o, r[p + 1], 21, -2054922799), o = b(o, f, h, l, r[p + 8], 6, 1873313359), l = b(l, o, f, h, r[p + 15], 10, -30611744), h = b(h, l, o, f, r[p + 6], 15, -1560198380), f = b(f, h, l, o, r[p + 13], 21, 1309151649), o = b(o, f, h, l, r[p + 4], 6, -145523070), l = b(l, o, f, h, r[p + 11], 10, -1120210379), h = b(h, l, o, f, r[p + 2], 15, 718787259), f = b(f, h, l, o, r[p + 9], 21, -343485551), o = o + y >>> 0, f = f + C >>> 0, h = h + x >>> 0, l = l + T >>> 0 } return s.endian([o, f, h, l]) })._ff = function(n, t, r, s, a, e, i) { var u = n + (t & r | ~t & s) + (a >>> 0) + i; return (u << e | u >>> 32 - e) + t }, u._gg = function(n, t, r, s, a, e, i) { var u = n + (t & s | r & ~s) + (a >>> 0) + i; return (u << e | u >>> 32 - e) + t }, u._hh = function(n, t, r, s, a, e, i) { var u = n + (t ^ r ^ s) + (a >>> 0) + i; return (u << e | u >>> 32 - e) + t }, u._ii = function(n, t, r, s, a, e, i) { var u = n + (r ^ (t | ~s)) + (a >>> 0) + i; return (u << e | u >>> 32 - e) + t }, u._blocksize = 16, u._digestsize = 16, n.exports = function(n, t) { if (null == n) throw new Error("Illegal argument " + n); var r = s.wordsToBytes(u(n, t)); return t && t.asBytes ? r : t && t.asString ? i.bytesToString(r) : s.bytesToHex(r) } }, function(n, t, r) {
    (function(n) { var s = void 0 !== n && n || "undefined" != typeof self && self || window,
            a = Function.prototype.apply;

        function e(n, t) { this._id = n, this._clearFn = t } t.setTimeout = function() { return new e(a.call(setTimeout, s, arguments), clearTimeout) }, t.setInterval = function() { return new e(a.call(setInterval, s, arguments), clearInterval) }, t.clearTimeout = t.clearInterval = function(n) { n && n.close() }, e.prototype.unref = e.prototype.ref = function() {}, e.prototype.close = function() { this._clearFn.call(s, this._id) }, t.enroll = function(n, t) { clearTimeout(n._idleTimeoutId), n._idleTimeout = t }, t.unenroll = function(n) { clearTimeout(n._idleTimeoutId), n._idleTimeout = -1 }, t._unrefActive = t.active = function(n) { clearTimeout(n._idleTimeoutId); var t = n._idleTimeout;
            t >= 0 && (n._idleTimeoutId = setTimeout(function() { n._onTimeout && n._onTimeout() }, t)) }, r(6), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== n && n.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== n && n.clearImmediate || this && this.clearImmediate }).call(this, r(2)) }, function(n, t, r) {
    (function(n, t) {! function(n, r) { "use strict"; if (!n.setImmediate) { var s, a, e, i, u, c = 1,
                    o = {},
                    f = !1,
                    h = n.document,
                    l = Object.getPrototypeOf && Object.getPrototypeOf(n);
                l = l && l.setTimeout ? l : n, "[object process]" === {}.toString.call(n.process) ? s = function(n) { t.nextTick(function() { m(n) }) } : ! function() { if (n.postMessage && !n.importScripts) { var t = !0,
                            r = n.onmessage; return n.onmessage = function() { t = !1 }, n.postMessage("", "*"), n.onmessage = r, t } }() ? n.MessageChannel ? ((e = new MessageChannel).port1.onmessage = function(n) { m(n.data) }, s = function(n) { e.port2.postMessage(n) }) : h && "onreadystatechange" in h.createElement("script") ? (a = h.documentElement, s = function(n) { var t = h.createElement("script");
                    t.onreadystatechange = function() { m(n), t.onreadystatechange = null, a.removeChild(t), t = null }, a.appendChild(t) }) : s = function(n) { setTimeout(m, 0, n) } : (i = "setImmediate$" + Math.random() + "$", u = function(t) { t.source === n && "string" == typeof t.data && 0 === t.data.indexOf(i) && m(+t.data.slice(i.length)) }, n.addEventListener ? n.addEventListener("message", u, !1) : n.attachEvent("onmessage", u), s = function(t) { n.postMessage(i + t, "*") }), l.setImmediate = function(n) { "function" != typeof n && (n = new Function("" + n)); for (var t = new Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1]; var a = { callback: n, args: t }; return o[c] = a, s(c), c++ }, l.clearImmediate = p }

            function p(n) { delete o[n] }

            function m(n) { if (f) setTimeout(m, 0, n);
                else { var t = o[n]; if (t) { f = !0; try {! function(n) { var t = n.callback,
                                    s = n.args; switch (s.length) {
                                    case 0:
                                        t(); break;
                                    case 1:
                                        t(s[0]); break;
                                    case 2:
                                        t(s[0], s[1]); break;
                                    case 3:
                                        t(s[0], s[1], s[2]); break;
                                    default:
                                        t.apply(r, s) } }(t) } finally { p(n), f = !1 } } } } }("undefined" == typeof self ? void 0 === n ? this : n : self) }).call(this, r(2), r(7)) }, function(n, t) { var r, s, a = n.exports = {};

    function e() { throw new Error("setTimeout has not been defined") }

    function i() { throw new Error("clearTimeout has not been defined") }

    function u(n) { if (r === setTimeout) return setTimeout(n, 0); if ((r === e || !r) && setTimeout) return r = setTimeout, setTimeout(n, 0); try { return r(n, 0) } catch (t) { try { return r.call(null, n, 0) } catch (t) { return r.call(this, n, 0) } } }! function() { try { r = "function" == typeof setTimeout ? setTimeout : e } catch (n) { r = e } try { s = "function" == typeof clearTimeout ? clearTimeout : i } catch (n) { s = i } }(); var c, o = [],
        f = !1,
        h = -1;

    function l() { f && c && (f = !1, c.length ? o = c.concat(o) : h = -1, o.length && p()) }

    function p() { if (!f) { var n = u(l);
            f = !0; for (var t = o.length; t;) { for (c = o, o = []; ++h < t;) c && c[h].run();
                h = -1, t = o.length } c = null, f = !1,
                function(n) { if (s === clearTimeout) return clearTimeout(n); if ((s === i || !s) && clearTimeout) return s = clearTimeout, clearTimeout(n); try { s(n) } catch (t) { try { return s.call(null, n) } catch (t) { return s.call(this, n) } } }(n) } }

    function m(n, t) { this.fun = n, this.array = t }

    function g() {} a.nextTick = function(n) { var t = new Array(arguments.length - 1); if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        o.push(new m(n, t)), 1 !== o.length || f || u(p) }, m.prototype.run = function() { this.fun.apply(null, this.array) }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = g, a.addListener = g, a.once = g, a.off = g, a.removeListener = g, a.removeAllListeners = g, a.emit = g, a.prependListener = g, a.prependOnceListener = g, a.listeners = function(n) { return [] }, a.binding = function(n) { throw new Error("process.binding is not supported") }, a.cwd = function() { return "/" }, a.chdir = function(n) { throw new Error("process.chdir is not supported") }, a.umask = function() { return 0 } }, function(n, t) { var r, s;
    r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = { rotl: function(n, t) { return n << t | n >>> 32 - t }, rotr: function(n, t) { return n << 32 - t | n >>> t }, endian: function(n) { if (n.constructor == Number) return 16711935 & s.rotl(n, 8) | 4278255360 & s.rotl(n, 24); for (var t = 0; t < n.length; t++) n[t] = s.endian(n[t]); return n }, randomBytes: function(n) { for (var t = []; n > 0; n--) t.push(Math.floor(256 * Math.random())); return t }, bytesToWords: function(n) { for (var t = [], r = 0, s = 0; r < n.length; r++, s += 8) t[s >>> 5] |= n[r] << 24 - s % 32; return t }, wordsToBytes: function(n) { for (var t = [], r = 0; r < 32 * n.length; r += 8) t.push(n[r >>> 5] >>> 24 - r % 32 & 255); return t }, bytesToHex: function(n) { for (var t = [], r = 0; r < n.length; r++) t.push((n[r] >>> 4).toString(16)), t.push((15 & n[r]).toString(16)); return t.join("") }, hexToBytes: function(n) { for (var t = [], r = 0; r < n.length; r += 2) t.push(parseInt(n.substr(r, 2), 16)); return t }, bytesToBase64: function(n) { for (var t = [], s = 0; s < n.length; s += 3)
                for (var a = n[s] << 16 | n[s + 1] << 8 | n[s + 2], e = 0; e < 4; e++) 8 * s + 6 * e <= 8 * n.length ? t.push(r.charAt(a >>> 6 * (3 - e) & 63)) : t.push("="); return t.join("") }, base64ToBytes: function(n) { n = n.replace(/[^A-Z0-9+\/]/gi, ""); for (var t = [], s = 0, a = 0; s < n.length; a = ++s % 4) 0 != a && t.push((r.indexOf(n.charAt(s - 1)) & Math.pow(2, -2 * a + 8) - 1) << 2 * a | r.indexOf(n.charAt(s)) >>> 6 - 2 * a); return t } }, n.exports = s }, function(n, t) {
    function r(n) { return !!n.constructor && "function" == typeof n.constructor.isBuffer && n.constructor.isBuffer(n) }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    n.exports = function(n) { return null != n && (r(n) || function(n) { return "function" == typeof n.readFloatLE && "function" == typeof n.slice && r(n.slice(0, 0)) }(n) || !!n._isBuffer) }
}, function(n, t) { t.endianness = function() { return "LE" }, t.hostname = function() { return "undefined" != typeof location ? location.hostname : "" }, t.loadavg = function() { return [] }, t.uptime = function() { return 0 }, t.freemem = function() { return Number.MAX_VALUE }, t.totalmem = function() { return Number.MAX_VALUE }, t.cpus = function() { return [] }, t.type = function() { return "Browser" }, t.release = function() { return "undefined" != typeof navigator ? navigator.appVersion : "" }, t.networkInterfaces = t.getNetworkInterfaces = function() { return {} }, t.arch = function() { return "javascript" }, t.platform = function() { return "browser" }, t.tmpdir = t.tmpDir = function() { return "/tmp" }, t.EOL = "\n", t.homedir = function() { return "/" } }, function(n, t, r) { var s = r(12); "string" == typeof s && (s = [
        [n.i, s, ""]
    ]); var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    r(14)(s, a);
    s.locals && (n.exports = s.locals) }, function(n, t, r) {
    (n.exports = r(13)(!1)).push([n.i, "nav.tabs {\n  font-size: 14px;\n  margin: 20px; }\n  nav.tabs.light {\n    color: white; }\n  nav.tabs ul {\n    display: flex;\n    justify-content: center; }\n    nav.tabs ul li span {\n      padding: 4px 10px;\n      cursor: pointer;\n      border-bottom: 2px solid #ccc;\n      transition: .1s all;\n      box-sizing: border-box; }\n      nav.tabs ul li span.selected {\n        border-color: #fa644d; }\n      nav.tabs ul li span:hover {\n        background: #eee; }\n\n.rns-plugin {\n  margin: 20px 0 30px;\n  user-select: none; }\n  .rns-plugin .rns-icon {\n    text-shadow: none; }\n  .rns-plugin .rns-icon, .rns-plugin .rns-label, .rns-plugin .rns-reaction-count {\n    display: inline-block;\n    text-align: center; }\n  .rns-plugin .rns-reactions .rns-reaction {\n    box-sizing: border-box;\n    display: inline-block;\n    padding: 0 .5%;\n    width: 16.66%;\n    position: relative;\n    text-align: center; }\n    .rns-plugin .rns-reactions .rns-reaction .rns-icon {\n      margin-right: 4px; }\n      .rns-plugin .rns-reactions .rns-reaction .rns-icon img {\n        width: 22px;\n        height: 22px;\n        margin: 0;\n        padding: 0;\n        vertical-align: middle;\n        display: inline; }\n  .rns-plugin .rns-reactions.rns-5 .rns-reaction {\n    width: 20%; }\n  .rns-plugin .rns-reactions.rns-4 .rns-reaction {\n    width: 25%; }\n  .rns-plugin .rns-reactions.rns-3 .rns-reaction {\n    width: 33.33%; }\n  .rns-plugin .rns-header {\n    font-size: 24px;\n    font-weight: 600;\n    margin-bottom: 20px; }\n  .rns-plugin .rns-share-twitter .rns-share-button {\n    background: #1da1f2; }\n  .rns-plugin .rns-share-facebook .rns-share-button {\n    background: #3b5998; }\n  .rns-plugin .rns-share-whatsapp .rns-share-button {\n    background: #25d366; }\n  .rns-plugin .rns-share-pinterest .rns-share-button {\n    background: #bd081c; }\n  .rns-plugin .rns-share-linkedin .rns-share-button {\n    background: #0077b5; }\n  .rns-plugin .rns-share-google .rns-share-button {\n    background: #dd4b39; }\n  .rns-plugin .rns-share-telegram .rns-share-button {\n    background: #0088cc; }\n  .rns-plugin .rns-share-email .rns-share-button {\n    background: #777; }\n  .rns-plugin .rns-share-fbmessenger .rns-share-button {\n    background: #0084ff; }\n  .rns-plugin .rns-share-link .rns-share-button {\n    background: #4fbfe0; }\n  .rns-plugin .rns-share-print .rns-share-button {\n    background: #606060; }\n  .rns-plugin .rns-footer {\n    text-align: right;\n    margin-top: 10px; }\n    .rns-plugin .rns-footer .rns-footer-link {\n      text-decoration: none;\n      padding-right: .5%;\n      background: transparent;\n      border: 0; }\n      .rns-plugin .rns-footer .rns-footer-link img {\n        height: 14px !important;\n        display: inline !important;\n        opacity: .6;\n        transition: .2s opacity; }\n      .rns-plugin .rns-footer .rns-footer-link:hover {\n        background: transparent; }\n        .rns-plugin .rns-footer .rns-footer-link:hover img {\n          opacity: 1; }\n  .rns-plugin .rns-shares {\n    margin-top: 14px;\n    max-height: 0;\n    overflow: hidden; }\n    .rns-plugin .rns-shares.rns-highlight {\n      animation: show-shares .7s;\n      max-height: 300px; }\n    .rns-plugin .rns-shares .rns-header {\n      font-size: 18px; }\n    .rns-plugin .rns-shares .rns-share {\n      display: inline-block;\n      box-sizing: border-box;\n      width: 33.33%;\n      padding: 0 .5% 8px; }\n    .rns-plugin .rns-shares .rns-share-fbmessenger {\n      display: none; }\n    .rns-plugin .rns-shares .rns-share-button {\n      text-align: center;\n      color: #fff; }\n    .rns-plugin .rns-shares .rns-icon {\n      display: inline-block;\n      vertical-align: middle;\n      font-size: 1.2em;\n      margin-right: 4px; }\n      .rns-plugin .rns-shares .rns-icon .fa {\n        font: normal normal normal 14px/1 FontAwesome !important;\n        display: inline; }\n    .rns-plugin .rns-shares .rns-label {\n      display: inline-block; }\n  .rns-plugin .rns-custom-ctas {\n    margin-top: 14px;\n    max-height: 0;\n    overflow: hidden; }\n    .rns-plugin .rns-custom-ctas.rns-highlight {\n      animation: show-shares .7s;\n      max-height: 300px; }\n  .rns-plugin .rns-inputs {\n    margin-top: 14px;\n    max-height: 0;\n    overflow: hidden; }\n    .rns-plugin .rns-inputs.rns-highlight {\n      animation: show-shares .7s;\n      max-height: 300px; }\n  .rns-plugin .rns-reaction-button, .rns-plugin .rns-share-button {\n    box-sizing: border-box;\n    padding: 0;\n    font-size: 14px;\n    line-height: 30px;\n    width: 100%;\n    cursor: pointer;\n    outline: none;\n    -moz-outline-style: none;\n    position: relative;\n    transition: .1s all; }\n    .rns-plugin .rns-reaction-button::-moz-focus-inner, .rns-plugin .rns-share-button::-moz-focus-inner {\n      border: 0; }\n    .rns-plugin .rns-reaction-button:focus, .rns-plugin .rns-share-button:focus {\n      outline: none; }\n    .rns-plugin .rns-reaction-button img, .rns-plugin .rns-share-button img {\n      height: 26px;\n      width: 26px;\n      vertical-align: middle;\n      transition: .1s all; }\n    .rns-plugin .rns-reaction-button .rns-reaction-count-hidden, .rns-plugin .rns-share-button .rns-reaction-count-hidden {\n      display: none !important; }\n  .rns-plugin .plus-one {\n    font-family: 'Open Sans', sans-serif;\n    font-size: 13px;\n    line-height: 20px;\n    text-align: center;\n    box-sizing: border-box;\n    position: absolute;\n    width: 40px;\n    left: 50%;\n    margin-left: -20px;\n    top: -16px;\n    font-weight: 600;\n    border-radius: 3px;\n    opacity: 0; }\n  .rns-plugin .rns-reaction.selected .plus-one {\n    animation: 2s mariobros; }\n\n@keyframes copied {\n  0% {\n    background: #00d41a; }\n  100% {\n    background: #4fbfe0; } }\n\n.rns-share-link-copied .rns-share-button {\n  animation: copied 1s; }\n\n.rns-share-link-copied .rns-share-button::before {\n  content: 'Copied';\n  display: block;\n  position: absolute;\n  animation: mariobros 1s;\n  z-index: 10;\n  top: 0;\n  width: 50px;\n  background: #333;\n  height: 22px;\n  line-height: 22px;\n  border-radius: 3px;\n  left: 50%;\n  margin-left: -25px;\n  opacity: 0; }\n\n@media only screen and (max-width: 680px) {\n  .rns-plugin .rns-reactions {\n    text-align: center; }\n    .rns-plugin .rns-reactions.rns-1 .rns-reaction, .rns-plugin .rns-reactions.rns-2 .rns-reaction, .rns-plugin .rns-reactions.rns-3 .rns-reaction, .rns-plugin .rns-reactions.rns-4 .rns-reaction, .rns-plugin .rns-reactions.rns-5 .rns-reaction, .rns-plugin .rns-reactions.rns-6 .rns-reaction {\n      width: 50%; }\n    .rns-plugin .rns-reactions .rns-header {\n      text-align: left; }\n  .rns-plugin .rns-shares .rns-share {\n    width: 50%; }\n  .rns-plugin .rns-shares .rns-share-whatsapp {\n    display: inline-block; }\n  .rns-plugin .rns-shares .rns-share-fbmessenger {\n    display: inline-block; } }\n\n@media print {\n  .rns-plugin {\n    display: none; } }\n\n@keyframes mariobros {\n  0% {\n    opacity: 0; }\n  10% {\n    opacity: .87;\n    top: -26px; }\n  50% {\n    opacity: .87;\n    top: -26px; }\n  80% {\n    opacity: 0;\n    top: -26px; }\n  100% {\n    opacity: 0;\n    top: 0; } }\n\n@keyframes mariobros2 {\n  0% {\n    opacity: 0; }\n  10% {\n    opacity: .87;\n    top: -36px; }\n  50% {\n    opacity: .87;\n    top: -36px; }\n  80% {\n    opacity: 0;\n    top: -36px; }\n  100% {\n    opacity: 0;\n    top: 0; } }\n\n@keyframes show-shares {\n  0% {\n    max-height: 0; }\n  70% {\n    max-height: 0; }\n  100% {\n    max-height: 300px; } }\n\n.rns-plugin.rns-style-button .rns-reaction-button, .rns-plugin.rns-style-button .rns-share-button {\n  font-weight: 500;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgba(0, 0, 0, 0.1);\n  top: -2px;\n  font-family: 'Fira Sans Condensed', sans-serif;\n  font-size: 13px;\n  border-radius: 2px; }\n  .rns-plugin.rns-style-button .rns-reaction-button:after, .rns-plugin.rns-style-button .rns-share-button:after {\n    content: \"\";\n    display: block;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.06) 100%); }\n  .rns-plugin.rns-style-button .rns-reaction-button:hover, .rns-plugin.rns-style-button .rns-share-button:hover {\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }\n\n.rns-plugin.rns-style-button .rns-reactions .selected .rns-reaction-button {\n  top: 0; }\n  .rns-plugin.rns-style-button .rns-reactions .selected .rns-reaction-button .rns-reaction-count {\n    bottom: -28px; }\n  .rns-plugin.rns-style-button .rns-reactions .selected .rns-reaction-button:hover {\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08); }\n    .rns-plugin.rns-style-button .rns-reactions .selected .rns-reaction-button:hover .rns-reaction-count {\n      opacity: 1; }\n\n.rns-plugin.rns-style-button .rns-reaction-button:hover .rns-reaction-count {\n  bottom: -30px; }\n\n.rns-plugin.rns-style-button .rns-reaction-button:active {\n  top: 2px; }\n  .rns-plugin.rns-style-button .rns-reaction-button:active .rns-reaction-count {\n    bottom: -26px; }\n\n@media only screen and (max-width: 680px) {\n  .rns-plugin .rns-reactions .rns-reaction, .rns-plugin .rns-shares .rns-share {\n    padding: 4px; } }\n\n.rns-plugin.rns-style-flat .rns-reaction-button, .rns-plugin.rns-style-flat .rns-share-button {\n  border: 0;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 12px;\n  border-radius: 4px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n  top: -2px; }\n  .rns-plugin.rns-style-flat .rns-reaction-button:hover, .rns-plugin.rns-style-flat .rns-share-button:hover {\n    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.35); }\n  .rns-plugin.rns-style-flat .rns-reaction-button .rns-label, .rns-plugin.rns-style-flat .rns-share-button .rns-label {\n    font-weight: 600; }\n\n.rns-plugin.rns-style-flat .plus-one {\n  line-height: 30px;\n  width: 30px;\n  left: 50%;\n  margin-left: -15px;\n  top: -16px;\n  border-radius: 50%; }\n\n.rns-plugin.rns-style-flat .rns-reactions .selected .rns-reaction-button {\n  box-shadow: none;\n  top: 0; }\n  .rns-plugin.rns-style-flat .rns-reactions .selected .rns-reaction-button:hover img {\n    transform: none; }\n  .rns-plugin.rns-style-flat .rns-reactions .selected .rns-reaction-button .rns-reaction-count {\n    bottom: -28px; }\n\n.rns-plugin.rns-style-flat .rns-reaction.selected .plus-one {\n  animation: 1s mariobros2; }\n\n.rns-plugin.rns-style-sneakyflat .rns-reactions {\n  text-align: center; }\n  .rns-plugin.rns-style-sneakyflat .rns-reactions .rns-header {\n    text-align: left; }\n  .rns-plugin.rns-style-sneakyflat .rns-reactions .rns-reaction {\n    width: auto;\n    margin: 4px 2px; }\n    .rns-plugin.rns-style-sneakyflat .rns-reactions .rns-reaction .rns-reaction-button {\n      background: transparent; }\n      .rns-plugin.rns-style-sneakyflat .rns-reactions .rns-reaction .rns-reaction-button:active {\n        top: 2px; }\n    .rns-plugin.rns-style-sneakyflat .rns-reactions .rns-reaction .rns-label {\n      font-weight: 600; }\n    .rns-plugin.rns-style-sneakyflat .rns-reactions .rns-reaction .rns-icon img {\n      height: 26px;\n      width: 26px; }\n\n.rns-plugin.rns-style-sneakyflat .rns-reaction-button, .rns-plugin.rns-style-sneakyflat .rns-share-button {\n  font-family: 'Open Sans', sans-serif;\n  border: 0;\n  background: #fff;\n  border-radius: 8px;\n  font-size: 14px; }\n\n.rns-plugin.rns-style-sneakyflat .rns-reaction-button {\n  padding: 6px 12px; }\n  .rns-plugin.rns-style-sneakyflat .rns-reaction-button:hover {\n    box-shadow: 0 0 16px rgba(0, 0, 0, 0.5); }\n\n.rns-plugin.rns-style-sneakyflat .rns-shares .rns-share {\n  text-align: center; }\n\n.rns-plugin.rns-style-sneakyflat .rns-shares .rns-share-button {\n  line-height: 34px;\n  font-size: 12px;\n  padding: 0;\n  border-radius: 3px;\n  color: #fff; }\n  .rns-plugin.rns-style-sneakyflat .rns-shares .rns-share-button:hover {\n    box-shadow: none;\n    opacity: .7; }\n\n.rns-plugin.rns-style-sneakyflat .rns-shares .rns-icon {\n  background: none;\n  display: inline-block;\n  position: relative;\n  width: auto;\n  font-size: 18px;\n  margin-right: 4px;\n  color: #fff; }\n\n.rns-plugin.rns-style-sneakyflat .rns-shares .rns-label {\n  display: inline-block; }\n\n.rns-plugin.rns-style-sneakyflat .rns-shares .rns-share-whatsapp .rns-share-button {\n  background: #25d366; }\n\n.rns-plugin.rns-style-sneakyflat .rns-shares .rns-share-facebook .rns-share-button {\n  background: #3b5998; }\n\n.rns-plugin.rns-style-sneakyflat .rns-shares .rns-share-twitter .rns-share-button {\n  background: #1da1f2; }\n\n.rns-plugin.rns-style-sneakyflat .rns-shares .rns-share-pinterest .rns-share-button {\n  background: #bd081c; }\n\n.rns-plugin.rns-style-sneakyflat .rns-shares .rns-share-google .rns-share-button {\n  background: #dd4b39; }\n\n.rns-plugin.rns-style-sneakyflat .rns-shares .rns-share-telegram .rns-share-button {\n  background: #0088cc; }\n\n.rns-plugin.rns-style-sneakyflat .rns-shares .rns-share-linkedin .rns-share-button {\n  background: #0077b5; }\n\n.rns-plugin.rns-style-sneakyflat .rns-shares .rns-share-email .rns-share-button {\n  background: #777; }\n\n.rns-plugin.rns-style-sneakyflat .rns-shares .rns-share-fbmessenger .rns-share-button {\n  background: #0084ff; }\n\n.rns-plugin.rns-style-sneakyflat .plus-one {\n  display: none; }\n\n@media only screen and (max-width: 680px) {\n  .rns-plugin.rns-style-sneakyflat .rns-reactions .rns-reaction {\n    width: auto;\n    margin: 0;\n    text-align: left; }\n    .rns-plugin.rns-style-sneakyflat .rns-reactions .rns-reaction .rns-reaction-button {\n      display: inline-block;\n      width: auto; } }\n\n.rns-reactions.rns-count-under .rns-reaction-count {\n  position: absolute;\n  display: block;\n  width: 100px;\n  left: 50%;\n  margin-left: -50px;\n  bottom: -30px;\n  transition: all .1s;\n  font-weight: 400;\n  opacity: .8; }\n\n.rns-reactions.rns-count-under .rns-reaction-button:hover .rns-reaction-count {\n  opacity: 1; }\n\n.rns-reactions.rns-count-under .rns-reaction {\n  margin-bottom: 30px; }\n\n.rns-reactions.rns-count-hidden .rns-reaction-button .rns-reaction-count {\n  display: none; }\n\n.rns-reactions.rns-count-over .rns-reaction-button .rns-reaction-count {\n  display: inline-block;\n  background: #eee;\n  line-height: 18px;\n  border: 2px solid #fff;\n  border-radius: 14px;\n  position: absolute;\n  top: -12px;\n  right: -6px;\n  height: 20px;\n  min-width: 20px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2); }\n\n.rns-reactions.rns-count-side .rns-reaction-button .rns-reaction-count {\n  margin-left: 5px;\n  font-weight: 400;\n  opacity: .7; }\n\n.rns-reactions.rns-count-side .rns-reaction-button .rns-icon {\n  display: inline-block; }\n\n.rns-plugin.rns-style-sneakyflat .rns-count-under .rns-reaction {\n  padding-bottom: 24px; }\n\n@media only screen and (max-width: 680px) {\n  .rns-plugin.rns-style-sneakyflat .rns-reaction-label-show.rns-count-side .rns-reaction-count {\n    margin: -12px 0 0;\n    display: block;\n    font-weight: 400;\n    display: inline-block;\n    margin-left: 4px; }\n  .rns-plugin.rns-style-sneakyflat .rns-reaction-label-show.rns-count-under .rns-reaction-count {\n    height: 30px; }\n  .rns-plugin.rns-style-sneakyflat .rns-reaction-label-show.rns-count-under .rns-reaction-count, .rns-plugin.rns-style-sneakyflat .rns-reaction-label-show.rns-count-side .rns-reaction-count {\n    font-size: 12px; }\n  .rns-plugin.rns-style-sneakyflat .rns-reaction-label-show.rns-count-over .rns-reaction-button {\n    width: auto !important; } }\n\n.rns-reactions.rns-reaction-label-hover-only .rns-reaction-button .rns-label {\n  display: block;\n  box-sizing: border-box;\n  text-align: center;\n  position: absolute;\n  top: 0;\n  margin-left: -35px;\n  left: 50%;\n  width: 70px;\n  background: #333;\n  color: #fff !important;\n  line-height: 12px;\n  font-style: normal;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 12px;\n  padding: 5px;\n  opacity: 0;\n  z-index: 1; }\n\n.rns-reactions.rns-reaction-label-hover-only .rns-reaction-button:hover .rns-label {\n  animation: 2s mariobros; }\n\n.rns-reactions.rns-reaction-label-hover-only .rns-reaction-button .rns-icon {\n  margin-right: 0; }\n\n.rns-reactions.rns-reaction-label-hover-only .plus-one {\n  display: none; }\n\n.rns-reactions.rns-reaction-icons-large .rns-reaction-button .rns-icon {\n  display: block;\n  margin: 4px 0 0;\n  font-size: 20px; }\n  .rns-reactions.rns-reaction-icons-large .rns-reaction-button .rns-icon img {\n    height: 26px;\n    width: 26px; }\n\n.rns-reactions.rns-reaction-icons-large .rns-reaction-button:hover img {\n  transform: scale(1.2); }\n\n.rns-reactions.rns-reaction-icons-large .rns-reaction-button:active img {\n  transform: scale(1.4); }\n\n.rns-reactions.rns-reaction-icons-large.rns-reaction-label-hover-only .rns-reaction-button .rns-icon {\n  display: inline-block;\n  margin: 10px 0;\n  font-size: 20px; }\n  .rns-reactions.rns-reaction-icons-large.rns-reaction-label-hover-only .rns-reaction-button .rns-icon img {\n    width: 32px;\n    height: 32px; }\n\n.rns-reactions.rns-reaction-icons-hide .rns-reaction-button .rns-icon {\n  display: none; }\n\n.rns-plugin.rns-style-sneakyflat .rns-reaction-icons-large .rns-reaction-button {\n  font-size: 16px;\n  padding: 0 12px; }\n  .rns-plugin.rns-style-sneakyflat .rns-reaction-icons-large .rns-reaction-button .rns-icon {\n    padding: 10px 0 0;\n    font-size: 20px; }\n    .rns-plugin.rns-style-sneakyflat .rns-reaction-icons-large .rns-reaction-button .rns-icon img {\n      width: 32px;\n      height: 32px;\n      transform: none; }\n  .rns-plugin.rns-style-sneakyflat .rns-reaction-icons-large .rns-reaction-button .rns-reaction-count {\n    opacity: 1; }\n\n.rns-plugin.rns-style-sneakyflat .rns-reaction-label-hover-only .rns-reaction-button .rns-icon {\n  padding: 0; }\n\n@media only screen and (max-width: 680px) {\n  .rns-plugin.rns-style-sneakyflat .rns-reactions.rns-reaction-icons-large .rns-reaction {\n    width: 33.333%;\n    text-align: center; }\n    .rns-plugin.rns-style-sneakyflat .rns-reactions.rns-reaction-icons-large .rns-reaction .rns-reaction-button {\n      padding: 0 4px;\n      width: 100%; }\n      .rns-plugin.rns-style-sneakyflat .rns-reactions.rns-reaction-icons-large .rns-reaction .rns-reaction-button .rns-label {\n        font-size: 12px;\n        font-weight: 500; }\n  .rns-plugin.rns-style-sneakyflat .rns-reactions.rns-reaction-icons-small .rns-reaction {\n    width: 50%; }\n    .rns-plugin.rns-style-sneakyflat .rns-reactions.rns-reaction-icons-small .rns-reaction .rns-reaction-button {\n      width: 100%;\n      padding: 4px 6px; }\n      .rns-plugin.rns-style-sneakyflat .rns-reactions.rns-reaction-icons-small .rns-reaction .rns-reaction-button .rns-label {\n        font-size: 12px; }\n      .rns-plugin.rns-style-sneakyflat .rns-reactions.rns-reaction-icons-small .rns-reaction .rns-reaction-button .rns-reaction-count {\n        font-size: 12px; } }\n\n.rns-plugin .rns-shares.rns-shares-float {\n  position: fixed;\n  width: 50px; }\n  .rns-plugin .rns-shares.rns-shares-float.rns-shares-float-left {\n    top: 100px;\n    left: 0;\n    direction: ltr; }\n    .rns-plugin .rns-shares.rns-shares-float.rns-shares-float-left .rns-shares-list .rns-share .rns-share-button:hover {\n      width: 50px; }\n  .rns-plugin .rns-shares.rns-shares-float.rns-shares-float-right {\n    top: 100px;\n    right: 0;\n    direction: rtl; }\n    .rns-plugin .rns-shares.rns-shares-float.rns-shares-float-right .rns-shares-list .rns-share .rns-share-button:hover {\n      width: 50px; }\n  .rns-plugin .rns-shares.rns-shares-float.rns-shares-float-bottom {\n    left: 0;\n    bottom: 0;\n    width: 100%; }\n    .rns-plugin .rns-shares.rns-shares-float.rns-shares-float-bottom .rns-shares-list {\n      text-align: center; }\n      .rns-plugin .rns-shares.rns-shares-float.rns-shares-float-bottom .rns-shares-list .rns-share {\n        display: inline-block;\n        width: 12.5%; }\n    .rns-plugin .rns-shares.rns-shares-float.rns-shares-float-bottom.rns-shares-1 .rns-shares-list .rns-share {\n      width: 100%; }\n    .rns-plugin .rns-shares.rns-shares-float.rns-shares-float-bottom.rns-shares-2 .rns-shares-list .rns-share {\n      width: 50%; }\n    .rns-plugin .rns-shares.rns-shares-float.rns-shares-float-bottom.rns-shares-3 .rns-shares-list .rns-share {\n      width: 33.33333%; }\n    .rns-plugin .rns-shares.rns-shares-float.rns-shares-float-bottom.rns-shares-4 .rns-shares-list .rns-share {\n      width: 25%; }\n    .rns-plugin .rns-shares.rns-shares-float.rns-shares-float-bottom.rns-shares-5 .rns-shares-list .rns-share {\n      width: 20%; }\n    .rns-plugin .rns-shares.rns-shares-float.rns-shares-float-bottom.rns-shares-6 .rns-shares-list .rns-share {\n      width: 16.66667%; }\n    .rns-plugin .rns-shares.rns-shares-float.rns-shares-float-bottom.rns-shares-7 .rns-shares-list .rns-share {\n      width: 14.28571%; }\n    .rns-plugin .rns-shares.rns-shares-float.rns-shares-float-bottom.rns-shares-8 .rns-shares-list .rns-share {\n      width: 12.5%; }\n    .rns-plugin .rns-shares.rns-shares-float.rns-shares-float-bottom.rns-shares-9 .rns-shares-list .rns-share {\n      width: 11.11111%; }\n    .rns-plugin .rns-shares.rns-shares-float.rns-shares-float-bottom.rns-shares-10 .rns-shares-list .rns-share {\n      width: 10%; }\n  .rns-plugin .rns-shares.rns-shares-float .rns-header {\n    display: none; }\n  .rns-plugin .rns-shares.rns-shares-float .rns-shares-list .rns-share {\n    display: block;\n    width: 46px;\n    margin: 0;\n    padding: 0; }\n    .rns-plugin .rns-shares.rns-shares-float .rns-shares-list .rns-share .rns-share-button {\n      border-radius: 0;\n      box-shadow: none !important;\n      transition: .1s all;\n      line-height: 46px; }\n    .rns-plugin .rns-shares.rns-shares-float .rns-shares-list .rns-share .rns-label {\n      display: none; }\n    .rns-plugin .rns-shares.rns-shares-float .rns-shares-list .rns-share .rns-icon {\n      margin: 0; }\n      .rns-plugin .rns-shares.rns-shares-float .rns-shares-list .rns-share .rns-icon i {\n        font-size: 16px !important; }\n\n@media only screen and (min-width: 680px) {\n  .rns-plugin .rns-shares.rns-shares-float.rns-shares-float-bottom .rns-shares-list .rns-share.rns-share-fbmessenger {\n    display: none; } }\n\n@media only screen and (max-width: 680px) {\n  .rns-plugin .rns-shares-float.rns-shares-float-left, .rns-plugin .rns-shares-float.rns-shares-float-right {\n    left: 0;\n    bottom: 0;\n    top: auto !important;\n    width: 100%; }\n    .rns-plugin .rns-shares-float.rns-shares-float-left .rns-shares-list, .rns-plugin .rns-shares-float.rns-shares-float-right .rns-shares-list {\n      text-align: center; }\n      .rns-plugin .rns-shares-float.rns-shares-float-left .rns-shares-list .rns-share, .rns-plugin .rns-shares-float.rns-shares-float-right .rns-shares-list .rns-share {\n        display: inline-block;\n        width: 12.5%; }\n    .rns-plugin .rns-shares-float.rns-shares-float-left.rns-shares-1 .rns-shares-list .rns-share, .rns-plugin .rns-shares-float.rns-shares-float-right.rns-shares-1 .rns-shares-list .rns-share {\n      width: 100%; }\n    .rns-plugin .rns-shares-float.rns-shares-float-left.rns-shares-2 .rns-shares-list .rns-share, .rns-plugin .rns-shares-float.rns-shares-float-right.rns-shares-2 .rns-shares-list .rns-share {\n      width: 50%; }\n    .rns-plugin .rns-shares-float.rns-shares-float-left.rns-shares-3 .rns-shares-list .rns-share, .rns-plugin .rns-shares-float.rns-shares-float-right.rns-shares-3 .rns-shares-list .rns-share {\n      width: 33.33333%; }\n    .rns-plugin .rns-shares-float.rns-shares-float-left.rns-shares-4 .rns-shares-list .rns-share, .rns-plugin .rns-shares-float.rns-shares-float-right.rns-shares-4 .rns-shares-list .rns-share {\n      width: 25%; }\n    .rns-plugin .rns-shares-float.rns-shares-float-left.rns-shares-5 .rns-shares-list .rns-share, .rns-plugin .rns-shares-float.rns-shares-float-right.rns-shares-5 .rns-shares-list .rns-share {\n      width: 20%; }\n    .rns-plugin .rns-shares-float.rns-shares-float-left.rns-shares-6 .rns-shares-list .rns-share, .rns-plugin .rns-shares-float.rns-shares-float-right.rns-shares-6 .rns-shares-list .rns-share {\n      width: 16.66667%; }\n    .rns-plugin .rns-shares-float.rns-shares-float-left.rns-shares-7 .rns-shares-list .rns-share, .rns-plugin .rns-shares-float.rns-shares-float-right.rns-shares-7 .rns-shares-list .rns-share {\n      width: 14.28571%; }\n    .rns-plugin .rns-shares-float.rns-shares-float-left.rns-shares-8 .rns-shares-list .rns-share, .rns-plugin .rns-shares-float.rns-shares-float-right.rns-shares-8 .rns-shares-list .rns-share {\n      width: 12.5%; }\n    .rns-plugin .rns-shares-float.rns-shares-float-left.rns-shares-9 .rns-shares-list .rns-share, .rns-plugin .rns-shares-float.rns-shares-float-right.rns-shares-9 .rns-shares-list .rns-share {\n      width: 11.11111%; }\n    .rns-plugin .rns-shares-float.rns-shares-float-left.rns-shares-10 .rns-shares-list .rns-share, .rns-plugin .rns-shares-float.rns-shares-float-right.rns-shares-10 .rns-shares-list .rns-share {\n      width: 10%; } }\n", ""]) }, function(n, t, r) { "use strict";
    n.exports = function(n) { var t = []; return t.toString = function() { return this.map(function(t) { var r = function(n, t) { var r = n[1] || "",
                        s = n[3]; if (!s) return r; if (t && "function" == typeof btoa) { var a = (i = s, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"),
                            e = s.sources.map(function(n) { return "/*# sourceURL=" + s.sourceRoot + n + " */" }); return [r].concat(e).concat([a]).join("\n") } var i; return [r].join("\n") }(t, n); return t[2] ? "@media " + t[2] + "{" + r + "}" : r }).join("") }, t.i = function(n, r) { "string" == typeof n && (n = [
                [null, n, ""]
            ]); for (var s = {}, a = 0; a < this.length; a++) { var e = this[a][0];
                null != e && (s[e] = !0) } for (a = 0; a < n.length; a++) { var i = n[a];
                null != i[0] && s[i[0]] || (r && !i[2] ? i[2] = r : r && (i[2] = "(" + i[2] + ") and (" + r + ")"), t.push(i)) } }, t } }, function(n, t, r) { var s, a, e = {},
        i = (s = function() { return window && document && document.all && !window.atob }, function() { return void 0 === a && (a = s.apply(this, arguments)), a }),
        u = function(n) { var t = {}; return function(n, r) { if ("function" == typeof n) return n(); if (void 0 === t[n]) { var s = function(n, t) { return t ? t.querySelector(n) : document.querySelector(n) }.call(this, n, r); if (window.HTMLIFrameElement && s instanceof window.HTMLIFrameElement) try { s = s.contentDocument.head } catch (n) { s = null } t[n] = s } return t[n] } }(),
        c = null,
        o = 0,
        f = [],
        h = r(15);

    function l(n, t) { for (var r = 0; r < n.length; r++) { var s = n[r],
                a = e[s.id]; if (a) { a.refs++; for (var i = 0; i < a.parts.length; i++) a.parts[i](s.parts[i]); for (; i < s.parts.length; i++) a.parts.push(y(s.parts[i], t)) } else { var u = []; for (i = 0; i < s.parts.length; i++) u.push(y(s.parts[i], t));
                e[s.id] = { id: s.id, refs: 1, parts: u } } } }

    function p(n, t) { for (var r = [], s = {}, a = 0; a < n.length; a++) { var e = n[a],
                i = t.base ? e[0] + t.base : e[0],
                u = { css: e[1], media: e[2], sourceMap: e[3] };
            s[i] ? s[i].parts.push(u) : r.push(s[i] = { id: i, parts: [u] }) } return r }

    function m(n, t) { var r = u(n.insertInto); if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."); var s = f[f.length - 1]; if ("top" === n.insertAt) s ? s.nextSibling ? r.insertBefore(t, s.nextSibling) : r.appendChild(t) : r.insertBefore(t, r.firstChild), f.push(t);
        else if ("bottom" === n.insertAt) r.appendChild(t);
        else { if ("object" != typeof n.insertAt || !n.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"); var a = u(n.insertAt.before, r);
            r.insertBefore(t, a) } }

    function g(n) { if (null === n.parentNode) return !1;
        n.parentNode.removeChild(n); var t = f.indexOf(n);
        t >= 0 && f.splice(t, 1) }

    function w(n) { var t = document.createElement("style"); if (void 0 === n.attrs.type && (n.attrs.type = "text/css"), void 0 === n.attrs.nonce) { var s = function() { 0; return r.nc }();
            s && (n.attrs.nonce = s) } return b(t, n.attrs), m(n, t), t }

    function b(n, t) { Object.keys(t).forEach(function(r) { n.setAttribute(r, t[r]) }) }

    function y(n, t) { var r, s, a, e; if (t.transform && n.css) { if (!(e = "function" == typeof t.transform ? t.transform(n.css) : t.transform.default(n.css))) return function() {};
            n.css = e } if (t.singleton) { var i = o++;
            r = c || (c = w(t)), s = T.bind(null, r, i, !1), a = T.bind(null, r, i, !0) } else n.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (r = function(n) { var t = document.createElement("link"); return void 0 === n.attrs.type && (n.attrs.type = "text/css"), n.attrs.rel = "stylesheet", b(t, n.attrs), m(n, t), t }(t), s = function(n, t, r) { var s = r.css,
                a = r.sourceMap,
                e = void 0 === t.convertToAbsoluteUrls && a;
            (t.convertToAbsoluteUrls || e) && (s = h(s));
            a && (s += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"); var i = new Blob([s], { type: "text/css" }),
                u = n.href;
            n.href = URL.createObjectURL(i), u && URL.revokeObjectURL(u) }.bind(null, r, t), a = function() { g(r), r.href && URL.revokeObjectURL(r.href) }) : (r = w(t), s = function(n, t) { var r = t.css,
                s = t.media;
            s && n.setAttribute("media", s); if (n.styleSheet) n.styleSheet.cssText = r;
            else { for (; n.firstChild;) n.removeChild(n.firstChild);
                n.appendChild(document.createTextNode(r)) } }.bind(null, r), a = function() { g(r) }); return s(n),
            function(t) { if (t) { if (t.css === n.css && t.media === n.media && t.sourceMap === n.sourceMap) return;
                    s(n = t) } else a() } } n.exports = function(n, t) { if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = i()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom"); var r = p(n, t); return l(r, t),
            function(n) { for (var s = [], a = 0; a < r.length; a++) { var i = r[a];
                    (u = e[i.id]).refs--, s.push(u) } n && l(p(n, t), t); for (a = 0; a < s.length; a++) { var u; if (0 === (u = s[a]).refs) { for (var c = 0; c < u.parts.length; c++) u.parts[c]();
                        delete e[u.id] } } } }; var C, x = (C = [], function(n, t) { return C[n] = t, C.filter(Boolean).join("\n") });

    function T(n, t, r, s) { var a = r ? "" : s.css; if (n.styleSheet) n.styleSheet.cssText = x(t, a);
        else { var e = document.createTextNode(a),
                i = n.childNodes;
            i[t] && n.removeChild(i[t]), i.length ? n.insertBefore(e, i[t]) : n.appendChild(e) } } }, function(n, t) { n.exports = function(n) { var t = "undefined" != typeof window && window.location; if (!t) throw new Error("fixUrls requires window.location"); if (!n || "string" != typeof n) return n; var r = t.protocol + "//" + t.host,
            s = r + t.pathname.replace(/\/[^\/]*$/, "/"); return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(n, t) { var a, e = t.trim().replace(/^"(.*)"$/, function(n, t) { return t }).replace(/^'(.*)'$/, function(n, t) { return t }); return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(e) ? n : (a = 0 === e.indexOf("//") ? e : 0 === e.indexOf("/") ? r + e : s + e.replace(/^\.\//, ""), "url(" + JSON.stringify(a) + ")") }) } }, function(n, t, r) { "use strict";
    r.r(t); var s = r(0),
        a = r.n(s),
        e = r(1),
        i = r.n(e); var u, c, o, f, h = { baseUrl: "https://data.reactandshare.com" };

    function l(n) { var t = n,
            r = new Image;
        t += "&rd=" + Date.now(), r.src = t }

    function p(n) { return Object.keys(n).map(function(t) { if (n[t]) { var r = ["c", "ta"].includes(t) ? n[t] : encodeURIComponent(n[t]); return "&".concat(t, "=").concat(r) } return "" }).join("") } var m = { reacted: !1, getReactions: function(n) { var t = f; return n && "string" == typeof n && (t += "&cu=" + encodeURIComponent(n)), a.a.jsonp({ url: t }) }, getSettings: function(n, t) { var r = c,
                    s = i.a.get("rnsbid"); if (t && (r += "&settings=true"), n && "string" == typeof n) r += "&cu=" + encodeURIComponent(n);
                else if (n && Array.isArray(n)) { var e = n.join(",");
                    r += "&cus=" + encodeURIComponent(e) } return s && (r += "&bid=" + s), a.a.jsonp({ url: r }).then(function(n) { var t; if (m.set = { name: n.settings.name, reactions: n.settings.reactionSet, shares: n.settings.shares, customCTAs: n.settings.customCTAs, inputs: n.settings.inputs }, m.settings = { texts: n.settings.texts, classes: n.settings.classes, features: n.settings.features, css: n.settings.css, showTotalCount: n.settings.showTotalCount, showTotalCountHeader: n.settings.showTotalCountHeader, showPercentages: n.settings.showPercentages, hideReactionCount: n.settings.hideReactionCount, hideZeroReactions: n.settings.hideZeroReactions, showShareCount: n.settings.showShareCount, showCustomCTAs: n.settings.showCustomCTAs, showUserInputs: n.settings.showUserInputs, customPostReactions: n.settings.customPostReactions, defaultPostReaction: n.settings.defaultPostReaction, recommender: n.settings.recommender }, m.settings.texts.preCount = n.settings.texts.preCount || "", m.settings.texts.postCount = n.settings.texts.postCount || "", m.settings.texts.emptyCount = n.settings.texts.emptyCount || "", m.hideReactions = n.settings.reactionSet.hide || !1, m.preview = n.settings.preview, m.styles = (t = n.settings.colors, "\n    .rns-plugin .rns-reaction-button {\n      background-color: ".concat(t.button, ";\n    }\n    .rns-plugin .rns-reaction-button .rns-label, .rns-plugin .rns-reaction-button .rns-icon {\n    \tcolor: ").concat(t.label, ";\n    }\n    .rns-plugin .rns-reaction-button:hover {\n      background-color: ").concat(t.highlight, ";\n    }\n    .rns-plugin .rns-reaction-button:hover .rns-label, .rns-plugin .rns-reaction-button:hover .rns-icon {\n    \tcolor: ").concat(t.highlightLabel, ";\n    }\n\n\n    .rns-plugin .rns-reaction.selected .rns-reaction-button {\n    \tbackground-color: ").concat(t.selected, ";\n    }\n    .rns-plugin .rns-reaction.selected .rns-reaction-button .rns-label, .rns-plugin .rns-reaction.selected .rns-reaction-button .rns-icon {\n    \tcolor: ").concat(t.selectedLabel, ";\n    }\n\n    .rns-plugin .plus-one {\n    \tbackground-color: ").concat(t.button, ";\n    \tcolor: ").concat(t.label, ";\n    }\n\n\n    .rns-plugin.rns-style-sneakyflat .rns-reaction.selected .rns-reaction-button {\n    \tbackground-color: ").concat(t.selected, "\n    }\n    .rns-plugin.rns-style-sneakyflat .rns-reaction-button:hover .rns-label, .rns-plugin.rns-style-sneakyflat  .rns-reaction-button:hover .rns-icon {\n    \tcolor: ").concat(t.label, ";\n    }\n    .rns-plugin.rns-style-sneakyflat .rns-reaction.selected .rns-reaction-button .rns-label, .rns-plugin.rns-style-sneakyflat .rns-reaction.selected .rns-reaction-button .rns-icon {\n    \tcolor: ").concat(t.highlightLabel, ";\n    }\n\n\n    .rns-plugin .rns-count-side .rns-reaction-button .rns-reaction-count {\n        color: ").concat(t.label, ";       \n    }\n    .rns-plugin .rns-count-side .rns-reaction-button:hover .rns-reaction-count {\n        color: ").concat(t.highlightLabel, ";\n    }\n    .rns-plugin .rns-count-side .rns-reaction.selected .rns-reaction-button .rns-reaction-count {\n        color: ").concat(t.selectedLabel, ";\n    }\n    .rns-plugin.rns-style-sneakyflat .rns-count-side .rns-reaction-button:hover .rns-reaction-count {\n        color: ").concat(t.label, ";\n    }\n\n    .rns-plugin.rns-style-sneakyflat .rns-count-side .rns-reaction.selected .rns-reaction-button .rns-reaction-count {\n        color: ").concat(t.highlightLabel, ";\n    }\n\n  ")), m.parseDate = n.settings.parseDate, m.parseAuthor = n.settings.parseAuthor, m.parseTitle = n.settings.parseTitle, n.settings.gtm && n.settings.gtm.enabled) { var r = "dataLayer";
                        n.settings.gtm.objectName && (r = n.settings.gtm.objectName), m.gtm = r } if (n.settings.ga && n.settings.ga.enabled) { var s = "send";
                        n.settings.ga.functionName && (s = n.settings.ga.functionName), m.gaSend = s } return n.browserId && (m.browserId = n.browserId, i.a.set("rnsbid", m.browserId, { expires: 31 })), n }).catch(function() { return console.log("Error: apiKey and domain do not match, check your settings at https://dashboard.reactandshare.com/user") }) }, setViewer: function(n) { var t = p({ a: "pageload", t: n.title, co: n.commentNumber, au: n.author, c: n.categories, ta: n.tags, pc: n.premiumContent, pd: n.date, i: n.image, cu: n.canonicalUrl, bid: m.browserId });
                l(o + t) }, setReaction: function(n) { var t = p({ a: "reaction", re: n.reaction, u: n.unreact.toString(), cu: n.canonicalUrl, pu: n.premiumUser, bid: m.browserId });
                l(o + t) }, setShare: function(n) { var t = p({ a: "share", re: n.reactions, sh: n.media, e: !0, cu: n.canonicalUrl, bid: m.browserId });
                l(o + t) }, setCustomCTA: function(n) { var t = p({ a: "custom", na: n.name, re: n.reaction, cu: n.canonicalUrl, bid: m.browserId });
                l(o + t) }, setUserInput: function(n) { var t = p({ a: "userinput", ui: JSON.stringify(n.fields), re: n.reaction, cu: n.canonicalUrl, bid: m.browserId });
                l(o + t) }, setReadingTime: function(n, t, r) { var s = p({ a: "time", rt: n, tr: r, cu: t, bid: m.browserId });
                l(o + s) }, init: function(n) { var t = n.apiKey;
                n.ga && ("boolean" == typeof n.ga && (m.gaSend = "send"), "string" == typeof n.ga && (m.gaSend = n.ga)), "function" == typeof n.reactionCallback && (m.reactionCallback = n.reactionCallback), "function" == typeof n.shareCallback && (m.shareCallback = n.shareCallback), "function" == typeof n.initCallback && (m.initCallback = n.initCallback), "function" == typeof n.timeCallback && (m.timeCallback = n.timeCallback), "boolean" == typeof n.premiumUser && (m.premiumUser = n.premiumUser), "boolean" == typeof n.premiumContent && (m.premiumContent = n.premiumContent), "string" == typeof n.userCategory && (m.userCategory = n.userCategory), u = encodeURIComponent(document.referrer), c = h.baseUrl + "/api/plugin/" + t + "/?pd=" + Date.now(), f = h.baseUrl + "/api/plugin/" + t + "/reactions/?pd=" + Date.now(), o = h.baseUrl + "/track.gif?id=" + t + "&r=" + u } },
        g = m;

    function w(n, t) { for (var r = 0; r < t.length; r++) { var s = t[r];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(n, s.key, s) } } var b = ["click", "mousemove", "mouseenter", "keydown", "scroll", "mousewheel", "touchstart", "touchmove"],
        y = ["visibilitychange", "webkitvisibilitychange", "msvisibilitychange"],
        C = new(function() {
            function n() {! function(n, t) { if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, n); var t = Date.now();
                this.startingTime = t, this.lastActive = t, this.active = !0, this.new = !0 } var t, r, s; return t = n, (r = [{ key: "init", value: function(n) { var t = this;
                    this.new = !0, this.canonicalUrl = n, void 0 !== window.InstallTrigger ? (document.addEventListener("beforeunload", this.setReadingTime.bind(this, "hidden")), document.addEventListener("unload", this.setReadingTime.bind(this, "hidden"))) : (window.addEventListener("beforeunload", this.setReadingTime.bind(this, "hidden")), window.addEventListener("unload", this.setReadingTime.bind(this, "hidden"))), b.forEach(function(n) { document.addEventListener(n, t.setActive.bind(t)) }), y.forEach(function(n) { document.addEventListener(n, t.checkVisibility.bind(t)) }) } }, { key: "checkVisibility", value: function() { document.hidden || document.msHidden || document.webkitHidden ? this.setReadingTime("hidden") : (this.resetReadingTime(), this.setActive()) } }, { key: "setActive", value: function() { this.active = !0; var n = Date.now();
                    n - this.lastActive > 3e4 ? this.resetReadingTime() : this.lastActive = n, this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(this.setReadingTime.bind(this, "timeout"), 3e4) } }, { key: "setReadingTime", value: function(n) { if (this.active) { this.active = !1, this.timeout && clearTimeout(this.timeout); var t = this.lastActive - this.startingTime,
                            r = (this.new ? "n" : "o") + ("hidden" === n ? "h" : "t");
                        t && (g.setReadingTime(t, this.canonicalUrl, r), "function" == typeof g.timeCallback && g.timeCallback(t, this.canonicalUrl)) } } }, { key: "resetReadingTime", value: function() { var n = Date.now();
                    this.startingTime = n, this.lastActive = n, this.new = !1 } }]) && w(t.prototype, r), s && w(t, s), n }());

    function x(n) { var t = document.createElement("link");
        t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.setAttribute("href", n), document.getElementsByTagName("head")[0].appendChild(t) } var T = function() { x("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css") },
        A = function() { x("https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:400,500") },
        U = function() { x("https://fonts.googleapis.com/css?family=Open+Sans:400,500,600") },
        D = r(4),
        _ = r.n(D);

    function I(n, t) { var r = t;
        t || (r = window.location); var s = _()(r); return "rns_reaction_".concat(n, "_").concat(s) } var O = { set: function(n, t) { var r = I(n, t);
            localStorage.setItem(r, "true"), localStorage.setItem(r + "_ts", Date.now()) }, remove: function(n, t) { var r = I(n, t);
            i.a.remove(r), localStorage.removeItem(r), localStorage.removeItem(r + "_ts") }, exists: function(n, t) { var r = I(n, t); return localStorage.getItem(r) || i.a.get(r) } };

    function j(n, t, r, s) { "function" == typeof window.ga && ga(n, { hitType: "event", eventCategory: "reactandshare", eventAction: "".concat(t, ":  ").concat(r), eventLabel: "".concat(r, " - ").concat(s) }) }

    function R(n) { return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) { return typeof n } : function(n) { return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n })(n) }

    function z(n, t, r, s) { "object" === R(window[n]) && window[n].push({ event: "RNSEvent", eventCategory: "reactandshare", eventAction: "".concat(t, ":  ").concat(r), eventLabel: "".concat(r, " - ").concat(s), eventValue: void 0 }) } var M = { react: function(n) { var t = n.reaction,
                    r = n.pageData.canonicalUrl,
                    s = r || window.location.href;
                n.pageData.reacted = !0, t.reacted ? (t.reacted = !1, t.count -= 1, n.pageData.totalCount -= 1, O.remove(t.name, r)) : (t.reacted = !0, t.count += 1, n.pageData.totalCount += 1, O.set(t.name, r), n.pageData.newlyReacted = !0, n.pageData.firstReacted || (n.pageData.firstReacted = t.name)), g.setReaction({ reaction: t.name, unreact: !t.reacted, premiumUser: g.premiumUser, canonicalUrl: r }); var a = t.reacted ? "reaction" : "unreaction";
                g.gaSend && j(g.gaSend, a, t.label, s), g.gtm && z(g.gtm, a, t.label, s), g.reactionCallback && g.reactionCallback(a, t.label, s) } },
        q = function(n) { switch (n.which) {
                case 13:
                case 32:
                    return n.stopPropagation(), n.preventDefault(), !0;
                default:
                    return !1 } },
        P = { view: function(n) { var t = n.attrs.reaction,
                    r = n.attrs.pageData,
                    s = { reaction: t, pageData: r },
                    e = M.react.bind(this, s); return a()("div", { class: "rns-reaction " + (t.reacted ? "selected" : "") }, a()("div", { class: "rns-reaction-button", tabindex: "0", role: "button", "aria-pressed": t.reacted, onclick: M.react.bind(this, s), onkeypress: function(n) { q(n) && e() } }, "rns-reaction-icons-hide" !== g.settings.classes.icon && a()("div", { class: "rns-icon" }, !t.class && !t.image && a()("img", { src: "https://cdn.reactandshare.com/icons/" + t.name + ".svg", "aria-hidden": "true" }), !t.class && t.image && a()("img", { src: "https://cdn.reactandshare.com/icons/" + t.image, "aria-hidden": "true" }), t.class && a()("i", { class: "fa " + t.class })), a()("div", { class: "rns-label" }, t.label), !g.settings.showPercentages && !(g.settings.hideZeroReactions && 0 === t.count) && a()("div", { class: "rns-reaction-count " + (g.settings.showTotalCount && !r.reacted ? "rns-reaction-count-hidden" : ""), "aria-hidden": "true" }, t.count), g.settings.showPercentages && !(g.settings.hideZeroReactions && 0 === t.count) && a()("div", { class: "rns-reaction-count " + (g.settings.showTotalCount && !r.reacted ? "rns-reaction-count-hidden" : ""), "aria-hidden": "true" }, s.pageData.totalCount > 0 ? Math.round(t.count / s.pageData.totalCount * 100) + " %" : "0 %"), a()("div", { class: "plus-one", "aria-hidden": "true" }, "+1"))) } };

    function B(n) { return n.canonicalUrl ? n.canonicalUrl : window.location.href.replace(/[&|?]ref=[^&?]*/g, "") }

    function L(n, t) { var r = n; return g.set.shares.disableRefs ? r : (-1 === n.indexOf("?") ? r += "?ref=" + t : r += "&ref=" + t, r) }

    function k(n, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 450,
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 550,
            a = window.innerHeight / 2 - r / 2,
            e = window.innerWidth / 2 - s / 2,
            i = "height=".concat(r, ", width=").concat(s, ", top=").concat(a, ", left=").concat(e, ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");
        window.open(n, t, i) } var H = { facebook: function(n) { k("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(L(B(n), "rns_fb")), "fbShareWindow") }, twitter: function(n) { k("https://twitter.com/intent/tweet?url=" + encodeURIComponent(L(B(n), "rns_tw")), "twitterShareWindow") }, linkedin: function(n) { k("https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(L(B(n), "rns_li")), "linkedinShareWindow") }, whatsapp: function(n) { if (s = !1, r = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0, 4))) && (s = !0), s) { var t = "whatsapp://send?text=" + encodeURIComponent(L(B(n), "rns_wa")); return window.location.href = t, !1 } var r, s;
                k("https://web.whatsapp.com/send?text=" + encodeURIComponent(L(B(n), "rns_wa")), "whatsappShareWindow") }, pinterest: function(n) { var t = document.querySelectorAll("meta[property='og:image']")[0] ? document.querySelectorAll("meta[property='og:image']")[0].content : "";
                n.img && (t = n.img), k("https://pinterest.com/pin/create/button/" + ("?url=" + encodeURIComponent(L(B(n), "rns_pi"))) + ("&media=" + encodeURIComponent(t)) + ("&description=" + encodeURIComponent(n.title)), "pinterestShareWindow", 750, 642) }, google: function(n) { k("https://plus.google.com/share?url=" + encodeURIComponent(L(B(n), "rns_gp")), "googleShareWindow") }, email: function(n) { var t = "mailto:?subject=" + encodeURIComponent(n.title); return t += "&body=" + encodeURIComponent(n.title), t += "%0A", t += encodeURIComponent(L(B(n), "rns_em")), window.location.href = t, !1 }, telegram: function(n) { var t = "https://telegram.me/share/url?url=" + encodeURIComponent(L(B(n), "rns_te"));
                k(t += "&text=" + encodeURIComponent(n.title), "telegramShareWindow") }, fbmessenger: function(n) { var t = "fb-messenger://share?link=" + encodeURIComponent(L(B(n), "rns_fbm")); return t += "&text=" + encodeURIComponent(n.title), window.location.href = t, !1 }, print: function() { return window.print(), !1 }, link: function(n) { var t = document.createElement("input"); return document.body.appendChild(t), t.value = L(B(n), "rns_cp"), t.select(), document.execCommand("copy"), document.body.removeChild(t), !1 } },
        J = { share: function(n) { var t = this,
                    r = n.media,
                    s = n.pageData.canonicalUrl || window.location.href,
                    e = [];
                n.reactions.forEach(function(n) { n.reacted && e.push(n.name) }), g.setShare({ reactions: e.join(), media: r.name, canonicalUrl: n.pageData.canonicalUrl }), r.count += 1, H[r.name](n.pageData), "link" === r.name && (this.copied = !0, setTimeout(function() { t.copied = !1, a.a.redraw() }, 1e3)), g.gaSend && j(g.gaSend, "share", r.name, s), g.gtm && z(g.gtm, "share", r.name, s), g.shareCallback && g.shareCallback(r.name, s) } },
        W = { oninit: function(n) { n.state.copied = !1 }, controller: function() {}, view: function(n) { var t = n.attrs.share,
                    r = { media: t, pageData: n.attrs.pageData, reactions: n.attrs.reactions }; return a()("div", { class: "rns-share rns-share-" + t.name + (n.state.copied ? " rns-share-link-copied" : "") }, a()("div", { class: "rns-share-button", onclick: J.share.bind(this, r) }, a()("div", { class: "rns-icon" }, a()("i", { class: "fa fa-" + (t.class || t.name) })), a()("div", { class: "rns-label" }, t.label), g.settings.showShareCount && t.count > 0 && a()("div", { class: "rns-share-count" }, t.count))) } },
        $ = { custom: function(n, t) { var r = n.customCTA,
                    s = n.pageData,
                    a = s.canonicalUrl,
                    e = s.firstReacted;
                t && t.target && "a" === t.target.tagName.toLowerCase() && g.setCustomCTA({ name: r.name, canonicalUrl: a, reaction: e }) } },
        K = { controller: function() {}, view: function(n) { var t = n.attrs.customCTA,
                    r = { customCTA: t, pageData: n.attrs.pageData },
                    s = $.custom.bind(this, r); return a()("div", { class: "rns-custom-cta rns-custom-cta-" + t.name }, a()("div", { class: "rns-custom-cta-button", onclick: function(n) { s(n) }, onkeypress: function(n) { q(n) && s(n) } }, a()("div", [a.a.trust(t.html)]))) } },
        Z = { input: function(n) { var t = n.inputs,
                    r = n.pageData,
                    s = r.canonicalUrl,
                    a = r.firstReacted,
                    e = {};
                t.map(function(n) { var t = n.name,
                        r = n.value;
                    e[t] = r }), g.setUserInput({ fields: e, canonicalUrl: s, reaction: a }), r.inputSent = !0 } },
        Q = { oninit: function(n) { n.state.emptyInput = !1 }, view: function(n) { var t = n.attrs,
                    r = t.inputs,
                    s = t.pageData,
                    e = { inputs: r, pageData: s },
                    i = Z.input.bind(this, e);

                function u() { var n = r.filter(function(n) { return !1 == !!n.value }); return !(!n || 0 !== n.length) } return a()("form", null, g.settings.texts.userInputHeader && !s.inputSent && a()("div", { class: "rns-header rns-input-header", role: "heading" }, g.settings.texts.userInputHeader), r && r.map(function(t) { return s.inputSent && (t.sent || g.settings.texts.userInputSent) ? a()("span", { class: "rns-input-sent" }, t.sent || a.a.trust(g.settings.texts.userInputSent)) : a()("div", { class: "rns-input rns-input-" + t.name }, t.header && a()("div", { class: "rns-header rns-input-header", role: "heading" }, t.header), a()("label", { for: t.name, class: "rns-input-label" }, t.label), a()("textarea", { id: t.name, class: "rns-input-field", "aria-label": t.label, name: t.name, value: t.value, placeholder: t.placeholder, onchange: function(n) { n.preventDefault(), t.value = n.currentTarget.value } }), t.empty && n.state.emptyInput && a()("span", { class: "rns-input-empty-fields" }, t.empty), t.submit && a()("div", { tabindex: "0", role: "button", class: "rns-form-submit", onclick: function(t) { t.preventDefault(), u() ? i() : n.state.emptyInput = !0 }, onkeypress: function(t) { q(t) && (u() ? i() : n.state.emptyInput = !0) } }, t.submit)) }), !s.inputSent && g.settings.texts.userInputEmpty && n.state.emptyInput && a()("span", { class: "rns-input-empty-fields" }, g.settings.texts.userInputEmpty), !s.inputSent && g.settings.texts.userInputSubmit && a()("div", { tabindex: "0", role: "button", class: "rns-form-submit", onclick: function(t) { t.preventDefault(), u() ? i() : n.state.emptyInput = !0 }, onkeypress: function(t) { q(t) && (u() ? i() : n.state.emptyInput = !0) } }, g.settings.texts.userInputSubmit)) } },
        G = { controller: function() {}, view: function(n) { var t, r, s, e = n.attrs.pageData,
                    i = e.shares,
                    u = e.reactions,
                    c = e.firstReacted,
                    o = g.settings.defaultPostReaction,
                    f = u.find(function(n) { return n.name === c }).post || {}; switch (g.userCategory && f && f[g.userCategory] ? (t = f[g.userCategory].type, r = f[g.userCategory].name) : (t = f.type, r = f.name), t && r ? s = e[t].find(function(n) { return n.name === r }) : o && (t = o.type, r = o.name, s = e[t].find(function(n) { return n.name === r })), t) {
                    case "shares":
                        return a()("div", { class: "rns-shares rns-highlight", "aria-hidden": "true" }, a()("div", { class: "rns-header" }, g.set.shares.header || g.settings.texts.share), a()("div", { class: "rns-shares-list" }, i.map(function(n) { return a()(W, { share: n, reactions: u, pageData: e }) })));
                    case "customCTAs":
                        return a()("div", { class: "rns-custom-ctas rns-highlight" }, a()(K, { customCTA: s, pageData: e }));
                    case "inputs":
                        return a()("div", { class: "rns-inputs rns-highlight" }, a()(Q, { inputs: [s], pageData: e })) } } },
        X = (r(10), function(n) { var t = n.reactions,
                r = n.shares,
                s = n.customCTAs,
                e = n.inputs;
            n.canonicalUrl; return { view: function() { return a()("div", { class: "rns-plugin " + g.settings.classes.button }, a()("style", null, g.styles, g.settings.css), !g.hideReactions && a()("div", { class: "rns-reactions " + g.settings.classes.count + " " + g.settings.classes.icon + " " + g.settings.classes.label + " rns-" + t.length }, a()("div", { class: "rns-header", role: "heading" }, a()("span", { class: "rns-header-text" }, g.set.reactions.header || g.settings.texts.header, " "), (g.settings.showTotalCountHeader || g.settings.showTotalCount) && !(n.totalCount <= 0 && (g.set.reactions.emptyCount || g.settings.texts.emptyCount)) && a()("span", { class: "rns-sub-header" }, g.set.reactions.preCount || g.settings.texts.preCount, n.totalCount, " ", g.set.reactions.postCount || g.settings.texts.postCount), (g.settings.showTotalCountHeader || g.settings.showTotalCount) && (g.set.reactions.emptyCount || g.settings.texts.emptyCount) && n.totalCount < 1 && a()("span", { class: "rns-sub-header" }, g.set.reactions.emptyCount || g.settings.texts.emptyCount)), a()("div", { class: "reactions" }, t.map(function(t) { return a()(P, { reaction: t, pageData: n }) }))), g.settings.features && !g.settings.features.logo && a()("div", { class: "rns-footer" }, a()("a", { class: "rns-footer-link", href: "https://reactandshare.com", target: "_blank", rel: "nofollow" }, a()("img", { src: "https://cdn.reactandshare.com/rns/logo.svg" }))), g.set.shares.float && a()("div", { class: "rns-shares rns-shares-float rns-shares-float-" + g.set.shares.float + " rns-highlight rns-shares-" + g.set.shares.media.length, "aria-hidden": "true" }, a()("div", { class: "rns-header" }, g.set.shares.header || g.settings.texts.share), a()("div", { class: "rns-shares-list" }, r.map(function(r) { return a()(W, { share: r, reactions: t, pageData: n }) }))), "never" !== g.set.shares.show && !(g.settings.showCustomCTAs && !1 === g.premiumUser) && a()("div", { class: "rns-shares " + ("always" === g.set.shares.show || "after" === g.set.shares.show && n.reacted ? "rns-highlight" : ""), "aria-hidden": "true" }, a()("div", { class: "rns-header" }, g.set.shares.header || g.settings.texts.share), a()("div", { class: "rns-shares-list" }, r.map(function(r) { return a()(W, { share: r, reactions: t, pageData: n }) }))), g.settings.showCustomCTAs && !1 === g.premiumUser && a()("div", { class: "rns-custom-ctas " + (n.reacted ? "rns-highlight" : "") }, s && s.map(function(t) { return a()(K, { customCTA: t, pageData: n }) })), g.settings.showUserInputs && n.newlyReacted && a()("div", { class: "rns-inputs " + (n.newlyReacted ? "rns-highlight" : "") }, e && a()(Q, { inputs: e, pageData: n })), g.settings.customPostReactions && n.newlyReacted && a()(G, { pageData: n })) } } }),
        Y = function(n) { var t = n.reactions,
                r = n.shares;
            n.canonicalUrl; return { view: function() { return a()("div", { class: "rns-plugin " + g.settings.classes.button }, a()("div", { class: "rns-shares rns-highlight" }, a()("div", { class: "rns-shares-list" }, r.map(function(r) { return a()(W, { share: r, reactions: t, pageData: n }) })))) } } },
        v = function(n) { var t = document.querySelector("meta[property='".concat(n, "']")); return t ? t.content : null },
        E = function(n, t) { if (n.date) { var r = n.date; if ("2nrvjwr0qvgn75u5" === n.apiKey) { var s = document.querySelector(".date-display-single"),
                        a = document.querySelector(".created"); if (a) try { var e = a.innerHTML.slice(2).split("."),
                            i = e[0],
                            u = parseInt(e[1]) - 1,
                            c = e[2].split(" ")[0],
                            o = e[2].split("klo ")[1].split(":"),
                            f = o[0],
                            h = o[1]; return new Date(c, u, i, f, h).getTime() } catch (n) {} else s && (r = s.getAttribute("content")) } return "string" == typeof r ? new Date(r).getTime() : r } var l = n.dateElement || (t ? t.parseDate : null); if (l) { var p = document.querySelector(l); if (p && p.hasAttribute("datetime")) try { return new Date(p.getAttribute("datetime")).getTime() } catch (n) {}
                if (p && p.innerHTML) try { var m = p.innerHTML.match(/(\d{1,2})\.(\d{1,2})\.(\d{4})(\s+(\d{1,2})[:.](\d{2}))*/),
                        g = m[4] ? [m[3], m[2] - 1, m[1], m[5], m[6]] : [m[3], m[2] - 1, m[1]],
                        w = new Date(Date.UTC.apply(void 0, g)); return w.setHours(w.getHours() - 2), w.getTime() } catch (n) {} } var b, y, C, x = v("article:published_time"),
                T = v("og:article:published_time"),
                A = (b = "datePublished", (y = document.querySelector("meta[property='".concat(b, "']"))) ? y.content : (y = document.querySelector("[itemprop='".concat(b, "']"))) && y.hasAttribute("content") ? y.getAttribute("content") : null); try { if (x && (C = new Date(x).getTime(), !Number.isNaN(C))) return C } catch (n) { C = "" } try { if (T && (C = new Date(T).getTime(), !Number.isNaN(C))) return C } catch (n) { C = "" } try { if (A && (C = new Date(A).getTime(), !Number.isNaN(C))) return C } catch (n) { C = "" } return C },
        F = function(n, t) { if (n.title) return n.title; var r = n.titleElement || (t ? t.parseTitle : null); if (r) try { var s = document.querySelector(r); if (s && s.innerText) return s.innerText } catch (n) {}
            return v("og:title") || document.title || "" },
        V = function(n, t) { if (n.author) return n.author; var r = n.authorElement || (t ? t.parseAuthor : null); if (r) try { var s = document.querySelector(r); if (s && s.innerText) return s.innerText } catch (n) {}
            return "" };

    function N() { var n = v("og:image"); return n || v("og:image:url") } var S, d, nn, tn, rn = function(n) { var t = n.canonicalUrl,
                r = void 0 === t ? "" : t; if (r) return r; var s = document.querySelector("link[rel=canonical]"),
                a = "".concat(window.location.protocol, "//").concat(window.location.host).concat(window.location.pathname); return s ? s.href : a },
        sn = function(n, t) { return { canonicalUrl: rn(n), title: F(n, t), author: V(n, t), tags: n.tags && n.tags.length > 0 ? n.tags.join(",") : "", categories: n.categories && n.categories.length > 0 ? n.categories.join(",") : "", commentNumber: n.commentNumber || 0, image: N(), date: E(n, t) } },
        an = function(n) { var t = n.getAttribute("data-tags").split(",").map(encodeURIComponent).join(","),
                r = n.getAttribute("data-categories").split(",").map(encodeURIComponent).join(","); return { canonicalUrl: n.getAttribute("data-url"), title: n.getAttribute("data-title"), author: n.getAttribute("data-author"), commentNumber: n.getAttribute("data-comments"), date: n.getAttribute("data-date"), image: N(), tags: t, categories: r } };
    r(11);

    function en(n) { return (en = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) { return typeof n } : function(n) { return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n })(n) }

    function un(n) { return function(n) { if (Array.isArray(n)) { for (var t = 0, r = new Array(n.length); t < n.length; t++) r[t] = n[t]; return r } }(n) || function(n) { if (Symbol.iterator in Object(n) || "[object Arguments]" === Object.prototype.toString.call(n)) return Array.from(n) }(n) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

    function cn(n, t) { if (!g.preview || g.preview && /.*[?&]{1}rns_preview=true.*/g.test(window.location.search)) { var r = new X(t); try { a.a.mount(n, r), g.initCallback && g.initCallback(n, t.canonicalUrl) } catch (n) { console.log(n) } } }

    function on() { for (var n = [], t = 0; t < localStorage.length; t++) { var r = localStorage.key(t);
            r.match(/rns_reaction_.*_ts/) && n.push(r) } n.forEach(function(n) { Date.now() - Number(localStorage.getItem(n)) > 26784e5 && (localStorage.removeItem(n), localStorage.removeItem(n.slice(0, -3))) }) }

    function fn(n) { var t = {}; try { t = JSON.parse(localStorage.getItem("rns_history")) || {} } catch (n) {} t[n.replace("https://", "http://")] = Date.now(), localStorage.setItem("rns_history", JSON.stringify(t)) }

    function hn(n, t, r) { var s = n.slice().map(function(n) { return Object.assign({}, n) }); return r.totalCount = 0, s.forEach(function(n) { O.exists(n.name, r.canonicalUrl) && (n.reacted = !0, r.reacted = !0), n.count = t[n.name], r.totalCount += n.count }), s }

    function ln(n, t) { var r = n.slice().map(function(n) { return Object.assign({}, n) }); return g.settings.showShareCount && t && r.forEach(function(n) { n.count = t[n.name] }), r }

    function pn() { var n = rn(window.rnsData);
        g.getSettings(n).then(function(n) { var t, r = sn(window.rnsData, g),
                s = n.settings.reactionSet.reactions,
                e = g.set.shares.media,
                i = n.reactions,
                u = n.shareCount;
            on(), r.reactions = hn(s, i, r), r.shares = ln(e, u), r.customCTAs = g.set.customCTAs, r.inputs = g.set.inputs, r.premiumContent = g.premiumContent, window.rnsElements = window.rnsElements || []; var c = document.querySelectorAll(".rns");
            c.forEach(function(n) { return cn(n, r) }); var o = document.querySelectorAll(".rns-share-plugin");
            o.forEach(function(n) { return function(n, t) { if (!g.preview || g.preview && /.*[?&]{1}rns_preview=true.*/g.test(window.location.search)) { var r = new Y(t); try { a.a.mount(n, r) } catch (n) { console.log(n) } } }(n, r) }), (t = window.rnsElements).push.apply(t, un(c).concat(un(o))), C.init(r.canonicalUrl), g.setViewer(r), g.settings.recommender && fn(r.canonicalUrl) }).catch(function(n) { return console.log("Error: Plugin initialization failed: " + n) }) } Array.prototype.find || Object.defineProperty(Array.prototype, "find", { value: function(n) { if (null == this) throw new TypeError('"this" is null or not defined'); var t = Object(this),
                r = t.length >>> 0; if ("function" != typeof n) throw new TypeError("predicate must be a function"); for (var s = arguments[1], a = 0; a < r;) { var e = t[a]; if (n.call(s, e, a, t)) return e;
                a++ } }, configurable: !0, writable: !0 }), "function" != typeof Object.assign && (Object.assign = function(n, t) { if (null == n) throw new TypeError("Cannot convert undefined or null to object"); for (var r = Object(n), s = 1; s < arguments.length; s++) { var a = arguments[s]; if (null != a)
                for (var e in a) Object.prototype.hasOwnProperty.call(a, e) && (r[e] = a[e]) } return r }), "function" != typeof Object.keys && (Object.keys = function(n) { var t = []; for (var r in n) n.hasOwnProperty(r) && t.push(r); return t }), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(n, t) { t = t || window; for (var r = 0; r < this.length; r++) n.call(t, this[r], r, this) }), Number.isNaN = Number.isNaN || function(n) { return n != n }, Array.from || (Array.from = (S = Object.prototype.toString, d = function(n) { return "function" == typeof n || "[object Function]" === S.call(n) }, nn = Math.pow(2, 53) - 1, tn = function(n) { var t = function(n) { var t = Number(n); return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t }(n); return Math.min(Math.max(t, 0), nn) }, function(n) { var t = Object(n); if (null == n) throw new TypeError("Array.from requires an array-like object - not null or undefined"); var r, s = arguments.length > 1 ? arguments[1] : void 0; if (void 0 !== s) { if (!d(s)) throw new TypeError("Array.from: when provided, the second argument must be a function");
            arguments.length > 2 && (r = arguments[2]) } for (var a, e = tn(t.length), i = d(this) ? Object(new this(e)) : new Array(e), u = 0; u < e;) a = t[u], i[u] = s ? void 0 === r ? s(a, u) : s.call(r, a, u) : a, u += 1; return i.length = e, i })), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", { value: function(n, t) { if (null == this) throw new TypeError('"this" is null or not defined'); var r = Object(this),
                s = r.length >>> 0; if (0 === s) return !1; for (var a, e, i = 0 | t, u = Math.max(i >= 0 ? i : s - Math.abs(i), 0); u < s;) { if ((a = r[u]) === (e = n) || "number" == typeof a && "number" == typeof e && isNaN(a) && isNaN(e)) return !0;
                u++ } return !1 } }), window.initRns = function() { var n, t;
        g.init(window.rnsData), window.rnsData.disableFa || T(), window.rnsData.disableFonts || (U(), A()), n = document.querySelectorAll(".rns"), t = [], n.forEach(function(n) { t.push(encodeURIComponent(n.getAttribute("data-url"))) }), g.getSettings(t).then(function(t) { n.forEach(function(r) { var s, a = an(r),
                    e = t.settings.reactionSet.reactions,
                    i = a.canonicalUrl.replace("https", "http"),
                    u = t.reactions[i];
                g.settings.showShareCount && (s = t.shareCount[i]); var c = g.set.shares.media;
                on(), a.reactions = hn(e, u, a), a.shares = ln(c, s), a.customCTAs = g.set.customCTAs, a.inputs = g.set.inputs, a.premiumContent = g.premiumContent, cn(r, a), 1 === n.length && (C.init(a.canonicalUrl), g.setViewer(a), g.settings.recommender && fn(a.canonicalUrl)) }) }).catch(function(n) { return console.log("Error: Plugin initialization failed" + n) }) }, window.loadRns = function(n, t) { g.init(window.rnsData), window.rnsData.disableFa || T(), window.rnsData.disableFonts || (U(), A()); var r = rn(t);
        g.getSettings(r, !0).then(function(r) { var s = sn(t),
                a = r.settings.reactionSet.reactions;
            g.getReactions(s.canonicalUrl).then(function(t) { var r, e = t.reactions,
                    i = t.shareCount,
                    u = g.set.shares.media;
                on(), s.reactions = hn(a, e, s), s.shares = ln(u, i), s.customCTAs = g.set.customCTAs, s.inputs = g.set.inputs, s.premiumContent = g.premiumContent, "string" == typeof n ? r = document.querySelector(n) : "object" === en(n) && (r = n), cn(r, s), g.setViewer(s), g.settings.recommender && fn(s.canonicalUrl) }) }) }, window.resetRns = function() { window.rnsElements && Array.isArray(window.rnsElements) && (C.setReadingTime("hidden"), window.rnsElements.forEach(function(n) { return a.a.mount(n, null) }), window.rnsElements = [], C.resetReadingTime(), pn()) }, window.rnsData && window.rnsData.apiKey && !window.rnsData.multiple && (g.init(window.rnsData), window.rnsData.disableFa || T(), window.rnsData.disableFonts || (U(), A()), window.rnsData.multiple || window.rnsData.lazyLoad ? window.rnsData.lazyLoad && !window.rnsData.multiple && window.rnsQueue && window.rnsQueue.length > 0 && window.rnsQueue.forEach(function(n) { window.loadRns(n.selector, n.settings) }) : pn()) }]);