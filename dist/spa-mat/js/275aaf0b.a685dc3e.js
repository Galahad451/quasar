(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["275aaf0b"],{

/***/ "8041":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c3a2");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8b24":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index.vue?vue&type=template&id=9b1ae68e&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("q-page", { staticClass: "flex flex-center" }, [
    _c("h1", [_vm._v("AMERIKE")]),
    _c("p", [_vm._v("plataforma tecnológica")]),
    _c(
      "form",
      [
        _c("label", [_vm._v("Matrícula")]),
        _c("q-input", {
          staticClass: "input-box",
          attrs: { type: "text", placeholder: "Matrícula" }
        }),
        _c("label", [_vm._v("Contraseña")]),
        _c("q-input", {
          staticClass: "input-box",
          attrs: { type: "password", placeholder: "Contraseña" }
        }),
        _c("q-checkbox", {
          attrs: { color: "white", label: "Recordar cuenta" },
          model: {
            value: _vm.check1,
            callback: function($$v) {
              _vm.check1 = $$v
            },
            expression: "check1"
          }
        }),
        _c("q-btn", {
          staticClass: "full-width inputBtn",
          attrs: { label: "Entrar", to: "salones", color: "secondary" }
        }),
        _c("a", { attrs: { href: "#/recuperar" } }, [
          _c("p", [_vm._v("¿Olvidaste la contraseña?")])
        ]),
        _c("p", { staticClass: "usuario-nuevo" }, [
          _vm._v("¿Eres usuario nuevo? "),
          _c("a", { attrs: { href: "#/registro" } }, [
            _vm._v("Regístrate aquí")
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=template&id=9b1ae68e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index.vue?vue&type=script&lang=js&
/* harmony default export */ var Indexvue_type_script_lang_js_ = ({
  name: 'PageIndex',
  data: function data() {
    return {
      check1: false,
      check2: true,
      password: 'password'
    };
  }
});
// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Index.vue?vue&type=style&index=0&lang=css&
var Indexvue_type_style_index_0_lang_css_ = __webpack_require__("8041");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/Index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Index.vue"
/* harmony default export */ var Index = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "c3a2":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("c3fb");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2d2c1726", content, false, {"sourceMap":true});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "c3fb":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(true);
// imports


// module
exports.push([module.i, "\nbody {\n  background-color: #4a4944;\n  color: #FFFFFF;\n}\nh1, p{\n  display: block;\n  width: 100%;\n  text-align: center;\n}\nform {\n  width: 80%;\n}\ninput {\n  width: 100%;\n  padding: 10px 10px;\n  margin: 8px 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.input-box {\n  color: black;\n  background-color: white;\n  padding: 10px 10px;\n  margin: 8px 0;\n}\nq-input .q-icon {\n  color: white;\n}\nform .inputBtn {\n  margin-top: 30px;\n}\na:link {\n  color: white;\n}\na:visited {\n  color: white;\n}\na p{\n  font-size: 0.7em;\n  text-align: right;\n}\n.usuario-nuevo {\n  font-size: 0.7em;\n  margin-top: 30px;\n}\n", "", {"version":3,"sources":["/Users/JPVenegas/Documents/LDSIV/UX/quasar/proyectoq/src/pages/src/pages/Index.vue"],"names":[],"mappings":";AAkBA;EACA,0BAAA;EACA,eAAA;CACA;AACA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;CACA;AACA;EACA,WAAA;CACA;AACA;EACA,YAAA;EACA,mBAAA;EACA,cAAA;EACA,+BAAA;UAAA,uBAAA;CACA;AACA;EACA,aAAA;EACA,wBAAA;EACA,mBAAA;EACA,cAAA;CACA;AACA;EACA,aAAA;CACA;AACA;EACA,iBAAA;CACA;AACA;EACA,aAAA;CACA;AACA;EACA,aAAA;CACA;AACA;EACA,iBAAA;EACA,kBAAA;CACA;AACA;EACA,iBAAA;EACA,iBAAA;CACA","file":"Index.vue?vue&type=style&index=0&lang=css&","sourcesContent":["<template>\n  <q-page class=\"flex flex-center\">\n    <h1>AMERIKE</h1>\n    <p>plataforma tecnológica</p>\n    <form>\n      <label>Matrícula</label>\n      <q-input class=\"input-box\" type=\"text\" placeholder=\"Matrícula\"/>\n      <label>Contraseña</label>\n      <q-input class=\"input-box\" type=\"password\" placeholder=\"Contraseña\"/>\n      <q-checkbox v-model=\"check1\" color=\"white\" label=\"Recordar cuenta\"/>\n      <q-btn class=\"full-width inputBtn\" label=\"Entrar\" to=\"salones\" color=\"secondary\"/>\n      <a href=\"#/recuperar\"><p>¿Olvidaste la contraseña?</p></a>\n      <p class=\"usuario-nuevo\">¿Eres usuario nuevo? <a href=\"#/registro\">Regístrate aquí</a></p>\n    </form>\n  </q-page>\n</template>\n\n<style>\n  body {\n    background-color: #4a4944;\n    color: #FFFFFF;\n  }\n  h1, p{\n    display: block;\n    width: 100%;\n    text-align: center;\n  }\n  form {\n    width: 80%;\n  }\n  input {\n    width: 100%;\n    padding: 10px 10px;\n    margin: 8px 0;\n    box-sizing: border-box;\n  }\n  .input-box {\n    color: black;\n    background-color: white;\n    padding: 10px 10px;\n    margin: 8px 0;\n  }\n  q-input .q-icon {\n    color: white;\n  }\n  form .inputBtn {\n    margin-top: 30px;\n  }\n  a:link {\n    color: white;\n  }\n  a:visited {\n    color: white;\n  }\n  a p{\n    font-size: 0.7em;\n    text-align: right;\n  }\n  .usuario-nuevo {\n    font-size: 0.7em;\n    margin-top: 30px;\n  }\n</style>\n<script>\nexport default {\n  name: 'PageIndex',\n  data () {\n    return {\n      check1: false,\n      check2: true,\n      password: 'password'\n    }\n  }\n}\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ })

}]);
//# sourceMappingURL=275aaf0b.a685dc3e.js.map