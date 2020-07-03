import BrandLogoMarios from "./logo_marios.png";
import BrandLogoFundacao from "./logo_fundacao.png";

interface ISupporterShare {
  icon: any;
  name: string;
  url: string;
}

export const SupportersBrands: ISupporterShare[] = [
  {
    icon: BrandLogoFundacao,
    name: "fundacao",
    url: "https://www.fundacaoangelicagoulart.org.br/",
  },
  {
    icon: BrandLogoMarios,
    name: "marios",
    url: "http://www.mariosautopecas.com/",
  },
];
