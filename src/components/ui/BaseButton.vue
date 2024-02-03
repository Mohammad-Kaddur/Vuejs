<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to"  :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    mode: {
      type: String,
      default: null,
      require: false,
    },
    link: {
      type: Boolean,
      default: false,
      required: false,
    },
    to: {
      type: String,
      default: "/",
      require: false,
    },
  },
};
</script>
