import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-grey10 | flex justify-center items-center">
        <div className="bg-grey10 | max-w-[30rem] w-fit p-4 | flex flex-col gap-6 justify-between rounded">
          <h2 className="text-xl font-medium font-sans text-grey60">
            E-Commerce Platform for Fashion Hub
          </h2>
          <div className="w-full h-56 rounded">
            <img
              src="https://source.unsplash.com/random/200x200"
              alt="image"
              className="w-full h-full rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl">Card Tiltle</h2>
                <p className="py-2 px-4 text-sm text-grey60 bg-grey15">
                  E-Commerce Platform for Fashion Hub
                </p>
              </div>
              <div className="h-12 w-12 bg-grey15 rounded flex items-center justify-center">
                <div className="h-6 w-6 bg-green50 rounded-full" />
              </div>
            </div>

            <p className="text-grey60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              est commodi neque officia nobis enim nesciunt optio exercitationem
              blanditiis error.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
