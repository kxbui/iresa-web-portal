(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3rlO":function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var r=s("EM62");let o=(()=>{class t{transform(t,...e){let s,r,o,n,i,a,c="";return o=t/1e3,r=o/60,s=r/60,a=Math.floor(o)%60,i=Math.floor(r)%60,n=Math.floor(s)%60,0!==n&&(c+=n+":",1===i.toString().length&&(i="0"+i)),c+=i+":",1===a.toString().length&&(a="0"+a),c+=a,c}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r.Lb({name:"songTime",type:t,pure:!0}),t})()},FlRo:function(t,e,s){"use strict";s.d(e,"a",(function(){return rt})),s.d(e,"b",(function(){return Y})),s.d(e,"c",(function(){return et})),s.d(e,"d",(function(){return st})),s.d(e,"e",(function(){return tt})),s.d(e,"f",(function(){return it})),s.d(e,"g",(function(){return ot})),s.d(e,"h",(function(){return at})),s.d(e,"i",(function(){return nt})),s.d(e,"j",(function(){return K})),s.d(e,"k",(function(){return ct}));var r=s("5XID"),o=s("cqs0"),n=s("EM62"),i=s("E5oP"),a=s("cZZj"),c=s("2kYt"),l=s("ZTXN"),d=s("C05f"),h=s("9bRT"),u=s("ROBh"),f=s("kuMc");const w=[[["caption"]],[["colgroup"],["col"]]],m=["caption","colgroup, col"];function _(t){return class extends t{constructor(...t){super(...t),this._sticky=!1,this._hasStickyChanged=!1}get sticky(){return this._sticky}set sticky(t){const e=this._sticky;this._sticky=Object(r.c)(t),this._hasStickyChanged=e!==this._sticky}hasStickyChanged(){const t=this._hasStickyChanged;return this._hasStickyChanged=!1,t}resetStickyChanged(){this._hasStickyChanged=!1}}}const p=new n.r("CDK_TABLE");let y=(()=>{class t{constructor(t){this.template=t}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(n.M))},t.\u0275dir=n.Hb({type:t,selectors:[["","cdkCellDef",""]]}),t})(),b=(()=>{class t{constructor(t){this.template=t}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(n.M))},t.\u0275dir=n.Hb({type:t,selectors:[["","cdkHeaderCellDef",""]]}),t})(),R=(()=>{class t{constructor(t){this.template=t}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(n.M))},t.\u0275dir=n.Hb({type:t,selectors:[["","cdkFooterCellDef",""]]}),t})();class g{}const D=_(g);let k=(()=>{class t extends D{constructor(t){super(),this._table=t,this._stickyEnd=!1}get name(){return this._name}set name(t){t&&(this._name=t,this.cssClassFriendlyName=t.replace(/[^a-z0-9_-]/gi,"-"))}get stickyEnd(){return this._stickyEnd}set stickyEnd(t){const e=this._stickyEnd;this._stickyEnd=Object(r.c)(t),this._hasStickyChanged=e!==this._stickyEnd}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(p,8))},t.\u0275dir=n.Hb({type:t,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,e,s){var r;1&t&&(n.Fb(s,y,!0),n.Fb(s,b,!0),n.Fb(s,R,!0)),2&t&&(n.pc(r=n.bc())&&(e.cell=r.first),n.pc(r=n.bc())&&(e.headerCell=r.first),n.pc(r=n.bc())&&(e.footerCell=r.first))},inputs:{sticky:"sticky",name:["cdkColumnDef","name"],stickyEnd:"stickyEnd"},features:[n.zb([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:t}]),n.xb]}),t})();class C{constructor(t,e){e.nativeElement.classList.add("cdk-column-"+t.cssClassFriendlyName)}}let S=(()=>{class t extends C{constructor(t,e){super(t,e)}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(k),n.Mb(n.l))},t.\u0275dir=n.Hb({type:t,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[n.xb]}),t})(),v=(()=>{class t extends C{constructor(t,e){super(t,e)}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(k),n.Mb(n.l))},t.\u0275dir=n.Hb({type:t,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:["role","gridcell",1,"cdk-cell"],features:[n.xb]}),t})(),O=(()=>{class t{constructor(t,e){this.template=t,this._differs=e}ngOnChanges(t){if(!this._columnsDiffer){const e=t.columns&&t.columns.currentValue||[];this._columnsDiffer=this._differs.find(e).create(),this._columnsDiffer.diff(e)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(t){return this instanceof E?t.headerCell.template:this instanceof T?t.footerCell.template:t.cell.template}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(n.M),n.Mb(n.t))},t.\u0275dir=n.Hb({type:t,features:[n.yb]}),t})();class x extends O{}const M=_(x);let E=(()=>{class t extends M{constructor(t,e,s){super(t,e),this._table=s}ngOnChanges(t){super.ngOnChanges(t)}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(n.M),n.Mb(n.t),n.Mb(p,8))},t.\u0275dir=n.Hb({type:t,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:["cdkHeaderRowDef","columns"],sticky:["cdkHeaderRowDefSticky","sticky"]},features:[n.xb,n.yb]}),t})();class H extends O{}const F=_(H);let T=(()=>{class t extends F{constructor(t,e,s){super(t,e),this._table=s}ngOnChanges(t){super.ngOnChanges(t)}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(n.M),n.Mb(n.t),n.Mb(p,8))},t.\u0275dir=n.Hb({type:t,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:["cdkFooterRowDef","columns"],sticky:["cdkFooterRowDefSticky","sticky"]},features:[n.xb,n.yb]}),t})(),N=(()=>{class t extends O{constructor(t,e,s){super(t,e),this._table=s}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(n.M),n.Mb(n.t),n.Mb(p,8))},t.\u0275dir=n.Hb({type:t,selectors:[["","cdkRowDef",""]],inputs:{columns:["cdkRowDefColumns","columns"],when:["cdkRowDefWhen","when"]},features:[n.xb]}),t})(),A=(()=>{class t{constructor(e){this._viewContainer=e,t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(n.Q))},t.\u0275dir=n.Hb({type:t,selectors:[["","cdkCellOutlet",""]]}),t.mostRecentCellOutlet=null,t})(),B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Gb({type:t,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&n.Ob(0,0)},directives:[A],encapsulation:2}),t})(),j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Gb({type:t,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&n.Ob(0,0)},directives:[A],encapsulation:2}),t})(),I=(()=>{class t{constructor(t){this.templateRef=t}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(n.M))},t.\u0275dir=n.Hb({type:t,selectors:[["ng-template","cdkNoDataRow",""]]}),t})();const z=["top","bottom","left","right"];class L{constructor(t,e,s,r=!0){this._isNativeHtmlTable=t,this._stickCellCss=e,this.direction=s,this._isBrowser=r}clearStickyPositioning(t,e){for(const s of t)if(s.nodeType===s.ELEMENT_NODE){this._removeStickyStyle(s,e);for(let t=0;t<s.children.length;t++)this._removeStickyStyle(s.children[t],e)}}updateStickyColumns(t,e,s){const r=e.some(t=>t)||s.some(t=>t);if(!t.length||!r||!this._isBrowser)return;const o=t[0],n=o.children.length,i=this._getCellWidths(o),a=this._getStickyStartColumnPositions(i,e),c=this._getStickyEndColumnPositions(i,s),l="rtl"===this.direction;for(const d of t)for(let t=0;t<n;t++){const r=d.children[t];e[t]&&this._addStickyStyle(r,l?"right":"left",a[t]),s[t]&&this._addStickyStyle(r,l?"left":"right",c[t])}}stickRows(t,e,s){if(!this._isBrowser)return;const r="bottom"===s?t.slice().reverse():t,o="bottom"===s?e.slice().reverse():e;let n=0;for(let i=0;i<r.length;i++){if(!o[i])continue;const t=r[i];if(this._isNativeHtmlTable)for(let e=0;e<t.children.length;e++)this._addStickyStyle(t.children[e],s,n);else this._addStickyStyle(t,s,n);if(i===r.length-1)return;n+=t.getBoundingClientRect().height}}updateStickyFooterContainer(t,e){if(!this._isNativeHtmlTable)return;const s=t.querySelector("tfoot");e.some(t=>!t)?this._removeStickyStyle(s,["bottom"]):this._addStickyStyle(s,"bottom",0)}_removeStickyStyle(t,e){for(const s of e)t.style[s]="";t.style.zIndex=this._getCalculatedZIndex(t),z.some(e=>!!t.style[e])||(t.style.position="",t.classList.remove(this._stickCellCss))}_addStickyStyle(t,e,s){t.classList.add(this._stickCellCss),t.style[e]=s+"px",t.style.cssText+="position: -webkit-sticky; position: sticky; ",t.style.zIndex=this._getCalculatedZIndex(t)}_getCalculatedZIndex(t){const e={top:100,bottom:10,left:1,right:1};let s=0;for(const r of z)t.style[r]&&(s+=e[r]);return s?""+s:""}_getCellWidths(t){const e=[],s=t.children;for(let r=0;r<s.length;r++)e.push(s[r].getBoundingClientRect().width);return e}_getStickyStartColumnPositions(t,e){const s=[];let r=0;for(let o=0;o<t.length;o++)e[o]&&(s[o]=r,r+=t[o]);return s}_getStickyEndColumnPositions(t,e){const s=[];let r=0;for(let o=t.length;o>0;o--)e[o]&&(s[o]=r,r+=t[o]);return s}}function U(t){return Error(`Could not find column with id "${t}".`)}let P=(()=>{class t{constructor(t,e){this.viewContainer=t,this.elementRef=e}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(n.Q),n.Mb(n.l))},t.\u0275dir=n.Hb({type:t,selectors:[["","rowOutlet",""]]}),t})(),G=(()=>{class t{constructor(t,e){this.viewContainer=t,this.elementRef=e}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(n.Q),n.Mb(n.l))},t.\u0275dir=n.Hb({type:t,selectors:[["","headerRowOutlet",""]]}),t})(),Q=(()=>{class t{constructor(t,e){this.viewContainer=t,this.elementRef=e}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(n.Q),n.Mb(n.l))},t.\u0275dir=n.Hb({type:t,selectors:[["","footerRowOutlet",""]]}),t})(),W=(()=>{class t{constructor(t,e){this.viewContainer=t,this.elementRef=e}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(n.Q),n.Mb(n.l))},t.\u0275dir=n.Hb({type:t,selectors:[["","noDataRowOutlet",""]]}),t})(),J=(()=>{class t{constructor(t,e,s,r,o,n,i){this._differs=t,this._changeDetectorRef=e,this._elementRef=s,this._dir=o,this._platform=i,this._onDestroy=new l.a,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this._isShowingNoDataRow=!1,this._multiTemplateDataRows=!1,this.viewChange=new d.a({start:0,end:Number.MAX_VALUE}),r||this._elementRef.nativeElement.setAttribute("role","grid"),this._document=n,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}get trackBy(){return this._trackByFn}set trackBy(t){Object(n.W)()&&null!=t&&"function"!=typeof t&&console&&console.warn&&console.warn(`trackBy must be a function, but received ${JSON.stringify(t)}.`),this._trackByFn=t}get dataSource(){return this._dataSource}set dataSource(t){this._dataSource!==t&&this._switchDataSource(t)}get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(t){this._multiTemplateDataRows=Object(r.c)(t),this._rowOutlet&&this._rowOutlet.viewContainer.length&&this._forceRenderDataRows()}ngOnInit(){this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create((t,e)=>this.trackBy?this.trackBy(e.dataIndex,e.data):e)}ngAfterContentChecked(){if(this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&!this._rowDefs.length)throw Error("Missing definitions for header, footer, and row; cannot determine which columns should be rendered.");this._renderUpdatedColumns(),this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription&&this._observeRenderChanges(),this._checkStickyStates()}ngOnDestroy(){this._rowOutlet.viewContainer.clear(),this._noDataRowOutlet.viewContainer.clear(),this._headerRowOutlet.viewContainer.clear(),this._footerRowOutlet.viewContainer.clear(),this._cachedRenderRowsMap.clear(),this._onDestroy.next(),this._onDestroy.complete(),Object(o.d)(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();const t=this._dataDiffer.diff(this._renderRows);if(!t)return;const e=this._rowOutlet.viewContainer;t.forEachOperation((t,s,r)=>{if(null==t.previousIndex)this._insertRow(t.item,r);else if(null==r)e.remove(s);else{const t=e.get(s);e.move(t,r)}}),this._updateRowIndexContext(),t.forEachIdentityChange(t=>{e.get(t.currentIndex).context.$implicit=t.item.data}),this._updateNoDataRow(),this.updateStickyColumnStyles()}addColumnDef(t){this._customColumnDefs.add(t)}removeColumnDef(t){this._customColumnDefs.delete(t)}addRowDef(t){this._customRowDefs.add(t)}removeRowDef(t){this._customRowDefs.delete(t)}addHeaderRowDef(t){this._customHeaderRowDefs.add(t),this._headerRowDefChanged=!0}removeHeaderRowDef(t){this._customHeaderRowDefs.delete(t),this._headerRowDefChanged=!0}addFooterRowDef(t){this._customFooterRowDefs.add(t),this._footerRowDefChanged=!0}removeFooterRowDef(t){this._customFooterRowDefs.delete(t),this._footerRowDefChanged=!0}updateStickyHeaderRowStyles(){const t=this._getRenderedRows(this._headerRowOutlet),e=this._elementRef.nativeElement.querySelector("thead");e&&(e.style.display=t.length?"":"none");const s=this._headerRowDefs.map(t=>t.sticky);this._stickyStyler.clearStickyPositioning(t,["top"]),this._stickyStyler.stickRows(t,s,"top"),this._headerRowDefs.forEach(t=>t.resetStickyChanged())}updateStickyFooterRowStyles(){const t=this._getRenderedRows(this._footerRowOutlet),e=this._elementRef.nativeElement.querySelector("tfoot");e&&(e.style.display=t.length?"":"none");const s=this._footerRowDefs.map(t=>t.sticky);this._stickyStyler.clearStickyPositioning(t,["bottom"]),this._stickyStyler.stickRows(t,s,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,s),this._footerRowDefs.forEach(t=>t.resetStickyChanged())}updateStickyColumnStyles(){const t=this._getRenderedRows(this._headerRowOutlet),e=this._getRenderedRows(this._rowOutlet),s=this._getRenderedRows(this._footerRowOutlet);this._stickyStyler.clearStickyPositioning([...t,...e,...s],["left","right"]),t.forEach((t,e)=>{this._addStickyColumnStyles([t],this._headerRowDefs[e])}),this._rowDefs.forEach(t=>{const s=[];for(let r=0;r<e.length;r++)this._renderRows[r].rowDef===t&&s.push(e[r]);this._addStickyColumnStyles(s,t)}),s.forEach((t,e)=>{this._addStickyColumnStyles([t],this._footerRowDefs[e])}),Array.from(this._columnDefsByName.values()).forEach(t=>t.resetStickyChanged())}_getAllRenderRows(){const t=[],e=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let s=0;s<this._data.length;s++){let r=this._data[s];const o=this._getRenderRowsForData(r,s,e.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let e=0;e<o.length;e++){let s=o[e];const r=this._cachedRenderRowsMap.get(s.data);r.has(s.rowDef)?r.get(s.rowDef).push(s):r.set(s.rowDef,[s]),t.push(s)}}return t}_getRenderRowsForData(t,e,s){return this._getRowDefs(t,e).map(r=>{const o=s&&s.has(r)?s.get(r):[];if(o.length){const t=o.shift();return t.dataIndex=e,t}return{data:t,rowDef:r,dataIndex:e}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Z(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{if(this._columnDefsByName.has(t.name))throw Error(`Duplicate column definition name provided: "${t.name}".`);this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Z(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Z(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Z(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);const t=this._rowDefs.filter(t=>!t.when);if(!this.multiTemplateDataRows&&t.length>1)throw Error("There can only be one default row without a when predicate function.");this._defaultRowDef=t[0]}_renderUpdatedColumns(){const t=(t,e)=>t||!!e.getColumnsDiff();this._rowDefs.reduce(t,!1)&&this._forceRenderDataRows(),this._headerRowDefs.reduce(t,!1)&&this._forceRenderHeaderRows(),this._footerRowDefs.reduce(t,!1)&&this._forceRenderFooterRows()}_switchDataSource(t){this._data=[],Object(o.d)(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),t||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=t}_observeRenderChanges(){if(!this.dataSource)return;let t;if(Object(o.d)(this.dataSource)?t=this.dataSource.connect(this):Object(h.a)(this.dataSource)?t=this.dataSource:Array.isArray(this.dataSource)&&(t=Object(u.a)(this.dataSource)),void 0===t)throw Error("Provided data source did not match an array, Observable, or DataSource");this._renderChangeSubscription=t.pipe(Object(f.a)(this._onDestroy)).subscribe(t=>{this._data=t||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((t,e)=>this._renderRow(this._headerRowOutlet,t,e)),this.updateStickyHeaderRowStyles(),this.updateStickyColumnStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((t,e)=>this._renderRow(this._footerRowOutlet,t,e)),this.updateStickyFooterRowStyles(),this.updateStickyColumnStyles()}_addStickyColumnStyles(t,e){const s=Array.from(e.columns||[]).map(t=>{const e=this._columnDefsByName.get(t);if(!e)throw U(t);return e}),r=s.map(t=>t.sticky),o=s.map(t=>t.stickyEnd);this._stickyStyler.updateStickyColumns(t,r,o)}_getRenderedRows(t){const e=[];for(let s=0;s<t.viewContainer.length;s++){const r=t.viewContainer.get(s);e.push(r.rootNodes[0])}return e}_getRowDefs(t,e){if(1==this._rowDefs.length)return[this._rowDefs[0]];let s=[];if(this.multiTemplateDataRows)s=this._rowDefs.filter(s=>!s.when||s.when(e,t));else{let r=this._rowDefs.find(s=>s.when&&s.when(e,t))||this._defaultRowDef;r&&s.push(r)}if(!s.length)throw function(t){return Error("Could not find a matching row definition for theprovided row data: "+JSON.stringify(t))}(t);return s}_insertRow(t,e){this._renderRow(this._rowOutlet,t.rowDef,e,{$implicit:t.data})}_renderRow(t,e,s,r={}){t.viewContainer.createEmbeddedView(e.template,r,s);for(let o of this._getCellTemplates(e))A.mostRecentCellOutlet&&A.mostRecentCellOutlet._viewContainer.createEmbeddedView(o,r);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){const t=this._rowOutlet.viewContainer;for(let e=0,s=t.length;e<s;e++){const r=t.get(e).context;r.count=s,r.first=0===e,r.last=e===s-1,r.even=e%2==0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[e].dataIndex,r.renderIndex=e):r.index=this._renderRows[e].dataIndex}}_getCellTemplates(t){return t&&t.columns?Array.from(t.columns,e=>{const s=this._columnDefsByName.get(e);if(!s)throw U(e);return t.extractCellTemplate(s)}):[]}_applyNativeTableSections(){const t=this._document.createDocumentFragment(),e=[{tag:"thead",outlets:[this._headerRowOutlet]},{tag:"tbody",outlets:[this._rowOutlet,this._noDataRowOutlet]},{tag:"tfoot",outlets:[this._footerRowOutlet]}];for(const s of e){const e=this._document.createElement(s.tag);e.setAttribute("role","rowgroup");for(const t of s.outlets)e.appendChild(t.elementRef.nativeElement);t.appendChild(e)}this._elementRef.nativeElement.appendChild(t)}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows(),this.updateStickyColumnStyles()}_checkStickyStates(){const t=(t,e)=>t||e.hasStickyChanged();this._headerRowDefs.reduce(t,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(t,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(t,!1)&&this.updateStickyColumnStyles()}_setupStickyStyler(){this._stickyStyler=new L(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",this._platform.isBrowser),(this._dir?this._dir.change:Object(u.a)()).pipe(Object(f.a)(this._onDestroy)).subscribe(t=>{this._stickyStyler.direction=t,this.updateStickyColumnStyles()})}_getOwnDefs(t){return t.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){if(this._noDataRow){const t=0===this._rowOutlet.viewContainer.length;if(t!==this._isShowingNoDataRow){const e=this._noDataRowOutlet.viewContainer;t?e.createEmbeddedView(this._noDataRow.templateRef):e.clear(),this._isShowingNoDataRow=t}}}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(n.t),n.Mb(n.h),n.Mb(n.l),n.Xb("role"),n.Mb(i.b,8),n.Mb(c.d),n.Mb(a.a))},t.\u0275cmp=n.Gb({type:t,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,e,s){var r;1&t&&(n.Fb(s,I,!0),n.Fb(s,k,!0),n.Fb(s,N,!0),n.Fb(s,E,!0),n.Fb(s,T,!0)),2&t&&(n.pc(r=n.bc())&&(e._noDataRow=r.first),n.pc(r=n.bc())&&(e._contentColumnDefs=r),n.pc(r=n.bc())&&(e._contentRowDefs=r),n.pc(r=n.bc())&&(e._contentHeaderRowDefs=r),n.pc(r=n.bc())&&(e._contentFooterRowDefs=r))},viewQuery:function(t,e){var s;1&t&&(n.xc(P,!0),n.xc(G,!0),n.xc(Q,!0),n.xc(W,!0)),2&t&&(n.pc(s=n.bc())&&(e._rowOutlet=s.first),n.pc(s=n.bc())&&(e._headerRowOutlet=s.first),n.pc(s=n.bc())&&(e._footerRowOutlet=s.first),n.pc(s=n.bc())&&(e._noDataRowOutlet=s.first))},hostAttrs:[1,"cdk-table"],inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:"multiTemplateDataRows"},exportAs:["cdkTable"],features:[n.zb([{provide:p,useExisting:t}])],ngContentSelectors:m,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,e){1&t&&(n.jc(w),n.ic(0),n.ic(1,1),n.Ob(2,0),n.Ob(3,1),n.Ob(4,2),n.Ob(5,3))},directives:[G,P,W,Q],encapsulation:2}),t})();function Z(t,e){return t.concat(Array.from(e))}let V=(()=>{class t{}return t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({factory:function(e){return new(e||t)}}),t})();var $=s("mFH5");s("bwdy"),s("g6G6"),s("HM3f"),s("YtkY");const q=[[["caption"]],[["colgroup"],["col"]]],X=["caption","colgroup, col"];let K=(()=>{class t extends J{constructor(){super(...arguments),this.stickyCssClass="mat-table-sticky"}}t.\u0275fac=function(s){return e(s||t)},t.\u0275cmp=n.Gb({type:t,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-table"],exportAs:["matTable"],features:[n.zb([{provide:J,useExisting:t},{provide:p,useExisting:t}]),n.xb],ngContentSelectors:X,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,e){1&t&&(n.jc(q),n.ic(0),n.ic(1,1),n.Ob(2,0),n.Ob(3,1),n.Ob(4,2),n.Ob(5,3))},directives:[G,P,W,Q],styles:['mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:""}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}\n'],encapsulation:2});const e=n.Ub(t);return t})(),Y=(()=>{class t extends y{}t.\u0275fac=function(s){return e(s||t)},t.\u0275dir=n.Hb({type:t,selectors:[["","matCellDef",""]],features:[n.zb([{provide:y,useExisting:t}]),n.xb]});const e=n.Ub(t);return t})(),tt=(()=>{class t extends b{}t.\u0275fac=function(s){return e(s||t)},t.\u0275dir=n.Hb({type:t,selectors:[["","matHeaderCellDef",""]],features:[n.zb([{provide:b,useExisting:t}]),n.xb]});const e=n.Ub(t);return t})(),et=(()=>{class t extends k{}t.\u0275fac=function(s){return e(s||t)},t.\u0275dir=n.Hb({type:t,selectors:[["","matColumnDef",""]],inputs:{sticky:"sticky",name:["matColumnDef","name"]},features:[n.zb([{provide:k,useExisting:t},{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:t}]),n.xb]});const e=n.Ub(t);return t})(),st=(()=>{class t extends S{constructor(t,e){super(t,e),e.nativeElement.classList.add("mat-column-"+t.cssClassFriendlyName)}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(k),n.Mb(n.l))},t.\u0275dir=n.Hb({type:t,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-header-cell"],features:[n.xb]}),t})(),rt=(()=>{class t extends v{constructor(t,e){super(t,e),e.nativeElement.classList.add("mat-column-"+t.cssClassFriendlyName)}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(k),n.Mb(n.l))},t.\u0275dir=n.Hb({type:t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:["role","gridcell",1,"mat-cell"],features:[n.xb]}),t})(),ot=(()=>{class t extends E{}t.\u0275fac=function(s){return e(s||t)},t.\u0275dir=n.Hb({type:t,selectors:[["","matHeaderRowDef",""]],inputs:{columns:["matHeaderRowDef","columns"],sticky:["matHeaderRowDefSticky","sticky"]},features:[n.zb([{provide:E,useExisting:t}]),n.xb]});const e=n.Ub(t);return t})(),nt=(()=>{class t extends N{}t.\u0275fac=function(s){return e(s||t)},t.\u0275dir=n.Hb({type:t,selectors:[["","matRowDef",""]],inputs:{columns:["matRowDefColumns","columns"],when:["matRowDefWhen","when"]},features:[n.zb([{provide:N,useExisting:t}]),n.xb]});const e=n.Ub(t);return t})(),it=(()=>{class t extends B{}t.\u0275fac=function(s){return e(s||t)},t.\u0275cmp=n.Gb({type:t,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-header-row"],exportAs:["matHeaderRow"],features:[n.zb([{provide:B,useExisting:t}]),n.xb],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&n.Ob(0,0)},directives:[A],encapsulation:2});const e=n.Ub(t);return t})(),at=(()=>{class t extends j{}t.\u0275fac=function(s){return e(s||t)},t.\u0275cmp=n.Gb({type:t,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-row"],exportAs:["matRow"],features:[n.zb([{provide:j,useExisting:t}]),n.xb],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&n.Ob(0,0)},directives:[A],encapsulation:2});const e=n.Ub(t);return t})(),ct=(()=>{class t{}return t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({factory:function(e){return new(e||t)},imports:[[V,$.e],$.e]}),t})()},iHdW:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var r=s("EM62");let o=(()=>{class t{transform(t,...e){return t.map(t=>t.name).join("/")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r.Lb({name:"loadArtistGroup",type:t,pure:!0}),t})()}}]);