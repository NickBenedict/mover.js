/*!
 * mover.js v0 - Easily move elements on breakpoints with a data tag
 * Copyright (c) 2014 Nick Benedict -https://github.com/NickBenedict/mover.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

﻿$(document).ready(
 
    function () {

        enquire.register("screen and (max-width:479px)", {
            match: function () {
                $(".to-move").each(function () {
                    var a = $(this);
                    var b = a.data("move-0");
                    $(a).detach();
                    $("#" + b).append($(a));
                });
            }
        }
)


        enquire.register("screen and (min-width:480px) and  (max-width:786px) ", {
            match: function () {
                $(".to-move").each(function () {
                    var a = $(this);
                    var b= a.data("move-480");
                    $(a).detach();
                    $("#"+b).append($(a));
                });
            }
        }
)


        enquire.register("screen and (min-width:786px) and  (max-width:1023px)", {
            match: function () {

                $(".to-move").each(function () {
                    var t = $(this);
                    var l = t.data("move-786");
                    $(t).detach();
                    $("#"+l).append($(t));
                });                
            }
        }
   )
        enquire.register("screen and (min-width:1024px)", {
            match: function () {

                $(".to-move").each(function () {
                    var t = $(this);
                    var l = t.data("move-1024");
                    $(t).detach();
                    $("#" + l).append($(t));
                });
            }
        }
)
 });
