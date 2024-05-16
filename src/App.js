import parse from 'parse-color';
import randomcolor from 'randomcolor';
import { useState } from 'react';
import Header from './components/Header';

// import UserForm from './components/UserForm';

export default function App() {
  const randomColor = randomcolor();
  const [color, setColor] = useState('');
  const [luminosity, setLuminosity] = useState('WORK IN PROGRESS');
  const [width, setWidth] = useState('250');
  const [height, setHeight] = useState('250');
  const colorBoxWidth = width > '100vw' ? width + 'px' : '100vw';
  const colorBoxHeight = height > '100vw' ? height + 'px' : '100vw';

  if (
    luminosity === 'light' ||
    luminosity === 'dark' ||
    luminosity === 'bright'
  ) {
    randomcolor({ luminosity: luminosity });
  } else {
    randomColor;
  }

  return (
    <>
      <Header />

      <div
        style={{
          margin: '10px auto',
          display: 'flex',

          flexDirection: 'row',
        }}
      >
        <div>
          <form onSubmit={(event) => event.preventDefault()}>
            <p>Your custom luminosity (eg. dark, light brown)</p>
            <input
              value={luminosity}
              disabled={true}
              onChange={(event) => setLuminosity(event.currentTarget.value)}
            />
            <p>Your custom color in hue format (eg. red, blue, yellow)</p>
            <input
              value={color}
              onChange={(event) =>
                setColor(parse(event.currentTarget.value).hex)
              }
            />
            <p>Your custom size</p>
            <input
              value={width}
              type="number"
              onChange={(event) => setWidth(event.currentTarget.value)}
            />
            <p>px x </p>
            <input
              value={height}
              type="number"
              onChange={(event) => setHeight(event.currentTarget.value)}
            />
            <p>px</p>
            <p>Generate your custom box, color and/or luminosity!</p>
            <button
              onClick={() => setColor(randomColor)}
              style={{
                width: '100px',
                height: '50px',
                borderRadius: '5px',
                border: '1px black solid',
                margin: 'auto',
                fontSize: '15px',
                cursor: 'pointer',
              }}
            >
              <p>Generate</p>
            </button>
          </form>
          <p>
            You can also generate a random color by clicking the above button
            without specifying luminosity and/or color yourself!
          </p>
        </div>
        <div
          style={{
            width: colorBoxWidth,
            height: colorBoxHeight,
            border: '2px black dotted',
            borderRadius: '10px',
            color: 'black',
            fontFamily: 'helvetica, Arial',
            fontSize: '20px',
            backgroundColor: color,
            padding: '20px',
            margin: '20px auto',
            transition: 'all 0.4s ease',
            cursor: 'progress',
          }}
        >
          <div>
            <p style={{ fontFamily: 'helvetica', textAlign: 'center' }}>
              {!color
                ? 'Click the button to generate'
                : 'Generated color: ' + color}
            </p>
            <p style={{ fontFamily: 'helvetica', textAlign: 'center' }}>
              {luminosity === 'WORK IN PROGRESS' || luminosity === ''
                ? ''
                : 'Your custom luminosity is ' + luminosity}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
