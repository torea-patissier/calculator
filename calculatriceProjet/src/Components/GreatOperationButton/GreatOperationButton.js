import './GreatOperationButton.css'

export default function GreatOperationButton({getButton}){
    return (
      <div className="Button">
        <button className="buttonOps" onClick={getButton} id="+">
          +
        </button>
        <button className="buttonOps" onClick={getButton} id="-">
          -
        </button>
        <button className="buttonOps" onClick={getButton} id="/">
          /
        </button>
        <button className="buttonOps" onClick={getButton} id="*">
          *
        </button>
        <button className="buttonOps" onClick={getButton} id=".">
          .
        </button>
        <button className="buttonOps" onClick={getButton} id="C">
          C
        </button>
      </div>
    );
}
