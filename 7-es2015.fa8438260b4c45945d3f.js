(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4/lv":function(t,c,a){"use strict";a.r(c),a.d(c,"AlbumListModule",function(){return g});var n=a("ofXK"),e=a("pDmh"),o=a("fXoL"),r=a("tyNb"),i=a("XiUz"),s=a("Wp6s"),l=a("U8UM"),b=a("Cu3I");let u=(()=>{class t{transform(t,...c){return t.split("-")[0]}}return t.\u0275fac=function(c){return new(c||t)},t.\u0275pipe=o.Lb({name:"loadReleaseYear",type:t,pure:!0}),t})();function m(t,c){if(1&t){const t=o.Tb();o.Sb(0,"mat-card",2),o.ac("click",function(){o.tc(t);const a=c.$implicit;return o.ec().onAlbumClick(a)}),o.Nb(1,"img",3),o.fc(2,"loadImage"),o.Sb(3,"mat-card-content"),o.Sb(4,"p"),o.Cc(5),o.Rb(),o.Sb(6,"small"),o.Cc(7),o.fc(8,"loadArtists"),o.fc(9,"loadReleaseYear"),o.Rb(),o.Rb(),o.Rb()}if(2&t){const t=c.$implicit;o.Bb(1),o.kc("src",o.gc(2,4,t.images),o.uc),o.Bb(4),o.Dc(t.name),o.Bb(2),o.Fc("",o.gc(8,6,t.artists)," - ",o.gc(9,8,t.release_date),"")}}let p=(()=>{class t{constructor(t,c){this.albumFacade=t,this.router=c}ngOnInit(){}get albums$(){return this.albumFacade.allAlbums$}onAlbumClick(t){this.router.navigate(["/album",t.id,"tracks"])}}return t.\u0275fac=function(c){return new(c||t)(o.Mb(e.c),o.Mb(r.f))},t.\u0275cmp=o.Gb({type:t,selectors:[["iresa-portal-album-list"]],decls:3,vars:3,consts:[["fxLayout","row wrap","fxLayoutAlign","start","fxLayoutGap","10px",1,"container"],["tabindex","0","class","album","fxLayout","column",3,"click",4,"ngFor","ngForOf"],["tabindex","0","fxLayout","column",1,"album",3,"click"],["mat-card-image","","alt","album-cover",1,"image",3,"src"]],template:function(t,c){1&t&&(o.Sb(0,"div",0),o.Bc(1,m,10,10,"mat-card",1),o.fc(2,"async"),o.Rb()),2&t&&(o.Bb(1),o.kc("ngForOf",o.gc(2,1,c.albums$)))},directives:[i.c,i.b,i.d,n.j,s.a,s.c,s.b],pipes:[n.b,l.a,b.a,u],styles:[".container[_ngcontent-%COMP%]{cursor:pointer}.album[_ngcontent-%COMP%]{max-width:150px;text-align:left;margin-bottom:20px}.album[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:150px;-o-object-fit:contain;object-fit:contain}"],changeDetection:0}),t})();var f=a("1mNh"),d=a("YUcS");let g=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(c){return new(c||t)},providers:[e.d],imports:[[n.c,s.d,d.a,e.b,f.c,f.b,f.d,r.i.forChild([{path:"",resolve:{data:e.d},component:p}])]]}),t})()}}]);