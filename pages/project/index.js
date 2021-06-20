import Layout from '../../components/layout/Layout';
import ProjectContainer from '../../components/project/ProjectContainer';

export async function getServerSideProps() {
  const response = await fetch(
    'https://finalbackend1092.herokuapp.com/animals'
  );
  const animals = await response.json();

  return {
    props: {
      animals,
    },
  };
}

export default function Home({ animals }) {
  return (
    <Layout>
      <ProjectContainer key={animals[0].id} animals={animals} />
    </Layout>
  );
}
