interface IConfig {
  BASE_URL: string;
  INSCRICOES_URL: string;
  SITE_DATA_URL: string;
}
interface IStages {
  [key: string]: IConfig;
}

const STAGES: IStages = {
  dev: {
    BASE_URL: '',
    INSCRICOES_URL: 'https://inscricao.estartandodevs.com.br/',
    SITE_DATA_URL:
      'https://us-central1-estartando-devs-platform.cloudfunctions.net/siteData',
  },
  stg: {
    BASE_URL: '',
    INSCRICOES_URL: 'https://inscricao.estartandodevs.com.br/',
    SITE_DATA_URL:
      'https://us-central1-estartando-devs-platform.cloudfunctions.net/siteData',
  },
  prd: {
    BASE_URL: '',
    INSCRICOES_URL: 'https://inscricao.estartandodevs.com.br/',
    SITE_DATA_URL:
      'https://us-central1-estartando-devs-platform.cloudfunctions.net/siteData',
  },
};

const env: string = process.env.REACT_APP_STAGE || 'dev';
const config: IConfig = STAGES[env];

export default config;

export const testUrl = 'https://forms.gle/PJqLTyWp6q5p4WWx8';
