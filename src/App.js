import Header from "./components/Header";
import Feature from "./components/Feature";

function App() {
  const razorPay = async () => {
    const results = await fetch("/.netlify/functions/createOrder");
    console.log(results);
  };

  return (
    <div className="App">
      <button
        className="px-12 py-8 bg-yellow-400 hover:bg-yellow-300 text-white rounded-xl"
        onClick={razorPay}
      >
        RAZOR PAY
      </button>
      <Header />
      <Feature />
    </div>
  );
}

export default App;
