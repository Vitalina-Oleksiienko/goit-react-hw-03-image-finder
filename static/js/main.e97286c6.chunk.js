(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,n){},27:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(20),o=n.n(r),c=(n(11),n(9)),i=n(2),u=n(3),l=n(5),h=n(4),p=(n(27),n(0)),d=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).hendleClick=function(){return e.props.onClick(1)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("button",{onClick:this.hendleClick,className:"Button",type:"button",children:"Load more"})}}]),n}(a.Component),m=n(21),j=n.n(m),b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={modalIsOpen:!1},e}return Object(u.a)(n,[{key:"render",value:function(){return this.props.images.map((function(e){var t=e.webformatURL,n=e.id,a=e.tags;return Object(p.jsx)("li",{className:"ImageGalleryItem",children:Object(p.jsx)("img",{id:n,src:t,alt:a,className:"ImageGalleryItem-image"})},n)}))}}]),n}(a.Component),O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("ul",{onClick:this.props.onModalOpen,className:"ImageGallery",children:Object(p.jsx)(b,{images:this.props.images})})})}}]),n}(a.Component);O.propTyppes={onModalOpen:j.a.func};var g=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"lds-ellipsis",children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{})]})}}]),n}(a.Component),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keyup",(function(t){27===t.keyCode&&e.props.onModalCloseByEsc()}))}},{key:"render",value:function(){return Object(p.jsx)("div",{onClick:this.props.onModalClose,onKeyDown:this.props.onKeyDown,className:"Overlay",children:Object(p.jsx)("div",{className:"Modal",children:Object(p.jsx)("img",{className:"LargeGalleryImage",src:this.props.largeImg,alt:""})})})}}]),n}(a.Component),y=n(22),v=n.n(y),S=function(){function e(){Object(i.a)(this,e),this._searchQuery="",this.page=1}return Object(u.a)(e,[{key:"searchQuery",get:function(){return this._searchQuery},set:function(e){return this._searchQuery=e}},{key:"searchPage",get:function(){return this.page},set:function(e){return this.page=e}},{key:"resetPage",value:function(){return this.page=1}},{key:"searchPhotos",value:function(){var e="https://pixabay.com/api/"+"?q=".concat(this.searchQuery,"&page=").concat(this.page,"&per_page=12&image_type=photo&orientation=horizontal&key=").concat("23221080-2cf2140e9411e0421a0100dec");return v.a.get(e).then((function(e){return e})).catch((function(e){console.log(e)}))}}]),e}(),x=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={search:""},e.onSubmit=function(t){t.preventDefault(),""!==e.state.search.trim()?(e.props.onSubmit(e.state.search),e.setState({search:""})):alert("Add your search query")},e.onChange=function(t){e.setState({search:t.target.value})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("header",{className:"Searchbar",children:Object(p.jsxs)("form",{className:"SearchForm",onSubmit:this.onSubmit,children:[Object(p.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(p.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(p.jsx)("input",{onChange:this.onChange,name:"searh",value:this.state.search,className:"SearchForm-input",type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(a.Component),C=new S,k=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={search:"",page:1,status:"init",modalIsOpen:!1,largeImg:"",responseData:[]},e.onSearchFormSubmit=function(t){e.setState({search:t})},e.onClick=function(t){e.setState((function(e){return{page:e.page+1,status:"pending"}})),C.searchPage=e.state.page,C.searchPhotos().then((function(t){e.setState((function(e){return{responseData:[].concat(Object(c.a)(e.responseData),Object(c.a)(t.data.hits))}}))})).catch((function(e){console.log(e)})).finally((function(){e.setState({status:"success"}),window.scrollTo({top:document.documentElement.scrollHeight-1200,behavior:"smooth"})}))},e.onModalOpen=function(t){var n=e.state.responseData.find((function(e){return e.id.toString()===t.target.id}));e.setState((function(e){return{modalIsOpen:!e.modalIsOpen,largeImg:n.largeImageURL}}))},e.onModalClose=function(t){"Overlay"===t.target.className&&"Overlay"===t.currentTarget.className&&e.setState((function(e){return{modalIsOpen:!e.modalIsOpen}}))},e.onModalCloseByEsc=function(){e.setState({modalIsOpen:!1})},e}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this;t.search!==this.state.search&&(window.scrollTo({top:document.documentElement,behavior:"smooth"}),C.resetPage(),this.setState({status:"pending",page:1}),C.searchQuery=this.state.search,C.searchPhotos().then((function(e){0!==e.data.hits.length?n.setState({responseData:Object(c.a)(e.data.hits)}):alert("Nothing to show!")})).then(this.setState((function(e){return{page:e.page+1}}))).finally((function(){n.setState({status:"success"})})))}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x,{onSubmit:this.onSearchFormSubmit}),Object(p.jsx)(O,{images:this.state.responseData,onModalOpen:this.onModalOpen}),"pending"===this.state.status&&Object(p.jsx)(g,{}),this.state.responseData.length>0&&Object(p.jsx)(d,{onClick:this.onClick}),this.state.modalIsOpen&&Object(p.jsx)(f,{onModalOpen:this.onModalOpen,onModalClose:this.onModalClose,onModalCloseByEsc:this.onModalCloseByEsc,largeImg:this.state.largeImg})]})}}]),n}(a.Component);o.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.e97286c6.chunk.js.map