import React from "react";
import { connect } from "react-redux";
import { startPing } from "../redux/ducks/ping";

interface IProps {
  startPinging: () => void;
  ping: {
    isPinging: string
  };
}

const PingButton: React.FC<IProps> = ({ startPinging, ping }) => {
  return (
    <div>
      <button type="button" onClick={() => startPinging()}>
        Begin Pinging
      </button>
      <div>{ping.isPinging ? "IS PINGING" : ""}</div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    ping: state.ping
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    startPinging: () => {
      dispatch(startPing());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PingButton);
