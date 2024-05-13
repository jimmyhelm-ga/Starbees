import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx";


const founders = [
  {
    name: "Malik Creese",
    title: "CEO",
    credential: "Coffee Expert",
    id: 1,
  },
  {
    name: "Jimmy Helm",
    title: "CFO",
    credential: "Coffee Finance Expert",
    id: 2,
  }
]

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <p>Welcome to Starbees!</p>
        <p>Coffee You Can Trust!</p>
        <p>Take a look around to learn all about us.</p>
      </main>
    </>  
  );
};

export default App;
