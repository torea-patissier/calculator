import React, {useState} from 'react'
import AmazingNumberButton from '../AmazingNumberButton/AmazingNumberButton'
import BeautifullScreen from '../BeautifullScreen/BeautifullScreen'
import GreatOperationButton from '../GreatOperationButton/GreatOperationButton'
import MagnificientEqualButton from '../MagnificientEqualButton/MagnificientEqualButton'
import './Calculator.css'

export default function Calculator() {
  // Récupère la valeur entrée
  const [numbers, setNumbers] = useState([]);

  const getButtonId = function (e) {
    switch (e.target.id) {
      case "=":
        var result = eval(numbers);
        if (result > "9000") {
          setNumbers("ItSOverNineThousand.");
        } else {
          setNumbers(result);
        }
        break;
      case "C":
        var clear = "";
        setNumbers(clear);
        break;
      default:
        setNumbers(numbers + e.target.id);
        break;
    }
  };

  return (
    <div className="Contenu">
      <BeautifullScreen numbers={numbers} />
      <div className="calculator">
        <AmazingNumberButton getButton={getButtonId} />
        <GreatOperationButton getButton={getButtonId} />
        <MagnificientEqualButton getButton={getButtonId} />
      </div>
    </div>
  );
}