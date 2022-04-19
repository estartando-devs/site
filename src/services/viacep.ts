import { http } from './http';

interface IViaCep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  unidade: string;
  ibge: string;
  gia: string;
}

export const getAddressByCep = async (cep?: string): Promise<IViaCep> =>
  new Promise((resolve) => {
    http<IViaCep>(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
      return resolve(response.parsedBody as IViaCep);
    });
  });

export const cleanZipcode = (zipcode?: string) => {
  if (!zipcode) return '';
  const pattern = new RegExp(/[^\w\s]/gi);

  if (pattern.test(zipcode)) {
    return zipcode.replace(pattern, '');
  }

  return zipcode;
};
