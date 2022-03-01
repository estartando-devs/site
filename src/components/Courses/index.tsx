import React, { useState } from 'react';
import { Eye } from '@styled-icons/heroicons-outline';
import { Typography } from '..';
import { COURSE_DATA } from '../../mocks/course';
import * as S from './styles';
import { useTheme } from 'styled-components';

type PropsCourse = {
  course: 'frontEnd' | 'backEnd' | 'design';
};

const Courses = ({ course }: PropsCourse) => {
  const [exhibition, setExhibition] = useState(false);
  const literalObjectCall = COURSE_DATA[course];
  const {
    palette: {
      design: { white },
    },
  } = useTheme();
  return (
    <S.CourseContainer>
      <S.TitleContainer
        width={literalObjectCall.widthContainerTitle}
        bgColor={literalObjectCall.backgroundTitle}
      >
        <Typography variant="body1">{literalObjectCall.title}</Typography>
      </S.TitleContainer>
      <S.IntroText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        voluptates iste error veniam at ipsum earum harum quisquam facilis vel.
        Quibusdam iusto ab sint earum voluptas, dicta laudantium illum at!
      </S.IntroText>
      <S.ModulesTextContainer>
        <S.modulesText>Ver módulos</S.modulesText>
        <Eye
          width={24}
          height={24}
          color={white}
          onClick={() => setExhibition(!exhibition)}
        />
      </S.ModulesTextContainer>
      <S.ListModulesContainer>
        {exhibition &&
          literalObjectCall.courseModules.map((item, index) => (
            <p key={index}>- {item}</p>
          ))}
      </S.ListModulesContainer>
    </S.CourseContainer>
  );
};

export { Courses };
