"use strict";

function TextWidget() {
    this.serverURL = "", this.useEmailField = !0, this.usePhoneField = !0, this.useNameField = !0, this.useCustomField = !1, this.useMessageField = !1, this.customField = {}, this.locationId = "", this.heading = "", this.subHeading = "", this.headerIcon = "", this.footerText = "", this.buttonText = "", this.thankYouHeading = "", this.thankYouSubHeading = "", this.customIcon = "", this.countryCode = "US", this.primaryColor = "", this.formId = "", this.promptShow = !0, this.promptImage = "", this.promptMessage = "", this.nameField = function() {
        return ['              <div class="form-group">', '                <label class="sr-only">Name</label>', '                <input type="text" class="form-control" placeholder="Name" id="msgsndr_name" required value="' + this.getName() + '">', "              </div>"]
    }, this.phoneField = function() {
        return ['              <div class="form-group" id="phone-group">', '                <label class="sr-only">Mobile Phone</label>', '                <input type="text" class="form-control" placeholder="Mobile Phone" id="msgsndr_phone" required value="' + this.getPhone() + '">', "              </div>"]
    }, this.emailField = function() {
        return ['              <div class="form-group">', '                <label class="sr-only">Email</label>', '                <input type="email" class="form-control" placeholder="Email" id="msgsndr_email" required value="' + this.getEmail() + '">', "              </div>"]
    }, this.messageField = function() {
        return ['              <div class="form-group">', '                <label class="sr-only">Message</label>', '                <textarea class="form-control" placeholder="Message" rows="4" id="msgsndr_message" required></textarea>', "              </div>"]
    }, this.template = function() {
        return [this.getPrompt() + '    <div class="hl_text-widget" id="hl_text-widget">', '      <button class="hl_text-widget--btn" style="background:' + this.getPrimaryColor() + '" id="hl_text-widget--btn">', '        <div class="icon widget-open-icon active">', this.getIcon(), "        </div>", '        <div class="icon widget-close-icon">', '          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="24" height="24" viewBox="0 0 23.8 23.9">', "            <defs>", "              <style>", "                .cls-1 {", "                  fill: #fff;", "                  fill-rule: evenodd;", "                }", "              </style>", "            </defs>", '            <path d="M13.3 11.9L23.5 22.2C23.9 22.6 23.9 23.2 23.5 23.6 23.3 23.8 23.1 23.9 22.8 23.9 22.6 23.9 22.3 23.8 22.1 23.6L11.9 13.4 1.7 23.6C1.5 23.8 1.2 23.9 1 23.9 0.7 23.9 0.5 23.8 0.3 23.6 -0.1 23.2-0.1 22.6 0.3 22.2L10.5 11.9 0.3 1.7C-0.1 1.3-0.1 0.7 0.3 0.3 0.7-0.1 1.3-0.1 1.7 0.3L11.9 10.5 22.1 0.3C22.5-0.1 23.1-0.1 23.5 0.3 23.9 0.7 23.9 1.3 23.5 1.7L13.3 11.9Z"', '              class="cls-1" />', "          </svg>", "        </div>", "      </button>", '      <div class="hl_text-widget--box" id="hl_text-widget--box" style="display: none;">', '         <div class="chat_header" style="background:' + this.getPrimaryColor() + '">', '                <div class="chat_header_container slide-in-bottom">', '                            <div class="header_img">', this.getHeaderIcon(), "                            </div>", '                            <h1><span id="chat_heading">' + this.getHeading() + '</span></h1> <h2><span class="chat_subheading">' + this.getSubHeading() + "</span></h2>", "                          </div>", "                        </div>", '        <div class="hl_text-widget--box-inner">', '          <div class="hl_text-widget--form bounce-in-fwd">', '            <form id="msgsndr_message-form">', this.useNameField ? this.nameField().join("\n") : "", this.usePhoneField ? this.phoneField().join("\n") : "", this.useEmailField ? this.emailField().join("\n") : "", this.useCustomField ? this.generateCustomField().join("\n") : this.messageField().join("\n"), '              <div class="text-center">', '                <button type="submit" class="btn btn-primary" style="background:' + this.getPrimaryColor() + '" id="hl_text-widget--send-btn">' + this.getButtonText() + "</button>", "              </div>", "            </form>", "          </div>", '          <div class="hl_text-widget--thankyou bounce-in-fwd" style="display: none;">', '            <div class="hl_text-widget--thankyou-inner"><div class="hl_text-widget--heading">', "              <h1>" + this.getThankYouHeading() + "</h1>", "              <p>" + this.getThankYouSubHeading() + "</p>", "            </div>", '            <p class="smiley">&#x1F60A;</p>', '            <div class="text-center">', '              <button type="text" class="btn btn-default" style="background:' + this.getPrimaryColor() + '" id="hl_text-widget--send-another">Send Another Message</button>', "            </div></div>", "          </div>", "        </div>", '        <div class="hl_text-widget-footer">', '         <div class="hl_text-widget-footer-inner">', "           <span>" + this.getFooterText() + "</span>", "         </div>", "       </div>", "      </div>", "    </div>"]
    }
}
var msgsndrjQuery;
TextWidget.prototype.getIcon = function() {
    return this.customIcon ? '<img src="' + this.customIcon + '" />' : '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="32" height="30" viewBox="0 0 32 30"><defs><style>.cls-1 {fill: #000;fill-rule: evenodd;}</style></defs><path d="M27 24.6C27.2 25.8 27.6 26.7 27.9 27.3 28.3 27.9 28.7 28.2 28.7 28.2 29 28.5 29.1 28.9 28.9 29.3 28.8 29.7 28.5 30 28.1 30 28 30 27.9 30 27.8 30 26.7 30 23.4 29.8 20.9 27L19 27C15.9 27 13.2 25.8 11.5 24.9 11 24.6 10.9 24 11.1 23.5 11.4 23 12 22.9 12.5 23.1 14 24 16.3 25 19 25L21.4 25C21.7 25 22 25.1 22.2 25.4 23.3 26.8 24.8 27.5 25.9 27.8 25.4 26.7 25.1 25.4 25 24.1 24.9 23.7 25.1 23.4 25.5 23.2 28.3 21.5 30 19.1 30 16.5 30 14.8 29.3 13 28.2 11.6 27.9 11.2 27.9 10.6 28.3 10.2 28.8 9.9 29.4 9.9 29.7 10.4 31.2 12 32 14.3 32 16.5 32 19.6 30.2 22.5 27 24.6ZM13 21L11.1 21C8.6 23.8 5.2 24 4.2 24 4 24 3.9 24 3.9 24 3.5 24 3.2 23.7 3.1 23.3 2.9 22.9 3 22.5 3.3 22.3 3.4 22.2 4.7 21 5 18.6 1.8 16.5 0 13.6 0 10.5 0 4.7 5.8 0 13 0 20.2 0 26 4.7 26 10.5 26 16.3 20.2 21 13 21ZM13 2C6.9 2 2 5.8 2 10.5 2 13.1 3.7 15.5 6.5 17.2 6.9 17.4 7.1 17.7 7 18.1 6.9 19.6 6.5 20.9 6.1 21.8 7.2 21.5 8.7 20.8 9.8 19.4 10 19.1 10.3 19 10.6 19L13 19C19.1 19 24 15.2 24 10.5 24 5.8 19.1 2 13 2Z"class="cls-1" /></svg>'
}, TextWidget.prototype.getHeaderIcon = function() {
    return this.headerIcon ? '<img src="' + this.headerIcon + '" />' : this.getIcon()
}, TextWidget.prototype.getPrimaryColor = function() {
    return this.primaryColor || "linear-gradient(135deg, rgb(48, 71, 236) 0%, rgb(15, 34, 167) 100%)"
}, TextWidget.prototype.getHeading = function() {
    return this.heading || "Hi ðŸ‘‹"
}, TextWidget.prototype.getSubHeading = function() {
    return this.subHeading || "Enter your question below and someone will get back to you."
}, TextWidget.prototype.getThankYouHeading = function() {
    return this.thankYouHeading || "Thank You!"
}, TextWidget.prototype.getThankYouSubHeading = function() {
    return this.thankYouSubHeading || "One of our representatives will contact you shortly."
}, TextWidget.prototype.getFooterText = function() {
    return this.footerText || "By submitting you agree to receive SMS or e-mails for the provided channel. Rates may be applied."
}, TextWidget.prototype.getButtonText = function() {
    return this.buttonText || "Send"
}, TextWidget.prototype.getpromptMessage = function() {
    return this.promptMessage || "Hi there, have a question? Text us here."
}, TextWidget.prototype.getPromptImage = function() {
    return this.promptImage || "https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144855718.jpg"
}, TextWidget.prototype.getPrompt = function() {
    return this.promptShow ? '<div class="prompt-container" style="display: none"><div class="prompt-close" style="background:' + this.getPrimaryColor() + '">close</div><div class="prompt-msg" ><img class="prompt-profile" src="' + this.getPromptImage() + '" alt="prompt-profile"><div class="prompt-message">' + this.getpromptMessage() + "</div></div></div>" : ""
}, TextWidget.prototype.getPhone = function() {
    return this.readCookie("phone") || ""
}, TextWidget.prototype.getCustomField = function() {
    var e, t = this.customField.name.split("_");
    for (e = 0; e < t.length; e++) t[e] = t[e].charAt(0).toUpperCase() + t[e].slice(1);
    return t.join(" ") || ""
}, TextWidget.prototype.generateCustomField = function() {
    var e = this;
    if ("text" == this.customField.type) return ['<div class="form-group">', '<label class="sr-only">' + this.getCustomField() + "</label>", '<input type="text" class="form-control" name="' + this.customField.name + '" placeholder="' + this.getCustomField() + '" id="msgsndr_custom" required value="">', "</div>"];
    if ("radio" == this.customField.type) {
        var t = [];
        this.customField.options.forEach(function(o) {
            var i = '<label><input type="radio" name="' + e.customField.name + '" required value="' + o + '"> ' + o + "</label>";
            t.push(i)
        });
        var o = ['<div class="form-group">', '<label style="font-size: 15px; font-weight: 500;">' + this.getCustomField() + "</label>", "</div>"];
        return o.splice.apply(o, [2, 0].concat(t)), o
    }
}, TextWidget.prototype.bindClickHandler = function() {
    var e = this;
    msgsndrjQuery(function() {
        msgsndrjQuery(document).on("click", "#hl_text-widget--btn, .prompt-msg", function() {
            msgsndrjQuery(".prompt-container").remove();
            var e = msgsndrjQuery("#hl_text-widget--btn"),
                t = msgsndrjQuery("#hl_text-widget--box");
            e.toggleClass("active"), t.fadeToggle(300), t.toggleClass("active"), e.find(".widget-open-icon").toggleClass("active"), e.find(".widget-close-icon").toggleClass("active")
        }), msgsndrjQuery(".prompt-close").on("click", function() {
            msgsndrjQuery(".prompt-container").remove()
        }), msgsndrjQuery(document).on("submit", "#msgsndr_message-form", function(t) {
            t.preventDefault();
            var o = {
                    location_id: e.locationId
                },
                i = e.useNameField ? msgsndrjQuery("#msgsndr_name").val() : "",
                s = e.useEmailField ? msgsndrjQuery("#msgsndr_email").val() : "",
                n = e.usePhoneField ? msgsndrjQuery("#msgsndr_phone").val() : "",
                r = e.useCustomField ? "" : msgsndrjQuery("#msgsndr_message").val(),
                a = e.useCustomField ? "radio" == e.customField.type ? msgsndrjQuery('input[name="' + e.customField.name + '"]:checked').val() : msgsndrjQuery('input[name="' + e.customField.name + '"]').val() : "";
            e.createCookie("phone", n), e.createCookie("name", i), e.createCookie("email", s), s && (o.email = s, e.createCookie("email", s)), n && (o.phone = n, e.createCookie("phone", n)), r && (o.message = r), e.useCustomField ? (i && (o.full_name = i, e.createCookie("name", i)), o[e.customField.name] = a, o.formId = e.formId, e.sendForm(o)) : (i && (o.name = i, e.createCookie("name", i)), e.sendMessage(o));
            var d = msgsndrjQuery(".hl_text-widget--form button");
            d && d.hide()
        }), msgsndrjQuery(document).on("click", "#hl_text-widget--send-another", function(e) {
            e.preventDefault(), msgsndrjQuery(".hl_text-widget--thankyou").toggle(), msgsndrjQuery(".hl_text-widget--form").toggle()
        }), msgsndrjQuery("body #msgsndr_phone").on("blur", function(t) {
            msgsndrjQuery(t.target).val(e.formatPhoneNumber(msgsndrjQuery(t.target).val()))
        }), msgsndrjQuery("body #msgsndr_email").on("blur", function(t) {
            msgsndrjQuery(t.target).val(e.validateEmail(msgsndrjQuery(t.target).val()))
        })
    })
}, TextWidget.prototype.sendForm = function(e) {
    console.log(e), msgsndrjQuery.ajax({
        url: this.serverURL + "/form",
        type: "POST",
        data: JSON.stringify(e),
        contentType: "application/json",
        success: function(e) {
            console.log(e);
            var t = msgsndrjQuery(".hl_text-widget--form button");
            t && t.show();
            var o = msgsndrjQuery(".hl_text-widget--form");
            o && o.toggle();
            var i = msgsndrjQuery(".hl_text-widget--thankyou");
            i && i.toggle()
        },
        error: function(e, t, o) {
            var i = msgsndrjQuery(".hl_text-widget--form button");
            if (i && i.show(), e && e.responseText) {
                var s = JSON.parse(e.responseText),
                    n = msgsndrjQuery("#errmsgdisp");
                s && s.msg && n ? n.html(s.msg) : n && n.html("Please enter correct name, phone or email, and message before you hit send."), console.log(e.responseText)
            }
        }
    })
}, TextWidget.prototype.sendMessage = function(e) {
    console.log(e), msgsndrjQuery.ajax({
        url: this.serverURL + "/message",
        type: "POST",
        data: JSON.stringify(e),
        contentType: "application/json",
        success: function(e) {
            console.log(e);
            var t = msgsndrjQuery(".hl_text-widget--form button");
            t && t.show();
            var o = msgsndrjQuery(".hl_text-widget--form");
            o && o.toggle();
            var i = msgsndrjQuery(".hl_text-widget--thankyou");
            i && i.toggle();
            var s = msgsndrjQuery("#msgsndr_message");
            s && s.val("")
        },
        error: function(e, t, o) {
            var i = msgsndrjQuery(".hl_text-widget--form button");
            if (i && i.show(), e && e.responseText) {
                var s = JSON.parse(e.responseText),
                    n = msgsndrjQuery("#errmsgdisp");
                s && s.msg && n ? n.html(s.msg) : n && n.html("There was some issue. Please enter correct name, phone or email, and message before you hit send."), console.log(e.responseText)
            }
        }
    })
}, TextWidget.prototype.loadCSS = function() {
    var e = this;
    msgsndrjQuery("head").append('<link href="https://cdn.jsdelivr.net/gh/zaraha/chat-widget@main/style.min.css" rel="stylesheet" type="text/css" />');
    setTimeout(function() {
        ! function e(t) {
            window.libphonenumber ? t() : (msgsndrjQuery("head").append('<script src="https://unpkg.com/libphonenumber-js@1.7.31/bundle/libphonenumber-min.js"><\/script>'), window.setTimeout(function() {
                e(t)
            }, 100))
        }(function() {
            e.addTemplateToPage()
        })
    }, 600)
}, TextWidget.prototype.getCountryCode = function() {
    var e = this;
    msgsndrjQuery.ajax({
        url: this.serverURL + "/location/country_code/" + this.locationId,
        type: "GET",
        contentType: "application/json",
        success: function(t) {
            console.log(t), e.countryCode = t
        }
    })
}, TextWidget.prototype.formatPhoneNumber = function(e) {
    if (!e) return this.updateRequiredAttribute("email", !0), "";
    var t = e,
        o = !1;
    try {
        var i = window.libphonenumber.parsePhoneNumberFromString(e, this.countryCode);
        t = i.country && i.isValid() && i.country !== this.countryCode ? i.formatInternational() : i.country && i.isValid() ? i.formatNational() : e, o = i.isValid()
    } catch (e) {
        console.error(e)
    }
    return console.log("Valid number? " + o), o ? document.getElementById("msgsndr_phone").setCustomValidity("") : document.getElementById("msgsndr_phone").setCustomValidity("Please provide valid phone number"), this.updateRequiredAttribute("email", !1), t
}, TextWidget.prototype.getName = function() {
    return this.readCookie("name") || ""
}, TextWidget.prototype.getEmail = function() {
    return this.readCookie("email") || ""
}, TextWidget.prototype.validateEmail = function(e) {
    if (!e) return this.updateRequiredAttribute("phone", !0), "";
    var t = Boolean(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e));
    return console.log("Valid email? " + t), t ? document.getElementById("msgsndr_email").setCustomValidity("") : document.getElementById("msgsndr_email").setCustomValidity("Please provide valid e-mail"), this.updateRequiredAttribute("phone", !1), e
}, TextWidget.prototype.updateRequiredAttribute = function(e, t) {
    var o = document.getElementById("msgsndr_" + e);
    o && (o.required = t)
}, TextWidget.prototype.createCookie = function(e, t, o) {
    if (o) {
        var i = new Date;
        i.setTime(i.getTime() + 24 * o * 60 * 60 * 1e3);
        var s = "; expires=" + i.toGMTString()
    } else s = "";
    document.cookie = e + "=" + t + s + "; path=/"
}, TextWidget.prototype.readCookie = function(e) {
    for (var t = e + "=", o = document.cookie.split(";"), i = 0; i < o.length; i++) {
        for (var s = o[i];
            " " == s.charAt(0);) s = s.substring(1, s.length);
        if (0 == s.indexOf(t)) return s.substring(t.length, s.length)
    }
    return null
}, TextWidget.prototype.eraseCookie = function(e) {
    createCookie(e, "", -1)
}, TextWidget.prototype.addTemplateToPage = function() {
    var e = document.createElement("div");
    e.id = "hl_text-widget", e.className = "hl_text-widget", e.innerHTML = this.template().join("\n"), msgsndrjQuery("body").append(e), setTimeout(function() {
        msgsndrjQuery(".prompt-container").addClass("bounce-in-fwd").toggle()
    }, 3500), this.bindClickHandler()
}, TextWidget.prototype.load = function() {
    var e = this;
    if ("undefined" != typeof jQuery || "undefined" != typeof $) msgsndrjQuery = jQuery || $, setTimeout(function() {
        e.loadCSS(), e.getCountryCode()
    }, 600);
    else {
        var t = document.createElement("SCRIPT");
        t.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js", t.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(t);
        ! function e(t) {
            window.jQuery ? (msgsndrjQuery = jQuery.noConflict(), t(msgsndrjQuery)) : window.setTimeout(function() {
                e(t)
            }, 100)
        }(function(t) {
            setTimeout(function() {
                e.loadCSS(), e.getCountryCode()
            }, 600)
        })
    }
};
var LOCALFLOW = LOCALFLOW || {
    init: function(e, t) {
        var o = new TextWidget;
        t && t.baseURL ? o.serverURL = t.baseURL : o.serverURL = atob("aHR0cHM6Ly9hcGkuZ29oaWdobGV2ZWwuY29t"), o.useEmailField = "undefined" == t.useEmailField || t.useEmailField, o.useNameField = "undefined" == t.useNameField || t.useNameField, o.useCustomField = "undefined" != t.useCustomField && t.useCustomField, o.usePhoneField = "undefined" != t.usePhoneField && t.usePhoneField, o.promptShow = "undefined" != t.promptShow && t.promptShow, o.locationId = e, t && t.customIcon && (o.customIcon = t.customIcon), t && t.heading && (o.heading = t.heading), t && t.subHeading && (o.subHeading = t.subHeading), t && t.headerIcon && (o.headerIcon = t.headerIcon), t && t.footerText && (o.footerText = t.footerText), t && t.buttonText && (o.buttonText = t.buttonText), t && t.thankYouHeading && (o.thankYouHeading = t.thankYouHeading), t && t.thankYouSubHeading && (o.thankYouSubHeading = t.thankYouSubHeading), t && t.primaryColor && (o.primaryColor = t.primaryColor), t && t.customField && (o.customField = t.customField), t && t.formId && (o.formId = t.formId), t && t.promptImage && (o.promptImage = t.promptImage), t && t.promptMessage && (o.promptMessage = t.promptMessage), "complete" === document.readyState || "interactive" === document.readyState ? setTimeout(function() {
            o.load()
        }, 1) : document.addEventListener("DOMContentLoaded", function() {
            o.load()
        })
    }
};