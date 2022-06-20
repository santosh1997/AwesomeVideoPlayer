import "./styles.css";
import AwesomeVideoControls from "./AwesomeVideoControls";

function AwesomeVideoPlayer() {
  return (
    <div className="AwesomeVideoPlayer">
      <div className="AwesomeVideoElementWrapper">
        <video className="AwesomeVideoElement">
          <source
            src="https://d178os68zj3ztk.cloudfront.net/016cb7ce-607f-4719-ac2f-174810d3c113.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="AwesomeVideoControlsWrapper">
        <AwesomeVideoControls />
      </div>
    </div>
  );
}

export default AwesomeVideoPlayer;
