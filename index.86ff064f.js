!function(){var e,t,o,c,n;e=document.querySelector(".header").getBoundingClientRect().height,document.body.style.paddingTop="".concat(e,"px"),new IntersectionObserver((function(e){e.forEach((function(e){var t=e.target.querySelector(".about__image-wrapper"),o=e.target.querySelector(".about__image");if(e.isIntersecting)return t.classList.add("bounce-in-top"),void o.classList.add("bounce-in-top")}))})).observe(document.querySelector(".about__description")),t=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),n=function(){var e="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!e),t.classList.toggle("is-open"),bodyScrollLock[e?"enableBodyScroll":"disableBodyScroll"](document.body)},o.addEventListener("click",n),c.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(t.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),document.querySelectorAll("[js-close-on-click]").forEach((function(e){e.addEventListener("click",(function(e){t.classList.remove("is-open"),mobileMenuBackdrop.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body)}))}));var a,i,d,r,l,s=document.getElementById("feedback"),u=Array.prototype.slice.call(document.getElementById("feedback-dots").children),m=Array.prototype.slice.call(document.getElementById("feedback-content").children),v=document.getElementById("left-arrow"),y=document.getElementById("right-arrow"),f=(document.querySelector(".feedback-wrapper"),0),L=0;window.onload=function(){function e(t){for(var o=0;o<u.length;o++)m[o].classList.remove("active"),m[o].classList.remove("inactive"),u[o].classList.remove("active");t<0&&(t=f=m.length-1),t>m.length-1&&(t=f=0),L!=f&&m[L].classList.add("inactive"),m[t].classList.add("active"),u[t].classList.add("active"),L=f,clearTimeout(a),a=setTimeout((function(){e(f+=1)}),4500)}v.addEventListener("click",(function(){e(f-=1)})),y.addEventListener("click",(function(){e(f+=1)}));for(var t=0;t<u.length;t++)u[t].addEventListener("click",(function(){e(f=u.indexOf(this))}));e(f),document.addEventListener("keyup",(function(e){switch(e.keyCode){case 37:v.click();break;case 39:case 39:y.click()}})),s.addEventListener("touchstart",(function(e){i=e.changedTouches[0].clientX})),s.addEventListener("touchend",(function(e){if(d=e.changedTouches[0].clientX,(r=i-d)>30)v.click();else{if(!(r<-30))return;y.click()}}))},"function"!=typeof(l=window.Element.prototype).matches&&(l.matches=l.msMatchesSelector||l.mozMatchesSelector||l.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),c=0;o[c]&&o[c]!==t;)++c;return Boolean(o[c])}),"function"!=typeof l.closest&&(l.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active"),document.body.classList.add("modal-open")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active"),document.body.classList.remove("modal-open")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"),document.body.classList.remove("modal-open"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),document.body.classList.remove("modal-open"),this.classList.remove("active")}))}));var p='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',b=document.querySelector("#buy-buy"),h=b.querySelectorAll(p)[0],k=b.querySelectorAll(p),S=k[k.length-1];document.addEventListener("keydown",(function(e){("Tab"===e.key||9===e.keyCode)&&(e.shiftKey?document.activeElement===h&&(S.focus(),e.preventDefault()):document.activeElement===S&&(h.focus(),e.preventDefault()))})),h.focus()}();
//# sourceMappingURL=index.86ff064f.js.map