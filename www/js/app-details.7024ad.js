(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{165:function(e,a,t){},169:function(e,a,t){"use strict";t.r(a);var n=t(44),r=t.n(n),l=t(22),i=t.n(l),c=t(0),s=t.n(c),m=(t(68),t(1)),o=t(49),p=t(50),u=t(53),d=t(27),E=t(28),v=t(51),h=t(52),f=function(e){var a=e.rating;function t(e){return e<=Math.floor(a)?"star_fill":e>Math.ceil(a)?"star":"star_lefthalf_fill"}return(s.a.createElement("div",{className:"rating-stars"},[1,2,3,4,5].map((function(e){return s.a.createElement(E.a,{key:e,f7:t(e)})}))))},g=t(12),N=function(e){var a=e.src,t=e.onClick,n=e.alt,l=Object(c.useState)(!1),i=r()(l,2),m=i[0],o=i[1];return s.a.createElement("img",{style:{opacity:m?1:0,transitionDuration:"600ms"},onLoad:function(){return o(!0)},onClick:t,src:a,alt:n})},b=t(11);t(165);a.default=function(e){var a,t=e.id,n=e.backText,l=function(e){return[].concat(i()(b.a),i()(b.b)).find((function(a){return a.id===parseInt(e,10)}))}(t),w=Object(c.useRef)(null),k=Object(c.useState)(!1),y=r()(k,2),q=y[0],x=y[1],_={5:500,4:100,3:80,2:50,1:200},j=Object.values(_).reduce((function(e,a){return e+a}));return s.a.createElement(o.a,{onPageInit:function(){w.current=m.a.photoBrowser.create({photos:i()(l.screenshots),toolbar:!1,navbarShowCount:!1})},onPageBeforeRemove:function(){w.current&&w.current.destroy()}},s.a.createElement(p.a,{transparent:!0,backLink:n||"Back",className:"app-navbar"},s.a.createElement("div",{className:"app-navbar-icon",slot:"title"},s.a.createElement("img",{src:l.icon,alt:l.title})),s.a.createElement("div",{className:"app-navbar-button",slot:"right"},s.a.createElement(u.a,{external:!0,target:"_blank",href:"https://apps.apple.com/app/id".concat(l.id),round:!0,fill:!0},"GET"))),s.a.createElement("div",{className:"block app-header"},s.a.createElement("img",{src:l.icon,alt:l.title,className:"app-header-icon"}),s.a.createElement("div",{className:"app-header-content"},s.a.createElement("div",{className:"app-header-title"},l.title),s.a.createElement("div",{className:"app-header-subtitle"},l.subtitle),s.a.createElement("div",{className:"app-header-actions"},s.a.createElement(u.a,{external:!0,target:"_blank",href:"https://apps.apple.com/app/id".concat(l.id),round:!0,fill:!0},"GET"),s.a.createElement(d.a,{iconF7:"square_arrow_up"})),s.a.createElement("div",{className:"app-header-ratings"},s.a.createElement("div",{className:"app-header-rating"},s.a.createElement("div",{className:"app-header-rating-value"},l.rating),s.a.createElement(f,{rating:l.rating}),s.a.createElement("div",{className:"app-header-rating-sub"},"930 Ratings"))))),s.a.createElement("div",{className:"block app-screenshots"},l.screenshotsThumbs.map((function(e,a){return s.a.createElement(N,{onClick:function(){return function(e){w.current&&w.current.open(e)}(a)},src:e,key:a,alt:"Screenshot"})}))),s.a.createElement("div",{className:"block app-description ".concat(q?"app-description-full":"")},s.a.createElement("div",{className:"app-description-content"},s.a.createElement("div",{className:"app-description-text",dangerouslySetInnerHTML:{__html:(l.description||"").replace(/\n/g,"<br>")}}),s.a.createElement(d.a,{onClick:function(){return x(!0)}},"more"))),s.a.createElement(g.a,{title:"Ratings & Reviews"},s.a.createElement(d.a,null,"See All")),s.a.createElement("div",{className:"block app-ratings"},s.a.createElement("div",{className:"app-ratings-number"},s.a.createElement("b",null,l.rating),s.a.createElement("span",null,"out of 5")),s.a.createElement("div",{className:"app-ratings-votes"},[5,4,3,2,1].map((function(e){return s.a.createElement("div",{className:"app-ratings-votes-row",key:e},s.a.createElement("div",{className:"app-ratings-votes-stars"},Array.from({length:e}).map((function(e,a){return s.a.createElement(E.a,{key:a,f7:"star_fill"})}))),s.a.createElement("div",{className:"app-ratings-votes-progress"},s.a.createElement("span",{style:{width:"".concat(_[e]/j*100,"%")}})))})),s.a.createElement("div",{className:"app-ratings-votes-total"},j," Ratings"))),s.a.createElement("div",{className:"block app-reviews"},s.a.createElement("div",{className:"app-review"},s.a.createElement("div",{className:"app-review-header"},s.a.createElement("span",null,s.a.createElement("b",null,"John")),s.a.createElement("span",null,"2d ago")),s.a.createElement("div",{className:"app-review-header"},s.a.createElement(f,{rating:5}),s.a.createElement("span",null,"johndoe")),s.a.createElement("div",{className:"app-review-text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum debitis natus cum quae est rerum cupiditate cumque delectus eaque ipsa, accusamus facilis deleniti consequuntur, aliquam soluta minima, eos exercitationem.")),s.a.createElement("div",{className:"app-review"},s.a.createElement("div",{className:"app-review-header"},s.a.createElement("span",null,s.a.createElement("b",null,"Mike")),s.a.createElement("span",null,"3d ago")),s.a.createElement("div",{className:"app-review-header"},s.a.createElement(f,{rating:3}),s.a.createElement("span",null,"johndoe")),s.a.createElement("div",{className:"app-review-text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur laudantium, laborum sunt adipisci magni in doloremque neque error earum fugiat! Nihil molestias rem tenetur laboriosam illo similique nobis adipisci?")),s.a.createElement("div",{className:"app-review"},s.a.createElement("div",{className:"app-review-header"},s.a.createElement("span",null,s.a.createElement("b",null,"Vladimir")),s.a.createElement("span",null,"3d ago")),s.a.createElement("div",{className:"app-review-header"},s.a.createElement(f,{rating:2}),s.a.createElement("span",null,"johndoe")),s.a.createElement("div",{className:"app-review-text"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, repudiandae minima? Reprehenderit ab placeat delectus necessitatibus suscipit cumque laborum modi, eaque, a consequuntur, pariatur et itaque. Vitae odio necessitatibus amet.")),s.a.createElement("div",{className:"app-review"},s.a.createElement("div",{className:"app-review-header"},s.a.createElement("span",null,s.a.createElement("b",null,"Karoly")),s.a.createElement("span",null,"4d ago")),s.a.createElement("div",{className:"app-review-header"},s.a.createElement(f,{rating:4}),s.a.createElement("span",null,"johndoe")),s.a.createElement("div",{className:"app-review-text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ab ex! Architecto alias delectus, optio eos nostrum obcaecati repellat distinctio, ab, quam dolores voluptatem ex inventore facere expedita exercitationem repudiandae?")),s.a.createElement("div",{className:"app-review"},s.a.createElement("div",{className:"app-review-header"},s.a.createElement("span",null,s.a.createElement("b",null,"Peter")),s.a.createElement("span",null,"4d ago")),s.a.createElement("div",{className:"app-review-header"},s.a.createElement(f,{rating:5}),s.a.createElement("span",null,"johndoe")),s.a.createElement("div",{className:"app-review-text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo odit exercitationem eligendi maiores rerum quo, quos ullam quam! Quia facilis consequatur vitae cupiditate molestias maiores odit magnam quo itaque.")),s.a.createElement("div",{className:"app-review"},s.a.createElement("div",{className:"app-review-header"},s.a.createElement("span",null,s.a.createElement("b",null,"Alim")),s.a.createElement("span",null,"5d ago")),s.a.createElement("div",{className:"app-review-header"},s.a.createElement(f,{rating:1}),s.a.createElement("span",null,"johndoe")),s.a.createElement("div",{className:"app-review-text"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ipsa accusantium qui praesentium, obcaecati quae illum, tempora molestias similique nihil sunt in tempore ipsam laborum illo maxime amet quos consectetur!"))),l.versions&&l.versions.length>0&&s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,{title:"What's New"}),s.a.createElement("div",{className:"block"},s.a.createElement("p",{className:"display-flex justify-content-space-between",style:{opacity:.55}},s.a.createElement("span",null,"Version ",l.versions[l.versions.length-1].version),s.a.createElement("span",null,(a=l.versions[l.versions.length-1].release_date,new Intl.DateTimeFormat("en",{year:"numeric",month:"short",day:"numeric"}).format(new Date(a))))),s.a.createElement("p",null,l.versions[l.versions.length-1].release_notes||""))),s.a.createElement(g.a,{title:"App Privacy"}),s.a.createElement("div",{className:"block app-description ".concat(q?"app-description-full":"")},s.a.createElement("div",{className:"app-privacy"},s.a.createElement("div",{className:"app-privacy-text",dangerouslySetInnerHTML:{__html:(l.privacy||"").replace(/\n/g,"<br>")}}),s.a.createElement(d.a,{onClick:function(){return x(!0)}},"more")),s.a.createElement("div",{className:"block app-reviews"},s.a.createElement("div",{className:"app-review"},s.a.createElement("div",{className:"app-review-text"},s.a.createElement("i",{className:"f7-icons"},"viewfinder_person_fill")),s.a.createElement("div",{className:"app-review"},s.a.createElement("span",null,s.a.createElement("b",null,"Data Used to Track You"))),s.a.createElement("div",{className:"app-review"},s.a.createElement("span",null,"The following data may be used to track you across apps and websites owned by other companies:")),s.a.createElement("div",{className:"app-infoicon"},s.a.createElement("i",{className:"icon f7-icons color-white"},"info_round_fill"),"Contact info",s.a.createElement("i",{className:"icon f7-icons color-white"},"text_rectangle")),s.a.createElement("div",{className:"app-review"},s.a.createElement("span",null,s.a.createElement("b",null,"Data Used to Track You")))))),s.a.createElement(g.a,{title:"Information"}),s.a.createElement(v.a,{noHairlines:!0,noChevron:!0,className:"safe-areas-inset app-information-list"},s.a.createElement(h.a,{title:"Provider",after:l.developer.name}),s.a.createElement(h.a,{title:"Size",after:"".concat(Math.floor(l.size/1e6)," MB")}),s.a.createElement(h.a,{title:"Compatibility",after:"Works on this iPhone"}),s.a.createElement(h.a,{title:"Languages",after:"English"}),s.a.createElement(h.a,{title:"Age Rating",after:"12+"}),s.a.createElement(h.a,{title:"In-App Purchases",after:"Yes"}),s.a.createElement(h.a,{title:"Copyright",after:"© ".concat(l.developer.name)}),s.a.createElement(h.a,{link:"https://apps.apple.com/developer/id".concat(l.developer.id),external:!0,target:"_blank",title:"Developer Website"},s.a.createElement(E.a,{slot:"after",f7:"compass"})),s.a.createElement(h.a,{link:"https://apps.apple.com/developer/id".concat(l.developer.id),external:!0,target:"_blank",title:"Privacy Policy"},s.a.createElement(E.a,{slot:"after",f7:"hand_raised_fill"}))))}}}]);
//# sourceMappingURL=app-details.7024ad.js.map