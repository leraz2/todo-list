(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const u=document.getElementById("create-task-form"),d=document.getElementById("input"),i=document.getElementById("list");function l(o){o.preventDefault();const n=document.createElement("li"),c=document.createElement("input");c.setAttribute("type","checkbox"),n.append(c);const r=document.createElement("span");r.innerText=d.value,n.append(r);const e=document.createElement("button");e.innerText="Suprimer",e.addEventListener("click",a),n.append(e),i.append(n)}function a(o){const n=o.target.parentNode;i.removeChild(n)}u.addEventListener("submit",l);