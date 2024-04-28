import "./App.css";

function App() {
  return (
    <>
      <div className="bg-black h-svh ">
        <div className="mx-auto">
          <div className="flex justify-center items-center h-svh flex-col">
          <img src="https://github.com/ReproLoom/.github/blob/main/onlylogo.png?raw=true" alt="ReproLoom" width={300}/>
            <div className="text-white text-5xl sm:text-8xl font-lexend">ReproLoom</div>
            <div className="text-white text-1xl sm:text-2xl mt-5 font-lexend">We will be launching soon</div>
            <div className="text-white text-1xl sm:text-2xl font-lexend">Stay tuned for updates</div>
            <button className="bg-white text-black px-4 py-2 mt-5 rounded-md font-semibold" onClick={() => window.location.href = 'mailto:hi@reproloom.tech'}>Contact</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
