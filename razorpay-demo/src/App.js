import logo from './logo.svg';
import './App.css';
import useRazorpay from "react-razorpay";



function App() {

  const [Razorpay] = useRazorpay();

  const handlePayment = async () => {
    const options = {
      order_id: "order_NhkZkAq6JVgFOL"
    }

    const paymentObject = new Razorpay(options);

    paymentObject.open();

  }

  return (
    <div className="App">
     <button onClick={handlePayment}>Click to pay</button>
    </div>
  );
}

export default App;
