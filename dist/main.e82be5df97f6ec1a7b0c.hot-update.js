/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateoldboy"]("main",{

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ (() => {

eval("const burger = document.querySelector('.burger');\r\nconst nav = document.querySelector('.nav');\r\nconst body = document.querySelector('.page__body');\r\nconst navItem = document.querySelectorAll('.nav__item');\r\n\r\nburger.addEventListener('click', () => {\r\n    nav.classList.toggle('nav--open');\r\n    burger.classList.toggle('burger--open');\r\n    body.classList.toggle('no-scrolle');\r\n\r\n})\r\n\r\nwindow.addEventListener('click', e => {\r\n    const target = e.target\r\n    if (!target.closest('.nav') && !target.closest('.burger')) {\r\n        nav.classList.remove('nav--open');\r\n        burger.classList.remove('burger--open');\r\n        body.classList.remove('no-scrolle');\r\n    }\r\n})\r\n\r\nnavItem.forEach((item) => item.addEventListener('click', () => {\r\n    nav.classList.remove('nav--open');\r\n    burger.classList.remove('burger--open');\r\n    body.classList.remove('no-scrolle');\r\n}));\n\n//# sourceURL=webpack://oldboy/./src/js/menu.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("46c68bc7d48f60738f7c")
/******/ })();
/******/ 
/******/ }
);