import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import * as S from './styles';
type StudentProfileProps = {
  description: string;
  title: string;
};

export const StudentProfile = ({ title, description }: StudentProfileProps) => {
  useEffect(() => {
    Aos.init({
      delay: 50,
      offset: 200,
      once: false,
      mirror: true,
      duration: 1000,
    });
  }, []);

  return (
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
};
