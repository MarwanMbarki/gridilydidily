/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-cssvhunit-flexbox-touchevents-addtest-domprefixes-hasevent-prefixed-prefixes-shiv-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var u in _){if(e=[],t=_[u],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),C.push((o?"":"no-")+s.join("-"))}}function i(e){var t=T.className,n=Modernizr._config.classPrefix||"";if(j&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),j?T.className.baseVal=t:T.className=t)}function a(e,t){if("object"==typeof e)for(var n in e)S(e,n)&&a(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):j?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(e,t){return!!~(""+e).indexOf(t)}function f(){var e=t.body;return e||(e=s(j?"svg":"body"),e.fake=!0),e}function c(e,n,r,o){var i,a,u,l,c="modernizr",d=s("div"),p=f();if(parseInt(r,10))for(;r--;)u=s("div"),u.id=o?o[r]:c+(r+1),d.appendChild(u);return i=s("style"),i.type="text/css",i.id="s"+c,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",l=T.style.overflow,T.style.overflow="hidden",T.appendChild(p)),a=n(d,e),p.fake?(p.parentNode.removeChild(p),T.style.overflow=l,T.offsetHeight):d.parentNode.removeChild(d),!!a}function d(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?d(o,n||t):o);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(m(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+m(t[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function v(e,t,o,i){function a(){c&&(delete L.style,delete L.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var f=h(e,o);if(!r(f,"undefined"))return f}for(var c,d,p,m,v,g=["modernizr","tspan"];!L.style;)c=!0,L.modElem=s(g.shift()),L.style=L.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],v=L.style[m],l(m,"-")&&(m=u(m)),L.style[m]!==n){if(i||r(o,"undefined"))return a(),"pfx"==t?m:!0;try{L.style[m]=o}catch(y){}if(L.style[m]!=v)return a(),"pfx"==t?m:!0}return a(),!1}function g(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+z.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?v(s,t,o,i):(s=(e+" "+w.join(a+" ")+a).split(" "),p(s,t,n))}function y(e,t,r){return g(e,n,n,t,r)}var C=[],_=[],b={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){_.push({name:e,fn:t,options:n})},addAsyncTest:function(e){_.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr;var E=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];b._prefixes=E;var S;!function(){var e={}.hasOwnProperty;S=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}();var x="Moz O ms Webkit",w=b._config.usePrefixes?x.toLowerCase().split(" "):[];b._domPrefixes=w;var T=t.documentElement,j="svg"===T.nodeName.toLowerCase();b._l={},b.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},b._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){b.addTest=a});j||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,l(t)}function i(e){var t=y[e[v]];return t||(t={},g++,e[v]=g,y[g]=t),t}function a(e,n,r){if(n||(n=t),c)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),c)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),u=s.length;u>a;a++)o.createElement(s[a]);return o}function u(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function l(e){e||(e=t);var r=i(e);return!C.shivCSS||f||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||u(e,r),e}var f,c,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){f=!0,c=!0}}();var C={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:c,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:s,addElements:o};e.html5=C,l(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t);var N=function(e){function n(t,n){var o;return t?(n&&"string"!=typeof n||(n=s(n||"div")),t="on"+t,o=t in n,!o&&r&&(n.setAttribute||(n=s("div")),n.setAttribute(t,""),o="function"==typeof n[t],n[t]!==e&&(n[t]=e),n.removeAttribute(t)),o):!1}var r=!("onblur"in t.documentElement);return n}();b.hasEvent=N;var z=b._config.usePrefixes?x.split(" "):[];b._cssomPrefixes=z;var P=function(t){var r,o=E.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var a=0;o>a;a++){var s=E[a],u=s.toUpperCase()+"_"+r;if(u in i)return"@-"+s.toLowerCase()+"-"+t}return!1};b.atRule=P;var k=b.testStyles=c;k("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",r==n)}),Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",E.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");k(r,function(e){n=9===e.offsetTop})}return n});var F={elem:s("modernizr")};Modernizr._q.push(function(){delete F.elem});var L={style:F.elem.style};Modernizr._q.unshift(function(){delete L.style});b.testProp=function(e,t,r){return v([e],n,t,r)};b.testAllProps=g,b.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0));b.prefixed=function(e,t,n){return 0===e.indexOf("@")?P(e):(-1!=e.indexOf("-")&&(e=u(e)),t?g(e,t,n):g(e,"pfx"))};o(),i(C),delete b.addTest,delete b.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);
/*! svg4everybody v1.0.0 | github.com/jonathantneal/svg4everybody */
(function (document, uses, requestAnimationFrame, CACHE, IE9TO11) {
  function embed(svg, g) {
    if (g) {
      var
      viewBox = g.getAttribute('viewBox'),
      fragment = document.createDocumentFragment(),
      clone = g.cloneNode(true);

      if (viewBox) {
        svg.setAttribute('viewBox', viewBox);
      }

      while (clone.childNodes.length) {
        fragment.appendChild(clone.childNodes[0]);
      }

      svg.appendChild(fragment);
    }
  }

  function onload() {
    var xhr = this, x = document.createElement('x'), s = xhr.s;

    x.innerHTML = xhr.responseText;

    xhr.onload = function () {
      s.splice(0).map(function (array) {
        embed(array[0], x.querySelector('#' + array[1].replace(/(\W)/g, '\\$1')));
      });
    };

    xhr.onload();
  }

  function onframe() {
    var use;

    while ((use = uses[0])) {
      var
      svg = use.parentNode,
      url = use.getAttribute('xlink:href').split('#'),
      url_root = url[0],
      url_hash = url[1];

      svg.removeChild(use);

      if (url_root.length) {
        var xhr = CACHE[url_root] = CACHE[url_root] || new XMLHttpRequest();

        if (!xhr.s) {
          xhr.s = [];

          xhr.open('GET', url_root);

          xhr.onload = onload;

          xhr.send();
        }

        xhr.s.push([svg, url_hash]);

        if (xhr.readyState === 4) {
          xhr.onload();
        }

      } else {
        embed(svg, document.getElementById(url_hash));
      }
    }

    requestAnimationFrame(onframe);
  }

  if (IE9TO11) {
    onframe();
  }
})(
  document,
  document.getElementsByTagName('use'),
  window.requestAnimationFrame || window.setTimeout,
  {},
  /Trident\/[567]\b/.test(navigator.userAgent) || (navigator.userAgent.match(/AppleWebKit\/(\d+)/) || [])[1] < 537
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVybml6ci5jdXN0b20uanMiLCJzdmc0ZXZlcnlib2R5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJsaWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIG1vZGVybml6ciAzLjEuMCAoQ3VzdG9tIEJ1aWxkKSB8IE1JVCAqXG4gKiBodHRwOi8vbW9kZXJuaXpyLmNvbS9kb3dubG9hZC8/LWNzc3ZodW5pdC1mbGV4Ym94LXRvdWNoZXZlbnRzLWFkZHRlc3QtZG9tcHJlZml4ZXMtaGFzZXZlbnQtcHJlZml4ZWQtcHJlZml4ZXMtc2hpdi10ZXN0YWxscHJvcHMtdGVzdHByb3AtdGVzdHN0eWxlcyAhKi9cbiFmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gcihlLHQpe3JldHVybiB0eXBlb2YgZT09PXR9ZnVuY3Rpb24gbygpe3ZhciBlLHQsbixvLGksYSxzO2Zvcih2YXIgdSBpbiBfKXtpZihlPVtdLHQ9X1t1XSx0Lm5hbWUmJihlLnB1c2godC5uYW1lLnRvTG93ZXJDYXNlKCkpLHQub3B0aW9ucyYmdC5vcHRpb25zLmFsaWFzZXMmJnQub3B0aW9ucy5hbGlhc2VzLmxlbmd0aCkpZm9yKG49MDtuPHQub3B0aW9ucy5hbGlhc2VzLmxlbmd0aDtuKyspZS5wdXNoKHQub3B0aW9ucy5hbGlhc2VzW25dLnRvTG93ZXJDYXNlKCkpO2ZvcihvPXIodC5mbixcImZ1bmN0aW9uXCIpP3QuZm4oKTp0LmZuLGk9MDtpPGUubGVuZ3RoO2krKylhPWVbaV0scz1hLnNwbGl0KFwiLlwiKSwxPT09cy5sZW5ndGg/TW9kZXJuaXpyW3NbMF1dPW86KCFNb2Rlcm5penJbc1swXV18fE1vZGVybml6cltzWzBdXWluc3RhbmNlb2YgQm9vbGVhbnx8KE1vZGVybml6cltzWzBdXT1uZXcgQm9vbGVhbihNb2Rlcm5penJbc1swXV0pKSxNb2Rlcm5penJbc1swXV1bc1sxXV09byksQy5wdXNoKChvP1wiXCI6XCJuby1cIikrcy5qb2luKFwiLVwiKSl9fWZ1bmN0aW9uIGkoZSl7dmFyIHQ9VC5jbGFzc05hbWUsbj1Nb2Rlcm5penIuX2NvbmZpZy5jbGFzc1ByZWZpeHx8XCJcIjtpZihqJiYodD10LmJhc2VWYWwpLE1vZGVybml6ci5fY29uZmlnLmVuYWJsZUpTQ2xhc3Mpe3ZhciByPW5ldyBSZWdFeHAoXCIoXnxcXFxccylcIituK1wibm8tanMoXFxcXHN8JClcIik7dD10LnJlcGxhY2UocixcIiQxXCIrbitcImpzJDJcIil9TW9kZXJuaXpyLl9jb25maWcuZW5hYmxlQ2xhc3NlcyYmKHQrPVwiIFwiK24rZS5qb2luKFwiIFwiK24pLGo/VC5jbGFzc05hbWUuYmFzZVZhbD10OlQuY2xhc3NOYW1lPXQpfWZ1bmN0aW9uIGEoZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZSlmb3IodmFyIG4gaW4gZSlTKGUsbikmJmEobixlW25dKTtlbHNle2U9ZS50b0xvd2VyQ2FzZSgpO3ZhciByPWUuc3BsaXQoXCIuXCIpLG89TW9kZXJuaXpyW3JbMF1dO2lmKDI9PXIubGVuZ3RoJiYobz1vW3JbMV1dKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgbylyZXR1cm4gTW9kZXJuaXpyO3Q9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90KCk6dCwxPT1yLmxlbmd0aD9Nb2Rlcm5penJbclswXV09dDooIU1vZGVybml6cltyWzBdXXx8TW9kZXJuaXpyW3JbMF1daW5zdGFuY2VvZiBCb29sZWFufHwoTW9kZXJuaXpyW3JbMF1dPW5ldyBCb29sZWFuKE1vZGVybml6cltyWzBdXSkpLE1vZGVybml6cltyWzBdXVtyWzFdXT10KSxpKFsodCYmMCE9dD9cIlwiOlwibm8tXCIpK3Iuam9pbihcIi1cIildKSxNb2Rlcm5penIuX3RyaWdnZXIoZSx0KX1yZXR1cm4gTW9kZXJuaXpyfWZ1bmN0aW9uIHMoKXtyZXR1cm5cImZ1bmN0aW9uXCIhPXR5cGVvZiB0LmNyZWF0ZUVsZW1lbnQ/dC5jcmVhdGVFbGVtZW50KGFyZ3VtZW50c1swXSk6aj90LmNyZWF0ZUVsZW1lbnROUy5jYWxsKHQsXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGFyZ3VtZW50c1swXSk6dC5jcmVhdGVFbGVtZW50LmFwcGx5KHQsYXJndW1lbnRzKX1mdW5jdGlvbiB1KGUpe3JldHVybiBlLnJlcGxhY2UoLyhbYS16XSktKFthLXpdKS9nLGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdCtuLnRvVXBwZXJDYXNlKCl9KS5yZXBsYWNlKC9eLS8sXCJcIil9ZnVuY3Rpb24gbChlLHQpe3JldHVybiEhfihcIlwiK2UpLmluZGV4T2YodCl9ZnVuY3Rpb24gZigpe3ZhciBlPXQuYm9keTtyZXR1cm4gZXx8KGU9cyhqP1wic3ZnXCI6XCJib2R5XCIpLGUuZmFrZT0hMCksZX1mdW5jdGlvbiBjKGUsbixyLG8pe3ZhciBpLGEsdSxsLGM9XCJtb2Rlcm5penJcIixkPXMoXCJkaXZcIikscD1mKCk7aWYocGFyc2VJbnQociwxMCkpZm9yKDtyLS07KXU9cyhcImRpdlwiKSx1LmlkPW8/b1tyXTpjKyhyKzEpLGQuYXBwZW5kQ2hpbGQodSk7cmV0dXJuIGk9cyhcInN0eWxlXCIpLGkudHlwZT1cInRleHQvY3NzXCIsaS5pZD1cInNcIitjLChwLmZha2U/cDpkKS5hcHBlbmRDaGlsZChpKSxwLmFwcGVuZENoaWxkKGQpLGkuc3R5bGVTaGVldD9pLnN0eWxlU2hlZXQuY3NzVGV4dD1lOmkuYXBwZW5kQ2hpbGQodC5jcmVhdGVUZXh0Tm9kZShlKSksZC5pZD1jLHAuZmFrZSYmKHAuc3R5bGUuYmFja2dyb3VuZD1cIlwiLHAuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixsPVQuc3R5bGUub3ZlcmZsb3csVC5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiLFQuYXBwZW5kQ2hpbGQocCkpLGE9bihkLGUpLHAuZmFrZT8ocC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHApLFQuc3R5bGUub3ZlcmZsb3c9bCxULm9mZnNldEhlaWdodCk6ZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpLCEhYX1mdW5jdGlvbiBkKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkodCxhcmd1bWVudHMpfX1mdW5jdGlvbiBwKGUsdCxuKXt2YXIgbztmb3IodmFyIGkgaW4gZSlpZihlW2ldaW4gdClyZXR1cm4gbj09PSExP2VbaV06KG89dFtlW2ldXSxyKG8sXCJmdW5jdGlvblwiKT9kKG8sbnx8dCk6byk7cmV0dXJuITF9ZnVuY3Rpb24gbShlKXtyZXR1cm4gZS5yZXBsYWNlKC8oW0EtWl0pL2csZnVuY3Rpb24oZSx0KXtyZXR1cm5cIi1cIit0LnRvTG93ZXJDYXNlKCl9KS5yZXBsYWNlKC9ebXMtLyxcIi1tcy1cIil9ZnVuY3Rpb24gaCh0LHIpe3ZhciBvPXQubGVuZ3RoO2lmKFwiQ1NTXCJpbiBlJiZcInN1cHBvcnRzXCJpbiBlLkNTUyl7Zm9yKDtvLS07KWlmKGUuQ1NTLnN1cHBvcnRzKG0odFtvXSkscikpcmV0dXJuITA7cmV0dXJuITF9aWYoXCJDU1NTdXBwb3J0c1J1bGVcImluIGUpe2Zvcih2YXIgaT1bXTtvLS07KWkucHVzaChcIihcIittKHRbb10pK1wiOlwiK3IrXCIpXCIpO3JldHVybiBpPWkuam9pbihcIiBvciBcIiksYyhcIkBzdXBwb3J0cyAoXCIraStcIikgeyAjbW9kZXJuaXpyIHsgcG9zaXRpb246IGFic29sdXRlOyB9IH1cIixmdW5jdGlvbihlKXtyZXR1cm5cImFic29sdXRlXCI9PWdldENvbXB1dGVkU3R5bGUoZSxudWxsKS5wb3NpdGlvbn0pfXJldHVybiBufWZ1bmN0aW9uIHYoZSx0LG8saSl7ZnVuY3Rpb24gYSgpe2MmJihkZWxldGUgTC5zdHlsZSxkZWxldGUgTC5tb2RFbGVtKX1pZihpPXIoaSxcInVuZGVmaW5lZFwiKT8hMTppLCFyKG8sXCJ1bmRlZmluZWRcIikpe3ZhciBmPWgoZSxvKTtpZighcihmLFwidW5kZWZpbmVkXCIpKXJldHVybiBmfWZvcih2YXIgYyxkLHAsbSx2LGc9W1wibW9kZXJuaXpyXCIsXCJ0c3BhblwiXTshTC5zdHlsZTspYz0hMCxMLm1vZEVsZW09cyhnLnNoaWZ0KCkpLEwuc3R5bGU9TC5tb2RFbGVtLnN0eWxlO2ZvcihwPWUubGVuZ3RoLGQ9MDtwPmQ7ZCsrKWlmKG09ZVtkXSx2PUwuc3R5bGVbbV0sbChtLFwiLVwiKSYmKG09dShtKSksTC5zdHlsZVttXSE9PW4pe2lmKGl8fHIobyxcInVuZGVmaW5lZFwiKSlyZXR1cm4gYSgpLFwicGZ4XCI9PXQ/bTohMDt0cnl7TC5zdHlsZVttXT1vfWNhdGNoKHkpe31pZihMLnN0eWxlW21dIT12KXJldHVybiBhKCksXCJwZnhcIj09dD9tOiEwfXJldHVybiBhKCksITF9ZnVuY3Rpb24gZyhlLHQsbixvLGkpe3ZhciBhPWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKSxzPShlK1wiIFwiK3ouam9pbihhK1wiIFwiKSthKS5zcGxpdChcIiBcIik7cmV0dXJuIHIodCxcInN0cmluZ1wiKXx8cih0LFwidW5kZWZpbmVkXCIpP3Yocyx0LG8saSk6KHM9KGUrXCIgXCIrdy5qb2luKGErXCIgXCIpK2EpLnNwbGl0KFwiIFwiKSxwKHMsdCxuKSl9ZnVuY3Rpb24geShlLHQscil7cmV0dXJuIGcoZSxuLG4sdCxyKX12YXIgQz1bXSxfPVtdLGI9e192ZXJzaW9uOlwiMy4xLjBcIixfY29uZmlnOntjbGFzc1ByZWZpeDpcIlwiLGVuYWJsZUNsYXNzZXM6ITAsZW5hYmxlSlNDbGFzczohMCx1c2VQcmVmaXhlczohMH0sX3E6W10sb246ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0KG5bZV0pfSwwKX0sYWRkVGVzdDpmdW5jdGlvbihlLHQsbil7Xy5wdXNoKHtuYW1lOmUsZm46dCxvcHRpb25zOm59KX0sYWRkQXN5bmNUZXN0OmZ1bmN0aW9uKGUpe18ucHVzaCh7bmFtZTpudWxsLGZuOmV9KX19LE1vZGVybml6cj1mdW5jdGlvbigpe307TW9kZXJuaXpyLnByb3RvdHlwZT1iLE1vZGVybml6cj1uZXcgTW9kZXJuaXpyO3ZhciBFPWIuX2NvbmZpZy51c2VQcmVmaXhlcz9cIiAtd2Via2l0LSAtbW96LSAtby0gLW1zLSBcIi5zcGxpdChcIiBcIik6W107Yi5fcHJlZml4ZXM9RTt2YXIgUzshZnVuY3Rpb24oKXt2YXIgZT17fS5oYXNPd25Qcm9wZXJ0eTtTPXIoZSxcInVuZGVmaW5lZFwiKXx8cihlLmNhbGwsXCJ1bmRlZmluZWRcIik/ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdCBpbiBlJiZyKGUuY29uc3RydWN0b3IucHJvdG90eXBlW3RdLFwidW5kZWZpbmVkXCIpfTpmdW5jdGlvbih0LG4pe3JldHVybiBlLmNhbGwodCxuKX19KCk7dmFyIHg9XCJNb3ogTyBtcyBXZWJraXRcIix3PWIuX2NvbmZpZy51c2VQcmVmaXhlcz94LnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpOltdO2IuX2RvbVByZWZpeGVzPXc7dmFyIFQ9dC5kb2N1bWVudEVsZW1lbnQsaj1cInN2Z1wiPT09VC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO2IuX2w9e30sYi5vbj1mdW5jdGlvbihlLHQpe3RoaXMuX2xbZV18fCh0aGlzLl9sW2VdPVtdKSx0aGlzLl9sW2VdLnB1c2godCksTW9kZXJuaXpyLmhhc093blByb3BlcnR5KGUpJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7TW9kZXJuaXpyLl90cmlnZ2VyKGUsTW9kZXJuaXpyW2VdKX0sMCl9LGIuX3RyaWdnZXI9ZnVuY3Rpb24oZSx0KXtpZih0aGlzLl9sW2VdKXt2YXIgbj10aGlzLl9sW2VdO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgZSxyO2ZvcihlPTA7ZTxuLmxlbmd0aDtlKyspKHI9bltlXSkodCl9LDApLGRlbGV0ZSB0aGlzLl9sW2VdfX0sTW9kZXJuaXpyLl9xLnB1c2goZnVuY3Rpb24oKXtiLmFkZFRlc3Q9YX0pO2p8fCFmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG4oZSx0KXt2YXIgbj1lLmNyZWF0ZUVsZW1lbnQoXCJwXCIpLHI9ZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF18fGUuZG9jdW1lbnRFbGVtZW50O3JldHVybiBuLmlubmVySFRNTD1cIng8c3R5bGU+XCIrdCtcIjwvc3R5bGU+XCIsci5pbnNlcnRCZWZvcmUobi5sYXN0Q2hpbGQsci5maXJzdENoaWxkKX1mdW5jdGlvbiByKCl7dmFyIGU9Qy5lbGVtZW50cztyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZT9lLnNwbGl0KFwiIFwiKTplfWZ1bmN0aW9uIG8oZSx0KXt2YXIgbj1DLmVsZW1lbnRzO1wic3RyaW5nXCIhPXR5cGVvZiBuJiYobj1uLmpvaW4oXCIgXCIpKSxcInN0cmluZ1wiIT10eXBlb2YgZSYmKGU9ZS5qb2luKFwiIFwiKSksQy5lbGVtZW50cz1uK1wiIFwiK2UsbCh0KX1mdW5jdGlvbiBpKGUpe3ZhciB0PXlbZVt2XV07cmV0dXJuIHR8fCh0PXt9LGcrKyxlW3ZdPWcseVtnXT10KSx0fWZ1bmN0aW9uIGEoZSxuLHIpe2lmKG58fChuPXQpLGMpcmV0dXJuIG4uY3JlYXRlRWxlbWVudChlKTtyfHwocj1pKG4pKTt2YXIgbztyZXR1cm4gbz1yLmNhY2hlW2VdP3IuY2FjaGVbZV0uY2xvbmVOb2RlKCk6aC50ZXN0KGUpPyhyLmNhY2hlW2VdPXIuY3JlYXRlRWxlbShlKSkuY2xvbmVOb2RlKCk6ci5jcmVhdGVFbGVtKGUpLCFvLmNhbkhhdmVDaGlsZHJlbnx8bS50ZXN0KGUpfHxvLnRhZ1Vybj9vOnIuZnJhZy5hcHBlbmRDaGlsZChvKX1mdW5jdGlvbiBzKGUsbil7aWYoZXx8KGU9dCksYylyZXR1cm4gZS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7bj1ufHxpKGUpO2Zvcih2YXIgbz1uLmZyYWcuY2xvbmVOb2RlKCksYT0wLHM9cigpLHU9cy5sZW5ndGg7dT5hO2ErKylvLmNyZWF0ZUVsZW1lbnQoc1thXSk7cmV0dXJuIG99ZnVuY3Rpb24gdShlLHQpe3QuY2FjaGV8fCh0LmNhY2hlPXt9LHQuY3JlYXRlRWxlbT1lLmNyZWF0ZUVsZW1lbnQsdC5jcmVhdGVGcmFnPWUuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCx0LmZyYWc9dC5jcmVhdGVGcmFnKCkpLGUuY3JlYXRlRWxlbWVudD1mdW5jdGlvbihuKXtyZXR1cm4gQy5zaGl2TWV0aG9kcz9hKG4sZSx0KTp0LmNyZWF0ZUVsZW0obil9LGUuY3JlYXRlRG9jdW1lbnRGcmFnbWVudD1GdW5jdGlvbihcImgsZlwiLFwicmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49Zi5jbG9uZU5vZGUoKSxjPW4uY3JlYXRlRWxlbWVudDtoLnNoaXZNZXRob2RzJiYoXCIrcigpLmpvaW4oKS5yZXBsYWNlKC9bXFx3XFwtOl0rL2csZnVuY3Rpb24oZSl7cmV0dXJuIHQuY3JlYXRlRWxlbShlKSx0LmZyYWcuY3JlYXRlRWxlbWVudChlKSwnYyhcIicrZSsnXCIpJ30pK1wiKTtyZXR1cm4gbn1cIikoQyx0LmZyYWcpfWZ1bmN0aW9uIGwoZSl7ZXx8KGU9dCk7dmFyIHI9aShlKTtyZXR1cm4hQy5zaGl2Q1NTfHxmfHxyLmhhc0NTU3x8KHIuaGFzQ1NTPSEhbihlLFwiYXJ0aWNsZSxhc2lkZSxkaWFsb2csZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsbWFpbixuYXYsc2VjdGlvbntkaXNwbGF5OmJsb2NrfW1hcmt7YmFja2dyb3VuZDojRkYwO2NvbG9yOiMwMDB9dGVtcGxhdGV7ZGlzcGxheTpub25lfVwiKSksY3x8dShlLHIpLGV9dmFyIGYsYyxkPVwiMy43LjNcIixwPWUuaHRtbDV8fHt9LG09L148fF4oPzpidXR0b258bWFwfHNlbGVjdHx0ZXh0YXJlYXxvYmplY3R8aWZyYW1lfG9wdGlvbnxvcHRncm91cCkkL2ksaD0vXig/OmF8Ynxjb2RlfGRpdnxmaWVsZHNldHxoMXxoMnxoM3xoNHxoNXxoNnxpfGxhYmVsfGxpfG9sfHB8cXxzcGFufHN0cm9uZ3xzdHlsZXx0YWJsZXx0Ym9keXx0ZHx0aHx0cnx1bCkkL2ksdj1cIl9odG1sNXNoaXZcIixnPTAseT17fTshZnVuY3Rpb24oKXt0cnl7dmFyIGU9dC5jcmVhdGVFbGVtZW50KFwiYVwiKTtlLmlubmVySFRNTD1cIjx4eXo+PC94eXo+XCIsZj1cImhpZGRlblwiaW4gZSxjPTE9PWUuY2hpbGROb2Rlcy5sZW5ndGh8fGZ1bmN0aW9uKCl7dC5jcmVhdGVFbGVtZW50KFwiYVwiKTt2YXIgZT10LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgZS5jbG9uZU5vZGV8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlLmNyZWF0ZURvY3VtZW50RnJhZ21lbnR8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlLmNyZWF0ZUVsZW1lbnR9KCl9Y2F0Y2gobil7Zj0hMCxjPSEwfX0oKTt2YXIgQz17ZWxlbWVudHM6cC5lbGVtZW50c3x8XCJhYmJyIGFydGljbGUgYXNpZGUgYXVkaW8gYmRpIGNhbnZhcyBkYXRhIGRhdGFsaXN0IGRldGFpbHMgZGlhbG9nIGZpZ2NhcHRpb24gZmlndXJlIGZvb3RlciBoZWFkZXIgaGdyb3VwIG1haW4gbWFyayBtZXRlciBuYXYgb3V0cHV0IHBpY3R1cmUgcHJvZ3Jlc3Mgc2VjdGlvbiBzdW1tYXJ5IHRlbXBsYXRlIHRpbWUgdmlkZW9cIix2ZXJzaW9uOmQsc2hpdkNTUzpwLnNoaXZDU1MhPT0hMSxzdXBwb3J0c1Vua25vd25FbGVtZW50czpjLHNoaXZNZXRob2RzOnAuc2hpdk1ldGhvZHMhPT0hMSx0eXBlOlwiZGVmYXVsdFwiLHNoaXZEb2N1bWVudDpsLGNyZWF0ZUVsZW1lbnQ6YSxjcmVhdGVEb2N1bWVudEZyYWdtZW50OnMsYWRkRWxlbWVudHM6b307ZS5odG1sNT1DLGwodCksXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHMmJihtb2R1bGUuZXhwb3J0cz1DKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGU/ZTp0aGlzLHQpO3ZhciBOPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIG4odCxuKXt2YXIgbztyZXR1cm4gdD8obiYmXCJzdHJpbmdcIiE9dHlwZW9mIG58fChuPXMobnx8XCJkaXZcIikpLHQ9XCJvblwiK3Qsbz10IGluIG4sIW8mJnImJihuLnNldEF0dHJpYnV0ZXx8KG49cyhcImRpdlwiKSksbi5zZXRBdHRyaWJ1dGUodCxcIlwiKSxvPVwiZnVuY3Rpb25cIj09dHlwZW9mIG5bdF0sblt0XSE9PWUmJihuW3RdPWUpLG4ucmVtb3ZlQXR0cmlidXRlKHQpKSxvKTohMX12YXIgcj0hKFwib25ibHVyXCJpbiB0LmRvY3VtZW50RWxlbWVudCk7cmV0dXJuIG59KCk7Yi5oYXNFdmVudD1OO3ZhciB6PWIuX2NvbmZpZy51c2VQcmVmaXhlcz94LnNwbGl0KFwiIFwiKTpbXTtiLl9jc3NvbVByZWZpeGVzPXo7dmFyIFA9ZnVuY3Rpb24odCl7dmFyIHIsbz1FLmxlbmd0aCxpPWUuQ1NTUnVsZTtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgaSlyZXR1cm4gbjtpZighdClyZXR1cm4hMTtpZih0PXQucmVwbGFjZSgvXkAvLFwiXCIpLHI9dC5yZXBsYWNlKC8tL2csXCJfXCIpLnRvVXBwZXJDYXNlKCkrXCJfUlVMRVwiLHIgaW4gaSlyZXR1cm5cIkBcIit0O2Zvcih2YXIgYT0wO28+YTthKyspe3ZhciBzPUVbYV0sdT1zLnRvVXBwZXJDYXNlKCkrXCJfXCIrcjtpZih1IGluIGkpcmV0dXJuXCJALVwiK3MudG9Mb3dlckNhc2UoKStcIi1cIit0fXJldHVybiExfTtiLmF0UnVsZT1QO3ZhciBrPWIudGVzdFN0eWxlcz1jO2soXCIjbW9kZXJuaXpyIHsgaGVpZ2h0OiA1MHZoOyB9XCIsZnVuY3Rpb24odCl7dmFyIG49cGFyc2VJbnQoZS5pbm5lckhlaWdodC8yLDEwKSxyPXBhcnNlSW50KChlLmdldENvbXB1dGVkU3R5bGU/Z2V0Q29tcHV0ZWRTdHlsZSh0LG51bGwpOnQuY3VycmVudFN0eWxlKS5oZWlnaHQsMTApO01vZGVybml6ci5hZGRUZXN0KFwiY3Nzdmh1bml0XCIscj09bil9KSxNb2Rlcm5penIuYWRkVGVzdChcInRvdWNoZXZlbnRzXCIsZnVuY3Rpb24oKXt2YXIgbjtpZihcIm9udG91Y2hzdGFydFwiaW4gZXx8ZS5Eb2N1bWVudFRvdWNoJiZ0IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCluPSEwO2Vsc2V7dmFyIHI9W1wiQG1lZGlhIChcIixFLmpvaW4oXCJ0b3VjaC1lbmFibGVkKSwoXCIpLFwiaGVhcnR6XCIsXCIpXCIsXCJ7I21vZGVybml6cnt0b3A6OXB4O3Bvc2l0aW9uOmFic29sdXRlfX1cIl0uam9pbihcIlwiKTtrKHIsZnVuY3Rpb24oZSl7bj05PT09ZS5vZmZzZXRUb3B9KX1yZXR1cm4gbn0pO3ZhciBGPXtlbGVtOnMoXCJtb2Rlcm5penJcIil9O01vZGVybml6ci5fcS5wdXNoKGZ1bmN0aW9uKCl7ZGVsZXRlIEYuZWxlbX0pO3ZhciBMPXtzdHlsZTpGLmVsZW0uc3R5bGV9O01vZGVybml6ci5fcS51bnNoaWZ0KGZ1bmN0aW9uKCl7ZGVsZXRlIEwuc3R5bGV9KTtiLnRlc3RQcm9wPWZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gdihbZV0sbix0LHIpfTtiLnRlc3RBbGxQcm9wcz1nLGIudGVzdEFsbFByb3BzPXksTW9kZXJuaXpyLmFkZFRlc3QoXCJmbGV4Ym94XCIseShcImZsZXhCYXNpc1wiLFwiMXB4XCIsITApKTtiLnByZWZpeGVkPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gMD09PWUuaW5kZXhPZihcIkBcIik/UChlKTooLTEhPWUuaW5kZXhPZihcIi1cIikmJihlPXUoZSkpLHQ/ZyhlLHQsbik6ZyhlLFwicGZ4XCIpKX07bygpLGkoQyksZGVsZXRlIGIuYWRkVGVzdCxkZWxldGUgYi5hZGRBc3luY1Rlc3Q7Zm9yKHZhciBBPTA7QTxNb2Rlcm5penIuX3EubGVuZ3RoO0ErKylNb2Rlcm5penIuX3FbQV0oKTtlLk1vZGVybml6cj1Nb2Rlcm5penJ9KHdpbmRvdyxkb2N1bWVudCk7IiwiLyohIHN2ZzRldmVyeWJvZHkgdjEuMC4wIHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL3N2ZzRldmVyeWJvZHkgKi9cbihmdW5jdGlvbiAoZG9jdW1lbnQsIHVzZXMsIHJlcXVlc3RBbmltYXRpb25GcmFtZSwgQ0FDSEUsIElFOVRPMTEpIHtcbiAgZnVuY3Rpb24gZW1iZWQoc3ZnLCBnKSB7XG4gICAgaWYgKGcpIHtcbiAgICAgIHZhclxuICAgICAgdmlld0JveCA9IGcuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JyksXG4gICAgICBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICAgIGNsb25lID0gZy5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgIGlmICh2aWV3Qm94KSB7XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCB2aWV3Qm94KTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKGNsb25lLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGNsb25lLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgfVxuXG4gICAgICBzdmcuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9ubG9hZCgpIHtcbiAgICB2YXIgeGhyID0gdGhpcywgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3gnKSwgcyA9IHhoci5zO1xuXG4gICAgeC5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0O1xuXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHMuc3BsaWNlKDApLm1hcChmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgZW1iZWQoYXJyYXlbMF0sIHgucXVlcnlTZWxlY3RvcignIycgKyBhcnJheVsxXS5yZXBsYWNlKC8oXFxXKS9nLCAnXFxcXCQxJykpKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB4aHIub25sb2FkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbmZyYW1lKCkge1xuICAgIHZhciB1c2U7XG5cbiAgICB3aGlsZSAoKHVzZSA9IHVzZXNbMF0pKSB7XG4gICAgICB2YXJcbiAgICAgIHN2ZyA9IHVzZS5wYXJlbnROb2RlLFxuICAgICAgdXJsID0gdXNlLmdldEF0dHJpYnV0ZSgneGxpbms6aHJlZicpLnNwbGl0KCcjJyksXG4gICAgICB1cmxfcm9vdCA9IHVybFswXSxcbiAgICAgIHVybF9oYXNoID0gdXJsWzFdO1xuXG4gICAgICBzdmcucmVtb3ZlQ2hpbGQodXNlKTtcblxuICAgICAgaWYgKHVybF9yb290Lmxlbmd0aCkge1xuICAgICAgICB2YXIgeGhyID0gQ0FDSEVbdXJsX3Jvb3RdID0gQ0FDSEVbdXJsX3Jvb3RdIHx8IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgIGlmICgheGhyLnMpIHtcbiAgICAgICAgICB4aHIucyA9IFtdO1xuXG4gICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybF9yb290KTtcblxuICAgICAgICAgIHhoci5vbmxvYWQgPSBvbmxvYWQ7XG5cbiAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgeGhyLnMucHVzaChbc3ZnLCB1cmxfaGFzaF0pO1xuXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgIHhoci5vbmxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbWJlZChzdmcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVybF9oYXNoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uZnJhbWUpO1xuICB9XG5cbiAgaWYgKElFOVRPMTEpIHtcbiAgICBvbmZyYW1lKCk7XG4gIH1cbn0pKFxuICBkb2N1bWVudCxcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3VzZScpLFxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5zZXRUaW1lb3V0LFxuICB7fSxcbiAgL1RyaWRlbnRcXC9bNTY3XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQXBwbGVXZWJLaXRcXC8oXFxkKykvKSB8fCBbXSlbMV0gPCA1Mzdcbik7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
