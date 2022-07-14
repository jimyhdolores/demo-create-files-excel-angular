import { IPowerstats } from './api.interface';

export interface IDataHeroExcel {
  herosTable: IHeroTable[];
  herosDetail: IHeroDetail[];
}

export interface IHeroTable {
  urlImage: string;
  fullName: string;
  eyeColor: string;
  hairColor: string;
  work: string;
}

export interface IHeroDetail {
  name: string;
  urlImage: string;
  powerstats: IPowerstats;
  appearance: IAppearance;
}

interface IAppearance {
  gender: string;
  race: string;
  height: string;
  weight: string;
  eyeColor: string;
  hairColor: string;
}

export interface IDataSection {
  keyColumnTitle: string;
  keyColumnValue: string;
  values: { key: string; value: unknown }[];
}
