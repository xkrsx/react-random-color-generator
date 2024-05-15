import Formik from 'formik';
import randomcolor from 'randomcolor';
import { useState } from 'react';
import Header from './components/Header';

export default function App() {
  const randomColor = randomcolor();
  const [color, setColor] = useState('');
  const colorBoxWidth = '250px';
  const colorBoxHeight = '250px';
  console.log(color);

  return (
    <>
      <div className="App">
        <h1>Contact Us</h1>
        <Formik
          initialValues={{ name: '', email: '' }}
          // onSubmit={}
        >
          <form>
            <field name="hue" type="text" />
            <field name="luminosity" type="email" />
            <button>Submit</button>
          </form>
        </Formik>
      </div>

      <Header />
      <div
        style={{
          margin: '10px auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
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
