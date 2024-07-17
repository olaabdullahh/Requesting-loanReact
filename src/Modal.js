import "./style.css";
export default function Modal({isVisible , errorMessage= null}) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          {/* <h2>The Form Has Been Submitted SuccessFlly</h2> */}
          <h2 style={{color: errorMessage ? "red" : "green"}}>{errorMessage ? errorMessage : "The Form Has Been Submitted SuccessFlly"}</h2>
        </div>
      </div>
    );
  }
}
