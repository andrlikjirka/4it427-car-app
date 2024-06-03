import Link from 'next/link';

const HomePage = async () => {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold mb-6">Vítejte!</h1>
      <p className="text-lg mb-16">
        Autobazar Bleska McQueena je nejlepší místo na nákup vašeho auta.
      </p>
      <Link
        href="/cars"
        className="btn px-16 py-4 bg-red-900 rounded-md text-xl font-medium"
      >
        Vybrat si auto
      </Link>
    </section>
  );
};

export default HomePage;
