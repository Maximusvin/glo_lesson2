import Layout from '../Layout/Layout';

const Section = ({ className, children }) => {
  return (
    <section className={className}>
      <Layout>{children}</Layout>
    </section>
  );
};

export default Section;
