export interface IResponseHero {
  id: number;
  name: string;
  slug: string;
  powerstats: IPowerstats;
  appearance: IAppearance;
  biography: IBiography;
  work: IWork;
  connections: IConnections;
  images: IImages;
}

interface IImages {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

interface IConnections {
  groupAffiliation: string;
  relatives: string;
}

interface IWork {
  occupation: string;
  base: string;
}

interface IBiography {
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
}

interface IAppearance {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  eyeColor: string;
  hairColor: string;
}

export interface IPowerstats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}
