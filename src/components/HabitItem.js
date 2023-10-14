import React, { useState } from 'react';
import HabitDetails from './HabitDetails';
import UpdateHabitForm from './UpdateHabitForm';

function HabitItem({ habit, updateHabit, deleteHabit }) {
  const [isDetailsVisible, setDetailsVisible] = useState(false);
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false); // Define the state here

  const toggleDetails = () => {
    setDetailsVisible(!isDetailsVisible);
  };

  const openUpdateForm = () => {
    setUpdateFormVisible(true);
  };

  const closeUpdateForm = () => {
    setUpdateFormVisible(false);
  };

  return (
    <div className="card mb-3 m-2">
      <div className="card-body">
        <h4 className="card-title">{habit.name}</h4>
        <p className="card-text">Started on: {habit.startDate}</p>
        <button className="btn btn-info" onClick={toggleDetails}>
          Week View
        </button>
        <button className="btn btn-danger" onClick={() => deleteHabit(habit.id)}>
          Delete
        </button>
        <button className="btn btn-warning" onClick={openUpdateForm}>
          Update
        </button>

        {isDetailsVisible && <HabitDetails habit={habit} updateHabit={updateHabit} />}
        {isUpdateFormVisible && (
          <UpdateHabitForm habit={habit} updateHabit={updateHabit} closeUpdateForm={closeUpdateForm} />
        )}
      </div>
    </div>
  );
}

export default HabitItem;
