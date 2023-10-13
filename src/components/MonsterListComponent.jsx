const MonsterListComponent = ({ creatures, handleDeleteButtonClick }) => {
  return (
    <div className="component">
      <h1>Monster List</h1>
      <ul>
        {creatures.map((creature, index) => {
          return (
            <div className="list-item" key={index}>
              <li>{creature} </li>
              <button
                className="btn delete-btn"
                onClick={() => handleDeleteButtonClick(index)}
              >
                X
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MonsterListComponent;
