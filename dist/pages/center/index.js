(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[13],{42:function(e,t,a){e.exports=a.p+"imgs/head.png"},61:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(12),s=a(8),r=a(6),i=a(42),l=a.n(i),o=(a(61),a(16)),j=a.n(o),x=a(2);function b(){var e=Object(s["useState"])(l.a),t=Object(n["a"])(e,2),a=t[0],c=t[1],i=function(e){console.log(e.detail.avatarUrl,"===>\u5934\u50cf");var t=e.detail.avatarUrl;j.a.setStorageSync("avatarUrl",t),c(t)};return Object(o["useDidShow"])((function(){var e=j.a.getStorageSync("avatarUrl");e&&c(e)})),Object(x["jsx"])(x["Fragment"],{children:Object(x["jsxs"])(r["View"],{children:[Object(x["jsxs"])(r["View"],{className:"head",children:[Object(x["jsx"])(r["Button"],{openType:"chooseAvatar",className:"head_img",onChooseAvatar:i,children:Object(x["jsx"])(r["Image"],{src:a})}),Object(x["jsx"])(r["View"],{className:"head_num",children:"\u6e38\u5ba2"})]}),Object(x["jsxs"])(r["View"],{className:"content",children:[Object(x["jsx"])(h,{text:"v1.0.0",url:"1",title:"\u7248\u672c\u53f7"}),Object(x["jsx"])(h,{text:"v1.0.0",url:"1",title:"\u7248\u672c\u53f7"}),Object(x["jsx"])(h,{text:"v1.0.0",url:"1",title:"\u7248\u672c\u53f7"})]}),Object(x["jsx"])(r["View"],{className:"foot",children:"--\u5b66\u4e60\u4f7f\u7528\uff0c\u4ec5\u4f9b\u53c2\u8003--"})]})})}function h(e){var t=e.title,a=e.text,c=e.url,n=function(){j.a.navigateTo({url:c})};return Object(x["jsx"])(x["Fragment"],{children:Object(x["jsxs"])(r["View"],{className:"card",onClick:n,children:[Object(x["jsxs"])(r["View"],{children:[t,"\uff1a",a]}),Object(x["jsx"])(r["Image"],{src:"https://cdn-ssl.meb.com/mwa/v2.4.8/arrow-right.png",mode:"widthFix"})]})})}var d={navigationBarTitleText:"\u4e2a\u4eba\u4e2d\u5fc3",enableShareAppMessage:!0};b.enableShareAppMessage=!0;Page(Object(c["createPageConfig"])(b,"pages/center/index",{root:{cn:[]}},d||{}))}},[[70,0,1,2]]]);