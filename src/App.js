import "./styles.css";
import { useState } from "react";
import MonsterListComponent from "./components/MonsterListComponent";
import AddMonsterComponent from "./components/AddMonsterComponent";

export default function App() {
  const [creatures, setCreatures] = useState(["Xorn", "Demogorgon", "Wyvern"]);
  const [newCreature, setNewCreatures] = useState(" ");

  const handleChange = (e) => {
    e.preventDefault();
    setNewCreatures(e.target.value);
  };

  const handleAddButtonClick = (e) => {
    e.preventDefault();
    setCreatures((prevState) => [...prevState, newCreature]);
    alert(`${newCreature} is added`);
    setNewCreatures("");
  };

  const handleDeleteButtonClick = (index) => {
    setCreatures((prevState) => prevState.filter((creature, i) => i !== index));
  };

  return (
    <div className="App">
      <AddMonsterComponent
        newCreature={newCreature}
        handleChange={handleChange}
        handleAddButtonClick={handleAddButtonClick}
      />
      <MonsterListComponent
        creatures={creatures}
        setCreatures={setCreatures}
        handleDeleteButtonClick={handleDeleteButtonClick}
      />
    </div>
  );
}
