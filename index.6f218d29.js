var e,t,c,o,n,a=document.getElementById("feedback"),i=Array.prototype.slice.call(document.getElementById("feedback-dots").children),s=Array.prototype.slice.call(document.getElementById("feedback-content").children),d=document.getElementById("left-arrow"),l=document.getElementById("right-arrow"),r=0,u=0;window.onload=function(){function n(t){for(var c=0;c<i.length;c++)s[c].classList.remove("active"),s[c].classList.remove("inactive"),i[c].classList.remove("active");t<0&&(t=r=s.length-1),t>s.length-1&&(t=r=0),u!=r&&s[u].classList.add("inactive"),s[t].classList.add("active"),i[t].classList.add("active"),u=r,clearTimeout(e),e=setTimeout((function(){n(r+=1)}),4500)}d.addEventListener("click",(function(){n(r-=1)})),l.addEventListener("click",(function(){n(r+=1)}));for(var m=0;m<i.length;m++)i[m].addEventListener("click",(function(){n(r=i.indexOf(this))}));n(r),document.addEventListener("keyup",(function(e){switch(e.keyCode){case 37:d.click();break;case 39:case 39:l.click()}})),a.addEventListener("touchstart",(function(e){t=e.changedTouches[0].clientX})),a.addEventListener("touchend",(function(e){if(c=e.changedTouches[0].clientX,(o=t-c)>30)d.click();else{if(!(o<-30))return;l.click()}}))},"function"!=typeof(n=window.Element.prototype).matches&&(n.matches=n.msMatchesSelector||n.mozMatchesSelector||n.webkitMatchesSelector||function(e){for(var t=this,c=(t.document||t.ownerDocument).querySelectorAll(e),o=0;c[o]&&c[o]!==t;)++o;return Boolean(c[o])}),"function"!=typeof n.closest&&(n.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),c=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var c=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+c+'"]').classList.add("active"),t.classList.add("active"),document.body.classList.add("modal-open")}))})),c.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active"),document.body.classList.remove("modal-open")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"),document.body.classList.remove("modal-open"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),document.body.classList.remove("modal-open"),this.classList.remove("active")}))}));
//# sourceMappingURL=index.6f218d29.js.map
