import { Route, Routes } from "react-router-dom";
import { CreateItem, Header, MainContainer } from "./components";

function App() {
  return (
    <div className="App w-screen h-auto flex flex-col bg-primary">
      <Header />

      <main className="mt-24 p-8 w-full">
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/createitem" element={<CreateItem />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
