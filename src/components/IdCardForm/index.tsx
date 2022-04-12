import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './styles';

export const IdCardForm = () => {
  const { register, handleSubmit: handleSubimtUseForm } = useForm();
  const router = useRouter();
  const handleSubmit = ({ name, email }: Record<string, string>) => {
    router.push({ pathname: '/id-card/[email]', query: { name, email } });
  };

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const uploaded_image = reader.result;
      sessionStorage.setItem(
        'id-card-image',
        JSON.stringify({
          image: {
            src: uploaded_image,
          },
        })
      );
    });
    if (
      event.target.files &&
      event.target.files[0] &&
      event.target.files[0].size > 80000
    ) {
      return alert('arquivo muito grande');
    }
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
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
        <input type="file" max-file-size="1024" onChange={handleUpload} />
        <button type="submit">Criar</button>
      </form>
    </S.Container>
  );
};
