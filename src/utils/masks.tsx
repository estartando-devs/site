import VMasker from 'vanilla-masker';

const standard = (value: string) => {
  return value;
};

const date = (value: string) => {
  const rawValue = value.replace(/[/]/g, '');
  return VMasker.toPattern(rawValue, '99/99/9999');
};

const dateTime = (value: string) => {
  const rawValue = value.replace(/[/]/g, '');
  return VMasker.toPattern(rawValue, '99/99/9999 99:99');
};

const cpf = (value: string) => {
  const rawValue = value.replace(/[-.]/g, '');
  return rawValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

const phone = (value: string) => {
  const rawValue = value.replace(/[()\-\s]/g, '');
  if (rawValue.length < 11) {
    return VMasker.toPattern(rawValue, '(99) 9999-9999');
  }
  return VMasker.toPattern(rawValue, '(99) 99999-9999');
};

const cep = (value: string) => {
  const rawValue = value.replace(/[()\-\s]/g, '');
  return VMasker.toPattern(rawValue, '99.999-999');
};

export enum typeMask {
  date = 'date',
  dateTime = 'dateTime',
  cpf = 'cpf',
  phone = 'phone',
  cep = 'cep',
  standard = 'standard',
}

export const masks = {
  date,
  dateTime,
  cpf,
  phone,
  cep,
  standard,
};
