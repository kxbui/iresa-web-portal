!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{gLyu:function(e,r,a){"use strict";a.r(r),a.d(r,"AuthorizeModule",function(){return m});var i=a("ofXK"),o=a("+3i8"),c=a("pDmh"),s=a("vkgz"),u=a("fXoL"),f=a("tyNb"),h=a("WZWw");function p(t,n){1&t&&u.Ob(0)}var l,g,b=function(t){return{fragmentChange:t}},v=((l=function(){function e(n,r,a,i){t(this,e),this.route=n,this.router=r,this.stationsFacade=a,this.spotifyService=i,this.parseState=function(t){return JSON.parse(t)}}var r,a,i;return r=e,(a=[{key:"ngOnInit",value:function(){var t=this;this.fragmentChange$=this.route.fragment.pipe(Object(s.a)(function(n){return t.onFragmentChange(n)}))}},{key:"onFragmentChange",value:function(t){var n={};if(null===t)this.router.navigateByUrl("/");else{t.split("&").map(function(t){return t.split("=")}).forEach(function(t){n[t[0]]=t[1]}),this.spotifyService.setAuthToken(n);var e=this.parseState(n.state);this.stationsFacade.setSelectedId(e.stationId),this.router.navigateByUrl("/home")}}}])&&n(r.prototype,a),i&&n(r,i),e}()).\u0275fac=function(t){return new(t||l)(u.Mb(f.a),u.Mb(f.f),u.Mb(c.p),u.Mb(o.c))},l.\u0275cmp=u.Gb({type:l,selectors:[["iresa-portal-authorize"]],decls:3,vars:5,consts:[[4,"ngIf"]],template:function(t,n){1&t&&(u.Nb(0,"iresa-portal-loader"),u.Bc(1,p,1,0,"ng-container",0),u.fc(2,"async")),2&t&&(u.Bb(1),u.kc("ngIf",u.nc(3,b,u.gc(2,1,n.fragmentChange$))))},directives:[h.a,i.k],pipes:[i.b],styles:[""],changeDetection:0}),l),y=a("I9wc"),m=((g=function n(){t(this,n)}).\u0275mod=u.Kb({type:g}),g.\u0275inj=u.Jb({factory:function(t){return new(t||g)},imports:[[i.c,y.a,c.o,f.i.forChild([{path:"",component:v}])]]}),g)}}])}();