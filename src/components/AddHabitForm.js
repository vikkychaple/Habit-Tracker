import React, { useState } from 'react';

function AddHabitForm({ addHabit }) {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim() === '') {
      return;
    }

    const newHabit = {
      id: new Date().getTime(),
      name: habitName,
      startDate: new Date().toDateString(),
      completion: Array(7).fill(false), // Represents the completion status for each day of the week
    };

    addHabit(newHabit);
    setHabitName('');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit} className="mt-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a new habit..."
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-primary">
                  Add Habit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddHabitForm;
