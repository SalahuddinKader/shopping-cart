(this["webpackJsonpe-cart"]=this["webpackJsonpe-cart"]||[]).push([[0],{20:function(e,t,a){},22:function(e,t,a){e.exports=a.p+"static/media/bars-solid.b3f49afd.svg"},23:function(e,t,a){e.exports=a.p+"static/media/times-solid.2c5552a1.svg"},24:function(e,t,a){e.exports=a.p+"static/media/shopping-cart-solid.8bf1af37.svg"},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){e.exports=a(78)},51:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=(a(51),a(1)),s=a(2),m=a(30),i=a(11);a(27);i.a.configure();var u=Object(n.createContext)(),d=function(e){var t=Object(n.useState)([{_id:"1",title:"Nike Shoes 01",src:"https://www.upsieutoc.com/images/2020/06/27/img1.jpg",description:"Best shoes in the world, if you are not agree up to you !!! ",content:"Best shoes in the world, if you are not agree up to you !!! ",price:23,colors:["red","black","crimson","teal"],count:1,review:"(2 Reviews)"},{_id:"2",title:"Nike Shoes 02",src:"https://www.upsieutoc.com/images/2020/06/27/img2.jpg",description:"Best shoes in the world, if you are not agree up to you !!! ",content:"Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",price:19,colors:["red","crimson","teal"],count:1,review:"(7 Reviews)"},{_id:"3",title:"Nike Shoes 03",src:"https://www.upsieutoc.com/images/2020/06/27/img3.jpg",description:"Best shoes in the world, if you are not agree up to you !!! ",content:"Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",price:50,colors:["lightblue","white","crimson","teal"],count:1,review:"(3Reviews)"},{_id:"4",title:"Nike Shoes 04",src:"https://www.upsieutoc.com/images/2020/06/27/img4.jpg",description:"Best shoes in the world, if you are not agree up to you !!! ",content:"Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",price:15,colors:["orange","black","crimson","teal"],count:1,review:"(23 Reviews)"},{_id:"5",title:"Nike Shoes 05",src:"https://www.upsieutoc.com/images/2020/06/27/img5.jpg",description:"Best shoes in the world, if you are not agree up to you !!! ",content:"Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",price:10,colors:["orange","black","crimson","teal"],count:1,review:"(5 Reviews)"},{_id:"6",title:"Nike Shoes 06",src:"https://www.upsieutoc.com/images/2020/06/27/img6.jpg",description:"Best shoes in the world, if you are not agree up to you !!! ",content:"Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",price:17,colors:["orange","black","crimson","teal"],count:1,review:"(12 Reviews)"}]),a=Object(s.a)(t,1)[0],c=Object(n.useState)([]),l=Object(s.a)(c,2),o=l[0],d=l[1],p=Object(n.useState)([]),E=Object(s.a)(p,2),b=E[0],g=E[1],v=Object(n.useState)([]),f=Object(s.a)(v,2),h=f[0],N=f[1],w=Object(n.useState)([]),y=Object(s.a)(w,2),j=y[0],O=y[1],C=Object(n.useState)(0),k=Object(s.a)(C,2),x=k[0],S=k[1],A=function(){var e=o.reduce((function(e,t){return e+t.price*t.count}),0);S(e)};return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("dataCart"));e&&d(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("dataCart",JSON.stringify(o))}),[o]),r.a.createElement("div",null,r.a.createElement(u.Provider,{value:{products:a,addCart:function(e){if(o.every((function(t){return t._id!==e}))){var t=a.filter((function(t){return t._id===e}));i.a.success(" Product Added to bag",{autoClose:1e3}),d((function(e){return[].concat(Object(m.a)(e),Object(m.a)(t))}))}else i.a.warning("This product has been added to bag",{autoClose:3e3})},cart:o,handleIncrement:function(e){o.forEach((function(t){t._id===e&&(t.count+=1)})),g({cart:b}),A()},handleDecrement:function(e){o.forEach((function(t){t._id===e&&(1===t.count?t.count=1:t.count-=1)})),N({cart:h}),A()},handleRemove:function(e){o.forEach((function(t,a){t._id===e&&o.splice(a,1)})),O({cart:j})},total:x,handleTotal:A,removeAll:function(){d([])}}},e.children))},p=function(e){var t=e.colors;return r.a.createElement("div",{className:"colors"},t.colors.map((function(e,t){return r.a.createElement("button",{key:t,style:{background:e}})})))},E=(a(20),a(22)),b=a.n(E),g=a(23),v=a.n(g),f=a(24),h=a.n(f),N=(a(32),function(){var e=Object(n.useContext)(u).cart,t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],l=a[1],m=function(){l(!c)};return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("div",{className:"menu",onClick:m},r.a.createElement("img",{src:b.a,alt:" Menu",width:"20"})),r.a.createElement("div",{className:"logo"},r.a.createElement("h1",null,r.a.createElement(o.b,{to:"/"},"Nike"))),r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",{className:c?"toggle":""},r.a.createElement("li",{onClick:m},r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("li",{onClick:m},r.a.createElement(o.b,{to:"/product"},"Product")),r.a.createElement("li",{onClick:m},r.a.createElement(o.b,{to:"/contact"},"Contact")),r.a.createElement("li",{onClick:m},r.a.createElement(o.b,{to:"/about"},"About")),r.a.createElement("li",{onClick:m},r.a.createElement(o.b,{to:"/LoginRegister"},"Sign in / Join us")),r.a.createElement("li",{className:"close",onClick:m},r.a.createElement("img",{src:v.a,alt:"",width:"15"}))),r.a.createElement("div",null),r.a.createElement("div",{className:"nav-cart"},r.a.createElement("span",null,e.length),r.a.createElement(o.b,{to:"/cart"},r.a.createElement("img",{src:h.a,alt:" CartIcon",width:"20"}))))))}),w=function(e){var t=Object(n.useContext)(u),a=t.products,c=t.addCart,l=Object(n.useState)([]),m=Object(s.a)(l,2),i=m[0],d=m[1];return Object(n.useEffect)((function(){var t=a.filter((function(t){return t._id===e.match.params.id}));d(t)}),[]),r.a.createElement("div",null,r.a.createElement(N,null),i.map((function(e){return r.a.createElement("div",{className:"details",key:e._id},r.a.createElement("img",{src:e.src,alt:""}),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,e.title),r.a.createElement("span",null,"\xa3",e.price)),r.a.createElement(p,{colors:e}),r.a.createElement("p",null,e.description),r.a.createElement("p",null,e.content),r.a.createElement(o.b,{to:"/product",className:"cart",style:{background:"crimson"}},"Back To Product"),r.a.createElement(o.b,{to:"/cart",className:"cart",onClick:function(){return c(e._id)}},"Add to bag")))})))},y=(a(34),function(){var e=Object(n.useContext)(u).products;return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("div",{id:"product"},e.map((function(e,t){return r.a.createElement("div",{className:"card",key:t},r.a.createElement(o.b,{to:"/product/".concat(e._id)},r.a.createElement("img",{src:e.src,alt:""})),r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,r.a.createElement(o.b,{to:"/product/".concat(e._id)},e.title)),r.a.createElement("span",{style:{fontSize:18,fontWeight:"bold"}},"\xa3",e.price*e.count),r.a.createElement("p",null,e.description),r.a.createElement("strong",{style:{fontSize:20}},e.review)))}))))}),j=a(3),O=(a(35),a(25)),C=a.n(O);i.a.configure();var k=function(){var e=Object(n.useContext)(u),t=e.products,a=e.cart,c=e.handleIncrement,l=e.handleDecrement,s=e.handleRemove,m=e.total,d=e.handleTotal,E=e.removeAll;return Object(n.useEffect)((function(){d()}),[]),0===a.length?r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("h2",{style:{textAlign:"center"}},"Your Cart is Currently Empty")):r.a.createElement("div",null,r.a.createElement(N,null),a.map((function(e){return r.a.createElement("div",{className:"details cart",key:e._id},r.a.createElement("img",{className:"cart-img",src:e.src,alt:""}),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,e.title),r.a.createElement("span",null,"\xa3",e.price*e.count)),r.a.createElement(p,{colors:e}),r.a.createElement("p",null,e.description),r.a.createElement("p",null,e.content),r.a.createElement("div",{className:"amount"},r.a.createElement("button",{className:"count",onClick:function(){return l(e._id)}},"-"),r.a.createElement("span",null,e.count),r.a.createElement("button",{className:"count",onClick:function(){return c(e._id)}},"+"))),r.a.createElement("div",{className:"delete",onClick:function(){return s(e._id)}},"Remove"))})),r.a.createElement("div",{className:"total-checkout"},r.a.createElement("h3",null,"Total: \xa3",m)),r.a.createElement("div",{className:"total"},r.a.createElement("div",{className:"total"},r.a.createElement(o.b,{to:"/product",style:{background:"crimson"}},"Continue Shopping")),r.a.createElement(C.a,{stripeKey:"pk_test_51HAlmnIfOyLdLwzAz2piAWlcCJcAPATSEkCyxcUG7m1F80xXqr4wd8FoFWqYEfXUUEEgDGBx5G9aXG4IenAw46fh00x1Qgnr7v",token:function(e){var a={token:e,products:t,total:m};return fetch("http://localhost:5000/payment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){Object(i.a)(" Payment has been processed",{type:"success"}),E(),console.log(e)})).catch((function(){Object(i.a)("Something went wrong",{type:"error"})}))},name:"NIKE",billingAddress:!0,shippingAddress:!0},r.a.createElement("button",{className:"btn btn-primary btn-lg"},"Checkout"))))},x=function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("h1",null,"Home "),r.a.createElement("h2",null,"Under Construction"))},S=a(5),A=a.n(S),_=a(13),P=a(10),I=a(6),T=a(14),U=a.n(T);a(75);var q=function(){var e=Object(n.useState)({name:"",email:"",password:"",password2:""}),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(" "),o=Object(s.a)(l,2),m=o[0],i=o[1],u=function(e){var t=e.target,n=t.name,r=t.value;c(Object(I.a)(Object(I.a)({},a),{},Object(P.a)({},n,r))),i("")},d=function(){var e=Object(_.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,U.a.post("/users/register",{username:a.name,email:a.email,password:a.password,password2:a.password2});case 4:n=e.sent,c({name:"",email:"",password:"",password2:""}),i(n.data.msg),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),e.t0.response.data.msg&&i(e.t0.response.data.msg);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-6 m-auto"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("div",{className:" alert-warning alert-dismissible fade show err-btn"},m),r.a.createElement("h1",{className:"text-center mb-3"},r.a.createElement("i",{className:"fas fa-user-plus"})," Join us"),r.a.createElement("form",{onSubmit:d},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"name",id:"register-name",name:"name",className:"form-control",placeholder:"Enter Name",value:a.name,onChange:u,username:a.name})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",id:"register-email",name:"email",className:"form-control",placeholder:"Enter Email",value:a.email,onChange:u})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",id:"register-password",name:"password",className:"form-control",placeholder:" Create Password",value:a.password,autoComplete:"true",onChange:u})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Confirm Password"),r.a.createElement("input",{type:"password",id:"password2",name:"password2",className:"form-control",placeholder:"Confirm Password",value:a.password2,autoComplete:"true",onChange:u})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block bg-primary"},"Join us")),r.a.createElement("p",{className:"lead mt-4"},"Have An Account? ",r.a.createElement("a",{href:"/login"},"Sign in"))))))};var R=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=(t[0],t[1],Object(n.useState)({email:""})),c=Object(s.a)(a,2),l=c[0],o=c[1],m=Object(n.useState)(" "),i=Object(s.a)(m,2),u=i[0],d=i[1],p=function(){var e=Object(_.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,U.a.post("/users/resetpassword",{email:l.email});case 4:a=e.sent,console.log(a),o({email:""}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),e.t0.response.data.msg&&d(e.t0.response.data.msg);case 12:console.log(u);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("div",{className:"Reset Password"},r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-6 m-auto"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("div",{className:" alert-warning alert-dismissible fade show err-btn"},u),r.a.createElement("h2",{className:"text-center mb-3 "},r.a.createElement("i",{className:"fas fa-lock-open"})," Reset Password"),r.a.createElement("form",{onSubmit:p},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",id:"reset-email",name:"email",className:"form-control",placeholder:"Enter Email",required:!0,value:l.email,onChange:function(e){var t=e.target,a=t.name,n=t.value;o(Object(I.a)(Object(I.a)({},l),{},Object(P.a)({},a,n))),d("")}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block bg-primary"},"Reset Password",r.a.createElement("a",{href:"/login"}))))))))};var D=function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-6 m-auto"},r.a.createElement("div",{className:"card card-body text-center"},r.a.createElement("h1",null,r.a.createElement("i",{className:"fab fa-node-js fa-3x"})),r.a.createElement("p",null,"Create an account or sign in"),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/Register",className:"btn btn-primary btn-block mb-2"},"Join us")),r.a.createElement("div",null,r.a.createElement("a",{href:"/Login",className:"btn btn-secondary btn-block"},"Sign in"))))))};var L=function(e){var t=e.setIsLogin,a=Object(n.useContext)(u).cart,c=Object(n.useState)(!1),l=Object(s.a)(c,2),m=l[0],i=l[1],d=function(){i(!m)};return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("div",{className:"menu",onClick:d},r.a.createElement("img",{src:b.a,alt:" Menu",width:"20"})),r.a.createElement("div",{className:"logo"},r.a.createElement("h1",null,r.a.createElement(o.b,{to:"/"}," Welcome Nike"))),r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",{className:m?"toggle":""},r.a.createElement("li",{onClick:d},r.a.createElement(o.b,{to:"/login"},"Home")),r.a.createElement("li",{onClick:d},r.a.createElement(o.b,{to:"/login/products"},"Product")),r.a.createElement("li",{onClick:d},r.a.createElement(o.b,{to:"/login/contact"},"Contact")),r.a.createElement("li",{onClick:d},r.a.createElement(o.b,{onClick:function(){localStorage.clear(),t(!1)},to:"/login"},"Logout")),r.a.createElement("li",{onClick:d},r.a.createElement(o.b,{to:"/login/myaccount"},"My Account")),r.a.createElement("li",{className:"close",onClick:d},r.a.createElement("img",{src:v.a,alt:"",width:"15"}))),r.a.createElement("div",{className:"nav-cart"},r.a.createElement("span",null,a.length),r.a.createElement(o.b,{to:"/login/dashCart"},r.a.createElement("img",{src:h.a,alt:" CartIcon",width:"20"}))),r.a.createElement("div",null,r.a.createElement("span",null," ")))))},B=function(){var e=Object(n.useContext)(u).products;return e?r.a.createElement("div",null,r.a.createElement("div",{id:"product"},e.map((function(e,t){return r.a.createElement("div",{className:"card",key:t},r.a.createElement(o.b,{to:"/login/products/".concat(e._id)},r.a.createElement("img",{src:e.src,alt:""})),r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,r.a.createElement(o.b,{to:"/login/products/".concat(e._id)},e.title)),r.a.createElement("span",null,"\xa3",e.price*e.count),r.a.createElement("p",null,e.description),r.a.createElement("strong",{style:{fontSize:26}},e.review)))})))):"Loading..."},J=function(e){var t=Object(n.useContext)(u),a=t.products,c=t.addCart,l=Object(n.useState)([]),m=Object(s.a)(l,2),i=m[0],d=m[1];return Object(n.useEffect)((function(){var t=a.filter((function(t){return t._id===e.match.params.id}));d(t)}),[]),i?r.a.createElement("div",null,i.map((function(e){return r.a.createElement("div",{className:"details",key:e._id},r.a.createElement("img",{src:e.src,alt:""}),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,e.title),r.a.createElement("span",null,"\xa3",e.price)),r.a.createElement(p,{colors:e}),r.a.createElement("p",null,e.description),r.a.createElement("p",null,e.content),r.a.createElement(o.b,{to:"/login/products",className:"cart",style:{background:"crimson"}},"Back To Product"),r.a.createElement(o.b,{to:"/login/dashCart",className:"cart",onClick:function(){return c(e._id)}},"Add to bag")))}))):"Loading..."};var W=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Home Component is empty, ",r.a.createElement("strong",null,"Choose Product")))},H=(a(44),function(){var e=Object(n.useState)({name:"",lastname:"",email:"",message:"",mobile:"",sent:!1,buttonText:"Send Message"}),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(" "),o=Object(s.a)(l,2),m=o[0],i=o[1],u=function(e){var t=e.target,n=t.name,r=t.value;c(Object(I.a)(Object(I.a)({},a),{},Object(P.a)({},n,r))),i("")},d=function(){var e=Object(_.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,U.a.post("/api/forma",{name:a.name,lastname:a.lastname,email:a.email,mobile:a.mobile,message:a.message});case 4:n=e.sent,c({sent:!0}),c({name:"",email:"",lastname:"",mobile:"",message:""}),i(n.data.msg),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),e.t0.response.data.msg&&i(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-6 m-auto"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("div",{className:" alert-success alert-dismissible fade show err-btn"},m),r.a.createElement("h1",{className:"text-center mb-3"},r.a.createElement("i",{className:"fas fa-blender-phone"})," Contact"),r.a.createElement("form",{onSubmit:d},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Firstname"),r.a.createElement("input",{type:"text",id:"contact-firstname",name:"name",className:"form-control",placeholder:"Firstname",value:a.name,onChange:u,username:a.name,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"lastname"),r.a.createElement("input",{type:"text",id:"contact-lastname",name:"lastname",className:"form-control",placeholder:"Lastname",value:a.lastname,onChange:u})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",id:"contact-email",name:"email",className:"form-control",placeholder:"Email",value:a.email,onChange:u,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Phone"),r.a.createElement("input",{type:"text",id:"contact-phone",name:"mobile",className:"form-control",placeholder:"Phone",value:a.mobile,onChange:u})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Message"),r.a.createElement("textarea",{className:"pl-1",name:"message",value:a.message,id:"",cols:"95",rows:"5",placeholder:"Message...",onChange:u,required:!0})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block bg-primary btn-button"},"Submit"))))))});i.a.configure();var F=function(){var e=Object(n.useContext)(u),t=e.products,a=e.cart,c=e.handleIncrement,l=e.handleDecrement,s=e.handleRemove,m=e.total,d=e.handleTotal,E=e.removeAll;return Object(n.useEffect)((function(){d()}),[]),0===a.length?r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"center"}},"Your Cart is Currently Empty")," "):r.a.createElement("div",null,a.map((function(e){return r.a.createElement("div",{className:"details cart",key:e._id},r.a.createElement("img",{className:"cart-img",src:e.src,alt:""}),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,e.title),r.a.createElement("span",null,"\xa3",e.price*e.count)),r.a.createElement(p,{colors:e}),r.a.createElement("p",null,e.description),r.a.createElement("p",null,e.content),r.a.createElement("div",{className:"amount"},r.a.createElement("button",{className:"count",onClick:function(){return l(e._id)}},"-"),r.a.createElement("span",null,e.count),r.a.createElement("button",{className:"count",onClick:function(){return c(e._id)}},"+"))),r.a.createElement("div",{className:"delete",onClick:function(){return s(e._id)}},"Remove"))})),r.a.createElement("div",{className:"total-checkout"},r.a.createElement("h3",null,"Total: \xa3",m)),r.a.createElement("div",{className:"total"},r.a.createElement("div",{className:"total"},r.a.createElement(o.b,{to:"/products",style:{background:"crimson"}},"Continue Shopping")),r.a.createElement(C.a,{stripeKey:"pk_test_51HAlmnIfOyLdLwzAz2piAWlcCJcAPATSEkCyxcUG7m1F80xXqr4wd8FoFWqYEfXUUEEgDGBx5G9aXG4IenAw46fh00x1Qgnr7v",token:function(e){var a={token:e,products:t,total:m};return fetch("http://localhost:5000/payment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){Object(i.a)(" Success! Check email for details",{type:"success"}),E(),console.log(e)})).catch((function(){Object(i.a)("Something went wrong",{type:"error"})}))},name:"NIKE",billingAddress:!0,shippingAddress:!0},r.a.createElement("button",{className:"btn btn-primary btn-lg"},"Checkout"))))};var X=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Under Construction"))};var M=function(e){var t=e.setIsLogin;return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(L,{setIsLogin:t}),r.a.createElement("section",null,r.a.createElement(j.a,{path:"/login",component:W,exact:!0}),r.a.createElement(j.a,{path:"/login/products",component:B,exact:!0}),r.a.createElement(j.a,{path:"/login/products/:id",component:J}),r.a.createElement(j.a,{path:"/login/contact",component:H,exact:!0}),r.a.createElement(j.a,{path:"/login/dashCart",component:F,exact:!0}),r.a.createElement(j.a,{path:"/login/myaccount",component:X,exact:!0}))))};var z=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){(function(){var e=Object(_.a)(A.a.mark((function e(){var t,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("tokenStore"))){e.next=10;break}return e.next=4,U.a.get("/users/verify",{headers:{Authorization:t}});case 4:if(a=e.sent,c(a.data),!1!==a.data){e.next=8;break}return e.abrupt("return",localStorage.clear());case 8:e.next=11;break;case 10:c(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=Object(n.useState)({name:"",email:"",password:"",password2:""}),m=Object(s.a)(l,2),i=m[0],u=m[1],d=Object(n.useState)(" "),p=Object(s.a)(d,2),E=p[0],b=p[1],g=function(e){var t=e.target,a=t.name,n=t.value;u(Object(I.a)(Object(I.a)({},i),{},Object(P.a)({},a,n))),b("")},v=function(){var e=Object(_.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,U.a.post("/users/login",{username:i.name,email:i.email,password:i.password});case 4:a=e.sent,u({email:"",password:""}),u(i),localStorage.setItem("tokenStore",a.data.token),c(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.response.data.msg&&b(e.t0.response.data.msg);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,a?r.a.createElement(M,{setIsLogin:c}):r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-6 m-auto"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("div",{className:" alert-warning alert-dismissible fade show err-btn"},E),r.a.createElement("h1",{className:"text-center mb-3 "},r.a.createElement("i",{className:"fas fa-sign-in-alt"})," Sign in"),r.a.createElement("form",{onSubmit:v},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",id:"login-email",name:"email",className:"form-control",placeholder:"Enter Email",required:!0,value:i.email,onChange:g})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",id:"login-password",name:"password",className:"form-control",placeholder:"Enter Password",required:!0,value:i.password,autoComplete:"true",onChange:g})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block bg-primary"},"Sign in")),r.a.createElement("p",{className:"lead mt-4"},"No Account? ",r.a.createElement("a",{href:"/register"},"Join us")),r.a.createElement("div",null,r.a.createElement("p",{className:"lead mt-4"},r.a.createElement(o.b,{to:"/resetpassword"},"Forget Password ")))))))))};var G=function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("h1",null,"About"),r.a.createElement("h2",null,"Under Construction"))},K=function(){var e=Object(n.useState)({name:"",lastname:"",email:"",message:"",mobile:""}),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(" "),o=Object(s.a)(l,2),m=o[0],i=o[1],u=function(e){var t=e.target,n=t.name,r=t.value;c(Object(I.a)(Object(I.a)({},a),{},Object(P.a)({},n,r))),i("")},d=function(){var e=Object(_.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,U.a.post("/api/forma",{name:a.name,lastname:a.lastname,email:a.email,mobile:a.mobile,message:a.message});case 4:n=e.sent,c({sent:!0}),console.log(a.name),c({name:"",email:"",lastname:"",mobile:"",message:""}),console.log(a.name),i(n.data.msg),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),e.t0.response.data.msg&&i(e.t0.response.data.msg);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-6 m-auto"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("div",{className:" alert-success alert-dismissible fade show err-btn"},m),r.a.createElement("h1",{className:"text-center mb-3"},r.a.createElement("i",{className:"fas fa-blender-phone"})," Contact"),r.a.createElement("form",{onSubmit:d},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Firstname"),r.a.createElement("input",{type:"text",id:"contact-firstname",name:"name",className:"form-control",placeholder:"Firstname",value:a.name,onChange:u,username:a.name,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"lastname"),r.a.createElement("input",{type:"text",id:"contact-lastname",name:"lastname",className:"form-control",placeholder:"Lastname",value:a.lastname,onChange:u})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",id:"contact-email",name:"email",className:"form-control",placeholder:"Email",value:a.email,onChange:u,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Phone"),r.a.createElement("input",{type:"text",id:"contact-phone",name:"mobile",className:"form-control",placeholder:"Phone",value:a.mobile,onChange:u})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Message"),r.a.createElement("textarea",{className:"pl-1",name:"message",value:a.message,id:"",cols:"95",rows:"5",placeholder:"Message...",onChange:u,required:!0})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block bg-primary btn-button"},"Submit"))))))},Y=function(){return r.a.createElement("section",null,r.a.createElement(j.a,{path:"/",component:x,exact:!0}),r.a.createElement(j.a,{path:"/product",component:y,exact:!0}),r.a.createElement(j.a,{path:"/product/:id",component:w}),r.a.createElement(j.a,{path:"/cart/",component:k}),r.a.createElement(j.a,{path:"/loginRegister",component:D}),r.a.createElement(j.a,{path:"/register",component:q}),r.a.createElement(j.a,{path:"/login",component:z}),r.a.createElement(j.a,{path:"/resetpassword",component:R}),r.a.createElement(j.a,{path:"/contact",component:K}),r.a.createElement(j.a,{path:"/about",component:G}))},Q=(a(76),function(){return r.a.createElement("div",{className:"footer"},"@ Salahuddin Kader")});a(77);var $=function(){return r.a.createElement(d,null,r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(Y,null),r.a.createElement(Q,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.65bbbb46.chunk.js.map