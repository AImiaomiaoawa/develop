import { _ as __nuxt_component_0 } from './nuxt-link-TEqif-XR.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-836bff79><header class="shadow-sm bg-white" data-v-836bff79><nav class="container mx-auto p-4 flex justify-between" data-v-836bff79>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "font-bold"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Nuxt miaomiao`);
      } else {
        return [
          createTextVNode("Nuxt miaomiao")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="flex gap-4" data-v-836bff79><li data-v-836bff79>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-836bff79>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-836bff79>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/products",
    class: "btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Products`);
      } else {
        return [
          createTextVNode("Products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></header><div class="container mx-auto p-4" data-v-836bff79>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-836bff79"]]);

export { _default as default };
//# sourceMappingURL=default-o_F3LS5w.mjs.map
