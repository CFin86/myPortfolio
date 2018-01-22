(function () {
    ! function (a, b) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function (a, b) {
        "use strict";
        var c = [],
            d = a.document,
            e = Object.getPrototypeOf,
            f = c.slice,
            g = c.concat,
            h = c.push,
            i = c.indexOf,
            j = {},
            k = j.toString,
            l = j.hasOwnProperty,
            m = l.toString,
            n = m.call(Object),
            o = {};

        function p(a, b) {
            b = b || d;
            var c = b.createElement("script");
            c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
        }
        var q = "3.1.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector,-deprecated",
            r = function (a, b) {
                return new r.fn.init(a, b)
            },
            s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            t = /^-ms-/,
            u = /-([a-z])/g,
            v = function (a, b) {
                return b.toUpperCase()
            };
        r.fn = r.prototype = {
            jquery: q,
            constructor: r,
            length: 0,
            toArray: function () {
                return f.call(this)
            },
            get: function (a) {
                return null != a ? a < 0 ? this[a + this.length] : this[a] : f.call(this)
            },
            pushStack: function (a) {
                var b = r.merge(this.constructor(), a);
                return b.prevObject = this, b
            },
            each: function (a) {
                return r.each(this, a)
            },
            map: function (a) {
                return this.pushStack(r.map(this, function (b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function () {
                return this.pushStack(f.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (a) {
                var b = this.length,
                    c = +a + (a < 0 ? b : 0);
                return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: h,
            sort: c.sort,
            splice: c.splice
        }, r.extend = r.fn.extend = function () {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
                if (null != (a = arguments[h]))
                    for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            return g
        }, r.extend({
            expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (a) {
                throw new Error(a)
            },
            noop: function () {},
            isFunction: function (a) {
                return "function" === r.type(a)
            },
            isArray: Array.isArray,
            isWindow: function (a) {
                return null != a && a === a.window
            },
            isNumeric: function (a) {
                var b = r.type(a);
                return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
            },
            isPlainObject: function (a) {
                var b, c;
                return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
            },
            isEmptyObject: function (a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            type: function (a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
            },
            globalEval: function (a) {
                p(a)
            },
            camelCase: function (a) {
                return a.replace(t, "ms-").replace(u, v)
            },
            nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function (a, b) {
                var c, d = 0;
                if (w(a)) {
                    for (c = a.length; d < c; d++)
                        if (b.call(a[d], d, a[d]) === !1) break
                } else
                    for (d in a)
                        if (b.call(a[d], d, a[d]) === !1) break;
                return a
            },
            trim: function (a) {
                return null == a ? "" : (a + "").replace(s, "")
            },
            makeArray: function (a, b) {
                var c = b || [];
                return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
            },
            inArray: function (a, b, c) {
                return null == b ? -1 : i.call(b, a, c)
            },
            merge: function (a, b) {
                for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
                return a.length = e, a
            },
            grep: function (a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            },
            map: function (a, b, c) {
                var d, e, f = 0,
                    h = [];
                if (w(a))
                    for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
                else
                    for (f in a) e = b(a[f], f, c), null != e && h.push(e);
                return g.apply([], h)
            },
            guid: 1,
            proxy: function (a, b) {
                var c, d, e;
                if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function () {
                    return a.apply(b || this, d.concat(f.call(arguments)))
                }, e.guid = a.guid = a.guid || r.guid++, e
            },
            now: Date.now,
            support: o
        }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
            j["[object " + b + "]"] = b.toLowerCase()
        });

        function w(a) {
            var b = !!a && "length" in a && a.length,
                c = r.type(a);
            return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
        }
        var x = function (a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
                v = a.document,
                w = 0,
                x = 0,
                y = ha(),
                z = ha(),
                A = ha(),
                B = function (a, b) {
                    return a === b && (l = !0), 0
                },
                C = {}.hasOwnProperty,
                D = [],
                E = D.pop,
                F = D.push,
                G = D.push,
                H = D.slice,
                I = function (a, b) {
                    for (var c = 0, d = a.length; c < d; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                K = "[\\x20\\t\\r\\n\\f]",
                L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
                N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                O = new RegExp(K + "+", "g"),
                P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
                Q = new RegExp("^" + K + "*," + K + "*"),
                R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
                S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
                T = new RegExp(N),
                U = new RegExp("^" + L + "$"),
                V = {
                    ID: new RegExp("^#(" + L + ")"),
                    CLASS: new RegExp("^\\.(" + L + ")"),
                    TAG: new RegExp("^(" + L + "|[*])"),
                    ATTR: new RegExp("^" + M),
                    PSEUDO: new RegExp("^" + N),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + J + ")$", "i"),
                    needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
                },
                W = /^(?:input|select|textarea|button)$/i,
                X = /^h\d$/i,
                Y = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                $ = /[+~]/,
                _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
                aa = function (a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
                ca = function (a, b) {
                    return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
                },
                da = function () {
                    m()
                },
                ea = ta(function (a) {
                    return a.disabled === !0
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
            } catch (fa) {
                G = {
                    apply: D.length ? function (a, b) {
                        F.apply(a, H.call(b))
                    } : function (a, b) {
                        var c = a.length,
                            d = 0;
                        while (a[c++] = b[d++]);
                        a.length = c - 1
                    }
                }
            }

            function ga(a, b, d, e) {
                var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                    w = b ? b.nodeType : 9;
                if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
                if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                    if (11 !== w && (l = Z.exec(a)))
                        if (f = l[1]) {
                            if (9 === w) {
                                if (!(j = b.getElementById(f))) return d;
                                if (j.id === f) return d.push(j), d
                            } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                        } else {
                            if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                            if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
                        }
                    if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                        if (1 !== w) s = b, r = a;
                        else if ("object" !== b.nodeName.toLowerCase()) {
                            (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
                            while (h--) o[h] = "#" + k + " " + sa(o[h]);
                            r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                        }
                        if (r) try {
                            return G.apply(d, s.querySelectorAll(r)), d
                        } catch (x) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                    }
                }
                return i(a.replace(P, "$1"), b, d, e)
            }

            function ha() {
                var a = [];

                function b(c, e) {
                    return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
                }
                return b
            }

            function ia(a) {
                return a[u] = !0, a
            }

            function ja(a) {
                var b = n.createElement("fieldset");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function ka(a, b) {
                var c = a.split("|"),
                    e = c.length;
                while (e--) d.attrHandle[c[e]] = b
            }

            function la(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
                if (d) return d;
                if (c)
                    while (c = c.nextSibling)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function ma(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function na(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function oa(a) {
                return function (b) {
                    return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && b.disabled === !1 && (b.isDisabled === a || b.isDisabled !== !a && ("label" in b || !ea(b)) !== a)
                }
            }

            function pa(a) {
                return ia(function (b) {
                    return b = +b, ia(function (c, d) {
                        var e, f = a([], c.length, b),
                            g = f.length;
                        while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function qa(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }
            c = ga.support = {}, f = ga.isXML = function (a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return !!b && "HTML" !== b.nodeName
            }, m = ga.setDocument = function (a) {
                var b, e, g = a ? a.ownerDocument || a : v;
                return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
                    return a.className = "i", !a.getAttribute("className")
                }), c.getElementsByTagName = ja(function (a) {
                    return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
                }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
                    return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
                }), c.getById ? (d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                        var c = b.getElementById(a);
                        return c ? [c] : []
                    }
                }, d.filter.ID = function (a) {
                    var b = a.replace(_, aa);
                    return function (a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete d.find.ID, d.filter.ID = function (a) {
                    var b = a.replace(_, aa);
                    return function (a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                } : function (a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        while (c = f[e++]) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                    if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a)
                }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
                    o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                }), ja(function (a) {
                    a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var b = n.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
                })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                    c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
                }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function (a, b) {
                    if (b)
                        while (b = b.parentNode)
                            if (b === a) return !0;
                    return !1
                }, B = b ? function (a, b) {
                    if (a === b) return l = !0, 0;
                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
                } : function (a, b) {
                    if (a === b) return l = !0, 0;
                    var c, d = 0,
                        e = a.parentNode,
                        f = b.parentNode,
                        g = [a],
                        h = [b];
                    if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                    if (e === f) return la(a, b);
                    c = a;
                    while (c = c.parentNode) g.unshift(c);
                    c = b;
                    while (c = c.parentNode) h.unshift(c);
                    while (g[d] === h[d]) d++;
                    return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
                }, n) : n
            }, ga.matches = function (a, b) {
                return ga(a, null, null, b)
            }, ga.matchesSelector = function (a, b) {
                if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return ga(b, n, null, [a]).length > 0
            }, ga.contains = function (a, b) {
                return (a.ownerDocument || a) !== n && m(a), t(a, b)
            }, ga.attr = function (a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()],
                    f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
            }, ga.escape = function (a) {
                return (a + "").replace(ba, ca)
            }, ga.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, ga.uniqueSort = function (a) {
                var b, d = [],
                    e = 0,
                    f = 0;
                if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                    while (b = a[f++]) b === a[f] && (e = d.push(f));
                    while (e--) a.splice(d[e], 1)
                }
                return k = null, a
            }, e = ga.getText = function (a) {
                var b, c = "",
                    d = 0,
                    f = a.nodeType;
                if (f) {
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                    } else if (3 === f || 4 === f) return a.nodeValue
                } else
                    while (b = a[d++]) c += e(b);
                return c
            }, d = ga.selectors = {
                cacheLength: 50,
                createPseudo: ia,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (a) {
                        return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function (a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                    },
                    PSEUDO: function (a) {
                        var b, c = !a[6] && a[2];
                        return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (a) {
                        var b = a.replace(_, aa).toLowerCase();
                        return "*" === a ? function () {
                            return !0
                        } : function (a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function (a) {
                        var b = y[a + " "];
                        return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (a, b, c) {
                        return function (d) {
                            var e = ga.attr(d, a);
                            return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                        }
                    },
                    CHILD: function (a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function (a) {
                            return !!a.parentNode
                        } : function (b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h,
                                t = !1;
                            if (q) {
                                if (f) {
                                    while (p) {
                                        m = b;
                                        while (m = m[p])
                                            if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                        if (1 === m.nodeType && ++t && m === b) {
                                            k[a] = [w, n, t];
                                            break
                                        }
                                } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                        if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                                return t -= e, t === d || t % d === 0 && t / d >= 0
                            }
                        }
                    },
                    PSEUDO: function (a, b) {
                        var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                        return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                            var d, f = e(a, b),
                                g = f.length;
                            while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
                        }) : function (a) {
                            return e(a, 0, c)
                        }) : e
                    }
                },
                pseudos: {
                    not: ia(function (a) {
                        var b = [],
                            c = [],
                            d = h(a.replace(P, "$1"));
                        return d[u] ? ia(function (a, b, c, e) {
                            var f, g = d(a, null, e, []),
                                h = a.length;
                            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function (a, e, f) {
                            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: ia(function (a) {
                        return function (b) {
                            return ga(a, b).length > 0
                        }
                    }),
                    contains: ia(function (a) {
                        return a = a.replace(_, aa),
                            function (b) {
                                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                            }
                    }),
                    lang: ia(function (a) {
                        return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                            function (b) {
                                var c;
                                do
                                    if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function (b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function (a) {
                        return a === o
                    },
                    focus: function (a) {
                        return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: oa(!1),
                    disabled: oa(!0),
                    checked: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function (a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function (a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (a) {
                        return !d.pseudos.empty(a)
                    },
                    header: function (a) {
                        return X.test(a.nodeName)
                    },
                    input: function (a) {
                        return W.test(a.nodeName)
                    },
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function (a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: pa(function () {
                        return [0]
                    }),
                    last: pa(function (a, b) {
                        return [b - 1]
                    }),
                    eq: pa(function (a, b, c) {
                        return [c < 0 ? c + b : c]
                    }),
                    even: pa(function (a, b) {
                        for (var c = 0; c < b; c += 2) a.push(c);
                        return a
                    }),
                    odd: pa(function (a, b) {
                        for (var c = 1; c < b; c += 2) a.push(c);
                        return a
                    }),
                    lt: pa(function (a, b, c) {
                        for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: pa(function (a, b, c) {
                        for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, d.pseudos.nth = d.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) d.pseudos[b] = ma(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) d.pseudos[b] = na(b);

            function ra() {}
            ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function (a, b) {
                var c, e, f, g, h, i, j, k = z[a + " "];
                if (k) return b ? 0 : k.slice(0);
                h = a, i = [], j = d.preFilter;
                while (h) {
                    c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                        value: c,
                        type: e[0].replace(P, " ")
                    }), h = h.slice(c.length));
                    for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length));
                    if (!c) break
                }
                return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
            };

            function sa(a) {
                for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
                return d
            }

            function ta(a, b, c) {
                var d = b.dir,
                    e = b.next,
                    f = e || d,
                    g = c && "parentNode" === f,
                    h = x++;
                return b.first ? function (b, c, e) {
                    while (b = b[d])
                        if (1 === b.nodeType || g) return a(b, c, e)
                } : function (b, c, i) {
                    var j, k, l, m = [w, h];
                    if (i) {
                        while (b = b[d])
                            if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                    } else
                        while (b = b[d])
                            if (1 === b.nodeType || g)
                                if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                                else {
                                    if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                                    if (k[f] = m, m[2] = a(b, c, i)) return !0
                                }
                }
            }

            function ua(a) {
                return a.length > 1 ? function (b, c, d) {
                    var e = a.length;
                    while (e--)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function va(a, b, c) {
                for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
                return c
            }

            function wa(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
                return g
            }

            function xa(a, b, c, d, e, f) {
                return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = f || va(b || "*", h.nodeType ? [h] : h, []),
                        q = !a || !f && b ? p : wa(p, m, a, h, i),
                        r = c ? e || (f ? a : o || d) ? [] : g : q;
                    if (c && c(q, r, h, i), d) {
                        j = wa(r, n), d(j, [], h, i), k = j.length;
                        while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                    if (f) {
                        if (e || a) {
                            if (e) {
                                j = [], k = r.length;
                                while (k--)(l = r[k]) && j.push(q[k] = l);
                                e(null, r = [], j, i)
                            }
                            k = r.length;
                            while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
                })
            }

            function ya(a) {
                for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
                        return a === b
                    }, h, !0), l = ta(function (a) {
                        return I(b, a) > -1
                    }, h, !0), m = [function (a, c, d) {
                        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                        return b = null, e
                    }]; i < f; i++)
                    if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
                    else {
                        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                            for (e = ++i; e < f; e++)
                                if (d.relative[a[e].type]) break;
                            return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
                                value: " " === a[i - 2].type ? "*" : ""
                            })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                        }
                        m.push(c)
                    }
                return ua(m)
            }

            function za(a, b) {
                var c = b.length > 0,
                    e = a.length > 0,
                    f = function (f, g, h, i, k) {
                        var l, o, q, r = 0,
                            s = "0",
                            t = f && [],
                            u = [],
                            v = j,
                            x = f || e && d.find.TAG("*", k),
                            y = w += null == v ? 1 : Math.random() || .1,
                            z = x.length;
                        for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                            if (e && l) {
                                o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                                while (q = a[o++])
                                    if (q(l, g || n, h)) {
                                        i.push(l);
                                        break
                                    }
                                k && (w = y)
                            }
                            c && ((l = !q && l) && r--, f && t.push(l))
                        }
                        if (r += s, c && s !== r) {
                            o = 0;
                            while (q = b[o++]) q(t, u, g, h);
                            if (f) {
                                if (r > 0)
                                    while (s--) t[s] || u[s] || (u[s] = E.call(i));
                                u = wa(u)
                            }
                            G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                        }
                        return k && (w = y, j = v), t
                    };
                return c ? ia(f) : f
            }
            return h = ga.compile = function (a, b) {
                var c, d = [],
                    e = [],
                    f = A[a + " "];
                if (!f) {
                    b || (b = g(a)), c = b.length;
                    while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                    f = A(a, za(e, d)), f.selector = a
                }
                return f
            }, i = ga.select = function (a, b, e, f) {
                var i, j, k, l, m, n = "function" == typeof a && a,
                    o = !f && g(a = n.selector || a);
                if (e = e || [], 1 === o.length) {
                    if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                        if (b = (d.find.ID(k.matches[0].replace(_, aa), b) || [])[0], !b) return e;
                        n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                    }
                    i = V.needsContext.test(a) ? 0 : j.length;
                    while (i--) {
                        if (k = j[i], d.relative[l = k.type]) break;
                        if ((m = d.find[l]) && (f = m(k.matches[0].replace(_, aa), $.test(j[0].type) && qa(b.parentNode) || b))) {
                            if (j.splice(i, 1), a = f.length && sa(j), !a) return G.apply(e, f), e;
                            break
                        }
                    }
                }
                return (n || h(a, o))(f, b, !p, e, !b || $.test(a) && qa(b.parentNode) || b), e
            }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
                return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
            }), ja(function (a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || ka("type|href|height|width", function (a, b, c) {
                if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), c.attributes && ja(function (a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || ka("value", function (a, b, c) {
                if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
            }), ja(function (a) {
                return null == a.getAttribute("disabled")
            }) || ka(J, function (a, b, c) {
                var d;
                if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), ga
        }(a);
        r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
        var y = function (a, b, c) {
                var d = [],
                    e = void 0 !== c;
                while ((a = a[b]) && 9 !== a.nodeType)
                    if (1 === a.nodeType) {
                        if (e && r(a).is(c)) break;
                        d.push(a)
                    }
                return d
            },
            z = function (a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            },
            A = r.expr.match.needsContext,
            B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            C = /^.[^:#\[\.,]*$/;

        function D(a, b, c) {
            if (r.isFunction(b)) return r.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return r.grep(a, function (a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (C.test(b)) return r.filter(b, a, c);
                b = r.filter(b, a)
            }
            return r.grep(a, function (a) {
                return i.call(b, a) > -1 !== c && 1 === a.nodeType
            })
        }
        r.filter = function (a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
                return 1 === a.nodeType
            }))
        }, r.fn.extend({
            find: function (a) {
                var b, c, d = this.length,
                    e = this;
                if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
                    for (b = 0; b < d; b++)
                        if (r.contains(e[b], this)) return !0
                }));
                for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
                return d > 1 ? r.uniqueSort(c) : c
            },
            filter: function (a) {
                return this.pushStack(D(this, a || [], !1))
            },
            not: function (a) {
                return this.pushStack(D(this, a || [], !0))
            },
            is: function (a) {
                return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
            }
        });
        var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            G = r.fn.init = function (a, b, c) {
                var e, f;
                if (!a) return this;
                if (c = c || E, "string" == typeof a) {
                    if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                    if (e[1]) {
                        if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b))
                            for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                        return this
                    }
                    return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
                }
                return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
            };
        G.prototype = r.fn, E = r(d);
        var H = /^(?:parents|prev(?:Until|All))/,
            I = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        r.fn.extend({
            has: function (a) {
                var b = r(a, this),
                    c = b.length;
                return this.filter(function () {
                    for (var a = 0; a < c; a++)
                        if (r.contains(this, b[a])) return !0
                })
            },
            closest: function (a, b) {
                var c, d = 0,
                    e = this.length,
                    f = [],
                    g = "string" != typeof a && r(a);
                if (!A.test(a))
                    for (; d < e; d++)
                        for (c = this[d]; c && c !== b; c = c.parentNode)
                            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                                f.push(c);
                                break
                            }
                return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
            },
            index: function (a) {
                return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (a, b) {
                return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
            },
            addBack: function (a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        });

        function J(a, b) {
            while ((a = a[b]) && 1 !== a.nodeType);
            return a
        }
        r.each({
            parent: function (a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function (a) {
                return y(a, "parentNode")
            },
            parentsUntil: function (a, b, c) {
                return y(a, "parentNode", c)
            },
            next: function (a) {
                return J(a, "nextSibling")
            },
            prev: function (a) {
                return J(a, "previousSibling")
            },
            nextAll: function (a) {
                return y(a, "nextSibling")
            },
            prevAll: function (a) {
                return y(a, "previousSibling")
            },
            nextUntil: function (a, b, c) {
                return y(a, "nextSibling", c)
            },
            prevUntil: function (a, b, c) {
                return y(a, "previousSibling", c)
            },
            siblings: function (a) {
                return z((a.parentNode || {}).firstChild, a)
            },
            children: function (a) {
                return z(a.firstChild)
            },
            contents: function (a) {
                return a.contentDocument || r.merge([], a.childNodes)
            }
        }, function (a, b) {
            r.fn[a] = function (c, d) {
                var e = r.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e)
            }
        });
        var K = /\S+/g;

        function L(a) {
            var b = {};
            return r.each(a.match(K) || [], function (a, c) {
                b[c] = !0
            }), b
        }
        r.Callbacks = function (a) {
            a = "string" == typeof a ? L(a) : r.extend({}, a);
            var b, c, d, e, f = [],
                g = [],
                h = -1,
                i = function () {
                    for (e = a.once, d = b = !0; g.length; h = -1) {
                        c = g.shift();
                        while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                    }
                    a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
                },
                j = {
                    add: function () {
                        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                            r.each(b, function (b, c) {
                                r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                            })
                        }(arguments), c && !b && i()), this
                    },
                    remove: function () {
                        return r.each(arguments, function (a, b) {
                            var c;
                            while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--
                        }), this
                    },
                    has: function (a) {
                        return a ? r.inArray(a, f) > -1 : f.length > 0
                    },
                    empty: function () {
                        return f && (f = []), this
                    },
                    disable: function () {
                        return e = g = [], f = c = "", this
                    },
                    disabled: function () {
                        return !f
                    },
                    lock: function () {
                        return e = g = [], c || b || (f = c = ""), this
                    },
                    locked: function () {
                        return !!e
                    },
                    fireWith: function (a, c) {
                        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                    },
                    fire: function () {
                        return j.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!d
                    }
                };
            return j
        };

        function M(a) {
            return a
        }

        function N(a) {
            throw a
        }

        function O(a, b, c) {
            var d;
            try {
                a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a)
            } catch (a) {
                c.call(void 0, a)
            }
        }
        r.extend({
            Deferred: function (b) {
                var c = [
                        ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                        ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
                    ],
                    d = "pending",
                    e = {
                        state: function () {
                            return d
                        },
                        always: function () {
                            return f.done(arguments).fail(arguments), this
                        },
                        "catch": function (a) {
                            return e.then(null, a)
                        },
                        pipe: function () {
                            var a = arguments;
                            return r.Deferred(function (b) {
                                r.each(c, function (c, d) {
                                    var e = r.isFunction(a[d[4]]) && a[d[4]];
                                    f[d[1]](function () {
                                        var a = e && e.apply(this, arguments);
                                        a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        then: function (b, d, e) {
                            var f = 0;

                            function g(b, c, d, e) {
                                return function () {
                                    var h = this,
                                        i = arguments,
                                        j = function () {
                                            var a, j;
                                            if (!(b < f)) {
                                                if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                                j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                            }
                                        },
                                        k = e ? j : function () {
                                            try {
                                                j()
                                            } catch (a) {
                                                r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i))
                                            }
                                        };
                                    b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                                }
                            }
                            return r.Deferred(function (a) {
                                c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N))
                            }).promise()
                        },
                        promise: function (a) {
                            return null != a ? r.extend(a, e) : e
                        }
                    },
                    f = {};
                return r.each(c, function (a, b) {
                    var g = b[2],
                        h = b[5];
                    e[b[1]] = g.add, h && g.add(function () {
                        d = h
                    }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
                        return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                    }, f[b[0] + "With"] = g.fireWith
                }), e.promise(f), b && b.call(f, f), f
            },
            when: function (a) {
                var b = arguments.length,
                    c = b,
                    d = Array(c),
                    e = f.call(arguments),
                    g = r.Deferred(),
                    h = function (a) {
                        return function (c) {
                            d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e)
                        }
                    };
                if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
                while (c--) O(e[c], h(c), g.reject);
                return g.promise()
            }
        });
        var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        r.Deferred.exceptionHook = function (b, c) {
            a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
        }, r.readyException = function (b) {
            a.setTimeout(function () {
                throw b
            })
        };
        var Q = r.Deferred();
        r.fn.ready = function (a) {
            return Q.then(a)["catch"](function (a) {
                r.readyException(a)
            }), this
        }, r.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (a) {
                a ? r.readyWait++ : r.ready(!0)
            },
            ready: function (a) {
                (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]))
            }
        }), r.ready.then = Q.then;

        function R() {
            d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready()
        }
        "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R),
            a.addEventListener("load", R));
        var S = function (a, b, c, d, e, f, g) {
                var h = 0,
                    i = a.length,
                    j = null == c;
                if ("object" === r.type(c)) {
                    e = !0;
                    for (h in c) S(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                        return j.call(r(a), c)
                    })), b))
                    for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            },
            T = function (a) {
                return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
            };

        function U() {
            this.expando = r.expando + U.uid++
        }
        U.uid = 1, U.prototype = {
            cache: function (a) {
                var b = a[this.expando];
                return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0
                }))), b
            },
            set: function (a, b, c) {
                var d, e = this.cache(a);
                if ("string" == typeof b) e[r.camelCase(b)] = c;
                else
                    for (d in b) e[r.camelCase(d)] = b[d];
                return e
            },
            get: function (a, b) {
                return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
            },
            access: function (a, b, c) {
                return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
            },
            remove: function (a, b) {
                var c, d = a[this.expando];
                if (void 0 !== d) {
                    if (void 0 !== b) {
                        r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;
                        while (c--) delete d[b[c]]
                    }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
                }
            },
            hasData: function (a) {
                var b = a[this.expando];
                return void 0 !== b && !r.isEmptyObject(b)
            }
        };
        var V = new U,
            W = new U,
            X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Y = /[A-Z]/g;

        function Z(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType)
                if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : X.test(c) ? JSON.parse(c) : c)
                    } catch (e) {}
                    W.set(a, b, c)
                } else c = void 0;
            return c
        }
        r.extend({
            hasData: function (a) {
                return W.hasData(a) || V.hasData(a)
            },
            data: function (a, b, c) {
                return W.access(a, b, c)
            },
            removeData: function (a, b) {
                W.remove(a, b)
            },
            _data: function (a, b, c) {
                return V.access(a, b, c)
            },
            _removeData: function (a, b) {
                V.remove(a, b)
            }
        }), r.fn.extend({
            data: function (a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                        c = g.length;
                        while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), Z(f, d, e[d])));
                        V.set(f, "hasDataAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function () {
                    W.set(this, a)
                }) : S(this, function (b) {
                    var c;
                    if (f && void 0 === b) {
                        if (c = W.get(f, a), void 0 !== c) return c;
                        if (c = Z(f, a), void 0 !== c) return c
                    } else this.each(function () {
                        W.set(this, a, b)
                    })
                }, null, b, arguments.length > 1, null, !0)
            },
            removeData: function (a) {
                return this.each(function () {
                    W.remove(this, a)
                })
            }
        }), r.extend({
            queue: function (a, b, c) {
                var d;
                if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || []
            },
            dequeue: function (a, b) {
                b = b || "fx";
                var c = r.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = r._queueHooks(a, b),
                    g = function () {
                        r.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return V.get(a, c) || V.access(a, c, {
                    empty: r.Callbacks("once memory").add(function () {
                        V.remove(a, [b + "queue", c])
                    })
                })
            }
        }), r.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                    var c = r.queue(this, a, b);
                    r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
                })
            },
            dequeue: function (a) {
                return this.each(function () {
                    r.dequeue(this, a)
                })
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", [])
            },
            promise: function (a, b) {
                var c, d = 1,
                    e = r.Deferred(),
                    f = this,
                    g = this.length,
                    h = function () {
                        --d || e.resolveWith(f, [f])
                    };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--) c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            _ = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
            aa = ["Top", "Right", "Bottom", "Left"],
            ba = function (a, b) {
                return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
            },
            ca = function (a, b, c, d) {
                var e, f, g = {};
                for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b) a.style[f] = g[f];
                return e
            };

        function da(a, b, c, d) {
            var e, f = 1,
                g = 20,
                h = d ? function () {
                    return d.cur()
                } : function () {
                    return r.css(a, b, "")
                },
                i = h(),
                j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
                k = (r.cssNumber[b] || "px" !== j && +i) && _.exec(r.css(a, b));
            if (k && k[3] !== j) {
                j = j || k[3], c = c || [], k = +i || 1;
                do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
            }
            return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
        }
        var ea = {};

        function fa(a) {
            var b, c = a.ownerDocument,
                d = a.nodeName,
                e = ea[d];
            return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ea[d] = e, e)
        }

        function ga(a, b) {
            for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ba(d) && (e[f] = fa(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
            for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
            return a
        }
        r.fn.extend({
            show: function () {
                return ga(this, !0)
            },
            hide: function () {
                return ga(this)
            },
            toggle: function (a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                    ba(this) ? r(this).show() : r(this).hide()
                })
            }
        });
        var ha = /^(?:checkbox|radio)$/i,
            ia = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            ja = /^$|\/(?:java|ecma)script/i,
            ka = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        ka.optgroup = ka.option, ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead, ka.th = ka.td;

        function la(a, b) {
            var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
            return void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c
        }

        function ma(a, b) {
            for (var c = 0, d = a.length; c < d; c++) V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"))
        }
        var na = /<|&#?\w+;/;

        function oa(a, b, c, d, e) {
            for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
                if (f = a[n], f || 0 === f)
                    if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                    else if (na.test(f)) {
                g = g || l.appendChild(b.createElement("div")), h = (ia.exec(f) || ["", ""])[1].toLowerCase(), i = ka[h] || ka._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
                while (k--) g = g.lastChild;
                r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
            } else m.push(b.createTextNode(f));
            l.textContent = "", n = 0;
            while (f = m[n++])
                if (d && r.inArray(f, d) > -1) e && e.push(f);
                else if (j = r.contains(f.ownerDocument, f), g = la(l.appendChild(f), "script"), j && ma(g), c) {
                k = 0;
                while (f = g[k++]) ja.test(f.type || "") && c.push(f)
            }
            return l
        }! function () {
            var a = d.createDocumentFragment(),
                b = a.appendChild(d.createElement("div")),
                c = d.createElement("input");
            c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
        }();
        var pa = d.documentElement,
            qa = /^key/,
            ra = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            sa = /^([^.]*)(?:\.(.+)|)/;

        function ta() {
            return !0
        }

        function ua() {
            return !1
        }

        function va() {
            try {
                return d.activeElement
            } catch (a) {}
        }

        function wa(a, b, c, d, e, f) {
            var g, h;
            if ("object" == typeof b) {
                "string" != typeof c && (d = d || c, c = void 0);
                for (h in b) wa(a, h, c, d, b[h], f);
                return a
            }
            if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ua;
            else if (!e) return a;
            return 1 === f && (g = e, e = function (a) {
                return r().off(a), g.apply(this, arguments)
            }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
                r.event.add(this, b, e, d, c)
            })
        }
        r.event = {
            global: {},
            add: function (a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a);
                if (q) {
                    c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(pa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                        return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(K) || [""], j = b.length;
                    while (j--) h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && r.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
                }
            },
            remove: function (a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a);
                if (q && (i = q.events)) {
                    b = (b || "").match(K) || [""], j = b.length;
                    while (j--)
                        if (h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                            while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                        } else
                            for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                    r.isEmptyObject(i) && V.remove(a, "handle events")
                }
            },
            dispatch: function (a) {
                var b = r.event.fix(a),
                    c, d, e, f, g, h, i = new Array(arguments.length),
                    j = (V.get(this, "events") || {})[b.type] || [],
                    k = r.event.special[b.type] || {};
                for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
                if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                    h = r.event.handlers.call(this, b, j), c = 0;
                    while ((f = h[c++]) && !b.isPropagationStopped()) {
                        b.currentTarget = f.elem, d = 0;
                        while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
                    }
                    return k.postDispatch && k.postDispatch.call(this, b), b.result
                }
            },
            handlers: function (a, b) {
                var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                    for (; i !== this; i = i.parentNode || this)
                        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                            for (d = [], c = 0; c < h; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? r(e, this).index(i) > -1 : r.find(e, this, null, [i]).length), d[e] && d.push(f);
                            d.length && g.push({
                                elem: i,
                                handlers: d
                            })
                        }
                return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }), g
            },
            addProp: function (a, b) {
                Object.defineProperty(r.Event.prototype, a, {
                    enumerable: !0,
                    configurable: !0,
                    get: r.isFunction(b) ? function () {
                        if (this.originalEvent) return b(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[a]
                    },
                    set: function (b) {
                        Object.defineProperty(this, a, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: b
                        })
                    }
                })
            },
            fix: function (a) {
                return a[r.expando] ? a : new r.Event(a)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== va() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        if (this === va() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function (a) {
                        return r.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            }
        }, r.removeEvent = function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c)
        }, r.Event = function (a, b) {
            return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ta : ua, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
        }, r.Event.prototype = {
            constructor: r.Event,
            isDefaultPrevented: ua,
            isPropagationStopped: ua,
            isImmediatePropagationStopped: ua,
            isSimulated: !1,
            preventDefault: function () {
                var a = this.originalEvent;
                this.isDefaultPrevented = ta, a && !this.isSimulated && a.preventDefault()
            },
            stopPropagation: function () {
                var a = this.originalEvent;
                this.isPropagationStopped = ta, a && !this.isSimulated && a.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = ta, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, r.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            "char": !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (a) {
                var b = a.button;
                return null == a.which && qa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ra.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
            }
        }, r.event.addProp), r.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (a, b) {
            r.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function (a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), r.fn.extend({
            on: function (a, b, c, d) {
                return wa(this, a, b, c, d)
            },
            one: function (a, b, c, d) {
                return wa(this, a, b, c, d, 1)
            },
            off: function (a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this
                }
                return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ua), this.each(function () {
                    r.event.remove(this, a, c, b)
                })
            }
        });
        var xa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            ya = /<script|<style|<link/i,
            za = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Aa = /^true\/(.*)/,
            Ba = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Ca(a, b) {
            return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
        }

        function Da(a) {
            return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
        }

        function Ea(a) {
            var b = Aa.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function Fa(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
                    delete g.handle, g.events = {};
                    for (e in j)
                        for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
                }
                W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i))
            }
        }

        function Ga(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && ha.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }

        function Ha(a, b, c, d) {
            b = g.apply([], b);
            var e, f, h, i, j, k, l = 0,
                m = a.length,
                n = m - 1,
                q = b[0],
                s = r.isFunction(q);
            if (s || m > 1 && "string" == typeof q && !o.checkClone && za.test(q)) return a.each(function (e) {
                var f = a.eq(e);
                s && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
            });
            if (m && (e = oa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
                for (h = r.map(la(e, "script"), Da), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, la(j, "script"))), c.call(a[l], j, l);
                if (i)
                    for (k = h[h.length - 1].ownerDocument, r.map(h, Ea), l = 0; l < i; l++) j = h[l], ja.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ba, ""), k))
            }
            return a
        }

        function Ia(a, b, c) {
            for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(la(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && ma(la(d, "script")), d.parentNode.removeChild(d));
            return a
        }
        r.extend({
            htmlPrefilter: function (a) {
                return a.replace(xa, "<$1></$2>")
            },
            clone: function (a, b, c) {
                var d, e, f, g, h = a.cloneNode(!0),
                    i = r.contains(a.ownerDocument, a);
                if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                    for (g = la(h), f = la(a), d = 0, e = f.length; d < e; d++) Ga(f[d], g[d]);
                if (b)
                    if (c)
                        for (f = f || la(a), g = g || la(h), d = 0, e = f.length; d < e; d++) Fa(f[d], g[d]);
                    else Fa(a, h);
                return g = la(h, "script"), g.length > 0 && ma(g, !i && la(a, "script")), h
            },
            cleanData: function (a) {
                for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                    if (T(c)) {
                        if (b = c[V.expando]) {
                            if (b.events)
                                for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                            c[V.expando] = void 0
                        }
                        c[W.expando] && (c[W.expando] = void 0)
                    }
            }
        }), r.fn.extend({
            detach: function (a) {
                return Ia(this, a, !0)
            },
            remove: function (a) {
                return Ia(this, a)
            },
            text: function (a) {
                return S(this, function (a) {
                    return void 0 === a ? r.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                    })
                }, null, a, arguments.length)
            },
            append: function () {
                return Ha(this, arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = Ca(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function () {
                return Ha(this, arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = Ca(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function () {
                return Ha(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function () {
                return Ha(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(la(a, !1)), a.textContent = "");
                return this
            },
            clone: function (a, b) {
                return a = null != a && a, b = null == b ? a : b, this.map(function () {
                    return r.clone(this, a, b)
                })
            },
            html: function (a) {
                return S(this, function (a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                    if ("string" == typeof a && !ya.test(a) && !ka[(ia.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = r.htmlPrefilter(a);
                        try {
                            for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(la(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function () {
                var a = [];
                return Ha(this, arguments, function (b) {
                    var c = this.parentNode;
                    r.inArray(this, a) < 0 && (r.cleanData(la(this)), c && c.replaceChild(b, this))
                }, a)
            }
        }), r.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (a, b) {
            r.fn[a] = function (a) {
                for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
                return this.pushStack(d)
            }
        });
        var Ja = /^margin/,
            Ka = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
            La = function (b) {
                var c = b.ownerDocument.defaultView;
                return c && c.opener || (c = a), c.getComputedStyle(b)
            };
        ! function () {
            function b() {
                if (i) {
                    i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", pa.appendChild(h);
                    var b = a.getComputedStyle(i);
                    c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, pa.removeChild(h), i = null
                }
            }
            var c, e, f, g, h = d.createElement("div"),
                i = d.createElement("div");
            i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
                pixelPosition: function () {
                    return b(), c
                },
                boxSizingReliable: function () {
                    return b(), e
                },
                pixelMarginRight: function () {
                    return b(), f
                },
                reliableMarginLeft: function () {
                    return b(), g
                }
            }))
        }();

        function Ma(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || La(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ka.test(g) && Ja.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
        }

        function Na(a, b) {
            return {
                get: function () {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }
        var Oa = /^(none|table(?!-c[ea]).+)/,
            Pa = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Qa = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Ra = ["Webkit", "Moz", "ms"],
            Sa = d.createElement("div").style;

        function Ta(a) {
            if (a in Sa) return a;
            var b = a[0].toUpperCase() + a.slice(1),
                c = Ra.length;
            while (c--)
                if (a = Ra[c] + b, a in Sa) return a
        }

        function Ua(a, b, c) {
            var d = _.exec(b);
            return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
        }

        function Va(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + aa[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + aa[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + aa[f] + "Width", !0, e))) : (g += r.css(a, "padding" + aa[f], !0, e), "padding" !== c && (g += r.css(a, "border" + aa[f] + "Width", !0, e)));
            return g
        }

        function Wa(a, b, c) {
            var d, e = !0,
                f = La(a),
                g = "border-box" === r.css(a, "boxSizing", !1, f);
            if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
                if (d = Ma(a, b, f), (d < 0 || null == d) && (d = a.style[b]), Ka.test(d)) return d;
                e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0
            }
            return d + Va(a, b, c || (g ? "border" : "content"), e, f) + "px"
        }
        r.extend({
                cssHooks: {
                    opacity: {
                        get: function (a, b) {
                            if (b) {
                                var c = Ma(a, "opacity");
                                return "" === c ? "1" : c
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": "cssFloat"
                },
                style: function (a, b, c, d) {
                    if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                        var e, f, g, h = r.camelCase(b),
                            i = a.style;
                        return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = _.exec(c)) && e[1] && (c = da(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
                    }
                },
                css: function (a, b, c, d) {
                    var e, f, g, h = r.camelCase(b);
                    return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Ma(a, b, d)), "normal" === e && b in Qa && (e = Qa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
                }
            }), r.each(["height", "width"], function (a, b) {
                r.cssHooks[b] = {
                    get: function (a, c, d) {
                        if (c) return !Oa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Wa(a, b, d) : ca(a, Pa, function () {
                            return Wa(a, b, d)
                        })
                    },
                    set: function (a, c, d) {
                        var e, f = d && La(a),
                            g = d && Va(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                        return g && (e = _.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ua(a, c, g)
                    }
                }
            }), r.cssHooks.marginLeft = Na(o.reliableMarginLeft, function (a, b) {
                if (b) return (parseFloat(Ma(a, "marginLeft")) || a.getBoundingClientRect().left - ca(a, {
                    marginLeft: 0
                }, function () {
                    return a.getBoundingClientRect().left
                })) + "px"
            }), r.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (a, b) {
                r.cssHooks[a + b] = {
                    expand: function (c) {
                        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + aa[d] + b] = f[d] || f[d - 2] || f[0];
                        return e
                    }
                }, Ja.test(a) || (r.cssHooks[a + b].set = Ua)
            }), r.fn.extend({
                css: function (a, b) {
                    return S(this, function (a, b, c) {
                        var d, e, f = {},
                            g = 0;
                        if (r.isArray(b)) {
                            for (d = La(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
                            return f
                        }
                        return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
                    }, a, b, arguments.length > 1)
                }
            }), r.fn.delay = function (b, c) {
                return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function () {
                        a.clearTimeout(e)
                    }
                })
            },
            function () {
                var a = d.createElement("input"),
                    b = d.createElement("select"),
                    c = b.appendChild(d.createElement("option"));
                a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
            }();
        var Xa, Ya = r.expr.attrHandle;
        r.fn.extend({
            attr: function (a, b) {
                return S(this, r.attr, a, b, arguments.length > 1)
            },
            removeAttr: function (a) {
                return this.each(function () {
                    r.removeAttr(this, a)
                })
            }
        }), r.extend({
            attr: function (a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? Xa : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d))
            },
            attrHooks: {
                type: {
                    set: function (a, b) {
                        if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            },
            removeAttr: function (a, b) {
                var c, d = 0,
                    e = b && b.match(K);
                if (e && 1 === a.nodeType)
                    while (c = e[d++]) a.removeAttribute(c)
            }
        }), Xa = {
            set: function (a, b, c) {
                return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
            }
        }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
            var c = Ya[b] || r.find.attr;
            Ya[b] = function (a, b, d) {
                var e, f, g = b.toLowerCase();
                return d || (f = Ya[g], Ya[g] = e, e = null != c(a, b, d) ? g : null, Ya[g] = f), e
            }
        });
        var Za = /^(?:input|select|textarea|button)$/i,
            $a = /^(?:a|area)$/i;
        r.fn.extend({
            prop: function (a, b) {
                return S(this, r.prop, a, b, arguments.length > 1)
            },
            removeProp: function (a) {
                return this.each(function () {
                    delete this[r.propFix[a] || a]
                })
            }
        }), r.extend({
            prop: function (a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function (a) {
                        var b = r.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : Za.test(a.nodeName) || $a.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), o.optSelected || (r.propHooks.selected = {
            get: function (a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex, null
            },
            set: function (a) {
                var b = a.parentNode;
                b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
            }
        }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            r.propFix[this.toLowerCase()] = this
        });
        var _a = /[\t\r\n\f]/g;

        function ab(a) {
            return a.getAttribute && a.getAttribute("class") || ""
        }
        r.fn.extend({
            addClass: function (a) {
                var b, c, d, e, f, g, h, i = 0;
                if (r.isFunction(a)) return this.each(function (b) {
                    r(this).addClass(a.call(this, b, ab(this)))
                });
                if ("string" == typeof a && a) {
                    b = a.match(K) || [];
                    while (c = this[i++])
                        if (e = ab(c), d = 1 === c.nodeType && (" " + e + " ").replace(_a, " ")) {
                            g = 0;
                            while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                            h = r.trim(d), e !== h && c.setAttribute("class", h)
                        }
                }
                return this
            },
            removeClass: function (a) {
                var b, c, d, e, f, g, h, i = 0;
                if (r.isFunction(a)) return this.each(function (b) {
                    r(this).removeClass(a.call(this, b, ab(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof a && a) {
                    b = a.match(K) || [];
                    while (c = this[i++])
                        if (e = ab(c), d = 1 === c.nodeType && (" " + e + " ").replace(_a, " ")) {
                            g = 0;
                            while (f = b[g++])
                                while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                            h = r.trim(d), e !== h && c.setAttribute("class", h)
                        }
                }
                return this
            },
            toggleClass: function (a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
                    r(this).toggleClass(a.call(this, c, ab(this), b), b)
                }) : this.each(function () {
                    var b, d, e, f;
                    if ("string" === c) {
                        d = 0, e = r(this), f = a.match(K) || [];
                        while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                    } else void 0 !== a && "boolean" !== c || (b = ab(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""))
                })
            },
            hasClass: function (a) {
                var b, c, d = 0;
                b = " " + a + " ";
                while (c = this[d++])
                    if (1 === c.nodeType && (" " + ab(c) + " ").replace(_a, " ").indexOf(b) > -1) return !0;
                return !1
            }
        });
        var bb = /\r/g,
            cb = /[\x20\t\r\n\f]+/g;
        r.fn.extend({
            val: function (a) {
                var b, c, d, e = this[0]; {
                    if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
                            return null == a ? "" : a + ""
                        })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                    if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
                }
            }
        }), r.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = r.find.attr(a, "value");
                        return null != b ? b : r.trim(r.text(a)).replace(cb, " ")
                    }
                },
                select: {
                    get: function (a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++)
                            if (c = d[i], (c.selected || i === e) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                                if (b = r(c).val(), f) return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function (a, b) {
                        var c, d, e = a.options,
                            f = r.makeArray(b),
                            g = e.length;
                        while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                        return c || (a.selectedIndex = -1), f
                    }
                }
            }
        }), r.each(["radio", "checkbox"], function () {
            r.valHooks[this] = {
                set: function (a, b) {
                    if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1
                }
            }, o.checkOn || (r.valHooks[this].get = function (a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var db = /^(?:focusinfocus|focusoutblur)$/;
        r.extend(r.event, {
            trigger: function (b, c, e, f) {
                var g, h, i, j, k, m, n, o = [e || d],
                    p = l.call(b, "type") ? b.type : b,
                    q = l.call(b, "namespace") ? b.namespace.split(".") : [];
                if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !db.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                    if (!f && !n.noBubble && !r.isWindow(e)) {
                        for (j = n.delegateType || p, db.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                        i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                    }
                    g = 0;
                    while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                    return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
                }
            },
            simulate: function (a, b, c) {
                var d = r.extend(new r.Event, c, {
                    type: a,
                    isSimulated: !0
                });
                r.event.trigger(d, null, b)
            }
        }), r.fn.extend({
            trigger: function (a, b) {
                return this.each(function () {
                    r.event.trigger(a, b, this)
                })
            },
            triggerHandler: function (a, b) {
                var c = this[0];
                if (c) return r.event.trigger(a, b, c, !0)
            }
        }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
            r.fn[b] = function (a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), r.fn.extend({
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }), o.focusin = "onfocusin" in a, o.focusin || r.each({
            focus: "focusin",
            blur: "focusout"
        }, function (a, b) {
            var c = function (a) {
                r.event.simulate(b, a.target, r.event.fix(a))
            };
            r.event.special[b] = {
                setup: function () {
                    var d = this.ownerDocument || this,
                        e = V.access(d, b);
                    e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1)
                },
                teardown: function () {
                    var d = this.ownerDocument || this,
                        e = V.access(d, b) - 1;
                    e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b))
                }
            }
        });
        var eb = /\[\]$/,
            fb = /\r?\n/g,
            gb = /^(?:submit|button|image|reset|file)$/i,
            hb = /^(?:input|select|textarea|keygen)/i;

        function ib(a, b, c, d) {
            var e;
            if (r.isArray(b)) r.each(b, function (b, e) {
                c || eb.test(a) ? d(a, e) : ib(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== r.type(b)) d(a, b);
            else
                for (e in b) ib(a + "[" + e + "]", b[e], c, d)
        }
        r.param = function (a, b) {
            var c, d = [],
                e = function (a, b) {
                    var c = r.isFunction(b) ? b() : b;
                    d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
                };
            if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
                e(this.name, this.value)
            });
            else
                for (c in a) ib(c, a[c], b, e);
            return d.join("&")
        }, r.fn.extend({
            serialize: function () {
                return r.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var a = r.prop(this, "elements");
                    return a ? r.makeArray(a) : this
                }).filter(function () {
                    var a = this.type;
                    return this.name && !r(this).is(":disabled") && hb.test(this.nodeName) && !gb.test(a) && (this.checked || !ha.test(a))
                }).map(function (a, b) {
                    var c = r(this).val();
                    return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
                        return {
                            name: b.name,
                            value: a.replace(fb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(fb, "\r\n")
                    }
                }).get()
            }
        }), r.fn.extend({
            wrapAll: function (a) {
                var b;
                return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstElementChild) a = a.firstElementChild;
                    return a
                }).append(this)), this
            },
            wrapInner: function (a) {
                return r.isFunction(a) ? this.each(function (b) {
                    r(this).wrapInner(a.call(this, b))
                }) : this.each(function () {
                    var b = r(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function (a) {
                var b = r.isFunction(a);
                return this.each(function (c) {
                    r(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function (a) {
                return this.parent(a).not("body").each(function () {
                    r(this).replaceWith(this.childNodes)
                }), this
            }
        }), r.expr.pseudos.hidden = function (a) {
            return !r.expr.pseudos.visible(a)
        }, r.expr.pseudos.visible = function (a) {
            return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
        }, o.createHTMLDocument = function () {
            var a = d.implementation.createHTMLDocument("").body;
            return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
        }(), r.parseHTML = function (a, b, c) {
            if ("string" != typeof a) return [];
            "boolean" == typeof b && (c = b, b = !1);
            var e, f, g;
            return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = oa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
        };

        function jb(a) {
            return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
        }
        r.offset = {
            setOffset: function (a, b, c) {
                var d, e, f, g, h, i, j, k = r.css(a, "position"),
                    l = r(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, r.fn.extend({
            offset: function (a) {
                if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                    r.offset.setOffset(this, a, b)
                });
                var b, c, d, e, f = this[0];
                if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = jb(e), b = e.documentElement, {
                    top: d.top + c.pageYOffset - b.clientTop,
                    left: d.left + c.pageXOffset - b.clientLeft
                }) : d) : {
                    top: 0,
                    left: 0
                }
            },
            position: function () {
                if (this[0]) {
                    var a, b, c = this[0],
                        d = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = {
                        top: d.top + r.css(a[0], "borderTopWidth", !0),
                        left: d.left + r.css(a[0], "borderLeftWidth", !0)
                    }), {
                        top: b.top - d.top - r.css(c, "marginTop", !0),
                        left: b.left - d.left - r.css(c, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var a = this.offsetParent;
                    while (a && "static" === r.css(a, "position")) a = a.offsetParent;
                    return a || pa
                })
            }
        }), r.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (a, b) {
            var c = "pageYOffset" === b;
            r.fn[a] = function (d) {
                return S(this, function (a, d, e) {
                    var f = jb(a);
                    return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
                }, a, d, arguments.length)
            }
        }), r.each(["top", "left"], function (a, b) {
            r.cssHooks[b] = Na(o.pixelPosition, function (a, c) {
                if (c) return c = Ma(a, b), Ka.test(c) ? r(a).position()[b] + "px" : c
            })
        }), r.each({
            Height: "height",
            Width: "width"
        }, function (a, b) {
            r.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function (c, d) {
                r.fn[d] = function (e, f) {
                    var g = arguments.length && (c || "boolean" != typeof e),
                        h = c || (e === !0 || f === !0 ? "margin" : "border");
                    return S(this, function (b, c, e) {
                        var f;
                        return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
                    }, b, g ? e : void 0, g)
                }
            })
        }), "function" == typeof define && define.amd && define("jquery", [], function () {
            return r
        });
        var kb = a.jQuery,
            lb = a.$;
        return r.noConflict = function (b) {
            return a.$ === r && (a.$ = lb), b && a.jQuery === r && (a.jQuery = kb), r
        }, b || (a.jQuery = a.$ = r), r
    });
    ! function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
    }(function (a) {
        function b(b) {
            var g = b || window.event,
                h = i.call(arguments, 1),
                j = 0,
                l = 0,
                m = 0,
                n = 0,
                o = 0,
                p = 0;
            if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
                if (1 === g.deltaMode) {
                    var q = a.data(this, "mousewheel-line-height");
                    j *= q, m *= q, l *= q
                } else if (2 === g.deltaMode) {
                    var r = a.data(this, "mousewheel-page-height");
                    j *= r, m *= r, l *= r
                }
                if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                    var s = this.getBoundingClientRect();
                    o = b.clientX - s.left, p = b.clientY - s.top
                }
                return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
            }
        }

        function c() {
            f = null
        }

        function d(a, b) {
            return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
        }
        var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            i = Array.prototype.slice;
        if (a.event.fixHooks)
            for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
        var k = a.event.special.mousewheel = {
            version: "3.1.12",
            setup: function () {
                if (this.addEventListener)
                    for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
                else this.onmousewheel = b;
                a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
            },
            teardown: function () {
                if (this.removeEventListener)
                    for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
                else this.onmousewheel = null;
                a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function (b) {
                var c = a(b),
                    d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
            },
            getPageHeight: function (b) {
                return a(b).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        a.fn.extend({
            mousewheel: function (a) {
                return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
            },
            unmousewheel: function (a) {
                return this.unbind("mousewheel", a)
            }
        })
    });
    "use strict";

    function createCommonjsModule(e, t) {
        return t = {
            exports: {}
        }, e(t, t.exports), t.exports
    }
    var index = createCommonjsModule(function (e) {
            var t = {};
            e.exports = t, t.Merom = function (e, i, n, o, r, s, a) {
                this.prop = i, this.start = n, this.end = o, this.el = t.Selector.el(e), this.elL = this.el.length, t.Is.object(r) ? (this.duration = 0, this.ease = "linear", this.opts = r) : (this.duration = r || 0, this.ease = s || "linear", this.opts = a || !1), this.noMultiT = !t.Is.array(this.prop), this.updateQty = this.prop.length, this.update = this.noMultiT ? this.singleUp() : this.multiT, this.deltaTimeAtPause = 0, this.easePack = t.EasePack, this.raf = new t.RafIndex, this.delaysInit(), t.BindMaker(this, ["getRaf", "loop"])
            }, t.Merom.prototype = {
                play: function () {
                    var e = this;
                    t.Delay(function () {
                        e.isPaused = !1, e.getRaf()
                    }, e.delay)
                },
                pause: function (e) {
                    "on" === e ? (this.isPaused = !0, this.deltaTimeSave = this.deltaTime) : (this.deltaTimeAtPause = this.deltaTimeSave, this.delay = 0, this.play())
                },
                reverse: function (e, i, n) {
                    this.pause("on"), t.Is.object(e) ? this.opts = e : (this.duration = e || this.duration, this.ease = i || this.ease, this.opts = n || !1), this.getReset()
                },
                reset: function (e) {
                    this.pause("on"), this.duration = 0, this.ease = "linear", this.opts = e || !1, this.getReset()
                },
                getRaf: function () {
                    this.startTime = t.Win.perfNow, this.raf.start(this.loop)
                },
                loop: function () {
                    if (!this.isPaused) {
                        var e = t.Win.perfNow;
                        this.deltaTime = e - this.startTime + this.deltaTimeAtPause;
                        var i = Math.min(this.deltaTime / this.duration, 1),
                            n = this.easePack[this.ease](i);
                        if (this.noMultiT) this.value = t.Lerp.init(+this.start, +this.end, n);
                        else {
                            this.value = [];
                            for (var o = 0; o < this.updateQty; o++) this.value[o] = t.Lerp.init(+this.start[o], +this.end[o], n)
                        }
                        this.update(this.value), i < 1 ? this.raf.start(this.loop) : (this.raf.cancel(), this.update(this.end), this.opts.callback && t.Delay(this.opts.callback, this.callbackDelay))
                    }
                },
                singleUp: function () {
                    switch (this.prop) {
                        case "3dx":
                        case "3dy":
                        case "scale":
                        case "rotate":
                        case "rotateX":
                        case "rotateY":
                            return this.singleT;
                        case "scrollTop":
                            return this.setScrollTop;
                        default:
                            return this.setStyle
                    }
                },
                multiT: function (e) {
                    for (var t = 0, i = 0, n = "", o = "", r = 0; r < this.updateQty; r++) "3dx" === this.prop[r] ? t = e[r] + this.t3dUnit(this.start[r]) : "3dy" === this.prop[r] ? i = e[r] + this.t3dUnit(this.start[r]) : "rotate" === this.prop[r].substring(0, 6) ? n = this.prop[r] + "(" + e[r] + "deg)" : "scale" === this.prop[r] && (o = "scale(" + e[r] + ")");
                    var s = "translate3d(" + t + "," + i + ",0)",
                        a = s + " " + n + " " + o;
                    this.updateDom("t", a)
                },
                singleT: function (e) {
                    var t;
                    if ("3dx" === this.prop || "3dy" === this.prop) {
                        var i = e + this.t3dUnit(this.start);
                        t = "translate3d(" + ("3dx" === this.prop ? i + ",0" : "0," + i) + ",0)"
                    } else t = "rotate" === this.prop.substring(0, 6) ? this.prop + "(" + e + "deg)" : "scale(" + e + ")";
                    this.updateDom("t", t)
                },
                setScrollTop: function (e) {
                    this.el[0][this.prop] = e, this.opts.during && this.opts.during(e)
                },
                setStyle: function (e) {
                    this.updateDom(this.prop, e)
                },
                updateDom: function (e, t) {
                    for (var i = 0; i < this.elL; i++) "t" === e ? (this.el[i].style.webkitTransform = t, this.el[i].style.transform = t) : "x" === e || "y" === e || "r" === e ? this.el[i].setAttribute(e, t) : this.el[i].style[e] = t
                },
                delaysInit: function () {
                    this.delay = this.opts.delay || 0, this.callbackDelay = this.opts.callbackDelay || 0
                },
                getReset: function () {
                    this.end = this.start, this.start = t.Is.string(this.start) ? String(this.value) : this.value, this.delaysInit(), this.play()
                },
                t3dUnit: function (e) {
                    return t.Is.string(e) ? "px" : "%"
                }
            }, t.AnimatedLine = function (e) {
                this.shape = t.Selector.el(e), this.shapeL = this.shape.length, this.merom = []
            }, t.AnimatedLine.prototype = {
                play: function (e, t, i) {
                    this.type = "play", this.run(e, t, i)
                },
                reverse: function (e, t, i) {
                    this.type = "reverse", this.run(e, t, i)
                },
                run: function (e, t, i) {
                    this.duration = e, this.ease = t, this.callback = i;
                    for (var n = 0; n < this.shapeL; n++) this.animationLine(this.shape[n], n)
                },
                pause: function (e) {
                    for (var t = 0; t < this.shapeL; t++) this.merom[t].pause(e)
                },
                reset: function () {
                    for (var e = 0; e < this.shapeL; e++) this.shape[e].style = ""
                },
                animationLine: function (e, i) {
                    var n, o, r = this.getShapeLength(e);
                    if ("reverse" === this.type) {
                        var s = e.style.strokeDashoffset;
                        n = "x" === s.charAt(s.length - 1) ? +s.substring(0, s.length - 2) : +s, o = r
                    } else n = r, o = 0;
                    e.style.strokeDasharray = r, e.style.opacity = 1, this.merom[i] = new t.Merom(e, "strokeDashoffset", n, o, this.duration, this.ease, {
                        callback: this.callback
                    }), this.merom[i].play()
                },
                getShapeLength: function (e) {
                    var t;
                    if ("circle" === e.tagName) {
                        t = 2 * e.getAttribute("r") * Math.PI
                    } else t = e.getTotalLength();
                    return t
                }
            }, t.Morph = function (e) {
                var e = e;
                this.type = "polygon" === e.type ? "points" : "d", this.el = e.element, this.newCoords = e.newCoords, this.duration = e.duration, this.ease = e.ease, this.delay = e.delay, this.callbackDelay = e.callbackDelay, this.callback = e.callback, this.coordsStart = this.getCoordsArr(this.el.getAttribute(this.type)), this.coordsEnd = this.getCoordsArr(this.newCoords), this.easePack = t.EasePack, this.raf = new t.RafIndex, t.BindMaker(this, ["getRaf", "loop"])
            }, t.Morph.prototype = {
                play: function () {
                    var e = this.delay ? this.delay : 0;
                    t.Delay(this.getRaf, e)
                },
                pause: function () {
                    this.isPaused = !0
                },
                getRaf: function () {
                    this.startTime = t.Win.perfNow, this.raf.start(this.loop)
                },
                loop: function () {
                    if (!this.isPaused) {
                        for (var e = t.Win.perfNow, i = e - this.startTime, n = Math.min(i / this.duration, 1), o = this.easePack[this.ease](n), r = [], s = [], a = "", l = 0; l < this.coordsStart.length; l++) r[l] = this.isLetter(this.coordsStart[l]), s[l] = r[l] ? this.coordsStart[l] : t.Lerp.init(+this.coordsStart[l], +this.coordsEnd[l], o), a += s[l] + " ";
                        this.el.setAttribute(this.type, a.trim()), n < 1 ? this.raf.start(this.loop) : (this.raf.cancel(), this.el.setAttribute(this.type, this.newCoords), this.getCallback())
                    }
                },
                getCoordsArr: function (e) {
                    for (var t = e.split(" "), i = [], n = 0; n < t.length; n++)
                        for (var o = t[n].split(","), r = 0; r < o.length; r++) i.push(o[r]);
                    return i
                },
                isLetter: function (e) {
                    return "M" === e || "L" === e || "C" === e || "Z" === e
                },
                getCallback: function () {
                    if (this.callback) {
                        var e = this.callbackDelay ? this.callbackDelay : 0;
                        t.Delay(this.callback, e)
                    }
                }
            }, t.Timeline = function () {
                this.content = [], this.contentL = function () {
                    return this.content.length
                }
            }, t.Timeline.prototype = {
                from: function (e, i, n, o, r, s, a) {
                    if (this.contentL() > 0) {
                        var a = a || {},
                            l = this.content[this.contentL() - 1].delay,
                            h = r && t.Is.object(r);
                        h && r.delay ? r.delay = l + r.delay : h ? r.delay = l : a.delay ? a.delay = l + a.delay : a.delay = l
                    }
                    this.content.push(new t.Merom(e, i, n, o, r, s, a))
                },
                play: function () {
                    for (var e = 0; e < this.contentL(); e++) this.content[e].play()
                },
                pause: function (e) {
                    for (var t = 0; t < this.contentL(); t++) this.content[t].pause(e)
                },
                reverse: function () {
                    for (var e = 0; e < this.contentL(); e++) this.content[e].reverse()
                },
                reset: function (e) {
                    for (var t = 0; t < this.contentL(); t++) this.content[t].reset(e)
                }
            }, t.BindMaker = function (e, t) {
                for (var i = t.length, n = 0; n < i; n++) e[t[n]] = e[t[n]].bind(e)
            }, t.Delay = function (e, t) {
                window.setTimeout(function () {
                    e()
                }, t)
            };
            var i = {
                s: 1.70158,
                q: 2.25,
                r: 1.525,
                u: .984375,
                v: 7.5625,
                w: .9375,
                x: 2.75,
                y: 2.625,
                z: .75
            };
            t.EasePack = {
                linear: function (e) {
                    return e
                },
                Power1In: function (e) {
                    return 1 - Math.cos(e * (Math.PI / 2))
                },
                Power1Out: function (e) {
                    return Math.sin(e * (Math.PI / 2))
                },
                Power1InOut: function (e) {
                    return -.5 * (Math.cos(Math.PI * e) - 1)
                },
                Power2In: function (e) {
                    return e * e
                },
                Power2Out: function (e) {
                    return e * (2 - e)
                },
                Power2InOut: function (e) {
                    return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
                },
                Power3In: function (e) {
                    return e * e * e
                },
                Power3Out: function (e) {
                    return --e * e * e + 1
                },
                Power3InOut: function (e) {
                    return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
                },
                Power4In: function (e) {
                    return e * e * e * e
                },
                Power4Out: function (e) {
                    return 1 - --e * e * e * e
                },
                Power4InOut: function (e) {
                    return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
                },
                Power5In: function (e) {
                    return e * e * e * e * e
                },
                Power5Out: function (e) {
                    return 1 + --e * e * e * e * e
                },
                Power5InOut: function (e) {
                    return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
                },
                ExpoIn: function (e) {
                    return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
                },
                ExpoOut: function (e) {
                    return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                },
                ExpoInOut: function (e) {
                    return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
                },
                CircIn: function (e) {
                    return -(Math.sqrt(1 - e * e) - 1)
                },
                CircOut: function (e) {
                    return Math.sqrt(1 - Math.pow(e - 1, 2))
                },
                CircInOut: function (e) {
                    return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                },
                BackIn: function (e) {
                    return e * e * ((i.s + 1) * e - i.s)
                },
                BackOut: function (e) {
                    return (e -= 1) * e * ((i.s + 1) * e + i.s) + 1
                },
                BackInOut: function (e) {
                    return (e /= .5) < 1 ? e * e * ((1 + (i.s *= i.r)) * e - i.s) * .5 : .5 * ((e -= 2) * e * ((1 + (i.s *= i.r)) * e + i.s) + 2)
                },
                Elastic: function (e) {
                    return -1 * Math.pow(4, -8 * e) * Math.sin((6 * e - 1) * (2 * Math.PI) / 2) + 1
                },
                SwingFromTo: function (e) {
                    return (e /= .5) < 1 ? e * e * ((1 + (i.s *= i.r)) * e - i.s) * .5 : .5 * ((e -= 2) * e * ((1 + (i.s *= i.r)) * e + i.s) + 2)
                },
                SwingFrom: function (e) {
                    return e * e * ((i.s + 1) * e - i.s)
                },
                SwingTo: function (e) {
                    return (e -= 1) * e * ((i.s + 1) * e + i.s) + 1
                },
                Bounce: function (e) {
                    return e < 1 / i.x ? i.v * e * e : e < 2 / i.x ? i.v * (e -= 1.5 / i.x) * e + i.z : e < 2.5 / i.x ? i.v * (e -= i.q / i.x) * e + i.w : i.v * (e -= i.y / i.x) * e + i.u
                },
                BouncePast: function (e) {
                    return e < 1 / i.x ? i.v * e * e : e < 2 / i.x ? 2 - (i.v * (e -= 1.5 / i.x) * e + i.z) : e < 2.5 / i.x ? 2 - (i.v * (e -= i.q / i.x) * e + i.w) : 2 - (i.v * (e -= i.y / i.x) * e + i.u)
                }
            }, t.Is = function () {
                return {
                    string: function (e) {
                        return "string" == typeof e
                    },
                    object: function (e) {
                        return e === Object(e)
                    },
                    array: function (e) {
                        return e.constructor === Array
                    }
                }
            }(), t.Lerp = {
                init: function (e, t, i) {
                    return e + (t - e) * i
                },
                extend: function (e, t, i, n, o) {
                    return n + (o - n) / (i - t) * (e - 1)
                }
            }, t.Sniffer = {
                uA: navigator.userAgent.toLowerCase(),
                get isAndroid() {
                    var e = /android.*mobile/.test(this.uA);
                    return e || !e && /android/i.test(this.uA)
                },
                get isFirefox() {
                    return this.uA.indexOf("firefox") > -1
                },
                get safari() {
                    return this.uA.match(/version\/[\d\.]+.*safari/)
                },
                get isSafari() {
                    return !!this.safari && !this.isAndroid
                },
                get isSafariOlderThan8() {
                    var e = 8;
                    if (this.isSafari) {
                        e = +this.safari[0].match(/version\/\d{1,2}/)[0].split("/")[1]
                    }
                    return e < 8
                },
                get isIEolderThan11() {
                    return this.uA.indexOf("msie") > -1
                },
                get isIE11() {
                    return navigator.appVersion.indexOf("Trident/") > 0
                },
                get isIE() {
                    return this.isIEolderThan11 || this.isIE11
                },
                get isTouch() {
                    return "ontouchend" in window
                },
                get isPageError() {
                    for (var e = t.Geb.tag("meta"), i = e.length, n = !1, o = 0; o < i; o++)
                        if ("error" === e[o].name) {
                            n = !0;
                            break
                        }
                    return n
                }
            }, t.Throttle = function (e) {
                this.timeout = !1, this.timer = 0, this.opts = e, t.BindMaker(this, ["atEndController"])
            }, t.Throttle.prototype = {
                init: function () {
                    this.startTime = t.Win.perfNow, this.timeout || (this.timeout = !0, t.Delay(this.atEndController, this.opts.delay))
                },
                atEndController: function () {
                    t.Win.perfNow - this.startTime < this.opts.delay ? (this.timer = t.Delay(this.atEndController, this.opts.delay), this.opts.atEnd || this.opts.callback()) : (clearTimeout(this.timer), this.timeout = !1, this.opts.callback())
                }
            }, t.Geb = function () {
                var e = document;
                return {
                    id: function (t) {
                        return e.getElementById(t)
                    },
                    class: function (t) {
                        return e.getElementsByClassName(t)
                    },
                    tag: function (t) {
                        return e.getElementsByTagName(t)
                    }
                }
            }(), t.Dom = {
                html: document.documentElement,
                body: document.body
            }, t.Selector = function () {
                return {
                    el: function (e) {
                        var i = [];
                        if (t.Is.string(e)) {
                            var n = e.substring(1);
                            "#" === e.charAt(0) ? i[0] = t.Geb.id(n) : i = t.Geb.class(n)
                        } else i[0] = e;
                        return i
                    },
                    type: function (e) {
                        return "#" === e.charAt(0) ? "id" : "class"
                    },
                    name: function (e) {
                        return e.substring(1)
                    }
                }
            }(), t.MM = function (e) {
                this.callback = e, this.posX = 0, this.posY = 0, this.rafTicking = new t.RafTicking, t.BindMaker(this, ["getRAF", "run"])
            }, t.MM.prototype = {
                on: function () {
                    this.listeners("add")
                },
                off: function () {
                    this.listeners("remove")
                },
                listeners: function (e) {
                    t.Listen(document, e, "mousemove", this.getRAF)
                },
                getRAF: function (e) {
                    this.event = e, this.rafTicking.start(this.run)
                },
                run: function () {
                    this.posX = this.event.pageX, this.posY = this.event.pageY, this.callback(this.posX, this.posY)
                }
            }, t.RO = function (e) {
                this.opts = e, this.isTouch = t.Sniffer.isTouch, t.BindMaker(this, ["getThrottle", "getRAF"]), this.throttle = new t.Throttle({
                    callback: this.getRAF,
                    delay: this.opts.throttle.delay,
                    atEnd: this.opts.throttle.atEnd
                }), this.rafTicking = new t.RafTicking
            }, t.RO.prototype = {
                on: function () {
                    this.listeners("add")
                },
                off: function () {
                    this.listeners("remove")
                },
                listeners: function (e) {
                    this.isTouch ? t.Listen(window, e, "orientationchange", this.getThrottle) : t.Listen(window, e, "resize", this.getThrottle)
                },
                getThrottle: function () {
                    this.throttle.init()
                },
                getRAF: function () {
                    this.rafTicking.start(this.opts.callback)
                }
            }, t.Scroll = function (e) {
                this.opts = e, t.BindMaker(this, ["getThrottle", "getRAF", "run"]), this.throttle = new t.Throttle({
                    callback: this.getRAF,
                    delay: this.opts.throttle.delay,
                    atEnd: this.opts.throttle.atEnd
                }), this.rafTicking = new t.RafTicking
            }, t.Scroll.prototype = {
                on: function () {
                    this.startScrollY = t.Win.pageY, this.listeners("add")
                },
                off: function () {
                    this.listeners("remove")
                },
                listeners: function (e) {
                    t.Listen(window, e, "scroll", this.getThrottle)
                },
                getThrottle: function () {
                    this.throttle.init()
                },
                getRAF: function () {
                    this.rafTicking.start(this.run)
                },
                run: function () {
                    var e = window.pageYOffset,
                        t = -(e - this.startScrollY);
                    this.startScrollY = e, this.opts.callback(e, t)
                }
            }, t.WTDisable = function () {
                function e(e) {
                    var n = t.Sniffer.isTouch,
                        o = document;
                    n ? t.Listen(o, e, "touchmove", i) : t.Listen(o, e, "mouseWheel", i)
                }

                function i(e) {
                    e.preventDefault()
                }
                return {
                    on: function () {
                        e("add")
                    },
                    off: function () {
                        e("remove")
                    }
                }
            }(), t.WT = function (e) {
                this.callback = e, this.isTouch = t.Sniffer.isTouch, this.rafTicking = new t.RafTicking, t.BindMaker(this, ["touchStart", "getRAF", "run"])
            }, t.WT.prototype = {
                on: function () {
                    t.WTDisable.off(), this.listeners("add")
                },
                off: function () {
                    t.WTDisable.on(), this.listeners("remove")
                },
                listeners: function (e) {
                    var i = document;
                    this.isTouch ? (t.Listen(i, e, "touchstart", this.touchStart), t.Listen(i, e, "touchmove", this.getRAF)) : t.Listen(i, e, "mouseWheel", this.getRAF)
                },
                getRAF: function (e) {
                    e.preventDefault(), this.event = e, this.rafTicking.start(this.run)
                },
                run: function () {
                    var e = this.event.type;
                    "wheel" === e ? this.onWheel() : "mousewheel" === e ? this.onMouseWheel() : "touchmove" === e && this.touchMove()
                },
                onWheel: function () {
                    this.type = "scroll", this.delta = this.event.wheelDeltaY || -1 * this.event.deltaY, t.Sniffer.isFirefox && 1 === this.event.deltaMode && (this.delta *= 40), this.getCallback()
                },
                onMouseWheel: function () {
                    this.type = "scroll", this.delta = this.event.wheelDeltaY ? this.event.wheelDeltaY : this.event.wheelDelta, this.getCallback()
                },
                touchStart: function (e) {
                    this.start = e.targetTouches[0].pageY
                },
                touchMove: function () {
                    this.type = "touch", this.delta = this.event.targetTouches[0].pageY - this.start, this.getCallback()
                },
                getCallback: function () {
                    this.callback(this.delta, this.type, this.event)
                }
            }, t.Listen = function (e, i, n, o) {
                var r, s = document,
                    a = t.Selector.el(e),
                    l = a.length;
                r = "mouseWheel" === n ? "onwheel" in s ? "wheel" : void 0 !== s.onmousewheel ? "mousewheel" : "DOMMouseScroll" : "focusOut" === n ? t.Sniffer.isFirefox ? "blur" : "focusout" : n;
                for (var h = 0; h < l; h++) a[h][i + "EventListener"](r, o)
            }, t.Raf = function (e) {
                window.requestAnimationFrame(e)
            }, t.RafIndex = function () {
                this.start = function (e) {
                    this.rafCallback = t.Raf(e)
                }, this.cancel = function () {
                    window.cancelAnimationFrame(this.rafCallback)
                }
            }, t.RafTicking = function () {
                this.ticking = !1, this.rafIndex = new t.RafIndex, t.BindMaker(this, ["getCallback"])
            }, t.RafTicking.prototype = {
                start: function (e) {
                    this.callback = e, this.ticking || (this.ticking = !0, this.rafIndex.start(this.getCallback))
                },
                getCallback: function () {
                    this.callback(), this.destroy()
                },
                destroy: function () {
                    this.rafIndex.cancel(), this.ticking = !1
                }
            }, t.ScrollToTop = function (e) {
                var i = e,
                    n = t.Win.pageY,
                    o = {
                        destination: 0,
                        duration: function () {
                            var e = t.Lerp.init(300, 1500, n / i.totalHeight);
                            return 0 === n ? 0 : e
                        }(),
                        ease: function () {
                            return n <= 2500 ? "Power" + Math.ceil(n / 500) + "InOut" : "ExpoInOut"
                        }(),
                        during: i.during,
                        callback: i.callback
                    };
                t.ScrollTo(o)
            }, t.ScrollTo = function (e) {
                function i() {
                    t.WTDisable.off(), n.callback && n.callback()
                }
                var n = e,
                    o = t.Sniffer.isFirefox || t.Sniffer.isIE ? document.documentElement : document.scrollingElement ? document.scrollingElement : t.Dom.body,
                    r = t.Win.pageY,
                    s = new t.Merom(o, "scrollTop", r, n.destination, n.duration, n.ease, {
                        callback: i,
                        during: n.during
                    });
                n.destination === r ? i() : (t.WTDisable.on(), s.play())
            }, t.ScrollZero = function () {
                window.scrollTo(0, 0)
            }, t.TopWhenRefresh = function () {
                window.onbeforeunload = function () {
                    window.scrollTo(0, 0)
                }
            }, t.Win = {
                get w() {
                    return window.innerWidth
                },
                get h() {
                    return window.innerHeight
                },
                get path() {
                    return window.location.pathname
                },
                get hostname() {
                    return window.location.hostname
                },
                get href() {
                    return window.location.href
                },
                get perfNow() {
                    return window.performance.now()
                },
                get pageY() {
                    return window.pageYOffset
                }
            }
        }),
        classCallCheck = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        createClass = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(),
        Support = function () {
            function e() {
                classCallCheck(this, e)
            }
            return createClass(e, null, [{
                key: "init",
                value: function () {
                    (index.Sniffer.isIEolderThan11 || index.Sniffer.isSafariOlderThan8) && (index.Dom.html.className = "old-browser"), index.Sniffer.isTouch || (index.Dom.body.className = "no-touch")
                }
            }]), e
        }(),
        Xhr = function () {
            function e() {
                classCallCheck(this, e)
            }
            return createClass(e, null, [{
                key: "controller",
                value: function (e, t, i) {
                    function n() {
                        var t = "home" === e ? "/" : e;
                        history.pushState({
                            key: "value"
                        }, "titre", t)
                    }
                    var o = "index.php?url=" + e + "&xhr=true",
                        r = new XMLHttpRequest;
                    r.open("GET", o, !0), r.onreadystatechange = function (e) {
                        if (4 === r.readyState && 200 === r.status) {
                            var o = JSON.parse(r.responseText).xhrController;
                            index.Geb.tag("title")[0].textContent = o.title, n(), t(o.view, i)
                        }
                    }, r.send(null)
                }
            }, {
                key: "onPopstate",
                value: function (e, t, i) {
                    function n() {
                        index.Delay(function (e) {
                            a = !1
                        }, 0)
                    }

                    function o(e) {
                        a && "complete" === r.readyState && (e.preventDefault(), e.stopImmediatePropagation())
                    }
                    var r = document,
                        s = window,
                        a = "complete" !== r.readyState;
                    index.Listen(s, "add", "load", n), index.Listen(s, "add", "popstate", o), s.onpopstate = function (e) {
                        s.location.href = index.Win.path
                    }
                }
            }]), e
        }(),
        Coords = {
            step4: {
                j: "109,148.9 109,146.1 109,143.8 109,141.3 109,139 109,137.1 109,134.8 109,132.7 109,130.3 109,128.3 109,126.6 109,124.2 109,118.2 109,110.5 109,100.8 109,90.8 109,79.8 109,71.8 109,60.8 109,51.1 109,42 109,35.5 109,29 109,22.9 109,19.4 109,16 109,13.5 109,10.1 109,7.6 109,6.5 109,5.9 106,5.9 106,7.3 106,10.2 106,13.6 106,17.5 106,22.2 106,28.7 106,32.6 106,41.9 106,49.1 106,58.8 106,69.7 106,82 106,91.8 106,102.7 106,115.2 106,124.4 106,132.8 106,142.7 106,149.8 79.2,155.3 79.2,165.8 79.2,175.3 79.2,183.8 79.2,191.8 79.2,198 79.2,204.9 79.1,211.1 79,215.9 78.9,220.2 78.7,224 78.5,227.5 78.4,230.8 78.1,233.5 77.7,237.2 77.3,240.2 76.9,242.8 76.3,245.8 75.4,249.7 74.2,253.8 72.5,258.1 70.4,261.7 68.1,264.3 66.3,265.6 64.4,266.4 60.5,267.1 56.4,266.8 53.4,265.7 50.7,263.9 48.3,261.4 45.9,258.2 44.5,255.2 43.9,251.7 43.9,248.6 44.3,245.8 45,243.3 47,239.8 51,235.4 54.1,232.3 56.9,228.7 59.2,224.3 60.7,219.4 61.4,214.3 61.3,209.5 60.4,204.3 58.6,199.3 55.9,194.9 52.9,191.3 48.9,187.7 44.4,185 40,183.3 35.2,182.3 31.1,182.1 27.5,182.2 23.1,182.9 19.4,184 15.7,185.8 12.4,188 8.4,191.7 5,196.1 2.1,201.9 0.5,208.7 0.5,216.2 1.8,223.8 4.3,231.3 7.5,237.5 12.5,244.6 18.2,250.5 24.5,255.6 31.9,260.2 38.6,263.4 46.3,266.1 55.5,268.3 63,269.2 69.3,269.5 75.3,269.4 81.3,269 85.4,268 89.4,267 93.6,265.7 98,264 103.4,261.4 108,258.9 113.6,255 117.9,251.4 122,247.5 125.6,243.4 129,238.9 131.2,235.7 133.8,231.1 136.2,225.9 138.1,220.5 139.4,214.8 140,209.7 140.1,203.8 140.1,194.8 140.1,186 140.1,177 140.1,166.2 140.1,153 140.1,141.3 140.1,125.5 140.1,108.8 140.1,94.8 140.1,78.2 140.1,59.7 140.1,39.8 140.1,21.7 140.1,11.8 140.5,9.7 141.2,8.1 142.7,6.1 144.7,4.5 147.4,3.6 149.6,3.4 149.6,1 140.3,1 131.4,1 123.4,1 116.3,1 109,1 100.1,1 93.3,1 85.8,1 80.3,1 75.6,1 71.3,1 69.6,1 69.6,3.4 73.3,4 75.5,5.1 76.9,6.4 78.2,8.5 78.9,10.5 79.2,14.4 79.2,23.9 79.2,35.8 79.2,46.4 79.2,56 79.2,64 79.2,74.1 79.2,84.6 79.2,92.8 79.2,100.4 79.2,107.3 79.2,114.6 79.2,121.1 79.2,128.9 79.2,135.9 79.2,142.8 79.2,151.1 79.2,160 84.7,160 91.9,160 98.8,160 103.6,160 109,160 109,156.1 109,153.8 109,151.7",
                e: "225.4,186.5 236.6,186.5 248.8,186.5 262.3,186.5 275.8,186.5 286,186.5 298.3,186.5 313,186.5 326,186.5 336.2,186.5 340.5,186.5 339.7,177.3 337.3,168.1 334,160.1 330,152.9 324,144.7 317.7,137.9 310.5,131.8 302.4,126.2 293.5,121.3 283.8,117.2 273.2,114.2 264.4,112.7 256.2,112 245.8,112.2 237.2,113.1 227.6,115.2 218.2,118.4 210.2,122.2 199.3,129.2 190.5,136.8 182.4,146.3 174,160.8 168.7,175 165.4,191.2 164.4,206.4 165.3,220.9 167.8,234.4 172.3,248.1 179.3,261.9 187.1,272.4 195.6,280.9 205.2,288 213.5,292.7 223.9,296.9 234.2,299.5 246.2,301 257.2,301.2 265,300.5 272.8,299.4 280.3,297.7 286.5,295.9 293.4,293.3 299.5,290.4 305.6,286.8 310.2,283.5 315,279.4 319.5,274.7 323,270.1 326.2,264.8 328.4,259.2 329.6,253.5 329.9,247.7 329.3,242.3 327.4,236.8 324.7,232.4 320.9,228 317.2,224.8 314.3,222.9 310.6,221 306.6,219.6 300.7,218.5 295.1,218.5 290.1,219.1 284.6,220.8 280.2,223 276.3,225.9 272.7,229.3 270,232.8 267.6,237.2 266.3,241.3 265.6,245.2 265.4,249.8 266,254.8 267.6,260 270.3,265.2 273.7,269.4 278,273.9 281.6,277.7 282.8,279.6 283.4,281.7 283.5,283.3 283.3,286 282.4,288.5 280.8,291.1 278.4,293.4 275.5,295.2 270.6,296.9 265.7,298.1 260.3,298.7 255.4,298.6 250.3,297.7 246.6,296.5 242.2,294.3 238.6,291.3 235.5,287.4 232.6,282.2 229.9,275.1 227.9,266.4 226.5,256.3 225.7,246.3 225.4,235 225.4,217.2 225.4,193.7 225.4,181.2 225.5,172.2 225.9,162.4 226.7,153.2 227.9,145 229.3,138.7 230.9,133.6 232.8,129.1 235.2,125 238,121.4 241.4,118.2 243.8,116.6 245.4,115.9 247.6,115.1 250,114.6 252.1,114.5 254.5,114.5 256.6,114.9 259.1,115.8 261.7,117.4 265.4,120.5 269.9,126.2 273.3,132.8 276.3,142.2 277.8,150.2 278.7,158.3 279.2,166 279.4,172.4 279.5,178.4 279.5,184.1 275.8,184.1 261.8,184.1 248.7,184.1 236.6,184.1 225.4,184.1 222,184.1 222,186.5",
                n: "28.7,287.4 28.7,289.9 30.2,290 31.9,290.3 33.5,290.9 35,292 36.4,293.5 37.3,295 37.9,296.8 38.2,298.9 38.2,301.7 38.2,309.8 38.2,321.6 38.2,335.2 38.2,347.7 38.2,366.2 38.2,385 38.2,402 38.2,421.5 38.2,440.8 38.2,457.7 38.1,465.6 37.8,467.7 36.8,469.8 35.6,471.4 34.5,472.2 32.8,473.4 31.1,473.9 28.7,474.1 28.7,476.6 38.8,476.6 46.8,476.6 56,476.6 64,476.6 71.6,476.6 78.5,476.6 84.5,476.6 90.8,476.6 98.3,476.6 106.3,476.6 108.6,476.6 108.6,474.1 107.6,474.1 106.1,473.8 104.6,473.3 103.1,472.5 101.8,471.5 100.8,470.3 99.9,468.7 99.4,467.3 99.2,465.7 99.1,463.3 99.1,453.3 99.1,440.5 99.1,428.2 99.1,404 99.1,372.7 99.1,354 99.1,335.7 99.1,320.7 99,316.1 98.8,312.8 98.4,310 98.2,308.2 98,306.9 100.6,305.4 103.3,304 106.6,302.6 109.7,301.4 113.3,300.4 115.7,300 118.3,299.8 121.7,299.9 125.4,300.7 128.5,302.1 130.8,303.7 133,306 135.2,309.1 136.8,312.6 137.8,316.3 138.6,321.3 138.9,327.2 138.9,336.5 138.9,350.5 138.9,364.8 138.9,379.5 138.9,401.8 138.9,417.2 138.9,434.2 138.9,446.9 138.9,457.8 138.9,464.6 138.6,467.1 137.9,469.1 136.5,471.1 134.9,472.5 133.1,473.5 131.5,473.9 129.4,474.1 129.4,476.6 137.2,476.6 144.5,476.6 151.5,476.6 159.2,476.6 164.4,476.6 170.8,476.6 176.8,476.6 183.2,476.6 189.7,476.6 194.5,476.6 201.5,476.6 209,476.6 209,474.1 207.1,474 205.3,473.5 203.8,472.7 202.3,471.5 201.1,469.9 200.4,468.2 200,466.3 199.8,463 199.8,450.7 199.8,438 199.8,417.2 199.8,384.7 199.8,366.3 199.8,348.3 199.8,336.9 199.6,330.8 199,325.5 197.9,319.8 196,314 193.6,308.9 190.5,304 187.3,300.2 183.5,296.8 178.9,293.7 173.7,291.3 168.7,289.6 164.4,288.6 159.9,287.9 155.4,287.5 151.2,287.4 147.5,287.6 142.6,288 138.3,288.6 133.5,289.6 129,290.7 125.3,291.8 120.9,293.2 117.6,294.4 113.8,296 109,298.1 105.2,300 101.8,301.8 99.2,303.3 97.2,304.5 96.7,302.6 95.9,300.2 94.5,297.4 92.6,294.7 89.4,291.8 85.7,289.8 82.7,288.7 77.9,287.8 73.8,287.5 70.3,287.4 63.6,287.4 52.4,287.4 41,287.4 33,287.4",
                n2: "350.7,300.2 350.7,319.5 350.7,334.4 350.7,341.5 350.7,343 351.6,343 352.5,343 353.5,343 354.5,343 355.5,343 356.7,343 358,343 359.4,343 360.7,343 362.5,343 364,343 364,346.5 364,353.8 364,362.2 364,367.5 364,372.3 364,376.9 364,381 364,384.8 364,387.5 364,390.3 364,392.1 364,396.8 365,396.8 365,392 365,386.5 365,382.8 365,378.5 365,375.3 365,372.7 365,369.2 365,366 365,362.2 365,359.3 365,357.2 365,354.7 365,352.7 365,350.3 365,347.7 365,345.3 365,343 365,341 362.7,341 360.3,341 357.9,341 355.4,341 352.9,341 350.7,341 350.7,349.9 350.7,359 350.7,367.9 350.7,376.9 350.7,384.8 350.5,387 349.9,389 349,390.6 347.6,392.2 345.7,393.4 343.5,394.2 341.2,394.4 341.2,396.8 343.5,396.8 346,396.8 349.6,396.8 353.4,396.8 357.3,396.8 360.1,396.8 362.7,396.8 365,396.8 370.3,396.8 376.4,396.8 382.6,396.8 389.3,396.8 395.4,396.8 400.5,396.8 406.9,396.8 414.1,396.8 421.2,396.8 421.2,394.4 419.4,394.2 417.7,393.8 415.7,392.8 414.2,391.6 412.9,389.9 412.2,388.3 411.7,386.2 411.6,382.4 411.6,374 411.6,363 411.6,352.7 411.6,345.1 411.6,339.5 411.6,335.8 411.6,332.1 411.6,321 411.6,307 408.3,307 405.7,307 402.2,307 397,307 393.5,307 390.2,307 387.8,307 385.5,307 383.1,307 380.5,307 377.9,307 375.1,307 372.5,307 369.9,307 367.6,307 364,307 364,323.6 364,332.8 364,336.7 365,336.6 365,333.3 365,330.5 365,327.7 365,323.9 365,320.3 365,316.8 365,314 365,311.4 365,309 365.9,309 366.8,309 369.8,309 372.9,309 375.8,309 378.5,309 380.9,309 384.5,309 387.4,309 390.3,309 393.2,309 396.1,309 399.1,309 402.7,309 407,309 411.6,309 411.6,300.3 411.6,289.8 411.6,277.3 411.6,261.3 411.6,244.5 411.3,233.4 410.5,227.1 417.6,223.4 425,220.8 430.1,220.1 434.3,220.2 438.9,221.3 442.6,223.4 446.2,227.1 448.7,231.3 450.4,237 451.3,243.6 451.5,251.3 451.4,281.8 451.5,329.8 451.4,384 451.1,387.5 450.2,389.7 448.7,391.6 447,393 444.7,394 441.9,394.4 441.9,396.8 449.5,396.8 457.4,396.8 465.5,396.8 473.9,396.8 481.6,396.8 489.1,396.8 496.8,396.8 504.6,396.8 512.3,396.8 521.5,396.8 521.5,394.4 519.6,394.2 517.2,393.4 515.3,392.2 513.8,390.3 512.8,388.2 512.4,385.7 512.3,383.1 512.3,356.2 512.3,334.2 512.3,313.7 512.3,292 512.3,272.3 512.3,254.7 512,248.9 511.2,243.7 510,238.7 508.5,234.2 506.8,230.4 504.5,226.5 501.7,222.6 498.3,218.9 494.2,215.7 490.5,213.5 486.5,211.6 481,209.8 475.3,208.5 468.8,207.8 462.7,207.7 456.9,208 450.4,208.9 445,210 439.6,211.5 434.6,213.1 430,214.7 425.6,216.5 420.6,218.8 415,221.7 409.8,224.7 408.5,220.6 406.8,217.2 404.4,214.2 401.4,211.6 397.2,209.6 393,208.4 389,207.9 384.2,207.7 376.7,207.7 366.8,207.7 355,207.7 341.2,207.7 341.2,210.1 343.7,210.3 346,211.2 347.8,212.4 349.2,214.1 350.3,216.6 350.7,219.1 350.7,238.3 350.7,257.5 350.7,268.3 350.7,282.2",
                y: "217.8,376.9 223.8,376.9 233.2,376.9 243.2,376.9 252.8,376.9 264.1,376.9 274.8,376.9 285.6,376.9 293.6,376.9 293.6,379.4 292.3,379.4 290.9,379.7 289.2,380.7 288.2,382 287.6,383.6 287.5,385.3 287.5,386.9 287.8,388.1 289.7,392.2 292.9,399.2 296.9,408 301.4,417.9 306.6,429.2 311.2,439.3 316.5,450.8 322.2,463.3 327.8,475.5 333,486.9 337.9,497.7 342.2,507 346.8,517.1 350.2,509.2 354.5,498.8 359,488.2 363.6,477.1 367.9,466.9 371.3,459 372.9,454.3 373.4,450.8 373.4,447 373.4,443.8 372.1,440.5 370.7,437.2 368.8,434.1 366.1,430.9 362.9,428.2 359.9,426.3 355.5,424.5 352,423.8 349.5,423.5 347.9,423.5 347.9,421 352.2,421 359.3,421 367.8,421 376,421 382.5,421 387.5,421 395.8,421 401.5,421 407.5,421 411.7,421 415,421 415,423.5 411.5,423.6 408.1,424.1 405,424.8 401.9,425.8 399.2,427 396.5,428.4 393.7,430.4 391.5,432.1 389,434.4 386.7,436.7 384.6,439.1 382.3,442 380.5,444.7 378.6,447.8 377.2,450.6 375.4,454.6 373.8,458.4 372.3,461.8 370.7,465.5 367.8,472.5 363.2,483.1 359.4,492 355.3,501.6 351.2,511.3 347.1,521 343.2,530.1 338.6,540.7 334.9,549.5 330.5,559.9 325.9,570.7 320.7,582.8 315.9,593.9 310.8,606 306.6,615.7 302,626.6 297,638.3 292.9,647.8 288.9,657.4 286,663.9 283.7,668.5 280.3,673.9 277,678.1 272.9,682.4 268.7,685.8 264.5,688.4 260.3,690.4 254.6,692.1 249.7,692.8 245.4,693 240.6,692.7 235.8,691.8 231.4,690.4 227,688.4 222.3,685.5 219.7,683.5 216.6,680.8 213.4,677.4 210.7,674.2 207.7,669.9 205.8,666.7 203.3,661.3 201.6,656.7 200.1,651.4 199,645.6 198.3,641 198.3,635.5 198.9,629.4 200.3,624.5 202.4,620.1 204.9,616.6 208.4,612.9 212.1,610 217.4,607.2 222.8,605.7 228.5,605.2 234.3,605.7 239.2,607 243.7,609.2 247.3,611.6 251.3,615.5 254.4,619.7 256.5,623.7 257.9,627.8 258.7,632.5 258.8,636.7 258.3,641.8 256.7,647.6 254.1,652.5 251.8,655.3 248.9,658.1 246.2,660.7 243.1,665 241.4,668.3 240.6,671.4 240.3,675.2 240.6,677.7 241.5,680.8 243.5,684.1 245.3,686 247.4,687.6 250.2,689 252.1,689.4 255.7,689.3 259.8,688.4 263.8,686.6 268.4,683.5 272.7,679.6 275.8,676.3 278.8,672.4 282.1,667.1 284.8,661.8 288.3,653.6 292.6,643.4 297.9,631.2 302.2,621 306.6,610.6 310.7,601 315.6,589.5 316.9,586.5 310.7,572.4 305,559.6 297.3,542.3 289.1,524 279.4,502.3 270.5,482.3 262.1,463.3 254.2,445.8 245.1,425.3 236.5,406 229.9,391.2 227.9,386.6 226.3,383.7 224.3,381.5 222.9,380.6 221.4,379.9 219.9,379.5 218.6,379.4 217.8,379.4"
            },
            step3: {
                j: "183.8,228.4 186,226.8 186,224 183.7,225.4 179.3,226.5 174,227.3 169.2,227.6 164.2,227.3 158.3,226.2 151.7,224 144,219.9 136.3,213.6 130.5,206.7 125.7,198.3 121.8,188.4 119.6,177.5 119,168.3 119.3,156.8 120.3,147 122,137 124.5,126.9 126.7,120.1 129.4,113 132.1,107.5 135.1,102.7 138.2,98.8 141.4,95.6 144.7,93.4 147,92.5 149.3,92 152,92.1 154.8,92.6 157.3,93.7 159.4,94.9 162,97.2 164.7,100.4 167.1,104.4 170.4,111.3 172.8,117.9 175.1,125.9 177,134.6 178.9,145.7 180.4,156.7 181.5,168.1 182.3,179 182.9,189.4 183.3,199.5 183.7,210 183.6,218.2 183.7,224.3 183.7,230.8 183.6,237.5 183.3,250.1 182.7,263.4 182,275 181.2,283.8 180.2,291.7 178.9,300.3 177.1,309.6 175,318 173,324.4 170.7,330.4 167.6,337 164,342.9 159.6,347.6 157.4,349.2 155.1,350.4 152.8,351.4 150.6,351.9 147.3,352.3 142.1,352.6 137.8,352.7 133,352.6 128.9,352.3 124.8,351.8 121.1,351.2 113.9,349.4 108.9,347.4 104.9,345.2 102.2,343.1 100.4,341 99.6,339.6 99,337.9 98.7,335.8 98.7,333.6 99.1,331.3 100.1,329.1 103.2,325.2 107.1,321.3 109.9,318.6 112.7,314.6 114.9,310.4 116.4,305.6 117.1,301 117.1,295.6 116.2,290.8 114.4,285.8 111.9,281.6 108.8,277.8 105.5,274.7 100.9,271.7 96.8,270 91.9,268.8 87.9,268.5 84.4,268.6 80,269.3 76.3,270.4 72.5,272.2 69.3,274.4 65.2,278.1 61.9,282.4 58.9,288.2 57.4,295 57.4,302.6 59,310.3 62.1,317.4 66.1,323.4 71.6,329.7 77.5,335.1 84.1,339.9 90.9,343.7 100.6,348 107.3,350.6 114,352.5 120.3,353.8 126.3,354.6 132.3,355.1 138.2,355.4 143.9,355.3 147.7,355.2 151.9,354.9 156,354.6 161.9,353.8 167.6,352.7 174.7,350.9 181.1,348.8 187.5,346.1 193.7,343 199.1,339.8 204.8,336 210,332.1 216.1,326.6 222.1,320.4 228.1,313.1 233.1,305.8 237.2,298.8 242.2,288.5 245.2,281 247.8,273.2 250.2,264 252.4,253.6 253.8,244.7 254.5,237.4 254.9,230.4 255.1,220.2 254.8,209.7 253.9,198.9 252.7,189.5 250.6,179 247.4,167.5 243.6,157.4 238.3,146.1 231.9,135.2 225,125.9 217.4,117.7 210.2,111.3 202.3,105.6 194,100.8 186,97 179.9,94.8 174,92.9 165.5,90.8 156,89.3 148.7,88.7 142.3,88.5 136.1,88.8 132,89.1 124.4,90.3 116.9,92.2 108.3,95.1 100.6,98.5 94.6,101.9 89.5,105.1 84.8,108.6 77.1,115.3 71.1,121.9 66.1,128.6 61,137 57.2,145.4 53.9,156.1 52.1,166.8 51.7,177.5 52.7,189.5 55.2,199.4 59.2,209.1 64,217 69.3,223.7 75.8,229.7 82.5,234.6 93.1,240.1 104.6,243.9 115.4,245.8 126.2,246.1 136.8,245.3 146.4,243.6 155,241.2 162,238.9 166.8,237 172.8,234.3 177,232.2 180.7,230.3",
                e: "189.8,461.9 192.8,456.4 195.8,450.9 198.4,446.2 201.1,441.3 203.8,436.4 206.4,431.7 208.7,427.5 210.4,424.3 213.1,419.5 215.8,414.4 218.9,408.8 221,405 223.5,400.4 226.5,394.9 230.4,387.9 232.3,384.4 233.1,382.8 234.3,380.7 235.2,379.1 233.2,379.1 230.9,383.3 228.9,386.9 227.2,390.1 224.4,395.1 221.7,400 218.4,406.1 212.6,416.7 207.9,425.2 203.3,433.7 199.1,441.2 195.3,448.2 190.9,456.2 184.5,467.9 178.3,479.2 171.9,491 165.5,502.6 160,512.6 154.7,522.3 149.7,531.4 144,541.8 137.6,553.5 139.6,553.5 142.7,547.7 143.8,545.7 144.8,544 147.5,539.1 149.8,534.8 151.6,531.5 153.7,527.8 155.3,524.8 157.6,520.6 160,516.3 162.4,511.9 164.1,508.7 165.6,506 168.7,500.3 171.7,494.8 174.5,489.7 177.1,485 179.7,480.3 182.2,475.8 184.7,471.2 186.4,468.1 187.4,466.3 188.5,464.2 190,461.5 191.4,458.9 192.4,457.1 193.4,455.3 192.6,454.9 191,457.7 189.3,460.7 188,463.5 186.6,465.9 184.9,468.8 183.3,471.8 181.4,475 180.3,477 176.9,483.3 174.4,488 172.5,491.8 170.3,495.5 167.6,500.6 166,503.5 164.1,506.8 163.1,508.8 161.7,511.2 160.6,513.3 159.5,515.5 158.5,517.2 157.4,519.4 156.1,521.3 155,523.4 153.8,525.9 152.4,528.4 150.9,530.9 149.4,533.8 147,538.1 143.9,543.7 144.8,544 145.7,542.3 146.9,540.1 148.3,537.6 149.8,534.8 151.6,531.5 153.7,527.8 156,523.5 158.8,518.4 161.8,512.9 164.8,507.5 167,503.5 171.3,495.7 177.1,485 188,465.2 196.8,449 200.5,442.4 204.4,435.3 208.1,428.5 211.5,422.3 214.3,417.3 217.2,411.8 219.8,407.2 221.8,403.4 223.5,400.4 224.6,398.4 225.6,396.6 226.5,394.9 227.5,393.2 228.3,391.6 229.1,390.1 229.9,388.7 230.7,387.3 229.6,387 229,388.3 227.3,391.1 225.2,395.3 222.1,400.8 218.6,407.3 213.6,416.3 210.5,422.3 207.3,428 204.8,432.8 202.1,437.4 200.7,440 199.3,443 197.8,445.6 196.3,448.2 195,450.7 193.9,452.7 189,461.2",
                n: "127.4,402.7 126.4,404.2 125.5,405.8 125,406.8 124.4,408 123.8,409.5 123.3,410.7 123,411.8 122.7,412.7 122.4,413.8 122.1,415.1 121.8,416.3 121.5,417.7 121.3,419 121.1,420.8 120.9,422.8 120.9,425.2 120.9,427.6 121.4,432.5 122.2,436.6 123.5,440.7 124.5,443.2 125.5,445.3 126.3,446.7 127.1,448 128.2,449.6 129.2,450.9 129.8,451.6 131,452.9 131.9,453.8 133.3,455.1 135.2,456.6 137.6,458.2 139.6,459.3 142,460.3 144.8,461.3 147,461.9 150.3,462.5 153.2,462.7 155.3,462.8 156.2,462.7 156.2,461.6 155.3,461.5 154,461.4 152.8,461.2 151.9,460.8 150.7,460.1 149.6,459.1 148.6,457.9 147.6,456.2 146.6,453.8 145.9,450.9 145.2,447.2 144.8,442.1 144.6,435.4 144.6,427.4 144.6,420.5 144.6,413.2 144.7,409.5 145,405.5 145.7,401.2 146.4,398.1 147.2,395.8 148,394.1 148.9,392.7 150,391.6 151,390.7 152,390.2 153.1,389.8 154.5,389.6 155.3,389.5 156.3,389.6 157.4,389.8 158.7,390.2 160,391 161.2,392.1 162.2,393.4 163.2,395.3 164,397.4 164.7,399.7 165.1,402.2 165.5,404.9 165.8,407.7 166,410.7 166,414.6 166.1,419.1 166.1,423.4 166.1,433.5 165.9,441.1 165.6,445.2 165.1,448.9 164.4,452.5 163.2,455.9 162,457.9 160.8,459.4 159.4,460.4 157.9,461.1 156.5,461.4 155.3,461.5 155.3,462.8 156.9,462.7 158.8,462.6 160.8,462.4 163.1,462 165.8,461.3 169,460.2 171.6,459 173.8,457.7 175.8,456.3 177.1,455.3 178,454.5 179,453.6 180,452.5 181,451.4 182,450.2 182.9,448.9 183.8,447.6 184.7,446 185.6,444.3 186.9,441.6 187.9,438.7 188.9,434.9 189.6,430.3 189.8,424.9 189.4,419.9 188.5,414.9 186.9,409.8 185.5,406.5 184.5,404.8 183.7,403.4 182.7,401.9 181.4,400.2 180.2,398.9 178.4,397.1 177,395.9 175.2,394.5 173.6,393.4 172.8,392.9 171.8,392.4 170.9,391.9 169.9,391.4 169,390.9 167.5,390.4 166.1,389.9 164.3,389.3 161.9,388.8 159.9,388.5 158.2,388.4 156.6,388.3 155.3,388.3 153.8,388.3 152.6,388.4 150.9,388.5 150,388.6 148.8,388.8 147.5,389.1 145.5,389.6 143.4,390.3 141,391.3 138.5,392.5 136.3,393.9 134.9,394.9 134.1,395.5 133.5,396 132.9,396.5 132,397.3 131.2,398.1 130.6,398.7 129.9,399.5 129,400.5 128.2,401.5",
                n2: "273.2,298.3 273.2,322.3 273.2,344.8 273.2,355.4 273.2,360.8 277.7,357.5 282.2,354.6 289.3,350.5 296.3,347 304.5,343.8 311.5,342 320.8,340.6 329.6,340.1 337.3,340.6 344.7,342.1 351,344.6 357.5,348.5 363.6,353.7 369.8,361.6 374.6,370.5 377.4,378.1 379.6,387.3 380.6,397.9 380.4,408.8 379.1,420.8 376.5,432.3 372.6,444.2 367.8,454.7 362.7,463.2 354.8,472.5 348.7,477.5 343.5,480.4 339.8,481.7 335.5,482.3 331.7,482.1 324.9,480.8 316,478.1 309.1,474.8 305.3,471.2 303.5,466.7 303.3,461.5 305.3,457 309.4,452.1 316,445.6 320.4,438.3 322.5,429.1 322.5,420.3 320,412.1 315.9,405.5 310.1,399.8 304.8,396.4 299.2,394.4 292.5,393.3 285.3,393.7 278.6,395.6 272.3,399.1 266.9,403.9 263,409.1 260.1,415.5 258.6,423.7 259.1,431.8 261,439.1 264.2,445.9 268.6,452.3 274.7,459.3 281.5,465.2 288.5,470 297.1,474.6 306.8,478.8 319.2,482.8 330.5,484.8 343.3,485.8 353.8,485.6 365.2,484.4 376.1,482 387.8,478.3 399,473.5 408.8,468 418,461.5 426.2,454.4 434,445.9 440.2,437.2 444.8,429 448.5,420.1 450.8,411.1 452.1,401.3 452.3,394.3 452,388.3 451.3,382.7 450.1,377.2 448.4,371.8 445.7,365.6 442.2,359.4 438.2,353.8 433.4,348.2 428.1,343.1 422.7,338.9 416.8,335 411.6,332.1 406.2,329.5 398.6,326.5 391.1,324.2 384.8,322.7 376.5,321.4 366.5,320.6 358.2,320.8 350,321.5 342.4,322.7 334.9,324.3 330.1,325.6 323.9,327.6 319.4,329.3 313.2,331.8 308,334.1 302.6,336.7 297.4,339.6 292.2,342.7 288.2,345.5 284.4,348.4 280.1,351.8 275.3,355.6 275.3,351.2 275.3,346.5 275.3,341.2 275.3,335.8 275.3,330.7 275.3,322.8 275.3,315.3 275.3,309.5 275.3,301.5 275.3,292.5 275.6,289 276.5,286.3 278.2,283.6 280.4,281.1 286.2,277 292.5,275.1 299.9,274.4 309.3,275.2 315.7,276.4 325.3,279 340.4,283.2 354.1,286.9 367.7,289.8 380.5,291.6 393.4,291.7 403.5,290.7 411.3,289 417.8,286.7 422.6,284.3 428.4,280.3 433.9,275.6 438.6,270.4 441.9,265.8 444,262.2 446.1,258 447.3,254.8 448.3,251.9 449,249.6 449.4,247.7 449.8,246.1 450.1,244.5 450.3,243.3 450.5,241.9 450.7,240.8 450.9,239.5 451.1,238.1 451.3,237 451.4,235.9 451.6,234.6 451.7,233.5 451.8,232.3 451.9,230.8 452,229.4 452.1,228.3 452.2,227.3 452.2,226.3 452.2,225.4 452.3,224.5 452.3,223.6 452.3,222.7 452.3,222 452.3,221.1 452.3,220.4 452.3,219.7 452.3,218.6 452.2,217.8 452.2,216.8 452.1,215.7 452,214.4 451.9,213.3 451.8,212.2 451.7,211.2 451.6,210.3 451.5,209.9 451.4,209.3 451.4,208.9 451.3,208.4 451.2,208 451.1,207.4 451.1,206.9 451,206.4 450.9,205.9 450.8,205.2 450.7,204.8 450.7,204.4 450.6,203.9 450.5,203.6 450.5,203.2 450.4,202.9 450.3,202.5 450.3,202.2 450.2,201.8 446.9,201.8 446.5,205.3 444.7,209.5 441.3,213.4 436.6,216.5 431.3,218.7 425.6,220.3 420.8,221.2 415.3,221.8 410,222 404,222 398.3,221.6 393.2,221 387.5,220.2 380.4,219 371.4,217.5 363.1,216 355.5,214.7 346.5,213.5 338.3,213.2 329,213.5 320.4,214.4 312.2,216.1 304.3,218.8 296.1,222.8 289.2,227.6 283.4,233.6 278.7,240.6 276.1,247 274.5,253.3 273.4,260.3 273.2,266.3 273.2,273.8",
                y: "201.6,473.7 203.3,472.9 204.6,472.4 205.8,471.9 207.5,471.3 209.6,470.8 211.9,470.4 214.9,470.1 217.5,470 217.5,471.2 216.1,471.4 214.7,471.7 213.4,472.3 212,473.4 210.7,475 209.9,476.3 209.3,477.7 208.6,479.6 207.9,482.4 207.2,487 206.8,492.5 206.7,501.5 206.7,510.3 206.7,521 207.4,528.7 208.3,533.8 209.7,537.8 211.8,540.9 213.9,542.4 215.9,543.1 217.5,543.2 218.9,543.1 220.6,542.7 222.8,541.2 225,538.2 226.5,534.5 227.4,529.8 228.2,523.7 228.2,507.4 228.2,496 228,490.2 227.6,485.8 226.7,481 225.9,478.2 224.7,475.7 223.3,473.7 221.8,472.5 220.4,471.8 219,471.4 218,471.3 217,471.2 217.1,470 218.1,470 220.3,470.1 223.8,470.5 227.1,471.2 229.3,472 231,472.6 232.9,473.5 234.3,474.3 235.6,475 236.8,475.8 237.7,476.5 238.3,476.9 239.2,477.6 239.9,478.2 240.7,478.9 241.4,479.6 242,480.2 242.5,480.7 242.9,481.1 243.1,481.4 243.4,481.8 243.7,482.1 244.1,482.6 244.4,483 244.7,483.5 245.2,484.1 245.5,484.5 245.9,485.1 246.3,485.8 247.8,488.5 248.8,490.8 249.6,492.8 250.3,495.1 250.8,497.2 251.2,499 251.6,501.6 251.8,504.2 251.9,505.9 251.9,507.4 251.8,510.9 251.3,515 250.5,518.6 249.6,521.8 248,525.5 246.4,528.5 244.7,531.2 242.7,533.7 240.8,535.7 238.2,537.8 235.2,539.9 233.3,540.9 230.3,542.3 228.9,542.8 227,543.3 225.4,543.7 223.6,544 222.4,544.2 221.4,544.3 220.1,544.4 218.7,544.5 217.5,544.5 215.7,544.5 213.6,544.3 211.5,544.1 208.9,543.6 206.4,542.9 204.2,542.1 201.9,541.1 199.9,540 197.7,538.6 195.8,537.1 194,535.5 192.3,533.7 190.7,531.7 189.4,530 188.5,528.5 187.4,526.4 186.6,524.8 185.9,523.3 185.4,521.8 184.3,518.2 184.2,517.4 184.8,517.6 185.4,517.8 186,517.9 186.5,518.1 187.1,518.2 187.6,518.3 188.4,518.5 189,518.6 189.4,518.6 189.7,518.7 190.3,518.8 190.9,519.1 191.5,519.4 192.1,519.5 193.1,519.9 194,520.1 194.8,520.3 195.4,520.5 196.3,520.9 197.1,521.4 198,521.7 198.9,521.8 200.1,522.4 200.8,522.8 201.3,523.3 200.2,523.1 199.5,523.3 198.4,522.9 197.6,522.7 196.6,522.4 195.7,522.4 194.8,522.3 194,522.2 193.3,522.1 192.6,522 191.9,521.9 191.4,521.5 190.8,521.4 190.2,521.1 189.7,520.8 189.1,520.6 188.6,520.3 188.2,520.1 187.8,520 187.3,519.9 186.7,519.7 186.2,519.5 185.7,519.4 185,519.1 184.5,519 183.9,516.2 183.4,513.6 183.1,510 183,507.4 183.1,504 183.4,501.7 183.7,499.4 184.2,496.9 184.8,494.8 185.4,492.8 186.4,490.3 187.2,488.4 188.3,486.4 190.3,483.4 192.3,481 194.4,478.8 196.8,476.8 199.9,474.7"
            },
            step2: {
                j: "102.6,238.4 102.9,236 103.1,234.3 103.2,233.4 103.3,232.2 103.5,230.9 103.7,229.7 103.8,228.5 104.2,226.4 104.6,223.8 105,221 105.8,216.8 106.8,212.1 108.7,204.6 113.1,191.9 118.6,181.4 120.7,178.7 122.6,176.6 123.9,175.6 125.8,174.3 127.1,173.5 128.8,172.8 130.3,172.3 131.8,171.9 133.5,171.7 135.3,171.5 137.7,171.3 140.5,171.1 143.1,171 147,171.1 150.1,171.2 154.9,171.7 161.8,172.8 167.6,174.4 173.5,176.9 178,179.7 181,182.8 182.2,185.6 182.4,189.4 181.4,193.1 177.5,198.1 172.4,202.9 167.4,210.3 164.9,218.7 164.9,227.3 167.4,235.2 187.5,179.5 161.5,170 125.3,170 101,205.8 98.8,293.3 107.7,291.4 115.8,290.9 124.4,292.1 131.6,294.5 138.8,298.3 145.7,303.9 151.5,310.6 155.9,317.8 159.2,325.5 161.7,334.8 162.7,343.3 162.8,351.3 161.8,367 158.4,384.7 155.1,395.3 151.6,403.4 147.8,409.9 144.2,414.5 140.8,417.7 137.5,419.7 134.9,420.6 132.4,420.8 129.2,420.4 126.3,419.4 123.6,417.8 120.8,415.4 117.5,410.9 113.3,402.4 109.3,390.7 106.1,376.7 104,363.1 102.2,345.2 101.7,338.5 101.4,334 101.3,330.9 101.1,328.1 101,324.5 100.8,320 100.7,316 100.6,312.1 100.5,307.3 100.4,303.1 100.3,298.6 100.3,294.3 100.3,290.1 100.3,286 100.3,282.1 100.4,278.3 100.6,273.3 100.7,268.3 100.9,262.5 88.7,262.3 70.2,262 49.8,261.8 35.1,261.4 34.8,263.3 34.1,266.8 33.5,270.7 32.9,275.1 32.6,278.1 32,285.2 31.6,295 31.6,306 32.4,315.2 34.6,330.9 37.8,344.9 42,356.9 48.7,371.1 58.3,385.7 68.4,396.8 76.4,403.5 87,410.5 96.6,415.3 106.7,419 114.8,421.2 123.3,422.9 131.6,423.8 140.2,424.1 144.8,424 150.7,423.5 160.5,422 173.6,417.6 185.7,411.7 197.4,403.6 210,390.8 220.1,374.9 225.7,358.3 227.6,341 226.5,326.7 222.1,312.5 214,298.7 204.3,288.7 193.5,281.7 181.4,276.8 165.2,273.7 148.7,273.7 129.6,277.2 111.9,284.4 100.3,290.1 102.3,205.3 125.4,170.5 161.2,171.2 186.3,179.8 167.4,235.2 172.7,242.8 180.2,248.6 189.3,251.5 199.2,251.2 208.8,247.4 217,239.6 221.2,231.2 222.3,221.7 220.4,211.2 216.3,202.8 209.4,194.1 201.3,186.8 195.6,182.8 188.9,179.2 181.8,176.1 174.3,173.2 166.9,171.1 159.6,169.7 152.1,168.8 145.1,168.5 140.1,168.5 136.6,168.6 132.3,168.8 127.7,169.2 121.9,170 114.8,171.4 109.1,172.9 103.5,174.7 98.8,176.5 94.9,178.3 91.1,180.3 86.6,182.9 82.3,185.6 76.6,189.7 71,194.4 64.4,200.9 58.5,207.9 52.6,216.3 47.1,226.1 42.6,236.1 38.6,247.6 34.8,263.3 42,263.8 49.3,263.8 55.8,264.5 64,264.3 69.5,264 78.3,264.5 87,264.8 94.8,265 100.8,265.2 101,261.2 101.2,257.1 101.5,251.7 101.9,246.7 102.3,242.1",
                e: "331.7,467.5 334.7,462 337.7,456.6 340.4,451.7 343,446.8 345.6,442.1 348.2,437.3 350.5,433.1 352.2,429.9 354.9,425 357.7,420 360.8,414.3 362.8,410.6 365.4,405.9 368.3,400.5 372.2,393.5 374.1,390 375,388.3 376.2,386.2 388.8,363 386.3,363 372.2,388.6 370.2,392.3 368.5,395.5 365.8,400.5 363.1,405.5 359.8,411.4 353.9,422.2 349.3,430.6 344.5,439.3 340.5,446.7 336.7,453.6 332.4,461.6 325.9,473.4 319.7,484.7 313.3,496.4 306.9,508.2 301.5,518.1 296.2,527.8 291.1,537.1 285.5,547.3 263,588.5 265.6,588.5 284.8,553.3 285.9,551.3 286.9,549.4 289.4,545 291.6,540.9 293.7,537.1 295.6,533.6 297.2,530.6 299.6,526.3 302,521.8 304.4,517.5 306.1,514.3 307.5,511.8 310.6,506.1 313.7,500.5 316.5,495.3 319,490.7 321.6,486 324.1,481.4 326.6,476.9 328.4,473.6 329.3,471.9 330.4,469.8 331.9,467.2 333.3,464.5 334.3,462.7 335.3,460.9 334.3,460.4 332.6,463.3 331,466.2 329.6,469 328.3,471.4 326.6,474.3 325,477.3 323.1,480.5 321.9,482.5 318.6,488.8 316.1,493.6 314.1,497.3 312,501.1 309.3,506.1 307.7,509 305.8,512.3 304.8,514.3 303.4,516.7 302.3,518.8 301.1,521 300.2,522.7 299.1,524.9 297.8,526.8 296.7,528.9 295.4,531.4 294.1,533.9 292.6,536.4 291.1,539.3 288.7,543.6 285.6,549.3 286.9,549.4 287.7,548 288.9,545.8 290.3,543.2 292,540.2 293.7,537.1 295.7,533.5 298.2,528.8 300.9,523.9 303.7,518.7 306.8,513.1 308.9,509.2 313.2,501.4 319.1,490.5 329.9,470.8 338.8,454.6 342.4,447.9 346.2,440.9 350,434.1 353.4,427.8 356.1,422.9 359.1,417.4 361.6,412.8 363.7,409 365.4,405.9 366.5,403.9 367.4,402.1 368.3,400.5 369.3,398.8 370.1,397.2 371,395.7 371.7,394.3 372.5,392.9 371.3,392.6 370.7,393.8 369,396.6 366.9,400.8 363.7,406.3 360.3,412.8 355.3,421.8 352.2,427.8 349,433.5 346.5,438.3 343.8,442.9 342.4,445.5 341,448.5 339.5,451.1 338,453.7 336.7,456.2 335.5,458.2 330.6,466.7",
                n: "250.5,392.6 249.4,394.3 247.7,397 247.1,398.2 246.5,399.5 245.8,401 245.3,402.2 244.7,403.8 244.1,405.4 243.7,406.9 243.2,408.6 242.9,410 242.5,411.7 242.1,413.9 241.8,416.1 241.6,419 241.5,421.2 241.4,423.2 241.7,428.8 242.3,433.7 243.3,438 244.2,441 245.1,443.6 246,445.8 246.9,447.6 247.9,449.5 249,451.3 250.6,453.7 252.2,455.8 253.8,457.8 255.9,459.8 258.4,462 261,464 264.3,466 267.3,467.5 271.2,469 275.7,470.2 280.6,471 284.4,471.2 285.9,471.2 286.5,471.2 286.5,469.6 285.9,469.6 285.1,469.6 283.3,469.3 281.4,468.7 279.6,467.5 277.6,465.5 275.9,462.8 274.5,459.2 273.3,453.8 272.5,448.1 272,442.6 272,437 272,430.3 272,423.2 272,415.7 272,409.2 272,404 272.4,399.7 272.8,395.5 273.2,392.5 273.6,390.4 274,388.7 274.7,386.5 275.4,384.6 276.5,382.4 278,380.2 279.9,378.4 282.6,377 285.9,376.5 288.1,376.7 289.8,377.2 291.5,378.1 293.3,379.7 295.1,382.1 296.4,384.7 297.4,387.8 298.1,390.6 298.6,393.3 299,395.9 299.3,399 299.5,402 299.6,405 299.7,409.4 299.7,414 299.7,418.3 299.7,428 299.7,436.2 299.5,443.8 298.8,451.1 297.5,458 296.3,461.6 294.9,464.3 293.4,466.3 290.7,468.4 288.8,469.2 286.8,469.6 285.9,469.6 285.9,471.2 287,471.2 290.1,471.1 293,470.7 296.1,470.2 299.7,469.3 304.4,467.5 308.7,465.2 312.2,462.9 313.5,461.9 315.1,460.5 316.7,459 317.7,457.9 319,456.5 319.9,455.3 321.6,453.1 323.1,450.7 324.3,448.5 325.9,445.2 326.8,443.1 327.6,440.8 329,435.7 329.8,430.8 330.2,425.5 330.2,420.2 329.7,414.7 328.7,409.5 326.7,403.1 324.9,398.9 323.5,396.1 322.3,394.2 320.7,391.9 319.3,390.1 317.8,388.5 315.8,386.5 313.8,384.7 311.5,382.9 310,381.9 308.2,380.8 307.1,380.1 305.5,379.3 304.4,378.8 302.4,377.9 300.6,377.2 298.7,376.6 296.7,376.1 294.4,375.6 292.6,375.3 289.8,375 287.6,374.9 285.9,374.9 284,374.9 282.2,375 280.2,375.2 278.4,375.4 276.5,375.8 274.5,376.2 272.6,376.8 270,377.6 267.3,378.8 265.3,379.8 263,381.1 261.6,382 260.1,383 258.4,384.3 257.4,385.1 256.4,386 255.4,386.9 254.5,387.9 253.6,388.8 252.6,390 251.6,391.2",
                n2: "293.9,209.9 282.5,214.1 267.2,223 254.3,235.6 291.6,236.5 292.4,232.4 293.6,227.6 295,223.3 296.4,219.5 298,215.9 298.9,214.1 300.3,215.3 304.9,218.9 309.7,222.8 314,226.1 317.1,228.6 321.4,232.1 325.1,235.1 329.9,239 333.5,241.9 340,247.3 347.3,254.1 354.4,261.6 361.3,270.5 367.8,280.7 373.3,293.4 375.5,305.8 373.8,318.7 368,328.9 359.3,336.2 348.7,340.6 341.3,342 331.7,341.8 325.6,341 321.6,340 314.4,337 308.3,332.8 304.5,329.3 301.9,326.2 299.3,322.5 297.4,319 295.6,315.3 292.7,307.4 290.3,297.2 289,286.6 288.5,275 288.8,263.1 289.7,252 290.7,242.7 291.8,235.1 285.4,234.9 277.8,234.6 272.2,234.4 267.4,234.3 261.2,234.1 255.4,234.1 249.2,242.4 244.6,251.5 241.7,262.6 240.9,272.9 241.4,281 243.7,291.7 247.4,300.5 252.7,308.8 260,317.2 267.4,323.5 276.3,329.4 284.2,333.5 293.8,337.5 305.7,341.1 318.9,343.7 333.2,344.9 344.1,344.8 355.2,343.7 366.6,341.6 378.6,338.3 389.3,334 398.4,329 408.4,321.6 416.5,313.6 423.6,304 428.6,294.6 431.5,286.7 433.4,278.1 434.3,269 434.3,261.7 433.8,255.2 432.8,248.7 431,241.8 429.3,237.3 426.9,231.9 424.8,228 421.8,223 418.7,218.4 415.5,214.3 411,209.1 406.3,204.1 401.3,199.4 395.9,194.6 391.6,191.1 387.5,187.7 381.7,183.3 376.8,179.2 372.2,175.9 367.9,172.8 364.7,170.5 362.2,168.7 360.7,167.6 358.8,166.2 357.2,165 355.5,163.8 353.6,162.4 351.9,161.1 349.6,159.5 346.5,157.2 344,155.3 340.9,153 338.3,151 336.3,149.5 334.3,147.9 331.9,145.9 329.5,143.8 326.8,141.4 324.6,139.3 322.6,137.3 320.4,134.9 319,133.3 317.6,131.7 316.2,129.8 315.2,128.6 314.2,127.2 313.5,126.2 312.7,125.1 310.2,121.2 307.6,116.1 305.6,110.2 304.9,102.3 306.8,95.2 310.5,89.1 314.9,85.5 321.4,82.2 330.2,79.9 338.5,79.3 347.7,80 358.3,83.4 366.1,88.8 373.4,98.3 378.9,113.6 381.4,138.3 380.9,155.7 378.7,168.5 374.3,179.2 377.6,182.1 382.6,180.6 388.6,178.3 398.2,173.6 406.6,167.7 414.1,160.3 419,153 422.5,144.3 423.4,136.9 423.1,130 422,124.2 420.6,119.6 419.1,116 417.4,112.8 415.9,110.4 415.4,109.6 415,109 414.7,108.6 414.5,108.4 414.2,108 414,107.7 413.7,107.4 413.5,107.2 413.3,106.9 413,106.5 412.8,106.3 412.5,105.9 412.2,105.5 411.9,105.2 411.6,104.9 411.3,104.6 411.1,104.3 410.8,104 410.5,103.7 410.3,103.4 410,103.2 409.8,102.9 409.6,102.7 409.4,102.5 409.1,102.3 409,102.1 408.9,102 408.7,101.9 408.5,101.7 408.4,101.5 408.2,101.3 408,101.1 407.8,101 407.6,100.8 407.3,100.5 407,100.2 406.8,100 406.4,99.7 406,99.3 405.6,98.9 405.1,98.5 404.5,98.1 404.1,97.7 403.7,97.4 403.3,97 402.9,96.7 402.6,96.5 402.2,96.3 402,96 401.6,95.8 401.3,95.5 400.9,95.2 400.3,94.8 399.5,94.3 398.2,93.4 394.8,91.4 391.7,89.6 386.3,87 381.4,85 375.5,83 366.7,80.7 356,78.7 345.3,77.7 334.3,77.6 323.6,78.3 316.4,79.3 307.1,81.2 298.6,83.6 290.5,86.6 282.7,90.4 275.1,95.2 267.7,101.4 259.9,110.5 253.3,123 250.2,135.6 249.9,149 252,159.1 259.3,174.3 268.5,186.2",
                y: "343.4,486.6 345.8,485.3 348.4,484 350.3,483.2 352.6,482.5 355,481.8 358.5,481.1 362.5,480.7 366.4,480.6 366.4,482.2 365.1,482.2 362.3,482.8 359.8,484.2 357.8,486.3 356.2,488.8 354.9,491.8 354.2,494.3 353.5,497.4 353.1,500.2 352.6,504.4 352.2,510.8 352.2,520.6 352.2,535.1 352.4,551 353.5,560.1 355,565.9 357.3,570.6 360,573.4 362.7,574.8 364.5,575.2 366,575.3 368.4,575 371.2,573.9 373.9,571.6 376.1,568 378.2,561.6 379.3,553.9 379.8,543.9 379.8,529.2 379.8,516.2 379.7,509.7 379.4,504.1 378.7,499 378,495.3 377.1,491.8 375.4,488.1 373.5,485.4 370.6,483.2 368.3,482.4 366.7,482.2 366,482.2 365.9,480.6 367.1,480.6 370.2,480.7 374,481.2 378.4,482.2 380.9,483 383.7,484.1 386.9,485.7 389.1,486.9 391,488.2 392.4,489.1 393.5,490 394.6,490.9 395.5,491.7 396.5,492.7 397.4,493.6 398.4,494.6 399.2,495.5 399.7,496.1 400.1,496.6 400.5,497.2 401,497.7 401.4,498.3 401.8,498.9 402.2,499.5 402.6,500.1 403.2,501.1 403.8,502.2 404.4,503.2 405.1,504.6 405.7,505.8 406.9,508.8 407.9,511.7 408.8,515.1 409.3,517 409.7,519.2 410,521.8 410.3,524.5 410.4,527.5 410.4,530.5 410.2,534.2 409.6,538.5 408.7,542.9 407.6,546.7 406,550.9 404.2,554.7 401.9,558.5 399.3,561.9 396.9,564.6 394.5,566.9 391.7,569 388.1,571.4 384.8,573.1 381.5,574.4 378.7,575.3 376.9,575.7 374.9,576.1 373.2,576.4 371.4,576.6 369.8,576.8 367.7,576.9 366,576.9 363.4,576.8 361.1,576.7 358.8,576.4 355.7,575.9 352.2,574.9 349.1,573.9 346.1,572.5 343.7,571.3 340.7,569.3 337.6,566.9 334.8,564.3 332.7,562 330.8,559.4 329.2,557.2 327.9,554.9 326.7,552.6 325.8,550.5 324.9,548.2 323.8,544.9 323,542.1 322.1,537.1 333.8,539.1 334.3,539.2 335,539.4 335.5,539.6 336.1,539.7 336.6,539.8 337.4,540 338,540.1 338.4,540.1 338.7,540.2 339.3,540.3 339.9,540.5 340.5,540.9 341.1,541 342.1,541.4 343,541.6 343.8,541.7 344.4,542 345.2,542.4 346.1,542.9 347,543.2 347.9,543.3 349.1,543.9 349.8,544.3 350.3,544.8 349.2,544.6 348.5,544.8 347.4,544.4 346.6,544.2 345.6,543.9 344.7,543.9 343.8,543.8 343,543.7 342.3,543.6 341.6,543.5 340.9,543.4 340.4,543 339.8,542.9 339.2,542.5 338.7,542.3 338.1,542.1 337.6,541.8 337.2,541.6 336.8,541.5 336.3,541.4 335.7,541.2 335.2,541 334.6,540.9 334,540.6 333.5,540.5 322.4,538.7 321.9,535.1 321.6,531.7 321.6,528.1 321.7,525.3 321.9,522.5 322.3,519.3 322.9,516.4 323.6,513.3 324.4,510.8 325.4,508.1 327,504.3 328.8,501 330.8,498.1 332.8,495.6 335.4,492.8 338.1,490.4 340.9,488.2"
            },
            step1: {
                j: "171.7,307.2 173.3,305.6 174.5,304.4 175.7,303.3 176.7,302.2 177.8,301.1 178.7,300.2 179.6,299.2 180.7,298.1 181.8,296.8 182.9,295.7 185.2,293.1 189.1,288 190.7,280.8 188.3,268.2 183.5,255.6 178.3,244.5 172.8,230.5 169,223.2 166.5,217.2 164.2,212.2 162.9,210.1 162.3,208.8 162,207.6 162,206.9 162,206.3 162,205.4 162,204.5 160,204.5 160,207.5 160,211.2 160,216.3 160,220.2 160.3,223.3 160,227.2 160,230.2 160,233.7 160,237.5 160,242.2 160,245.2 160,249.7 160,253.3 160,258.8 160,265 162,271 165.7,275.8 179.5,227.2 171.8,209.7 148.5,220.8 153.3,270 66.4,410.4 112.2,410.4 129,410.4 142.1,410.4 150.2,410.2 154.7,410.5 160.8,410.8 166.7,410.5 170.8,410.7 173.7,410.7 173.6,408.4 170.6,408.4 167.2,408.3 163.9,408.3 161,408.4 157.5,408.2 155.6,408.2 153.6,408.2 152,408.3 150.8,408.3 149.6,408.2 149.1,408.1 148.2,408 147.1,407.9 145.8,408.1 144.8,408.2 143.6,408.2 142.1,408.1 135.3,408.1 128.3,408.1 120.8,408.1 117.3,408.1 114,408.1 111.5,408.1 108.3,408.1 105.3,408.1 102.4,408.1 99.3,408.1 96.1,408.1 93.3,408.1 90.7,408.1 87.7,408.1 83.6,408.1 79,408.1 74.3,408.1 70.7,408.1 74.6,402.5 81.5,393.3 94.2,378.1 111.8,360.1 131.3,342.1 151.6,324.6 143.4,321.8 138.4,319.7 132,316.8 124.8,313.5 116.6,309.5 112.3,318.7 109.6,324.2 107.8,327.8 105.8,331.9 102.8,337.9 99.5,344.3 95.7,351.8 91.4,360 87,368.2 82.2,377.5 76.9,388 71,400.4 66.4,410.4 104.8,410.4 142.1,410.4 142.1,436.5 142.1,457 140.7,461.5 137.3,464.8 132.4,466 132.4,468.3 213.5,468.3 213.5,466 209.3,465.2 205.4,461.8 204,457.9 203.8,410.4 230.6,410.4 230.6,408.1 203.8,408.1 203.8,333.1 201.5,333.1 173,345.3 149.9,352.8 132.4,356.5 132.4,358.8 135.9,359.4 139.4,361.7 141.7,365.8 142.1,370.3 142.1,408.1 116.1,408.1 70.7,408.1 155.3,270.7 150.2,221.2 171.2,211.2 177.7,226.7 172.2,260.5 170.8,270.7 170.8,278.3 172.7,284.2 175.7,287.7 178.5,289.5 182,289.5 185.3,289.5 188.4,289 192.9,282.2 197.4,273.2 200.3,264.3 202.1,254.3 202.2,244.3 200.4,234.3 196.5,224.6 191,216.4 182.4,208.3 173.5,203 164.4,199.5 156.7,197.6 152.4,196.9 147.8,196.5 143.6,196.4 139,196.4 133.3,197.1 126.3,198.4 120.5,199.9 114.9,201.8 112.6,202.6 112.6,205.4 116.6,206.1 118.8,207.1 122,209.1 125.5,212.5 128.6,216.4 132,222.8 134.9,231.7 135.9,244.3 133.8,261.9 128.1,281.5 120.2,301.3 115.4,312.2 119.3,314.7 122,316.5 125,318 128.1,319.4 132,320.8 135.5,322.3 138.7,323.4 143.4,325.1 148.5,327.3 152.7,323.7 156.4,320.6 160.3,317.3 165.2,313 169.7,309",
                e: "363.3,215.5 363.2,213.8 363.2,212.8 363,211.4 362.9,210.4 362.8,209.4 362.5,207.8 362.2,206.3 361.8,204.4 361.2,202.4 360.5,200.1 359.7,198 358.6,195.6 357.4,193.5 356.1,191.5 354.6,189.5 352.6,187.2 350.2,184.8 347.2,182.5 344.4,180.7 342.8,179.8 341.5,179.2 340.4,178.6 339,178.1 337.5,177.5 336,177.1 334.4,176.7 332.8,176.4 331,176.1 329.5,176 327.6,175.8 325.8,175.8 318.7,176.4 311.3,178.6 303,183.6 296.6,189.9 290.9,200.7 288.3,215.5 289.7,228.4 294.2,239.5 300.5,247.4 307.8,252.7 315.8,255.8 321.8,256.8 325.8,257 325.9,255.6 323.1,255.2 320.4,253.6 317.9,250.5 316,245.4 314.8,238.3 314.3,230.9 314.3,220.3 314.3,211.4 314.3,207.3 314.3,204.6 314.4,201.7 314.5,198.9 314.6,196.4 314.8,194.2 315.2,191.4 315.6,189.1 316.2,186.6 316.9,184.6 317.5,183 318.8,180.9 320.4,179.2 322.3,177.9 323.9,177.4 325.9,177.2 328.3,177.5 330.2,178.3 332,179.7 333.6,181.8 334.7,184 335.6,186.7 336.3,189.5 336.8,192.7 337.2,196.7 337.5,201.3 337.5,205.7 337.5,210.5 337.5,214.5 337.5,219.7 337.5,222.8 337.5,225.8 337.5,228.5 337.4,231 337.4,233.5 337.2,236.4 336.9,239.2 336.5,242.4 335.8,245.5 334.8,248.5 333.4,251.3 331.7,253.4 329.8,254.7 327.8,255.4 325.9,255.6 323.9,255.4 323.8,257 325.8,257 328.7,256.9 331.9,256.6 336.2,255.7 342.7,253.3 350.1,248.2 355.6,242.2 359.2,235.9 361.5,229.8 362.9,223.2 363.3,216.6 363.1,212.2 362.3,206.8 361.5,203.2 360.5,200.1 359.2,197 357.4,193.5 355.7,190.9 354.6,189.5 353.5,188.5 352.3,187.6 351.2,186.6 349.5,185.4 347.9,184.4 345.8,183.3 343.6,182.2 341.9,181.3 344.2,183.3 346,184.4 348.5,186 350.6,187.7 352.9,189.5 354.5,191.2 356.2,193.4 356.8,194.6 357.4,195.9 358.2,197.1 358.8,198.8 359.6,200.2 359.9,201.7 360.5,202.9 360.9,204.3 361.5,206 361.8,207.7 362.1,209.5 362.4,211.4 362.5,213 362.8,213.9 363,215 363.3,216.6",
                n: "274.1,202.5 273.3,204.1 272.4,205.7 271.5,207.3 270.7,208.8 269.9,210.2 269.1,211.6 268.4,213 267.4,214.7 266.7,216.1 266,217.4 265.5,218.3 264.9,219.3 264.3,220.4 263.8,221.5 263,222.9 262.4,224 261.7,225.3 261,226.5 260.2,228 259.4,229.4 258.8,230.5 257.9,232.2 257.2,233.5 256.1,235.5 255.3,237 254.3,238.8 252.9,241.4 251.8,243.3 250,246.6 248.8,248.8 247.7,250.8 246.5,253 244.9,255.9 243.5,258.5 242,261.2 241.1,262.9 240,264.8 239,266.7 241.2,266.7 242.5,264.3 243.8,262 244.8,260.1 246.3,257.5 248.1,254.1 249.8,250.9 251.4,248 252.9,245.2 254.5,242.4 256.1,239.4 258.6,234.8 261.6,229.3 263.9,225.2 266.3,220.8 269.3,215.3 272.1,210.2 274.7,205.5 277.4,200.6 278.8,198.1 279.7,196.4 281,193.9 282.3,191.6 283.3,189.8 284.6,187.4 286,184.9 286.9,183.2 287.8,181.5 288.9,179.6 289.9,177.7 290.9,175.8 291.7,174.3 292.8,172.4 293.8,170.6 292,169.7 291.3,171.1 290.1,173.3 289.2,175 287.8,177.5 286.1,180.6 284,184.4 282.4,187.4 280.7,190.5 279.7,192.2 278.8,194 277.9,195.5 276.9,197.3 276.1,198.9 274.7,201.4 272.4,205.7 269.9,210.2 267.4,214.7 264.3,220.4 262.4,224 260.2,228 257.9,232.2 256.1,235.5 254.6,238.3 252.9,241.4 251.8,243.3 250.9,245 252.6,245.9 253.8,243.7 256.5,238.7 259.1,234 261.6,229.3 264,225 266.6,220.3 270.1,213.9 273.6,207.4 277.4,200.6 279.7,196.3 281.4,193.3 283.6,189.3 285.3,186.1 287.4,182.2 289.7,178 292,173.8 295.3,167.9 298.1,162.8 301.1,157.2 304.5,151 308,144.7 311.4,138.3 314.3,133.1 317,128.1 319.6,123.3 322.1,118.9 324.6,114.2 327.3,109.3 329.1,106.1 330.9,102.8 332.6,99.6 335,95.2 337,91.7 339.6,86.8 342.1,82.4 345.1,76.8 342.9,76.8 341,80.3 338.9,84.1 336.9,87.7 335.2,90.9 333.4,94.1 331.8,97 330.1,100.1 327.8,104.4 325.2,109.2 322.7,113.7 321,116.8 319.2,120.1 317.5,123.3 315.9,126.1 314.5,128.8 312.8,131.9 311,135.2 309.4,138.1 307.7,141.1 305.7,144.8 303.3,149.1 301.3,152.8 299.4,156.3 297.2,160.4 295,164.4 292.6,168.8 289.8,173.9 287.5,178 284.8,183 280.9,190.2 279.4,192.9 277.1,197 275.1,200.7",
                n2: "223.1,112.4 222.3,115.1 221.9,117 221.5,119 246.6,119.2 247.4,103 249.2,95.7 251,92.1 253.2,89.7 255.5,88.6 258.3,88.2 261.5,88.8 264,90.3 266.4,93.5 268.2,98.4 269.4,105.4 269.9,112.1 269.9,118 269.9,123.1 269.9,127.5 269.9,132.3 269.9,137.1 269.9,140.8 269.9,144.4 269.5,148.1 269.1,151.8 268.2,156.5 266.8,160.3 265.3,162.9 263.1,165.1 260.5,166.3 258.3,166.6 256.3,166.4 253.8,165.4 251.7,163.6 250.2,161.4 249,158.7 248.1,155.5 247.5,151.6 247,148.5 246.7,144.4 246.6,140.5 246.6,137.3 246.6,134.2 246.6,131.1 246.6,127.9 246.6,124.7 246.6,121.5 246.6,120.2 246.6,118.1 242.5,118.1 239,118 234.9,117.9 230.3,118.1 226.1,118.1 221.7,118.1 221.4,119.8 221.2,121.2 221,122.9 220.9,124.9 220.8,127.5 220.9,130.8 221.5,135.7 222.6,140.9 224.4,145.8 226.7,150.3 229.7,154.7 233.7,159 237.8,162.1 243.4,165.1 249.4,167 254.4,167.8 258.3,167.9 261,167.8 265,167.4 270.7,166 276.1,163.7 279.9,161.3 283.3,158.6 286.4,155.2 289,151.7 290.2,149.7 291.2,147.9 292,146 292.9,143.9 293.5,142 294.1,140.1 294.6,138 294.9,136.4 295.2,135.1 295.4,133.4 295.5,131.8 295.6,130.2 295.7,128.1 295.7,126.3 295.6,124 295.4,122 295.2,120.3 294.9,118.5 294.5,116.8 294.2,115.2 292.9,113.9 291.6,112.8 290.7,111.8 289.4,110.7 288.6,110.1 288,109.5 287.3,109.1 286.7,108.4 286.1,107.8 285.5,107.3 284.9,106.7 284.5,105.9 283.9,105.3 283.3,104.6 282.7,104 282.2,103.5 281.7,103 281.3,102.4 280.9,102 280.3,101.4 279.6,100.8 279.1,100.3 278.7,99.7 278.2,99.3 277.6,98.8 277.1,98.2 276.3,97.5 275.7,97 275.1,96.3 274.3,95.7 273.8,95.1 273.2,94.4 272.8,94 272.3,93.4 271.6,92.9 270.9,92.5 270.4,92.1 269.8,91.6 268.6,90.9 270.5,93.3 272.1,95.1 273.3,96.7 275,98.1 276.4,99.4 277.9,101 279.4,102.8 281.4,105.1 283.4,107.3 285.3,109.2 287.1,110.9 288.8,112.3 290.9,113.8 294.5,116.5 294.2,115.2 293.9,114 293.5,112.8 293.2,111.9 293.1,111.4 292.8,110.7 292.6,110.1 292.3,109.5 292,108.7 291.7,108 291.4,107.4 291.2,106.9 290.9,106.3 290.6,105.8 290.3,105.2 290,104.7 289.8,104.3 289.5,103.8 289.3,103.5 289.1,103.2 288.9,103 288.8,102.7 288.6,102.5 288.5,102.3 288.4,102.1 288.3,102 288.1,101.8 288,101.7 287.9,101.5 287.8,101.3 287.6,101.1 287.5,100.9 287.4,100.8 287.3,100.7 287.2,100.5 286.9,100.1 286.6,99.8 286.3,99.5 286,99.2 285.8,98.9 285.7,98.7 285.5,98.6 285.3,98.4 285.2,98.2 284.9,97.9 284.7,97.7 284.5,97.5 284.2,97.2 284,97 283.8,96.8 283.6,96.6 283.4,96.4 283.2,96.3 283,96.1 282.8,95.9 282.6,95.7 282.4,95.5 282.2,95.4 282,95.2 281.8,95 281.7,94.9 281.5,94.8 281.3,94.7 281.2,94.5 280.9,94.3 280.6,94.1 280.3,93.9 279.8,93.5 278.5,92.7 275.6,90.9 272.7,89.5 269.9,88.5 267.1,87.8 264.2,87.2 261.4,86.9 258.3,86.8 254.7,87 251,87.4 247.8,88.2 244.3,89.3 241,90.9 237.8,92.8 235.1,94.8 233.5,96.2 232.2,97.4 230.5,99.1 228.9,101.1 227.7,102.8 226.3,105.1 225.3,107 224.6,108.6 223.8,110.4",
                y: "272.7,305.5 277.7,302.4 284.7,299 289.6,296.8 297.4,293.9 304.2,292 312.8,290.5 321.3,289.6 332.1,289.3 361.1,296.3 377.8,304 390,312.6 396.6,321.8 399.9,329.6 401.4,336.6 402,344.5 401.8,351.8 399.3,362.8 394.3,374.2 384.3,388.2 369,398.3 353.9,406.9 338.9,416.3 351.7,420.5 364.5,426.9 376,436.8 383.3,447.7 390.3,461.2 397.3,474 400.2,483.7 398.8,493 397.7,484.7 393.5,473.2 387,461.7 380.8,449.5 373.1,438.9 363.3,429.7 352.1,423.6 331.3,417 370,394.4 384.8,381.4 393.8,367.4 397.7,350.4 397.5,337.4 395,327.6 392.1,320.8 387.4,314.7 381.3,309 373.6,304.4 367.4,301.4 357.9,296.9 347.7,293.8 331.2,289.3 342.2,289.7 351.6,290.7 356.7,291.4 360,292 364.1,292.8 368.5,293.7 372.7,294.8 377,296.1 380.2,297.2 383.5,298.5 386.5,299.8 389,300.9 391.2,302 393.1,303 395.5,304.4 397.9,305.9 401,308.1 404.5,310.9 407.9,314.1 410.3,316.8 412.6,319.6 414.8,322.8 416.6,326 418.1,329.4 419.4,332.9 420.5,337.2 421.2,341.9 421.6,348.1 420.6,358.7 417.1,368.7 412.5,375.9 407.7,381.6 402.8,386.4 396.6,391.4 388.8,396.6 380.2,401.4 370,405.9 360.7,409.6 349.8,413.5 358.8,412.2 368,412.3 379.7,413.7 390.4,416.7 400.8,421.3 409.7,426.9 417.7,434.3 423.5,441.5 428.5,450.2 431.9,460.5 433.3,470 433.3,479.7 431.9,491.9 428.7,503.5 421.6,517.4 413.5,528.2 402.6,539 388.9,548.7 372.8,556.6 354.4,562.1 335,564.6 320,564.2 305.9,562.3 290.6,557.5 275.5,550.5 263.1,541.7 253.6,531.6 246.8,519.9 244.4,508.5 245.8,496.2 250.3,487.7 257.7,480.4 269.2,475.4 280.1,475.1 290,478.2 299.4,485.8 304.6,494.1 306.9,506 304.4,519.1 297.8,528.3 289.8,536.7 287.7,541.9 288.5,548.3 292.5,553.3 303.1,558.3 318.5,561.4 326.7,559.7 336.6,553.3 346.3,542.2 352.6,531.3 357.4,519.3 360.8,507 362.6,496.5 363.3,485.8 363.1,474.7 361.6,464.6 357.6,452.7 352.6,444.1 346.1,436.6 339.2,431.3 333.1,428.4 327.2,426.4 322.8,425.5 317.7,425 312.5,425 307,425.4 300.4,426.6 299.6,423.8 305.9,420.4 313.4,415.2 318.9,410.7 325.3,404.7 332.7,396.5 339.8,386.9 347.1,374.7 350.5,367.4 355.2,354.2 357.9,339.1 357.3,322.3 354.5,310.1 349.8,301.3 344,295.4 338.1,292.4 331.3,291.5 318.2,292.4 306.9,294.7 296.7,298.4 291.2,302.2 288.3,306.9 287.7,312.1 288.8,315.5 292,319.9 298.4,326.1 303.7,333.4 306.7,343.5 306.4,354.3 300.5,367.1 292,374.7 280.5,378.8 268.1,378.2 257.7,373.5 251,367.2 246.3,359 244.3,349.5 245,341 247.7,332.2 251.7,325.3 257,318.7 262.2,313.5 266.9,309.6"
            }
        },
        Loader = function () {
            function e(t, i) {
                classCallCheck(this, e), this.body = index.Dom.body, this.app = index.Geb.id("app"), this.letterJ = index.Geb.id("letter-j"), this.letterE = index.Geb.id("letter-e"), this.letterN = index.Geb.id("letter-n"), this.letterN2 = index.Geb.id("letter-n2"), this.letterY = index.Geb.id("letter-y"), this.callback = t;
                i.current.base.charAt(1);
                this.introRTxtPQty = "m" === this.letter ? 3 : 2, this.duration = 1100, this.ease = "ExpoInOut",
                    index.BindMaker(this, ["errorLoader", "homeAfterLoader", "caseBeforeLoader", "getCallback", "callback", "preloadImg0", "preloadImg1", "preloadImg2", "preloadImg3"]), i.current.error ? (this.body.className = "", this.start(this.errorLoader)) : "/" === i.current.complete ? (this.body.className = "", this.start(this.homeAfterLoader)) : (this.body.className = "case", this.start(this.caseBeforeLoader))
            }
            return createClass(e, [{
                key: "start",
                value: function (e) {
                    this.startCallback = e;
                    var t = new index.Timeline;
                    t.from("#rect-letter-j", "opacity", 0, 1, 2e3, "linear", {
                        delay: 300
                    }), t.from("#rect-letter-n2", "opacity", 0, 1, 2e3, "linear", {
                        delay: 150
                    }), t.from("#rect-letter-n", "opacity", 0, 1, 2e3, "linear", {
                        delay: 150
                    }), t.from("#rect-letter-e", "opacity", 0, 1, 2e3, "linear", {
                        delay: 150
                    }), t.from("#rect-letter-y", "opacity", 0, 1, 2e3, "linear", {
                        delay: 150
                    }), t.play(), index.Delay(this.preloadImg0, 1300)
                }
            }, {
                key: "preloadImg",
                value: function (e, t) {
                    var i = new Image;
                    i.src = e, i.onload = t
                }
            }, {
                key: "preloadImg0",
                value: function () {
                    function e() {
                        t.preloadImg("/static/media/img/facebook/video/img-0.jpg", function (e) {
                            t.morphingStep1()
                        })
                    }
                    var t = this;
                    this.preloadImg("/static/media/img/facebook/intro/img-0.jpg", e)
                }
            }, {
                key: "morphingStep1",
                value: function () {
                    var e = new index.Morph({
                            type: "polygon",
                            element: this.letterJ,
                            newCoords: Coords.step1.j,
                            duration: this.duration,
                            ease: this.ease
                        }),
                        t = new index.Morph({
                            type: "polygon",
                            element: this.letterN,
                            newCoords: Coords.step1.n,
                            duration: this.duration,
                            ease: this.ease
                        }),
                        i = new index.Morph({
                            type: "polygon",
                            element: this.letterN2,
                            newCoords: Coords.step1.n2,
                            duration: this.duration,
                            ease: this.ease
                        }),
                        n = new index.Morph({
                            type: "polygon",
                            element: this.letterE,
                            newCoords: Coords.step1.e,
                            duration: this.duration,
                            ease: this.ease
                        }),
                        o = new index.Morph({
                            type: "polygon",
                            element: this.letterY,
                            newCoords: Coords.step1.y,
                            duration: this.duration,
                            ease: this.ease,
                            callback: this.preloadImg1
                        });
                    e.play(), n.play(), t.play(), i.play(), o.play()
                }
            }, {
                key: "preloadImg1",
                value: function () {
                    function e() {
                        t.preloadImg("/static/media/img/klm/video/img-0.jpg", function (e) {
                            t.morphingStep2()
                        })
                    }
                    var t = this;
                    this.preloadImg("/static/media/img/klm/intro/img-0.jpg", e)
                }
            }, {
                key: "morphingStep2",
                value: function () {
                    var e = new index.Morph({
                            type: "polygon",
                            element: this.letterJ,
                            newCoords: Coords.step2.j,
                            duration: this.duration,
                            ease: this.ease
                        }),
                        t = new index.Morph({
                            type: "polygon",
                            element: this.letterE,
                            newCoords: Coords.step2.e,
                            duration: this.duration,
                            ease: this.ease
                        }),
                        i = new index.Morph({
                            type: "polygon",
                            element: this.letterN,
                            newCoords: Coords.step2.n,
                            duration: this.duration,
                            ease: this.ease
                        }),
                        n = new index.Morph({
                            type: "polygon",
                            element: this.letterN2,
                            newCoords: Coords.step2.n2,
                            duration: this.duration,
                            ease: this.ease
                        }),
                        o = new index.Morph({
                            type: "polygon",
                            element: this.letterY,
                            newCoords: Coords.step2.y,
                            duration: this.duration,
                            ease: this.ease,
                            callback: this.preloadImg2
                        });
                    e.play(), t.play(), i.play(), n.play(), o.play()
                }
            }, {
                key: "preloadImg2",
                value: function () {
                    function e() {
                        t.preloadImg("/static/media/img/adidas/video/img-0.jpg", function (e) {
                            t.morphingStep3()
                        })
                    }
                    var t = this;
                    this.preloadImg("/static/media/img/adidas/intro/img-0.jpg", e)
                }
            }, {
                key: "morphingStep3",
                value: function () {
                    var e = new index.Morph({
                            type: "polygon",
                            element: this.letterJ,
                            newCoords: Coords.step3.j,
                            duration: this.duration,
                            ease: this.ease
                        }),
                        t = new index.Morph({
                            type: "polygon",
                            element: this.letterE,
                            newCoords: Coords.step3.e,
                            duration: this.duration,
                            ease: this.ease
                        }),
                        i = new index.Morph({
                            type: "polygon",
                            element: this.letterN,
                            newCoords: Coords.step3.n,
                            duration: this.duration,
                            ease: this.ease
                        }),
                        n = new index.Morph({
                            type: "polygon",
                            element: this.letterN2,
                            newCoords: Coords.step3.n2,
                            duration: this.duration,
                            ease: this.ease
                        }),
                        o = new index.Morph({
                            type: "polygon",
                            element: this.letterY,
                            newCoords: Coords.step3.y,
                            duration: this.duration,
                            ease: this.ease,
                            callback: this.preloadImg3
                        });
                    e.play(), t.play(), i.play(), n.play(), o.play()
                }
            }, {
                key: "preloadImg3",
                value: function () {
                    function e() {
                        t.preloadImg("/static/media/img/mcdonalds/video/img-0.jpg", function (e) {
                            t.morphingStep4()
                        })
                    }
                    var t = this;
                    this.preloadImg("/static/media/img/mcdonalds/intro/img-0.jpg", e)
                }
            }, {
                key: "morphingStep4",
                value: function () {
                    var e = new index.Morph({
                            type: "polygon",
                            element: this.letterJ,
                            newCoords: Coords.step4.j,
                            duration: this.duration,
                            ease: this.ease
                        }),
                        t = new index.Morph({
                            type: "polygon",
                            element: this.letterE,
                            newCoords: Coords.step4.e,
                            duration: this.duration,
                            ease: this.ease
                        }),
                        i = new index.Morph({
                            type: "polygon",
                            element: this.letterN,
                            newCoords: Coords.step4.n,
                            duration: this.duration,
                            ease: this.ease
                        }),
                        n = new index.Morph({
                            type: "polygon",
                            element: this.letterN2,
                            newCoords: Coords.step4.n2,
                            duration: this.duration,
                            ease: this.ease
                        }),
                        o = new index.Morph({
                            type: "polygon",
                            element: this.letterY,
                            newCoords: Coords.step4.y,
                            duration: this.duration,
                            ease: this.ease
                        });
                    e.play(), t.play(), i.play(), n.play(), o.play(), index.Delay(this.startCallback, this.duration - 100)
                }
            }, {
                key: "errorLoader",
                value: function () {
                    this.app.className = "no-0", this.jennyTxt = index.Geb.class("h-intro-jenny-txt"), this.burgerLineDark = index.Geb.class("burger-line-dark"), this.burgerLineDark = index.Geb.class("burger-line-dark");
                    var e = new index.Timeline;
                    e.from("#loader", "opacity", 1, 0, 800, "linear"), e.from("#p404-bg", "opacity", 0, 1, 800, "linear", {
                        delay: 800
                    }), e.from("#p404-oops", "3dy", 100, 0, 1200, "ExpoOut", {
                        delay: 200
                    }), e.from("#p404-txt-p", "3dy", 100, 0, 1200, "ExpoOut", {
                        delay: 200
                    }), e.from("#p404-btn-cover", "3dy", 105, 0, 600, "Power3In", {
                        delay: 0
                    }), e.from("#p404-btn", "3dy", 105, 0, {
                        delay: 600
                    }), e.from("#p404-btn-cover", "3dy", 0, -105, 1200, "ExpoOut"), e.from("#burger-mask", "3dy", 100, 0, 600, "Power3In", {
                        delay: 200
                    }), e.from("#burger-mask", "3dy", 0, -100, 1200, "ExpoOut", {
                        delay: 600
                    }), e.from("#loader", "3dy", 0, 200), e.from(".p404-left", "3dy", -100, 0, 1200, "ExpoOut"), e.from("#p404-update", "3dy", 100, 0, 1200, "ExpoOut"), e.from("#burger-border-wrap", "opacity", 0, .5), e.from(this.burgerLineDark[0], "3dx", -100, 0, 1e3, "Power4InOut", {
                        delay: 100
                    }), e.from(this.burgerLineDark[1], "3dx", -100, 0, 1e3, "Power4InOut", {
                        delay: 60
                    }), e.from(this.burgerLineDark[2], "3dx", -100, 0, 1e3, "Power4InOut", {
                        delay: 60,
                        callback: this.getCallback
                    }), e.play()
                }
            }, {
                key: "homeAfterLoader",
                value: function () {
                    this.app.className = "no-0", this.jennyTxt = index.Geb.class("h-intro-jenny-txt"), this.burgerLineDark = index.Geb.class("burger-line-dark");
                    var e = new index.Timeline;
                    e.from("#h-intro", "opacity", 0, 1), e.from("#loader-bg", "opacity", 1, 0, 1e3, "linear"), e.from(this.jennyTxt[0], "3dy", 100, 0, 1200, "ExpoOut", {
                        delay: 0
                    }), e.from(this.jennyTxt[1], "3dy", 100, 0, 1200, "ExpoOut"), e.from("#burger-mask", "3dy", 100, 0, 600, "Power3In", {
                        delay: 300
                    }), e.from("#burger-mask", "3dy", 0, -100, 1200, "ExpoOut", {
                        delay: 600
                    }), e.from("#h-intro-jenny", "opacity", 0, 1), e.from("#loader", "3dy", 0, 200), e.from(".h-intro-left", "3dy", -100, 0, 1200, "ExpoOut"), e.from("#h-intro-update", "3dy", 100, 0, 1200, "ExpoOut"), e.from("#burger-border-wrap", "opacity", 0, .5), e.from(this.burgerLineDark[0], "3dx", -100, 0, 1e3, "Power4InOut", {
                        delay: 100
                    }), e.from(this.burgerLineDark[1], "3dx", -100, 0, 1e3, "Power4InOut", {
                        delay: 60
                    }), e.from(this.burgerLineDark[2], "3dx", -100, 0, 1e3, "Power4InOut", {
                        delay: 60
                    }), e.from("#h-intro-line", "3dy", 100, 50, 500, "Power4In", {
                        delay: 0,
                        callback: this.getCallback
                    }), e.from("#h-intro-line", "3dy", 50, 0, 800, "ExpoOut", {
                        delay: 500
                    }), e.play()
                }
            }, {
                key: "caseBeforeLoader",
                value: function () {
                    var e = "ExpoOut",
                        t = index.Geb.class("burger-line-light"),
                        i = index.Geb.class("intro-l-img")[0],
                        n = index.Geb.class("intro-l-bg")[0],
                        o = index.Geb.class("intro-r-txt-title")[0],
                        r = index.Geb.class("intro-r-line")[0],
                        s = index.Geb.class("intro-r-txt-p"),
                        a = index.Geb.class("intro-line")[0],
                        l = index.Geb.class("intro-mask")[0],
                        h = index.Geb.class("case-back-btn")[0],
                        c = index.Geb.class("case-back-line")[0],
                        d = index.Geb.id("intro-l-img-0-b"),
                        u = new index.Timeline;
                    u.from("#loader-svg", "opacity", 1, 0, 500, "linear", {
                        delay: 600
                    }), u.from("#loader", "opacity", 1, 0, 800, "linear", {
                        delay: 500
                    }), u.from("#burger-border-wrap", "opacity", 0, .5), u.from(t[0], "3dx", -100, 0), u.from(t[1], "3dx", -100, 0), u.from(t[2], "3dx", -100, 0), u.from(".next", "opacity", 0, 1), u.from(l, "opacity", 0, 1), u.from(i, "3dx", 0, "-200"), d && u.from(d, "3dx", 0, "-200"), u.from(n, "3dx", -100, 0, 1500, "Power5Out", {
                        delay: 300
                    }), u.from(i, "opacity", 0, 1, 500, "Power2In", {
                        delay: 80
                    }), u.from(i, "3dx", "-200", 0, 1200, e, {
                        callback: this.getCallback
                    }), d && (u.from(d, "opacity", 0, 1, 500, "Power2In", {
                        delay: 80
                    }), u.from(d, "3dx", 0, "-200", 1200, e)), u.from(o, "3dy", 100, 0, 1200, e, {
                        delay: 500
                    }), u.from(r, "3dx", -110, 0, 1200, e), 2 === this.introRTxtPQty ? (u.from(s[0], "3dy", 100, 0, 1200, e, {
                        delay: 300
                    }), u.from(s[1], "3dy", 100, 0, 1200, e, {
                        delay: 120
                    })) : 3 === this.introRTxtPQty && (u.from(s[0], "3dy", 100, 0, 1200, e, {
                        delay: 300
                    }), u.from(s[1], "3dy", 100, 0, 1200, e, {
                        delay: 120
                    }), u.from(s[2], "3dy", 100, 0, 1200, e, {
                        delay: 120
                    })), u.from(a, "3dy", 100, 0, 1200, e, {
                        delay: 300
                    }), u.from(h, "3dx", -100, 0, 1200, e), u.from(c, "3dx", -100, 0, 1200, e), u.from("#loader", "3dy", 0, 100), u.play()
                }
            }, {
                key: "getCallback",
                value: function () {
                    this.callback()
                }
            }]), e
        }(),
        Burger = function () {
            function e() {
                classCallCheck(this, e), this.burger = index.Geb.id("burger"), this.burgerMenuEl = index.Geb.id("burger-menu"), this.burgerMenuSail = index.Geb.class("burger-menu-sail"), this.burgerLineDark = index.Geb.class("burger-line-dark"), this.burgerLineLight = index.Geb.class("burger-line-light"), this.burgerClose = index.Geb.class("burger-close"), this.burgerLineWrap = index.Geb.class("burger-line-wrap"), index.BindMaker(this, ["menuIsOpen", "addOverListeners", "getClose", "menuMouseenter", "menuMouseleave", "getCallback"])
            }
            return createClass(e, [{
                key: "open",
                value: function (e, t, i) {
                    this.paralyseDestroy = i, this.getCanChangePage = t, this.isDark = e, index.WTDisable.on(), this.paralyseDestroy.on(), this.burger.className = "oh active";
                    var n = new index.Timeline;
                    n.from(this.burgerMenuEl, "3dy", -100, 0), n.from(this.burgerMenuSail[1], "3dy", -100, -50, 500, "Power4In"), n.from(this.burgerMenuSail[0], "3dy", -100, -50, 500, "Power4In", {
                        delay: 50
                    }), n.from(this.burgerMenuSail[1], "3dy", -50, 0, 800, "ExpoOut", {
                        delay: 450
                    }), n.from(this.burgerMenuSail[0], "3dy", -50, 0, 800, "ExpoOut", {
                        delay: 50,
                        callbackDelay: 100,
                        callback: this.addOverListeners
                    }), n.from("#burger-menu-line", "3dy", -100, 0, 1600, "ExpoInOut", {
                        callback: this.menuIsOpen
                    }), n.from(".burger-menu-link", "3dy", -100, 0, 1600, "ExpoOut", {
                        delay: 800
                    }), n.from(".burger-menu-share", "3dy", 100, 0, 1600, "ExpoOut", {
                        delay: 500
                    }), n.play();
                    var o = new index.Timeline;
                    if (o.from(this.burgerLineDark[0], "3dx", 0, 100, 1e3, "Power4InOut"), o.from(this.burgerLineDark[1], "3dx", 0, 100, 1e3, "Power4InOut", {
                            delay: 60
                        }), o.from(this.burgerLineDark[2], "3dx", 0, 100, 1e3, "Power4InOut", {
                            delay: 60
                        }), o.from(this.burgerClose[0], "3dy", -108, 0, 1e3, "Power4InOut", {
                            delay: 700
                        }), o.from(this.burgerClose[1], "3dy", -108, 0, 1e3, "Power4InOut", {
                            delay: 120
                        }), o.play(), !this.isDark) {
                        var r = new index.Timeline;
                        r.from(this.burgerLineLight[0], "3dx", 0, 100, 1e3, "Power4InOut"), r.from(this.burgerLineLight[1], "3dx", 0, 100, 1e3, "Power4InOut", {
                            delay: 60
                        }), r.from(this.burgerLineLight[2], "3dx", 0, 100, 1e3, "Power4InOut", {
                            delay: 60
                        }), r.play()
                    }
                }
            }, {
                key: "listeners",
                value: function (e) {
                    index.Listen("#burger", e, "click", this.getClose)
                }
            }, {
                key: "addOverListeners",
                value: function () {
                    this.changeClass("active"), this.overListeners("add")
                }
            }, {
                key: "overListeners",
                value: function (e) {
                    index.Listen(".burger-menu-link", e, "mouseenter", this.menuMouseenter), index.Listen(".burger-menu-link", e, "mouseleave", this.menuMouseleave)
                }
            }, {
                key: "menuMouseenter",
                value: function (e) {
                    var t = e.target.id,
                        i = +t.charAt(t.length - 1),
                        n = 0 === i ? .8 : .08,
                        o = index.Geb.id("burger-menu-bg-" + i),
                        r = o.parentNode;
                    this.tl = new index.Timeline, this.tl.from(o, "opacity", 0, n, 800, "Power4Out"), this.tl.from(r, "scale", 1.1, 1, 2e3, "ExpoOut"), this.tl.play()
                }
            }, {
                key: "menuMouseleave",
                value: function () {
                    this.tl && this.tl.reverse()
                }
            }, {
                key: "getClose",
                value: function () {
                    this.close(this.isDark, this.getCanChangePage)
                }
            }, {
                key: "close",
                value: function (e, t) {
                    this.listeners("remove"), this.overListeners("remove"), this.callback = t, this.changeClass("");
                    var i = new index.Timeline;
                    i.from(this.burgerClose[0], "3dy", 0, -108, 1e3, "Power4InOut"), i.from(this.burgerClose[1], "3dy", 0, -108, 1e3, "Power4InOut", {
                        delay: 120
                    }), i.from(this.burgerLineDark[0], "3dx", 100, 0, 1e3, "Power4InOut", {
                        delay: 600
                    }), i.from(this.burgerLineDark[1], "3dx", 100, 0, 1e3, "Power4InOut", {
                        delay: 60
                    }), i.from(this.burgerLineDark[2], "3dx", 100, 0, 1e3, "Power4InOut", {
                        delay: 60
                    }), i.play();
                    var n = index.Win.pageY;
                    if (!e)
                        for (var o = 0; o < 3; o++)
                            if (this.burgerLineWrap[o].classList.contains("active")) {
                                if (0 === n) {
                                    var r = new index.Merom(this.burgerLineLight[o], "3dx", 100, 0, 1e3, "Power4InOut", {
                                        delay: 30 * o + 600
                                    });
                                    r.play(), this.burgerLineWrap[o].classList.remove("active")
                                }
                            } else {
                                var s = new index.Merom(this.burgerLineLight[o], "3dx", 100, 0, 1e3, "Power4InOut", {
                                    delay: 30 * o + 600
                                });
                                s.play()
                            }
                    var a = new index.Timeline;
                    a.from(this.burgerMenuEl, "3dy", 0, -50, 500, "Power4In"), a.from(this.burgerMenuEl, "3dy", -50, -100, 800, "ExpoOut", {
                        delay: 500
                    }), a.from("#burger-menu-line", "3dy", 0, -100, {
                        delay: 800
                    }), a.from(".burger-menu-link", "3dy", 0, -100), a.from(".burger-menu-sail", "3dy", 0, -100), a.from(".burger-menu-share", "3dy", 0, -100), a.from(".burger-menu-bg", "scale", 1, 1.1), a.from(".burger-menu-bg-no", "opacity", 1, 0, {
                        callback: this.getCallback
                    }), a.play()
                }
            }, {
                key: "getCallback",
                value: function () {
                    this.burger.className = "oh", this.callback && (index.WTDisable.off(), this.callback())
                }
            }, {
                key: "changeClass",
                value: function (e) {
                    this.burgerMenuEl.className = e
                }
            }, {
                key: "menuIsOpen",
                value: function () {
                    this.listeners("add"), this.paralyseDestroy.off()
                }
            }]), e
        }(),
        Transition = function () {
            function e() {
                classCallCheck(this, e), this.app = index.Geb.id("app"), index.BindMaker(this, ["removeScrollBar", "closeMenu", "getCallback"])
            }
            return createClass(e, [{
                key: "init",
                value: function (e, t, i, n, o, r) {
                    this.callback = e, this.caseNo = t, this.removeCurrentXhr = i, this.type = n, this.burgerMenu = o, this.letter = r.asked.base.charAt(1), this.introRTxtPQty = "m" === this.letter ? 3 : 2, "menuCaseToCase" === this.type && (this.type = "m" === this.letter || "a" === this.letter || "k" === this.letter || "f" === this.letter ? "menuCaseToCase" : "menuCaseToHome"), "menuHomeToCase" !== this.type && "menuCaseToCase" !== this.type && "menuCaseToHome" !== this.type || this.removeCurrentXhr();
                    this.app.getBoundingClientRect();
                    this.introImg = index.Geb.class("intro-l-img")[0], this.introLBg = index.Geb.class("intro-l-bg")[0], this.intro = index.Geb.class("intro")[0], this.introRTxtTitle = index.Geb.class("intro-r-txt-title")[0], this.introRLine = index.Geb.class("intro-r-line")[0], this.introRTxt = index.Geb.class("intro-r-txt-p"), this.introLine = index.Geb.class("intro-line")[0], this.introMask = index.Geb.class("intro-mask")[0], this.caseBackBtn = index.Geb.class("case-back-btn")[0], this.caseBackLine = index.Geb.class("case-back-line")[0], this.caseWrap = index.Geb.id(this.letter + "-wrap");
                    var s = index.Geb.id(this.letter),
                        a = index.Win.w - index.Geb.id("xhr").offsetWidth;
                    this.introImgWithScroll = String(a / 2), "menuHomeToCase" !== this.type && "homeToCase" !== this.type || (this.caseWrap.style.height = index.Win.h + "px", this.intro.style.width = s.offsetWidth - a + "px"), index.Delay(this.closeMenu, 100)
                }
            }, {
                key: "closeMenu",
                value: function () {
                    "menuCaseToCase" === this.type ? (index.ScrollZero(), this.burgerMenu.close(!1), this.menuToCase()) : "menuHomeToCase" === this.type ? (index.ScrollZero(), this.burgerMenu.close(!1), index.Delay(this.removeScrollBar, 1300), this.menuToCase()) : "homeToCase" === this.type ? (index.Delay(this.removeScrollBar, 1500), this.homeToCase()) : "menuCaseToHome" === this.type && (this.burgerMenu.close(!0), this.caseToHome())
                }
            }, {
                key: "homeToCase",
                value: function () {
                    var e = index.Geb.class("h-txt-title"),
                        t = index.Geb.class("h-bottom-title"),
                        i = index.Geb.class("h-bottom-value-" + this.caseNo),
                        n = index.Geb.class("h-pagi-top-no"),
                        o = index.Geb.class("h-txt-desc-txt"),
                        r = index.Geb.class("h-client"),
                        s = index.Geb.id("h-line-t-l-r"),
                        a = index.Geb.id("h-line-b-l-wrap"),
                        l = index.Geb.id("h-btn-container"),
                        h = index.Geb.id("h-img-" + this.caseNo),
                        c = h.getBoundingClientRect().left,
                        d = this.introImg.getBoundingClientRect().left,
                        u = String(c - d),
                        f = String(r[this.caseNo].offsetWidth),
                        m = String(s.offsetWidth),
                        g = String(l.offsetWidth / 2),
                        p = String(a.offsetWidth),
                        y = "Power3In",
                        x = "ExpoOut",
                        b = new index.Timeline;
                    b.from(this.introImg, "3dx", "0", u), 0 === this.caseNo && b.from("#intro-l-img-0-b", "3dx", "0", u), b.from(this.introImg, "opacity", 0, 1), 0 === this.caseNo && b.from("#intro-l-img-0-b", "opacity", 0, 1), b.from(h, "opacity", 1, 0), 0 === this.caseNo && b.from("#h-img-0-b", "opacity", 1, 0), b.from("#h-line-l-t", "3dy", 0, 100, 500, y, {
                        delay: 200
                    }), b.from("#h-line-l-b", "3dy", 0, -100, 500, y), b.from("#h-line-r-t", "3dy", 0, 100, 500, y), b.from("#h-line-r-b", "3dy", 0, -100, 500, y), b.from("#h-line-t-l-l", "3dx", 0, -100, 500, y), b.from(s, "3dx", f, m, 500, y), b.from("#h-line-t-r", "3dx", 0, -100, 500, y), b.from(a, "3dx", "-" + g, "-" + p, 500, y), b.from("#h-line-b-r-wrap", "3dx", g, p, 500, y), b.from("#h-client-" + this.caseNo, "3dy", 0, 100, 500, y), b.from(n[this.caseNo + 1], "3dy", 0, -100, 500, y), b.from("#h-pagi-bottom-marker", "3dy", 0, 100, 500, y), b.from("#h-pagi-line", "3dx", 0, -100, 500, y), b.from(e[this.caseNo], "3dy", 0, 100, 500, y), b.from("#h-txt-desc-line", "3dx", 0, -100, 500, y), b.from(o[this.caseNo], "3dy", 0, 100, 500, y), b.from(t[0], "3dy", 0, 100, 500, y), b.from(i[0], "3dy", 0, 100, 500, y), b.from(t[1], "3dy", 0, 100, 500, y), b.from(i[1], "3dy", 0, 100, 500, y), b.from(t[2], "3dy", 0, 100, 500, y), b.from(i[2], "3dy", 0, 100, 500, y), b.from("#h-btn-wrap", "3dy", 0, 105, 500, y), b.from(this.introImg, "3dx", u, this.introImgWithScroll, 1400, "ExpoInOut", {
                        delay: 100
                    }), 0 === this.caseNo && b.from("#intro-l-img-0-b", "3dx", u, +this.introImgWithScroll - 100, 1400, "ExpoInOut"), b.from(this.introLBg, "3dx", -100, 0, 1400, "ExpoInOut"), b.from(this.introRTxtTitle, "3dy", 100, 0, 1200, x, {
                        delay: 1300,
                        callback: this.getCallback
                    }), b.from(this.introRLine, "3dx", -110, 0, 1200, x, {
                        delay: 300
                    }), 2 === this.introRTxtPQty ? (b.from(this.introRTxt[0], "3dy", 100, 0, 1200, x, {
                        delay: 300
                    }), b.from(this.introRTxt[1], "3dy", 100, 0, 1200, x, {
                        delay: 110
                    })) : 3 === this.introRTxtPQty && (b.from(this.introRTxt[0], "3dy", 100, 0, 1200, x, {
                        delay: 300
                    }), b.from(this.introRTxt[1], "3dy", 100, 0, 1200, x, {
                        delay: 110
                    }), b.from(this.introRTxt[2], "3dy", 100, 0, 1200, x, {
                        delay: 110
                    })), b.from(this.introLine, "3dy", 100, 0, 1200, x, {
                        delay: 300
                    }), b.from(this.caseBackBtn, "3dx", -100, 0, 1200, x), b.from(this.caseBackLine, "3dx", -100, 0, 1200, x), b.from(this.introMask, "opacity", 0, 1), b.from(".next", "opacity", 0, 1), b.play()
                }
            }, {
                key: "menuToCase",
                value: function () {
                    var e = "ExpoOut",
                        t = index.Geb.id("intro-l-img-0-b"),
                        i = new index.Timeline;
                    i.from(".next", "opacity", 0, 1), i.from(this.introMask, "opacity", 0, 1), i.from(this.introImg, "3dx", 0, "-200"), t && i.from(t, "3dx", 0, "-200"), i.from(this.introLBg, "3dx", -100, 0, 1500, "Power5Out", {
                        delay: 800
                    }), i.from(this.introImg, "opacity", 0, 1, 500, "Power2In", {
                        delay: 80
                    }), i.from(this.introImg, "3dx", "-200", 0, 1200, e), t && i.from(t, "opacity", 0, 1, 500, "Power2In"), i.from(this.introRTxtTitle, "3dy", 100, 0, 1200, e, {
                        delay: 500,
                        callback: this.getCallback
                    }), i.from(this.introRLine, "3dx", -110, 0, 1200, e), 2 === this.introRTxtPQty ? (i.from(this.introRTxt[0], "3dy", 100, 0, 1200, e, {
                        delay: 300
                    }), i.from(this.introRTxt[1], "3dy", 100, 0, 1200, e, {
                        delay: 120
                    })) : 3 === this.introRTxtPQty && (i.from(this.introRTxt[0], "3dy", 100, 0, 1200, e, {
                        delay: 300
                    }), i.from(this.introRTxt[1], "3dy", 100, 0, 1200, e, {
                        delay: 120
                    }), i.from(this.introRTxt[2], "3dy", 100, 0, 1200, e, {
                        delay: 120
                    })), i.from(this.introLine, "3dy", 100, 0, 1200, e, {
                        delay: 300
                    }), i.from(this.caseBackBtn, "3dx", -100, 0, 1200, e), i.from(this.caseBackLine, "3dx", -100, 0, 1200, e), i.play()
                }
            }, {
                key: "caseToHome",
                value: function () {
                    this.jennyTxt = index.Geb.class("h-intro-jenny-txt");
                    var e = new index.Timeline;
                    e.from("#h-intro", "opacity", 0, 1), e.from("#h-intro-jenny", "opacity", 0, 1, 1e3, "linear", {
                        delay: 600
                    }), e.from("#h-intro-jenny", "3dy", 15, 0, 1200, "ExpoOut"), e.from(this.jennyTxt[0], "3dy", 100, 0, 1200, "ExpoOut", {
                        delay: 100
                    }), e.from(this.jennyTxt[1], "3dy", 100, 0, 1200, "ExpoOut", {
                        delay: 100
                    }), e.from(".h-intro-left", "3dy", -100, 0, 1200, "ExpoOut", {
                        delay: 200
                    }), e.from("#h-intro-update", "3dy", 100, 0, 1200, "ExpoOut"), e.from("#burger-border-wrap", "opacity", 0, .5), e.from("#h-intro-line", "3dy", 100, 50, 500, "Power4In", {
                        delay: 200,
                        callback: this.getCallback
                    }), e.from("#h-intro-line", "3dy", 50, 0, 800, "ExpoOut", {
                        delay: 500
                    }), e.play()
                }
            }, {
                key: "getCallback",
                value: function () {
                    "homeToCase" === this.type && this.removeCurrentXhr(), "menuCaseToCase" === this.type && this.removeScrollBar(), "menuCaseToHome" === this.type ? this.app.className = "no-0" : this.app.className = "";
                    this.app.getBoundingClientRect();
                    index.WTDisable.off(), this.callback()
                }
            }, {
                key: "removeScrollBar",
                value: function () {
                    this.caseWrap.style.height = "", this.intro.style.width = ""
                }
            }]), e
        }(),
        ErrorController = function () {
            function e() {
                classCallCheck(this, e), index.BindMaker(this, ["getCanChangePage", "burgerClick", "getHome"])
            }
            return createClass(e, [{
                key: "init",
                value: function (e) {
                    this.paralyseDestroy = e, this.burgerMenuEl = index.Geb.id("burger-menu"), this.burgerMenu = new Burger, this.transition = new Transition, this.listeners("add"), this.getCanChangePage()
                }
            }, {
                key: "getCanChangePage",
                value: function () {
                    this.canChangePage = !0
                }
            }, {
                key: "getCanNotChangePage",
                value: function () {
                    this.canChangePage = !1
                }
            }, {
                key: "listeners",
                value: function (e) {
                    index.Listen("#burger", e, "click", this.burgerClick), index.Listen("#p404-btn", e, "click", this.getHome)
                }
            }, {
                key: "getHome",
                value: function () {
                    var e = new index.Timeline;
                    e.from("#p404-sail", "3dx", 100, 0), e.from("#p404-sail", "opacity", 0, 1, 800, "linear", {
                        callback: function (e) {
                            window.location.href = "/"
                        }
                    }), e.play()
                }
            }, {
                key: "burgerClick",
                value: function () {
                    if (this.canChangePage) {
                        this.getCanNotChangePage();
                        this.burgerMenu.open(!0, this.getCanChangePage, this.paralyseDestroy)
                    }
                }
            }, {
                key: "pagiTopMouseenter",
                value: function () {
                    this.moveListeners("remove"), this.currentNo = this.getCurrentNo(), this.pagiOverTop.init(this.currentNo)
                }
            }, {
                key: "destroy",
                value: function (e, t) {
                    function i(e, t, i) {
                        t.insertAsked(), n.transition.init(e, 0, function (e) {
                            t.removeCurrent()
                        }, "menuHomeToCase", n.burgerMenu, i)
                    }
                    var n = this;
                    "burger-menu-link-0" === t.id ? n.getHome() : (n.listeners("remove"), index.WTDisable.on(), e(i))
                }
            }]), e
        }(),
        ErrorController$1 = new ErrorController,
        Intro = function () {
            function e() {
                classCallCheck(this, e)
            }
            return createClass(e, [{
                key: "show",
                value: function () {
                    var e = new index.Timeline;
                    e.from("#h-intro", "3dy", -100, -50, 500, "Power4In"), e.from("#h-intro", "3dy", -50, 0, 800, "ExpoOut", {
                        delay: 500
                    }), e.play()
                }
            }, {
                key: "hide",
                value: function () {
                    var e = new index.Timeline;
                    e.from("#h-intro", "3dy", 0, -50, 500, "Power4In"), e.from("#h-intro", "3dy", -50, -100, 800, "ExpoOut", {
                        delay: 500
                    }), e.play()
                }
            }]), e
        }(),
        Intro$1 = new Intro,
        Burger$1 = function () {
            function e() {
                classCallCheck(this, e), this.burgerLineLight = index.Geb.class("burger-line-light")
            }
            return createClass(e, [{
                key: "darkToLight",
                value: function () {
                    var e = new index.Timeline;
                    e.from(this.burgerLineLight[0], "3dx", -100, 0, 1e3, "Power4InOut", {
                        delay: 500
                    }), e.from(this.burgerLineLight[1], "3dx", -100, 0, 1e3, "Power4InOut", {
                        delay: 60
                    }), e.from(this.burgerLineLight[2], "3dx", -100, 0, 1e3, "Power4InOut", {
                        delay: 60
                    }), e.play()
                }
            }, {
                key: "lightToDark",
                value: function (e) {
                    var t = new index.Timeline;
                    t.from(this.burgerLineLight[0], "3dx", 0, -100, 1e3, "Power4InOut", {
                        delay: e
                    }), t.from(this.burgerLineLight[1], "3dx", 0, -100, 1e3, "Power4InOut", {
                        delay: 60
                    }), t.from(this.burgerLineLight[2], "3dx", 0, -100, 1e3, "Power4InOut", {
                        delay: 60
                    }), t.play()
                }
            }]), e
        }(),
        Burger$2 = new Burger$1,
        Case = function () {
            function e() {
                classCallCheck(this, e), this.bottomTitle = index.Geb.class("h-bottom-title"), this.txtTitle = index.Geb.class("h-txt-title"), this.img = index.Geb.class("h-img"), this.btnCover = index.Geb.class("h-btn-cover"), this.btn = index.Geb.class("h-btn"), this.txtDescTxt = index.Geb.class("h-txt-desc-txt"), this.txtDescTxtL = this.txtDescTxt.length, this.txtDescTxtWrap = index.Geb.class("h-text-desc-txt-wrap"), this.btnContainer = index.Geb.id("h-btn-container"), index.BindMaker(this, ["geSize"]), this.RO = new index.RO({
                    callback: this.geSize,
                    throttle: {
                        delay: 100,
                        atEnd: !0
                    }
                }), this.RO.on(), this.geSize()
            }
            return createClass(e, [{
                key: "showFirstTime",
                value: function (e, t) {
                    var i = index.Geb.class("h-bottom-value-" + e),
                        n = "ExpoOut",
                        o = new index.Timeline;
                    o.from("#h-client-" + e, "3dy", 100, 0, 1200, n, {
                        delay: 1100
                    }), o.from(this.txtTitle[e], "3dy", 100, 0, 1200, n, {
                        delay: 300
                    }), o.from("#h-txt-desc-line", "3dx", -110, 0, 1200, n), o.from(this.txtDescTxt[e], "3dy", 100, 0, 1200, n), o.from(this.bottomTitle[0], "3dy", 100, 0, 1200, n, {
                        delay: 300
                    }), o.from(i[0], "3dy", 100, 0, 1200, n), o.from(this.bottomTitle[1], "3dy", 100, 0, 1200, n, {
                        delay: 100
                    }), o.from(i[1], "3dy", 100, 0, 1600, n), o.from(this.bottomTitle[2], "3dy", 100, 0, 1600, n, {
                        delay: 100
                    }), o.from(i[2], "3dy", 100, 0, 1600, n), o.from(this.img[e + 1], "3dx", 16, 0, 1200, n), 0 === e && (o.from(this.img[e], "3dx", 16, 0, 1200, n, {
                        delay: 40
                    }), o.from(this.img[e], "opacity", 0, 1, 600, "linear")), o.from(this.img[e + 1], "opacity", 0, 1, 600, "linear"), o.from("#h-btn-container", "3dy", 300, 0, {
                        delay: 160
                    }), o.from(this.btnCover[e], "3dy", 105, 0, 600, "Power3In"), o.from(this.btn[e], "3dy", 100, 0), o.from(this.btn[e], "opacity", 0, 1, {
                        delay: 600,
                        callbackDelay: 800,
                        callback: t
                    }), o.from(this.btnCover[e], "3dy", 0, -105, 1200, n), o.play()
                }
            }, {
                key: "show",
                value: function (e, t, i) {
                    var n = index.Geb.class("h-bottom-value-" + e),
                        o = "ExpoOut",
                        r = new index.Timeline;
                    r.from("#h-client-" + e, "3dy", 100, 0, 1200, o, {
                        delay: 1e3
                    }), r.from(this.txtTitle[e], "3dy", 100, 0, 1200, o), r.from("#h-txt-desc-line", "3dx", 110 * t, 0, 1200, o), r.from(this.txtDescTxt[e], "3dy", 100, 0, 1200, o), r.from(n[0], "3dy", 100, 0, 1200, o), r.from(n[1], "3dy", 100, 0, 1200, o), r.from(n[2], "3dy", 100, 0, 1200, o), r.from(this.img[e + 1], "3dx", 16, 0, 1200, o), 0 === e && (r.from(this.img[e], "3dx", 16, 0, 1200, o, {
                        delay: 40
                    }), r.from(this.img[e], "opacity", 0, 1, 400, "linear")), r.from(this.img[e + 1], "opacity", 0, 1, 400, "linear"), r.from(this.btnCover[e], "3dy", 105, 0, 600, "Power3In"), r.from(this.btn[e], "3dy", 100, 0, {
                        delay: 600
                    }), r.from(this.btn[e], "opacity", 0, 1, {
                        callbackDelay: 800,
                        callback: i
                    }), r.from(this.btnCover[e], "3dy", 0, -105, 1200, o), r.play()
                }
            }, {
                key: "hide",
                value: function (e, t) {
                    var i = index.Geb.class("h-bottom-value-" + e),
                        n = "Power3In",
                        o = new index.Timeline;
                    o.from("#h-client-" + e, "3dy", 0, 100, 500, n), o.from(this.txtTitle[e], "3dy", 0, 100, 500, n), o.from("#h-txt-desc-line", "3dx", 0, -110 * t, 500, n), o.from(this.txtDescTxt[e], "3dy", 0, 100, 500, n), o.from(i[0], "3dy", 0, 100, 500, n), o.from(i[1], "3dy", 0, 100, 500, n), o.from(i[2], "3dy", 0, 100, 500, n), o.from(this.img[e + 1], "3dx", 0, 16, 500, n), 0 === e && (o.from(this.img[e], "3dx", 0, 16, 500, n, {
                        delay: 40
                    }), o.from(this.img[e], "opacity", 1, 0, 500, "linear")), o.from(this.img[e + 1], "opacity", 1, 0, 500, "linear"), o.from(this.btn[e], "3dy", 0, 100, 500, n), o.from(this.btn[e], "opacity", 1, 0, {
                        delay: 500
                    }), o.from(this.btnCover[e], "3dy", 0, 105), o.play()
                }
            }, {
                key: "hideComplete",
                value: function (e) {
                    var t = "Power3In";
                    this.hide(e, 1);
                    var i = new index.Timeline;
                    i.from(this.bottomTitle[0], "3dy", 0, 100, 500, t), i.from(this.bottomTitle[1], "3dy", 0, 100, 500, t), i.from(this.bottomTitle[2], "3dy", 0, 100, 500, t), i.from("#h-btn-container", "3dy", 0, 300, {
                        delay: 1e3
                    }), i.play()
                }
            }, {
                key: "reset",
                value: function (e) {
                    var t = new index.Timeline;
                    t.from("#h-txt-desc-line", "3dx", 0, -100, {
                        delay: 1300
                    }), t.from(".h-img", "3dx", 0, 16), t.from(".h-img", "opacity", 1, 0), t.from(".h-btn", "opacity", 1, 0), t.from(".h-btn", "3dy", 0, 100), t.from(".h-btn-cover", "3dy", 0, 105), t.from(".h-txt-title", "3dy", 0, 100), t.from(".h-txt-desc-txt", "3dy", 0, 100), t.from(".h-client", "3dy", 0, 100), t.from(".h-bottom-value", "3dy", 0, 100), t.from(".h-bottom-title", "3dy", 0, 100, {
                        callback: e
                    }), t.play()
                }
            }, {
                key: "geSize",
                value: function () {
                    for (var e = 0; e < this.txtDescTxtL; e++) this.txtDescTxtWrap[e].style.height = this.txtDescTxt[e].offsetHeight + "px";
                    this.btnContainer.style.left = Math.round(index.Win.w / 2 - this.btnContainer.offsetWidth / 2) + "px"
                }
            }, {
                key: "destroy",
                value: function () {
                    this.RO.off()
                }
            }]), e
        }(),
        Resume = function () {
            function e() {
                classCallCheck(this, e)
            }
            return createClass(e, [{
                key: "show",
                value: function () {
                    var e = new index.Timeline;
                    e.from("#h-resume", "3dy", 100, 50, 500, "Power4In", {
                        delay: 1e3
                    }), e.from("#h-resume", "3dy", 50, 0, 800, "ExpoOut", {
                        delay: 500
                    }), e.play()
                }
            }, {
                key: "showFast",
                value: function () {
                    var e = new index.Timeline;
                    e.from("#h-resume", "3dy", 100, 0), e.play()
                }
            }, {
                key: "hide",
                value: function () {
                    var e = new index.Timeline;
                    e.from("#h-resume", "3dy", 0, 50, 500, "Power4In"), e.from("#h-resume", "3dy", 50, 100, 800, "ExpoOut", {
                        delay: 500
                    }), e.play()
                }
            }, {
                key: "reset",
                value: function () {
                    var e = new index.Timeline;
                    e.from("#h-resume", "3dy", 0, 100, {
                        delay: 1300
                    }), e.play()
                }
            }]), e
        }(),
        Resume$1 = new Resume,
        Reco = function () {
            function e() {
                classCallCheck(this, e)
            }
            return createClass(e, [{
                key: "show",
                value: function (e, t) {
                    var i = new index.Timeline;
                    i.from("#h-reco-title", "3dy", 100, 0, 1200, "ExpoOut", {
                        delay: e
                    }), i.from(".h-reco-txt-list", "3dy", 100, 0, 1200, "ExpoOut", {
                        delay: 300
                    }), i.from(".h-reco-txt-title", "3dy", 100, 0, 1200, "ExpoOut", {
                        delay: 100,
                        callbackDelay: 600,
                        callback: t
                    }), i.play()
                }
            }, {
                key: "showFromXp",
                value: function (e) {
                    var t = new index.Timeline;
                    t.from("#h-reco-title", "3dy", 100, 0, 1200, "ExpoOut", {
                        delay: 800
                    }), t.from(".h-reco-txt-list", "3dy", 100, 0, 1200, "ExpoOut", {
                        delay: 300,
                        callback: e
                    }), t.from(".h-reco-txt-title", "3dy", 100, 0, 1200, "ExpoOut"), t.play()
                }
            }, {
                key: "hide",
                value: function () {
                    var e = "Power3In",
                        t = new index.Timeline;
                    t.from("#h-reco-title", "3dy", 0, 100, 500, e), t.from(".h-reco-txt-list", "3dy", 0, 100, 500, e), t.from(".h-reco-txt-title", "3dy", 0, 100, 500, e), t.play()
                }
            }, {
                key: "reset",
                value: function (e) {
                    var t = new index.Timeline;
                    t.from("#h-reco-title", "3dy", 0, 100, {
                        delay: e
                    }), t.from(".h-reco-txt-list", "3dy", 0, 100), t.from(".h-reco-txt-title", "3dy", 0, 100), t.play()
                }
            }]), e
        }(),
        Reco$1 = new Reco,
        Line = function () {
            function e() {
                classCallCheck(this, e), this.app = index.Geb.id("app"), this.btnContainer = index.Geb.id("h-btn-container"), this.xpBtnWrap = index.Geb.id("h-xp-btn-wrap"), this.client = index.Geb.class("h-client"), this.clientL = this.client.length, this.lineClientW = [], this.lineTopLeftRight = index.Geb.id("h-line-t-l-r"), index.BindMaker(this, ["geSize"]), this.RO = new index.RO({
                    callback: this.geSize,
                    throttle: {
                        delay: 100,
                        atEnd: !0
                    }
                }), this.RO.on(), this.geSize()
            }
            return createClass(e, [{
                key: "introToCase",
                value: function (e, t, i) {
                    var n = e - 1,
                        o = String(this.lineTopLeftRight.offsetWidth),
                        r = String(this.lineClientW[n]),
                        s = String(this.btnContainerW / 2),
                        a = "ExpoOut",
                        l = new index.Timeline;
                    l.from("#h-line-b-l-wrap", "3dx", "0", "-" + s, {
                        delay: t
                    }), l.from("#h-line-b-r-wrap", "3dx", "0", s), l.from("#h-line-l-t", "3dy", -100, 0, 1200, a, {
                        delay: i
                    }), l.from("#h-line-l-b", "3dy", 100, 0, 1200, a), l.from("#h-line-r-t", "3dy", -100, 0, 1200, a), l.from("#h-line-r-b", "3dy", 100, 0, 1200, a), l.from("#h-line-t-l-l", "3dx", -100, 0, 1200, a), l.from("#h-line-t-l-r", "3dx", o, r, 1200, a), l.from("#h-line-t-r", "3dx", -100, 0, 1200, a), l.from("#h-line-b-l", "3dx", -100, 0, 1200, a), l.from("#h-line-b-r", "3dx", 100, 0, 1200, a), l.play()
                }
            }, {
                key: "introToRecoSocial",
                value: function () {
                    var e = String(this.lineTopLeftRight.offsetWidth),
                        t = String(this.btnContainerW / 2),
                        i = "ExpoOut",
                        n = new index.Timeline;
                    n.from("#h-line-b-l-wrap", "3dx", "-" + t, "0", 1200, i, {
                        delay: 500
                    }), n.from("#h-line-b-r-wrap", "3dx", t, "0", 1200, i), n.from("#h-line-l-t", "3dy", -100, 0, 1200, i), n.from("#h-line-l-b", "3dy", 100, 0, 1200, i), n.from("#h-line-r-t", "3dy", -100, 0, 1200, i), n.from("#h-line-r-b", "3dy", 100, 0, 1200, i), n.from("#h-line-t-l-l", "3dx", -100, 0, 1200, i), n.from("#h-line-t-l-r", "3dx", e, "0", 1200, i), n.from("#h-line-t-r", "3dx", -100, 0, 1200, i), n.from("#h-line-b-l", "3dx", -100, 0, 1200, i), n.from("#h-line-b-r", "3dx", 100, 0, 1200, i), n.play()
                }
            }, {
                key: "introToXp",
                value: function () {
                    var e = String(this.lineTopLeftRight.offsetWidth),
                        t = String(this.xpBtnWrapW / 2),
                        i = "ExpoOut",
                        n = new index.Timeline;
                    n.from("#h-line-b-l-wrap", "3dx", "0", "-" + t, 1200, i, {
                        delay: 500
                    }), n.from("#h-line-b-r-wrap", "3dx", "0", t, 1200, i), n.from("#h-line-l-t", "3dy", -100, 0, 1200, i), n.from("#h-line-l-b", "3dy", 100, 0, 1200, i), n.from("#h-line-r-t", "3dy", -100, 0, 1200, i), n.from("#h-line-r-b", "3dy", 100, 0, 1200, i), n.from("#h-line-t-l-l", "3dx", -100, 0, 1200, i), n.from("#h-line-t-l-r", "3dx", e, "0", 1200, i), n.from("#h-line-t-r", "3dx", -100, 0, 1200, i), n.from("#h-line-b-l", "3dx", -100, 0, 1200, i), n.from("#h-line-b-r", "3dx", 100, 0, 1200, i), n.play()
                }
            }, {
                key: "fromCase",
                value: function (e, t) {
                    var i = String(this.lineClientW[e]),
                        n = String(this.lineClientW[t]),
                        o = new index.Timeline;
                    o.from("#h-line-t-l-r", "3dx", i, n, 1200, "ExpoOut", {
                        delay: 1e3
                    }), o.play()
                }
            }, {
                key: "caseToRecoSocial",
                value: function (e) {
                    var t = String(this.lineClientW[e]),
                        i = String(this.btnContainerW / 2),
                        n = new index.Timeline;
                    n.from("#h-line-t-l-r", "3dx", t, "0", 1200, "ExpoOut", {
                        delay: 1e3
                    }), n.from("#h-line-b-l-wrap", "3dx", "-" + i, "0", 1200, "ExpoOut"), n.from("#h-line-b-r-wrap", "3dx", i, "0", 1200, "ExpoOut"), n.play()
                }
            }, {
                key: "caseToXp",
                value: function (e) {
                    var t = String(this.lineClientW[e]),
                        i = String(this.btnContainerW / 2),
                        n = String(this.xpBtnWrapW / 2),
                        o = new index.Timeline;
                    o.from("#h-line-t-l-r", "3dx", t, "0", 1200, "ExpoOut", {
                        delay: 1e3
                    }), o.from("#h-line-b-l-wrap", "3dx", "-" + i, "-" + n, 1200, "ExpoOut"), o.from("#h-line-b-r-wrap", "3dx", i, n, 1200, "ExpoOut"), o.play()
                }
            }, {
                key: "recoToCase",
                value: function (e) {
                    var t = String(this.lineClientW[e]),
                        i = String(this.btnContainerW / 2),
                        n = new index.Timeline;
                    n.from("#h-line-t-l-r", "3dx", "0", t, 1200, "ExpoOut", {
                        delay: 1e3
                    }), n.from("#h-line-b-l-wrap", "3dx", "0", "-" + i, 1200, "ExpoOut"), n.from("#h-line-b-r-wrap", "3dx", "0", i, 1200, "ExpoOut"), n.play()
                }
            }, {
                key: "xpToCase",
                value: function (e) {
                    var t = String(this.lineClientW[e]),
                        i = String(this.xpBtnWrapW / 2),
                        n = String(this.btnContainerW / 2),
                        o = new index.Timeline;
                    o.from("#h-line-t-l-r", "3dx", "0", t, 1200, "ExpoOut", {
                        delay: 1e3
                    }), o.from("#h-line-b-l-wrap", "3dx", "-" + i, "-" + n, 1200, "ExpoOut"), o.from("#h-line-b-r-wrap", "3dx", i, n, 1200, "ExpoOut"), o.play()
                }
            }, {
                key: "recoSocialToXp",
                value: function () {
                    var e = String(this.xpBtnWrapW / 2),
                        t = new index.Timeline;
                    t.from("#h-line-b-l-wrap", "3dx", "0", "-" + e, 1200, "ExpoOut", {
                        delay: 800
                    }), t.from("#h-line-b-r-wrap", "3dx", "0", e, 1200, "ExpoOut"), t.play()
                }
            }, {
                key: "xpToRecoSocial",
                value: function () {
                    var e = String(this.xpBtnWrapW / 2),
                        t = new index.Timeline;
                    t.from("#h-line-b-l-wrap", "3dx", "-" + e, "0", 1200, "ExpoOut", {
                        delay: 800
                    }), t.from("#h-line-b-r-wrap", "3dx", e, "0", 1200, "ExpoOut"), t.play()
                }
            }, {
                key: "reset",
                value: function () {
                    var e = String(this.btnContainerW / 2),
                        t = new index.Timeline;
                    t.from("#h-line-l-t", "3dy", 0, 100, {
                        delay: 1e3
                    }), t.from("#h-line-l-b", "3dy", 0, -100), t.from("#h-line-r-t", "3dy", 0, 100), t.from("#h-line-r-b", "3dy", 0, -100), t.from("#h-line-t-l-l", "3dx", 0, -100), t.from("#h-line-t-l-r", "3dx", 0, 100), t.from("#h-line-t-r", "3dx", 0, -100), t.from("#h-line-b-l", "3dx", 0, -100), t.from("#h-line-b-r", "3dx", 0, 100), t.from("#h-line-b-l-wrap", "3dx", "-" + e, "0"), t.from("#h-line-b-r-wrap", "3dx", e, "0"), t.play()
                }
            }, {
                key: "geSize",
                value: function () {
                    this.btnContainerW = this.btnContainer.offsetWidth, this.xpBtnWrapW = this.xpBtnWrap.offsetWidth;
                    for (var e = 0; e < this.clientL; e++) this.lineClientW[e] = this.client[e].offsetWidth;
                    var t = new index.Timeline,
                        i = +this.app.className.substr(3);
                    if (i > 0 && t.from(this.lineTopLeftRight, "3dx", "0", String(this.lineClientW[i - 1])), i > -1 && i < 5) {
                        var n = String(this.btnContainerW / 2);
                        t.from("#h-line-b-l-wrap", "3dx", "0", "-" + n), t.from("#h-line-b-r-wrap", "3dx", "0", n)
                    } else if (6 === i) {
                        var o = String(this.xpBtnWrapW / 2);
                        t.from("#h-line-b-l-wrap", "3dx", "0", "-" + o), t.from("#h-line-b-r-wrap", "3dx", "0", o)
                    }
                    t.play()
                }
            }, {
                key: "destroy",
                value: function () {
                    this.RO.off()
                }
            }]), e
        }(),
        Pagi = function () {
            function e() {
                classCallCheck(this, e), this.topNoWrap = index.Geb.class("h-pagi-top-no-wrap"), this.topNoWrapL = this.topNoWrap.length, this.topNo = index.Geb.class("h-pagi-top-no"), this.topTitleWrap = index.Geb.class("h-pagi-top-title-wrap"), this.topTitle = index.Geb.class("h-pagi-top-title"), this.topTitleL = this.topTitle.length, this.bottomNoWrap = index.Geb.class("h-pagi-bottom-no-wrap"), this.bottomNoWrapL = this.bottomNoWrap.length, this.bottomNo = index.Geb.class("h-pagi-bottom-no"), this.bottomTitleWrap = index.Geb.class("h-pagi-bottom-title-wrap"), this.bottomTitle = index.Geb.class("h-pagi-bottom-title"), this.bottomTitleL = this.topTitle.length, this.pagiSocialWrap = index.Geb.id("h-pagi-social-wrap"), this.bottomTitle = index.Geb.class("h-pagi-bottom-title"), this.bottomMarker = index.Geb.id("h-pagi-bottom-marker")
            }
            return createClass(e, [{
                key: "getColor",
                value: function (e) {
                    return 1 === e || 2 === e || 3 === e || 4 === e ? "#181829" : "#fff"
                }
            }, {
                key: "showAll",
                value: function (e, t) {
                    for (var i = this.getColor(e), n = 0; n < e + 1; n++) this.topNoWrap[n].style.height = "auto", this.topTitleWrap[n].style.height = "auto";
                    this.topNo[e].style.color = i;
                    for (var o = 0; o < this.topTitleL; o++) this.topTitle[o].style.color = i;
                    for (var r = 0 + e; r < this.bottomNoWrapL; r++) this.bottomNoWrap[r].style.height = "auto", this.bottomTitleWrap[r].style.height = "auto";
                    for (var s = 0; s < this.bottomTitleL; s++) this.bottomTitle[s].style.color = i;
                    e > 4 ? (this.bottomMarker.style.color = "#fff", this.bottomMarker.style.transition = "color 200ms") : (this.bottomMarker.style.color = "", this.bottomMarker.style.transition = "");
                    var a = new index.Timeline;
                    a.from(this.topNo[e], "3dy", -100, 0, 1200, "ExpoOut", {
                        delay: t
                    }), a.from("#h-pagi-bottom-marker", "3dy", 100, 0, 1200, "ExpoOut"), a.from("#h-pagi-line", "3dx", -102, 0, 1200, "ExpoOut"), a.play()
                }
            }, {
                key: "show",
                value: function (e) {
                    var t = this,
                        i = e.no,
                        n = this.getColor(i);
                    index.Delay(function (o) {
                        for (var r = 0; r < i + 1; r++) t.topNoWrap[r].style.height = "auto", t.topTitleWrap[r].style.height = "auto";
                        t.topNo[i].style.color = n;
                        for (var s = 0; s < t.topTitleL; s++) t.topTitle[s].style.color = n;
                        for (var a = 0 + i; a < t.bottomNoWrapL; a++) t.bottomNoWrap[a].style.height = "auto", t.bottomTitleWrap[a].style.height = "auto";
                        for (var l = 0; l < t.bottomTitleL; l++) t.bottomTitle[l].style.color = n;
                        var h = new index.Timeline;
                        h.from(t.topNo[i], "3dx", 100 * e.direction, 0, 1200, "ExpoOut"), h.play()
                    }, e.delay), index.Delay(function (e) {
                        i > 4 ? (t.bottomMarker.style.color = "#fff", t.bottomMarker.style.transition = "color 200ms") : (t.bottomMarker.style.color = "", t.bottomMarker.style.transition = "")
                    }, e.delayMarkerColor)
                }
            }, {
                key: "showSocial",
                value: function () {
                    this.pagiSocialWrap.style.zIndex = 1;
                    var e = new index.Timeline;
                    e.from("#h-pagi-social", "3dy", 100, 0, 1400, "ExpoOut", {
                        delay: 1700
                    }), e.play()
                }
            }, {
                key: "hideSocial",
                value: function () {
                    this.pagiSocialWrap.style.zIndex = -1;
                    var e = new index.Timeline;
                    e.from("#h-pagi-social", "3dy", 0, 100, 500, "Power4In"), e.play()
                }
            }, {
                key: "hide",
                value: function (e) {
                    var t = this,
                        i = e.currentNo,
                        n = new index.Timeline;
                    n.from(this.topNo[i], "3dx", 0, -100 * e.direction, 500, "Power3In", {
                        callback: function (e) {
                            for (var n = 0; n < i + 1; n++) t.topNoWrap[n].style.height = "", t.topTitleWrap[n].style.height = "";
                            t.topNo[i].style.color = "";
                            for (var o = 0; o < t.topTitleL; o++) t.topTitle[o].style.color = "";
                            for (var r = 0 + i; r < t.bottomNoWrapL; r++) t.bottomNoWrap[r].style.height = "", t.bottomTitleWrap[r].style.height = "";
                            for (var s = 0; s < t.bottomTitleL; s++) t.bottomTitle[s].style.color = ""
                        }
                    }), n.play()
                }
            }, {
                key: "hideAll",
                value: function (e) {
                    var t = this,
                        i = e,
                        n = "Power3In",
                        o = new index.Timeline;
                    o.from(this.topNo[i], "3dy", 0, -100, 500, n), o.from("#h-pagi-bottom-marker", "3dy", 0, 100, 500, n), o.from("#h-pagi-line", "3dx", 0, -102, 500, n, {
                        callback: function (e) {
                            for (var n = 0; n < i + 1; n++) t.topNoWrap[n].style.height = "", t.topTitleWrap[n].style.height = "";
                            t.topNo[i].style.color = "";
                            for (var o = 0; o < t.topTitleL; o++) t.topTitle[o].style.color = "";
                            for (var r = 0 + i; r < t.bottomNoWrapL; r++) t.bottomNoWrap[r].style.height = "", t.bottomTitleWrap[r].style.height = "";
                            for (var s = 0; s < t.bottomTitleL; s++) t.bottomTitle[s].style.color = ""
                        }
                    }), o.play()
                }
            }, {
                key: "reset",
                value: function () {
                    var e = this;
                    index.Delay(function (t) {
                        e.pagiSocialWrap.style.zIndex = -1;
                        for (var i = 0; i < e.topNoWrapL; i++) e.topNoWrap[i].style = "", e.topNo[i].style = "", e.topTitleWrap[i].style = "";
                        for (var n = 0; n < e.bottomNoWrapL; n++) e.bottomNoWrap[n].style = "", e.bottomNo[n].style = "", e.bottomTitleWrap[n].style = "";
                        var o = new index.Timeline;
                        o.from("#h-pagi-line", "3dx", 0, -102), o.from("#h-pagi-bottom-marker", "3dy", 0, 100), o.from("#h-pagi-social", "3dy", 0, 100), o.play()
                    }, 800)
                }
            }]), e
        }(),
        Xp = function () {
            function e() {
                classCallCheck(this, e)
            }
            return createClass(e, [{
                key: "show",
                value: function (e, t) {
                    var i = index.Geb.class("h-xp-title"),
                        n = new index.Timeline;
                    n.from(i[0], "3dy", 100, 0, 1200, "ExpoOut", {
                        delay: e
                    }), n.from(i[1], "3dy", 100, 0, 1200, "ExpoOut", {
                        delay: 50
                    }), n.from("#h-xp-list", "3dy", 100, 0, 1200, "ExpoOut", {
                        delay: 300
                    }), n.from("#h-xp-txt", "3dy", 100, 0, 1200, "ExpoOut", {
                        delay: 50
                    }), n.from("#h-xp-btn-wrap", "3dy", 100, 0), n.from("#h-xp-btn-cover", "3dy", 105, 0, 600, "Power3In", {
                        delay: 100
                    }), n.from("#h-xp-btn", "3dy", 105, 0, {
                        delay: 600,
                        callbackDelay: 600,
                        callback: t
                    }), n.from("#h-xp-btn-cover", "3dy", 0, -105, 1200, "ExpoOut"), n.play()
                }
            }, {
                key: "hide",
                value: function () {
                    var e = "Power3In",
                        t = new index.Timeline;
                    t.from(".h-xp-title", "3dy", 0, 100, 500, e), t.from("#h-xp-list", "3dy", 0, 100, 500, e), t.from("#h-xp-txt", "3dy", 0, 100, 500, e), t.from("#h-xp-btn", "3dy", 0, 105, 500, e), t.from("#h-xp-btn-wrap", "3dy", 0, 100, {
                        delay: 500
                    }), t.play()
                }
            }, {
                key: "reset",
                value: function () {
                    var e = new index.Timeline;
                    e.from(".h-xp-title", "3dy", 0, 100, {
                        delay: 1300
                    }), e.from("#h-xp-list", "3dy", 0, 100), e.from("#h-xp-txt", "3dy", 0, 100), e.from("#h-xp-btn", "3dy", 0, 105), e.from("#h-xp-btn-wrap", "3dy", 0, 100), e.play()
                }
            }]), e
        }(),
        Xp$1 = new Xp,
        Social = function () {
            function e() {
                classCallCheck(this, e)
            }
            return createClass(e, [{
                key: "show",
                value: function (e) {
                    function t() {
                        new index.AnimatedLine(".h-social-path").play(2700, "Power5InOut", e)
                    }
                    this.updateZIndex(3);
                    var i = new index.Timeline;
                    i.from("#h-social", "3dy", 100, 50, 500, "Power4In", {
                        delay: 1e3,
                        callbackDelay: 100,
                        callback: t
                    }), i.from("#h-social", "3dy", 50, 0, 1200, "ExpoOut", {
                        delay: 500
                    }), i.from("#h-social-title", "3dy", 100, 0, 1200, "ExpoOut", {
                        delay: 500
                    }), i.from(".h-social-icon-title", "3dy", 100, 0, 1200, "ExpoOut", {
                        delay: 1200
                    }), i.play()
                }
            }, {
                key: "hide",
                value: function () {
                    var e = this,
                        t = new index.Timeline;
                    t.from("#h-social", "3dy", 0, 50, 500, "Power4In"), t.from("#h-social", "3dy", 50, 100, 800, "ExpoOut", {
                        delay: 500
                    }), t.from("#h-social-title", "3dy", 0, 100, {
                        delay: 800
                    }), t.from(".h-social-icon-title", "3dy", 0, 100), t.from(".h-social-path", "opacity", 1, 0), t.play(), index.Delay(function (t) {
                        return e.updateZIndex(1)
                    }, 1300)
                }
            }, {
                key: "reset",
                value: function () {
                    var e = this,
                        t = new index.Timeline;
                    t.from("#h-social", "3dy", 0, 100, {
                        delay: 1300
                    }), t.from("#h-social-title", "3dy", 0, 100), t.from(".h-social-icon-title", "3dy", 0, 100), t.from(".h-social-path", "opacity", 1, 0), t.play(), index.Delay(function (t) {
                        return e.updateZIndex(1)
                    }, 1300)
                }
            }, {
                key: "updateZIndex",
                value: function (e) {
                    index.Geb.id("h-line-t").style.zIndex = e, index.Geb.id("h-line-b").style.zIndex = e, index.Geb.id("h-line-l").style.zIndex = e, index.Geb.id("h-line-r").style.zIndex = e
                }
            }]), e
        }(),
        Social$1 = new Social,
        Slide = function () {
            function e(t) {
                classCallCheck(this, e), this.line = new Line, this.case = new Case, this.pagi = new Pagi, this.getCanChangePage = t
            }
            return createClass(e, [{
                key: "play",
                value: function (e, t, i) {
                    this.currentNo = e, this.no = t, this.direction = "next" === i ? 1 : -1, this.caseOrigin = 1 === this.currentNo || 2 === this.currentNo || 3 === this.currentNo || 4 === this.currentNo, this.caseDest = 1 === this.no || 2 === this.no || 3 === this.no || 4 === this.no, this.resumeDest = 5 === this.no || 6 === this.no || 7 === this.no, this.resumeOrigin = 5 === this.currentNo || 6 === this.currentNo || 7 === this.currentNo, this.currentNo === this.no ? this.getCanChangePage() : 0 === this.no ? (Intro$1.show(), this.burgerChange(), Social$1.reset(), Resume$1.reset(), Xp$1.reset(), Reco$1.reset(1300), this.line.reset(), this.pagi.reset(), this.case.reset(this.getCanChangePage)) : (this.pagiHide(), this.resumeChange(), this.pageHide(), this.burgerChange(), this.lineChange(), this.pagiShow(), this.pageShow())
                }
            }, {
                key: "pagiHide",
                value: function () {
                    0 !== this.currentNo && 7 === this.no ? this.pagi.hideAll(this.currentNo) : 7 === this.currentNo ? this.pagi.hideSocial() : 0 !== this.currentNo && this.pagi.hide({
                        currentNo: this.currentNo,
                        direction: this.direction
                    })
                }
            }, {
                key: "resumeChange",
                value: function () {
                    this.caseOrigin && this.resumeDest ? Resume$1.show() : this.resumeOrigin && this.caseDest ? (Resume$1.hide(), Reco$1.reset(2e3)) : this.caseDest || Resume$1.showFast()
                }
            }, {
                key: "pageHide",
                value: function () {
                    0 === this.currentNo ? Intro$1.hide() : this.caseOrigin && this.resumeDest ? this.case.hideComplete(this.currentNo - 1) : 5 === this.currentNo ? Reco$1.hide() : 6 === this.currentNo ? Xp$1.hide() : 7 === this.currentNo ? Social$1.hide() : this.case.hide(this.currentNo - 1, this.direction)
                }
            }, {
                key: "burgerChange",
                value: function () {
                    var e = 0 === this.currentNo || 5 === this.currentNo || 6 === this.currentNo || 7 === this.currentNo,
                        t = 0 === this.no || 5 === this.no || 6 === this.no || 7 === this.no;
                    e && this.caseDest ? Burger$2.darkToLight() : this.caseOrigin && 0 === this.no ? Burger$2.lightToDark(0) : !e && t && Burger$2.lightToDark(1200)
                }
            }, {
                key: "lineChange",
                value: function () {
                    this.caseOrigin = 1 === this.currentNo || 2 === this.currentNo || 3 === this.currentNo || 4 === this.currentNo, this.caseDest = 1 === this.no || 2 === this.no || 3 === this.no || 4 === this.no, 0 === this.currentNo && this.caseDest ? this.line.introToCase(this.no, 300, 500) : 0 !== this.currentNo || 5 !== this.no && 7 !== this.no ? 0 === this.currentNo && 6 === this.no ? this.line.introToXp(this.no) : this.caseOrigin && this.caseDest ? this.line.fromCase(this.currentNo - 1, this.no - 1) : !this.caseOrigin || 5 !== this.no && 7 !== this.no ? this.caseOrigin && 6 === this.no ? this.line.caseToXp(this.currentNo - 1) : 6 === this.currentNo && this.caseDest ? this.line.xpToCase(this.no - 1) : this.caseDest ? this.line.recoToCase(this.no - 1) : 6 === this.no ? this.line.recoSocialToXp() : (7 !== this.currentNo && 5 === this.no || 5 !== this.currentNo && 7 === this.no) && this.line.xpToRecoSocial() : this.line.caseToRecoSocial(this.currentNo - 1) : this.line.introToRecoSocial(this.no)
                }
            }, {
                key: "pagiShow",
                value: function () {
                    0 !== this.currentNo && 7 !== this.currentNo || !this.caseDest ? 0 !== this.currentNo && 7 !== this.currentNo || 5 !== this.no && 6 !== this.no ? 0 === this.no ? this.pagi.reset() : (this.caseOrigin || 5 === this.currentNo || 6 === this.currentNo) && this.caseDest ? this.pagi.show({
                        no: this.no,
                        direction: this.direction,
                        delay: 1e3,
                        delayMarkerColor: 500
                    }) : !this.caseOrigin || 5 !== this.no && 6 !== this.no ? 5 === this.no || 6 === this.no ? this.pagi.show({
                        no: this.no,
                        direction: this.direction,
                        delay: 800,
                        delayMarkerColor: 0
                    }) : 7 === this.no && this.pagi.showSocial() : this.pagi.show({
                        no: this.no,
                        direction: this.direction,
                        delay: 1700,
                        delayMarkerColor: 1400
                    }) : this.pagi.showAll(this.no, 1500) : this.pagi.showAll(this.no, 1e3)
                }
            }, {
                key: "pageShow",
                value: function () {
                    this.caseOrigin && this.caseDest ? this.case.show(this.no - 1, this.direction, this.getCanChangePage) : this.caseDest ? this.case.showFirstTime(this.no - 1, this.getCanChangePage) : this.caseOrigin && 5 === this.no ? Reco$1.show(1800, this.getCanChangePage) : 0 === this.currentNo && 5 === this.no ? Reco$1.show(800, this.getCanChangePage) : 5 === this.no ? Reco$1.show(1e3, this.getCanChangePage) : 6 === this.currentNo && 5 === this.no ? Reco$1.showFromXp(this.getCanChangePage) : this.caseOrigin && 6 === this.no ? Xp$1.show(1800, this.getCanChangePage) : 6 === this.no ? Xp$1.show(800, this.getCanChangePage) : 7 === this.no && Social$1.show(this.getCanChangePage)
                }
            }, {
                key: "destroy",
                value: function () {
                    this.case.destroy(), this.line.destroy()
                }
            }]), e
        }(),
        PagiOverTop = function () {
            function e(t, i) {
                classCallCheck(this, e), this.changePartWithClick = t, this.addMoveListeners = i, this.duration = 500, this.easing = "Power3Out", this.topNo = index.Geb.class("h-pagi-top-no"), this.topNoH = this.topNo[0].offsetHeight, this.topTitle = index.Geb.class("h-pagi-top-title"), index.BindMaker(this, ["pagiMouseleave", "pagiClick", "pagiNoMouseenter", "pagiNoMouseleave"])
            }
            return createClass(e, [{
                key: "init",
                value: function (e) {
                    this.currentNo = e, this.duration3dy = index.Lerp.extend(this.currentNo, 1, 6, 500, 1e3), this.topNoShow = [];
                    for (var t = 0; t < this.currentNo; t++) this.topNoShow[t] = new index.Merom(this.topNo[t], "3dy", 100, 0, this.duration, this.easing, {
                        delay: 80 * (this.currentNo - (t + 1))
                    }), this.topNoShow[t].play();
                    var i = String(-this.topNoH * this.currentNo);
                    this.lineAnim = new index.Merom("#h-line-l-t", "3dy", "0", i, this.duration3dy, this.easing), this.lineAnim.play(), this.listeners("add")
                }
            }, {
                key: "listeners",
                value: function (e) {
                    index.Listen(".h-pagi-top-no-container", e, "mouseleave", this.pagiMouseleave), index.Listen(".h-pagi-top-no", e, "mouseenter", this.pagiNoMouseenter), index.Listen(".h-pagi-top-no", e, "mouseleave", this.pagiNoMouseleave), index.Listen(".h-pagi-top-no", e, "click", this.pagiClick)
                }
            }, {
                key: "pagiNoMouseenter",
                value: function (e) {
                    var t = +e.target.textContent - 1;
                    this.currentNo !== t && (this.tl = new index.Timeline, this.tl.from(this.topNo[t], "opacity", 1, 0, this.duration, this.easing), this.tl.from(this.topTitle[t], "3dy", 100, 0, this.duration, this.easing), this.tl.play())
                }
            }, {
                key: "pagiNoMouseleave",
                value: function (e) {
                    var t = +e.target.textContent - 1;
                    this.currentNo !== t && this.removeNoOver(t)
                }
            }, {
                key: "removeNoOver",
                value: function (e) {
                    this.tl.reverse()
                }
            }, {
                key: "pagiClick",
                value: function (e) {
                    if (this.canChangePage) {
                        this.getCanChangePage(), this.pagiMouseleave();
                        var t = +e.target.textContent - 1,
                            i = this.no > this.currentNo ? "next" : "prev";
                        this.removeNoOver(t), this.changePartWithClick(t, i)
                    }
                }
            }, {
                key: "pagiMouseleave",
                value: function () {
                    this.listeners("remove"), this.addMoveListeners();
                    for (var e = 0; e < this.currentNo; e++) this.topNoShow[e].reverse({
                        delay: 50 * e
                    });
                    this.lineAnim.reverse()
                }
            }, {
                key: "getCanChangePage",
                value: function (e) {
                    this.canChangePage = e
                }
            }]), e
        }(),
        PagiOverBottom = function () {
            function e(t, i) {
                classCallCheck(this, e), this.changePartWithClick = t, this.addMoveListeners = i, this.duration = 500, this.easing = "Power3Out", this.cssEasing = "cubic-bezier(0.215, 0.61, 0.355, 1)", this.cssColor = "rgba(185, 185, 185, 0.6)", this.bottomNo = index.Geb.class("h-pagi-bottom-no"), this.bottomNoL = this.bottomNo.length, this.bottomNoH = this.bottomNo[0].offsetHeight, this.bottomTitle = index.Geb.class("h-pagi-bottom-title"), this.bottomMarkerWrap = index.Geb.id("h-pagi-bottom-marker-wrap"), this.bottomMarker = index.Geb.id("h-pagi-bottom-marker"), index.BindMaker(this, ["pagiMouseleave", "pagiClick", "pagiNoMouseenter", "pagiNoMouseleave", "pagiMarkerMouseenter", "pagiMarkerMouseleave", "lastNoClick"])
            }
            return createClass(e, [{
                key: "init",
                value: function (e) {
                    this.currentNo = e, this.total = this.bottomNoL - this.currentNo, this.duration3dy = index.Lerp.extend(this.total, 1, 5, 500, 1e3), this.move3dy = 7 === e ? 0 : String(this.bottomNoH * this.total), this.cssCurrentColor = this.currentNo > 4 ? "#fff" : "", this.currentNo < 6 && (this.markerRemove = new index.Merom(this.bottomMarkerWrap, "3dy", "0", this.move3dy, this.duration3dy, this.easing), this.markerRemove.play(), this.bottomMarker.style.transition = "color " + this.duration3dy + "ms " + this.cssEasing, this.bottomMarker.style.color = this.cssColor), this.bottomNoShow = [];
                    for (var t = 0 + this.currentNo; t < this.bottomNoL; t++) this.bottomNoShow[t] = new index.Merom(this.bottomNo[t], "3dy", 100, 0, this.duration, this.easing, {
                        delay: 80 * (t - this.currentNo)
                    }), this.bottomNoShow[t].play();
                    this.lineAnim = new index.Merom("#h-line-l-b", "3dy", "0", this.move3dy, this.duration3dy, this.easing), this.lineAnim.play(), this.listeners("add")
                }
            }, {
                key: "listeners",
                value: function (e) {
                    index.Listen(".h-pagi-bottom-no-container", e, "mouseleave", this.pagiMouseleave), index.Listen(".h-pagi-bottom-no", e, "mouseenter", this.pagiNoMouseenter), index.Listen(".h-pagi-bottom-no", e, "mouseleave", this.pagiNoMouseleave), index.Listen(this.bottomMarker, e, "mouseenter", this.pagiMarkerMouseenter), index.Listen(this.bottomMarker, e, "mouseleave", this.pagiMarkerMouseleave), index.Listen(".h-pagi-bottom-no", e, "click", this.pagiClick), index.Listen("#h-pagi-bottom-extension", e, "click", this.lastNoClick), index.Listen("#h-pagi-bottom-marker", e, "click", this.lastNoClick)
                }
            }, {
                key: "pagiMarkerMouseenter",
                value: function (e) {
                    this.tl2 = new index.Timeline, this.tl2.from(this.bottomMarker, "opacity", 1, 0, this.duration, this.easing), this.tl2.from(this.bottomTitle[6], "3dy", 100, 0, this.duration, this.easing), this.tl2.play()
                }
            }, {
                key: "pagiMarkerMouseleave",
                value: function (e) {
                    this.removeMarkerOver()
                }
            }, {
                key: "removeMarkerOver",
                value: function () {
                    this.tl2.reverse()
                }
            }, {
                key: "lastNoClick",
                value: function () {
                    if (this.canChangePage) {
                        this.getCanChangePage(), this.pagiMouseleave();
                        var e = this.no > this.currentNo ? "next" : "prev";
                        this.removeMarkerOver(), this.changePartWithClick(7, e)
                    }
                }
            }, {
                key: "pagiNoMouseenter",
                value: function (e) {
                    var t = +e.target.textContent - 1;
                    this.currentNo !== t && (this.tl = new index.Timeline, this.tl.from(this.bottomNo[t - 1], "opacity", 1, 0, this.duration, this.easing), this.tl.from(this.bottomTitle[t - 1], "3dy", 100, 0, this.duration, this.easing), this.tl.play())
                }
            }, {
                key: "pagiNoMouseleave",
                value: function (e) {
                    var t = +e.target.textContent - 1;
                    this.currentNo !== t && this.removeNoOver(t)
                }
            }, {
                key: "removeNoOver",
                value: function (e) {
                    this.tl.reverse()
                }
            }, {
                key: "pagiClick",
                value: function (e) {
                    if (this.canChangePage) {
                        this.getCanChangePage(), this.pagiMouseleave();
                        var t = +e.target.textContent - 1,
                            i = this.no > this.currentNo ? "next" : "prev";
                        this.removeNoOver(t), this.changePartWithClick(t, i)
                    }
                }
            }, {
                key: "pagiMouseleave",
                value: function () {
                    var e = this;
                    this.listeners("remove"), this.addMoveListeners(), this.currentNo < 6 && (this.markerRemove.reverse({
                        callback: function (t) {
                            e.bottomMarker.style.transition = ""
                        }
                    }), this.bottomMarker.style.transition = "color " + this.duration3dy + "ms " + this.cssEasing, this.bottomMarker.style.color = this.cssCurrentColor);
                    for (var t = 0 + this.currentNo; t < this.bottomNoL; t++) this.bottomNoShow[t].reverse({
                        delay: 50 * (this.bottomNoL - (t + 1))
                    });
                    this.lineAnim.reverse()
                }
            }, {
                key: "getCanChangePage",
                value: function (e) {
                    this.canChangePage = e
                }
            }]), e
        }(),
        HomeController = function () {
            function e() {
                classCallCheck(this, e), this.app = index.Geb.id("app"), index.BindMaker(this, ["getCanChangePage", "addMoveListeners", "WTGestion", "backToTop", "getFirstCase", "burgerClick", "keyDownGestion", "pagiTopMouseenter", "pagiBottomMouseenter", "changePartWithClick"])
            }
            return createClass(e, [{
                key: "init",
                value: function (e) {
                    this.paralyseDestroy = e, this.burgerMenuEl = index.Geb.id("burger-menu"), this.introLineContainer = index.Geb.id("h-intro-line-container"), this.limit = 7, this.burgerMenu = new Burger, this.transition = new Transition, this.pagiOverTop = new PagiOverTop(this.changePartWithClick, this.addMoveListeners), this.pagiOverBottom = new PagiOverBottom(this.changePartWithClick, this.addMoveListeners), this.slide = new Slide(this.getCanChangePage), this.listeners("add"), this.getCanChangePage()
                }
            }, {
                key: "getCanChangePage",
                value: function () {
                    this.pagiOverTop.getCanChangePage(!0), this.pagiOverBottom.getCanChangePage(!0), this.canChangePage = !0
                }
            }, {
                key: "getCanNotChangePage",
                value: function () {
                    this.pagiOverTop.getCanChangePage(), this.pagiOverBottom.getCanChangePage(), this.canChangePage = !1
                }
            }, {
                key: "listeners",
                value: function (e) {
                    this.moveListeners(e), index.Listen("#h-pagi-social", e, "click", this.backToTop), index.Listen("#h-intro-line-container", e, "click", this.getFirstCase), index.Listen("#burger", e, "click", this.burgerClick), index.Listen(".h-pagi-top-no-container", e, "mouseenter", this.pagiTopMouseenter), index.Listen(".h-pagi-bottom-no-container", e, "mouseenter", this.pagiBottomMouseenter)
                }
            }, {
                key: "burgerClick",
                value: function () {
                    if (this.canChangePage) {
                        this.getCanNotChangePage(), this.currentNo = this.getCurrentNo();
                        var e = 0 === this.currentNo || 5 === this.currentNo || 6 === this.currentNo || 7 === this.currentNo;
                        this.burgerMenu.open(e, this.getCanChangePage, this.paralyseDestroy)
                    }
                }
            }, {
                key: "moveListeners",
                value: function (e) {
                    "add" === e ? $(window).on("mousewheel", this.WTGestion) : $(window).off("mousewheel", this.WTGestion), index.Listen(document, e, "keydown", this.keyDownGestion)
                }
            }, {
                key: "addMoveListeners",
                value: function () {
                    this.moveListeners("add")
                }
            }, {
                key: "pagiTopMouseenter",
                value: function () {
                    this.moveListeners("remove"), this.currentNo = this.getCurrentNo(), this.pagiOverTop.init(this.currentNo)
                }
            }, {
                key: "pagiBottomMouseenter",
                value: function () {
                    this.moveListeners("remove"), this.currentNo = this.getCurrentNo(), this.pagiOverBottom.init(this.currentNo)
                }
            }, {
                key: "changePartWithClick",
                value: function (e, t) {
                    this.canChangePage && (this.getCanNotChangePage(), this.no = e, this.direction = t, this.changePart())
                }
            }, {
                key: "backToTop",
                value: function () {
                    this.canChangePage && (this.getCanNotChangePage(), this.direction = "next", this.currentNo = this.limit, this.no = 0, this.changePart())
                }
            }, {
                key: "getFirstCase",
                value: function () {
                    this.canChangePage && (this.getCanNotChangePage(), this.direction = "next", this.currentNo = 0, this.no = 1, this.changePart())
                }
            }, {
                key: "keyDownGestion",
                value: function (e) {
                    if (this.canChangePage) {
                        var t = e.keyCode,
                            i = 40 === t || 39 === t,
                            n = 37 === t || 38 === t;
                        (i || n) && (this.getCanNotChangePage(), this.currentNo = this.getCurrentNo(), i ? (this.direction = "next", this.no = this.currentNo === this.limit ? this.limit : this.currentNo + 1) : (this.direction = "prev", this.no = 0 === this.currentNo ? 0 : this.currentNo - 1), this.changePart())
                    }
                }
            }, {
                key: "WTGestion",
                value: function (e) {
                    this.canChangePage && (this.getCanNotChangePage(), this.currentNo = this.getCurrentNo(), e.deltaY < 0 ? (this.direction = "next", this.no = this.currentNo === this.limit ? this.limit : this.currentNo + 1) : (this.direction = "prev", this.no = 0 === this.currentNo ? 0 : this.currentNo - 1), this.changePart())
                }
            }, {
                key: "changePart",
                value: function () {
                    this.app.className = "no-" + this.no, this.slide.play(this.currentNo, this.no, this.direction)
                }
            }, {
                key: "getCurrentNo",
                value: function () {
                    return +this.app.className.substr(3)
                }
            }, {
                key: "destroy",
                value: function (e, t) {
                    function i(e, t, i) {
                        var o = n.getCurrentNo() - 1,
                            r = "active" === n.burgerMenuEl.className ? "menuHomeToCase" : "homeToCase";
                        t.insertAsked(), n.transition.init(e, o, function (e) {
                            t.removeCurrent()
                        }, r, n.burgerMenu, i)
                    }
                    var n = this;
                    n.slide.destroy(), n.listeners("remove"), index.WTDisable.on(), e(i)
                }
            }]), e
        }(),
        HomeController$1 = new HomeController,
        Next = function () {
            function e() {
                classCallCheck(this, e), index.BindMaker(this, ["geSize"])
            }
            return createClass(e, [{
                key: "init",
                value: function () {
                    var e = index.Geb.class("next-l")[0],
                        t = index.Geb.class("next-r")[0];
                    this.nextLLineTR = e.getElementsByClassName("next-line-t-r")[0], this.nextLClient = e.getElementsByClassName("next-client-wrap")[0], this.nextRLineTR = t.getElementsByClassName("next-line-t-r")[0], this.nextRClient = t.getElementsByClassName("next-client-wrap")[0], this.RO = new index.RO({
                        callback: this.geSize,
                        throttle: {
                            delay: 100,
                            atEnd: !0
                        }
                    }), this.RO.on(), this.geSize()
                }
            }, {
                key: "geSize",
                value: function () {
                    var e = this.nextLClient.offsetWidth,
                        t = String(e),
                        i = this.nextRClient.offsetWidth,
                        n = String(i),
                        o = new index.Timeline;
                    o.from(this.nextLLineTR, "3dx", "0", t), o.from(this.nextRLineTR, "3dx", "0", n), o.play()
                }
            }, {
                key: "destroy",
                value: function () {
                    this.RO.off()
                }
            }]), e
        }(),
        TransitionBack = function () {
            function e() {
                classCallCheck(this, e), this.app = index.Geb.id("app"), index.BindMaker(this, ["getCallback"])
            }
            return createClass(e, [{
                key: "init",
                value: function (e, t, i) {
                    this.askedControllerInit = e, this.removeCurrentXhr = t;
                    var n = i.current.base.charAt(1),
                        o = "m" === n ? 3 : 2;
                    this.caseNo = "f" === n ? 0 : "k" === n ? 1 : "a" === n ? 2 : 3;
                    var r = index.Geb.id(n + "-wrap"),
                        s = (index.Geb.id(n).offsetWidth, index.Win.h + "px"),
                        a = index.Win.w,
                        l = a - index.Geb.id("xhr").offsetWidth,
                        h = a - l + "px",
                        c = index.Geb.class("intro")[0],
                        d = index.Geb.class("intro-line")[0],
                        u = index.Geb.class("intro-r-txt-p"),
                        f = index.Geb.class("intro-r-txt-title")[0],
                        m = index.Geb.class("intro-r-line")[0],
                        g = index.Geb.class("intro-l-bg")[0],
                        p = index.Geb.class("intro-l-img")[0],
                        y = index.Geb.id("intro-l-img-0-b"),
                        x = index.Geb.class("intro-mask")[0],
                        b = index.Geb.class("case-back-btn")[0],
                        v = index.Geb.class("case-back-line")[0],
                        C = index.Geb.id("h-img-wrap-" + this.caseNo),
                        k = index.Geb.id("h-img-" + this.caseNo);
                    this.txtTitle = index.Geb.class("h-txt-title"), this.bottomTitle = index.Geb.class("h-bottom-title"), this.bottomValue = index.Geb.class("h-bottom-value-" + this.caseNo), this.btnCover = index.Geb.class("h-btn-cover"), this.btn = index.Geb.class("h-btn");
                    var w = index.Geb.class("h-intro-jenny-txt"),
                        T = index.Geb.class("burger-line-dark"),
                        L = p.style.transform.substring(12).split(",")[0],
                        N = L.substring(0, L.length - 2);
                    r.style.height = s, c.style.width = h;
                    var P = C.getBoundingClientRect().left,
                        M = p.getBoundingClientRect().left,
                        O = String(-M + P + +N),
                        S = "Power3In",
                        W = new index.Timeline;
                    W.from(b, "3dx", 0, -100, 500, S), W.from(v, "3dx", 0, -100, 500, S), W.from(d, "3dy", 0, 100, 500, S), 2 === o ? (W.from(u[1], "3dy", 0, 100, 500, S), W.from(u[0], "3dy", 0, 100, 500, S)) : (W.from(u[2], "3dy", 0, 100, 500, S), W.from(u[1], "3dy", 0, 100, 500, S), W.from(u[0], "3dy", 0, 100, 500, S)), W.from(f, "3dy", 0, 100, 500, S), W.from(m, "3dx", 0, -110, 500, S), W.from(".next", "opacity", 1, 0), W.from(x, "opacity", 1, 0), W.from(g, "3dx", 0, -100, 1400, "ExpoInOut", {
                        delay: 300
                    }), y && W.from(y, "3dx", String(N - 200), O, 1400, "ExpoInOut"), W.from(p, "3dx", N, O, 1400, "ExpoInOut"), W.from("#h-intro", "opacity", 0, 1, {
                        delay: 1400
                    }), W.from("#h-intro", "3dx", 0, -100), W.from(w[0], "3dy", 100, 0), W.from(w[1], "3dy", 100, 0), W.from("#h-intro-jenny", "opacity", 0, 1), W.from(".h-intro-left", "3dy", -100, 0), W.from("#h-intro-update", "3dy", 100, 0), W.from(T[0], "3dx", -100, 0), W.from(T[1], "3dx", -100, 0), W.from(T[2], "3dx", -100, 0), W.from("#h-intro-line", "3dy", 100, 0), W.from(k, "3dx", "0", "0"), W.from(k, "opacity", 0, 1), y && (W.from("#h-img-0-b", "3dx", "0", "0"), W.from("#h-img-0-b", "opacity", 0, 1), W.from(y, "opacity", 1, 0)), W.from(p, "opacity", 1, 0, {
                        callback: this.getCallback
                    }), W.play()
                }
            }, {
                key: "getCallback",
                value: function () {
                    var e = "ExpoOut";
                    this.removeCurrentXhr();
                    for (var t = index.Geb.class("h-txt-desc-txt"), i = t.length, n = index.Geb.class("h-text-desc-txt-wrap"), o = index.Geb.id("h-btn-container"), r = 0; r < i; r++) n[r].style.height = t[r].offsetHeight + "px";
                    o.style.left = Math.round(index.Win.w / 2 - o.offsetWidth / 2) + "px", this.app.className = "no-" + (+this.caseNo + 1), (new Pagi).showAll(this.caseNo + 1, 500), (new Line).introToCase(this.caseNo + 1, 0, 0);
                    var s = new index.Timeline;
                    s.from("#h-client-" + this.caseNo, "3dy", 100, 0, 1200, e), s.from(this.txtTitle[this.caseNo], "3dy", 100, 0, 1200, e, {
                        delay: 300
                    }), s.from("#h-txt-desc-line", "3dx", -110, 0, 1200, e), s.from(t[this.caseNo], "3dy", 100, 0, 1200, e), s.from(this.bottomTitle[0], "3dy", 100, 0, 1200, e, {
                        delay: 300
                    }), s.from(this.bottomValue[0], "3dy", 100, 0, 1200, e), s.from(this.bottomTitle[1], "3dy", 100, 0, 1200, e, {
                        delay: 100
                    }), s.from(this.bottomValue[1], "3dy", 100, 0, 1600, e), s.from(this.bottomTitle[2], "3dy", 100, 0, 1600, e, {
                        delay: 100
                    }), s.from(this.bottomValue[2], "3dy", 100, 0, 1600, e), s.from("#h-btn-container", "3dy", 300, 0, {
                        delay: 160
                    }), s.from(this.btnCover[this.caseNo], "3dy", 105, 0, 600, "Power3In"), s.from(this.btn[this.caseNo], "3dy", 100, 0), s.from(this.btn[this.caseNo], "opacity", 0, 1, {
                        delay: 600,
                        callbackDelay: 1e3,
                        callback: this.askedControllerInit
                    }), s.from(this.btnCover[this.caseNo], "3dy", 0, -105, 1200, e), s.play()
                }
            }]), e
        }(),
        NextTransition = function () {
            function e() {
                classCallCheck(this, e), this.app = index.Geb.id("app"), index.BindMaker(this, ["changePage"])
            }
            return createClass(e, [{
                key: "run",
                value: function (e) {
                    index.WTDisable.on(), this.getXhrReq = e;
                    for (var t = index.Geb.class("last")[0], i = index.Geb.class("next-browse")[0], n = index.Geb.class("next-btn-wrap"), o = index.Geb.class("burger-line-light"), r = index.Geb.class("burger-line-wrap"), s = 0; s < 2; s++) n[s].className = "next-btn-wrap oh off";
                    for (var a = 0; a < 3; a++)
                        if (r[a].classList.contains("active")) {
                            var l = new index.Merom(o[a], "3dx", 100, 0, 1e3, "Power4InOut", {
                                delay: 30 * a
                            });
                            l.play()
                        }
                    var h = "Power3In",
                        c = new index.Timeline;
                    c.from(t, "3dy", 0, -100, 500, h), c.from(i, "3dy", 0, -100, 500, h), c.from(".next-title", "3dy", 0, -100, 500, h), c.from(".next-title-line", "3dx", 0, -100, 500, h), c.from(".next-client", "3dy", 0, -100, 500, h), c.from(".next-img-transition", "3dy", "0", "-20", 500, h), c.from(".next-img-transition", "opacity", 1, 0, 500, h), c.from(".next-line-l", "3dy", 0, -100, 500, h), c.from(".next-line-r", "3dy", 0, -100, 500, h), c.from(".next-line-t-l", "3dx", 0, -100, 500, h), c.from(".next-line-t-r", "3dx", 0, 100, 500, h), c.from(".next-line-b-l", "3dx", 0, -100, 500, h), c.from(".next-line-b-r", "3dx", 0, 100, 500, h), c.from(".next-btn", "3dy", 0, -100, 500, h, {
                        callback: this.changePage
                    }), c.play()
                }
            }, {
                key: "changePage",
                value: function () {
                    function e() {
                        index.ScrollZero(), i.getXhrReq(t)
                    }

                    function t(e, t, r) {
                        function s() {
                            index.WTDisable.off(), e()
                        }
                        t.insertAsked(), t.removeCurrent();
                        var a = (i.app.getBoundingClientRect(), r.asked.base.charAt(1)),
                            l = "m" === a ? 3 : 2,
                            h = index.Geb.class("intro-l-img")[0],
                            c = index.Geb.id("intro-l-img-0-b"),
                            d = index.Geb.class("intro-l-bg")[0],
                            u = index.Geb.class("intro-r-txt-title")[0],
                            f = index.Geb.class("intro-r-line")[0],
                            m = index.Geb.class("intro-r-txt-p"),
                            g = index.Geb.class("intro-line")[0],
                            p = index.Geb.class("intro-mask")[0],
                            y = index.Geb.class("case-back-btn")[0],
                            x = index.Geb.class("case-back-line")[0],
                            b = new index.Timeline;
                        b.from("#next-sail", "3dy", 0, -100), b.from(".next", "opacity", 0, 1), b.from(p, "opacity", 0, 1), b.from(h, "3dx", 0, "-200"), c && b.from(c, "3dx", 0, "-200"), b.from(d, "3dx", -100, 0, 1500, "Power5Out", {
                            delay: 100
                        }), b.from(h, "opacity", 0, 1, 500, "Power2In", {
                            delay: 80
                        }), c && b.from(c, "opacity", 0, 1, 500, "Power2In"), b.from(h, "3dx", "-200", 0, n, o), b.from(u, "3dy", 100, 0, n, o, {
                            delay: 500,
                            callback: s
                        }), b.from(f, "3dx", -110, 0, n, o), 2 === l ? (b.from(m[0], "3dy", 100, 0, n, o, {
                            delay: 300
                        }), b.from(m[1], "3dy", 100, 0, n, o, {
                            delay: 120
                        })) : 3 === l && (b.from(m[0], "3dy", 100, 0, n, o, {
                            delay: 300
                        }), b.from(m[1], "3dy", 100, 0, n, o, {
                            delay: 120
                        }), b.from(m[2], "3dy", 100, 0, n, o, {
                            delay: 120
                        })), b.from(g, "3dy", 100, 0, n, o, {
                            delay: 300
                        }), b.from(y, "3dx", -100, 0, n, o), b.from(x, "3dx", -100, 0, n, o), b.play()
                    }
                    var i = this,
                        n = 1200,
                        o = "ExpoOut";
                    new index.Merom("#next-sail", "3dy", -100, 0).play(), index.Delay(e, 50)
                }
            }]), e
        }(),
        ScrollFx = function () {
            function e() {
                classCallCheck(this, e), this.app = index.Geb.id("app"), index.BindMaker(this, ["getScrollFx", "getSizeAndPos"]), this.scroll = new index.Scroll({
                    throttle: {
                        delay: 40,
                        atEnd: !1
                    },
                    callback: this.getScrollFx
                }), this.RO = new index.RO({
                    throttle: {
                        delay: 100,
                        atEnd: !0
                    },
                    callback: this.getSizeAndPos
                })
            }
            return createClass(e, [{
                key: "init",
                value: function () {
                    this.scrollFx = index.Geb.class("scroll-fx"), this.scrollFxL = this.scrollFx.length, this.scrollFxLimit = [], this.scrollFxSpe = index.Geb.class("scroll-fx-spe")[0], this.RO.on(), this.getSizeAndPos(), this.scroll.on()
                }
            }, {
                key: "getSizeAndPos",
                value: function () {
                    for (var e = index.Win.h - 50, t = index.Win.pageY, i = 0; i < this.scrollFxL; i++) this.scrollFxLimit[i] = this.scrollFx[i].getBoundingClientRect().top + t - e;
                    this.scrollFxSpeLimit = this.scrollFxSpe.getBoundingClientRect().top + t - e
                }
            }, {
                key: "getScrollFx",
                value: function (e) {
                    for (var t = 0; t < this.scrollFxL; t++)
                        if (e > this.scrollFxLimit[t] && !this.scrollFx[t].classList.contains("scroll-fx-on")) {
                            this.scrollFx[t].classList.add("scroll-fx-on");
                            var i = new index.Timeline;
                            i.from(this.scrollFx[t], "opacity", 0, 1, 150, "Power1In"), i.from(this.scrollFx[t], "3dy", "200", "0", 1200, "Power5Out"), i.play()
                        }
                    if (e > this.scrollFxSpeLimit && !this.scrollFxSpe.classList.contains("scroll-fx-on")) {
                        this.scrollFxSpe.classList.add("scroll-fx-on");
                        var n = new index.Timeline;
                        n.from(this.scrollFxSpe, "3dy", "200", "0", 1200, "Power5Out"), n.play()
                    }
                }
            }, {
                key: "destroy",
                value: function () {
                    this.scroll.off(), this.RO.off()
                }
            }]), e
        }(),
        FacebookController = function () {
            function e() {
                classCallCheck(this, e), this.scrollFx = new ScrollFx, index.BindMaker(this, ["getCanChangePage", "scrollToTeam", "burgerClick"])
            }
            return createClass(e, [{
                key: "init",
                value: function (e) {
                    this.paralyseDestroy = e, this.next = new Next, this.burgerMenu = new Burger, this.transition = new Transition, this.transitionBack = new TransitionBack, this.nextTransition = new NextTransition, this.introLineContainer = index.Geb.class("intro-line-container")[0], this.next.init(), this.scrollFx.init(), this.listeners("add"), this.getCanChangePage()
                }
            }, {
                key: "getCanChangePage",
                value: function () {
                    this.canChangePage = !0
                }
            }, {
                key: "getCanNotChangePage",
                value: function () {
                    this.canChangePage = !1
                }
            }, {
                key: "listeners",
                value: function (e) {
                    index.Listen(this.introLineContainer, e, "click", this.scrollToTeam), index.Listen("#burger", e, "click", this.burgerClick)
                }
            }, {
                key: "burgerClick",
                value: function () {
                    this.canChangePage && (this.getCanNotChangePage(), this.burgerMenu.open(!1, this.getCanChangePage, this.paralyseDestroy))
                }
            }, {
                key: "scrollToTeam",
                value: function () {
                    if (this.canChangePage) {
                        this.getCanNotChangePage();
                        var e = {
                            destination: index.Win.h,
                            duration: 1e3,
                            ease: "Power4InOut",
                            callback: this.getCanChangePage
                        };
                        index.ScrollTo(e)
                    }
                }
            }, {
                key: "destroy",
                value: function (e, t) {
                    function i(e, t, i) {
                        t.insertAsked(), o.transition.init(e, 0, function (e) {
                            t.removeCurrent()
                        }, "menuCaseToCase", o.burgerMenu, i)
                    }

                    function n(e, t, i) {
                        t.insertAsked(), o.transitionBack.init(e, function (e) {
                            t.removeCurrent()
                        }, i)
                    }
                    var o = this;
                    o.listeners("remove"), o.next.destroy(), this.scrollFx.destroy(), index.WTDisable.on(), "case-back-btn-wrap" === t.className ? e(n) : "next-btn" === t.className ? o.nextTransition.run(e) : e(i)
                }
            }]), e
        }(),
        FacebookController$1 = new FacebookController,
        Slider = function () {
            function e() {
                classCallCheck(this, e), this.timer = index.Geb.id("k-gallery-slider-top-timer"), this.noLeft = index.Geb.class("k-gallery-slider-top-no-left"), this.img = index.Geb.class("k-gallery-slider-top-img"), this.cover = index.Geb.class("k-gallery-slider-bottom-box-cover"), index.BindMaker(this, ["changeImg", "getSlide", "clickOnBox"])
            }
            return createClass(e, [{
                key: "init",
                value: function () {
                    var e = this;
                    this.intSetTime = setTimeout(function (t) {
                        e.getSlide(0)
                    }, 1e3)
                }
            }, {
                key: "addListeners",
                value: function () {
                    this.listeners("add")
                }
            }, {
                key: "listeners",
                value: function (e) {
                    index.Listen(".k-gallery-slider-bottom-box", e, "click", this.clickOnBox)
                }
            }, {
                key: "getSlide",
                value: function (e) {
                    var t = this;
                    this.no = e;
                    var i = 4 === e ? 0 : e + 1;
                    this.addListeners(), this.tl = new index.Timeline, this.tl.from(this.timer, "3dx", -100, 0, 5e3, "linear", {
                        callback: function (e) {
                            t.changeImg(t.no, i)
                        }
                    }), this.tl.play(), this.tlScale = new index.Timeline, this.tlScale.from(this.img[e], "scale", 1.02, 1.1, 6200, "linear"), this.tlScale.play()
                }
            }, {
                key: "changeImg",
                value: function (e, t, i) {
                    var n = this;
                    this.listeners("remove");
                    var o = void 0;
                    o = i || 0 !== t ? t > e ? 1 : -1 : 1, this.tl2 = new index.Timeline, this.tl2.from(this.timer, "3dx", 0, 100), this.tl2.from(this.img[e], "opacity", 1, 0, 1200, "linear"), this.tl2.from(this.noLeft[e], "3dy", 0, -100 * o, 1200, "Power4InOut"), this.tl2.from(this.cover[e], "3dx", 0, 101 * o, 1200, "Power4InOut"), this.tl2.from(this.img[t], "scale", 1, 1.02, 1200, "linear"), this.tl2.from(this.img[t], "opacity", 0, 1, 1200, "linear"), this.tl2.from(this.noLeft[t], "3dy", 100 * o, 0, 1200, "Power4InOut"), this.tl2.from(this.cover[t], "3dx", -101 * o, -0, 1200, "Power4InOut"), this.tl2.from(this.img[e], "scale", 1.1, 1, {
                        delay: 1200,
                        callback: function (e) {
                            n.getSlide(t)
                        }
                    }), this.tl2.play()
                }
            }, {
                key: "clickOnBox",
                value: function (e) {
                    var t = +e.target.dataset.no;
                    this.no !== t && (this.tl.pause("on"), this.changeImg(this.no, t, !0))
                }
            }, {
                key: "destroy",
                value: function () {
                    this.listeners("remove"), clearTimeout(this.intSetTime), this.tl && this.tl.pause("on"), this.tlScale && this.tlScale.pause("on"), this.tl2 && this.tl2.pause("on")
                }
            }]), e
        }(),
        AddVideo = function () {
            function e() {
                classCallCheck(this, e), this.data = [{
                    url: "https://www.youtube.com/embed/OCqTSbROa-w",
                    width: 1600,
                    height: 900
                }, {
                    url: "https://player.vimeo.com/video/113010893?color=b81d1d&title=0&byline=0&portrait=0",
                    width: 1600,
                    height: 900
                }, {
                    url: "https://player.vimeo.com/video/120676029?color=b81d1d&title=0&byline=0&portrait=0",
                    width: 800,
                    height: 450
                }, {
                    url: "https://player.vimeo.com/video/83499809?color=ffcc00&title=0&byline=0&portrait=0",
                    width: 1600,
                    height: 900
                }]
            }
            return createClass(e, [{
                key: "init",
                value: function (e) {
                    var t = e.target,
                        i = t.dataset.video,
                        n = t.parentNode.parentNode,
                        o = n.children[0],
                        r = o.children[0];
                    t.className = "film-cover-btn oh disable";
                    var s = document.createElement("iframe");
                    s.src = this.data[i].url, s.style.width = this.data[i].width, s.style.height = this.data[i].height, s.setAttribute("frameborder", 0), s.setAttribute("webkitallowfullscreen", ""), s.setAttribute("mozallowfullscreen", ""), s.setAttribute("allowFullScreen", ""), n.insertBefore(s, o);
                    var a = new index.Timeline;
                    a.from(t, "3dy", 0, -102, 1e3, "Power4InOut", {
                        delay: 200
                    }), a.from(r, "3dy", 0, -100, 1e3, "Power4InOut", {
                        delay: 1e3
                    }), a.from(o, "3dy", 0, -100, {
                        delay: 1e3
                    }), a.play()
                }
            }]), e
        }(),
        AddVideo$1 = new AddVideo,
        KlmController = function () {
            function e() {
                classCallCheck(this, e), this.scrollFx = new ScrollFx, index.BindMaker(this, ["getCanChangePage", "scrollToTeam", "burgerClick", "filmCoverBtnMouseenter", "filmCoverBtnMouseleave"])
            }
            return createClass(e, [{
                key: "init",
                value: function (e) {
                    this.paralyseDestroy = e, this.next = new Next, this.slider = new Slider, this.burgerMenu = new Burger, this.transition = new Transition, this.transitionBack = new TransitionBack, this.nextTransition = new NextTransition, this.introLineContainer = index.Geb.class("intro-line-container")[0], this.filmCoverBtn = index.Geb.class("film-cover-btn")[0], this.filmCoverBgWrap = index.Geb.class("film-cover-bg-wrap")[0], this.next.init(), this.scrollFx.init(), this.slider.init(), this.listeners("add"), this.getCanChangePage()
                }
            }, {
                key: "getCanChangePage",
                value: function () {
                    this.canChangePage = !0
                }
            }, {
                key: "getCanNotChangePage",
                value: function () {
                    this.canChangePage = !1
                }
            }, {
                key: "listeners",
                value: function (e) {
                    index.Listen(this.introLineContainer, e, "click", this.scrollToTeam), index.Listen("#burger", e, "click", this.burgerClick), index.Listen(this.filmCoverBtn, e, "mouseenter", this.filmCoverBtnMouseenter), index.Listen(this.filmCoverBtn, e, "mouseleave", this.filmCoverBtnMouseleave), index.Listen(this.filmCoverBtn, e, "click", function (e) {
                        AddVideo$1.init(e)
                    })
                }
            }, {
                key: "filmCoverBtnMouseenter",
                value: function () {
                    this.filmCoverBgWrap.className = "film-cover-bg-wrap active"
                }
            }, {
                key: "filmCoverBtnMouseleave",
                value: function () {
                    this.filmCoverBgWrap.className = "film-cover-bg-wrap"
                }
            }, {
                key: "burgerClick",
                value: function () {
                    this.canChangePage && (this.getCanNotChangePage(), this.burgerMenu.open(!1, this.getCanChangePage, this.paralyseDestroy))
                }
            }, {
                key: "scrollToTeam",
                value: function () {
                    if (this.canChangePage) {
                        this.getCanNotChangePage();
                        var e = {
                            destination: index.Win.h,
                            duration: 1e3,
                            ease: "Power4InOut",
                            callback: this.getCanChangePage
                        };
                        index.ScrollTo(e)
                    }
                }
            }, {
                key: "destroy",
                value: function (e, t) {
                    function i(e, t, i) {
                        t.insertAsked(), o.transition.init(e, 0, function (e) {
                            t.removeCurrent()
                        }, "menuCaseToCase", o.burgerMenu, i)
                    }

                    function n(e, t, i) {
                        t.insertAsked(), o.transitionBack.init(e, function (e) {
                            t.removeCurrent()
                        }, i)
                    }
                    var o = this;
                    o.listeners("remove"), o.next.destroy(), this.scrollFx.destroy(), this.slider.destroy(), index.WTDisable.on(), "case-back-btn-wrap" === t.className ? e(n) : "next-btn" === t.className ? o.nextTransition.run(e) : e(i)
                }
            }]), e
        }(),
        KlmController$1 = new KlmController,
        AdidasScrollFx = function () {
            function e() {
                classCallCheck(this, e), this.app = index.Geb.id("app"), index.BindMaker(this, ["burgerColor", "getSizeAndPos"]), this.scroll = new index.Scroll({
                    throttle: {
                        delay: 40,
                        atEnd: !1
                    },
                    callback: this.burgerColor
                }), this.RO = new index.RO({
                    throttle: {
                        delay: 100,
                        atEnd: !0
                    },
                    callback: this.getSizeAndPos
                })
            }
            return createClass(e, [{
                key: "init",
                value: function () {
                    this.filmTop = index.Geb.class("film-top")[0], this.burgerLine = [], this.burgerLineTop = [], this.burgerLineLimit = [], this.burgerLineDark = [], this.burgerLineLight = [];
                    for (var e = 0; e < 3; e++) this.burgerLine[e] = index.Geb.class("burger-line-wrap")[e], this.burgerLineDark[e] = index.Geb.class("burger-line-dark")[e], this.burgerLineLight[e] = index.Geb.class("burger-line-light")[e];
                    this.scrollFx = index.Geb.class("scroll-fx"), this.scrollFxL = this.scrollFx.length, this.scrollFxLimit = [], this.scrollFxSpe = index.Geb.class("scroll-fx-spe")[0], this.RO.on(), this.getSizeAndPos(), this.scroll.on()
                }
            }, {
                key: "getSizeAndPos",
                value: function () {
                    for (var e = index.Win.pageY, t = index.Win.h - 50, i = this.filmTop.offsetHeight / 2, n = this.filmTop.getBoundingClientRect().top + e, o = i + n, r = 0; r < 3; r++) this.burgerLineTop[r] = this.burgerLine[r].getBoundingClientRect().top, this.burgerLineLimit[r] = o - this.burgerLineTop[r];
                    for (var s = 0; s < this.scrollFxL; s++) this.scrollFxLimit[s] = this.scrollFx[s].getBoundingClientRect().top + e - t;
                    this.scrollFxSpeLimit = this.scrollFxSpe.getBoundingClientRect().top + e - t
                }
            }, {
                key: "burgerColor",
                value: function (e) {
                    for (var t = 0; t < 3; t++) e > this.burgerLineLimit[t] ? this.burgerLine[t].classList.contains("active") || (this.burgerLine[t].className = "burger-line-wrap-" + t + " burger-line-wrap oh active", this.burgerWhite(t)) : this.burgerLine[t].classList.contains("active") && (this.burgerLine[t].className = "burger-line-wrap-" + t + " burger-line-wrap oh", this.burgerBlack(t));
                    for (var i = 0; i < this.scrollFxL; i++)
                        if (e > this.scrollFxLimit[i] && !this.scrollFx[i].classList.contains("scroll-fx-on")) {
                            this.scrollFx[i].classList.add("scroll-fx-on");
                            var n = new index.Timeline;
                            n.from(this.scrollFx[i], "opacity", 0, 1, 150, "Power1In"), n.from(this.scrollFx[i], "3dy", "200", "0", 1200, "Power5Out"), n.play()
                        }
                    if (e > this.scrollFxSpeLimit && !this.scrollFxSpe.classList.contains("scroll-fx-on")) {
                        this.scrollFxSpe.classList.add("scroll-fx-on");
                        var o = new index.Timeline;
                        o.from(this.scrollFxSpe, "3dy", "200", "0", 1200, "Power5Out"), o.play()
                    }
                }
            }, {
                key: "burgerWhite",
                value: function (e) {
                    var t = new index.Timeline;
                    t.from(this.burgerLineDark[e], "3dx", -100, 0, 600, "ExpoOut"), t.from(this.burgerLineLight[e], "3dx", 0, 100, 600, "ExpoOut"), t.play()
                }
            }, {
                key: "burgerBlack",
                value: function (e) {
                    var t = new index.Timeline;
                    t.from(this.burgerLineDark[e], "3dx", 0, -100, 600, "ExpoOut"), t.from(this.burgerLineLight[e], "3dx", 100, 0, 600, "ExpoOut"), t.play()
                }
            }, {
                key: "destroy",
                value: function () {
                    this.scroll.off(), this.RO.off()
                }
            }]), e
        }(),
        AdidasController = function () {
            function e() {
                classCallCheck(this, e), this.adidasScrollFx = new AdidasScrollFx, index.BindMaker(this, ["getCanChangePage", "scrollToTeam", "burgerClick", "filmCoverBtnMouseenter0", "filmCoverBtnMouseleave0", "filmCoverBtnMouseenter1", "filmCoverBtnMouseleave1", "filmCoverBtnClick"])
            }
            return createClass(e, [{
                key: "init",
                value: function (e) {
                    this.paralyseDestroy = e, this.next = new Next, this.burgerMenu = new Burger, this.transition = new Transition, this.transitionBack = new TransitionBack, this.nextTransition = new NextTransition, this.introLineContainer = index.Geb.class("intro-line-container")[0], this.filmCoverBtn0 = index.Geb.class("film-cover-btn")[0], this.filmCoverBgWrap0 = index.Geb.class("film-cover-bg-wrap")[0], this.filmCoverBtn1 = index.Geb.class("film-cover-btn")[1], this.filmCoverBgWrap1 = index.Geb.class("film-cover-bg-wrap")[1], this.next.init(), this.adidasScrollFx.init(), this.listeners("add"), this.getCanChangePage()
                }
            }, {
                key: "getCanChangePage",
                value: function () {
                    this.canChangePage = !0
                }
            }, {
                key: "getCanNotChangePage",
                value: function () {
                    this.canChangePage = !1
                }
            }, {
                key: "listeners",
                value: function (e) {
                    index.Listen(this.introLineContainer, e, "click", this.scrollToTeam), index.Listen("#burger", e, "click", this.burgerClick), index.Listen(this.filmCoverBtn0, e, "click", this.filmCoverBtnClick), index.Listen(this.filmCoverBtn1, e, "click", this.filmCoverBtnClick), this.overListeners(e)
                }
            }, {
                key: "overListeners",
                value: function (e) {
                    index.Listen(this.filmCoverBtn0, e, "mouseenter", this.filmCoverBtnMouseenter0), index.Listen(this.filmCoverBtn0, e, "mouseleave", this.filmCoverBtnMouseleave0), index.Listen(this.filmCoverBtn1, e, "mouseenter", this.filmCoverBtnMouseenter1), index.Listen(this.filmCoverBtn1, e, "mouseleave", this.filmCoverBtnMouseleave1)
                }
            }, {
                key: "filmCoverBtnClick",
                value: function (e) {
                    this.overListeners("remove"), AddVideo$1.init(e)
                }
            }, {
                key: "filmCoverBtnMouseenter0",
                value: function () {
                    this.filmCoverBgWrap0.className = "film-cover-bg-wrap active"
                }
            }, {
                key: "filmCoverBtnMouseleave0",
                value: function () {
                    this.filmCoverBgWrap0.className = "film-cover-bg-wrap"
                }
            }, {
                key: "filmCoverBtnMouseenter1",
                value: function () {
                    this.filmCoverBgWrap1.className = "film-cover-bg-wrap active"
                }
            }, {
                key: "filmCoverBtnMouseleave1",
                value: function () {
                    this.filmCoverBgWrap1.className = "film-cover-bg-wrap"
                }
            }, {
                key: "burgerClick",
                value: function () {
                    this.canChangePage && (this.getCanNotChangePage(), this.burgerMenu.open(!1, this.getCanChangePage, this.paralyseDestroy))
                }
            }, {
                key: "scrollToTeam",
                value: function () {
                    if (this.canChangePage) {
                        this.getCanNotChangePage();
                        var e = {
                            destination: index.Win.h,
                            duration: 1e3,
                            ease: "Power4InOut",
                            callback: this.getCanChangePage
                        };
                        index.ScrollTo(e)
                    }
                }
            }, {
                key: "destroy",
                value: function (e, t) {
                    function i(e, t, i) {
                        t.insertAsked(), o.transition.init(e, 0, function (e) {
                            t.removeCurrent()
                        }, "menuCaseToCase", o.burgerMenu, i)
                    }

                    function n(e, t, i) {
                        t.insertAsked(), o.transitionBack.init(e, function (e) {
                            t.removeCurrent()
                        }, i)
                    }
                    var o = this;
                    o.listeners("remove"), o.next.destroy(), this.adidasScrollFx.destroy(), index.WTDisable.on(), "case-back-btn-wrap" === t.className ? e(n) : "next-btn" === t.className ? o.nextTransition.run(e) : e(i)
                }
            }]), e
        }(),
        AdidasController$1 = new AdidasController,
        McdonaldsScrollFx = function () {
            function e() {
                classCallCheck(this, e), this.app = index.Geb.id("app"), index.BindMaker(this, ["burgerColor", "getSizeAndPos"]), this.scroll = new index.Scroll({
                    throttle: {
                        delay: 40,
                        atEnd: !1
                    },
                    callback: this.burgerColor
                }), this.RO = new index.RO({
                    throttle: {
                        delay: 100,
                        atEnd: !0
                    },
                    callback: this.getSizeAndPos
                })
            }
            return createClass(e, [{
                key: "init",
                value: function () {
                    this.mPicto = index.Geb.id("m-picto-img"), this.mMorning = index.Geb.id("m-mcmorning-img"), this.burgerLine = [], this.burgerLineTop = [], this.burgerLineLimit0 = [], this.burgerLineLimit1 = [], this.burgerLineLimit2 = [], this.burgerLineLimit3 = [], this.burgerLineDark = [], this.burgerLineLight = [];
                    for (var e = 0; e < 3; e++) this.burgerLine[e] = index.Geb.class("burger-line-wrap")[e], this.burgerLineDark[e] = index.Geb.class("burger-line-dark")[e], this.burgerLineLight[e] = index.Geb.class("burger-line-light")[e];
                    this.scrollFx = index.Geb.class("scroll-fx"), this.scrollFxL = this.scrollFx.length, this.scrollFxLimit = [], this.scrollFxSpe = index.Geb.class("scroll-fx-spe")[0], this.RO.on(), this.getSizeAndPos(), this.scroll.on()
                }
            }, {
                key: "getSizeAndPos",
                value: function () {
                    for (var e = index.Win.pageY, t = index.Win.h - 50, i = this.mPicto.offsetHeight, n = this.mPicto.getBoundingClientRect().top + e, o = n, r = n + i, s = this.mMorning.offsetHeight, a = this.mMorning.getBoundingClientRect().top + e, l = a, h = a + s, c = 0; c < 3; c++) this.burgerLineTop[c] = this.burgerLine[c].getBoundingClientRect().top, this.burgerLineLimit0[c] = o - this.burgerLineTop[c], this.burgerLineLimit1[c] = r - this.burgerLineTop[c], this.burgerLineLimit2[c] = l - this.burgerLineTop[c], this.burgerLineLimit3[c] = h - this.burgerLineTop[c];
                    for (var d = 0; d < this.scrollFxL; d++) this.scrollFxLimit[d] = this.scrollFx[d].getBoundingClientRect().top + e - t;
                    this.scrollFxSpeLimit = this.scrollFxSpe.getBoundingClientRect().top + e - t
                }
            }, {
                key: "burgerColor",
                value: function (e) {
                    for (var t = 0; t < 3; t++) e > this.burgerLineLimit0[t] && e < this.burgerLineLimit1[t] || e > this.burgerLineLimit2[t] && e < this.burgerLineLimit3[t] ? this.burgerLine[t].classList.contains("active") || (this.burgerLine[t].className = "burger-line-wrap-" + t + " burger-line-wrap oh active", this.burgerWhite(t)) : this.burgerLine[t].classList.contains("active") && (this.burgerLine[t].className = "burger-line-wrap-" + t + " burger-line-wrap oh", this.burgerBlack(t));
                    for (var i = 0; i < this.scrollFxL; i++)
                        if (e > this.scrollFxLimit[i] && !this.scrollFx[i].classList.contains("scroll-fx-on")) {
                            this.scrollFx[i].classList.add("scroll-fx-on");
                            var n = new index.Timeline;
                            n.from(this.scrollFx[i], "opacity", 0, 1, 150, "Power1In"), n.from(this.scrollFx[i], "3dy", "200", "0", 1200, "Power5Out"), n.play()
                        }
                    if (e > this.scrollFxSpeLimit && !this.scrollFxSpe.classList.contains("scroll-fx-on")) {
                        this.scrollFxSpe.classList.add("scroll-fx-on");
                        var o = new index.Timeline;
                        o.from(this.scrollFxSpe, "3dy", "200", "0", 1200, "Power5Out"), o.play()
                    }
                }
            }, {
                key: "burgerWhite",
                value: function (e) {
                    var t = new index.Timeline;
                    t.from(this.burgerLineDark[e], "3dx", -100, 0, 600, "ExpoOut"), t.from(this.burgerLineLight[e], "3dx", 0, 100, 600, "ExpoOut"), t.play()
                }
            }, {
                key: "burgerBlack",
                value: function (e) {
                    var t = new index.Timeline;
                    t.from(this.burgerLineDark[e], "3dx", 0, -100, 600, "ExpoOut"), t.from(this.burgerLineLight[e], "3dx", 100, 0, 600, "ExpoOut"), t.play()
                }
            }, {
                key: "destroy",
                value: function () {
                    this.scroll.off(), this.RO.off()
                }
            }]), e
        }(),
        McdonaldsController = function () {
            function e() {
                classCallCheck(this, e), this.mcdonaldsScrollFx = new McdonaldsScrollFx, index.BindMaker(this, ["getCanChangePage", "scrollToTeam", "burgerClick", "filmCoverBtnMouseenter", "filmCoverBtnMouseleave"])
            }
            return createClass(e, [{
                key: "init",
                value: function (e) {
                    this.paralyseDestroy = e, this.next = new Next, this.burgerMenu = new Burger, this.transition = new Transition, this.transitionBack = new TransitionBack, this.nextTransition = new NextTransition, this.introLineContainer = index.Geb.class("intro-line-container")[0], this.filmCoverBtn = index.Geb.class("film-cover-btn")[0], this.filmCoverBgWrap = index.Geb.class("film-cover-bg-wrap")[0], this.next.init(), this.mcdonaldsScrollFx.init(), this.listeners("add"), this.getCanChangePage()
                }
            }, {
                key: "getCanChangePage",
                value: function () {
                    this.canChangePage = !0
                }
            }, {
                key: "getCanNotChangePage",
                value: function () {
                    this.canChangePage = !1
                }
            }, {
                key: "listeners",
                value: function (e) {
                    index.Listen(this.introLineContainer, e, "click", this.scrollToTeam), index.Listen("#burger", e, "click", this.burgerClick), index.Listen(this.filmCoverBtn, e, "mouseenter", this.filmCoverBtnMouseenter), index.Listen(this.filmCoverBtn, e, "mouseleave", this.filmCoverBtnMouseleave), index.Listen(this.filmCoverBtn, e, "click", function (e) {
                        AddVideo$1.init(e)
                    })
                }
            }, {
                key: "filmCoverBtnMouseenter",
                value: function () {
                    this.filmCoverBgWrap.className = "film-cover-bg-wrap active"
                }
            }, {
                key: "filmCoverBtnMouseleave",
                value: function () {
                    this.filmCoverBgWrap.className = "film-cover-bg-wrap"
                }
            }, {
                key: "burgerClick",
                value: function () {
                    this.canChangePage && (this.getCanNotChangePage(), this.burgerMenu.open(!1, this.getCanChangePage, this.paralyseDestroy))
                }
            }, {
                key: "scrollToTeam",
                value: function () {
                    if (this.canChangePage) {
                        this.getCanNotChangePage();
                        var e = {
                            destination: index.Win.h,
                            duration: 1e3,
                            ease: "Power4InOut",
                            callback: this.getCanChangePage
                        };
                        index.ScrollTo(e)
                    }
                }
            }, {
                key: "destroy",
                value: function (e, t) {
                    function i(e, t, i) {
                        t.insertAsked(), o.transition.init(e, 0, function (e) {
                            t.removeCurrent()
                        }, "menuCaseToCase", o.burgerMenu, i)
                    }

                    function n(e, t, i) {
                        t.insertAsked(), o.transitionBack.init(e, function (e) {
                            t.removeCurrent()
                        }, i)
                    }
                    var o = this;
                    o.listeners("remove"), o.next.destroy(), this.mcdonaldsScrollFx.destroy(), index.WTDisable.on(), "case-back-btn-wrap" === t.className ? e(n) : "next-btn" === t.className ? o.nextTransition.run(e) : e(i)
                }
            }]), e
        }(),
        McDonaldsController = new McdonaldsController,
        Route = function e() {
            return classCallCheck(this, e), {
                loader: Loader,
                error: ErrorController$1,
                "/": HomeController$1,
                "/facebook": FacebookController$1,
                "/klm": KlmController$1,
                "/adidas": AdidasController$1,
                "/mcdonalds": McDonaldsController
            }
        },
        Route$1 = new Route,
        Router = function () {
            function e(t) {
                var i = this;
                classCallCheck(this, e), this.xhr = index.Geb.id("xhr"), this.isXhr = t.xhr, this.waitDestroy = !1, this.route = Route$1, this.isTouch = index.Sniffer.isTouch, this.isSafari = index.Sniffer.isSafari, this.isError = index.Sniffer.isPageError, this.canDestroy = !0;
                var n = index.Win.path;
                this.path = {
                    current: {
                        complete: n,
                        base: "/" + n.split("/")[1],
                        error: this.isError
                    }
                }, this.paralyseDestroy = {
                    on: function (e) {
                        i.canDestroy = !1
                    },
                    off: function (e) {
                        i.canDestroy = !0
                    }
                }, this.isXhr && Xhr.onPopstate(), index.BindMaker(this, ["afterLoading", "eventDelegation", "hrefTransition"]), index.WTDisable.on(), index.Listen(index.Dom.body, "add", "click", this.eventDelegation), this.loading()
            }
            return createClass(e, [{
                key: "loading",
                value: function () {
                    this.waitDestroy = !0, new(0, this.route.loader)(this.afterLoading, this.path)
                }
            }, {
                key: "afterLoading",
                value: function () {
                    index.WTDisable.off(), this.isError ? this.route.error.init(this.paralyseDestroy, this.path) : this.route[this.path.current.base].init(this.paralyseDestroy, this.path), this.waitDestroy = !1
                }
            }, {
                key: "eventDelegation",
                value: function (e) {
                    function t() {
                        e.preventDefault()
                    }
                    for (var i = e.target, n = !1, o = !1; i;) {
                        if ("A" === i.tagName) {
                            n = !0;
                            break
                        }
                        if ("INPUT" === i.tagName && "submit" === i.type) {
                            o = !0;
                            break
                        }
                        if ("BUTTON" === i.tagName && "submit" === i.type) {
                            o = !0;
                            break
                        }
                        i = i.parentNode
                    }
                    if (n) {
                        var r = i.href;
                        if (i.classList.contains("tbl")) t(), window.open(r);
                        else if (i.classList.contains("tbs")) t(), this.isTouch && this.isSafari ? window.location.href = r : window.open(r);
                        else if (this.isXhr) {
                            var s = "#" === r.charAt(r.length - 1),
                                a = "mailto" !== r.substring(0, 6),
                                l = !i.classList.contains("ost");
                            s ? t() : a && l && (t(), this.waitDestroy || (this.path.current = index.Win.path, this.path.asked = r.replace(/^.*\/\/[^\/]+/, ""), this.path.current !== this.path.asked && this.canDestroy && (this.waitDestroy = !0, this.target = i, this.hrefTransition())))
                        } else i.classList.contains("prevent") && t()
                    } else o && this.isXhr && t()
                }
            }, {
                key: "hrefTransition",
                value: function () {
                    function e(e) {
                        Xhr.controller(a, t, e)
                    }

                    function t(e, t) {
                        var o = {
                                current: {
                                    complete: i.path.current,
                                    base: n,
                                    error: i.isError
                                },
                                asked: {
                                    complete: i.path.asked,
                                    base: r,
                                    error: !1
                                }
                            },
                            s = function (e) {
                                l.init(i.paralyseDestroy, o), index.WTDisable.off(), i.waitDestroy = !1
                            },
                            a = {
                                insertAsked: function (t) {
                                    i.xhr.insertAdjacentHTML("beforeend", e)
                                },
                                removeCurrent: function (e) {
                                    var t = i.xhr.children[0];
                                    t.parentNode.removeChild(t)
                                }
                            };
                        i.isError = !1, t(s, a, o)
                    }
                    var i = this,
                        n = "/" + this.path.current.split("/")[1],
                        o = this.isError ? this.route.error : this.route[n],
                        r = "/" + this.path.asked.split("/")[1],
                        s = r.split("#")[0],
                        a = this.path.asked.split("#")[0],
                        l = this.route[s];
                    o.destroy(e, i.target)
                }
            }]), e
        }(),
        App = function e() {
            classCallCheck(this, e), Support.init(), index.TopWhenRefresh(), new Router({
                xhr: !0
            })
        };
    ! function (e) {
        new App
    }();
})();

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-60839319-1', 'auto');
ga('send', 'pageview');