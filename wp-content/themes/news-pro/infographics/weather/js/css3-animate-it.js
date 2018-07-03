! function(a) {
    var t, i = [],
        e = !1,
        n = !1,
        r = {
            interval: 250,
            force_process: !1
        },
        o = a(window);

    function s() {
        n = !1;
        for (var e = 0; e < i.length; e++) {
            var r = a(i[e]).filter(function() {
                return a(this).is(":appeared")
            });
            if (r.trigger("appear", [r]), t) {
                var o = t.not(r);
                o.trigger("disappear", [o])
            }
            t = r
        }
    }
    a.expr[":"].appeared = function(t) {
        var i = a(t);
        if (!i.is(":visible")) return !1;
        var e = o.scrollLeft(),
            n = o.scrollTop(),
            r = i.offset(),
            s = r.left,
            d = r.top;
        return d + i.height() >= n && d - (i.data("appear-top-offset") || 0) <= n + o.height() && s + i.width() >= e && s - (i.data("appear-left-offset") || 0) <= e + o.width()
    }, a.fn.extend({
        appear: function(t) {
            var o = a.extend({}, r, t || {}),
                d = this.selector || this;
            if (!e) {
                var f = function() {
                    n || (n = !0, setTimeout(s, o.interval))
                };
                a(window).scroll(f).resize(f), e = !0
            }
            return o.force_process && setTimeout(s, o.interval), i.push(d), a(d)
        }
    }), a.extend({
        force_appear: function() {
            return !!e && (s(), !0)
        }
    })
}(jQuery),
function(a) {
    "$:nomunge";
    var t = {},
        i = "doTimeout",
        e = Array.prototype.slice;

    function n(i) {
        var n, r = this,
            o = {},
            s = i ? a.fn : a,
            d = arguments,
            f = 4,
            l = d[1],
            u = d[2],
            m = d[3];

        function c() {
            i ? n.removeData(i) : l && delete t[l]
        }

        function p() {
            o.id = setTimeout(function() {
                o.fn()
            }, u)
        }
        if ("string" != typeof l && (f--, l = i = 0, u = d[1], m = d[2]), i ? (n = r.eq(0)).data(i, o = n.data(i) || {}) : l && (o = t[l] || (t[l] = {})), o.id && clearTimeout(o.id), delete o.id, m) o.fn = function(a) {
            "string" == typeof m && (m = s[m]), !0 !== m.apply(r, e.call(d, f)) || a ? c() : p()
        }, p();
        else {
            if (o.fn) return void 0 === u ? c() : o.fn(!1 === u), !0;
            c()
        }
    }
    a[i] = function() {
        return n.apply(window, [0].concat(e.call(arguments)))
    }, a.fn[i] = function() {
        var a = e.call(arguments),
            t = n.apply(this, [i + a[0]].concat(a));
        return "number" == typeof a[0] || "number" == typeof a[1] ? this : t
    }
}(jQuery), jQuery(document).ready(function() {
    jQuery(".animatedParent").appear(), jQuery(document.body).on("appear", ".animatedParent", function(a, t) {
        var i = jQuery(this).find(".animated"),
            e = jQuery(this);
        if (void 0 != e.attr("data-sequence")) {
            var n = jQuery(this).find(".animated:first").attr("data-id"),
                r = jQuery(this).find(".animated:last").attr("data-id");
            jQuery(e).find(".animated[data-id=" + n + "]").addClass("go"), n++, delay = Number(e.attr("data-sequence")), $.doTimeout(delay, function() {
                if (jQuery(e).find(".animated[data-id=" + n + "]").addClass("go"), ++n <= r) return !0
            })
        } else {
            if (i.addClass("go"), jQuery("#car-animation-1").hasClass("go"))
                if (0 == jQuery("#car-animation-1").find("svg").length) lottie.loadAnimation(paramscar1);
            if (jQuery("#car-animation-2").hasClass("go"))
                if (0 == jQuery("#car-animation-2").find("svg").length) lottie.loadAnimation(paramscar2);
            if (jQuery("#car-animation-3").hasClass("go"))
                if (0 == jQuery("#car-animation-3").find("svg").length) lottie.loadAnimation(paramscar3);
            if (jQuery(".arrow-bottom-animation").hasClass("go"))
                if (0 == jQuery(".arrow-bottom-animation").find("svg").length) lottie.loadAnimation(arrowparams);
            jQuery(".star-animation").each(function(a, t) {
				
                if ((jQuery(this).find("svg").length == 0) && jQuery(this).hasClass("go")) {
                    var i = jQuery(this).attr("id"),
						_thisLi = jQuery(this);
                    if (jQuery(window).width() > 767){
						if ("star-animation-1" == i) {
							lottie.loadAnimation(starparams1);
							setTimeout(function() {
                            	lottie.loadAnimation(starparams2);
							}, 1000);
							setTimeout(function() {
								lottie.loadAnimation(starparams3);
							}, 2000) 
							setTimeout(function() {
								lottie.loadAnimation(starparams4);
							}, 3000) 
							setTimeout(function() {
								lottie.loadAnimation(starparams5);
							}, 4000)
						}					
					}
                    else if ("star-animation-1" == i) lottie.loadAnimation(starparams1);
                    else if ("star-animation-2" == i) {
                        lottie.loadAnimation(starparams2)
                    } else if ("star-animation-3" == i) {
                        lottie.loadAnimation(starparams3)
                    } else if ("star-animation-4" == i) {
                        lottie.loadAnimation(starparams4)
                    } else if ("star-animation-5" == i) {
                        lottie.loadAnimation(starparams5)
                    }
                }
            })
        }
    }), jQuery(document.body).on("disappear", ".animatedParent", function(a, t) {
        jQuery(this).hasClass("animateOnce") || (jQuery(this).find(".animated").removeClass("go"), jQuery(".car_sec").removeClass("active"))
    }), jQuery(window).on("load", function() {
        jQuery.force_appear()
    })
});