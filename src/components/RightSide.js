export default function RightSide({ colorBoxWidth, colorBoxHeight, boxColor }) {
  return (
    <div
      style={{
        width: colorBoxWidth + 'px',
        height: colorBoxHeight + 'px',
        backgroundColor: boxColor,
        border: '1px black solid',
      }}
    >
      <p>Generated color: {boxColor}</p>
    </div>
  );
}
