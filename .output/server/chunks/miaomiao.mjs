import { d as defineEventHandler } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const miaomiao = defineEventHandler(async (event) => {
  const query = await $fetch("https://6a34b00d-bc86-4b94-b5de-8a3e989cdfae.mock.pstmn.io/get?test=222");
  return query;
});

export { miaomiao as default };
//# sourceMappingURL=miaomiao.mjs.map
