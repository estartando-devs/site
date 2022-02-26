import React, { useState } from 'react';
import { Typography } from '..';
import * as S from './styles';

type PropsCourse = {
  course: 'frontEnd' | 'backEnd' | 'design';
};

const COURSE_DATA = {
  frontEnd: {
    backgroundTitle: '#0d6f61',
    widthContainerTitle: '300px',
    title: 'Programação Front-end',
    coursePresentation: '',
    courseModules: ['Como funciona a internet', 'HTML5', 'CSS3'],
  },
  backEnd: {
    backgroundTitle: '#1e6f7a',
    widthContainerTitle: '293px',
    title: 'Programação Back-end',
    coursePresentation: '',
    courseModules: ['Lógica de programação', 'Arquitetura de dados', 'nodeJS'],
  },
  design: {
    backgroundTitle: '#45408e',
    widthContainerTitle: '173px',
    title: 'Design UI/UX',
    coursePresentation: '',
    courseModules: [
      'Figma',
      'O que é experiência do usuário',
      'Design de interface',
    ],
  },
};

const Courses = ({ course }: PropsCourse) => {
  const [exhibition, setExhibition] = useState(false);
  const literalObjectCall = COURSE_DATA[course];
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
        <S.modulesText>ver módulos</S.modulesText>
        <img
          src="eye.svg"
          alt="Exibir módulos"
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
