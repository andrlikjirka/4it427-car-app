import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-3 mb-3">
      <div className="flex flex-col mx-auto">
        <div className="flex justify-center m-0 p-0">
          <img
            src="/car.png"
            alt=""
            className="relative w-28 h-28 object-contain"
          />
        </div>
        <h1 className="text-2xl text-center font-bold">
          Autobazar Bleska McQueena
        </h1>
      </div>
      <nav className="">
        <div className="flex flex-row mx-auto my-6 justify-center space-x-20">
          <Link href="/" className="font-medium hover:text-gray-400">
            Domů
          </Link>
          <Link href="/cars" className="font-medium hover:text-gray-400">
            Nabízená auta
          </Link>
          <Link href="/cars/new" className="font-medium hover:text-gray-400">
            Přidat auto
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
