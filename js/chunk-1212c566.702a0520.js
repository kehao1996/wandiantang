(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1212c566"],{"3ff5":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"deal"},t._l(t.List,function(e,s){return n("div",{key:s,staticClass:"box"},[n("p",[t._v(t._s(e.CreateTime))]),n("div",{staticClass:"box_j"},[n("div",{staticClass:"heng"},[n("p",[t._v("段位:")]),n("p",{staticClass:"last"},[t._v(t._s(e.DuanStart)+t._s(e.DuanEnd))])]),n("div",{staticClass:"heng"},[n("p",[t._v("要求:")]),n("p",{staticClass:"last"},[t._v(t._s(e.Ask))])]),n("div",{staticClass:"heng",staticStyle:{display:"flex","align-items":"center"}},[n("p",[t._v("英雄个数:")]),n("p",{staticClass:"last"},[t._v(t._s(e.YxCount))]),n("p",[t._v("铭文等级:")]),n("p",{staticClass:"last"},[t._v(t._s(e.MwLevel))])]),n("div",{staticClass:"heng"},[n("p",[t._v("价钱:")]),n("p",{staticClass:"last"},[t._v(t._s(e.Prize))])]),n("div",{staticClass:"deal_buttom",on:{click:function(n){return t.lingqu(e.Id)}}},[t._v("领取")])])])}),0)},a=[],i=n("7618"),o=(n("fd24"),n("c428")),c=n("60a3"),r=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},t(e,n)};return function(e,n){function s(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}}(),l=function(t,e,n,s){var a,o=arguments.length,c=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"===("undefined"===typeof Reflect?"undefined":Object(i["a"])(Reflect))&&"function"===typeof Reflect.decorate)c=Reflect.decorate(t,e,n,s);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(c=(o<3?a(c):o>3?a(e,n,c):a(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.title="任务大厅",e.active=0,e.CreateTime="",e.DuanStart="",e.DuanEnd="",e.Ask="",e.YxCount="",e.MwLevel="",e.Prize="",e.hideServ=!0,e.signature=null,e.List=[],e}return r(e,t),e.prototype.mounted=function(){var t=this;Object(o["d"])({}).then(function(e){console.log(e),e.data.Status&&(t.List=e.data.List)})},e.prototype.lingqu=function(t){var e=this;console.log(t),Object(o["a"])({id:t,wxh:window.sessionStorage.getItem("name")}).then(function(t){console.log(t),200==t.data.Status?(e.$notify({message:"领取成功，审核中",duration:1e3,background:"#51e546"}),e.$toast({type:"success",message:"领取成功，审核中"})):(e.$notify(t.data.Msg),e.$toast({type:"fail",message:t.data.Msg}))})},e=l([c["a"]],e),e}(c["b"]),f=u,p=f,d=(n("ea87"),n("2877")),v=Object(d["a"])(p,s,a,!1,null,"b8c88fec",null);e["default"]=v.exports},d36a:function(t,e,n){},ea87:function(t,e,n){"use strict";var s=n("d36a"),a=n.n(s);a.a}}]);