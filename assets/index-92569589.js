(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))m(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&m(u)}).observe(document,{childList:!0,subtree:!0});function g(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function m(o){if(o.ep)return;o.ep=!0;const t=g(o);fetch(o.href,t)}})();const y=document.querySelector("body"),c=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),v=document.querySelectorAll(".js-close-menu"),L=document.querySelectorAll(".page-header-mobile-menu-nav-list-link"),f=e=>{e.code==="Escape"&&d()},p=e=>{e.target===e.currentTarget&&d()},d=()=>{const e=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!e),c.classList.toggle("is-open"),e?(window.removeEventListener("keydown",f),c.removeEventListener("click",p),y.style.overflow="auto"):(window.addEventListener("keydown",f),c.addEventListener("click",p),y.style.overflow="hidden")};L.forEach(e=>e.addEventListener("click",d));s.addEventListener("click",d);v.forEach(e=>e.addEventListener("click",d));window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(c.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))});const n={openModalBtn:document.querySelectorAll("[data-modal-privacy-open]"),closeModalBtn:document.querySelector("[data-modal-privacy-close]"),modal:document.querySelector("[data-modal-privacy]"),body:document.querySelector("body")},i=()=>{n.modal.classList.toggle("is-hidden"),n.body.style.overflow="auto"},E=e=>{e.code==="Escape"&&i()};n.openModalBtn.forEach(e=>e.addEventListener("click",l=>{console.log("click"),i(),window.addEventListener("keydown",E),n.body.style.overflow="hidden"}));n.closeModalBtn.addEventListener("click",i);n.modal.addEventListener("click",e=>{e.target===e.currentTarget&&i()});const r={openModalBtn:document.querySelector("[data-modal-license-open]"),closeModalBtn:document.querySelector("[data-modal-license-close]"),modal:document.querySelector("[data-modal-license]"),body:document.querySelector("body")},a=()=>{r.modal.classList.toggle("is-hidden"),r.body.style.overflow="auto"},w=e=>{e.code==="Escape"&&a()};r.openModalBtn.addEventListener("click",e=>{a(),window.addEventListener("keydown",w),r.body.style.overflow="hidden"});r.closeModalBtn.addEventListener("click",a);r.modal.addEventListener("click",e=>{e.target===e.currentTarget&&a()});
