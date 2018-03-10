/* validated with JSLint edition 2018-02-27 (http://jslint.com/)
 * no errors reported (JSLint options: Assume… a browser)
 */

/* jsChangeLang: an algorithm to change the html element lang attribute
 * see https://github.com/Project4Dimensions/jsChangeLang/
 */

function jsChangeLang() {
    "use strict";
    var a = document.getElementsByTagName("html")[0];
    var b = document.getElementById("select0");
    a.setAttribute("lang", b[b.selectedIndex].value);
    return a.lang;
}
