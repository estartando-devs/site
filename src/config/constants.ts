interface IConfig {
  BASE_URL: string;
  INSCRICOES_URL: string;
}
interface IStages {
  [key: string]: IConfig;
}

const STAGES: IStages = {
  dev: {
    BASE_URL: '',
    INSCRICOES_URL: 'https://inscricao.estartandodevs.com.br/',
  },
  stg: {
    BASE_URL: '',
    INSCRICOES_URL: 'https://inscricao.estartandodevs.com.br/',
  },
  prd: {
    BASE_URL: '',
    INSCRICOES_URL: 'https://inscricao.estartandodevs.com.br/',
  },
};

const env: string = process.env.REACT_APP_STAGE || 'dev';
const config: IConfig = STAGES[env];

export default config;

export const testUrl = 'https://forms.gle/PJqLTyWp6q5p4WWx8';
