import{j as e,B as l,R as m,r,c as a}from"./index-DqWu1n2u.js";const k="_service_15eck_49",d="_image_15eck_67",p="_imageContainer_15eck_77",v="_content_15eck_92",g="_title_15eck_99",b="_description_15eck_115",u="_problems_15eck_120",h="_problem_15eck_120",x="_button_15eck_147",j="_sheen_15eck_1",N="_appear_15eck_1",s={"vivid-red":"_vivid-red_15eck_1",service:k,image:d,imageContainer:p,content:v,title:g,description:b,problems:u,problem:h,"cursor-blink":"_cursor-blink_15eck_1",button:x,"rotate-animation":"_rotate-animation_15eck_1",sheen:j,appear:N},f=({imgUrl:t,title:c,description:_,problems:i})=>e.jsxs("li",{className:s.service,children:[e.jsx("div",{className:s.imageContainer,children:e.jsx("img",{src:t,alt:"",className:s.image})}),e.jsxs("h3",{className:s.title,children:[e.jsx("span",{children:"для"}),c]}),e.jsxs("div",{className:s.content,children:[e.jsx("p",{className:s.description,children:_}),e.jsx("ul",{className:s.problems,children:i.map(n=>e.jsx("li",{className:s.problem,children:n.problem},n.id))})]}),e.jsx(l,{variant:"noArrow",className:s.button,children:"Безкоштовний урок"})]}),w="/mentor-website/assets/beginner-BeRCaKgk.gif",C="/mentor-website/assets/switcher-CIyd7qX8.gif",R="/mentor-website/assets/girl-Dg6W49-s.gif",y="_services__content_1k89k_49",E="_services__item_1k89k_59",S="_services__image_1k89k_73",$="_services__description_1k89k_107",B="_services__guarantee_1k89k_110",T="_title_1k89k_139",U="_list_1k89k_149",D="_sheen_1k89k_1",I="_appear_1k89k_1",o={"vivid-red":"_vivid-red_1k89k_1",services__content:y,"services__text-container":"_services__text-container_1k89k_56",services__item:E,services__image:S,"services__item-title":"_services__item-title_1k89k_82","services__image-container":"_services__image-container_1k89k_95",services__description:$,services__guarantee:B,"services__guarantee-container":"_services__guarantee-container_1k89k_119","services__guarantee-image":"_services__guarantee-image_1k89k_129","services__guarantee-text":"_services__guarantee-text_1k89k_132",title:T,list:U,"list--activate":"_list--activate_1k89k_159","cursor-blink":"_cursor-blink_1k89k_1","rotate-animation":"_rotate-animation_1k89k_1",sheen:D,appear:I},L=[{id:1,imgUrl:R,title:"Студентів курсів",description:"якщо ти навчаєшся на курсах веб-розробки та:",problems:[{id:11,problem:"не встигаєш за програмою"},{id:21,problem:"маєш прогалини в знаннях"},{id:31,problem:"не розумієш завдання"},{id:41,problem:"бракує підтримки наставників"}]},{id:2,imgUrl:w,title:"Початківців",description:"якщо ти хочеш почати вивчати веб-розробку, але ти:",problems:[{id:12,problem:"не впевнений, чи це “твоє”"},{id:22,problem:"не хочеш купляти курс"},{id:32,problem:"не знаєш, з чого почати"},{id:42,problem:"не впевнений, чи подужаєш вивчити веб-розробку"}]},{id:3,imgUrl:C,title:"Свічерів",description:"якщо ти обрав формат самоосвіти, але тобі:",problems:[{id:13,problem:"бракує підтримки / мотивації"},{id:23,problem:"важко визначити програму"},{id:33,problem:"бракує робіт у портфоліо"},{id:43,problem:"бракує досвіду для самостійного навчання"}]}],A=m.memo(()=>{const t=r.useRef(null),[c,_]=r.useState(!1);return console.log(c),r.useEffect(()=>{setTimeout(()=>{t.current&&(t.current.style.transform="translateY(0)",t.current.style.opacity="1")},4400)},[t]),r.useEffect(()=>{setTimeout(()=>{_(!0)},4700)},[]),e.jsxs("section",{className:"section services",id:"services",children:[e.jsx("h2",{className:a("section__title",o.title),ref:t,children:"Для кого?"}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"section__content",children:e.jsx("ul",{className:a(o.list,{}),children:L.map(i=>e.jsx(f,{...i},i.id))})})})]})});export{A as Services,L as servicesData};
