import{j as e,B as _,R as m,r,c}from"./index-Diom5BkJ.js";const d="_service_1h08i_57",p="_image_1h08i_92",h="_imageContainer_1h08i_102",b="_content_1h08i_117",v="_title_1h08i_125",x="_description_1h08i_141",u="_problems_1h08i_146",g="_problem_1h08i_146",j="_button_1h08i_169",f="_sheen_1h08i_1",N="_appear_1h08i_1",s={"vivid-red":"_vivid-red_1h08i_2",service:d,"fade-in-slide":"_fade-in-slide_1h08i_1",image:p,imageContainer:h,content:b,title:v,description:x,problems:u,problem:g,"cursor-blink":"_cursor-blink_1h08i_1",button:j,"rotate-animation":"_rotate-animation_1h08i_1",sheen:f,appear:N},z=({imgUrl:i,title:t,description:l,problems:n})=>e.jsxs("li",{className:s.service,children:[e.jsx("div",{className:s.imageContainer,children:e.jsx("img",{src:i,alt:"",className:s.image})}),e.jsxs("div",{className:s.content,children:[e.jsxs("div",{className:s.textContent,children:[e.jsxs("h3",{className:s.title,children:[e.jsx("span",{children:"для"}),t]}),e.jsx("p",{className:s.description,dangerouslySetInnerHTML:{__html:l}}),e.jsx("ul",{className:s.problems,children:n.map(a=>e.jsx("li",{className:s.problem,children:a.problem},a.id))})]}),e.jsx(_,{variant:"noArrow",className:s.button,children:"Безкоштовний урок"})]})]}),w="/mentor-website/assets/beginner-BeRCaKgk.gif",C="/mentor-website/assets/switcher-CIyd7qX8.gif",k="/mentor-website/assets/girl-Dg6W49-s.gif",y="_title_1xzv0_56",R="_list_1xzv0_70",S="_visible_1xzv0_80",E="_sheen_1xzv0_1",T="_appear_1xzv0_1",o={"vivid-red":"_vivid-red_1xzv0_1",title:y,list:R,visible:S,"cursor-blink":"_cursor-blink_1xzv0_1","rotate-animation":"_rotate-animation_1xzv0_1",sheen:E,appear:T,"fade-in-slide":"_fade-in-slide_1xzv0_1"},$=[{id:1,imgUrl:k,title:"Студентів курсів",description:"якщо ти навчаєшся на курсах веб&#8209;розробки та:",problems:[{id:11,problem:"не встигаєш за програмою"},{id:21,problem:"маєш прогалини в знаннях"},{id:31,problem:"не розумієш завдання"},{id:41,problem:"бракує підтримки наставників"}]},{id:2,imgUrl:w,title:"Початківців",description:"якщо ти хочеш почати вивчати веб&#8209;розробку, але ти:",problems:[{id:12,problem:"не впевнений, чи це “твоє”"},{id:22,problem:"не хочеш купляти курс"},{id:32,problem:"не знаєш, з чого почати"},{id:42,problem:"не впевнений, чи подужаєш вивчити веб-розробку"}]},{id:3,imgUrl:C,title:"Свічерів",description:"якщо ти обрав формат самоосвіти, але тобі:",problems:[{id:13,problem:"бракує підтримки / мотивації"},{id:23,problem:"важко визначити програму"},{id:33,problem:"бракує робіт у портфоліо"},{id:43,problem:"бракує досвіду для самостійного навчання"}]}],I=m.memo(()=>{const i=r.useRef(null),[t,l]=r.useState(!1);return console.log(t),r.useEffect(()=>{setTimeout(()=>{i.current&&(i.current.style.transform="translateY(0)",i.current.style.opacity="1")},4400)},[i]),r.useEffect(()=>{setTimeout(()=>{l(!0)},4700)},[]),e.jsxs("section",{className:c("section",o.services),id:"services",children:[e.jsx("h2",{className:c("section__title",o.title),ref:i,children:"Для кого?"}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"section__content",children:e.jsx("ul",{className:c(o.list,{[o.visible]:t}),children:$.map(n=>e.jsx(z,{...n},n.id))})})})]})});export{I as Services};
