<template>
  <button
    type="button"
    class="btn"
    :class="{
      [ `btn--${view}` ]: view,
      'btn--bordered': bordered,
      'btn--disabled': disabled,
      'btn--full': full,
    }"
  >
    <span
      v-if="icon"
      class="btn__icon material-symbols-outlined"
    >{{ icon }}</span>

    <span
      v-if="label"
      class="btn__label"
      :class="{ 'btn__label--has-icon': icon }"
    >{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: 'TopMenu',
  props: {
    label: { type: String, default: '' },
    icon: { type: String, default: '' },
    view: { type: String, default: '' },
    bordered: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    full: { type: Boolean, default: false },
  },
}
</script>

<style lang="scss">

.btn {
  position: relative;
  z-index: 1;

  vertical-align: top;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 7px;

  min-width: 40px;
  min-height: 40px;
  overflow: hidden;
  font-size: 18px;

  border-radius: 10px;

  color: #2D3B87;
  font-weight: 500;

  &::after {
    content: "";  
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    background-color: rgba(0,0,0, .05);
    opacity: 0;
    transition: opacity 300ms;
  }

  &:hover::after {
    opacity: 1;
  }

  &--blue {
    background-color: #2D3B87;
    color: #fff;
  }
  &--green {
    background-color: #69C57F;
    color: #fff;
  }
  &--gray {
    background-color: #F4F5F9;
  }

  &--bordered {
    border: 1px solid #E0E3EE;
  }

  &--disabled {
    filter: contrast(0.15);
    opacity: .8;
    pointer-events: none;
  }

  &--full {
    width: 100%;
  }

  &__icon {
    font-size: inherit;
  }

  &__label {
    font-size: inherit;

    &--has-icon {
      font-size: 0.73em;
      margin-top: 3px;
    }
  }
}

</style>
