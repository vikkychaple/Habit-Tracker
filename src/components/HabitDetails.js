import React from 'react';

function HabitDetails({ habit, updateHabit }) {
   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const markCompleted = (dayIndex) => {
    const updatedCompletion = [...habit.completion];
    updatedCompletion[dayIndex] = !updatedCompletion[dayIndex];
    updateHabit(habit.id, { ...habit, completion: updatedCompletion });
  };

  const calculateWeekDays = (startDate) => {
    const startDayIndex = daysOfWeek.indexOf(startDate);
    const weekDays = daysOfWeek.slice(startDayIndex).concat(daysOfWeek.slice(0, startDayIndex));
    return weekDays;
  };



  const completedDays = habit.completion.filter((day) => day).length; // Count completed days


  return (
    <div className="habit-details p-2">
    <p className="font-weight-bold">Started on: {habit.startDate}</p>
    <h4 className="mb-3">Week View</h4>
    <div className="d-flex justify-content-between">
      {calculateWeekDays(habit.startdate).map((day, index) => ( 
        <div key={index} className="text-center">
          <p>{day}</p>
          <button
            className={`btn ${habit.completion[index] ? 'btn-success' : 'btn-danger'}`}
            onClick={() => markCompleted(index)}
          >
            {habit.completion[index] ? 'Done' : 'Undone'}
          </button>
          {/* <p>{calculateNextSevenDays(habit.startDate)[index]}</p> */}
        </div>
       ))} 
    </div>
    <p className="mt-3">Total Completed Days: {completedDays}</p>
  </div>
  );
}

export default HabitDetails;
