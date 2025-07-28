import { useRouter } from 'next/router';
import { ErrorState } from '../components/ErrorState';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { ListApprovedCourses } from '../components/ListApprovedCourses';
import { LoadingState } from '../components/LoadingState';
import { useApprovedSubscriptions } from '../hooks/useApprovedSubscriptions';

const AprovadosPage = () => {
  const router = useRouter();
  const { course, year } = router.query;

  const { approvedData, loading, error, refetch } = useApprovedSubscriptions({
    course: course as string,
    year: year as string,
  });

  if (loading) {
    return (
      <Layout>
        <Header />
        <LoadingState message="Carregando lista de aprovados..." />
        <Footer />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Header />
        <ErrorState message={error} onRetry={refetch} />
        <Footer />
      </Layout>
    );
  }

  return (
    <Layout>
      <Header />
      <ListApprovedCourses approvedListCourse={approvedData} />
      <Footer />
    </Layout>
  );
};

export default AprovadosPage;
