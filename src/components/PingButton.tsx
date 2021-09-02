import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionsType, PingState } from "../redux/ducks/ping";

const PingButton: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: { ping: PingState}) => state);

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch({ type: ActionsType.PING })}
      >
        Begin Pinging
      </button>
      <div>{state.ping.isPinging ? "IS PINGING" : ""}</div>
    </div>
  );
};

export default PingButton;