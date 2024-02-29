import { u as useFetch } from './fetch-tyXvTI5k.mjs';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const q = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/miaomiao", "$c6wy8KmN8o")), __temp = await __temp, __restore(), __temp);
    const data = q.data;
    console.log(data);
    console.log(q);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f2429abb><h2 data-v-f2429abb>About</h2><p data-v-f2429abb>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aperiam minima unde nemo harum quam maxime optio quos corrupti. Eum sapiente facere nemo, laborum ullam non cum fuga quas eveniet harum molestiae minus atque vel ratione illo quia, iure commodi dicta porro excepturi quam. Facere, commodi corrupti ipsam neque totam reprehenderit laboriosam laborum veniam est quo, repellat saepe impedit labore?</p><p data-v-f2429abb>api response:</p><div data-v-f2429abb>${ssrInterpolate(unref(data))}</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f2429abb"]]);

export { about as default };
//# sourceMappingURL=about-ZBYfx56j.mjs.map
