import './App.css';
import BackgroundCircle from './BackgroundCircle';
import Eyes from './Eyes';
import Mouth from './Mouth';
import Eyebrows from './Eyebrows';
import FaceContainer from './FaceContainer';

function App() {
  const width = 960;
  const height = 500;
  const centerX = width/2;
  const centerY = height/2;
  const strokeWidth = 15;
  const eyeOffSetX = 50;
  const eyeOffSetY = 110;
  const eyeRadius = 30;
  const mouthWidth = 20;
  const mouthRadius = 140;

  return (
    <div className="App">
        <FaceContainer width={width} height={height} centerX={centerX} centerY={centerY}>
          <BackgroundCircle radius={centerY - strokeWidth} strokeWidth={strokeWidth}/>
          <Eyes eyeOffSetX={eyeOffSetX} eyeOffSetY = {eyeOffSetY} eyeRadius={eyeRadius}/>
          <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth}/>
          <Eyebrows mouthRadius={mouthRadius}/>
        </FaceContainer>
    </div>
  );
}

export default App;
