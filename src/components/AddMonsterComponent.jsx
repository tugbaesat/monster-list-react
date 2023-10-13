const AddMonsterComponent = ({
  newCreature,
  handleChange,
  handleAddButtonClick
}) => {
  return (
    <div className="component">
      <h2>Add your monster to the list:</h2>
      <input
        type="text"
        placeholder="Add your own monster"
        value={newCreature}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="btn add-btn"
        onClick={handleAddButtonClick}
      >
        Add
      </button>
    </div>
  );
};

export default AddMonsterComponent;
