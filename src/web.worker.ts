/// <reference lib="webworker" />

import { ExcelUtil } from './app/util/excel-util';

addEventListener('message', async ({ data }) => {
  const excelUtil = new ExcelUtil(data);
  const blobZip = await excelUtil.generateBlobZip();
  postMessage(blobZip);
});
