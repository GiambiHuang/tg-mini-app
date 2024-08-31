System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,o,r,n,s,a,h,l,d,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,o=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){n=t.cclegacy,s=t._decorator,a=t.Node,h=t.view,l=t.UITransform,d=t.Vec3,u=t.Component}],execute:function(){var b,c,g,p,f,v,w,y,P,m,B,L,z;n._RF.push({},"e152bM3ShhNh4jHiy9vR8Ri","Background",void 0);var R=s.ccclass,k=s.property;t("Background",(b=R("Background"),c=k(a),g=k(a),p=k(a),f=k(a),v=k(a),b((P=e((y=function(t){function e(){for(var e,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return e=t.call.apply(t,[this].concat(n))||this,o(e,"bg",P,r(e)),o(e,"border",m,r(e)),o(e,"borderLeft",B,r(e)),o(e,"borderRight",L,r(e)),o(e,"borderBottom",z,r(e)),e.height=void 0,e.viewHeight=void 0,e.viewWidth=void 0,e.startY=void 0,e}i(e,t);var n=e.prototype;return n.onLoad=function(){var t=h.getVisibleSize(),e=t.height,i=t.width;this.viewHeight=e,this.viewWidth=i,this.height=this.bg.getComponent(l).height,this.startY=this.bg.getPosition().y,this.updateBorderPosition()},n.updateBorderPosition=function(){var t=this.borderLeft.getComponent(l),e=t.width;t.height;this.borderLeft.setPosition(new d(50-e-this.viewWidth/2,50)),console.log(this.borderLeft.getPosition()),this.borderRight.setPosition(new d(-50+e+this.viewWidth/2,50)),this.borderBottom.setPosition(new d(0,50-this.viewHeight/2))},n.reset=function(){this.bg.setPosition(new d(0,this.startY,0)),this.border.setPosition(new d(0,0,0))},n.handleLocation=function(t){var e=this.border.getPosition().y;t>=this.startY&&this.bg.setPosition(new d(0,t,0)),t>e&&this.border.setPosition(new d(0,t,0))},n.update=function(t){},e}(u)).prototype,"bg",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=e(y.prototype,"border",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=e(y.prototype,"borderLeft",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=e(y.prototype,"borderRight",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=e(y.prototype,"borderBottom",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=y))||w));n._RF.pop()}}}));

System.register("chunks:///_virtual/ControlPanel.ts",["./rollupPluginModLoBabelHelpers.js","cc","./MainUIView.ts"],(function(t){var n,e,i,o,r,a,l,u,c;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,l=t.Node,u=t.Component},function(t){c=t.MainUIView}],execute:function(){var p,s,y,h,f,b,d,g,w,B,m;r._RF.push({},"7869bSyqTtDMb++nNgODt/t","ControlPanel",void 0);var v=a.ccclass,P=a.property;t("ControlPanel",(p=v("ControlPanel"),s=P(l),y=P(l),h=P(l),f=P(l),p((g=n((d=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return n=t.call.apply(t,[this].concat(r))||this,i(n,"playButton",g,o(n)),i(n,"rankingButton",w,o(n)),i(n,"rewardButton",B,o(n)),i(n,"shopButton",m,o(n)),n.mainUiView=void 0,n}e(n,t);var r=n.prototype;return r.onLoad=function(){this.mainUiView=this.node.getParent().getComponent(c),this.playButton.on("click",this.clickPlayButton,this)},r.clickPlayButton=function(){this.node.active=!1,this.mainUiView.handleGameStart()},r.update=function(t){},n}(u)).prototype,"playButton",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=n(d.prototype,"rankingButton",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=n(d.prototype,"rewardButton",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=n(d.prototype,"shopButton",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=d))||b));r._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/Game.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Background.ts","./MainUIView.ts","./JumpController.ts"],(function(e){var n,t,a,i,r,o,l,s,u,c,p,d,f,h,b,m;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,a=e.initializerDefineProperty,i=e.assertThisInitialized,r=e.createForOfIteratorHelperLoose},function(e){o=e.cclegacy,l=e._decorator,s=e.Prefab,u=e.Node,c=e.Vec3,p=e.math,d=e.instantiate,f=e.Component},function(e){h=e.Background},function(e){b=e.MainUIView},function(e){m=e.JumpController}],execute:function(){var y,g,w,v,P,R,I,L,k,z,C,G,x;o._RF.push({},"f406bJPT9xMtKyXppJlYkfY","Game",void 0);var S=l.ccclass,U=l.property;e("Game",(y=S("Game"),g=U(s),w=U(s),v=U(u),P=U(u),R=U(u),y((k=n((L=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return n=e.call.apply(e,[this].concat(r))||this,a(n,"landsRowPrefab",k,i(n)),a(n,"playerPrefab",z,i(n)),a(n,"camera",C,i(n)),a(n,"background",G,i(n)),a(n,"mainUI",x,i(n)),n.landsRows=[],n.player=null,n}t(n,e);var o=n.prototype;return o.onLoad=function(){},o.creatNewGame=function(){this.initPlayer(),this.initLands()},o.over=function(){this.cleanLands(),this.cleanPlayer(),this.camera.setPosition(new c(0,0,0)),this.background.getComponent(h).reset(),this.mainUI.getComponent(b).handleGameOver()},o.cleanLands=function(){for(var e,n=r(this.landsRows);!(e=n()).done;){e.value.destroy()}this.landsRows=[]},o.cleanPlayer=function(){var e;null==(e=this.player)||e.destroy(),this.player=null},o.initLands=function(){var e=[-700,0,0,0,0];for(var n in e){var t=p.randomRangeInt(300,550),a=-700===e[n]?e[n]:e[Number(n)-1]+t,i=d(this.landsRowPrefab);i.setParent(this.node),i.setSiblingIndex(1),i.position=new c(0,a,0),e[n]=a,this.landsRows.push(i)}},o.initPlayer=function(){var e=d(this.playerPrefab);e.setParent(this.node),e.setSiblingIndex(1e7),e.position=new c(0,0,0),this.player=e},o.addLandsRow=function(){var e=this.landsRows.slice(-1)[0],n=d(this.landsRowPrefab);n.setParent(this.node),n.setSiblingIndex(1);var t=p.randomRangeInt(300,550);n.position=new c(0,e.getPosition().y+t,0),this.landsRows.push(n)},o.handlePlayer=function(e,n){var t=this.player.getComponent(m);"up"===n?t.moveStop():"left"===e?t.moveLeft():t.moveRight()},n}(f)).prototype,"landsRowPrefab",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=n(L.prototype,"playerPrefab",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=n(L.prototype,"camera",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=n(L.prototype,"background",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=n(L.prototype,"mainUI",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=L))||I));o._RF.pop()}}}));

System.register("chunks:///_virtual/GameMain.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,o,a,i,c,r,s;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,o=e._decorator,a=e.game,i=e.Game,c=e.profiler,r=e.v3,s=e.Component}],execute:function(){var u;n._RF.push({},"fa58flWFypBRJI8ks1/moGQ","GameMain",void 0);var l=o.ccclass;e("GameMain",l("GameMain")(u=function(e){function n(){return e.apply(this,arguments)||this}return t(n,e),n.prototype.onLoad=function(){a.once(i.EVENT_ENGINE_INITED,(function(){c._ctx.fillStyle="#f00",c._statsDone=!1,c.scale=r(.5,.5,.5),c.generateStats()})),c.hideStats()},n}(s))||u);n._RF.pop()}}}));

System.register("chunks:///_virtual/GetScore.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,o,n,r,i,a,c,s,l,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,c=e.Node,s=e.Label,l=e.Animation,u=e.Component}],execute:function(){var p,m,h,d,y,f,g;i._RF.push({},"09526Te35NNZa1p0aa90Umi","GetScore",void 0);var A=a.ccclass,b=a.property;e("GetScore",(p=A("GetScore"),m=b(c),h=b(c),p((f=t((y=function(e){function t(){for(var t,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,n(t,"scoreAmount",f,r(t)),n(t,"scoreAmountShadow",g,r(t)),t}o(t,e);var i=t.prototype;return i.play=function(e){var t="+"+e;this.scoreAmount.getComponent(s).string=t,this.scoreAmountShadow.getComponent(s).string=t,this.node.getComponent(l).play()},i.onAnimationEnd=function(){this.node.destroy()},t}(u)).prototype,"scoreAmount",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=t(y.prototype,"scoreAmountShadow",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=y))||d));i._RF.pop()}}}));

System.register("chunks:///_virtual/JumpController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Game.ts","./Background.ts"],(function(i){var t,e,o,n,s,r,a,l,h,c,u,d,m;return{setters:[function(i){t=i.inheritsLoose},function(i){e=i.cclegacy,o=i._decorator,n=i.RigidBody2D,s=i.Sprite,r=i.BoxCollider2D,a=i.Contact2DType,l=i.Vec2,h=i.Camera,c=i.Vec3,u=i.Component},function(i){d=i.Game},function(i){m=i.Background}],execute:function(){var g;e._RF.push({},"600b9rsy9FEwZ4k/iFryL07","JumpController",void 0);var p=o.ccclass;o.property,i("JumpController",p("JumpController")(g=function(i){function e(){for(var t,e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return(t=i.call.apply(i,[this].concat(o))||this).boxCollider=null,t.rigidBody=null,t.sprite=null,t.isJumping=!0,t.isMoveLeft=!1,t.isMoveRight=!1,t.game=null,t.currentY=void 0,t.jumpVal=4e3,t.moveVal=1,t.scaleVal=.5,t}t(e,i);var o=e.prototype;return o.onLoad=function(){this.rigidBody=this.getComponent(n),this.sprite=this.getComponent(s),this.boxCollider=this.getComponent(r),this.game=this.node.getParent().getComponent(d),this.boxCollider.on(a.BEGIN_CONTACT,this.onContact,this)},o.moveLeft=function(){this.node.setScale(this.scaleVal,this.scaleVal),this.isMoveLeft=!0,this.isMoveRight=!1},o.moveRight=function(){this.node.setScale(0-this.scaleVal,this.scaleVal),this.isMoveLeft=!1,this.isMoveRight=!0},o.moveStop=function(){this.isMoveLeft=!1,this.isMoveRight=!1;var i=this.rigidBody.linearVelocity.y;this.rigidBody.linearVelocity=new l(0,i)},o.jump=function(){var i=this.rigidBody.linearVelocity;!this.isJumping&&+i.y.toFixed(5)>=0&&(this.isJumping=!0,this.sprite.changeSpriteFrameFromAtlas("Dog_Jump"),this.rigidBody.applyForceToCenter(new l(i.x,i.y+this.jumpVal),!0))},o.onContact=function(i,t,e){var o=!1;if(t.node.name.includes("Border")&&(console.log("bbbobooooooo"),o=!0,this.stop()),t.node.name.includes("Land")){var n=e.getWorldManifold().normal.y<0;o=!n,n&&this.isJumping&&(this.sprite.changeSpriteFrameFromAtlas("Dog_Stand"),this.isJumping=!1,this.unschedule(this.jump),this.scheduleOnce(this.jump,.7))}e.disabled=o},o.recenterCamera=function(){if(this.isJumping){var i=this.game.camera.getComponent(h),t=this.game.background.getComponent(m),e=i.node.getPosition(),o=e.x,n=e.y,s=e.z,r=this.node.getPosition(),a=Math.max(r.y,n);r.y>0&&a!==n&&(i.node.setPosition(new c(o,a,s)),this.node.parent.getComponent(d).addLandsRow(),t.handleLocation(a))}},o.moving=function(){if(this.isMoveLeft||this.isMoveRight){var i=this.isMoveLeft?0-this.moveVal:this.moveVal,t=this.rigidBody.linearVelocity,e=t.x,o=t.y;this.rigidBody.linearVelocity=new l(e+i,o)}},o.stop=function(){var i=this;this.moveStop(),this.isJumping=!1,this.scheduleOnce((function(){i.rigidBody.sleep(),i.game.over()}),.2)},o.update=function(){this.recenterCamera(),this.moving()},e}(u))||g);e._RF.pop()}}}));

System.register("chunks:///_virtual/Land.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GetScore.ts"],(function(t){var e,n,o,i,r,a,s,c,d,h,l,u,p,f,b;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,s=t.Prefab,c=t.randomRangeInt,d=t.BoxCollider2D,h=t.Contact2DType,l=t.UITransform,u=t.instantiate,p=t.Vec3,f=t.Component},function(t){b=t.GetScore}],execute:function(){var g,C,L,y,m;r._RF.push({},"63995tN5wtBK43dioUbxche","Land",void 0);var v=a.ccclass,B=a.property;t("Land",(g=v("Land"),C=B(s),g((m=e((y=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,o(e,"GetScorePrefab",m,i(e)),e.box2d=void 0,e.isLanded=!1,e.isBonusLand=!1,e}n(e,t);var r=e.prototype;return r.onLoad=function(){this.isBonusLand=5===c(0,10),this.box2d=this.node.getComponent(d),this.box2d.on(h.BEGIN_CONTACT,this.onContact,this)},r.onContact=function(t,e,n){n.getWorldManifold().normal.y<0&&!this.isLanded&&(this.box2d.off(h.BEGIN_CONTACT,this.onContact,this),this.getScore())},r.getScore=function(){var t=this.node.getComponent(l),e=t.width,n=t.height,o=20+(this.isBonusLand?1:0),i=u(this.GetScorePrefab);i.setParent(this.node),i.setPosition(new p(.5*e,1.75*n,0)),i.getComponent(b).play(o),this.isLanded=!0},e}(f)).prototype,"GetScorePrefab",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=y))||L));r._RF.pop()}}}));

System.register("chunks:///_virtual/LandsRow.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var n,t,r,i,a,o,s,l,c,u,d,p,f,h;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,s=e.Prefab,l=e.Node,c=e.view,u=e.UITransform,d=e.math,p=e.instantiate,f=e.Vec3,h=e.Component}],execute:function(){var b,v,w,g,y,m,L;a._RF.push({},"d3af3oA3e9CsZFMGSr8yo60","LandsRow",void 0);var P=o.ccclass,R=o.property,z=[[1,0,0,0],[0,0,0,1],[0,0,1,0],[0,1,0,0]];e("LandsRow",(b=P("LandsRow"),v=R(s),w=R(l),b((m=n((y=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return n=e.call.apply(e,[this].concat(a))||this,r(n,"landPrefab",m,i(n)),r(n,"lands",L,i(n)),n}return t(n,e),n.prototype.onLoad=function(){var e=.8*c.getVisibleSize().width;this.node.getComponent(u).width=e;var n=d.randomRangeInt(0,4);for(var t in z[n])if(z[n][t]){var r=p(this.landPrefab);r.setParent(this.node),r.setSiblingIndex(1);var i=e/4*(Number(t)-2)+r.getComponent(u).width/2;r.position=new f(i,0,0),this.lands.push(r)}},n}(h)).prototype,"landPrefab",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=n(y.prototype,"lands",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),g=y))||g));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./GameMain.ts","./JumpController.ts","./SceneController.ts","./Background.ts","./ControlPanel.ts","./GetScore.ts","./Land.ts","./LandsRow.ts","./MainMenu.ts","./PlayerController.ts","./UserInfo.ts","./UI.ts","./Game.ts","./MainUIView.ts","./telegramWebApp.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MainMenu.ts",["./rollupPluginModLoBabelHelpers.js","cc","./MainUIView.ts"],(function(t){var e,i,n,o,a,r,l,u,c,p,s;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){a=t.cclegacy,r=t._decorator,l=t.Node,u=t.view,c=t.Vec3,p=t.Component},function(t){s=t.MainUIView}],execute:function(){var b,f,h,y,g,m,w,d,B,v,M,z,k,V,P;a._RF.push({},"a0dffN9/BxFVZn/PXxAbgOp","MainMenu",void 0);var U=r.ccclass,T=r.property;t("MainMenu",(b=U("MainMenu"),f=T(l),h=T(l),y=T(l),g=T(l),m=T(l),w=T(l),b((v=e((B=function(t){function e(){for(var e,i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a))||this,n(e,"playButton",v,o(e)),n(e,"taskButton",M,o(e)),n(e,"rankingButton",z,o(e)),n(e,"rewardButton",k,o(e)),n(e,"shopButton",V,o(e)),n(e,"menuTop",P,o(e)),e.mainUiView=void 0,e}i(e,t);var a=e.prototype;return a.onLoad=function(){var t=u.getVisibleSize().height;this.mainUiView=this.node.getParent().getComponent(s),this.playButton.on("click",this.clickPlayButton,this),this.menuTop.setPosition(new c(0,t,0))},a.clickPlayButton=function(){this.node.active=!1,this.mainUiView.handleGameStart()},a.update=function(t){},e}(p)).prototype,"playButton",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=e(B.prototype,"taskButton",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=e(B.prototype,"rankingButton",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=e(B.prototype,"rewardButton",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=e(B.prototype,"shopButton",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=e(B.prototype,"menuTop",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=B))||d));a._RF.pop()}}}));

System.register("chunks:///_virtual/MainUIView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Game.ts"],(function(e){var i,n,t,r,a,o,l,s,u,d,h,c,f;return{setters:[function(e){i=e.applyDecoratedDescriptor,n=e.inheritsLoose,t=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,l=e.Prefab,s=e.Node,u=e.view,d=e.instantiate,h=e.Vec3,c=e.Component},function(e){f=e.Game}],execute:function(){var p,b,v,w,y,g,m,P,M,C,I;a._RF.push({},"d8641BkYdxNeZK524mfABhZ","MainUIView",void 0);var V=o.ccclass,z=o.property;e("MainUIView",(p=V("MainUIView"),b=z(l),v=z(l),w=z(l),y=z(s),p((P=i((m=function(e){function i(){for(var i,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=e.call.apply(e,[this].concat(a))||this,t(i,"userInfoPrefab",P,r(i)),t(i,"mainMenuPrefab",M,r(i)),t(i,"playerControllerPrefab",C,r(i)),t(i,"gameView",I,r(i)),i.playerController=void 0,i.mainMenu=void 0,i.starting=!1,i.paused=!1,i.viewWidth=void 0,i.viewHeight=void 0,i}n(i,e);var a=i.prototype;return a.onLoad=function(){var e=u.getVisibleSize(),i=e.width,n=e.height;this.viewHeight=n,this.viewWidth=i,this.addMainMenu(),this.addHeader()},a.addHeader=function(){var e=d(this.userInfoPrefab);e.setParent(this.node),e.setSiblingIndex(2)},a.addMainMenu=function(){var e=d(this.mainMenuPrefab);e.setParent(this.node),e.setSiblingIndex(1),e.position=new h(0,0-this.viewHeight/2,0),this.mainMenu=e},a.addPlayerContoller=function(){var e=d(this.playerControllerPrefab);e.setParent(this.node),e.position=new h(0,0-this.viewHeight/2,0),this.playerController=e},a.handleGameStart=function(){this.gameView.getComponent(f).creatNewGame(),this.addPlayerContoller()},a.handleGameOver=function(){var e;null==(e=this.playerController)||e.destroy(),this.playerController=null,this.addMainMenu()},a.handlePlayerMove=function(e,i){this.gameView.getComponent(f).handlePlayer(e,i)},i}(c)).prototype,"userInfoPrefab",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=i(m.prototype,"mainMenuPrefab",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=i(m.prototype,"playerControllerPrefab",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=i(m.prototype,"gameView",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=m))||g));a._RF.pop()}}}));

System.register("chunks:///_virtual/PlayerController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./MainUIView.ts"],(function(t){var e,n,o,i,r,l,s,a,u,h;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,l=t._decorator,s=t.Node,a=t.Input,u=t.Component},function(t){h=t.MainUIView}],execute:function(){var p,c,f,y,P,g,B;r._RF.push({},"afd41tVlUxBqo47Qi6QVFFL","PlayerController",void 0);var U=l.ccclass,d=l.property;t("PlayerController",(p=U("PlayerController"),c=d(s),f=d(s),p((g=e((P=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return e=t.call.apply(t,[this].concat(r))||this,o(e,"leftButton",g,i(e)),o(e,"rightButton",B,i(e)),e.mainUi=void 0,e}n(e,t);var r=e.prototype;return r.onLoad=function(){this.mainUi=this.node.getParent().getComponent(h),this.leftButton.on(a.EventType.TOUCH_START,this.onLeftButtonPresseDown,this),this.rightButton.on(a.EventType.TOUCH_START,this.onRightButtonPresseDown,this),this.leftButton.on(a.EventType.TOUCH_END,this.onLeftButtonPresseUp,this),this.rightButton.on(a.EventType.TOUCH_END,this.onRightButtonPresseUp,this)},r.onLeftButtonPresseDown=function(){this.mainUi.handlePlayerMove("left","down")},r.onRightButtonPresseDown=function(){this.mainUi.handlePlayerMove("right","down")},r.onLeftButtonPresseUp=function(){this.mainUi.handlePlayerMove("left","up")},r.onRightButtonPresseUp=function(){this.mainUi.handlePlayerMove("right","up")},e}(u)).prototype,"leftButton",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=e(P.prototype,"rightButton",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=P))||y));r._RF.pop()}}}));

System.register("chunks:///_virtual/SceneController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,o;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,r=e._decorator,o=e.Component}],execute:function(){var c;n._RF.push({},"e472c40dplDlINfam2gDLrq","SceneController",void 0);var l=r.ccclass;r.property,e("SceneController",l("SceneController")(c=function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var r=n.prototype;return r.start=function(){},r.update=function(e){},n}(o))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/telegramWebApp.ts",["cc"],(function(e){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){e("default",(function(){var e;return null!=(e=window.Telegram)?e:null})),t._RF.push({},"a25072BpP5DSbXbggIdJs5F","telegramWebApp",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/UI.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,n,o;return{setters:[function(t){e=t.inheritsLoose},function(t){r=t.cclegacy,n=t._decorator,o=t.Component}],execute:function(){var s,u;r._RF.push({},"a7b09U9wyxH/JlrdT440v3y","UI",void 0);var c=n.ccclass,a=(n.property,t("UIs",{PauseButton:0}));t("UI_Prefabs",((s={})[a.PauseButton]={prefab:"Prefab/Pause"},s)),t("UI",c("UI")(u=function(t){function r(){return t.apply(this,arguments)||this}return e(r,t),r.prototype.start=function(){},r}(o))||u);r._RF.pop()}}}));

System.register("chunks:///_virtual/UserInfo.ts",["./rollupPluginModLoBabelHelpers.js","cc","./telegramWebApp.ts"],(function(e){var i,t,n,r,o,s,a,l,u,p,c,h,b;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,a=e.Node,l=e.view,u=e.UITransform,p=e.Vec3,c=e.Label,h=e.Component},function(e){b=e.default}],execute:function(){var f,m,g,d,v,w,y,C,L,P,U,z,N,I,W;o._RF.push({},"2c5f4oKes9BIYUYOI0vK/eJ","UserInfo",void 0);var _=s.ccclass,B=s.property;e("UserInfo",(f=_("UserInfo"),m=B(a),g=B(a),d=B(a),v=B(a),w=B(a),y=B(a),f((P=i((L=function(e){function i(){for(var i,t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];return i=e.call.apply(e,[this].concat(o))||this,n(i,"userName",P,r(i)),n(i,"userNameLabel",U,r(i)),n(i,"userCoins",z,r(i)),n(i,"userCoinsLabel",N,r(i)),n(i,"userPoints",I,r(i)),n(i,"userPointsLabel",W,r(i)),i.viewHeight=void 0,i.viewWidth=void 0,i}t(i,e);var o=i.prototype;return o.onLoad=function(){var e=l.getVisibleSize(),i=e.width,t=e.height;this.node.getComponent(u).width=i,this.node.setPosition(new p(0,t/2,0)),this.viewHeight=t,this.viewWidth=i,this.initUserName(),this.initUserBalance()},o.initUserName=function(){var e,i;this.userName.setPosition(new p(20-this.viewWidth/2,-32,0)),this.userNameLabel.getComponent(c).string=null!=(e=null==(i=b())||null==(i=i.WebApp.initDataUnsafe)||null==(i=i.user)?void 0:i.last_name)?e:"--"},o.initUserBalance=function(){var e=this.userPoints.getComponent(u).width,i=this.viewWidth/2-e-20;this.userPoints.setPosition(new p(i,-32,0)),this.userPointsLabel.getComponent(c).string="0";var t=this.userCoins.getComponent(u).width;this.userCoins.setPosition(new p(i-40-t,-32,0)),this.userCoinsLabel.getComponent(c).string="0"},o.update=function(e){},i}(h)).prototype,"userName",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),U=i(L.prototype,"userNameLabel",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=i(L.prototype,"userCoins",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=i(L.prototype,"userCoinsLabel",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=i(L.prototype,"userPoints",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),W=i(L.prototype,"userPointsLabel",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=L))||C));o._RF.pop()}}}));

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