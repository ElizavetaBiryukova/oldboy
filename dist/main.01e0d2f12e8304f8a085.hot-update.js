/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateoldboy"]("main",{

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ (() => {

eval("const button = document.querySelector(\".form__button\");\r\nconst modal = document.querySelector(\".modal\");\r\n\r\nconst phone = document.querySelector(\".form__input--phone\");\r\nconst email = document.querySelector(\".form__input--email\");\r\nconst checkbox = document.querySelector(\".checkbox__input\");\r\nconst modalOpen = document.querySelector(\".modal--open\");\r\n\r\nconst Keys = { ESCAPE: 'Escape', ESC: 'Esc' };\r\n\r\n\r\nbutton.addEventListener('click', function (e) {\r\n    if (phone.validity.valid && email.validity.valid && checkbox.validity.valid) {\r\n        e.preventDefault();\r\n        modal.classList.add(\"modal--open\");\r\n    }\r\n});\r\n\r\nmodal.addEventListener('click', function () {\r\n    modal.classList.remove('modal--open');\r\n});\r\n\r\nwindow.addEventListener('keydown', (e) => {\r\n\r\n    if (e.key === Keys.ESCAPE || e.key === Keys.ESC) {\r\n        modal.classList.remove('modal--open');\r\n    }\r\n\r\n});\r\n\r\n\n\n//# sourceURL=webpack://oldboy/./src/js/modal.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4e691886983b16d01427")
/******/ })();
/******/ 
/******/ }
);