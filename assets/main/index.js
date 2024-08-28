System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,n,o,r,s,h,a,c,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,s=t._decorator,h=t.Node,a=t.UITransform,c=t.Vec3,u=t.Component}],execute:function(){var d,g,l,p,b,f,x;r._RF.push({},"e152bM3ShhNh4jHiy9vR8Ri","Background",void 0);var y=s.ccclass,v=s.property;t("Background",(d=y("Background"),g=v(h),l=v(h),d((f=e((b=function(t){function e(){for(var e,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r))||this,n(e,"bg",f,o(e)),n(e,"border",x,o(e)),e.nextIndex=0,e.height=void 0,e}i(e,t);var r=e.prototype;return r.onLoad=function(){this.height=this.bg[0].getComponent(a).height},r.reset=function(){for(var t in this.nextIndex=0,this.bg)this.bg[t].setPosition(new c(0,Number(t)*this.height,0));this.border.setPosition(new c(0,0,0))},r.handleLocation=function(t){var e=this.bg[this.nextIndex].getPosition().y,i=this.border.getPosition().y;t-this.height>=e&&(this.bg[this.nextIndex].setPosition(new c(0,e+3*this.height,0)),this.nextIndex=2===this.nextIndex?0:this.nextIndex+1),t>i&&this.border.setPosition(new c(0,t,0))},r.update=function(t){},e}(u)).prototype,"bg",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),x=e(b.prototype,"border",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=b))||p));r._RF.pop()}}}));

