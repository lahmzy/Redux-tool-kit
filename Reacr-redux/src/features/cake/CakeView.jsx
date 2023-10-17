import React, { useState } from "react";
import {useSelector,useDispatch } from "react-redux";
import {ordered,restocked} from "./cakeSlice"

const CakeView = () => {

  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes)
  const dispatch = useDispatch()
  const [cakeInput, setCakeInput] = useState(1)

  const handleDispatch = () => {
    dispatch(ordered())
  }

  return (
    <div>
      <h2>Number of Cakes - {numberOfCakes}</h2>
      <input type="number" onChange={(e) =>  setCakeInput(e.target.value)} value={cakeInput}/>
      <button onClick={handleDispatch}>Order cake</button>
      <button onClick={ () => dispatch(restocked(parseInt(cakeInput)))}>restocked cakes</button>
    </div>
  );
};

export default CakeView;
