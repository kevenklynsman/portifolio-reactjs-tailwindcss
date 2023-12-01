import { SideBar } from "./components/SideBar";
import { MainContent } from "./components/MainContent";

function App() {
  return (
    <>
      <div className="flex flex-wrap md:p-12 md:gap-12">
        <h1 className="w-full text-5xl md:text-7xl ml-5 mb-16 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
          Keven Klynsman
        </h1>
        <SideBar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
