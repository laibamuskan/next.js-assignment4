import Image from "next/image";
import Card from "./component/Card";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Student ID Cards</h1>

      {/* Student Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          name="Laiba Muskan"
          age={18}
          rollNumber={101}
        />
        <Card
          name="Nimra Nisa"
          age={22}
          rollNumber={102}
         />
        <Card
          name="Kinza Habib"
          age={20}
          rollNumber={103}
        />
      </div>
    </div>
  );
}

export default App;


