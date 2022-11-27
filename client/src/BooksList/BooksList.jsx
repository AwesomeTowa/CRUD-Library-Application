import { useQuery } from 'react-query';
import { getAllBooks } from '../api';
import { Container } from '../shared/Container';
import { Flex } from 'rebass';
import { BallTriangle } from 'react-loader-spinner';
import { BookItem } from './BookItem';

export const BooksList = () => {
  const { data, error, isLoading, isError } = useQuery('books', getAllBooks);
  if (isLoading) {
    return (
      <Container>
        <Flex py='5' justifyContent='center'>
          <BallTriangle color='#FF4154' height={50} width={50} />
        </Flex>
      </Container>
    );
  }

  if (isError) {
    return <span> Ошибка - нет Ответа от сервера</span>;
  }

  return (
    <Container>
      <Flex flexDirection='column' alignItems='center'>
        {data.map(({ author, title, id }) => (
          <BookItem author={author} title={title} key={id} id={id} />
        ))}
      </Flex>
    </Container>
  );
};
