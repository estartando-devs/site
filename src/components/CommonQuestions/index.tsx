import { Typography } from '..';
import * as S from './styles';

export type Question = {
  question: string;
  answer: string;
  key: string;
};

export type CommonQuestionsProps = {
  title: string;
  questions: Array<Question>;
};

export const CommonQuestions = ({ title, questions }: CommonQuestionsProps) => (
  <S.CommonQuestionsSection>
    <S.CommonQestionsSectionTitle
      variant="h2"
      color="white"
      dangerouslySetInnerHTML={{ __html: title }}
    />
    <S.QestionsContent>
      <S.CommonQestionsIlustration
        src="/images/perguntas-frequentes"
        width={688}
        height={908}
        quality={30}
        alt="Ilustração sobre peerguntas frequentes"
      />
      <S.QuestionsWrapper>
        {questions.map(({ key, question, answer }) => (
          <S.Question key={key}>
            <Typography variant="body1">{question}</Typography>
            <Typography variant="body2">{answer}</Typography>
          </S.Question>
        ))}
      </S.QuestionsWrapper>
    </S.QestionsContent>
  </S.CommonQuestionsSection>
);
