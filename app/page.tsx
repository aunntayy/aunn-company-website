export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold">
          AUNN D TAYY
        </h1>

        <div className="space-x-6 text-gray-300">
          <a href="#games">Games</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* Hero */}
      <section className="text-center py-32 px-6">

        <h2 className="text-5xl md:text-7xl font-bold">
          Creating Games
          <br />
          Everyone Can Enjoy
        </h2>

        <p className="mt-6 text-xl text-gray-400">
          Aunn D Tayy LLC builds simple,
          fun, and addictive experiences.
        </p>


        <button className="
          mt-10
          bg-white
          text-black
          px-8
          py-3
          rounded-full
          font-semibold
          hover:bg-gray-200
        ">
          Explore Games
        </button>

      </section>



      {/* Games */}
      <section id="games" className="px-8 py-20">

        <h2 className="text-4xl font-bold mb-10">
          Featured Games
        </h2>


        <div className="
          grid
          md:grid-cols-3
          gap-8
        ">

          <div className="
            bg-zinc-900
            rounded-2xl
            p-8
          ">

            <div className="
              h-40
              bg-orange-500
              rounded-xl
              flex
              items-center
              justify-center
              text-5xl
              font-bold
            ">
              2048
            </div>


            <h3 className="text-2xl mt-5 font-bold">
              2048
            </h3>

            <p className="text-gray-400 mt-2">
              Classic puzzle game redesigned
              for modern players.
            </p>

          </div>


          <div className="
            bg-zinc-900
            rounded-2xl
            p-8
          ">

            <div className="
              h-40
              bg-zinc-700
              rounded-xl
              flex
              items-center
              justify-center
              text-xl
            ">
              Coming Soon
            </div>


            <h3 className="text-2xl mt-5 font-bold">
              Future Games
            </h3>

            <p className="text-gray-400 mt-2">
              More experiences are being created.
            </p>

          </div>

        </div>

      </section>




      {/* About */}
      <section id="about" className="px-8 py-20 text-center">

        <h2 className="text-4xl font-bold">
          About Aunn D Tayy
        </h2>

        <p className="
          max-w-3xl
          mx-auto
          mt-6
          text-gray-400
          text-lg
        ">
          Aunn D Tayy LLC is an independent
          game studio focused on creating
          accessible and enjoyable games
          for players around the world.
        </p>

      </section>




      {/* Contact */}
      <section id="contact" className="
        px-8
        py-20
        text-center
      ">

        <h2 className="text-4xl font-bold">
          Contact
        </h2>

        <p className="mt-4 text-gray-400">
          aunndtayyllc@gmail.com
        </p>

      </section>




      {/* Footer */}
      <footer className="
        border-t
        border-zinc-800
        py-8
        text-center
        text-gray-500
      ">

        <p>
          © 2026 Aunn D Tayy LLC.
          All rights reserved.
        </p>

        <div className="mt-3 space-x-5">
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
        </div>

      </footer>

    </div>
  );
}