export default function Modal({ sendValue }) {
  return (
    <>
      <div className="overlay">
        <div className="modal1">
          <p>This is Alert Dont Make This Mistake Again</p>
          <button onClick={() => sendValue(false)}>Hide</button>
        </div>
      </div>
    </>
  );
}
