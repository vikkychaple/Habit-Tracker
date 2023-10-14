import React from 'react';
import HabitItem from './HabitItem';

function HabitList({ habits, updateHabit, deleteHabit }) {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="habit-list">
          {habits.map((habit) => (
            <HabitItem key={habit.id} habit={habit} updateHabit={updateHabit} deleteHabit={deleteHabit} />
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}

export default HabitList;
