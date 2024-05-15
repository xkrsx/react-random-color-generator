import ColorBox from './ColorBox';

export default function RightSide({ colorBoxWidth, colorBoxHeight, boxColor }) {
  return (
    <ColorBox
      colorBoxWidth={colorBoxWidth}
      colorBoxHeight={colorBoxHeight}
      boxColor={boxColor}
    />
  );
}
