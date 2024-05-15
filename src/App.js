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
  const colorBoxWidth = width + 'px';
  const colorBoxHeight = height + 'px';

  const luminosityCheck = (luminosity) => {
    'red';
    if (
      luminosity === 'light' ||
      luminosity === 'dark' ||
      luminosity === 'bright'
    ) {
      randomcolor({ luminosity: luminosity });
    } else {
      randomcolor();
    }
  };

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
            <p>Your custom luminosity</p>
            <input
              value={luminosity}
              onChange={(event) => setLuminosity(event.currentTarget.value)}
            />
            <p>Your custom color</p>
            <input
              value={color}
              onChange={(event) =>
                setColor(parse(event.currentTarget.value).hex)
              }
            />
            <p>Your custom size</p>
            <input
              value={width}
              type={'number'}
              onChange={(event) => setWidth(event.currentTarget.value)}
            />
            <input
              value={height}
              type={'number'}
              onChange={(event) => setHeight(event.currentTarget.value)}
            />
            <p>Generate your custom color or luminosity.</p>
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
              Generate{}
            </button>
          </form>
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
          <p style={{ fontFamily: 'helvetica', textAlign: 'center' }}>
            {!color
              ? 'Click the button to generate'
              : 'Generated color: ' + color}
          </p>
        </div>
      </div>
    </>
  );
}
