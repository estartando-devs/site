interface IConfig {
  BASE_URL: string;
  INSCRICOES_URL: string;
  ADMIN_URL: string;
}
interface IStages {
  [key: string]: IConfig;
}

const STAGES: IStages = {
  dev: {
    BASE_URL: '',
    INSCRICOES_URL: 'https://inscricao.estartandodevs.com.br/',
    ADMIN_URL:
      'https://us-central1-estartando-devs-platform.cloudfunctions.net',
  },
  stg: {
    BASE_URL: '',
    INSCRICOES_URL: 'https://inscricao.estartandodevs.com.br/',
    ADMIN_URL:
      'https://us-central1-estartando-devs-platform.cloudfunctions.net',
  },
  prd: {
    BASE_URL: '',
    INSCRICOES_URL: 'https://inscricao.estartandodevs.com.br/',
    ADMIN_URL:
      'https://us-central1-estartando-devs-platform.cloudfunctions.net',
  },
};

const env: string = process.env.REACT_APP_STAGE || 'dev';
const config: IConfig = STAGES[env];

export default config;

export const testUrl = 'https://forms.gle/PJqLTyWp6q5p4WWx8';
