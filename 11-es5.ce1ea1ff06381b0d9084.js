function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{WZ7z:function(e,t,n){"use strict";n.r(t),n.d(t,"AuthorizeModule",(function(){return b}));var r,s,i=n("2kYt"),a=n("7tMs"),o=n("AeuN"),c=n("4HxU"),u=n("EM62"),l=n("sEIs"),f=n("36v8"),p=((r=function(){function e(t,n,r,s){_classCallCheck(this,e),this.route=t,this.router=n,this.stationsFacade=r,this.spotifyService=s,this.subs=new a.SubSink,this.parseState=function(e){return JSON.parse(e)}}return _createClass(e,[{key:"ngOnDestroy",value:function(){this.subs.unsubscribe()}},{key:"ngOnInit",value:function(){var e=this,t={};this.subs.add(this.route.fragment.subscribe((function(n){if(null===n)e.router.navigateByUrl("/");else{n.split("&").map((function(e){return e.split("=")})).forEach((function(e){t[e[0]]=e[1]})),e.spotifyService.setAuthToken(t);var r=e.parseState(t.state);e.stationsFacade.setSelectedId(r.stationId),e.router.navigateByUrl("/home")}})))}}]),e}()).\u0275fac=function(e){return new(e||r)(u.Mb(l.a),u.Mb(l.f),u.Mb(c.p),u.Mb(o.c))},r.\u0275cmp=u.Gb({type:r,selectors:[["iresa-portal-authorize"]],decls:1,vars:0,template:function(e,t){1&e&&u.Nb(0,"iresa-loader")},directives:[f.a],styles:[""],changeDetection:0}),r),h=n("6Jna"),b=((s=function e(){_classCallCheck(this,e)}).\u0275mod=u.Kb({type:s}),s.\u0275inj=u.Jb({factory:function(e){return new(e||s)},imports:[[i.c,h.LoaderModule,c.o,l.i.forChild([{path:"",component:p}])]]}),s)}}]);