export default function Modal({ sendvalue }) {
  return (
    <div className="overlay">
      <div className="d-flex flex-column border border-primary justify-content-center align-items-center">
        <h1>Questions will appear here</h1>
        <p>Question1</p>
        <p>Question1</p>
        <p>Question1</p>
        <button className="btn-primary" onClick={() => sendvalue(false)}>
          Hide
        </button>
      </div>
    </div>
  );
}
