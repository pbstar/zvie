<template>
  <div :class="[
    type === 'textarea' ? 'zvi-textarea' : 'zvi-input',
    inputSize ? 'zvi-input--' + inputSize : '',
    {
      'is-disabled': inputDisabled,
      'is-exceed': inputExceed,
      'zvi-input-group': $slots.prepend || $slots.append,
      'zvi-input-group--append': $slots.append,
      'zvi-input-group--prepend': $slots.prepend,
      'zvi-input--prefix': $slots.prefix || prefixIcon,
      'zvi-input--suffix':
        $slots.suffix || suffixIcon || clearable || showPassword,
    },
  ]" @mouseenter="hovering = true" @mouseleave="hovering = false">
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div class="zvi-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input :tabindex="tabindex" v-if="type !== 'textarea'" class="zvi-input__inner" v-bind="$attrs"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type" :disabled="inputDisabled"
        :readonly="readonly" :autocomplete="autocomplete" ref="input" @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate" @compositionend="handleCompositionEnd" @input="handleInput"
        @focus="handleFocus" @blur="handleBlur" @change="handleChange" :aria-label="label" />
      <!-- 前置内容 -->
      <span class="zvi-input__prefix" v-if="$slots.prefix || prefixIcon">
        <slot name="prefix"></slot>
        <i class="zvi-input__icon" v-if="prefixIcon" :class="prefixIcon"> </i>
      </span>
      <!-- 后置内容 -->
      <span class="zvi-input__suffix" v-if="getSuffixVisible()">
        <span class="zvi-input__suffix-inner">
          <template v-if="!showClear || !showPwdVisible || !isWordLimitVisible">
            <slot name="suffix"></slot>
            <i class="zvi-input__icon" v-if="suffixIcon" :class="suffixIcon">
            </i>
          </template>
          <i v-if="showClear" class="zvi-input__icon zvi-icon-circle-close zvi-input__clear" @mousedown.prevent
            @click="clear"></i>
          <i v-if="showPwdVisible" class="zvi-input__icon zvi-icon-view zvi-input__clear"
            @click="handlePasswordVisible"></i>
          <span v-if="isWordLimitVisible" class="zvi-input__count">
            <span class="zvi-input__count-inner">
              {{ textLength }}/{{ upperLimit }}
            </span>
          </span>
        </span>
        <i class="zvi-input__icon" v-if="validateState" :class="['zvi-input__validateIcon', validateIcon]">
        </i>
      </span>
      <!-- 后置元素 -->
      <div class="zvi-input-group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>
    <textarea v-else :tabindex="tabindex" class="zvi-textarea__inner" @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate" @compositionend="handleCompositionEnd" @input="handleInput"
      ref="textarea" v-bind="$attrs" :disabled="inputDisabled" :readonly="readonly" :autocomplete="autocomplete"
      :style="textareaStyle" @focus="handleFocus" @blur="handleBlur" @change="handleChange" :aria-label="label">
    </textarea>
    <span v-if="isWordLimitVisible && type === 'textarea'" class="zvi-input__count">{{ textLength }}/{{ upperLimit
    }}</span>
  </div>
</template>

