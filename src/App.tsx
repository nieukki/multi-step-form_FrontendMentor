import { DefaultForm } from "./components/DefaultForm";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="min-w-screen h-screen flex items-center justify-center bg-neutralBlue-100 font-ubuntu">
      <div className="w-3/5 h-7/10 bg-neutralWhite flex flex-row items-start justify-between rounded-2xl p-4">
        <Sidebar />
        <DefaultForm />
      </div>
    </div>
  );
}

export default App;