System.register("chunks:///_virtual/ControlPanel.ts",["./rollupPluginModLoBabelHelpers.js","cc","./MainUIView.ts"],(function(t){var n,e,i,o,r,a,l,u,c;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,l=t.Node,u=t.Component},function(t){c=t.MainUIView}],execute:function(){var p,s,y,h,f,b,d,g,w,B,m;r._RF.push({},"7869bSyqTtDMb++nNgODt/t","ControlPanel",void 0);var v=a.ccclass,P=a.property;t("ControlPanel",(p=v("ControlPanel"),s=P(l),y=P(l),h=P(l),f=P(l),p((g=n((d=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return n=t.call.apply(t,[this].concat(r))||this,i(n,"playButton",g,o(n)),i(n,"rankingButton",w,o(n)),i(n,"rewardButton",B,o(n)),i(n,"shopButton",m,o(n)),n.mainUiView=void 0,n}e(n,t);var r=n.prototype;return r.onLoad=function(){this.mainUiView=this.node.getParent().getComponent(c),this.playButton.on("click",this.clickPlayButton,this)},r.clickPlayButton=function(){this.node.active=!1,this.mainUiView.handleGameStart()},r.update=function(t){},n}(u)).prototype,"playButton",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=n(d.prototype,"rankingButton",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=n(d.prototype,"rewardButton",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=n(d.prototype,"shopButton",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=d))||b));r._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/Game.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Background.ts","./MainUIView.ts","./JumpController.ts"],(function(e){var n,t,a,i,r,o,l,s,u,c,p,d,f,h,b,m;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,a=e.initializerDefineProperty,i=e.assertThisInitialized,r=e.createForOfIteratorHelperLoose},function(e){o=e.cclegacy,l=e._decorator,s=e.Prefab,u=e.Node,c=e.Vec3,p=e.math,d=e.instantiate,f=e.Component},function(e){h=e.Background},function(e){b=e.MainUIView},function(e){m=e.JumpController}],execute:function(){var y,g,w,P,v,R,I,L,k,z,C,x,G;o._RF.push({},"f406bJPT9xMtKyXppJlYkfY","Game",void 0);var M=l.ccclass,S=l.property;e("Game",(y=M("Game"),g=S(s),w=S(s),P=S(u),v=S(u),R=S(u),y((k=n((L=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return n=e.call.apply(e,[this].concat(r))||this,a(n,"landsRowPrefab",k,i(n)),a(n,"playerPrefab",z,i(n)),a(n,"camera",C,i(n)),a(n,"background",x,i(n)),a(n,"mainUI",G,i(n)),n.landsRows=[],n.player=null,n}t(n,e);var o=n.prototype;return o.onLoad=function(){},o.creatNewGame=function(){this.camera.setPosition(new c(0,0,0)),this.initPlayer(),this.initLands()},o.over=function(){this.cleanLands(),this.cleanPlayer(),this.background.getComponent(h).reset(),this.mainUI.getComponent(b).addMainControlPanel()},o.cleanLands=function(){for(var e,n=r(this.landsRows);!(e=n()).done;){e.value.destroy()}this.landsRows=[]},o.cleanPlayer=function(){var e;null==(e=this.player)||e.destroy(),this.player=null},o.initLands=function(){var e=[-700,0,0,0,0];for(var n in e){var t=p.randomRangeInt(250,650),a=-700===e[n]?e[n]:e[Number(n)-1]+t,i=d(this.landsRowPrefab);i.setParent(this.node),i.setSiblingIndex(1),i.position=new c(0,a,0),e[n]=a,this.landsRows.push(i)}},o.initPlayer=function(){var e=d(this.playerPrefab);e.setParent(this.node),e.setSiblingIndex(1e7),e.position=new c(0,0,0),this.player=e},o.addLandsRow=function(){var e=this.landsRows.slice(-1)[0],n=d(this.landsRowPrefab);n.setParent(this.node),n.setSiblingIndex(1);var t=p.randomRangeInt(250,650);n.position=new c(0,e.getPosition().y+t,0),this.landsRows.push(n)},o.handlePlayer=function(e,n){var t=this.player.getComponent(m);"up"===n?t.moveStop():"left"===e?t.moveLeft():t.moveRight()},n}(f)).prototype,"landsRowPrefab",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=n(L.prototype,"playerPrefab",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=n(L.prototype,"camera",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=n(L.prototype,"background",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=n(L.prototype,"mainUI",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=L))||I));o._RF.pop()}}}));

System.register("chunks:///_virtual/GameMain.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,o,a,i,c,r,s;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,o=e._decorator,a=e.game,i=e.Game,c=e.profiler,r=e.v3,s=e.Component}],execute:function(){var u;n._RF.push({},"fa58flWFypBRJI8ks1/moGQ","GameMain",void 0);var l=o.ccclass;e("GameMain",l("GameMain")(u=function(e){function n(){return e.apply(this,arguments)||this}return t(n,e),n.prototype.onLoad=function(){a.once(i.EVENT_ENGINE_INITED,(function(){c._ctx.fillStyle="#f00",c._statsDone=!1,c.scale=r(.5,.5,.5),c.generateStats()})),c.hideStats()},n}(s))||u);n._RF.pop()}}}));

System.register("chunks:///_virtual/JumpController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Game.ts","./Background.ts"],(function(t){var e,i,o,n,s,r,a,h,l,c,d,u,m;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,o=t._decorator,n=t.RigidBody2D,s=t.Sprite,r=t.BoxCollider2D,a=t.Contact2DType,h=t.Vec2,l=t.Camera,c=t.Vec3,d=t.Component},function(t){u=t.Game},function(t){m=t.Background}],execute:function(){var g;i._RF.push({},"600b9rsy9FEwZ4k/iFryL07","JumpController",void 0);var p=o.ccclass;o.property,t("JumpController",p("JumpController")(g=function(t){function i(){for(var e,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))||this).boxCollider=null,e.rigidBody=null,e.sprite=null,e.isJumping=!1,e.isMoveLeft=!1,e.isMoveRight=!1,e.game=null,e.jumpVal=5e4,e.moveVal=1,e}e(i,t);var o=i.prototype;return o.onLoad=function(){this.rigidBody=this.getComponent(n),this.sprite=this.getComponent(s),this.boxCollider=this.getComponent(r),this.game=this.node.getParent().getComponent(u),this.boxCollider.on(a.BEGIN_CONTACT,this.onContact,this)},o.moveLeft=function(){this.node.setScale(-2,2),this.isMoveLeft=!0,this.isMoveRight=!1},o.moveRight=function(){this.node.setScale(2,2),this.isMoveLeft=!1,this.isMoveRight=!0},o.moveStop=function(){this.isMoveLeft=!1,this.isMoveRight=!1;var t=this.rigidBody.linearVelocity.y;this.rigidBody.linearVelocity=new h(0,t)},o.jump=function(){var t=this.rigidBody.linearVelocity;!this.isJumping&&+t.y.toFixed(5)>=0&&(this.isJumping=!0,this.sprite.changeSpriteFrameFromAtlas("Character=Jump"),this.rigidBody.applyForceToCenter(new h(t.x,t.y+this.jumpVal),!0))},o.onContact=function(t,e,i){var o=this,n=!1;if(e.node.name.includes("Border")&&(n=!0,this.scheduleOnce((function(){o.game.over()}),.2)),e.node.name.includes("Land")){var s=i.getWorldManifold().normal,r=s.y<0,a=0!=s.x;console.log("fromTop:",r,"(",s.y,"), fromLeftOrRight:",a,"(",s.x),n=!r,r&&(this.sprite.changeSpriteFrameFromAtlas("Character=Stand"),this.isJumping=!1,this.unschedule(this.jump),this.scheduleOnce(this.jump,1))}i.disabled=n},o.recenterCamera=function(){if(this.isJumping){var t=this.game.camera.getComponent(l),e=this.game.background.getComponent(m),i=t.node.getPosition(),o=i.x,n=i.y,s=i.z,r=this.node.getPosition(),a=Math.max(r.y,n);r.y>0&&a!==n&&(t.node.setPosition(new c(o,a,s)),this.node.parent.getComponent(u).addLandsRow(),e.handleLocation(a))}},o.moving=function(){if(this.isMoveLeft||this.isMoveRight){var t=this.isMoveLeft?0-this.moveVal:this.moveVal,e=this.rigidBody.linearVelocity,i=e.x,o=e.y;this.rigidBody.linearVelocity=new h(i+t,o)}},o.handleOutSide=function(){},o.update=function(){this.recenterCamera(),this.moving()},i}(d))||g);i._RF.pop()}}}));

