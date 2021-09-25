import './AmazingNumberButton.css'
const AmazingNumberButton = ({getButton}) =>{

    return (
      <div>
        <button className="buttonNumb" onClick={getButton} id="0">
          0
        </button>
        <button className="buttonNumb" onClick={getButton} id="1">
          1
        </button>
        <button className="buttonNumb" onClick={getButton} id="2">
          2
        </button>
        <button className="buttonNumb" onClick={getButton} id="3">
          3
        </button>
        <button className="buttonNumb" onClick={getButton} id="4">
          4
        </button>
        <button className="buttonNumb" onClick={getButton} id="5">
          5
        </button>
        <button className="buttonNumb" onClick={getButton} id="6">
          6
        </button>
        <button className="buttonNumb" onClick={getButton} id="7">
          7
        </button>
        <button className="buttonNumb" onClick={getButton} id="8">
          8
        </button>
        <button className="buttonNumb" onClick={getButton} id="9">
          9
        </button>
      </div>
    );
}
export default AmazingNumberButton;
