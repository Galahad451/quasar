(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["07ca01b3"],{

/***/ "106a":
/***/ (function(module, exports) {



/***/ }),

/***/ "1c7f":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(true);
// imports


// module
exports.push([module.i, "\nbody{\n  background-color: #4A4944;\n  color: #FFF;\n}\n.recover-page h1 {\n  display: block;\n  width: 100%;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  margin-bottom: 20px;\n}\n.recover-page h4 {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n.recover-page p{\n  display: block;\n  width: 100%;\n  padding: 0 50px;\n}\n.recover-form{\n  margin: 20px 50px;\n}\n.recover-page .q-btn{\n  margin-top: 50px;\n}\n", "", {"version":3,"sources":["/Users/JPVenegas/Documents/LDSIV/UX/quasar/proyectoq/src/pages/src/pages/recuperar.vue"],"names":[],"mappings":";AAYA;EACA,0BAAA;EACA,YAAA;CACA;AACA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;EACA,WAAA;EACA,UAAA;EACA,oBAAA;CACA;AACA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;CACA;AACA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;CACA;AACA;EACA,kBAAA;CACA;AACA;EACA,iBAAA;CACA","file":"recuperar.vue?vue&type=style&index=0&lang=css&","sourcesContent":["<template>\n  <q-page class=\"flex-center recover-page\">\n    <h1>AMERIKE</h1>\n    <u><h4><i class=\"fas fa-key\"></i>   Recuperar Contraseña</h4></u>\n    <p>Ingresa tu matrícula y te enviaremos un enlace para que recuperes tu contraseña</p>\n    <div class=\"recover-form\">\n      <q-input v-model=\"text\" dark placeholder=\"Ej. zpdv18200090@amerike.edu.mx\" stack-label=\"Matrícula\" color=\"white\"/>\n      <q-btn color=\"secondary\" label=\"Enviar\" class=\"full-width\" to=\"/\"/>\n  </div>\n  </q-page>\n</template>\n<style>\n  body{\n    background-color: #4A4944;\n    color: #FFF;\n  }\n  .recover-page h1 {\n    display: block;\n    width: 100%;\n    text-align: center;\n    padding: 0;\n    margin: 0;\n    margin-bottom: 20px;\n  }\n  .recover-page h4 {\n    display: block;\n    width: 100%;\n    text-align: center;\n  }\n  .recover-page p{\n    display: block;\n    width: 100%;\n    padding: 0 50px;\n  }\n  .recover-form{\n    margin: 20px 50px;\n  }\n  .recover-page .q-btn{\n    margin-top: 50px;\n  }\n</style>\n<script></script>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "1d24":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recuperar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("106a");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recuperar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recuperar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recuperar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recuperar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recuperar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8668":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/recuperar.vue?vue&type=template&id=2a6c1b9a&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("q-page", { staticClass: "flex-center recover-page" }, [
    _c("h1", [_vm._v("AMERIKE")]),
    _c("u", [
      _c("h4", [
        _c("i", { staticClass: "fas fa-key" }),
        _vm._v("   Recuperar Contraseña")
      ])
    ]),
    _c("p", [
      _vm._v(
        "Ingresa tu matrícula y te enviaremos un enlace para que recuperes tu contraseña"
      )
    ]),
    _c(
      "div",
      { staticClass: "recover-form" },
      [
        _c("q-input", {
          attrs: {
            dark: "",
            placeholder: "Ej. zpdv18200090@amerike.edu.mx",
            "stack-label": "Matrícula",
            color: "white"
          },
          model: {
            value: _vm.text,
            callback: function($$v) {
              _vm.text = $$v
            },
            expression: "text"
          }
        }),
        _c("q-btn", {
          staticClass: "full-width",
          attrs: { color: "secondary", label: "Enviar", to: "/" }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/pages/recuperar.vue?vue&type=template&id=2a6c1b9a&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ "cf8c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_recuperar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f1f3");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_recuperar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_recuperar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_recuperar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f1f3":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1c7f");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("916254e6", content, false, {"sourceMap":true});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "f362":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recuperar_vue_vue_type_template_id_2a6c1b9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8668");
/* harmony import */ var _recuperar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1d24");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _recuperar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _recuperar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _recuperar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cf8c");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _recuperar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _recuperar_vue_vue_type_template_id_2a6c1b9a___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _recuperar_vue_vue_type_template_id_2a6c1b9a___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "recuperar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=07ca01b3.3a8e09ec.js.map