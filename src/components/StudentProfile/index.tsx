import * as S from './styles';
import { studentSectionProfile } from '../../mocks/DescriptionProfile.mock';

export const StudentProfile = ({
  title,
  dataAos,
  description,
  dataAosEasing,
  dataAosAnchorPlacement,
}: studentSectionProfile) => (
  <S.Container>
    <S.ContentStudentProfile>
      <S.TextBox
        data-aos={dataAos}
        data-aos-easing={dataAosEasing}
        data-aos-anchor-placement={dataAosAnchorPlacement}
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
