import{createElement as e,memo as a}from"react";import o from"@material-ui/core/Avatar";import{makeStyles as l,createStyles as n,fade as t}from"@material-ui/core/styles";import r from"@material-ui/icons/Done";import d from"@material-ui/icons/Clear";import i from"@material-ui/core/Tooltip";import c from"@material-ui/icons/Info";import h from"clsx";import{Rating as p}from"@material-ui/lab";import b from"@material-ui/icons/ReportProblem";import s from"@material-ui/icons/Autorenew";import u from"@material-ui/core/Chip";import m from"chance";import{pink as g,blue as f,orange as C,red as N,green as y,lightBlue as S,purple as D}from"@material-ui/core/colors";function v(a){return e(o,{style:{backgroundColor:a.value.color}},a.value.name.toString().substring(0,1))}const w=l({root:{display:"flex"},flag:{marginRight:4,marginTop:2,height:32,width:32,fontSize:"28px"},label:{overflow:"hidden",textOverflow:"ellipsis"}}),M=a((function(a){const{value:o}=a,l=w();return e("div",{className:l.root},e("span",{className:l.flag},(n=o.code,void 0!==String.fromCodePoint?n.toUpperCase().replace(/./g,(e=>String.fromCodePoint(e.charCodeAt(0)+127397))):n)),e("span",{className:l.label},o.label));var n}));function T(a){return e(M,{value:a.value})}const P=a((function(a){return a.value?e(r,{fontSize:"small"}):e(d,{fontSize:"small"})}));function A(a){return e(P,{value:!!a.value})}const R=l({root:{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",color:"inherit"}}),B=a((function(a){const o=R();return e("a",{className:o.root,onClick:e=>{e.preventDefault()},href:a.href},a.children)}));function G(a){return e(B,{href:a.value.toString()},a.value.toString())}function I(a){const o=a.value;return e(B,{href:"mailto:"+o},o)}const F=l({root:{display:"flex",justifyContent:"space-between"},icon:{color:"#2196f3",alignSelf:"center",marginLeft:8}}),k=a((function(a){const{value:o}=a,l=F();if(!o)return null;const n=o.toString(),t=n.slice(n.indexOf("(")+1,n.indexOf(")")),r=n.slice(0,n.indexOf("(")).trim();return e("div",{className:l.root},e("span",null,r),e(i,{title:t},e(c,{className:l.icon})))}));function L(a){return e(k,{value:a.value})}const U=l((e=>n({root:{width:"100%",fontVariantNumeric:"tabular-nums"},positive:{color:"light"===e.palette.type?e.palette.success.dark:e.palette.success.light},negative:{color:"light"===e.palette.type?e.palette.error.dark:e.palette.error.light}})));const E=a((function(a){const{value:o}=a,l=U();return e("div",{className:h(l.root,{[l.positive]:o>0,[l.negative]:o<0})},function(e){return e<0?`(${Math.abs(e).toLocaleString()})`:e.toLocaleString()}(o))}));function x(a){return e(E,{value:a.value})}const K=l((e=>n({root:{border:"1px solid "+e.palette.divider,position:"relative",overflow:"hidden",width:"100%",height:26,borderRadius:2},value:{position:"absolute",lineHeight:"24px",width:"100%",display:"flex",justifyContent:"center"},bar:{height:"100%","&.low":{backgroundColor:"#f44336"},"&.medium":{backgroundColor:"#efbb5aa3"},"&.high":{backgroundColor:"#088208a3"}}}))),H=a((function(a){const{value:o}=a,l=100*o,n=K();return e("div",{className:n.root},e("div",{className:n.value},l.toLocaleString()+" %"),e("div",{className:h(n.bar,{low:l<30,medium:l>=30&&l<=70,high:l>70}),style:{maxWidth:l+"%"}}))}));function O(a){return e(H,{value:Number(a.value)})}const V=l((e=>n({root:{display:"flex",alignItems:"center",lineHeight:"24px",color:e.palette.text.secondary,"& .MuiRating-root":{marginRight:e.spacing(1)}}}))),z=a((function(a){const{name:o,value:l}=a,n=V();return e("div",{className:n.root},e(p,{name:o,value:l,readOnly:!0})," ",Math.round(10*Number(l))/10)}));function W(a){return e(z,{value:Number(a.value),name:a.row.id.toString()})}const Z=l((e=>n({root:{justifyContent:"left","& .icon":{color:"inherit"}},Open:{color:e.palette.info.dark,border:"1px solid "+e.palette.info.main},Filled:{color:e.palette.success.dark,border:"1px solid "+e.palette.success.main},PartiallyFilled:{color:e.palette.warning.dark,border:"1px solid "+e.palette.warning.main},Rejected:{color:e.palette.error.dark,border:"1px solid "+e.palette.error.main}}))),J=a((a=>{const{status:o}=a;let l=null;const n=Z();"Rejected"===o?l=e(b,{className:"icon"}):"Open"===o?l=e(c,{className:"icon"}):"PartiallyFilled"===o?l=e(s,{className:"icon"}):"Filled"===o&&(l=e(r,{className:"icon"}));let t=o;return"PartiallyFilled"===o&&(t="Partially Filled"),e(u,{className:h(n.root,n[o]),icon:l,size:"small",label:t,variant:"outlined"})}));function Y(a){return e(J,{status:a.value.toString()})}const j=l((e=>n({root:{width:"100%",paddingRight:8,fontVariantNumeric:"tabular-nums"},good:{backgroundColor:t(e.palette.success.main,.3)},bad:{backgroundColor:t(e.palette.error.main,.3)}}))),q=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),Q=a((function(a){const{value:o}=a,l=j();return e("div",{className:h(l.root,{[l.good]:o>1e6,[l.bad]:o<1e6})},q.format(o))}));function X(a){return e(Q,{value:a.value})}const $=[g[500],f[500],C[500],N[500],y[500],S[500],D[500]],_=["Open","PartiallyFilled","Filled","Rejected"],ee=["BR","1250L","20G","BC45","IGN179"],ae=["Fixed","Floating"],oe=["FP","TM","CR"],le=["EXW (Ex Works)","FAS (Free Alongside Ship)","FCA (Free Carrier)","CPT (Carriage Paid To)","DAP (Delivered at Place)","DPU (Delivered at Place Unloaded)","DDP (Delivered Duty Paid)"],ne=["Corn","Oats","Rough Rice","Soybeans","Rapeseed","Soybeans","Soybean Meal","Soybean Oil","Wheat","Milk","Cocoa","Coffee C","Cotton No.2","Sugar No.11","Sugar No.14","Frozen Concentrated Orange Juice","Adzuki bean","Robusta coffee"],te=["USD","GBP","JPY","EUR","BRZ","MXN","AUD","CAD","NZD","ARS","CHF","THB","HKD","TRY"],re=[{code:"AD",label:"Andorra",phone:"376"},{code:"AE",label:"United Arab Emirates",phone:"971"},{code:"AF",label:"Afghanistan",phone:"93"},{code:"AG",label:"Antigua and Barbuda",phone:"1-268"},{code:"AI",label:"Anguilla",phone:"1-264"},{code:"AL",label:"Albania",phone:"355"},{code:"AM",label:"Armenia",phone:"374"},{code:"AO",label:"Angola",phone:"244"},{code:"AQ",label:"Antarctica",phone:"672"},{code:"AR",label:"Argentina",phone:"54"},{code:"AS",label:"American Samoa",phone:"1-684"},{code:"AT",label:"Austria",phone:"43"},{code:"AU",label:"Australia",phone:"61",suggested:!0},{code:"AW",label:"Aruba",phone:"297"},{code:"AX",label:"Alland Islands",phone:"358"},{code:"AZ",label:"Azerbaijan",phone:"994"},{code:"BA",label:"Bosnia and Herzegovina",phone:"387"},{code:"BB",label:"Barbados",phone:"1-246"},{code:"BD",label:"Bangladesh",phone:"880"},{code:"BE",label:"Belgium",phone:"32"},{code:"BF",label:"Burkina Faso",phone:"226"},{code:"BG",label:"Bulgaria",phone:"359"},{code:"BH",label:"Bahrain",phone:"973"},{code:"BI",label:"Burundi",phone:"257"},{code:"BJ",label:"Benin",phone:"229"},{code:"BL",label:"Saint Barthelemy",phone:"590"},{code:"BM",label:"Bermuda",phone:"1-441"},{code:"BN",label:"Brunei Darussalam",phone:"673"},{code:"BO",label:"Bolivia",phone:"591"},{code:"BR",label:"Brazil",phone:"55"},{code:"BS",label:"Bahamas",phone:"1-242"},{code:"BT",label:"Bhutan",phone:"975"},{code:"BV",label:"Bouvet Island",phone:"47"},{code:"BW",label:"Botswana",phone:"267"},{code:"BY",label:"Belarus",phone:"375"},{code:"BZ",label:"Belize",phone:"501"},{code:"CA",label:"Canada",phone:"1",suggested:!0},{code:"CC",label:"Cocos (Keeling) Islands",phone:"61"},{code:"CD",label:"Congo, Democratic Republic of the",phone:"243"},{code:"CF",label:"Central African Republic",phone:"236"},{code:"CG",label:"Congo, Republic of the",phone:"242"},{code:"CH",label:"Switzerland",phone:"41"},{code:"CI",label:"Cote d'Ivoire",phone:"225"},{code:"CK",label:"Cook Islands",phone:"682"},{code:"CL",label:"Chile",phone:"56"},{code:"CM",label:"Cameroon",phone:"237"},{code:"CN",label:"China",phone:"86"},{code:"CO",label:"Colombia",phone:"57"},{code:"CR",label:"Costa Rica",phone:"506"},{code:"CU",label:"Cuba",phone:"53"},{code:"CV",label:"Cape Verde",phone:"238"},{code:"CW",label:"Curacao",phone:"599"},{code:"CX",label:"Christmas Island",phone:"61"},{code:"CY",label:"Cyprus",phone:"357"},{code:"CZ",label:"Czech Republic",phone:"420"},{code:"DE",label:"Germany",phone:"49",suggested:!0},{code:"DJ",label:"Djibouti",phone:"253"},{code:"DK",label:"Denmark",phone:"45"},{code:"DM",label:"Dominica",phone:"1-767"},{code:"DO",label:"Dominican Republic",phone:"1-809"},{code:"DZ",label:"Algeria",phone:"213"},{code:"EC",label:"Ecuador",phone:"593"},{code:"EE",label:"Estonia",phone:"372"},{code:"EG",label:"Egypt",phone:"20"},{code:"EH",label:"Western Sahara",phone:"212"},{code:"ER",label:"Eritrea",phone:"291"},{code:"ES",label:"Spain",phone:"34"},{code:"ET",label:"Ethiopia",phone:"251"},{code:"FI",label:"Finland",phone:"358"},{code:"FJ",label:"Fiji",phone:"679"},{code:"FK",label:"Falkland Islands (Malvinas)",phone:"500"},{code:"FM",label:"Micronesia, Federated States of",phone:"691"},{code:"FO",label:"Faroe Islands",phone:"298"},{code:"FR",label:"France",phone:"33",suggested:!0},{code:"GA",label:"Gabon",phone:"241"},{code:"GB",label:"United Kingdom",phone:"44"},{code:"GD",label:"Grenada",phone:"1-473"},{code:"GE",label:"Georgia",phone:"995"},{code:"GF",label:"French Guiana",phone:"594"},{code:"GG",label:"Guernsey",phone:"44"},{code:"GH",label:"Ghana",phone:"233"},{code:"GI",label:"Gibraltar",phone:"350"},{code:"GL",label:"Greenland",phone:"299"},{code:"GM",label:"Gambia",phone:"220"},{code:"GN",label:"Guinea",phone:"224"},{code:"GP",label:"Guadeloupe",phone:"590"},{code:"GQ",label:"Equatorial Guinea",phone:"240"},{code:"GR",label:"Greece",phone:"30"},{code:"GS",label:"South Georgia and the South Sandwich Islands",phone:"500"},{code:"GT",label:"Guatemala",phone:"502"},{code:"GU",label:"Guam",phone:"1-671"},{code:"GW",label:"Guinea-Bissau",phone:"245"},{code:"GY",label:"Guyana",phone:"592"},{code:"HK",label:"Hong Kong",phone:"852"},{code:"HM",label:"Heard Island and McDonald Islands",phone:"672"},{code:"HN",label:"Honduras",phone:"504"},{code:"HR",label:"Croatia",phone:"385"},{code:"HT",label:"Haiti",phone:"509"},{code:"HU",label:"Hungary",phone:"36"},{code:"ID",label:"Indonesia",phone:"62"},{code:"IE",label:"Ireland",phone:"353"},{code:"IL",label:"Israel",phone:"972"},{code:"IM",label:"Isle of Man",phone:"44"},{code:"IN",label:"India",phone:"91"},{code:"IO",label:"British Indian Ocean Territory",phone:"246"},{code:"IQ",label:"Iraq",phone:"964"},{code:"IR",label:"Iran, Islamic Republic of",phone:"98"},{code:"IS",label:"Iceland",phone:"354"},{code:"IT",label:"Italy",phone:"39"},{code:"JE",label:"Jersey",phone:"44"},{code:"JM",label:"Jamaica",phone:"1-876"},{code:"JO",label:"Jordan",phone:"962"},{code:"JP",label:"Japan",phone:"81",suggested:!0},{code:"KE",label:"Kenya",phone:"254"},{code:"KG",label:"Kyrgyzstan",phone:"996"},{code:"KH",label:"Cambodia",phone:"855"},{code:"KI",label:"Kiribati",phone:"686"},{code:"KM",label:"Comoros",phone:"269"},{code:"KN",label:"Saint Kitts and Nevis",phone:"1-869"},{code:"KP",label:"Korea, Democratic People's Republic of",phone:"850"},{code:"KR",label:"Korea, Republic of",phone:"82"},{code:"KW",label:"Kuwait",phone:"965"},{code:"KY",label:"Cayman Islands",phone:"1-345"},{code:"KZ",label:"Kazakhstan",phone:"7"},{code:"LA",label:"Lao People's Democratic Republic",phone:"856"},{code:"LB",label:"Lebanon",phone:"961"},{code:"LC",label:"Saint Lucia",phone:"1-758"},{code:"LI",label:"Liechtenstein",phone:"423"},{code:"LK",label:"Sri Lanka",phone:"94"},{code:"LR",label:"Liberia",phone:"231"},{code:"LS",label:"Lesotho",phone:"266"},{code:"LT",label:"Lithuania",phone:"370"},{code:"LU",label:"Luxembourg",phone:"352"},{code:"LV",label:"Latvia",phone:"371"},{code:"LY",label:"Libya",phone:"218"},{code:"MA",label:"Morocco",phone:"212"},{code:"MC",label:"Monaco",phone:"377"},{code:"MD",label:"Moldova, Republic of",phone:"373"},{code:"ME",label:"Montenegro",phone:"382"},{code:"MF",label:"Saint Martin (French part)",phone:"590"},{code:"MG",label:"Madagascar",phone:"261"},{code:"MH",label:"Marshall Islands",phone:"692"},{code:"MK",label:"Macedonia, the Former Yugoslav Republic of",phone:"389"},{code:"ML",label:"Mali",phone:"223"},{code:"MM",label:"Myanmar",phone:"95"},{code:"MN",label:"Mongolia",phone:"976"},{code:"MO",label:"Macao",phone:"853"},{code:"MP",label:"Northern Mariana Islands",phone:"1-670"},{code:"MQ",label:"Martinique",phone:"596"},{code:"MR",label:"Mauritania",phone:"222"},{code:"MS",label:"Montserrat",phone:"1-664"},{code:"MT",label:"Malta",phone:"356"},{code:"MU",label:"Mauritius",phone:"230"},{code:"MV",label:"Maldives",phone:"960"},{code:"MW",label:"Malawi",phone:"265"},{code:"MX",label:"Mexico",phone:"52"},{code:"MY",label:"Malaysia",phone:"60"},{code:"MZ",label:"Mozambique",phone:"258"},{code:"NA",label:"Namibia",phone:"264"},{code:"NC",label:"New Caledonia",phone:"687"},{code:"NE",label:"Niger",phone:"227"},{code:"NF",label:"Norfolk Island",phone:"672"},{code:"NG",label:"Nigeria",phone:"234"},{code:"NI",label:"Nicaragua",phone:"505"},{code:"NL",label:"Netherlands",phone:"31"},{code:"NO",label:"Norway",phone:"47"},{code:"NP",label:"Nepal",phone:"977"},{code:"NR",label:"Nauru",phone:"674"},{code:"NU",label:"Niue",phone:"683"},{code:"NZ",label:"New Zealand",phone:"64"},{code:"OM",label:"Oman",phone:"968"},{code:"PA",label:"Panama",phone:"507"},{code:"PE",label:"Peru",phone:"51"},{code:"PF",label:"French Polynesia",phone:"689"},{code:"PG",label:"Papua New Guinea",phone:"675"},{code:"PH",label:"Philippines",phone:"63"},{code:"PK",label:"Pakistan",phone:"92"},{code:"PL",label:"Poland",phone:"48"},{code:"PM",label:"Saint Pierre and Miquelon",phone:"508"},{code:"PN",label:"Pitcairn",phone:"870"},{code:"PR",label:"Puerto Rico",phone:"1"},{code:"PS",label:"Palestine, State of",phone:"970"},{code:"PT",label:"Portugal",phone:"351"},{code:"PW",label:"Palau",phone:"680"},{code:"PY",label:"Paraguay",phone:"595"},{code:"QA",label:"Qatar",phone:"974"},{code:"RE",label:"Reunion",phone:"262"},{code:"RO",label:"Romania",phone:"40"},{code:"RS",label:"Serbia",phone:"381"},{code:"RU",label:"Russian Federation",phone:"7"},{code:"RW",label:"Rwanda",phone:"250"},{code:"SA",label:"Saudi Arabia",phone:"966"},{code:"SB",label:"Solomon Islands",phone:"677"},{code:"SC",label:"Seychelles",phone:"248"},{code:"SD",label:"Sudan",phone:"249"},{code:"SE",label:"Sweden",phone:"46"},{code:"SG",label:"Singapore",phone:"65"},{code:"SH",label:"Saint Helena",phone:"290"},{code:"SI",label:"Slovenia",phone:"386"},{code:"SJ",label:"Svalbard and Jan Mayen",phone:"47"},{code:"SK",label:"Slovakia",phone:"421"},{code:"SL",label:"Sierra Leone",phone:"232"},{code:"SM",label:"San Marino",phone:"378"},{code:"SN",label:"Senegal",phone:"221"},{code:"SO",label:"Somalia",phone:"252"},{code:"SR",label:"Suriname",phone:"597"},{code:"SS",label:"South Sudan",phone:"211"},{code:"ST",label:"Sao Tome and Principe",phone:"239"},{code:"SV",label:"El Salvador",phone:"503"},{code:"SX",label:"Sint Maarten (Dutch part)",phone:"1-721"},{code:"SY",label:"Syrian Arab Republic",phone:"963"},{code:"SZ",label:"Swaziland",phone:"268"},{code:"TC",label:"Turks and Caicos Islands",phone:"1-649"},{code:"TD",label:"Chad",phone:"235"},{code:"TF",label:"French Southern Territories",phone:"262"},{code:"TG",label:"Togo",phone:"228"},{code:"TH",label:"Thailand",phone:"66"},{code:"TJ",label:"Tajikistan",phone:"992"},{code:"TK",label:"Tokelau",phone:"690"},{code:"TL",label:"Timor-Leste",phone:"670"},{code:"TM",label:"Turkmenistan",phone:"993"},{code:"TN",label:"Tunisia",phone:"216"},{code:"TO",label:"Tonga",phone:"676"},{code:"TR",label:"Turkey",phone:"90"},{code:"TT",label:"Trinidad and Tobago",phone:"1-868"},{code:"TV",label:"Tuvalu",phone:"688"},{code:"TW",label:"Taiwan, Province of China",phone:"886"},{code:"TZ",label:"United Republic of Tanzania",phone:"255"},{code:"UA",label:"Ukraine",phone:"380"},{code:"UG",label:"Uganda",phone:"256"},{code:"US",label:"United States",phone:"1",suggested:!0},{code:"UY",label:"Uruguay",phone:"598"},{code:"UZ",label:"Uzbekistan",phone:"998"},{code:"VA",label:"Holy See (Vatican City State)",phone:"379"},{code:"VC",label:"Saint Vincent and the Grenadines",phone:"1-784"},{code:"VE",label:"Venezuela",phone:"58"},{code:"VG",label:"British Virgin Islands",phone:"1-284"},{code:"VI",label:"US Virgin Islands",phone:"1-340"},{code:"VN",label:"Vietnam",phone:"84"},{code:"VU",label:"Vanuatu",phone:"678"},{code:"WF",label:"Wallis and Futuna",phone:"681"},{code:"WS",label:"Samoa",phone:"685"},{code:"XK",label:"Kosovo",phone:"383"},{code:"YE",label:"Yemen",phone:"967"},{code:"YT",label:"Mayotte",phone:"262"},{code:"ZA",label:"South Africa",phone:"27"},{code:"ZM",label:"Zambia",phone:"260"},{code:"ZW",label:"Zimbabwe",phone:"263"}],de=m();function ie(e,a){let o=new Date;void 0!==a&&(o=new Date(Date.parse(a)));const l={min:1e3,max:24*(e||1)*3600*1e3},n=o.getTime()-de.integer(l);return o.setTime(n),o}const ce=(e,a)=>Math.random()*(a-e)+e,he=(e,a)=>Number(ce(e,a).toFixed()),pe=(e=0,a=1e5)=>ce(e,a),be=()=>ce(0,1),se=(e,a)=>new Date(e.getTime()+Math.random()*(a.getTime()-e.getTime())),ue=()=>se(new Date(2012,0,1),new Date),me=e=>e[ce(0,e.length-1).toFixed()],ge=()=>me($),fe=()=>de.guid(),Ce=()=>"D-"+de.integer({min:0,max:1e4}),Ne=()=>me(ne),ye=()=>de.name(),Se=()=>de.twitter(),De=()=>de.email(),ve=()=>de.url(),we=()=>de.phone(),Me=()=>pe(1,100),Te=()=>me(te),Pe=()=>he(1e3,1e5),Ae=()=>ce(.1,.4),Re=()=>me(le),Be=()=>me(_),Ge=()=>ce(-1e8,1e8),Ie=()=>function(e,a){let o=new Date;void 0!==a&&(o=new Date(Date.parse(a)));const l={min:1e3,max:365*(e||1)*24*3600*1e3},n=o.getTime()+de.integer(l);return o.setTime(n),o}(),Fe=()=>ie(),ke=()=>de.guid(),Le=()=>de.company(),Ue=()=>me(re),Ee=()=>me(te),xe=()=>de.address(),Ke=()=>de.city(),He=()=>me(ee),Oe=()=>me(oe),Ve=()=>me(ae),ze=()=>function(e,a){let o=new Date;void 0!==a&&(o=new Date(Date.parse(a)));const l={min:1e3,max:365*(e||1)*24*3600*1e3},n=o.getTime()-de.integer(l);return o.setTime(n),o}(),We=()=>ie(),Ze=()=>({name:de.name(),color:ge()}),Je=()=>de.profession(),Ye=()=>Math.round(10*ce(0,5))/10,je=e=>e.avatar.name,qe=e=>Number((e.quantity*be()).toFixed())/e.quantity,Qe=e=>e.quantity===e.filledQuantity,Xe=e=>e.unitPrice*e.quantity,$e=e=>Number(e.feeRate)*e.subTotal,_e=e=>e.feeRate+e.subTotal;function ea(e,a){return new Promise((o=>{const l=[];for(let o=0;o<e;o+=1){const e={};for(let o=0;o<a.length;o+=1){const l=a[o];e[l.field]=l.generateData(e)}l.push(e)}o({columns:a,rows:l})}))}const aa=()=>[{field:"id",generateData:fe,hide:!0},{field:"desk",headerName:"Desk",generateData:Ce,width:110},{field:"commodity",headerName:"Commodity",generateData:Ne,width:180},{field:"traderName",headerName:"Trader Name",generateData:ye,width:120},{field:"traderEmail",headerName:"Trader Email",generateData:De,renderCell:I,disableClickEventBubbling:!0,width:150},{field:"quantity",headerName:"Quantity",type:"number",width:140,generateData:Pe},{field:"filledQuantity",headerName:"Filled Quantity",generateData:qe,renderCell:O,type:"number",width:120},{field:"isFilled",headerName:"Is Filled",renderCell:A,align:"center",generateData:Qe,width:80},{field:"status",headerName:"Status",generateData:Be,renderCell:Y,width:150},{field:"unitPrice",headerName:"Unit Price",generateData:Me,type:"number"},{field:"unitPriceCurrency",headerName:"Unit Price Currency",generateData:Te,width:70},{field:"subTotal",headerName:"Sub Total",generateData:Xe,type:"number",width:120},{field:"feeRate",headerName:"Fee Rate",generateData:Ae,type:"number",width:80},{field:"feeAmount",headerName:"Fee Amount",generateData:$e,type:"number",width:120},{field:"incoTerm",generateData:Re,renderCell:L},{field:"totalPrice",headerName:"Total in USD",generateData:_e,renderCell:X,type:"number",width:160},{field:"pnl",headerName:"PnL",generateData:Ge,renderCell:x,type:"number",width:140},{field:"maturityDate",headerName:"Maturity Date",generateData:Ie,type:"date"},{field:"tradeDate",headerName:"Trade Date",generateData:Fe,type:"date"},{field:"brokerId",headerName:"Broker Id",generateData:ke,hide:!0},{field:"brokerName",headerName:"Broker Name",generateData:Le,width:140},{field:"counterPartyName",headerName:"Counterparty",generateData:Le,width:180},{field:"counterPartyCountry",headerName:"Counterparty Country",generateData:Ue,valueGetter:({value:e})=>e.label,renderCell:T,width:120},{field:"counterPartyCurrency",headerName:"Counterparty Currency",generateData:Ee},{field:"counterPartyAddress",headerName:"Counterparty Address",generateData:xe,width:200},{field:"counterPartyCity",headerName:"Counterparty City",generateData:Ke,width:120},{field:"taxCode",headerName:"Tax Code",generateData:He},{field:"contractType",headerName:"Contract Type",generateData:Oe},{field:"rateType",headerName:"Rate Type",generateData:Ve},{field:"lastUpdated",headerName:"Updated on",generateData:We,type:"dateTime",width:180},{field:"dateCreated",headerName:"Created on",generateData:ze,type:"date",width:150}],oa=()=>[{field:"id",generateData:fe,hide:!0},{field:"avatar",headerName:"Avatar",sortable:!1,generateData:Ze,renderCell:v,filterable:!1},{field:"name",headerName:"Name",generateData:je,width:120},{field:"website",headerName:"Website",generateData:ve,renderCell:G,width:160},{field:"rating",headerName:"Rating",generateData:Ye,renderCell:W,width:180,type:"number"},{field:"email",headerName:"Email",generateData:De,renderCell:I,disableClickEventBubbling:!0,width:150},{field:"phone",headerName:"Phone",generateData:we,width:150},{field:"username",headerName:"Username",generateData:Se,width:150},{field:"city",headerName:"City",generateData:Ke},{field:"country",headerName:"Country",generateData:Ue,renderCell:T,width:150},{field:"company",headerName:"Company",generateData:Le,width:180},{field:"position",headerName:"Position",generateData:Je,width:180},{field:"lastUpdated",headerName:"Updated on",generateData:We,type:"dateTime",width:180},{field:"dateCreated",headerName:"Created on",generateData:ze,type:"date",width:150}]
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */;function la(e,a,o,l){return new(o||(o=Promise))((function(n,t){function r(e){try{i(l.next(e))}catch(e){t(e)}}function d(e){try{i(l.throw(e))}catch(e){t(e)}}function i(e){var a;e.done?n(e.value):(a=e.value,a instanceof o?a:new o((function(e){e(a)}))).then(r,d)}i((l=l.apply(e,a||[])).next())}))}export{Je as $,Se as A,De as B,ve as C,B as D,we as E,Me as F,Te as G,Pe as H,Ae as I,Re as J,Be as K,Ge as L,Ie as M,Fe as N,ke as O,Le as P,Ue as Q,Ee as R,xe as S,Ke as T,He as U,Oe as V,Ve as W,ze as X,We as Y,Ze as Z,la as _,oa as a,Ye as a0,je as a1,qe as a2,Qe as a3,Xe as a4,$e as a5,_e as a6,ea as b,T as c,A as d,I as e,L as f,aa as g,G as h,x as i,O as j,W as k,Y as l,X as m,ce as n,he as o,pe as p,be as q,v as r,se as s,ue as t,me as u,ge as v,fe as w,Ce as x,Ne as y,ye as z};