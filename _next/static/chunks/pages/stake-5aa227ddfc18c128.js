(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{54997:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stake",function(){return c(14027)}])},38389:function(a,b,c){"use strict";var d=c(85893),e=c(61953),f=c(36336),g=c(29630),h=c(70754);c(67294);var i=function(a){var b=a.state;return(0,d.jsx)(e.Z,{children:(0,d.jsx)(f.Z,{sx:{textAlign:"center"},children:b.provider&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g.Z,{variant:"overline",sx:{ma:2},children:"string"==typeof b.isLoading?b.isLoading:"Querying XEN Smart Contract"}),(0,d.jsx)("div",{style:{display:"block"},children:(0,d.jsx)(h.Z,{})})]})})})};b.Z=i},70431:function(a,b,c){"use strict";var d=c(85893),e=c(81506),f=c(70754),g=function(a){var b=a.open,c=a.onClose;return(0,d.jsx)(e.Z,{sx:{color:"#fff",zIndex:function(a){return a.zIndex.drawer+1}},open:b,onClick:c,children:(0,d.jsx)(f.Z,{color:"inherit"})})};b.Z=g},73942:function(a,b,c){"use strict";var d=c(85893),e=c(61953),f=c(36336),g=c(29630);c(67294);var h=c(74297),i=function(a){var b=a.state,c=a.requireAuthorized;return(0,d.jsx)(e.Z,{children:(0,d.jsx)(f.Z,{sx:{textAlign:"center"},children:(!b.provider||c&&!b.accounts)&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g.Z,{variant:"body1",sx:{m:2},children:"Please connect Web3 wallet to interact with XEN"}),(0,d.jsx)(h.Z,{style:{m:2}})]})})})};b.Z=i},14027:function(a,b,c){"use strict";c.r(b);var d=c(85893),e=c(9008),f=c.n(e),g=c(41664),h=c.n(g),i=c(214),j=c.n(i),k=c(62097),l=c(91359),m=c(79072),n=c(86070),o=c(80562),p=c(74065),q=c(29618),r=c(29630),s=c(47028),t=c(61953),u=c(36336),v=c(49837),w=c(59742),x=c(63225),y=c(62026),z=c(75084),A=c(9144),B=c(12195),C=c(67294),D=c(9662),E=c(93076),F=c(47161),G=c(6731),H=c(38389),I=c(70431),J=c(73942),K=c(11163),L=c.n(K),M=c(69773),N=c(23508),O=function(a){var b,c,e,g,i,K,O,P=a.contractAddress,Q=a.contractABI,R=a.deployedUrl,S=a.isLarge,T=(0,k.Z)(),U=(0,C.useContext)(D.S),V=U[0],W=U[1],X=(0,C.useState)(100),Y=X[0],Z=X[1],$=(0,C.useState)(null===(b=V.user)|| void 0===b?void 0:b.balance),_=$[0],aa=$[1],ab=(0,C.useState)(0),ac=ab[0],ad=ab[1],ae=(0,C.useState)(!1),af=ae[0],ag=ae[1],ah=(0,E.$)(V,W,P,Q),ai=ah.stake,aj=ah.withdraw;(0,C.useEffect)(function(){var a,b;ad(1e3*((null===(a=V.user.stakeInfo)|| void 0===a?void 0:a.maturityTs)||0)),Z((null===(b=V.user.stakeInfo)|| void 0===b?void 0:b.term)||0)},[V.user.stakeInfo,V.accounts]);var ak,al,am,an=V.accounts&&V.accounts.length>0,ao=function(a){ai(_,Y)},ap=function(a){aj()},aq=function(a){aa(parseInt(a.target.value||"0"))},ar=function(a){Z(parseInt(a.target.value||"0"))},as=function(){ag(!1)},at=null===(c=V.global)|| void 0===c?void 0:c.currentAPY,au=(null===(e=V.user)|| void 0===e?void 0:e.balance)>0&&!(null===(g=V.user)|| void 0===g?void 0:g.stakeInfo),av=Date.now()>ac,aw=function(){return 100*(1-(ac-Date.now())/(864e5*Y))},ax=null===(i=V.user.stakeInfo)|| void 0===i?void 0:null===(K=i.amount)|| void 0===K?void 0:K.div(G.O$.from("1000000000000000000")).toNumber(),ay=function(){var a,b;return(0,d.jsx)(l.Z,{children:(0,d.jsxs)(m.ZP,{container:!0,direction:"row",spacing:2,children:[(0,d.jsx)(m.ZP,{item:!0,xs:6,sx:{textAlign:"right"},children:"Amount:"}),(0,d.jsx)(m.ZP,{item:!0,xs:6,children:(0,F.N6)(ax)}),(0,d.jsx)(m.ZP,{item:!0,xs:6,sx:{textAlign:"right"},children:"Term, days:"}),(0,d.jsx)(m.ZP,{item:!0,xs:6,children:(0,F.N6)(null===(a=V.user.stakeInfo)|| void 0===a?void 0:a.term)}),(0,d.jsx)(m.ZP,{item:!0,xs:6,sx:{textAlign:"right"},children:"APY:"}),(0,d.jsx)(m.ZP,{item:!0,xs:6,children:(0,F._x)(null===(b=V.user.stakeInfo)|| void 0===b?void 0:b.apy)}),(0,d.jsx)(m.ZP,{item:!0,xs:12,sx:{textAlign:"center"},children:(0,d.jsx)(n.Z,{variant:"determinate",color:100===aw()?"success":"inherit",value:aw(),sx:{width:"80%",margin:"auto"}})})]})})},az=function(){var a,b,c,e,f,g=null==ax?void 0:ax.toLocaleString(),h=(0,F.N6)(null===(a=V.user.stakeInfo)|| void 0===a?void 0:a.term),i=(0,F._x)(null===(b=V.user.stakeInfo)|| void 0===b?void 0:b.apy).replace("%","%25"),j="Staked ".concat(g," for ").concat(h," days.%0AExpected yield: ").concat(i);return(0,d.jsx)(d.Fragment,{children:(null===(c=V.user)|| void 0===c?void 0:c.stakeInfo)&&(0,d.jsx)(o.Z,{href:(e=L().asPath,f=j,"https://twitter.com/intent/tweet?text=".concat(f,"%0A%23XENCrypto%0AStake and grow XEN: ").concat(R).concat(e)),target:"_blank",rel:"noreferrer",children:(0,d.jsx)(M.Z,{})})})},aA=function(){return(0,d.jsxs)(p.Z,{elevation:0,sx:{backgroundColor:"unset"},children:[(0,d.jsx)(q.Z,{expandIcon:(0,d.jsx)(N.Z,{}),"aria-controls":"stake-terms-content",id:"stake-terms-header",children:(0,d.jsx)(r.Z,{children:"Stake Terms"})}),(0,d.jsx)(s.Z,{children:(0,d.jsx)(r.Z,{variant:"body2",sx:{fontSize:14},children:"Withdraw original Stake amount plus Yield at any time after Maturity Date, or original Stake amount with 0 (zero) Yield at anu time before Maturity Date. One stake at a time per one address."})})]})};return(0,d.jsxs)(t.Z,{className:j().container,sx:{padding:{xs:0,md:"0 2rem"}},children:[(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:"XEN Crypto | Stake"}),(0,d.jsx)("meta",{name:"description",content:"XEN Crypto App"}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),V.isLoading&&(0,d.jsx)(H.Z,{state:V}),(V.isProcessing||af)&&(0,d.jsx)(I.Z,{open:V.isProcessing,onClose:as}),!V.isLoading&&!an&&(0,d.jsx)(J.Z,{state:V,requireAuthorized:!0}),!V.isLoading&&an&&(0,d.jsx)(t.Z,{children:(0,d.jsx)(u.Z,{children:(0,d.jsxs)(v.Z,{style:{borderRadius:25,maxWidth:600,margin:"auto",padding:"1rem",boxShadow:"0 25px 50px -12px rgba(0,0,0,0.25)"},children:[(0,d.jsx)(w.Z,{title:V.user.stakeInfo?"Stake Details":"Stake XEN",subheader:"Current APY @ ".concat(at,"%"),titleTypographyProps:{variant:"h6",sx:{fontWeight:"bold"}},action:(0,d.jsx)(az,{}),sx:{textAlign:"center"}}),V.user.stakeInfo&&(0,d.jsx)(ay,{}),!au&&V.user.stakeInfo&&(0,d.jsx)(m.ZP,{item:!0,xs:12,sx:{textAlign:"center",my:2},children:!av&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.Z,{variant:"body2",children:["Wait ",function(a){if(!a)return"-";if(Date.now()>a)return"0";var b=a-Date.now()<864e5,c=(0,B.Z)(new Date,new Date(a||Date.now()),{unit:"day",roundingMethod:"ceil"});return b?"less than "+c:c}(ac)," until stake Maturity Date"]}),(0,d.jsx)(r.Z,{variant:"body2",children:"OR"}),(0,d.jsx)(r.Z,{variant:"body2",children:"end stake early without penalty"})]})}),!au&&!V.user.stakeInfo&&(0,d.jsx)(m.ZP,{item:!0,xs:12,sx:{textAlign:"center",my:2},children:"You need to mint or obtain some XEN to stake it"}),au&&(0,d.jsx)(l.Z,{children:(0,d.jsxs)(m.ZP,{container:!0,direction:"row",spacing:2,sx:{alignItems:"center"},children:[(0,d.jsx)(m.ZP,{item:!0,xs:6,sx:{textAlign:"right"},children:"Amount:"}),(0,d.jsx)(m.ZP,{item:!0,xs:6,children:(0,d.jsx)(x.Z,{type:"string",value:_,size:S?"medium":"small",error:_<1||_>(null===(O=V.user)|| void 0===O?void 0:O.balance),helperText:(ak=_)<1?"Min amount is 1 XEN":ak>(null===(al=V.user)|| void 0===al?void 0:al.balance)?"Amount is over balance":"",onChange:aq})}),(0,d.jsx)(m.ZP,{item:!0,xs:6,sx:{textAlign:"right"},children:"Term, days:"}),(0,d.jsx)(m.ZP,{item:!0,xs:6,children:(0,d.jsx)(x.Z,{type:"string",size:S?"medium":"small",value:Y,error:Y<1||Y>1e3,helperText:(am=Y)<1?"Min term is 1 day":am>1e3?"Max term is 1,000 days":"",onChange:ar})}),(0,d.jsx)(m.ZP,{item:!0,xs:6,sx:{textAlign:"right",fontWeight:"bold"},children:"Yield:"}),(0,d.jsx)(m.ZP,{item:!0,xs:6,sx:{color:T.palette.success.main,fontWeight:"bold"},children:(0,F.N6)(Math.floor(at*Y*_/36500))}),(0,d.jsx)(m.ZP,{item:!0,xs:6,sx:{textAlign:"right"},children:"Maturity:"}),(0,d.jsx)(m.ZP,{item:!0,xs:6,children:new Date(Date.now()+864e5*Y).toLocaleDateString()}),(0,d.jsx)(m.ZP,{item:!0,xs:12,sx:{textAlign:"center"},children:(0,d.jsx)(aA,{})})]})}),(0,d.jsxs)(y.Z,{sx:{justifyContent:"center",mt:2},children:[V.user.stakeInfo&&(0,d.jsx)(z.Z,{variant:"contained",style:{borderRadius:25,fontSize:"1rem",margin:8},onClick:ap,children:av?"End Stake":"End Stake Early"}),au&&(0,d.jsx)(z.Z,{variant:"contained",style:{borderRadius:25,fontSize:"1rem"},disabled:!au,onClick:ao,children:"Stake"}),!au&&!V.user.stakeInfo&&(0,d.jsxs)(A.Z,{direction:"row",children:[(0,d.jsx)(h(),{href:"/mint",passHref:!0,children:(0,d.jsx)(z.Z,{variant:"text",children:"Mint"})}),(0,d.jsx)(h(),{href:"",passHref:!0,children:(0,d.jsx)(z.Z,{variant:"text",children:"Buy"})})]})]}),au&&(0,d.jsx)(l.Z,{children:(0,d.jsx)(r.Z,{variant:"body2",sx:{textAlign:"center",fontSize:14},dangerouslySetInnerHTML:{__html:"By clicking <em>Stake</em> button above and subsequent signing of <em>Stake</em> transaction \nwith your private key you agree to the terms above\n"}})})]})})})]})};b.default=O},47161:function(a,b,c){"use strict";c.d(b,{N6:function(){return e},"_Y":function(){return g},"_x":function(){return f}});var d=c(6731),e=function(a){return null==a?"-":d.O$.isBigNumber(a)?a.toNumber().toLocaleString():Number.isFinite(a)?a.toLocaleString():a},f=function(a){return null==a?"-":d.O$.isBigNumber(a)?(a.toNumber()/100).toLocaleString([],{style:"percent",maximumFractionDigits:2}):(Number.isFinite(a),(a/100).toLocaleString([],{style:"percent",maximumFractionDigits:2}))},g=function(a){return null==a?"-":d.O$.isBigNumber(a)?(a.toNumber()/1e3).toLocaleString([],{style:"percent",maximumFractionDigits:2}):Number.isFinite(a)?(a/1e3).toLocaleString([],{style:"percent",maximumFractionDigits:2}):a/1e3}}},function(a){a.O(0,[898,597,992,774,888,179],function(){var b;return a(a.s=54997)}),_N_E=a.O()}])