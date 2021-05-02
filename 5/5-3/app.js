// const { default: Vue } = require("vue");

Vue.directive("fallback-image", {
  bind: function (el, binding) {
    console.log("bind", binding);
    let once = binding.modifiers.once;
    el.addEventListener("error", function onError() {
      el.src = binding.value;
      if (once) {
        el.removeEventListener("error", onError);
      }
      //   el.src = "http://dummyimage.com/400x400/000/ffffff.png&text=no+image";
    });
  },
  update: function (el, binding) {
    console.log("update", binding);
    if (binding.oldValue !== binding.value && binding.oldValue === el.src) {
      el.src = binding.value;
    }
    // console.log("hoge");
  },
});

let vm = new Vue({
  el: "#app",
  data() {
    return {
      altText: "logo",
      noImageURL: "http://dummyimage.com/400x400/000/ffffff.png&text=no+image",
    };
  },
});
