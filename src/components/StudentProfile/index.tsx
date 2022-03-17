import * as S from './styles';
import { studentSectionProfile } from '../../mocks/DescriptionProfile.mock';

export const StudentProfile = ({
  title,
  description,
}: studentSectionProfile) => (
  <S.Container>
    <S.ContentStudentProfile>
      <S.TextBox
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
      >
        <S.TitleProfile dangerouslySetInnerHTML={{ __html: title }} />
        <S.DescriptionProfile
          dangerouslySetInnerHTML={{ __html: description }}
          as="span"
        />
      </S.TextBox>
    </S.ContentStudentProfile>
  </S.Container>
);
