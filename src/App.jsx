import { useState } from "react";
import { aside } from "./prefabs/Custom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-dvw max-h-screen">
        <header className="w-full p-4 bg-grey10">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-50">LOGO</h1>
            <div className=" gap-10 text-slate-50 hidden lg:flex">
              <button className="flex items-center space-x-2 hover:text-green50 hover:border-green50">
                {" "}
                Service{" "}
              </button>
              <button className="flex items-center space-x-2 hover:text-green50 hover:border-green50">
                {" "}
                About
              </button>
              <button className="flex items-center space-x-2 hover:text-green50 hover:border-green50">
                {" "}
                Career{" "}
              </button>
            </div>
            <div className="relative rounded-full hidden lg:flex">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-slate-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full py-2 px-4 pl-10 text-sm text-slate-900 border border-slate-300 box-border outline-none rounded-full bg-slate-50 "
                placeholder="Search "
              />
            </div>
            <button className="lg:hidden bg-green50">
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm-4 4a1 1 0 100-2H6a1 1 0 100 2h8zm5 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-5 5a1 1 0 100-2H6a1 1 0 100 2h8z"
                />
              </svg>
            </button>
          </nav>
        </header>
        <div className="sm:flex-row flex flex-col justify-between items-center gap-5 p-5 h-[40rem] sm:h-80 w-full">
          <main className="h-full w-full bg-grey60 rounded-md flex justify-center items-center">
            <div className="flex justify-center items-center gap-4">
              <button onClick={() => setCount((prev) => prev + 1)}>
                Click
              </button>
              <p className="text-grey10 py-2 px-3 bg-green50 text-xl font-bold rounded-md">
                {count}
              </p>
            </div>
          </main>

          <aside className="h-56 w-full sm:w-2/5 sm:h-full bg-grey60 rounded-md"></aside>
        </div>

        <section className="flex flex-col justify-center items-center gap-6 bg-grey10 p-3">
          <h1>Welcome</h1>
          <p>How are you doing?</p>
          <article className="bg-grey10 | max-w-full w-fit | flex flex-col gap-6 justify-between rounded p-6">
            <h2 className="text-xl font-medium font-sans text-grey60">
              E-Commerce Platform for Fashion Hub
            </h2>
            <div className="w-full h-56 rounded">
              <img
                src="https://source.unsplash.com/random/200x200"
                alt="image"
                className="w-full h-full rounded bg-cover object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-xl">
                    What are you looking for?
                  </h2>
                  <p className="py-2 px-4 text-sm text-grey60 bg-grey15">
                    E-Commerce Platform for Fashion Hub
                  </p>
                </div>
                <div className="h-12 w-12 bg-grey15 rounded flex items-center justify-center">
                  <div className="h-6 w-6 bg-green50 rounded-full" />
                </div>
              </div>

              <p className="text-grey60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente est commodi neque officia nobis enim nesciunt optio
                exercitationem blanditiis error.
              </p>
            </div>
          </article>
        </section>

        <footer className="p-20 w-full">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <button className="bg-grey10">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-grey60 hover:text-green50">
                  LOGO
                </span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-3">
              <div>
                <h3 className="mb-6 text-sm font-semibold text-green50 uppercase">
                  {" "}
                  Resources{" "}
                </h3>
                <ul>
                  <Li text="Blog" className="mb-4" />

                  <Li text="Prefabs" />
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-semibold text-green50 uppercase">
                  {" "}
                  Socials{" "}
                </h3>
                <ul>
                  <Li text="GitHub" className="mb-4" />

                  <Li text="Discord" />
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-semibold text-green50 uppercase ">
                  Company{" "}
                </h3>
                <ul>
                  <Li text="Privacy Policy" className="mb-4" />

                  <Li text="Terms &amp; Conditions" />
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-slate-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-green50 sm:text-center">
              © 2024 LOGO. All Rights Reserved.
            </span>
            <div className="flex flex-wrap mt-4 gap-4 items-center sm:mt-0">
              <button className="text-slate-600 hover:text-green50">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="text-slate-600 hover:text-green50">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="text-slate-600 hover:text-green50">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </button>
              <button className="text-slate-600 hover:text-green50">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
export const Li = ({ text, className }) => {
  return <li className={className}>{text}</li>;
};

export default App;
