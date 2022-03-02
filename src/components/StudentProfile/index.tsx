import { descriptionProfileMock } from '../../mocks/DescriptionProfile.mock';
import * as S from './styles';

export const StudentProfile = () => {
  return (
    <S.Container>
      <S.TextBox>
        <div>
          <S.TitleProfile>Qual o perfil de aluno que</S.TitleProfile>
          <S.SubtitleProfile>buscamos?</S.SubtitleProfile>
        </div>
        {descriptionProfileMock.map(({ description }, index) => (
          <S.DescriptionProfile
            dangerouslySetInnerHTML={{ __html: description }}
            key={index}
          />
        ))}
      </S.TextBox>
    </S.Container>
  );
};
