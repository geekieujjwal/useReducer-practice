import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "increament") {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === "decreament") {
    return {
      ...state,
      count: state.count - 1,
    };
  }

  if (action.type === "addValue") {
    return {
      ...state,
      valueToAdd: action.payload, // Update valueToAdd with the payload
      count: state.count + action.payload,
    };
  }

  return state;
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    valueToAdd: 0,
  });

  console.log(state);

  const increase = () => {
    dispatch({
      type: "increament",
    });
  };

  const decrease = () => {
    dispatch({
      type: "decreament",
    });
  };
  const handleAddClick = () => {
    dispatch({
      type: "addValue",
    });
  };

  const handleChange = (e) => {
    const value = Number(e.target.value) || 0;
    dispatch({
      type: "addValue", // Fix the action type here
      payload: value,
    });
  };

  return (
    <div>
      <div className="inc-dec">
        <button onClick={decrease}>-</button>
        <div>Value: {state.count}</div>
        <button onClick={increase}>+</button>
      </div>
      <div>
        <button onClick={handleAddClick}>Add to Value:</button>
        <input type="number" placeholder="0" onChange={handleChange} />
      </div>
    </div>
  );
};

export default UseReducer;
