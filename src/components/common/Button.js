export default function Button({ onClick, text }) {
  return (
    <button
      onClick={onClick}
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
      {text}
    </button>
  );
}
