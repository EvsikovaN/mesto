(()=>{"use strict";var e=document.querySelector(".popup__input_type_name"),t=document.querySelector(".popup__input_type_detail"),n=document.querySelector(".profile__btn_edit"),r=document.querySelector(".profile__btn_add"),o=document.querySelector(".profile__btn_avatar"),i=document.querySelector("[name='edit-profile-popup']"),a=document.querySelector("[name='add-card-popup']"),c=document.querySelector("[name='edit-avatar-popup']"),u=(document.querySelectorAll(".popup__form"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__form-error-message",formSection:".popup__form-section"});function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._form=n,this._submitbuttonElement=this._form.querySelector("".concat(this._data.submitButtonSelector)),this._inputList=this._form.querySelectorAll("".concat(this._data.inputSelector))}var t,n;return t=e,(n=[{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(n){e._checkValidity(t),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){Array.from(this._inputList).some((function(e){return!e.validity.valid}))?(this._submitbuttonElement.classList.add("".concat(this._data.inactiveButtonClass)),this._submitbuttonElement.setAttribute("disabled",!0)):(this._submitbuttonElement.classList.remove("".concat(this._data.inactiveButtonClass)),this._submitbuttonElement.removeAttribute("disabled"))}},{key:"_checkValidity",value:function(e){if(e.validity.valid)this._hideError(e);else{var t=e.validationMessage;this._showError(e,t)}}},{key:"_showError",value:function(e,t){var n=this._getErrorElement(e);n.textContent=t,n.classList.add("".concat(this._data.errorClass,"_active")),e.classList.add("".concat(this._data.inputErrorClass))}},{key:"_hideError",value:function(e){var t=this._getErrorElement(e);t.textContent="",t.classList.remove("".concat(this._data.errorClass,"_active")),e.classList.remove("".concat(this._data.inputErrorClass))}},{key:"_getErrorElement",value:function(e){return e.closest("".concat(this._data.formSection)).querySelector(".".concat(this._data.errorClass))}},{key:"resetInputError",value:function(){var e=this;this._toggleButtonState(this._inputList,this._submitbuttonElement),this._inputList.forEach((function(t){e._hideError(t)}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._image=t.link,this._title=t.name,this._likes=t.likes,this._id=t._id,this._myId=a,this._selector=n,this._handleCardClick=r,this._handleLikeClick=o,this._handleDeleteCardClick=i}var t,n;return t=e,(n=[{key:"_getElement",value:function(){return document.querySelector(this._selector).content.querySelector(".card").cloneNode(!0)}},{key:"setLikeToCard",value:function(e,t){e?(this._btnLike.classList.remove("card__btn_like-active"),this._likeCounter.textContent=t.likes.length):(this._btnLike.classList.add("card__btn_like-active"),this._likeCounter.textContent=t.likes.length)}},{key:"_checkLike",value:function(){for(var e=this._likes,t=0;t<e.length;t++)e[t]._id===this._myId&&this._btnLike.classList.add("card__btn_like-active")}},{key:"_checkIsOwner",value:function(){this._data.owner._id!=this._myId&&this._trash.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._btnLike.addEventListener("click",(function(t){e._handleLikeClick(e,t.target.classList.contains("card__btn_like-active"))})),this._trash.addEventListener("click",(function(){e._handleDeleteCardClick(e)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._title,e._image)}))}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"generate",value:function(){return this._element=this._getElement(),this._btnLike=this._element.querySelector(".card__btn_like"),this._cardImage=this._element.querySelector(".card__photo"),this._likeCounter=this._element.querySelector(".like__counter"),this._trash=this._element.querySelector(".trash"),this._setEventListeners(),this._checkLike(),this._checkIsOwner(),this._cardImage.src=this._image,this._cardImage.alt=this._title,this._likeCounter.textContent=this._likes.length,this._element.querySelector(".card__place").textContent=this._title,this._element}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,n=[{key:"renderItems",value:function(e,t){var n=this;e.reverse().forEach((function(e){return n._renderer(e,t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}],n&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._btnSave=this._popupElement.querySelector(".popup__form .popup__save")}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"renderLoading",value:function(e){this._btnSave.textContent=e?"Сохранение...":"Сохранить"}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup__close")||t.target.classList.contains("popup_opened"))&&e.close()}))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function E(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e){var t,n=e.popupSelector,r=e.selectorPictureImagePopup,o=e.selectorTitleImagePopup;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._pictureImagePopup=t._popupElement.querySelector(r),t._titleImagePopup=t._popupElement.querySelector(o),t}return t=a,(n=[{key:"open",value:function(e,t){this._pictureImagePopup.src=t,this._pictureImagePopup.alt=e,this._titleImagePopup.textContent=e,b(w(a.prototype),"open",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function I(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._formPopup=n._popupElement.querySelector(".popup__form"),n._handleFormSubmit=t,n._inputList=n._formPopup.querySelectorAll(".popup__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;P(R(a.prototype),"setEventListeners",this).call(this),this._formPopup.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){P(R(a.prototype),"close",this).call(this),this._formPopup.reset()}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function N(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._formPopup=n._popupElement.querySelector(".popup__form"),n._handleFormSubmit=t,n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;x(V(a.prototype),"setEventListeners",this).call(this),this._formPopup.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._id)}))}},{key:"getIdCard",value:function(e){this._id=e._id,this._card=e}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J,G=function(){function e(t){var n=t.selectorName,r=t.selectorDetail,o=t.selectorAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setAvatar",value:function(e){this._avatar.style.backgroundImage="url(".concat(e,")")}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResStatus",value:function(e){return e.ok?e.json():Promise.reject("Произошла ошибка: ".concat(e.status))}},{key:"getProfileInfo",value:function(){var e=this;return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._checkResStatus(t)}))}},{key:"setProfileInfo",value:function(e){var t=this;return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkResStatus(e)}))}},{key:"setProfileAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"users/me/avatar "),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link})}).then((function(e){return t._checkResStatus(e)}))}},{key:"setLike",value:function(e){var t=this;return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._checkResStatus(e)}))}},{key:"removeLike",value:function(e){var t=this;return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResStatus(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResStatus(e)}))}},{key:"getAllCards",value:function(){var e=this;return fetch("".concat(this._url,"cards "),{method:"GET",headers:this._headers}).then((function(t){return e._checkResStatus(t)}))}},{key:"pushNewCard",value:function(e){var t=this;return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkResStatus(e)}))}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-41/",headers:{authorization:"6a9581f6-9d1d-43e7-9fc7-f5d661b4a5e9","Content-Type":"application/json"}}),$=function(e,t){return new p(e,"#card",Q,W,X,t).generate()},K=new d((function(e,t){var n=$(e,t);K.addItem(n)}),".cards"),Q=function(e,t){ae.open(e,t)};function W(e,t){(t?z.removeLike(e._id):z.setLike(e._id)).then((function(n){e.setLikeToCard(t,n)})).catch((function(e){return console.log(e)}))}function X(e){ne.open(),ne.getIdCard(e)}var Y=new G({selectorName:".profile__name",selectorDetail:".profile__detail",selectorAvatar:".profile__btn_avatar"}),Z=new l(u,i),ee=new l(u,a),te=new l(u,c);Z.enableValidation(),ee.enableValidation(),te.enableValidation();var ne=new U("#delete-card",(function(e){ne.renderLoading(!0),z.deleteCard(e).then((function(){ne._card.deleteCard(),ne.close()})).catch((function(e){return console.log(e)})).finally((function(){ne.renderLoading(!1)}))})),re=new q("#edit-profile",(function(e){re.renderLoading(!0),z.setProfileInfo(e).then((function(e){Y.setUserInfo(e),re.close()})).catch((function(e){return console.log(e)})).finally((function(){re.renderLoading(!1)}))})),oe=new q("#add-card",(function(e){oe.renderLoading(!0),z.pushNewCard(e).then((function(e){var t=$(e,J);K.addItem(t),oe.close()})).catch((function(e){return console.log(e)})).finally((function(){oe.renderLoading(!1)}))})),ie=new q("#edit-avatar",(function(e){ie.renderLoading(!0),z.setProfileAvatar(e).then((function(e){Y.setAvatar(e.avatar),ie.close()})).catch((function(e){return console.log(e)})).finally((function(){ie.renderLoading(!1)}))})),ae=new S({popupSelector:"#card-image",selectorPictureImagePopup:".popup__image",selectorTitleImagePopup:".popup__image-title"});re.setEventListeners(),oe.setEventListeners(),ae.setEventListeners(),ie.setEventListeners(),ne.setEventListeners(),n.addEventListener("click",(function(){var n=Y.getUserInfo();e.value=n.name,t.value=n.about,Z.resetInputError(),re.open()})),r.addEventListener("click",(function(){ee.resetInputError(),oe.open()})),o.addEventListener("click",(function(){ie.open()})),Promise.all([z.getProfileInfo(),z.getAllCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Y.setUserInfo(o),Y.setAvatar(o.avatar),K.renderItems(i,o._id),J=o._id})).catch((function(e){return console.log(e)}))})();