System.register("chunks:///_virtual/LandController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var r,e,t,a,o,i,l,c,u,s;return{setters:[function(n){r=n.applyDecoratedDescriptor,e=n.inheritsLoose,t=n.initializerDefineProperty,a=n.assertThisInitialized},function(n){o=n.cclegacy,i=n._decorator,l=n.Prefab,c=n.instantiate,u=n.Vec3,s=n.Component}],execute:function(){var d,f,p,b,h;o._RF.push({},"7da09V/rmtFN5PhDJ2x0yru","LandController",void 0);var v=i.ccclass,y=i.property,L=[[0,0,0,1],[0,1,0,1],[1,0,0,0],[0,1,0,1],[0,0,1,0],[0,1,0,1],[1,0,0,1],[0,1,0,1],[1,0,0,1],[0,1,0,1],[1,0,0,0]];n("LandController",(d=v("LandController"),f=y(l),d((h=r((b=function(n){function r(){for(var r,e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return r=n.call.apply(n,[this].concat(o))||this,t(r,"landPrefab",h,a(r)),r}e(r,n);var o=r.prototype;return o.onLoad=function(){this.addLand()},o.addLand=function(){for(var n in L){var r=L.length-Number(n)-1;for(var e in L[r])if(L[r][e]){var t=c(this.landPrefab);t.setParent(this.node),t.setSiblingIndex(0),t.position=new u(187.5*Number(e)-300,75*Number(r)-706,0)}}},o.update=function(n){},r}(s)).prototype,"landPrefab",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=b))||p));o._RF.pop()}}}));

System.register("chunks:///_virtual/LandsRow.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,t,r,a,i,o,s,l,c,u,d,p,f;return{setters:[function(n){e=n.applyDecoratedDescriptor,t=n.inheritsLoose,r=n.initializerDefineProperty,a=n.assertThisInitialized},function(n){i=n.cclegacy,o=n._decorator,s=n.Prefab,l=n.Node,c=n.UITransform,u=n.math,d=n.instantiate,p=n.Vec3,f=n.Component}],execute:function(){var h,b,y,g,m,v,w;i._RF.push({},"d3af3oA3e9CsZFMGSr8yo60","LandsRow",void 0);var L=o.ccclass,P=o.property,R=[[0,1,0,1,0],[0,0,0,1,0],[0,0,1,0,0],[0,0,0,0,1],[0,1,0,0,0]];n("LandsRow",(h=L("LandsRow"),b=P(s),y=P(l),h((v=e((m=function(n){function e(){for(var e,t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return e=n.call.apply(n,[this].concat(i))||this,r(e,"landPrefab",v,a(e)),r(e,"lands",w,a(e)),e}return t(e,n),e.prototype.onLoad=function(){var n=.8*this.node.getComponent(c).width,e=u.randomRangeInt(0,5);for(var t in R[e])if(R[e][t]){var r=-n/2+Number(t)*n/5,a=d(this.landPrefab);a.setParent(this.node),a.setSiblingIndex(0),a.position=new p(r,0,0),this.lands.push(a)}},e}(f)).prototype,"landPrefab",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=e(m.prototype,"lands",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),g=m))||g));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./GameMain.ts","./JumpController.ts","./LandController.ts","./SceneController.ts","./Background.ts","./ControlPanel.ts","./LandsRow.ts","./PlayerController.ts","./UI.ts","./Game.ts","./MainUIView.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MainUIView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Game.ts"],(function(e){var n,t,i,r,a,o,l,s,u,d,c,f,p;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,l=e.Prefab,s=e.Node,u=e.view,d=e.instantiate,c=e.Vec3,f=e.Component},function(e){p=e.Game}],execute:function(){var b,h,P,g,m,y,w,C,v,S,V,z,I;a._RF.push({},"d8641BkYdxNeZK524mfABhZ","MainUIView",void 0);var M=o.ccclass,x=o.property;e("MainUIView",(b=M("MainUIView"),h=x(l),P=x(l),g=x(l),m=x(l),y=x(s),b((v=n((C=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return n=e.call.apply(e,[this].concat(a))||this,i(n,"userStatusPrefab",v,r(n)),i(n,"userBoardPrefab",S,r(n)),i(n,"mainControlPanelPrefab",V,r(n)),i(n,"playerControllerPrefab",z,r(n)),i(n,"gameView",I,r(n)),n.mainControlPanel=void 0,n.starting=!1,n.paused=!1,n.playerController=void 0,n}t(n,e);var a=n.prototype;return a.onLoad=function(){this.addHeader(),this.addMainControlPanel()},a.addHeader=function(){var e=u.getVisibleSize(),n=e.width,t=e.height,i=d(this.userStatusPrefab);i.setParent(this.node),i.setSiblingIndex(100),i.position=new c(10-n/2,.8*t,0);var r=d(this.userBoardPrefab);r.setParent(this.node),r.setSiblingIndex(100),r.position=new c(n/2-10,.8*t,0)},a.addMainControlPanel=function(){var e=u.getVisibleSize().height,n=d(this.mainControlPanelPrefab);n.setParent(this.node),n.setSiblingIndex(100),n.position=new c(0,e/2,0),this.mainControlPanel=n},a.addPlayerContoller=function(){var e=d(this.playerControllerPrefab);e.setParent(this.node),e.setSiblingIndex(100),e.position=new c(0,-56,0),this.playerController=e},a.handleGameStart=function(){this.gameView.getComponent(p).creatNewGame(),this.addPlayerContoller()},a.handlePlayerMove=function(e,n){this.gameView.getComponent(p).handlePlayer(e,n)},n}(f)).prototype,"userStatusPrefab",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=n(C.prototype,"userBoardPrefab",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=n(C.prototype,"mainControlPanelPrefab",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=n(C.prototype,"playerControllerPrefab",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=n(C.prototype,"gameView",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=C))||w));a._RF.pop()}}}));

