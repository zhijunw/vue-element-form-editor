<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>表单元素属性编辑</span>
    </div>
    <el-form :model="formItemAttribute">
      <el-form-item>
        <el-select
          v-model="formItemElement.type"
          placeholder="请选择表单元素类型"
          @change="setFormItemAttribute"
        >
          <el-option
            v-for="item in input_type_opts"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-input
          v-model.trim="formItemAttribute.label"
          placeholder="请输入label"
          @change="setFormItemAttribute"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model.trim="formItemAttribute.value"
          placeholder="请输入value"
          @change="setFormItemAttribute"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox
          v-model="formItemAttribute.required"
          label="true"
          @change="setFormItemAttribute"
        >是否必填</el-checkbox>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { input_type_opts } from "./opt.js";
export default {
  props: {
    store: {
      type: Object
    },
    formItemToHandle: {
      type: null
    }
  },
  data() {
    return {
      input_type_opts,
      idx: 0,
      opt: "",
      formItemAttribute: {},
      formItemElement: {}
    };
  },
  watch: {
    formItemToHandle(val) {
      if (val.added) {
        this.opt = "add";
        this.idx = val.added.newIndex;
        this.formItemElement = val.added.element;
        this.formItemAttribute = { ...val.added.element.props };
      } else {
        this.opt = "others";
        this.idx = 0;
        this.formItemAttribute = {};
      }
      if (val.type === "click") {
        this.opt = "click";
        this.idx = val.idx;
        this.formItemElement = val.element;
        this.formItemAttribute = { ...val.element.props };
      }
    }
  },
  methods: {
    setFormItemAttribute() {
      if (this.opt === "add" || this.opt === "click") {
        this.store.commit("setItemInFormItems", this.idx, {
          ...this.formItemElement,
          props: {
            ...this.formItemAttribute
          }
        });
      }
    }
  }
};
</script>