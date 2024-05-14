import randomcolor from 'randomcolor';
import { useState } from 'react';
import Header from './components/Header';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

export default function App() {
  const randomColor = randomcolor();
  const [color, setColor] = useState(randomColor);
  const colorBoxWidth = '250';
  const colorBoxHeight = '75';

  return (
    <>
      <Header />
      <div style={{}}>
        <LeftSide
          style={{ border: '1px black solid' }}
          onClick={() => setColor(randomColor)}
        />
        <RightSide
          boxColor={color}
          width={colorBoxWidth}
          height={colorBoxHeight}
        />
      </div>
    </>
  );
}
