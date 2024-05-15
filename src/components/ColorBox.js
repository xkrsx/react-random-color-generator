import './ColorBox.css';

export default function ColorBox({ colorBoxWidth, colorBoxHeight, boxColor }) {
  return (
    <div width="250px" height="250px" color="yellow">
      Generated color: {boxColor}
    </div>
  );
}
