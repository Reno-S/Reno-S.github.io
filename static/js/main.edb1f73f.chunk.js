(this["webpackJsonpgithub-react-reno"]=this["webpackJsonpgithub-react-reno"]||[]).push([[0],{137:function(t,e,n){},138:function(t,e,n){},176:function(t,e,n){"use strict";n.r(e),n.d(e,"Colors",(function(){return r})),n.d(e,"Layout",(function(){return a})),n.d(e,"Theme",(function(){return o}));var i=n(80),r=function t(e,n,r,a,o,c,l,h,s,u,d){Object(i.a)(this,t),this.main=e,this.text=n,this.link=r,this.header=a,this.secondary=o,this.disabled=c,this.font=l,this.aBlack=h,this.instructions=s,this.background=u,this.recording=d,this.YES="yes",this.NO="no",this.SOMEWHAT="somewhat"},a=function t(e){Object(i.a)(this,t),this.paddingHorizontal=e},o=function t(e,n){Object(i.a)(this,t),this.colors=e,this.layout=n}},195:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),a=n(27),o=n.n(a),c=(n(137),n(25)),l=n(9),h=(n(138),n(60)),s=n(23),u=n(199),d=n(104),b=n(105),j=n(3),g=n(106),f=n(107),p=n.n(f),x=n(33),O=n(46),m=n(38),w=n(20),v=function(t,e){return{minResolution:t,maxResolution:e}},y=function(t,e,n,i){return{width:v(t,n),height:v(e,i)}},S={mobile:y(320,568,375,812),mobileLandscape:y(568,320,812,375),tablet:y(375,812,768,1024),tabletLandscape:y(812,375,1024,768),tabletXL:y(768,1024,1366,1366),tabletXLLandscape:y(1024,768,1366,1366),laptop:y(1440,800,1920,900),_4K:y(1920,900,2560,1e3),global:y(320,568,1920,900)};function R(t){var e=t.height>t.width;return{dimensions:t,isPortrait:e,isLandscape:!e}}var k=m.EhState.fromInitialState(function(){var t=w.a.get("window"),e=Object(h.a)(Object(h.a)({},R(t)),{},{ph:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return P(t,e,n,this.dimensions,i)},pw:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return L(t,e,n,this.dimensions,i)},rsp:function(t,e){return E(this.dimensions,t,!1,e)}});return e.ph=e.ph.bind(e),e.pw=e.pw.bind(e),e}());function V(t,e){var n=t.minResolution,i=t.maxResolution,r=t.minVal,a=t.maxVal,o=t.maxLim,c=t.minLim,l=t.baseUnit,h=r+(t.functionOf-n)*(a-r)/(i-n);return c&&(h=Math.max(c,h)),o&&(h=Math.min(o,h)),e?h:"".concat(h).concat(l||"px")}function B(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:k.state,i=Object.keys(t),r=i[0];if(1===i.length)return[t[r],r];for(var a=n[e],o=0,c=i;o<c.length;o++){var l=c[o],h=S[l][e];if(a<=h.maxResolution&&a>=h.minResolution)return[t[l],l]}return[t[r],r]}function E(t,e,n,i){for(var r=arguments.length,a=new Array(r>4?r-4:0),o=4;o<r;o++)a[o-4]=arguments[o];a.length>0&&Object.assign.apply(Object,[i].concat(a));var l=B(i,e,t),h=Object(c.a)(l,2),s=h[0],u=h[1];return Object.assign(s,S[u][e]),s.functionOf=t[e],V(s,n)}function T(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var a=function(n,r){var a=n.dimensions;return E.apply(void 0,[a,t,r,e].concat(i))};return a}w.a.addEventListener("change",(function(t){var e=R(t.window);k.fire(e)}));var z=function(t,e,n,i,r){return Object(O.a)({},t,{minVal:e,maxVal:n,minLim:i,maxLim:r})};function A(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=t*e/100;return n&&(a=Math.max(n,a)),i&&(a=Math.min(i,a)),r?a:"".concat(a,"px")}function P(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:k.state,r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return A(t,i.height,e,n,r)}function L(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:k.state,r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return A(t,i.width,e,n,r)}var N,M,C,F,H,D,I,W,Y=new(0,n(176).Theme)({primary:"#53B5AB",secondary:"white",disabled:"rgba(83, 181, 171, 0.5)",header:"#2F464B",text:"#2F464B",placeholder:"#ABABAB",font:"Poppins-Medium",aBlack:"#504f54",error:"#DD1010",instructions:"rgba(47,72,75,0.6)",main:"#53B4AB",background:"#FAFAFA",recording:"#BC301F",YES:"rgb(186,34,34)",SOMEWHAT:"rgb(199,154,0)",NO:"rgb(74,181,117)"},{paddingHorizontal:"20px",paddingTop:"20px"}),U=m.EhState.fromInitialState({theme:Y}),q=n(2),J="#BA2222",X="#C79A00",G="#4AB575",K=.9,_=[["Likely","Neutral","Unlikely"],["Very likely","Likely","Neutral","Unlikely","Very unlikely"],["Absolutely","Very likely","Likely","Neutral","Unlikely","Very unlikely","Absolutely not"]],Q=Object(s.withEhState)(k,Object(s.withEhState)(U,x.a.View(N||(N=Object(l.a)(["\n\t\t\tflex-direction: row;\n\t\t\t/*\n      width: ",";\n      */\n\t\t\theight: ",";\n\t\t\tmargin-top: 16px;\n\t\t"])),T("width",z("mobile",200,230,195,240),z("tablet",230,270,220,280),z("global",200,275,195,275)),T("height",z("mobile",190,200),z("tablet",200,240),z("global",200,249))))),Z=Object(s.withEhState)(k,Object(x.a)(p.a)(M||(M=Object(l.a)(["\n\t\tflex-direction: column;\n\t\theight: 100%;\n\t\twidth: ",";\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\talign-self: center;\n\t\tborder-radius: 25px;\n\t"])),T("width",z("mobile",19.18,20),z("tablet",20,22.57),z("global",20,25)))),$=Object(s.withEhState)(k,x.a.View(C||(C=Object(l.a)(["\n\t\twidth: ",";\n\t"])),T("width",z("mobile",27,30),z("tablet",30,33),z("global",27.54,37)))),tt=Object(s.withEhState)(k,Object(x.a)(d.a.View)(F||(F=Object(l.a)(["\n\t\tflex-direction: column-reverse;\n\t\twidth: ",";\n\t\theight: 100%;\n\t\tjustify-content: space-evenly;\n\t\talign-items: center;\n\t\tbackground-color: #ffffff;\n\t\tborder-radius: ",";\n\t"])),T("width",z("mobile",160,170,160,170),z("tablet",170,200,170,200),z("global",180,213)),T("width",z("global",19,25)))),et=Object(s.withEhState)(k,Object(x.a)(d.a.View)(H||(H=Object(l.a)(["\n\t\twidth: ",";\n\t\theight: ",";\n\t\tborder-radius: ",";\n\t\tbackground-color: #ffffff;\n\t"])),T("width",z("mobile",16,17),z("tablet",17,19),z("global",16,21,16,23)),T("width",z("mobile",16,17),z("tablet",17,19),z("global",16,21,16,23)),T("width",z("mobile",8,8.5),z("tablet",8.5,9.5),z("global",8,10.5,8,11.5)))),nt=Object(s.withEhState)(k,Object(x.a)(b.a)(D||(D=Object(l.a)(["\n\t\t/* background-color: "," */\n\t\twidth: 100%;\n\t\theight: ",";\n\t\tjustify-content: center;\n\t\tborder-radius: ",";\n\t\tz-index: 1;\n\t"])),(function(t){return t.isSelected}),(function(t){return t.height}),T("width",z("global",23,25)))),it=Object(s.withEhState)(k,Object(x.a)(d.a.Text)(I||(I=Object(l.a)(['\n\t\tfont-family: "Inter, Helvetica";\n\t\tfont-style: normal;\n\t\tfont-weight: ',";\n\t\tfont-size: ",";\n\t\tline-height: ",";\n\t\ttext-align: center;\n\t"])),(function(t){return t.isSelected?600:400}),T("width",z("global",18,24)),T("width",z("global",22,29)))),rt=Object(s.withEhState)(k,Object(x.a)(d.a.View)(W||(W=Object(l.a)(["\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\theight: ",";\n\t\t/* background-color: ","; */\n\t\tz-index: 0;\n\t\ttop: ",";\n\t\tborder-radius: ",";\n\t"])),(function(t){return t.itemHeightPct}),(function(t){return t.color}),(function(t){return t.topPos}),T("width",z("global",23,25)))),at=j.a.create({boxShadow:{shadowColor:"rgb(62, 85, 90)",shadowOffset:{width:0,height:5},shadowOpacity:.1,shadowRadius:8,elevation:3}});function ot(t,e,n){d.a.timing(t,{toValue:e,duration:n||500,useNativeDriver:!1}).start()}function ct(t,e){return t<=0?0:t>=100?e-1:Math.ceil(t/(100/e))-1}function lt(t,e,n,i,r,a,o,c,l,h){if(t.length<3||t.length>7)return console.log("Error! Need between 3 and 7 values, but got: ",t.length);var s="".concat(100/t.length,"%");return Object(q.jsxs)(tt,{children:[t.map((function(e,i){return Object(q.jsx)(nt,{onPress:function(){var e=h*K/2,n=1.1*(-i*(2*e/t.length)+e-e/t.length);a(n),ot(o,n)},isSelected:n,height:s,children:Object(q.jsx)(it,{style:{color:l===i?r:"rgb(47, 70, 75)"},children:e})},i)})),Object(q.jsx)(rt,{itemHeightPct:s,topPos:0,style:{backgroundColor:c,transform:[{translateY:i}]}})]})}function ht(t,e,n){return Object(u.a)(t,e)(n)}function st(t){var e=t.answerArray,n=Object(i.useState)(0),r=Object(c.a)(n,2),a=r[0],o=r[1],l=Object(i.useState)(50),s=Object(c.a)(l,2),u=s[0],b=s[1],j=Object(i.useState)(X),f=Object(c.a)(j,2),p=f[0],x=f[1],O=Object(i.useState)(1),m=Object(c.a)(O,2),w=m[0],v=m[1],y=Object(i.useState)(ct(u,e.length)),S=Object(c.a)(y,2),R=S[0],k=S[1],V=Object(i.useRef)(new d.a.Value(.5)).current,B=V.interpolate({inputRange:[0,.5,1],outputRange:[J,X,G]}),E=Object(i.useRef)(new d.a.Value(0)).current,T=E.interpolate({inputRange:[0,1],outputRange:["rgb(47, 70, 75)","rgb(255, 255, 255)"]}),z=Object(i.useRef)(new d.a.Value(100)).current,A=Object(i.useRef)(new d.a.Value(0)).current,P={y:0};Object(i.useEffect)((function(){P.y=a,b(function(t,e,n){var i=50-50/(e*n/2)*t;return i<0?0:i>100?100:i}(a,w,K)),k(ct(u,e.length)),x(u<50?ht(G,X,u/50):ht(X,J,u/50-1)),P.y=a,ot(V,-(u-100)/100),ot(z,ct(-1*(u-100),e.length)*(w/e.length))}),[a,u,w]),Object(i.useEffect)((function(){var t,e;E.setValue(0),t=E,e=1,d.a.timing(t,{toValue:e,duration:700,useNativeDriver:!1}).start()}),[R,w,E]);var L=Object(i.useMemo)((function(){return g.a.create({onStartShouldSetPanResponder:function(t,e){return!0},onStartShouldSetPanResponderCapture:function(t,e){return!0},onMoveShouldSetPanResponder:function(t,e){return!0},onMoveShouldSetPanResponderCapture:function(t,e){return!0},onPanResponderGrant:function(t,e){},onPanResponderMove:function(t,e){e.dy+P.y>=-.5*w*K&&e.dy+P.y<=.5*w*K&&A.setValue(P.y+e.dy)},onPanResponderTerminationRequest:function(t,e){return!0},onPanResponderRelease:function(t,e){var n=.5*w*K,i=1.05,r=e.dy+P.y;if(r*i<-n)r<-n||A.setValue(-n),P.y=-n,o(-n);else if(r*i>n)r>n||A.setValue(n),P.y=n,o(n);else{var a=r*i>n?n:r*i<-n?-n:r;P.y=a,o(a)}},onPanResponderTerminate:function(t,e){},onShouldBlockNativeResponder:function(t,e){return!0}})}),[a,w]);return Object(q.jsxs)(Q,{children:[Object(q.jsx)(Z,{colors:[J,X,G],locations:[0,.4964,.9929],children:Object(q.jsx)(et,Object(h.a)({style:{transform:[{translateY:A}]}},L.panHandlers))}),Object(q.jsx)($,{}),Object(q.jsx)(tt,{style:at.boxShadow,onLayout:function(t){v(t.nativeEvent.layout.height),z.setValue(w/e.length*(ct(u,e.length)-1))},children:lt(e,0,p,z,T,o,A,B,R,w)})]})}var ut,dt,bt,jt=n(11),gt=jt.a.div(ut||(ut=Object(l.a)(["\n\tborder: 2px solid;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding-bottom: 8px;\n\tbackground-color: #d3d3d3;\n\tborder-radius: 6px;\n\tmargin-bottom: 24px;\n\twidth: 50%;\n\theight: auto;\n"]))),ft=jt.a.div(dt||(dt=Object(l.a)(["\n\twidth: 100%;\n\tborder-bottom: 1px solid;\n"]))),pt=jt.a.h2(bt||(bt=Object(l.a)(["\n\ttext-align: left;\n\tmargin-left: 8px;\n"])));function xt(t){var e=t.title,n=t.children;return Object(q.jsxs)(gt,{children:[Object(q.jsx)(ft,{children:Object(q.jsx)(pt,{children:e})}),n]})}var Ot,mt=n(4),wt=n(6),vt=n.n(wt),yt=Object(jt.a)(wt.Text)(Ot||(Ot=Object(l.a)(["\n\tfont-size: 40px;\n"]))),St=function(t){var e=t.size;return Object(q.jsxs)(vt.a,{xmlns:"http://www.w3.org/2000/svg",height:e,viewBox:"0 0 24 24",width:e,fill:"#000000",children:[Object(q.jsx)(wt.Path,{d:"M0 0h24v24H0z",fill:"none"}),Object(q.jsx)(wt.Path,{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"})]})},Rt=function(t){var e=t.size,n=void 0===e?"32px":e,i=t.color,r=void 0===i?"pink":i;return Object(q.jsxs)(vt.a,{xmlns:"http://www.w3.org/2000/svg",height:n,width:n,viewBox:"0 0 24 24",fill:r,children:[Object(q.jsx)(wt.Path,{d:"M5 4 h12 v18 H6 z",fill:"white"}),Object(q.jsx)(wt.Path,{fill:r,d:"M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"})]})},kt=function(t){var e=t.size,n=void 0===e?32:e,i=t.color,r=void 0===i?"pink":i;return Object(q.jsx)(mt.a,{style:{width:n,height:1.5*n,overflow:"hidden",borderRadius:8},children:Object(q.jsxs)(vt.a,{height:2*n,width:n,children:[Object(q.jsx)(wt.Rect,{height:2*n,width:n,x:0,y:0,fill:r}),Object(q.jsx)(yt,{fill:"white",stroke:"white",fontSize:"32",fontWeight:"bold",fontFamily:"Bukhari Script",x:n/2,y:.9*n,textAnchor:"middle",children:"R"})]})})},Vt=(n(132),n(18),n(97),n(58));function Bt(t){for(var e=t,n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return i.forEach((function(t){return e=Object(s.withEhState)(t,e)})),e}var Et,Tt;function zt(t,e,n,i){return d.a.timing(t,{toValue:e,duration:n,useNativeDriver:!0,easing:i?Vt.a.linear:Vt.a.inOut(Vt.a.ease)})}var At,Pt,Lt,Nt,Mt,Ct=jt.a.div(Et||(Et=Object(l.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n"]))),Ft=Bt(jt.a.div(Tt||(Tt=Object(l.a)(["\n\t\theight: 16px;\n\t"]))),k),Ht=function(){var t=Object(s.useEhState)(U).theme,e=Object(i.useRef)(new d.a.Value(0)).current,n=e.interpolate({inputRange:[0,1],outputRange:[0,-170]});return Object(i.useEffect)((function(){d.a.loop(d.a.sequence([zt(e,1,2250),zt(e,1,750),zt(e,0,2250),zt(e,0,750)])).start()}),[]),Object(q.jsxs)(Ct,{children:[Object(q.jsx)(Ft,{}),Object(q.jsx)(kt,{size:100,color:"#f52d56"}),Object(q.jsx)(Ft,{}),Object(q.jsx)(d.a.View,{style:{zIndex:5,marginLeft:10,transform:[{translateY:n}]},children:Object(q.jsx)(Rt,{size:200,color:t.colors.aBlack})})]})},Dt=n(131),It=Bt(Object(jt.a)(d.a.View)(At||(At=Object(l.a)(["\n\t\tmargin-top: ",";\n\t\t/* padding-top: ","; */\n\t\tbackground-color: blue;\n\t\twidth: ",";\n\t\theight: ",";\n\t\tmargin-bottom: ",";\n\t\tmargin-right: ",";\n\t\talign-self: ",";\n\t"])),(function(t){return t.marginTop||"8px"}),(function(t){return t.paddingTop||"0px"}),(function(t){return t.width||"auto"}),(function(t){var e=t.height;return e||"auto"}),(function(t){var e=t.marginBottom;return e||"0px"}),(function(t){var e=t.marginRight;return e||"0px"}),(function(t){return t.alignSelf||"flex-start"})),U,k);function Wt(t,e,n){return d.a.loop(d.a.sequence([d.a.timing(t,{toValue:e,duration:1e3,useNativeDriver:!0}),d.a.timing(t,{toValue:n,duration:1e3,useNativeDriver:!0})]))}function Yt(t){var e=t.marginTop,n=t.paddingTop,r=t.width,a=t.height,o=t.marginBottom,c=t.marginRight,l=t.alignSelf,h=t.children,s=t.hasValue,u=Object(i.useRef)(new d.a.Value(.6)).current;return Object(i.useEffect)((function(){Wt(u,.2,.6).start()}),[]),s?h:Object(q.jsx)(It,{marginTop:e,paddingTop:n,width:r,height:a,marginBottom:o,marginRight:c,alignSelf:l,style:{opacity:u},children:h})}var Ut,qt,Jt,Xt,Gt;jt.a.div(Pt||(Pt=Object(l.a)(["\n\twidth: 100%;\n\theight: auto;\n\tbackground-color: #ffbdcb;\n"]))),Bt(jt.a.div(Lt||(Lt=Object(l.a)(["\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-between;\n\t\tpadding-horizontal: 20px;\n\t\twidth: 100%;\n\t\tmargin-top: 16px;\n\t"])))),Bt(Object(jt.a)(d.a.View)(Nt||(Nt=Object(l.a)(["\n\t\twidth: ",";\n\t\tmax-width: 350px;\n\t\theight: ",";\n\t\tmax-height: 450px;\n\t\tbackground-color: rgb(210, 210, 210);\n\t\t/* margin-horizontal: 10%; */\n\t\tmargin-vertical: 10%;\n\t"])),(function(t){return(0,t.pw)(91)}),(function(t){t.isPortrait;var e=t.pw;t.ph;return e(60)})),k,U),Bt(jt.a.h2(Mt||(Mt=Object(l.a)(["\n\t\tfont-weight: 600;\n\t\tfont-family: ",";\n\t\tcolor: ",";\n\t"])),(function(t){return t.theme.colors.font}),(function(t){return t.theme.colors.aBlack})),U);var Kt=jt.a.div(Ut||(Ut=Object(l.a)(["\n\twidth: 80%;\n\theight: 200px;\n\tdisplay: flex;\n\tflex-direction: row;\n\tborder: 2px solid;\n\tborder-radius: 6px;\n\tmargin-top: 16px;\n"]))),_t=jt.a.div(qt||(qt=Object(l.a)(["\n\twidth: ",";\n\theight: ",";\n\tbackground-color: gray;\n"])),(function(t){return t.width||"80%"}),(function(t){return t.height||"40px"}));function Qt(t){var e=t.width,n=t.height;t.marginTop;return Object(q.jsx)(Yt,{style:{marginTop:8},paddingTop:8,width:"200px",height:"40px",marginBottom:8,marginRight:8,hasValue:!1,children:Object(q.jsx)(_t,{width:e,height:n})})}var Zt,$t,te,ee,ne,ie=jt.a.div(Jt||(Jt=Object(l.a)(["\n\tdisplay: flex;\n\twidth: 20%;\n\theight: 100%;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-right: 1px solid;\n"]))),re=jt.a.div(Xt||(Xt=Object(l.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin: 8px;\n\twidth: 80%;\n"]))),ae=jt.a.div(Gt||(Gt=Object(l.a)(["\n\theight: ",";\n"])),(function(t){return t.height||"8px"}));function oe(t){return Object(Dt.a)(t),Object(q.jsxs)(Kt,{children:[Object(q.jsx)(ie,{children:Object(q.jsx)(St,{size:80})}),Object(q.jsxs)(re,{children:[Object(q.jsx)(Qt,{width:"90%"}),Object(q.jsx)(ae,{height:"16px"}),Object(q.jsx)(Qt,{width:"75%",height:"24px",marginTop:8}),Object(q.jsx)(ae,{}),Object(q.jsx)(Qt,{width:"60%",height:"20px",marginTop:8}),Object(q.jsx)(ae,{}),Object(q.jsx)(Qt,{width:"50%",height:"16px",marginTop:8}),Object(q.jsx)(ae,{}),Object(q.jsx)(Qt,{width:"50%",height:"16px",marginTop:8}),Object(q.jsx)(ae,{}),Object(q.jsx)(Qt,{width:"50%",height:"16px",marginTop:8})]})]})}var ce=jt.a.div(Zt||(Zt=Object(l.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n"]))),le=jt.a.div($t||($t=Object(l.a)(["\n\twidth: 100%;\n\tmargin-left: 5%;\n"]))),he=jt.a.p(te||(te=Object(l.a)(["\n\tcolor: #871f78;\n\ttext-align: left;\n"])));jt.a.div(ee||(ee=Object(l.a)(["\n\twidth: 40%;\n\theight: 60px;\n\tborder: 1px solid;\n\tborder-radius: 16px;\n\tdisplay: flex;\n\tflex-direction: row;\n\tbackground-color: white;\n"]))),jt.a.div(ne||(ne=Object(l.a)(["\n\twidth: 33.3333%;\n\theight: 100%;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-right: ",";\n\tborder-radius: ",";\n\tbackground-color: ",";\n"])),(function(t){return t.isLast?"0px":"1px solid"}),(function(t){var e=t.isLast,n=t.isFirst;return e?"0px 16px 16px 0px":n?"16px 0px 0px 16px":"0px"}),(function(t){return t.isSelected?"#96d197":"undefined"}));var se=function(){var t=Object(i.useState)(1),e=Object(c.a)(t,2),n=e[0];return e[1],Object(q.jsxs)(ce,{className:"App",children:[Object(q.jsx)("h1",{children:"React Native Web Portfolio"}),Object(q.jsxs)(le,{children:[Object(q.jsx)(he,{children:"Hi, I'm Reno. Below are some of the React (Native) components I have made in the past 1.5 years."}),Object(q.jsxs)(he,{children:["17-09: Working on extracting components from app work to this portfolio. ",Object(q.jsx)("br",{}),"Next items: selector for # of answers on vertical slider and animation components. ",Object(q.jsx)("br",{}),"Should be online by 20-09."]})]}),Object(q.jsxs)(xt,{title:"React Native + React Native web Answer Slider",children:[Object(q.jsx)("h3",{children:"How likely are you to recommend this product?"}),Object(q.jsx)(st,{answerArray:_[n]})]}),Object(q.jsx)(xt,{title:"NFC Scan Animation (Android)",children:Object(q.jsx)(Ht,{})}),Object(q.jsx)(xt,{title:"Twitter-style loading animation",children:Object(q.jsx)(oe,{})})]})},ue=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,200)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),i(t),r(t),a(t),o(t)}))};o.a.render(Object(q.jsx)(r.a.StrictMode,{children:Object(q.jsx)(se,{})}),document.getElementById("root")),ue()}},[[195,1,2]]]);
//# sourceMappingURL=main.edb1f73f.chunk.js.map