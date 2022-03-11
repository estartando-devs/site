import * as S from './styles';

type StudentProfileProps = {
  description: string;
  title: string;
};

export const StudentProfile = ({ title, description }: StudentProfileProps) => (
  <S.Container>
    <S.ContentStudentProfile>
      <S.TextBox>
        <S.TitleProfile dangerouslySetInnerHTML={{ __html: title }} />
        <S.DescriptionProfile
          dangerouslySetInnerHTML={{ __html: description }}
          as="span"
        />
      </S.TextBox>
    </S.ContentStudentProfile>
  </S.Container>
);
