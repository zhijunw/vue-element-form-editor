(function(e){function t(t){for(var n,o,l=t[0],c=t[1],s=t[2],u=0,m=[];u<l.length;u++)o=l[u],a[o]&&m.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(m.length)m.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a={app:0},i=[];function l(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-02f9813e":"e9267c3e"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-02f9813e":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise(function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-02f9813e":"41dfaaa1"}[e]+".css",a=c.p+n,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var s=i[l],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===n||u===a))return t()}var m=document.getElementsByTagName("style");for(l=0;l<m.length;l++){s=m[l],u=s.getAttribute("data-href");if(u===n||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],f.parentNode.removeChild(f),r(i)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){o[e]=0}));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=l(e),s=function(t){u.onerror=u.onload=null,clearTimeout(m);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+o+")");i.type=n,i.request=o,r[1](i)}a[e]=void 0}};var m=setTimeout(function(){s({type:"timeout",target:u})},12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-element-form-editor/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var m=0;m<s.length;m++)t(s[m]);var f=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0154":function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_travis_build_Liugq5713_vue_element_form_editor_node_modules_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a4bb"),_home_travis_build_Liugq5713_vue_element_form_editor_node_modules_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_travis_build_Liugq5713_vue_element_form_editor_node_modules_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__["a"]={props:{store:Object},data:function(){return{formJson:void 0}},methods:{gen:function gen(){try{var formData=eval("(".concat(this.formJson,")")),formItems=_home_travis_build_Liugq5713_vue_element_form_editor_node_modules_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(formData).map(function(e){return{type:"EInput",title:"JSON生成",props:{label:"".concat(formData[e]||e),value:e,required:""}}});this.store.commit("setFormItems",formItems)}catch(error){this.$message.error("请填入正确的Object")}}}}},"034f":function(e,t,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"04b5":function(e,t,r){"use strict";var n=r("04d1"),o=r.n(n);o.a},"04d1":function(e,t,r){},"31c5":function(e,t,r){},"339a":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.inputVal,callback:function(t){e.inputVal=t},expression:"inputVal"}},[r("el-option",{attrs:{label:"选项一",value:"first"}}),r("el-option",{attrs:{label:"选项二",value:"second"}})],1)},o=[],a={porps:{value:""},data:function(){return{}},computed:{inputVal:{get:function(){return this.value},set:function(e){this.$emit("change",e),this.$emit("input",e)}}}},i=a,l=r("2877"),c=Object(l["a"])(i,n,o,!1,null,null,null);t["default"]=c.exports},"4ae2":function(e,t,r){"use strict";var n=r("31c5"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("28a5"),r("a481"),r("ac6a"),r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],i=(r("034f"),r("2877")),l={},c=Object(i["a"])(l,o,a,!1,null,null,null),s=c.exports,u=r("5c96"),m=r.n(u),f=(r("0fae"),r("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-aside",{attrs:{width:"300px"}},[r("FormItemAsset"),r("JsonForm",{attrs:{store:e.store}})],1),r("el-main",[r("FormAttribute",{staticStyle:{"margin-bottom":"10px"},attrs:{store:e.store}}),r("el-card",{staticClass:"box-card"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:16}},[r("FormItems",{attrs:{store:e.store,formItems:e.formItems}})],1),r("el-col",{attrs:{span:8}},[r("FormItemAttribute",{attrs:{store:e.store,formItemToHandle:e.formItemToHandle}})],1)],1)],1)],1),r("el-aside",{attrs:{width:"300px"}},[r("FormCode",{attrs:{form:e.form,formItems:e.formItems}})],1)],1)},p=[],h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("表单属性")])]),r("div",[r("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.form}},[r("el-form-item",{attrs:{label:"表单对象"}},[r("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"表单对象"},model:{value:e.form.formObj,callback:function(t){e.$set(e.form,"formObj","string"===typeof t?t.trim():t)},expression:"form.formObj"}})],1),r("el-form-item",{attrs:{label:"更新方法"}},[r("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"更新方法"},model:{value:e.form.method,callback:function(t){e.$set(e.form,"method","string"===typeof t?t.trim():t)},expression:"form.method"}})],1),r("el-form-item",[r("el-checkbox",{staticStyle:{width:"150px"},attrs:{label:"true"},model:{value:e.form.validated,callback:function(t){e.$set(e.form,"validated",t)},expression:"form.validated"}},[e._v("需要验证")])],1),r("el-form-item",{attrs:{label:"表单Ref"}},[r("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"表单的Ref值"},model:{value:e.form.ref,callback:function(t){e.$set(e.form,"ref","string"===typeof t?t.trim():t)},expression:"form.ref"}})],1),r("el-form-item",[r("el-checkbox",{staticStyle:{width:"150px",margin:"0 1px"},attrs:{label:"true"},model:{value:e.form.confirmed,callback:function(t){e.$set(e.form,"confirmed",t)},expression:"form.confirmed"}},[e._v("双重确认")])],1)],1)],1)])},b=[],v=r("cebc"),_={props:{store:Object},data:function(){return{form:{formObj:"defaultFormObj",ref:"defaultRef",validated:!0,confirmed:!1,method:"defaultMethod"}}},watch:{form:{handler:function(e){this.store.commit("setFormAttribute",Object(v["a"])({},e,{ref:e.validated&&e.ref}))},deep:!0,immediate:!0}}},g=_,I=(r("04b5"),Object(i["a"])(g,h,b,!1,null,null,null)),y=I.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticStyle:{width:"100%"}},[r("el-form",{attrs:{model:e.form,"label-width":"100px"}},[r("draggable",{staticClass:"dragArea list-group",class:{bigDragArea:0===e.formItems.length},attrs:{options:{group:"formItems"},list:e.formItems},on:{change:e.genFormItem}},e._l(e.formItems,function(t,n){return r("div",{key:n,staticClass:"list-group-item"},[r("div",{class:{selected:n===e.clickedIndex},on:{click:function(r){return e.genFormItemByClick(n,t)}}},[r("el-form-item",{attrs:{label:t&&t.props.label||"表单label"}},[t?r(t.type,{tag:"component"}):e._e()],1)],1)])}),0)],1)],1)])},k=[],w=r("1980"),E=r.n(w),j={components:{draggable:E.a},props:{store:{type:Object},formItems:{type:Array,default:function(){return[]}}},data:function(){return{form:{}}},computed:{clickedIndex:function(){return this.store.states.clickedIndex}},methods:{genFormItem:function(e){this.store.commit("setFormItems",this.formItems),e.added&&(this.store.commit("setClickedIndex",e.added.newIndex),this.store.commit("setFormItemToHandle",e))},genFormItemByClick:function(e,t){this.store.commit("setClickedIndex",e),this.store.commit("setFormItemToHandle",{type:"click",idx:e,element:t})}}},O=j,C=(r("dcbb"),Object(i["a"])(O,x,k,!1,null,"3e7e60cc",null)),F=C.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("表单元素属性编辑")])]),r("el-form",{attrs:{model:e.formItemAttribute}},[r("el-form-item",[r("el-select",{attrs:{placeholder:"请选择表单元素类型"},on:{change:e.setFormItemAttribute},model:{value:e.formItemElement.type,callback:function(t){e.$set(e.formItemElement,"type",t)},expression:"formItemElement.type"}},e._l(e.input_type_opts,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),r("el-form-item",[r("el-input",{attrs:{placeholder:"请输入label"},on:{change:e.setFormItemAttribute},model:{value:e.formItemAttribute.label,callback:function(t){e.$set(e.formItemAttribute,"label","string"===typeof t?t.trim():t)},expression:"formItemAttribute.label"}})],1),r("el-form-item",[r("el-input",{attrs:{placeholder:"请输入value"},on:{change:e.setFormItemAttribute},model:{value:e.formItemAttribute.value,callback:function(t){e.$set(e.formItemAttribute,"value","string"===typeof t?t.trim():t)},expression:"formItemAttribute.value"}})],1),r("el-form-item",[r("el-checkbox",{attrs:{label:"true"},on:{change:e.setFormItemAttribute},model:{value:e.formItemAttribute.required,callback:function(t){e.$set(e.formItemAttribute,"required",t)},expression:"formItemAttribute.required"}},[e._v("是否必填")])],1)],1)],1)},S=[],$=[{value:"ECheckbox",label:"复选框 Checkbox"},{value:"EInput",label:"输入框 Input"},{value:"ERadio",label:"单选框 Radio"},{value:"ESelect",label:"选择器 Select"},{value:"ESwitch",label:"开关 Switch"}],T={props:{store:{type:Object},formItemToHandle:{type:null}},data:function(){return{input_type_opts:$,idx:0,opt:"",formItemAttribute:{},formItemElement:{}}},watch:{formItemToHandle:function(e){e.added?(this.opt="add",this.idx=e.added.newIndex,this.formItemElement=e.added.element,this.formItemAttribute=Object(v["a"])({},e.added.element.props)):(this.opt="others",this.idx=0,this.formItemAttribute={}),"click"===e.type&&(this.opt="click",this.idx=e.idx,this.formItemElement=e.element,this.formItemAttribute=Object(v["a"])({},e.element.props))}},methods:{setFormItemAttribute:function(){"add"!==this.opt&&"click"!==this.opt||this.store.commit("setItemInFormItems",this.idx,Object(v["a"])({},this.formItemElement,{props:Object(v["a"])({},this.formItemAttribute)}))}}},R=T,D=Object(i["a"])(R,A,S,!1,null,null,null),V=D.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("表单元素资源")])]),r("el-collapse",{attrs:{accordion:""},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.forms,function(t,n){return r("el-collapse-item",{key:n,attrs:{title:t.title,name:t.type}},[r("draggable",{staticClass:"dragArea list-group",attrs:{list:t.specs,group:{name:"formItems",pull:"clone",put:!1},clone:e.cloneFormItem}},e._l(t.specs,function(e,t){return r("div",{key:t,staticClass:"list-group-item"},[r("el-button",{staticStyle:{margin:"10px",padding:"10px"},attrs:{size:"small",plain:""}},[r(e.type,{tag:"component"})],1)],1)}),0)],1)}),1)],1)},N=[],q={label:"",value:"",required:""},M={components:{draggable:E.a},data:function(){return{forms:[{type:"ERadio",title:"Radio 单选框",specs:[{type:"ERadio",title:"基础用法",props:Object(v["a"])({},q)}]},{type:"ECheckbox",title:"Checkbox 多选框",specs:[{type:"ECheckbox",title:"Checkbox 单选框组",props:Object(v["a"])({},q)}]},{type:"EInput",title:"Input输入框",specs:[{type:"EInput",title:"Input 输入框",props:Object(v["a"])({},q)}]},{type:"ESelect",title:"Select 选择器",specs:[{type:"ESelect",title:"Select 单选框组",props:Object(v["a"])({},q)}]},{type:"ESwitch",title:"Switch开关",specs:[{type:"ESwitch",title:"Switch 单选框组",props:Object(v["a"])({},q)}]}],activeName:["ERadio"]}},methods:{cloneFormItem:function(e){return Object(v["a"])({},e)}}},B=M,L=Object(i["a"])(B,P,N,!1,null,null,null),H=L.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.copy}},[e._v("复制代码")]),r("router-link",{attrs:{to:"code-editor",target:"_blank"}},[r("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"mini",type:"primary"},on:{click:e.edit}},[e._v("编辑代码")])],1)],1),r("code",{staticClass:"code"},[r("div",{staticStyle:{overflow:"auto"}},[r("pre",{ref:"srcCode"},[e._v("  "+e._s(e.srcCode)+"\n  ")])])])])},U=[],z=function(e,t){return e?"prop='".concat(t,"'"):"\t"},W=function(e,t,r,n){return'\n   <el-form-item label="'.concat(r,'" ').concat(z(t,n),'>\n    <el-input v-model="').concat(e,".").concat(n,'"></el-input>\n  </el-form-item>\n  ')},K=function(e,t,r,n){return'\n  <el-form-item label="'.concat(r,'"  ').concat(z(t,n),'>\n    <el-select v-model="').concat(e,".").concat(n,'" placeholder="请选择').concat(r,'">\n      <el-option label="区域二" value="beijing"></el-option>\n    </el-select>\n  </el-form-item>')},G=function(e,t,r,n){return'\n  <el-form-item label="'.concat(r,'"  ').concat(z(t,n),'>\n     <el-checkbox-group v-model="').concat(e,".").concat(n,'">\n      <el-checkbox label="第一个复选框" name="type"></el-checkbox>\n      <el-checkbox label="第二个复选框" name="type"></el-checkbox>\n    </el-checkbox-group>\n  </el-form-item>')},Q=function(e,t,r,n){return'\n  <el-form-item label="'.concat(r,'" ').concat(z(t,n),'>\n    <el-radio-group v-model="').concat(e,".").concat(n,'">\n      <el-radio label="第一个选项"></el-radio>\n      <el-radio label="第二个选项"></el-radio>\n    </el-radio-group>\n  </el-form-item>')},X=function(e,t,r,n){return'\n  <el-form-item label="'.concat(r,'" ').concat(z(t,n),'>\n    <el-switch v-model="').concat(e,".").concat(n,'"></el-switch>\n  </el-form-item>')},Y=function(e){var t={EInput:W,ECheckbox:G,ERadio:Q,ESelect:K,ESwitch:X};return t[e]},Z={props:{form:{type:Object},formItems:{type:Array,default:function(){return[]}}},data:function(){return{srcCode:"",fromItemsCode:"",refCode:"",formObj:"",dataFormData:{},dataFormRules:{},submitMethods:"",validated:!1}},watch:{form:{handler:function(e){this.genVueFile(e,this.formItems)},deep:!0},formItems:{handler:function(e){this.genVueFile(this.form,e)},deep:!0}},created:function(){this.genVueFile(this.form,this.formItems)},methods:{genFormItemCode:Y,genVueFile:function(e,t){var r={ref:e.ref,formObj:e.formObj,method:e.method,validated:e.validated,confirmed:e.confirmed,formItems:t};this.srcCode=this.genVueFileWrapper(r)},genVueFileWrapper:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.formObj,r=e.validated,n=e.ref,o=e.method,a=e.confirmed,i=e.formItems;return'\n<template>\n<el-form :model="'.concat(t,'" ').concat(this.genFormRef(r,n),' label-width="80px">\n  ').concat(this.genFormItemsCode(t,r,i),"\n  ").concat(this.genFormItemUpsertButton(r,n,o),"\n  \n</el-form>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        ").concat(this.genScriptDataFormData(t,i),",\n        ").concat(r?this.genScriptDataRules(t,i):"","\n      }\n    },\n    methods: {\n      ").concat(this.genScriptMethodSubmit(r,a,t,o),"\n    }\n  }\n<\/script>\n")},genFormItemsCode:function(e,t,r){return r.map(function(r){var n=Y(r.type);return n(e,t,r.props.label,r.props.value)}).join("\n")},genScriptDataFormData:function(e,t){var r=t.map(function(e){return"".concat(e.props.value,":''")}).join(",\n          ");return"".concat(e,":{\n          ").concat(r,"\n        }")},genScriptDataRules:function(e,t){var r=t.filter(function(e){return e.props.required}).map(function(e){return"".concat(e.props.value,": [\n                { required: true, message: '").concat(e.props.label,"必填', trigger: 'blur' }\n          ]")}).join(",\n          ");return"rules:{\n          ".concat(r,"\n        }")},genScriptMethodSubmit:function(e,t,r,n){return t&&e?"".concat(n,"(formName) {\n          this.$refs[formName].validate((valid) => {\n            if (valid) {\n               this.$confirm('此操作将永久删除此项, 是否继续?', '提示',\n                {\n                  confirmButtonText: '确定',\n                  cancelButtonText: '取消',\n                  type: 'warning'\n                  }).then(await () => {\n                      await ").concat(n,"(this.").concat(r,")\n                      this.$message.success('创建成功')\n                  }).catch(() => {\n                    this.$message({\n                      type: 'info',\n                      message: '已取消删除'\n                    });\n                });\n            } else {\n              console.log('error submit!!');\n              return false;\n            }\n          });\n        }"):t?"".concat(n,"(formName) {\n          this.$confirm('此操作将永久删除此项, 是否继续?', '提示',\n          {\n            confirmButtonText: '确定',\n            cancelButtonText: '取消',\n            type: 'warning'\n            }).then(await () => {\n                await ").concat(n,"(this.").concat(r,")\n                this.$message.success('创建成功')\n            }).catch(() => {\n              this.$message({\n                type: 'info',\n                message: '已取消删除'\n              });\n           });\n          }\n        "):e?"".concat(n,"(formName) {\n          this.$refs[formName].validate(async (valid) => {\n            if (valid) {\n              await ").concat(n,"(this.").concat(r,")\n              this.$message.success('创建成功')\n            } else {\n              console.log('error submit!!');\n              return false;\n            }\n          });\n        }"):"async ".concat(n,"(){\n          await ").concat(n,"(this.").concat(r,")\n          this.$message.success('创建成功')\n        }")},genFormValidate:function(){},genFormItemUpsertButton:function(e,t,r){return e?"<el-form-item>\n    <el-button size='mini' type='primary' @click=\"".concat(r,"('").concat(t,"')\">创建</el-button>\n  </el-form-item>"):"<el-form-item>\n    <el-button size='mini' type='primary' @click='".concat(r,"'>创建</el-button>\n  </el-form-item>")},genFormRef:function(e,t){return e?"ref='".concat(t,"'"):"\t"},copy:function(){var e=this.$refs["srcCode"];e.focus(),window.getSelection().removeAllRanges();var t=document.createRange();t.setStartBefore(e.firstChild),t.setEndAfter(e.lastChild),window.getSelection().addRange(t);try{document.execCommand("copy")?this.$message.success("已复制到剪贴板"):this.$message.error("未能复制到剪贴板，请全选后右键复制")}catch(r){this.$message.error("未能复制到剪贴板，请全选后右键复制")}},skipToEdit:function(){window.open("./code-editor","_blank")},edit:function(){window.localStorage.removeItem("vue-element-form-gen-code"),window.localStorage.setItem("vue-element-form-gen-code",this.srcCode)}}},ee=Z,te=(r("4ae2"),Object(i["a"])(ee,J,U,!1,null,"2f62cdcc",null)),re=te.exports,ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("JSON表单对象")]),r("el-button",{staticStyle:{float:"right"},attrs:{size:"mini",type:"primary"},on:{click:e.gen}},[e._v("生成表单")])],1),r("el-input",{attrs:{type:"textarea",autosize:{minRows:5},placeholder:"请输入内容,用了eval，请不要自嗨"},model:{value:e.formJson,callback:function(t){e.formJson=t},expression:"formJson"}})],1)],1)},oe=[],ae=r("0154"),ie=ae["a"],le=Object(i["a"])(ie,ne,oe,!1,null,null,null),ce=le.exports,se=(r("7f7f"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)throw new Error("Form is required.");for(var r in this.form=e,this.states={clickedIndex:-1,formAttribute:{}},t)t.hasOwnProperty(r)&&this.states.hasOwnProperty(r)&&(this.states[r]=t[r])});se.prototype.commit=function(e){console.log("name",e);var t=this.mutations;if(!t[e])throw new Error("Action not found: ".concat(e));for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];t[e].apply(this,[this.states].concat(n))},se.prototype.mutations={setFormAttribute:function(e,t){this.states=Object(v["a"])({},e,{formAttribute:t})},setFormItems:function(e,t){this.states=Object(v["a"])({},e,{formItems:t})},setClickedIndex:function(e,t){this.states=Object(v["a"])({},e,{clickedIndex:t})},setFormItemToHandle:function(e,t){this.states=Object(v["a"])({},e,{formItemToHandle:t})},setItemInFormItems:function(e,t,r){e.formItems.splice(t,1,r)}};var ue=se,me={components:{FormItems:F,FormItemAsset:H,FormAttribute:y,FormItemAttribute:V,FormCode:re,JsonForm:ce},data:function(){var e=new ue(this);return{store:e}},computed:{form:function(){return this.store.states.formAttribute},formItems:function(){return this.store.states.formItems},formItem:function(){return this.store.states.formItem},formItemToHandle:function(){return this.store.states.formItemToHandle},formItemAttribute:function(){return this.store.states.formItemAttribute}}},fe=me,de=Object(i["a"])(fe,d,p,!1,null,null,null),pe=de.exports;n["default"].use(f["a"]);var he=new f["a"]({mode:"hash",routes:[{path:"/",name:"form-editor",component:pe},{path:"/code-editor",name:"code-editor",component:function(){return r.e("chunk-02f9813e").then(r.bind(null,"d4bf"))}}]});n["default"].config.productionTip=!1,n["default"].use(m.a);var be=r("dcb2");be.keys().forEach(function(e){var t=be(e),r=e.split("/").pop().replace(/\.\w+$/,"");n["default"].component(r,t.default||t)}),new n["default"]({router:he,render:function(e){return e(s)}}).$mount("#app")},"64a9":function(e,t,r){},"88bb":function(e,t,r){},a92f:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-input",e._b({attrs:{placeholder:"请输入内容"},model:{value:e.inputVal,callback:function(t){e.inputVal=t},expression:"inputVal"}},"el-input",e.$attrs,!1))},o=[],a={porps:{value:""},data:function(){return{}},computed:{inputVal:{get:function(){return this.value},set:function(e){this.$emit("change",e),this.$emit("input",e)}}}},i=a,l=r("2877"),c=Object(l["a"])(i,n,o,!1,null,null,null);t["default"]=c.exports},aacd:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-checkbox",{model:{value:e.inputVal,callback:function(t){e.inputVal=t},expression:"inputVal"}},[e._v("备选项")])},o=[],a={porps:{value:""},data:function(){return{}},computed:{inputVal:{get:function(){return this.value},set:function(e){this.$emit("change",e),this.$emit("input",e)}}}},i=a,l=r("2877"),c=Object(l["a"])(i,n,o,!1,null,null,null);t["default"]=c.exports},c52b:function(e,t,r){"use strict";r.r(t);var n,o,a={data:function(){return{}},render:function(){var e=arguments[0];return e("div",[e("el-radio",{attrs:{value:"radio",label:"1"}},["备选项"]),e("el-radio",{attrs:{value:"radio",label:"2"}},["备选项"])])}},i=a,l=r("2877"),c=Object(l["a"])(i,n,o,!1,null,null,null);t["default"]=c.exports},d504:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.inputVal,callback:function(t){e.inputVal=t},expression:"inputVal"}})},o=[],a={porps:{value:""},data:function(){return{}},computed:{inputVal:{get:function(){return this.value},set:function(e){this.$emit("change",e),this.$emit("input",e)}}}},i=a,l=r("2877"),c=Object(l["a"])(i,n,o,!1,null,null,null);t["default"]=c.exports},dcb2:function(e,t,r){var n={"./ECheckbox.vue":"aacd","./EInput.vue":"a92f","./ERadio.vue":"c52b","./ESelect.vue":"339a","./ESwitch.vue":"d504"};function o(e){var t=a(e);return r(t)}function a(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id="dcb2"},dcbb:function(e,t,r){"use strict";var n=r("88bb"),o=r.n(n);o.a}});
//# sourceMappingURL=app.45912e69.js.map