(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"2AO3":function(e,a,t){"use strict";t.r(a);var n=t("mj2O"),c=t.n(n),r=t("7SM1"),l=t("Rqwx"),i=t("QtlZ"),o=t("My8U"),s=t("ERkP"),u=t.n(s),d=t("uDfI"),f=t("SkRI"),b=t("7oto"),m=t("Cpup"),p=t("HSQL");i.a.name="chat";var O=Object(s.lazy)(Object(r.a)(c.a.mark(function _callee(){return c.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(f.a)(function(){return Promise.all([t.e(1),t.e(23),t.e(20),t.e(2),t.e(24),t.e(17),t.e(14),t.e(19),t.e(27)]).then(t.bind(null,"SrLZ"))}));case 1:case"end":return e.stop()}},_callee)})));a.default=function ChatPage(){return Object(s.useEffect)(function(){Object(o.a)({name:"chat",syncWith:"controller",store:i.a}),Object(b.c)({topic:"CONDUCTOR:action-from-plugin",handler:function handler(e){var a=e.data,t=void 0===a?{}:a;i.a.dispatch(Object(m.a)({type:t.action,payload:t.payload}))}}),Object(p.a)("WIDGET_CHAT_FRAME.start")},[]),u.a.createElement(d.a,{store:i.a},u.a.createElement(s.Suspense,{fallback:u.a.createElement(l.a,null)},u.a.createElement(O,null)))}},HXmn:function(e,a,t){"use strict";var n=t("jm9a"),c=t("O94r"),r=t.n(c),l=t("ERkP"),i=t.n(l);t("yhQp");a.a=function LoaderBalls(e){var a,t=e.size,c=void 0===t?"medium":t,l=e.className,o=e.visible,s=void 0===o||o,u=e.style,d=void 0===u?{}:u;return i.a.createElement("div",{style:d,className:r()("drift-widget-loader-balls",(a={},Object(n.a)(a,l,!!l),Object(n.a)(a,"drift-widget-loader-balls--visible",s),Object(n.a)(a,"drift-widget-loader-balls--small","small"===c),a))},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))}},My8U:function(e,a,t){"use strict";var n=t("nfbA"),c=t("SWQ0"),r=t("wNJw"),l=t("7oto");a.a=function UseStoreSync(e){var a=e.store,t=e.syncWith,i=e.name;return Object(l.c)({topic:"CONDUCTOR:action-from-".concat(t),handler:function handler(e){a.dispatch(Object(n.a)(Object(n.a)({},e.data.action),{},{_foreignDispatch:!0}))}}),Object(r.a)(c.a["".concat(i.toUpperCase(),"_READY")]),a}},Rqwx:function(e,a,t){"use strict";var n=t("HXmn"),c=t("ERkP"),r=t.n(c),l=t("uDfI");t("VSUx");a.a=function ChatLoader(){var e=Object(l.c)(function(e){return e.view.chatOpen});return r.a.createElement("div",{className:"drift-widget-chat-layout-loader"},r.a.createElement(n.a,{className:"drift-widget-chat-layout-loader--loader-balls",visible:e}))}},VSUx:function(e,a,t){},yhQp:function(e,a,t){}}]);