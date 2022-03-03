import * as S from './styles';

type StudentProfileProps = {
  description: string;
  title: string;
};

export const StudentProfile = ({ description, title }: StudentProfileProps) => {
  return (
    <S.Container>
      <S.TextBox>
        <S.TitleProfile dangerouslySetInnerHTML={{ __html: title }} />
        <S.DescriptionProfile
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </S.TextBox>
    </S.Container>
  );
};
