import { Logo, Typography } from '..';
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
    <header>
      <Logo width={48} height={68} priority quality={30} />
    </header>

    <S.CommonQestionsSectionTitle
      variant="h2"
      color="white"
      dangerouslySetInnerHTML={{ __html: title }}
    />
    <S.QestionsContent>
      <S.QuestionsWrapper>
        {questions.map(({ key, question, answer }) => (
          <S.Question key={key}>
            <Typography variant="body1" weight='bold'>{question}</Typography>
            <Typography variant="body2" weight='500'>{answer}</Typography>
          </S.Question>
        ))}
      </S.QuestionsWrapper>
    </S.QestionsContent>
  </S.CommonQuestionsSection>
);
