import { Injectable } from '@angular/core';
import * as fs from 'file-saver';
import { IDataHeroExcel } from './../models/excel.interface';

@Injectable({ providedIn: 'root' })
export class ExcelService {
  private _myWorker = new Worker(new URL('../../web.worker', import.meta.url), {
    type: 'module',
  });

  async dowloadExcel(dataExcel: IDataHeroExcel): Promise<void> {
    this._generateZipUsingWorker(dataExcel);
  }

  private _generateZipUsingWorker(dataExcel: IDataHeroExcel) {
    this._myWorker.onmessage = ({ data }) => {
      console.log('MENSAJE ENVIADO POR EL WORKER: ', data);
      fs.saveAs(data, 'documentos excel.zip');
    };

    this._myWorker.postMessage(dataExcel);
  }
}
