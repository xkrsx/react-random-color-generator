// import InputBox from './common/InputBox';
// import TextBox from './common/TextBox';

export default function LeftSide({ onClick }) {
  return (
    <>
      {/* <TextBox text="Hue" />
      <InputBox />
      <TextBox text="Lightness" />
      <InputBox />
      <TextBox text="Size" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <InputBox /> <TextBox text="x" /> <InputBox /> <TextBox text="px" />
      </div> */}
      <button onClick={onClick}>Generate</button>
      {/* <button onClick={onClick}>Screensaver</button> */}
    </>
  );
}
