(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["889824ae"],{

/***/ "b1ee":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("be93");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("f6302238", content, false, {"sourceMap":true});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "be93":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(true);
// imports


// module
exports.push([module.i, "\n.left-menu{\n  background-color: #4A4944;\n  color: white;\n}\n", "", {"version":3,"sources":["/Users/JPVenegas/Documents/LDSIV/UX/quasar/proyectoq/src/layouts/src/layouts/MyLayout.vue"],"names":[],"mappings":";AA6CA;EACA,0BAAA;EACA,aAAA;CACA","file":"MyLayout.vue?vue&type=style&index=0&lang=css&","sourcesContent":["<template>\n  <q-layout view=\"lHh Lpr lFf\">\n    <q-layout-header>\n      <q-toolbar\n        color=aqua\n        :inverted=\"$q.theme === 'ios'\"\n      >\n        <q-btn\n          flat\n          dense\n          round\n          @click=\"leftDrawerOpen = !leftDrawerOpen\"\n          aria-label=\"Menu\"\n        >\n          <q-icon name=\"menu\"/>\n        </q-btn>\n\n        <q-toolbar-title>\n          Chapa App\n          <div slot=\"subtitle\">Abridor de puertas</div>\n        </q-toolbar-title>\n      </q-toolbar>\n    </q-layout-header>\n    <q-layout-drawer\n      v-model=\"leftDrawerOpen\"\n      :content-class=\"$q.theme === 'mat' ? 'bg-grey-2' : null\"\n    >\n      <q-list\n        no-border\n        link\n        inset-delimiter\n      class=\"left-menu\">\n        <q-list-header>Menú</q-list-header>\n        <q-item @click.native=\"goto('/')\">\n          <q-item-side icon=\"school\" />\n          <q-item-main label=\"Home\" sublabel=\"Ir al inicio\" />\n        </q-item>\n      </q-list>\n    </q-layout-drawer>\n    <q-page-container>\n      <router-view />\n    </q-page-container>\n  </q-layout>\n</template>\n<style>\n  .left-menu{\n    background-color: #4A4944;\n    color: white;\n  }\n</style>\n<script>\n// import { openURL } from 'quasar'\n\nexport default {\n  name: 'MyLayout',\n  data () {\n    return {\n      leftDrawerOpen: this.$q.platform.is.desktop\n    }\n  },\n  methods: {\n    goto (where) {\n      this.$router.push(where)\n    }\n  }\n}\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "eb60":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b1ee");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f241":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/MyLayout.vue?vue&type=template&id=86525b4e&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "q-layout",
    { attrs: { view: "lHh Lpr lFf" } },
    [
      _c(
        "q-layout-header",
        [
          _c(
            "q-toolbar",
            { attrs: { color: "aqua", inverted: _vm.$q.theme === "ios" } },
            [
              _c(
                "q-btn",
                {
                  attrs: {
                    flat: "",
                    dense: "",
                    round: "",
                    "aria-label": "Menu"
                  },
                  on: {
                    click: function($event) {
                      _vm.leftDrawerOpen = !_vm.leftDrawerOpen
                    }
                  }
                },
                [_c("q-icon", { attrs: { name: "menu" } })],
                1
              ),
              _c("q-toolbar-title", [
                _vm._v("\n        Chapa App\n        "),
                _c("div", { attrs: { slot: "subtitle" }, slot: "subtitle" }, [
                  _vm._v("Abridor de puertas")
                ])
              ])
            ],
            1
          )
        ],
        1
      ),
      _c(
        "q-layout-drawer",
        {
          attrs: {
            "content-class": _vm.$q.theme === "mat" ? "bg-grey-2" : null
          },
          model: {
            value: _vm.leftDrawerOpen,
            callback: function($$v) {
              _vm.leftDrawerOpen = $$v
            },
            expression: "leftDrawerOpen"
          }
        },
        [
          _c(
            "q-list",
            {
              staticClass: "left-menu",
              attrs: { "no-border": "", link: "", "inset-delimiter": "" }
            },
            [
              _c("q-list-header", [_vm._v("Menú")]),
              _c(
                "q-item",
                {
                  nativeOn: {
                    click: function($event) {
                      _vm.goto("/")
                    }
                  }
                },
                [
                  _c("q-item-side", { attrs: { icon: "school" } }),
                  _c("q-item-main", {
                    attrs: { label: "Home", sublabel: "Ir al inicio" }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c("q-page-container", [_c("router-view")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/layouts/MyLayout.vue?vue&type=template&id=86525b4e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/MyLayout.vue?vue&type=script&lang=js&
/* harmony default export */ var MyLayoutvue_type_script_lang_js_ = ({
  name: 'MyLayout',
  data: function data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  },
  methods: {
    goto: function goto(where) {
      this.$router.push(where);
    }
  }
});
// CONCATENATED MODULE: ./src/layouts/MyLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_MyLayoutvue_type_script_lang_js_ = (MyLayoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layouts/MyLayout.vue?vue&type=style&index=0&lang=css&
var MyLayoutvue_type_style_index_0_lang_css_ = __webpack_require__("eb60");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/layouts/MyLayout.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_MyLayoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "MyLayout.vue"
/* harmony default export */ var MyLayout = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=889824ae.0d897d4d.js.map