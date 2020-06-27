const STAGES = {
  dev: {
    BASE_URL: ""
  },
  stg: {
    BASE_URL: ""
  },
  prd: {
    BASE_URL: ""
  }
};

const env = process.env.REACT_APP_STAGE || "dev";
const config = STAGES[env];

export default config;
