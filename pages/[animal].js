import Layout from '../components/layout/Layout';
import DetailsContainer from '../components/project/DetailsContainer';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const id = context.params.animal;
  const response = await fetch(
    `https://finalbackend1092.herokuapp.com/animals?id=${id}`
  );
  const details = await response.json();
  console.log('路由名稱', id);
  console.log('細節', details);

  return {
    props: {
      id,
      details,
    },
  };
}

export default function DetailsPage({ id, details }) {
  const router = useRouter();
  return (
    <Layout>
      <DetailsContainer key={details[0].id} details={details} id={id} />
    </Layout>
  );
}
