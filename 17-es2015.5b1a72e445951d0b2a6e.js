(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{AqNw:function(t,c,a){"use strict";a.r(c),a.d(c,"PlaylistDetailsModule",function(){return $});var e=a("ofXK"),n=a("pDmh"),i=a("fXoL"),s=a("tyNb"),o=a("XiUz"),l=a("2Vo4"),r=a("+0xr"),b=a("NFeN"),u=a("UMEp"),d=a("GYQg");function f(t,c){1&t&&i.Nb(0,"th",12)}function p(t,c){if(1&t){const t=i.Tb();i.Sb(0,"td",13),i.Sb(1,"button",14),i.ac("click",function(){i.tc(t);const a=c.index;return i.ec(2).playSong(a)}),i.Sb(2,"mat-icon"),i.Cc(3,"play_circle_outline"),i.Rb(),i.Rb(),i.Rb()}}function m(t,c){1&t&&(i.Sb(0,"th",12),i.Cc(1,"Name"),i.Rb())}function h(t,c){if(1&t&&(i.Sb(0,"td",13),i.Cc(1),i.Rb()),2&t){const t=c.$implicit;i.Bb(1),i.Dc(t.name)}}function y(t,c){1&t&&(i.Sb(0,"th",12),i.Cc(1,"Artists"),i.Rb())}function g(t,c){if(1&t&&(i.Sb(0,"td",13),i.Cc(1),i.fc(2,"loadArtistGroup"),i.Rb()),2&t){const t=c.$implicit;i.Bb(1),i.Ec(" ",i.gc(2,1,t.artists)," ")}}function S(t,c){1&t&&(i.Sb(0,"th",12),i.Cc(1,"Duration"),i.Rb())}function C(t,c){if(1&t&&(i.Sb(0,"td",13),i.Cc(1),i.fc(2,"songTime"),i.Rb()),2&t){const t=c.$implicit;i.Bb(1),i.Ec(" ",i.gc(2,1,t.duration_ms)," ")}}function w(t,c){1&t&&i.Nb(0,"th",12)}function k(t,c){if(1&t){const t=i.Tb();i.Sb(0,"td",13),i.Sb(1,"button",14),i.ac("click",function(){i.tc(t);const a=c.index;return i.ec(3).delete(a)}),i.Sb(2,"mat-icon"),i.Cc(3,"delete"),i.Rb(),i.Rb(),i.Rb()}}function B(t,c){1&t&&(i.Qb(0,15),i.Bc(1,w,1,0,"th",4),i.Bc(2,k,4,0,"td",5),i.Pb())}function R(t,c){1&t&&i.Nb(0,"tr",16)}function D(t,c){1&t&&i.Nb(0,"tr",17)}function v(t,c){if(1&t&&(i.Sb(0,"table",2),i.fc(1,"async"),i.Qb(2,3),i.Bc(3,f,1,0,"th",4),i.Bc(4,p,4,0,"td",5),i.Pb(),i.Qb(5,6),i.Bc(6,m,2,0,"th",4),i.Bc(7,h,2,1,"td",5),i.Pb(),i.Qb(8,7),i.Bc(9,y,2,0,"th",4),i.Bc(10,g,3,3,"td",5),i.Pb(),i.Qb(11,8),i.Bc(12,S,2,0,"th",4),i.Bc(13,C,3,3,"td",5),i.Pb(),i.Bc(14,B,3,0,"ng-container",9),i.Bc(15,R,1,0,"tr",10),i.Bc(16,D,1,0,"tr",11),i.Rb()),2&t){const t=i.ec();i.kc("dataSource",i.gc(1,4,t.dataSource$)),i.Bb(14),i.kc("ngIf",t.showActionCol),i.Bb(1),i.kc("matHeaderRowDef",t.displayedColumns),i.Bb(1),i.kc("matRowDefColumns",t.displayedColumns)}}function _(t,c){1&t&&(i.Sb(0,"div"),i.Cc(1," You haven't added any song to this playlist\n"),i.Rb())}let I=(()=>{class t{constructor(t,c){this.playlistService=t,this.wp=c,this.displayedColumns=["select","name","artists","duration_ms"],this.showActionCol=!1,this._dataSource=new l.a([])}set playlist(t){this._playlist=t,t&&(this._tracks=t.tracks,this.loadDataSource(t.tracks))}ngOnInit(){"favorite"!==this._playlist.type&&this.displayActionCol()}get dataSource$(){return this._dataSource.asObservable()}displayActionCol(){this.showActionCol=!0,this.displayedColumns.push("action")}playSong(t){this.wp.play([this._tracks[t].uri])}delete(t){this.playlistService.deletePlaylistTrack({playlistId:this._playlist.id,position:t})}loadDataSource(t){if(t.length>0){const c=t.map(t=>{const c={};return this.displayedColumns.forEach(a=>{t[a]&&(c[a]=t[a])}),c});this._dataSource.next(c)}else this._dataSource.next([])}}return t.\u0275fac=function(c){return new(c||t)(i.Mb(n.m),i.Mb(n.r))},t.\u0275cmp=i.Gb({type:t,selectors:[["iresa-portal-playlist-tracks"]],inputs:{playlist:"playlist"},decls:4,vars:6,consts:[["mat-table","","class","mat-elevation-z8",3,"dataSource",4,"ngIf"],[4,"ngIf"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","artists"],["matColumnDef","duration_ms"],["matColumnDef","action",4,"ngIf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[3,"click"],["matColumnDef","action"],["mat-header-row",""],["mat-row",""]],template:function(t,c){1&t&&(i.Bc(0,v,17,6,"table",0),i.fc(1,"async"),i.Bc(2,_,2,0,"div",1),i.fc(3,"async")),2&t&&(i.kc("ngIf",i.gc(1,2,c.dataSource$).length>0),i.Bb(2),i.kc("ngIf",0===i.gc(3,4,c.dataSource$).length))},directives:[e.k,r.j,r.c,r.e,r.b,r.g,r.i,r.d,r.a,b.a,r.f,r.h],pipes:[e.b,u.a,d.a],styles:["table[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{background:0 0;border:none;cursor:pointer}"],changeDetection:0}),t})();function N(t,c){if(1&t&&(i.Sb(0,"div"),i.Sb(1,"div",1),i.Sb(2,"h3",2),i.Cc(3),i.Rb(),i.Sb(4,"small"),i.Cc(5),i.Rb(),i.Rb(),i.Nb(6,"iresa-portal-playlist-tracks",3),i.Rb()),2&t){const t=c.ngIf;i.Bb(3),i.Dc(t.name),i.Bb(2),i.Ec("Total Tracks: ",t.tracks.length,""),i.Bb(1),i.kc("playlist",t)}}let P=(()=>{class t{constructor(t,c){this.playlistFacade=t,this.route=c}ngOnInit(){const t=this.route.snapshot.paramMap.get("playlistId");this.playlist$=this.playlistFacade.getPlaylist(t)}}return t.\u0275fac=function(c){return new(c||t)(i.Mb(n.m),i.Mb(s.a))},t.\u0275cmp=i.Gb({type:t,selectors:[["iresa-portal-playlist-details"]],decls:2,vars:3,consts:[[4,"ngIf"],["fxLayout","row","fxLayoutAlign","space-between center"],[1,"title"],[3,"playlist"]],template:function(t,c){1&t&&(i.Bc(0,N,7,3,"div",0),i.fc(1,"async")),2&t&&i.kc("ngIf",i.gc(1,1,c.playlist$))},directives:[e.k,o.c,o.b,I],pipes:[e.b],styles:[""],changeDetection:0}),t})();var A=a("1mNh"),M=a("YUcS");let $=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(c){return new(c||t)},providers:[n.l],imports:[[e.c,b.b,r.k,A.b,A.g,M.a,s.i.forChild([{path:"",resolve:{data:n.l},component:P}])]]}),t})()}}]);