<script>
export default {
  name: "zvi-input",
  props: {
    value: [String, Number],
    size: String,
    resize: String,
    form: String,
    disabled: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: "text",
    },
    autosize: {
      type: [Boolean, Object],
      default: false,
    },
    autocomplete: {
      type: String,
      default: "off",
    },
    validateEvent: {
      type: Boolean,
      default: true,
    },
    suffixIcon: String,
    prefixIcon: String,
    label: String,
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    showWordLimit: {
      type: Boolean,
      default: false,
    },
    tabindex: String,
  },
  data() {
    return {
      textareaCalcStyle: {},
      hovering: false,
      focused: false,
      isComposing: false,
      passwordVisible: false,
    };
  },
  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    validateState() {
      return this.elFormItem ? this.elFormItem.validateState : "";
    },
    needStatusIcon() {
      return this.elForm ? this.elForm.statusIcon : false;
    },
    validateIcon() {
      return {
        validating: "zvi-icon-loading",
        success: "zvi-icon-circle-check",
        error: "zvi-icon-circle-close",
      }[this.validateState];
    },
    textareaStyle() {
      return merge({}, this.textareaCalcStyle, { resize: this.resize });
    },
    inputSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    nativeInputValue() {
      return this.value === null || this.value === undefined
        ? ""
        : String(this.value);
    },
    showClear() {
      return (
        this.clearable &&
        !this.inputDisabled &&
        !this.readonly &&
        this.nativeInputValue &&
        (this.focused || this.hovering)
      );
    },
    showPwdVisible() {
      return (
        this.showPassword &&
        !this.inputDisabled &&
        !this.readonly &&
        (!!this.nativeInputValue || this.focused)
      );
    },
    isWordLimitVisible() {
      return (
        this.showWordLimit &&
        this.$attrs.maxlength &&
        (this.type === "text" || this.type === "textarea") &&
        !this.inputDisabled &&
        !this.readonly &&
        !this.showPassword
      );
    },
    upperLimit() {
      return this.$attrs.maxlength;
    },
    textLength() {
      if (typeof this.value === "number") {
        return String(this.value).length;
      }

      return (this.value || "").length;
    },
    inputExceed() {
      return this.isWordLimitVisible && this.textLength > this.upperLimit;
    },
  },

  watch: {
    value(val) {
      this.$nextTick(this.resizeTextarea);
      if (this.validateEvent) {
        this.dispatch("ElFormItem", "el.form.change", [val]);
      }
    },
    nativeInputValue() {
      this.setNativeInputValue();
    },
    type() {
      this.$nextTick(() => {
        this.setNativeInputValue();
        this.resizeTextarea();
        this.updateIconOffset();
      });
    },
  },

  methods: {
    focus() {
      this.getInput().focus();
    },
    blur() {
      this.getInput().blur();
    },
    getMigratingConfig() {
      return {
        props: {
          icon: "icon is removed, use suffix-icon / prefix-icon instead.",
          "on-icon-click": "on-icon-click is removed.",
        },
        events: {
          click: "click is removed.",
        },
      };
    },
    handleBlur(event) {
      this.focused = false;
      this.$emit("blur", event);
      if (this.validateEvent) {
        this.dispatch("ElFormItem", "el.form.blur", [this.value]);
      }
    },
    select() {
      this.getInput().select();
    },
    resizeTextarea() {
      if (this.$isServer) return;
      const { autosize, type } = this;
      if (type !== "textarea") return;
      if (!autosize) {
        this.textareaCalcStyle = {
          minHeight: calcTextareaHeight(this.$refs.textarea).minHeight,
        };
        return;
      }
      const minRows = autosize.minRows;
      const maxRows = autosize.maxRows;

      this.textareaCalcStyle = calcTextareaHeight(
        this.$refs.textarea,
        minRows,
        maxRows
      );
    },
    setNativeInputValue() {
      const input = this.getInput();
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    },
    handleFocus(event) {
      this.focused = true;
      this.$emit("focus", event);
    },
    handleCompositionStart(event) {
      this.$emit("compositionstart", event);
      this.isComposing = true;
    },
    handleCompositionUpdate(event) {
      this.$emit("compositionupdate", event);
      const text = event.target.value;
      const lastCharacter = text[text.length - 1] || "";
      this.isComposing = !isKorean(lastCharacter);
    },
    handleCompositionEnd(event) {
      this.$emit("compositionend", event);
      if (this.isComposing) {
        this.isComposing = false;
        this.handleInput(event);
      }
    },
    handleInput(event) {
      if (this.isComposing) return;
      if (event.target.value === this.nativeInputValue) return;

      this.$emit("input", event.target.value);
      this.$nextTick(this.setNativeInputValue);
    },
    handleChange(event) {
      this.$emit("change", event.target.value);
    },
    calcIconOffset(place) {
      let elList = [].slice.call(
        this.$el.querySelectorAll(`.zvi-input__${place}`) || []
      );
      if (!elList.length) return;
      let el = null;
      for (let i = 0; i < elList.length; i++) {
        if (elList[i].parentNode === this.$el) {
          el = elList[i];
          break;
        }
      }
      if (!el) return;
      const pendantMap = {
        suffix: "append",
        prefix: "prepend",
      };

      const pendant = pendantMap[place];
      if (this.$slots[pendant]) {
        el.style.transform = `translateX(${place === "suffix" ? "-" : ""}${this.$el.querySelector(`.zvi-input-group__${pendant}`).offsetWidth
          }px)`;
      } else {
        el.removeAttribute("style");
      }
    },
    updateIconOffset() {
      this.calcIconOffset("prefix");
      this.calcIconOffset("suffix");
    },
    clear() {
      this.$emit("input", "");
      this.$emit("change", "");
      this.$emit("clear");
    },
    handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible;
      this.$nextTick(() => {
        this.focus();
      });
    },
    getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
    getSuffixVisible() {
      return (
        this.$slots.suffix ||
        this.suffixIcon ||
        this.showClear ||
        this.showPassword ||
        this.isWordLimitVisible ||
        (this.validateState && this.needStatusIcon)
      );
    },
  },

  created() {
    this.$on("inputSelect", this.select);
  },

  mounted() {
    this.setNativeInputValue();
    this.resizeTextarea();
    this.updateIconOffset();
  },

  updated() {
    this.$nextTick(this.updateIconOffset);
  },
};
</script>
