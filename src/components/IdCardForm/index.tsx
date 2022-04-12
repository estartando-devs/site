import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as S from './styles';

export const IdCardForm = () => {
  const { register, handleSubmit: handleSubimtUseForm } = useForm();
  const router = useRouter();
  const handleSubmit = ({ name, email }: Record<string, string>) => {
    router.push({ pathname: '/id-card/[name]', query: { name, email } });
  };
  return (
    <S.Container>
      <h1>
        Crie seu ID Card personalizado e divulge nas suas redes. Não esqueça de
        nos marcar.
      </h1>
      <form onSubmit={handleSubimtUseForm(handleSubmit)}>
        <input type="text" {...register('name')} />
        <input type="text" {...register('email')} />
        <button type="submit">Criar</button>
      </form>
    </S.Container>
  );
};
