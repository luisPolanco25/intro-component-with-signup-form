(this["webpackJsonpintro-component-with-signup-form"]=this["webpackJsonpintro-component-with-signup-form"]||[]).push([[0],{127:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var r=a(1),l=a.n(r),n=a(30),o=a.n(n),s=a(4),i=a(2),c=a(6),m=Object(r.createContext)(),u=(a(38),a(7)),p=a.n(u),d=a(32),b=a.n(d),f=a(31),h=a.n(f),y=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),a=Object(s.a)(t,2),l=a[0],n=a[1],o=Object(r.useContext)(m),u=o.setIsFormValueCorrect,p=function(){n(e)},d=function(e){var t=e.target;n(Object(i.a)(Object(i.a)({},l),{},Object(c.a)({},t.name,t.value))),u((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(c.a)({},t.name,!0))}))};return[l,d,p]}({firstName:"Jonathan ",lastName:"",email:"",password:""}),t=Object(s.a)(e,2),a=t[0],n=t[1],o=Object(r.useContext)(m),u=o.isFormValueCorrect,d=o.setIsFormValueCorrect,f=a.firstName,y=a.lastName,E=a.email,g=a.password;return l.a.createElement("div",{id:"login-area"},l.a.createElement("div",{id:"try-free"},l.a.createElement("p",null,l.a.createElement("span",null,"Try it free 7 days")," then $20/mo. thereafter")),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===f.trim()?d((function(e){return Object(i.a)(Object(i.a)({},e),{},{firstName:!1})})):""===y.trim()?d((function(e){return Object(i.a)(Object(i.a)({},e),{},{lastName:!1})})):b.a.isEmail(E)?""===g.trim()?d((function(e){return Object(i.a)(Object(i.a)({},e),{},{password:!1})})):h.a.fire("","We'll get in touch with you shortly","success"):d((function(e){return Object(i.a)(Object(i.a)({},e),{},{email:!1})}))}},l.a.createElement("input",{style:!1===u.firstName?{border:"2px solid hsl(0, 100%, 74%)"}:null,"aria-label":"first name",name:"firstName",type:"text",placeholder:"First name",autoComplete:"off",autoFocus:!0,value:f,onChange:n}),l.a.createElement("p",{className:"error-text",style:!1===u.firstName?{display:"block"}:null},"First name cannot be empty"),l.a.createElement("img",{className:"error-image",alt:"Error",src:p.a,style:!1===u.firstName?{display:"block"}:null}),l.a.createElement("input",{style:!1===u.lastName?{border:"2px solid hsl(0, 100%, 74%)"}:null,"aria-label":"last name",name:"lastName",type:"text",placeholder:"Last name",autoComplete:"off",value:y,onChange:n}),l.a.createElement("p",{className:"error-text",style:!1===u.lastName?{display:"block"}:null},"Last name cannot be empty"),l.a.createElement("img",{className:"error-image",alt:"Error",src:p.a,style:!1===u.lastName?{display:"block"}:null}),l.a.createElement("input",{style:!1===u.email?{border:"2px solid hsl(0, 100%, 74%)"}:null,"aria-label":"email address",name:"email",type:"text",placeholder:"Email address",autoComplete:"off",value:E,onChange:n}),l.a.createElement("p",{className:"error-text",style:!1===u.email?{display:"block"}:null},"Looks like this is not an email"),l.a.createElement("img",{className:"error-image",alt:"Error",src:p.a,style:!1===u.email?{display:"block"}:null}),l.a.createElement("input",{style:!1===u.password?{border:"2px solid hsl(0, 100%, 74%)"}:null,"aria-label":"password",name:"password",type:"password",placeholder:"Password",autoComplete:"off",value:g,onChange:n}),l.a.createElement("p",{className:"error-text",style:!1===u.password?{display:"block"}:null},"Password cannot be empty"),l.a.createElement("img",{className:"error-image",alt:"Error",src:p.a,style:!1===u.password?{display:"block"}:null}),l.a.createElement("button",{type:"submit"},"CLAIM YOUR FREE TRIAL"),l.a.createElement("p",{id:"terms"},"By clicking the button, you are agreeing to our ",l.a.createElement("a",{href:"https://luispolanco25.github.io/intro-component-with-signup-form"},"Terms and Services"))))},E=(a(127),function(){return l.a.createElement("main",null,l.a.createElement("div",{id:"page-text"},l.a.createElement("h1",null,"Learn to code by watching others"),l.a.createElement("p",null,"See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.")),l.a.createElement(y,null))}),g=function(){var e=Object(r.useState)({firstName:void 0,lastName:void 0,email:void 0,password:void 0}),t=Object(s.a)(e,2),a=t[0],n=t[1];return l.a.createElement(m.Provider,{value:{isFormValueCorrect:a,setIsFormValueCorrect:n}},l.a.createElement(E,null))};o.a.render(l.a.createElement(g,null),document.getElementById("root"))},33:function(e,t,a){e.exports=a(128)},38:function(e,t,a){},7:function(e,t,a){e.exports=a.p+"static/media/icon-error.eb2c6ce2.svg"}},[[33,1,2]]]);
//# sourceMappingURL=main.e0686cfb.chunk.js.map