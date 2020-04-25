<template>
  <component
    :is="tag"
    type="button"
    v-bind="$attrs"
    class="BaseButton"
    :class="BaseButtonClasses"
    :disabled="disabled"
    @click="click"
    :style="BaseButtonStyles"
  >
    <span v-if="!!label" class="BaseButton__Text">
      {{ label }}
    </span>
  </component>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    tag: {
      type: String,
      default: 'button',
      validator: val => ['button', 'a'].includes(val)
    },
    label: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'cyan'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    BaseButtonStyles() {
      return {
        backgroundColor: this.color
      }
    },
    BaseButtonClasses() {
      return {
        'BaseButton--disabled': this.disabled
      }
    }
  },

  methods: {
    click(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.BaseButton {
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  color: white;
  font-weight: bold;
  user-select: none;
  padding: 9px 12px;
  border-radius: 3px;

  &--disabled {
    pointer-events: none;
    background-color: rgb(241, 242, 246) !important;
    color: rgb(51, 51, 51);
  }

  &:hover {
    filter: brightness(90%) contrast(150%);
  }

  &__Text {
    font-size: 16px;
    letter-spacing: 0.001rem;
    text-align: center;
    display: block;
    width: 100%;
    font-weight: bold;
  }
}
</style>
