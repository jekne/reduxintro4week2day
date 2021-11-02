// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deposit, reset, withdraw } from "./store/balance/actions";
import { selectBalance } from "./store/balance/selectors";

function App() {
  // const [balance, setBalance] = useState(0);
  const balance = useSelector(selectBalance);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          // setBalance(balance + 10);
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
      <div>
        <button
          onClick={() => {
            dispatch(withdraw(10));
          }}
        >
          {" "}
          Withdraw 10$
        </button>
        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
