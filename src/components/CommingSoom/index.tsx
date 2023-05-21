const CommingSoon = () => {
  return (
    <main className="grid h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p
          className="text-4xl font-semibold sm:text-4xl"
          style={{ color: '#C1292E' }}
        >
          Bruno Tassinari
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Coming Soon
        </h1>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://www.linkedin.com/in/brunotassinari/"
            target="_blank"
            className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            style={{ backgroundColor: '#C1292E' }}
          >
            Linkedin
          </a>
          <a
            href="https://github.com/BrunoTassinari"
            target="_blank"
            className="rounded-md px-3.5 py-2.5 w-32 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            style={{ backgroundColor: '#0B2228' }}
          >
            Github
          </a>
        </div>
      </div>
    </main>
  );
};

export default CommingSoon;
