import React, { useState } from 'react';

function UpdateHabitForm({ habit, updateHabit, closeUpdateForm }) {
  const [updatedName, setUpdatedName] = useState(habit.name);

  const handleUpdate = () => {
    updateHabit(habit.id, { ...habit, name: updatedName });
    closeUpdateForm();
  };

  return (
    <div>
      <input
        type="text"
        value={updatedName}
        onChange={(e) => setUpdatedName(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={closeUpdateForm}>Cancel</button>
    </div>
  );
}

export default UpdateHabitForm;