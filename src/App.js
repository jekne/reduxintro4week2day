// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deposit, reset, withdraw } from "./store/balance/actions";
import { selectBalance } from "./store/balance/selectors";
import { useState } from "react";

function App() {
  // const [balance, setBalance] = useState(0);
  const balance = useSelector(selectBalance);
  const dispatch = useDispatch();

  const [customAmount, setCustomAmount] = useState("");

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
      <div>
        <label>Deposit Custom Amount</label>
        <input
          type="number"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(parseInt(e.target.value));
          }}
        />
        <button
          onClick={() => {
            dispatch(deposit(customAmount));
            setCustomAmount(0);
          }}
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default App;