System.register("chunks:///_virtual/PlayerController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./MainUIView.ts"],(function(t){var e,n,o,i,r,l,s,a,u,h;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,l=t._decorator,s=t.Node,a=t.Input,u=t.Component},function(t){h=t.MainUIView}],execute:function(){var p,c,f,y,P,g,B;r._RF.push({},"afd41tVlUxBqo47Qi6QVFFL","PlayerController",void 0);var U=l.ccclass,d=l.property;t("PlayerController",(p=U("PlayerController"),c=d(s),f=d(s),p((g=e((P=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return e=t.call.apply(t,[this].concat(r))||this,o(e,"leftButton",g,i(e)),o(e,"rightButton",B,i(e)),e.mainUi=void 0,e}n(e,t);var r=e.prototype;return r.onLoad=function(){this.mainUi=this.node.getParent().getComponent(h),this.leftButton.on(a.EventType.TOUCH_START,this.onLeftButtonPresseDown,this),this.rightButton.on(a.EventType.TOUCH_START,this.onRightButtonPresseDown,this),this.leftButton.on(a.EventType.TOUCH_END,this.onLeftButtonPresseUp,this),this.rightButton.on(a.EventType.TOUCH_END,this.onRightButtonPresseUp,this)},r.onLeftButtonPresseDown=function(){this.mainUi.handlePlayerMove("left","down")},r.onRightButtonPresseDown=function(){this.mainUi.handlePlayerMove("right","down")},r.onLeftButtonPresseUp=function(){this.mainUi.handlePlayerMove("left","up")},r.onRightButtonPresseUp=function(){this.mainUi.handlePlayerMove("right","up")},e}(u)).prototype,"leftButton",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=e(P.prototype,"rightButton",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=P))||y));r._RF.pop()}}}));

System.register("chunks:///_virtual/SceneController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,o;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,r=e._decorator,o=e.Component}],execute:function(){var c;n._RF.push({},"e472c40dplDlINfam2gDLrq","SceneController",void 0);var l=r.ccclass;r.property,e("SceneController",l("SceneController")(c=function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var r=n.prototype;return r.start=function(){},r.update=function(e){},n}(o))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/UI.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,n,o;return{setters:[function(t){e=t.inheritsLoose},function(t){r=t.cclegacy,n=t._decorator,o=t.Component}],execute:function(){var s,u;r._RF.push({},"a7b09U9wyxH/JlrdT440v3y","UI",void 0);var c=n.ccclass,a=(n.property,t("UIs",{PauseButton:0}));t("UI_Prefabs",((s={})[a.PauseButton]={prefab:"Prefab/Pause"},s)),t("UI",c("UI")(u=function(t){function r(){return t.apply(this,arguments)||this}return e(r,t),r.prototype.start=function(){},r}(o))||u);r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});