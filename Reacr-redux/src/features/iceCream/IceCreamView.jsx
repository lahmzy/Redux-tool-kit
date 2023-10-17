import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { ordered,restocked } from "./iceCreamSlice";

const IceCreamView = () => {

  const iceCream = useSelector( state => state.iceCream.numberOfIcecream)
  const dispatch = useDispatch()
  
  return (
    <div>
      <h2>Number of IceCream - {iceCream}</h2>
      <button onClick={() => {dispatch(ordered())}}>Order iceCream</button>
      <button onClick={() => {dispatch(restocked(5))}}>restocked iceCream</button>
    </div>
  );
};

export default IceCreamView;
