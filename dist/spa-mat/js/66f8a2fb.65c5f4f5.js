(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["66f8a2fb"],{

/***/ "4dce":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(true);
// imports


// module
exports.push([module.i, "\nbody{\n  background-color: #4A4944;\n  color: #FFF;\n}\nsection{\n  background-color: aliceblue;\n  top: -100px;\n}\n.nav-buttons{\n  width: 100%;\n}\n.nav-buttons .nav-button{\n  width: 100%;\n  height: 50px;\n}\n.tab{\n  background-color: #4A4944;\n  color: whitesmoke;\n}\n.tab-pane{\n  padding: 0;\n  background-color: ghostwhite;\n  color: dimgray;\n}\n.grid-container{\n  display: grid;\n  grid-template-columns: auto auto;\n}\n.grid-item{\n  text-align: center;\n  padding: 10px;\n  vertical-align: middle;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n", "", {"version":3,"sources":["/Users/JPVenegas/Documents/LDSIV/UX/quasar/proyectoq/src/pages/src/pages/salones.vue"],"names":[],"mappings":";AA6GA;EACA,0BAAA;EACA,YAAA;CACA;AACA;EACA,4BAAA;EACA,YAAA;CACA;AACA;EACA,YAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;CACA;AACA;EACA,0BAAA;EACA,kBAAA;CACA;AACA;EACA,WAAA;EACA,6BAAA;EACA,eAAA;CACA;AACA;EACA,cAAA;EACA,iCAAA;CACA;AACA;EACA,mBAAA;EACA,cAAA;EACA,uBAAA;EACA,iBAAA;EACA,oBAAA;CACA","file":"salones.vue?vue&type=style&index=0&lang=css&","sourcesContent":["<template>\n  <q-page class=\"flex-center\">\n    <section>\n      <q-tabs>\n        <!-- Tabs - notice slot=\"title\" -->\n        <q-tab default class=\"tab\" slot=\"title\" label=\"Salones\" name=\"tab-1\"/>\n        <q-tab class=\"tab\" slot=\"title\" name=\"tab-2\" label=\"Maps\" />\n        <!-- Targets -->\n        <q-tab-pane class=\"tab-pane\" name=\"tab-1\">\n          <q-layout-footer v-model=\"footer\">\n            <q-tabs position=\"bottom\">\n              <q-tab-pane class=\"tab-pane\" name=\"piso-1\">\n                <div class=\"grid-container\">\n                  <div class=\"grid-item\">Salón 101</div>\n                  <div class=\"grid-item\">\n                    <q-btn name=\"salon-2\" label=\"Abrir\" :loading=\"loading\" @click=\"handler\"></q-btn>\n                  </div>\n                  <div class=\"grid-item\">Salón 102</div>\n                  <div class=\"grid-item\">\n                    <q-btn label=\"Abrir\" :loading=\"loading\" @click=\"handler\"></q-btn>\n                  </div>\n                  <div class=\"grid-item\">Salón 103</div>\n                  <div class=\"grid-item\">\n                    <q-btn label=\"Abrir\" :loading=\"loading\" @click=\"handler\"></q-btn>\n                  </div>\n                  <div class=\"grid-item\">Salón 104</div>\n                  <div class=\"grid-item\">\n                    <q-btn label=\"Abrir\" :loading=\"loading\" @click=\"handler\"></q-btn>\n                  </div>\n                  <div class=\"grid-item\">Salón 105</div>\n                  <div class=\"grid-item\">\n                    <q-btn label=\"Abrir\" :loading=\"loading\" @click=\"handler\"></q-btn>\n                  </div>\n                  <div class=\"grid-item\">Salón 106</div>\n                  <div class=\"grid-item\">\n                    <q-btn label=\"Abrir\" :loading=\"loading\" @click=\"handler\"></q-btn>\n                  </div>\n                </div>\n              </q-tab-pane>\n              <q-tab-pane class=\"tab-pane\" name=\"piso-2\">\n                <div class=\"grid-container\">\n                  <div class=\"grid-item\">Salón 201</div>\n                  <div class=\"grid-item\">\n                    <q-btn name=\"salon-2\" label=\"Abrir\" :loading=\"loading\" @click=\"handler\"></q-btn>\n                  </div>\n                  <div class=\"grid-item\">Salón 202</div>\n                  <div class=\"grid-item\">\n                    <q-btn label=\"Abrir\" :loading=\"loading\" @click=\"handler\"></q-btn>\n                  </div>\n                  <div class=\"grid-item\">Salón 203</div>\n                  <div class=\"grid-item\">\n                    <q-btn label=\"Abrir\" :loading=\"loading\" @click=\"handler\"></q-btn>\n                  </div>\n                  <div class=\"grid-item\">Salón 204</div>\n                  <div class=\"grid-item\">\n                    <q-btn label=\"Abrir\" :loading=\"loading\" @click=\"handler\"></q-btn>\n                  </div>\n                  <div class=\"grid-item\">Salón 205</div>\n                  <div class=\"grid-item\">\n                    <q-btn label=\"Abrir\" :loading=\"loading\" @click=\"handler\"></q-btn>\n                  </div>\n                  <div class=\"grid-item\">Salón 206</div>\n                  <div class=\"grid-item\">\n                    <q-btn label=\"Abrir\" :loading=\"loading\" @click=\"handler\"></q-btn>\n                  </div>\n                </div>\n              </q-tab-pane>\n              <q-tab-pane name=\"piso-3\" class=\"tab-pane\">\n                <div class=\"grid-container\">\n                  <div class=\"grid-item\">Salón 301</div>\n                  <div class=\"grid-item\">\n                    <q-btn name=\"salon-2\" label=\"Abrir\" :loading=\"loading\" @click=\"handler\"></q-btn>\n                  </div>\n                  <div class=\"grid-item\">Salón 302</div>\n                  <div class=\"grid-item\">\n                    <q-btn label=\"Abrir\" :loading=\"loading\" @click=\"handler\"></q-btn>\n                  </div>\n                  <div class=\"grid-item\">Salón 303</div>\n                  <div class=\"grid-item\">\n                    <q-btn label=\"Abrir\" :loading=\"loading\" @click=\"handler\"></q-btn>\n                  </div>\n                  <div class=\"grid-item\">Salón 304</div>\n                  <div class=\"grid-item\">\n                    <q-btn label=\"Abrir\" :loading=\"loading\" @click=\"handler\"></q-btn>\n                  </div>\n                  <div class=\"grid-item\">Salón 305</div>\n                  <div class=\"grid-item\">\n                    <q-btn label=\"Abrir\" :loading=\"loading\" @click=\"handler\"></q-btn>\n                  </div>\n                  <div class=\"grid-item\">Salón 306</div>\n                  <div class=\"grid-item\">\n                    <q-btn label=\"Abrir\" :loading=\"loading\" @click=\"handler\"></q-btn>\n                  </div>\n                </div>\n              </q-tab-pane>\n              <q-tab default class=\"tab\" slot=\"title\" name=\"piso-1\" label=\"Piso 1\"/>\n              <q-tab class=\"tab\" slot=\"title\" name=\"piso-2\" label=\"Piso 2\"/>\n              <q-tab class=\"tab\" slot=\"title\" name=\"piso-3\" label=\"Piso 3\"/>\n            </q-tabs>\n          </q-layout-footer>\n        </q-tab-pane>\n        <q-tab-pane class=\"tab-pane\" name=\"tab-2\">\n          <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.9630122808508!2d-103.41044718471852!3d20.6303644066342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ac4c6738bb13%3A0xbbe036eb095f6aa0!2sAmerike+Instituto+de+Estudios+Universitarios!5e0!3m2!1ses!2smx!4v1542821985805\" width=100% height=400px frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n        </q-tab-pane>\n      </q-tabs>\n    </section>\n  </q-page>\n</template>\n<style>\n  body{\n    background-color: #4A4944;\n    color: #FFF;\n  }\n  section{\n    background-color: aliceblue;\n    top: -100px;\n  }\n  .nav-buttons{\n    width: 100%;\n  }\n  .nav-buttons .nav-button{\n    width: 100%;\n    height: 50px;\n  }\n  .tab{\n    background-color: #4A4944;\n    color: whitesmoke;\n  }\n  .tab-pane{\n    padding: 0;\n    background-color: ghostwhite;\n    color: dimgray;\n  }\n  .grid-container{\n    display: grid;\n    grid-template-columns: auto auto;\n  }\n  .grid-item{\n    text-align: center;\n    padding: 10px;\n    vertical-align: middle;\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n</style>\n<script>\nexport default {\n  data () {\n    return {\n      loading: false\n    }\n  },\n  methods: {\n    handler () {\n      this.loading = true\n      // we simulate a delay here:\n      setTimeout(() => {\n        this.loading = false\n      }, 5000)\n    }\n  }\n}\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "de22":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_salones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f263");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_salones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_salones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_2_0_node_modules_css_loader_index_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_salones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f263":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4dce");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("08a0c9e6", content, false, {"sourceMap":true});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "f596":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/salones.vue?vue&type=template&id=e6b45cf6&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("q-page", { staticClass: "flex-center" }, [
    _c(
      "section",
      [
        _c(
          "q-tabs",
          [
            _c("q-tab", {
              staticClass: "tab",
              attrs: {
                slot: "title",
                default: "",
                label: "Salones",
                name: "tab-1"
              },
              slot: "title"
            }),
            _c("q-tab", {
              staticClass: "tab",
              attrs: { slot: "title", name: "tab-2", label: "Maps" },
              slot: "title"
            }),
            _c(
              "q-tab-pane",
              { staticClass: "tab-pane", attrs: { name: "tab-1" } },
              [
                _c(
                  "q-layout-footer",
                  {
                    model: {
                      value: _vm.footer,
                      callback: function($$v) {
                        _vm.footer = $$v
                      },
                      expression: "footer"
                    }
                  },
                  [
                    _c(
                      "q-tabs",
                      { attrs: { position: "bottom" } },
                      [
                        _c(
                          "q-tab-pane",
                          {
                            staticClass: "tab-pane",
                            attrs: { name: "piso-1" }
                          },
                          [
                            _c("div", { staticClass: "grid-container" }, [
                              _c("div", { staticClass: "grid-item" }, [
                                _vm._v("Salón 101")
                              ]),
                              _c(
                                "div",
                                { staticClass: "grid-item" },
                                [
                                  _c("q-btn", {
                                    attrs: {
                                      name: "salon-2",
                                      label: "Abrir",
                                      loading: _vm.loading
                                    },
                                    on: { click: _vm.handler }
                                  })
                                ],
                                1
                              ),
                              _c("div", { staticClass: "grid-item" }, [
                                _vm._v("Salón 102")
                              ]),
                              _c(
                                "div",
                                { staticClass: "grid-item" },
                                [
                                  _c("q-btn", {
                                    attrs: {
                                      label: "Abrir",
                                      loading: _vm.loading
                                    },
                                    on: { click: _vm.handler }
                                  })
                                ],
                                1
                              ),
                              _c("div", { staticClass: "grid-item" }, [
                                _vm._v("Salón 103")
                              ]),
                              _c(
                                "div",
                                { staticClass: "grid-item" },
                                [
                                  _c("q-btn", {
                                    attrs: {
                                      label: "Abrir",
                                      loading: _vm.loading
                                    },
                                    on: { click: _vm.handler }
                                  })
                                ],
                                1
                              ),
                              _c("div", { staticClass: "grid-item" }, [
                                _vm._v("Salón 104")
                              ]),
                              _c(
                                "div",
                                { staticClass: "grid-item" },
                                [
                                  _c("q-btn", {
                                    attrs: {
                                      label: "Abrir",
                                      loading: _vm.loading
                                    },
                                    on: { click: _vm.handler }
                                  })
                                ],
                                1
                              ),
                              _c("div", { staticClass: "grid-item" }, [
                                _vm._v("Salón 105")
                              ]),
                              _c(
                                "div",
                                { staticClass: "grid-item" },
                                [
                                  _c("q-btn", {
                                    attrs: {
                                      label: "Abrir",
                                      loading: _vm.loading
                                    },
                                    on: { click: _vm.handler }
                                  })
                                ],
                                1
                              ),
                              _c("div", { staticClass: "grid-item" }, [
                                _vm._v("Salón 106")
                              ]),
                              _c(
                                "div",
                                { staticClass: "grid-item" },
                                [
                                  _c("q-btn", {
                                    attrs: {
                                      label: "Abrir",
                                      loading: _vm.loading
                                    },
                                    on: { click: _vm.handler }
                                  })
                                ],
                                1
                              )
                            ])
                          ]
                        ),
                        _c(
                          "q-tab-pane",
                          {
                            staticClass: "tab-pane",
                            attrs: { name: "piso-2" }
                          },
                          [
                            _c("div", { staticClass: "grid-container" }, [
                              _c("div", { staticClass: "grid-item" }, [
                                _vm._v("Salón 201")
                              ]),
                              _c(
                                "div",
                                { staticClass: "grid-item" },
                                [
                                  _c("q-btn", {
                                    attrs: {
                                      name: "salon-2",
                                      label: "Abrir",
                                      loading: _vm.loading
                                    },
                                    on: { click: _vm.handler }
                                  })
                                ],
                                1
                              ),
                              _c("div", { staticClass: "grid-item" }, [
                                _vm._v("Salón 202")
                              ]),
                              _c(
                                "div",
                                { staticClass: "grid-item" },
                                [
                                  _c("q-btn", {
                                    attrs: {
                                      label: "Abrir",
                                      loading: _vm.loading
                                    },
                                    on: { click: _vm.handler }
                                  })
                                ],
                                1
                              ),
                              _c("div", { staticClass: "grid-item" }, [
                                _vm._v("Salón 203")
                              ]),
                              _c(
                                "div",
                                { staticClass: "grid-item" },
                                [
                                  _c("q-btn", {
                                    attrs: {
                                      label: "Abrir",
                                      loading: _vm.loading
                                    },
                                    on: { click: _vm.handler }
                                  })
                                ],
                                1
                              ),
                              _c("div", { staticClass: "grid-item" }, [
                                _vm._v("Salón 204")
                              ]),
                              _c(
                                "div",
                                { staticClass: "grid-item" },
                                [
                                  _c("q-btn", {
                                    attrs: {
                                      label: "Abrir",
                                      loading: _vm.loading
                                    },
                                    on: { click: _vm.handler }
                                  })
                                ],
                                1
                              ),
                              _c("div", { staticClass: "grid-item" }, [
                                _vm._v("Salón 205")
                              ]),
                              _c(
                                "div",
                                { staticClass: "grid-item" },
                                [
                                  _c("q-btn", {
                                    attrs: {
                                      label: "Abrir",
                                      loading: _vm.loading
                                    },
                                    on: { click: _vm.handler }
                                  })
                                ],
                                1
                              ),
                              _c("div", { staticClass: "grid-item" }, [
                                _vm._v("Salón 206")
                              ]),
                              _c(
                                "div",
                                { staticClass: "grid-item" },
                                [
                                  _c("q-btn", {
                                    attrs: {
                                      label: "Abrir",
                                      loading: _vm.loading
                                    },
                                    on: { click: _vm.handler }
                                  })
                                ],
                                1
                              )
                            ])
                          ]
                        ),
                        _c(
                          "q-tab-pane",
                          {
                            staticClass: "tab-pane",
                            attrs: { name: "piso-3" }
                          },
                          [
                            _c("div", { staticClass: "grid-container" }, [
                              _c("div", { staticClass: "grid-item" }, [
                                _vm._v("Salón 301")
                              ]),
                              _c(
                                "div",
                                { staticClass: "grid-item" },
                                [
                                  _c("q-btn", {
                                    attrs: {
                                      name: "salon-2",
                                      label: "Abrir",
                                      loading: _vm.loading
                                    },
                                    on: { click: _vm.handler }
                                  })
                                ],
                                1
                              ),
                              _c("div", { staticClass: "grid-item" }, [
                                _vm._v("Salón 302")
                              ]),
                              _c(
                                "div",
                                { staticClass: "grid-item" },
                                [
                                  _c("q-btn", {
                                    attrs: {
                                      label: "Abrir",
                                      loading: _vm.loading
                                    },
                                    on: { click: _vm.handler }
                                  })
                                ],
                                1
                              ),
                              _c("div", { staticClass: "grid-item" }, [
                                _vm._v("Salón 303")
                              ]),
                              _c(
                                "div",
                                { staticClass: "grid-item" },
                                [
                                  _c("q-btn", {
                                    attrs: {
                                      label: "Abrir",
                                      loading: _vm.loading
                                    },
                                    on: { click: _vm.handler }
                                  })
                                ],
                                1
                              ),
                              _c("div", { staticClass: "grid-item" }, [
                                _vm._v("Salón 304")
                              ]),
                              _c(
                                "div",
                                { staticClass: "grid-item" },
                                [
                                  _c("q-btn", {
                                    attrs: {
                                      label: "Abrir",
                                      loading: _vm.loading
                                    },
                                    on: { click: _vm.handler }
                                  })
                                ],
                                1
                              ),
                              _c("div", { staticClass: "grid-item" }, [
                                _vm._v("Salón 305")
                              ]),
                              _c(
                                "div",
                                { staticClass: "grid-item" },
                                [
                                  _c("q-btn", {
                                    attrs: {
                                      label: "Abrir",
                                      loading: _vm.loading
                                    },
                                    on: { click: _vm.handler }
                                  })
                                ],
                                1
                              ),
                              _c("div", { staticClass: "grid-item" }, [
                                _vm._v("Salón 306")
                              ]),
                              _c(
                                "div",
                                { staticClass: "grid-item" },
                                [
                                  _c("q-btn", {
                                    attrs: {
                                      label: "Abrir",
                                      loading: _vm.loading
                                    },
                                    on: { click: _vm.handler }
                                  })
                                ],
                                1
                              )
                            ])
                          ]
                        ),
                        _c("q-tab", {
                          staticClass: "tab",
                          attrs: {
                            slot: "title",
                            default: "",
                            name: "piso-1",
                            label: "Piso 1"
                          },
                          slot: "title"
                        }),
                        _c("q-tab", {
                          staticClass: "tab",
                          attrs: {
                            slot: "title",
                            name: "piso-2",
                            label: "Piso 2"
                          },
                          slot: "title"
                        }),
                        _c("q-tab", {
                          staticClass: "tab",
                          attrs: {
                            slot: "title",
                            name: "piso-3",
                            label: "Piso 3"
                          },
                          slot: "title"
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
            _c(
              "q-tab-pane",
              { staticClass: "tab-pane", attrs: { name: "tab-2" } },
              [
                _c("iframe", {
                  staticStyle: { border: "0" },
                  attrs: {
                    src:
                      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.9630122808508!2d-103.41044718471852!3d20.6303644066342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ac4c6738bb13%3A0xbbe036eb095f6aa0!2sAmerike+Instituto+de+Estudios+Universitarios!5e0!3m2!1ses!2smx!4v1542821985805",
                    width: "100%",
                    height: "400px",
                    frameborder: "0",
                    allowfullscreen: ""
                  }
                })
              ]
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/pages/salones.vue?vue&type=template&id=e6b45cf6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/salones.vue?vue&type=script&lang=js&
/* harmony default export */ var salonesvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      loading: false
    };
  },
  methods: {
    handler: function handler() {
      var _this = this;

      this.loading = true;
      setTimeout(function () {
        _this.loading = false;
      }, 5000);
    }
  }
});
// CONCATENATED MODULE: ./src/pages/salones.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_salonesvue_type_script_lang_js_ = (salonesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/salones.vue?vue&type=style&index=0&lang=css&
var salonesvue_type_style_index_0_lang_css_ = __webpack_require__("de22");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/salones.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_salonesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "salones.vue"
/* harmony default export */ var salones = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=66f8a2fb.65c5f4f5.js.map