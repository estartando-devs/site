import { studentProfileSection } from '../../mocks/DescriptionProfile.mock';
import * as S from './styles';

const { description, title } = studentProfileSection;

type StudentProfileProps = {
  description: string;
  title: string;
  backgroundImageUrl: string;
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
