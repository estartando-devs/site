import Link from 'next/link';
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
      <Link href="/">
        <a>
          <Logo width={48} height={68} priority quality={30} />
        </a>
      </Link>
    </header>

    <S.CommonQestionsSectionTitle
      as="h1"
      dangerouslySetInnerHTML={{ __html: title }}
    />
    <S.QestionsContent>
      <S.QuestionsWrapper>
        {questions.map(({ key, question, answer }) => (
          <S.Question key={key}>
            <S.QuestionTitle as="h3">{question}</S.QuestionTitle>
            <Typography variant="body2" weight="500">
              {answer}
            </Typography>
          </S.Question>
        ))}
      </S.QuestionsWrapper>
    </S.QestionsContent>
  </S.CommonQuestionsSection>
);
