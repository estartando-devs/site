const title = 'Estartando Devs | Transformação Social pela Tecnologia';
const description =
  'Transformamos vidas com tecnologia. Cursos de programação e desenvolvimento para jovens. Junte-se ao Estartando Devs e faça parte da mudança social!';

export default {
  titleTemplate: `%s | Estartando Devs`,
  defaultTitle: title,
  description,
  canonical: 'https://estartandodevs.com.br/',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://estartandodevs.com.br',
    site_name: title,
    title,
    description,
    images: [
      {
        url: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHRvyVjtJ8VOQ/company-logo_200_200/0/1647105778991?e=2147483647&v=beta&t=cIgrEVmzAxgN5k4CQnCTNKBgXkJDOIufdqTeHcWzsHk',
        width: 200,
        height: 200,
        alt: title,
      },
    ],
  },
};
