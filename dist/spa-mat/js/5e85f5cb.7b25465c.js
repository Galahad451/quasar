(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["5e85f5cb"],{

/***/ "15d8":
/***/ (function(module, exports) {



/***/ }),

/***/ "41be":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/registro.vue?vue&type=template&id=0fb3c293&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("q-page", { staticClass: "register-page flex-center" }, [
    _c("h1", [_vm._v("AMERIKE")]),
    _c(
      "div",
      { staticClass: "register-form" },
      [
        _c("q-input", {
          attrs: {
            placeholder: "Ej. María Mercado Rueda",
            color: "white",
            dark: "",
            "stack-label": "Nombre Completo"
          },
          model: {
            value: _vm.text,
            callback: function($$v) {
              _vm.text = $$v
            },
            expression: "text"
          }
        }),
        _c("q-input", {
          attrs: {
            placeholder: "Ej. zpdv18200090@amerike.edu.mx",
            color: "white",
            dark: "",
            "stack-label": "Matrícula"
          },
          model: {
            value: _vm.text,
            callback: function($$v) {
              _vm.text = $$v
            },
            expression: "text"
          }
        }),
        _c("q-input", {
          attrs: {
            type: "password",
            color: "white",
            dark: "",
            "stack-label": "Contraseña"
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
          staticClass: "full-width register-button",
          attrs: { label: "Registrarse", color: "secondary", to: "/" }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/pages/registro.vue?vue&type=template&id=0fb3c293&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ "7f43":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(true);
// imports


// module
exports.push([module.i, "\nbody{\n  background-color: #4A4944;\n  color: #FFF;\n}\nh1{\n  display: block;\n  width: 100%;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  margin-bottom: 20px;\n}\n.register-page{\n  padding: 50px;\n}\n.register-button{\n  margin-top: 20px;\n}\n", "", {"version":3,"sources":["/Users/JPVenegas/Documents/LDSIV/UX/quasar/proyectoq/src/pages/src/pages/registro.vue"],"names":[],"mappings":";AAYA;EACA,0BAAA;EACA,YAAA;CACA;AACA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;EACA,WAAA;EACA,UAAA;EACA,oBAAA;CACA;AACA;EACA,cAAA;CACA;AACA;EACA,iBAAA;CACA","file":"registro.vue?vue&type=style&index=0&lang=css&","sourcesContent":["<template>\n  <q-page class=\"register-page flex-center\">\n    <h1>AMERIKE</h1>\n    <div class=\"register-form\">\n      <q-input v-model=\"text\" placeholder=\"Ej. María Mercado Rueda\" color=\"white\" dark stack-label=\"Nombre Completo\"/>\n      <q-input v-model=\"text\" placeholder=\"Ej. zpdv18200090@amerike.edu.mx\" color=\"white\" dark stack-label=\"Matrícula\"/>\n      <q-input v-model=\"text\" type=\"password\" color=\"white\" dark stack-label=\"Contraseña\"/>\n      <q-btn label=\"Registrarse\" color=\"secondary\" to=\"/\" class=\"full-width register-button\"/>\n    </div>\n  </q-page>\n</template>\n<style>\n  body{\n    background-color: #4A4944;\n    color: #FFF;\n  }\n  h1{\n    display: block;\n    width: 100%;\n    text-align: center;\n    padding: 0;\n    margin: 0;\n    margin-bottom: 20px;\n  }\n  .register-page{\n    padding: 50px;\n  }\n  .register-button{\n    margin-top: 20px;\n  }\n</style>\n<script>\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "8b8b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registro_vue_vue_type_template_id_0fb3c293___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("41be");
/* harmony import */ var _registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c13e");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _registro_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9ae3");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _registro_vue_vue_type_template_id_0fb3c293___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _registro_vue_vue_type_template_id_0fb3c293___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "registro.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "9ae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registro_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e2ee");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registro_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registro_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registro_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c13e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("15d8");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e2ee":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7f43");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("0ca8dc03", content, false, {"sourceMap":true});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=5e85f5cb.7b25465c.js.map