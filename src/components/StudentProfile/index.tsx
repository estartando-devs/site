import * as S from './styles';

type StudentProfileProps = {
  description: string;
  title: string;
};

export const StudentProfile = ({ title }: StudentProfileProps) => {
  return (
    <S.Container>
      <S.TextBox>
        <S.TitleProfile dangerouslySetInnerHTML={{ __html: title }} />
        <S.DescriptionProfile>
          Buscamos pessoas que gostem de desafios, sejam determinadas e
          responsáveis. Nossa formação é totalmente <strong>gratuita.</strong> A
          única coisa que cobramos é <strong>dedicação.</strong>
          <br />
          <br />
          Para se inscrever você precisa: <br />
          <br />
          <ul>
            <li>Estar cursando ou ter concluído o 3º ano do ensino médio;</li>
            <li>
              Morar <strong> em qualquer lugar do Brasil</strong>;
            </li>
            <li>
              Possuir renda familiar per capta de{' '}
              <strong> até meio salário mínimo </strong>(R$ 606,00 por pessoa
              residente na casa) ou possuir renda familiar total de{' '}
              <strong>até três salários mínimos</strong>;
            </li>
          </ul>
          <br />
          <br />É legal que você saiba usar mouse e teclado, pesquisar na
          internet e ter bastante disposição para estudar. Ah, é importante ter
          disponibilidade nas terças e quintas, de 19:30 às 21:30, pois esse
          será o horário das aulas.
        </S.DescriptionProfile>
      </S.TextBox>
    </S.Container>
  );
};
