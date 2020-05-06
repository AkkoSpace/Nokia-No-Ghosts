! function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function (e) {
                return t[e]
            }.bind(null, o));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 8)
}([function (t, e, n) {
    t.exports = n(6)
}, function (t, e) {
    t.exports = function (t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
}, function (t, e) {
    t.exports = tingle
}, function (t, e) {
    t.exports = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
}, function (t, e) {
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    t.exports = function (t, e, r) {
        return e && n(t.prototype, e), r && n(t, r), t
    }
}, function (t, e, n) {
    ! function () {
        function e(t, e) {
            document.addEventListener ? t.addEventListener("scroll", e, !1) : t.attachEvent("scroll", e)
        }

        function n(t) {
            this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(t)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.f = document.createElement("span"), this.g = -1, this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c)
        }

        function r(t, e) {
            t.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + e + ";"
        }

        function o(t) {
            var e = t.a.offsetWidth,
                n = e + 100;
            return t.f.style.width = n + "px", t.c.scrollLeft = n, t.b.scrollLeft = t.b.scrollWidth + 100, t.g !== e && (t.g = e, !0)
        }

        function i(t, n) {
            function r() {
                var t = i;
                o(t) && t.a.parentNode && n(t.g)
            }
            var i = t;
            e(t.b, r), e(t.c, r), o(t)
        }

        function a(t, e) {
            var n = e || {};
            this.family = t, this.style = n.style || "normal", this.weight = n.weight || "normal", this.stretch = n.stretch || "normal"
        }
        var c = null,
            s = null,
            u = null,
            l = null;

        function h() {
            return null === l && (l = !!document.fonts), l
        }

        function d() {
            if (null === u) {
                var t = document.createElement("div");
                try {
                    t.style.font = "condensed 100px sans-serif"
                } catch (t) {}
                u = "" !== t.style.font
            }
            return u
        }

        function f(t, e) {
            return [t.style, t.weight, d() ? t.stretch : "", "100px", e].join(" ")
        }
        a.prototype.load = function (t, e) {
            var o = this,
                a = t || "BESbswy",
                u = 0,
                l = e || 3e3,
                d = (new Date).getTime();
            return new Promise((function (t, e) {
                if (h() && ! function () {
                        if (null === s)
                            if (h() && /Apple/.test(window.navigator.vendor)) {
                                var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                                s = !!t && 603 > parseInt(t[1], 10)
                            } else s = !1;
                        return s
                    }()) {
                    var p = new Promise((function (t, e) {
                            ! function n() {
                                (new Date).getTime() - d >= l ? e(Error(l + "ms timeout exceeded")) : document.fonts.load(f(o, '"' + o.family + '"'), a).then((function (e) {
                                    1 <= e.length ? t() : setTimeout(n, 25)
                                }), e)
                            }()
                        })),
                        g = new Promise((function (t, e) {
                            u = setTimeout((function () {
                                e(Error(l + "ms timeout exceeded"))
                            }), l)
                        }));
                    Promise.race([g, p]).then((function () {
                        clearTimeout(u), t(o)
                    }), e)
                } else ! function (t) {
                    document.body ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", (function e() {
                        document.removeEventListener("DOMContentLoaded", e), t()
                    })) : document.attachEvent("onreadystatechange", (function e() {
                        "interactive" != document.readyState && "complete" != document.readyState || (document.detachEvent("onreadystatechange", e), t())
                    }))
                }((function () {
                    function s() {
                        var e;
                        (e = -1 != m && -1 != y || -1 != m && -1 != v || -1 != y && -1 != v) && ((e = m != y && m != v && y != v) || (null === c && (e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), c = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))), e = c && (m == w && y == w && v == w || m == x && y == x && v == x || m == b && y == b && v == b)), e = !e), e && (E.parentNode && E.parentNode.removeChild(E), clearTimeout(u), t(o))
                    }
                    var h = new n(a),
                        p = new n(a),
                        g = new n(a),
                        m = -1,
                        y = -1,
                        v = -1,
                        w = -1,
                        x = -1,
                        b = -1,
                        E = document.createElement("div");
                    E.dir = "ltr", r(h, f(o, "sans-serif")), r(p, f(o, "serif")), r(g, f(o, "monospace")), E.appendChild(h.a), E.appendChild(p.a), E.appendChild(g.a), document.body.appendChild(E), w = h.a.offsetWidth, x = p.a.offsetWidth, b = g.a.offsetWidth,
                        function t() {
                            if ((new Date).getTime() - d >= l) E.parentNode && E.parentNode.removeChild(E), e(Error(l + "ms timeout exceeded"));
                            else {
                                var n = document.hidden;
                                !0 !== n && void 0 !== n || (m = h.a.offsetWidth, y = p.a.offsetWidth, v = g.a.offsetWidth, s()), u = setTimeout(t, 50)
                            }
                        }(), i(h, (function (t) {
                            m = t, s()
                        })), r(h, f(o, '"' + o.family + '",sans-serif')), i(p, (function (t) {
                            y = t, s()
                        })), r(p, f(o, '"' + o.family + '",serif')), i(g, (function (t) {
                            v = t, s()
                        })), r(g, f(o, '"' + o.family + '",monospace'))
                }))
            }))
        }, t.exports = a
    }()
}, function (t, e, n) {
    var r = function (t) {
        "use strict";
        var e, n = Object.prototype,
            r = n.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";

        function s(t, e, n, r) {
            var o = e && e.prototype instanceof g ? e : g,
                i = Object.create(o.prototype),
                a = new T(r || []);
            return i._invoke = function (t, e, n) {
                var r = l;
                return function (o, i) {
                    if (r === d) throw new Error("Generator is already running");
                    if (r === f) {
                        if ("throw" === o) throw i;
                        return P()
                    }
                    for (n.method = o, n.arg = i;;) {
                        var a = n.delegate;
                        if (a) {
                            var c = k(a, n);
                            if (c) {
                                if (c === p) continue;
                                return c
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (r === l) throw r = f, n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = d;
                        var s = u(t, e, n);
                        if ("normal" === s.type) {
                            if (r = n.done ? f : h, s.arg === p) continue;
                            return {
                                value: s.arg,
                                done: n.done
                            }
                        }
                        "throw" === s.type && (r = f, n.method = "throw", n.arg = s.arg)
                    }
                }
            }(t, n, a), i
        }

        function u(t, e, n) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, n)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        t.wrap = s;
        var l = "suspendedStart",
            h = "suspendedYield",
            d = "executing",
            f = "completed",
            p = {};

        function g() {}

        function m() {}

        function y() {}
        var v = {};
        v[i] = function () {
            return this
        };
        var w = Object.getPrototypeOf,
            x = w && w(w(O([])));
        x && x !== n && r.call(x, i) && (v = x);
        var b = y.prototype = g.prototype = Object.create(v);

        function E(t) {
            ["next", "throw", "return"].forEach((function (e) {
                t[e] = function (t) {
                    return this._invoke(e, t)
                }
            }))
        }

        function L(t) {
            var e;
            this._invoke = function (n, o) {
                function i() {
                    return new Promise((function (e, i) {
                        ! function e(n, o, i, a) {
                            var c = u(t[n], t, o);
                            if ("throw" !== c.type) {
                                var s = c.arg,
                                    l = s.value;
                                return l && "object" == typeof l && r.call(l, "__await") ? Promise.resolve(l.__await).then((function (t) {
                                    e("next", t, i, a)
                                }), (function (t) {
                                    e("throw", t, i, a)
                                })) : Promise.resolve(l).then((function (t) {
                                    s.value = t, i(s)
                                }), (function (t) {
                                    return e("throw", t, i, a)
                                }))
                            }
                            a(c.arg)
                        }(n, o, e, i)
                    }))
                }
                return e = e ? e.then(i, i) : i()
            }
        }

        function k(t, n) {
            var r = t.iterator[n.method];
            if (r === e) {
                if (n.delegate = null, "throw" === n.method) {
                    if (t.iterator.return && (n.method = "return", n.arg = e, k(t, n), "throw" === n.method)) return p;
                    n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return p
            }
            var o = u(r, t.iterator, n.arg);
            if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, p;
            var i = o.arg;
            return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, p) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, p)
        }

        function I(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function C(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function T(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(I, this), this.reset(!0)
        }

        function O(t) {
            if (t) {
                var n = t[i];
                if (n) return n.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var o = -1,
                        a = function n() {
                            for (; ++o < t.length;)
                                if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                            return n.value = e, n.done = !0, n
                        };
                    return a.next = a
                }
            }
            return {
                next: P
            }
        }

        function P() {
            return {
                value: e,
                done: !0
            }
        }
        return m.prototype = b.constructor = y, y.constructor = m, y[c] = m.displayName = "GeneratorFunction", t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
        }, t.mark = function (t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, c in t || (t[c] = "GeneratorFunction")), t.prototype = Object.create(b), t
        }, t.awrap = function (t) {
            return {
                __await: t
            }
        }, E(L.prototype), L.prototype[a] = function () {
            return this
        }, t.AsyncIterator = L, t.async = function (e, n, r, o) {
            var i = new L(s(e, n, r, o));
            return t.isGeneratorFunction(n) ? i : i.next().then((function (t) {
                return t.done ? t.value : i.next()
            }))
        }, E(b), b[c] = "Generator", b[i] = function () {
            return this
        }, b.toString = function () {
            return "[object Generator]"
        }, t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return e.reverse(),
                function n() {
                    for (; e.length;) {
                        var r = e.pop();
                        if (r in t) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
        }, t.values = O, T.prototype = {
            constructor: T,
            reset: function (t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(C), !t)
                    for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
            },
            stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;

                function o(r, o) {
                    return c.type = "throw", c.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i],
                        c = a.completion;
                    if ("root" === a.tryLoc) return o("end");
                    if (a.tryLoc <= this.prev) {
                        var s = r.call(a, "catchLoc"),
                            u = r.call(a, "finallyLoc");
                        if (s && u) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                        } else if (s) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                        } else {
                            if (!u) throw new Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function (t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(a)
            },
            complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p
            },
            finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), C(n), p
                }
            },
            catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc === t) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            C(n)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function (t, n, r) {
                return this.delegate = {
                    iterator: O(t),
                    resultName: n,
                    nextLoc: r
                }, "next" === this.method && (this.arg = e), p
            }
        }, t
    }(t.exports);
    try {
        regeneratorRuntime = r
    } catch (t) {
        Function("r", "regeneratorRuntime = r")(r)
    }
}, function (t, e, n) {}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(0),
        o = n.n(r),
        i = n(3),
        a = n.n(i),
        c = n(4),
        s = n.n(c),
        u = n(1),
        l = n.n(u),
        h = n(2),
        d = n(5),
        f = n.n(d),
        p = function (t) {
            return t >= 0 ? t <= 255 ? t : 255 : 0
        },
        g = function (t) {
            return t >= -128 ? t <= 127 ? t : 127 : -128
        },
        m = function (t) {
            return t.charCodeAt(0) > 31 && t.charCodeAt(0) < 127 ? 61 : 122
        },
        y = (n(7), function () {
            function t() {
                a()(this, t), l()(this, "isPatina", !1), l()(this, "originImage", void 0), l()(this, "imgElement", void 0), l()(this, "readyFlag", !1), l()(this, "generating", !1), l()(this, "imageFilename", "ZZKIA"), l()(this, "donateModal", void 0), l()(this, "payModal", void 0), l()(this, "weappModal", void 0), this.registerEvent(), this.fillModalContent()
            }
            return s()(t, [{
                key: "fetchImage",
                value: function () {
                    return o.a.async((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", new Promise((function (t) {
                                    var e = new Image;
                                    e.crossOrigin = "Anonymous", e.onload = function (n) {
                                        t(e)
                                    }, e.src = "https://cdn.jsdelivr.net/gh/LvFinch/ImgHost/NokiaImg/nokia.jpg"
                                })));
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }))
                }
            }, {
                key: "loadOriginImage",
                value: function () {
                    return o.a.async((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, o.a.awrap(this.fetchImage());
                            case 2:
                                this.originImage = t.sent, this.imgElement = document.getElementById("nokiaImage");
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), null, this)
                }
            }, {
                key: "registerEvent",
                value: function () {
                    var t = this,
                        e = document.getElementById("text");
                    document.getElementById("generate").addEventListener("click", (function (n) {
                        t.readyFlag && !t.generating && t.generateImage(e.value)
                    })), document.getElementById("download").addEventListener("click", (function (e) {
                        t.download()
                    })), document.getElementById("weapp").addEventListener("click", (function (e) {
                        t.weappModal.open()
                    })), document.getElementById("patina").addEventListener("change", (function (e) {
                        t.isPatina = e.target.checked
                    }))
                }
            }, {
                key: "download",
                value: function () {
                    var t = document.createElement("a");
                    t.download = "".concat(this.imageFilename, ".png"), t.style.display = "none", t.href = this.imgElement.src, document.body.appendChild(t), t.click(), document.body.removeChild(t)
                }
            }, {
                key: "toggleGenerating",
                value: function () {
                    this.generating = !this.generating;
                    var t = document.getElementById("generate");
                    t && (this.generating ? t.textContent = "生成中" : t.textContent = "生成")
                }
            }, {
                key: "patina",
                value: function (t) {
                    return o.a.async((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise((function (e) {
                                    var n = new Image;
                                    n.onload = function (t) {
                                        var r = document.createElement("canvas");
                                        r.width = n.width, r.height = n.height;
                                        var o = r.getContext("2d");
                                        if (o) {
                                            o.clearRect(0, 0, n.width, n.height), o.drawImage(n, 0, 0);
                                            for (var i = o.getImageData(0, 0, n.width, n.height), a = i.data, c = 0; c < a.length / 4; ++c) {
                                                var s = a[4 * c],
                                                    u = a[4 * c + 1],
                                                    l = a[4 * c + 2],
                                                    h = p(77 * s + 150 * u + 29 * l >> 8),
                                                    d = g((-43 * s - 85 * u + 128 * l >> 8) - 1),
                                                    f = g((128 * s - 107 * u - 21 * l >> 8) - 1),
                                                    m = p(65536 * h + 91881 * f >> 16),
                                                    y = p(65536 * h - 22553 * d - 46802 * f >> 16),
                                                    v = p(65536 * h + 116130 * d >> 16);
                                                a[4 * c] = m, a[4 * c + 1] = y, a[4 * c + 2] = v
                                            }
                                            o.putImageData(i, 0, 0), e(r.toDataURL("image/png", .55))
                                        }
                                    }, n.src = t
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }))
                }
            }, {
                key: "getText",
                value: function (t, e) {
                    var n, r, i, a, c, s, u, l;
                    return o.a.async((function (o) {
                        for (;;) switch (o.prev = o.next) {
                            case 0:
                                t = t.substring(0, 900), (n = document.createElement("canvas")).width = 1600, n.height = 1600, (r = n.getContext("2d")).clearRect(0, 0, 1600, 1600), r.rotate(9.4 * Math.PI / 180), r.font = "108px CustomFont", r.fillStyle = "#81D4FA", i = "".concat(t.length), r.fillText("".concat(i, "/900"), 1150 - 60 * i.length, 100), r.fillStyle = e, a = 0, c = 250, s = "", u = 336, l = 0;
                            case 15:
                                if (!(l < t.length)) {
                                    o.next = 24;
                                    break
                                }
                                if ((a += m(t[l])) > 1200 && (r.fillText(s, u, c), a = m(t[l]), c += 125, s = ""), !(c >= 850)) {
                                    o.next = 20;
                                    break
                                }
                                return o.abrupt("break", 24);
                            case 20:
                                s += t[l];
                            case 21:
                                ++l, o.next = 15;
                                break;
                            case 24:
                                return r.fillText(s, u, c), o.abrupt("return", new Promise((function (t) {
                                    var e = new Image;
                                    e.onload = function (n) {
                                        t(e)
                                    }, e.src = n.toDataURL()
                                })));
                            case 26:
                            case "end":
                                return o.stop()
                        }
                    }))
                }
            }, {
                key: "generateImage",
                value: function (t) {
                    var e, n, r, i, a, c, s, u, l;
                    return o.a.async((function (h) {
                        for (;;) switch (h.prev = h.next) {
                            case 0:
                                if (e = this.originImage, n = e.width, r = e.height, i = n / r, this.imageFilename = t, this.toggleGenerating(), (a = document.createElement("canvas")).width = n, a.height = r, c = a.getContext("2d")) {
                                    h.next = 10;
                                    break
                                }
                                return h.abrupt("return");
                            case 10:
                                return c.clearRect(0, 0, n, r), c.drawImage(this.originImage, 0, 0, n, r, 0, 0, n, r), h.next = 14, o.a.awrap(this.getText(t, "rgba(0, 0, 0, 0.75)"));
                            case 14:
                                if (s = h.sent, c.drawImage(s, 0, 0, s.width, s.height, .05 * n, .165 * r, s.width * i * .63, s.height * i * .63), u = a.toDataURL("image/png"), !this.isPatina) {
                                    h.next = 26;
                                    break
                                }
                                l = 0;
                            case 19:
                                if (!(l < 10)) {
                                    h.next = 26;
                                    break
                                }
                                return h.next = 22, o.a.awrap(this.patina(u));
                            case 22:
                                u = h.sent;
                            case 23:
                                ++l, h.next = 19;
                                break;
                            case 26:
                                this.imgElement.src = u, this.toggleGenerating();
                            case 28:
                            case "end":
                                return h.stop()
                        }
                    }), null, this)
                }
            }, {
                key: "loadFonts",
                value: function () {
                    var t;
                    return o.a.async((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = new f.a("CustomFont"), e.next = 3, o.a.awrap(t.load());
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }))
                }
            }, {
                key: "prepare",
                value: function () {
                    return o.a.async((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return this.loading(!0), t.next = 3, o.a.awrap(this.loadFonts());
                            case 3:
                                return t.next = 5, o.a.awrap(this.loadOriginImage());
                            case 5:
                                return t.next = 7, o.a.awrap(this.generateImage("Akko Design."));
                            case 7:
                                this.loading(!1);
                            case 8:
                            case "end":
                                return t.stop()
                        }
                    }), null, this)
                }
            }, {
                key: "fillModalContent",
                value: function () {
                    this.donateModal = new h.modal({
                        footer: !0,
                        stickyFooter: !1,
                        closeMethods: ["overlay", "button", "escape"],
                        closeLabel: "玩🐴呢"
                    }), this.payModal = new h.modal({
                        closeMethods: ["overlay", "button", "escape"],
                        closeLabel: "谢谢侬！"
                    }), this.weappModal = new h.modal({
                        closeMethods: ["overlay", "button", "escape"],
                        closeLabel: "关闭"
                    }), this.weappModal.setContent("<div style=\"width: 100%; text-align: center;\"><img style='width: 100%; max-width: 300px;' src=".concat("https://cdn.jsdelivr.net/gh/dcalsky/zzkia/api/images/weapp.jpg", '/ alt="QRcode"></div>'))
                }
            }, {
                key: "loading",
                value: function (t) {
                    var e = document.getElementById("image-tip"),
                        n = document.getElementById("nokiaImage");
                    e && n && (t ? (n.style.visibility = "hidden", e.textContent = "努力加载中...", this.readyFlag = !1) : (n.style.visibility = "visible", e.textContent = "Copyright  © 2020 Akko All rights reserved.", this.readyFlag = !0))
                }
            }]), t
        }());
    document.addEventListener("DOMContentLoaded", (function (t) {
        var e;
        return o.a.async((function (t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    return e = new y, t.next = 3, o.a.awrap(e.prepare());
                case 3:
                case "end":
                    return t.stop()
            }
        }))
    }))
}]);