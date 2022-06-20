import AwesomeVideoHoverPointer from "./AwesomeVideoHoverPointer";

function AwesomeVideoControls({ seekToCallback }) {
  return (
    <div className="AwesomeVideoControls">
      <div className="AwesomeVideoProgress">
        <div className="AwesomeVideoProgressPointer"></div>
        <AwesomeVideoHoverPointer seekToCallback={seekToCallback} />
      </div>
    </div>
  );
}

export default AwesomeVideoControls;
