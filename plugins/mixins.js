import Vue from "vue";

const mixin = {
  methods: {
    test() {
      console.log("Test");
    },
  },
};

Vue.mixin(mixin);
