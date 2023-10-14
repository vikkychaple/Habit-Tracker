import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HabitList from './components/HabitList';
import AddHabitForm from './components/AddHabitForm';

function App() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    // Load habits from local storage on component mount
    const storedHabits = JSON.parse(localStorage.getItem('habits')) || [];
    setHabits(storedHabits);
  }, []);

  useEffect(() => {
    // Save habits to local storage whenever the 'habits' state changes
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  // Add, update, and delete habit functions
  const addHabit = (newHabit) => {
    setHabits([...habits, newHabit]);
  };

  const updateHabit = (habitId, updatedHabit) => {
    const updatedHabits = habits.map((habit) => (habit.id === habitId ? updatedHabit : habit));
    setHabits(updatedHabits);
  };

  const deleteHabit = (habitId) => {
    const updatedHabits = habits.filter((habit) => habit.id !== habitId);
    setHabits(updatedHabits);
  };
  const appStyles = {
    backgroundColor: '#f0f0f0', // Specify your desired background color here
    minHeight: '100vh', // Ensure the background color covers the entire viewport height
  };

  return (
    <div style={appStyles}className="App">
      <Navbar />
      <AddHabitForm  addHabit={addHabit} />
      <HabitList habits={habits} updateHabit={updateHabit} deleteHabit={deleteHabit} />
      {/* <Navbar onAddHabitClick={this.AddHabit} /> */}

      
    </div>
  );
}

export default App;
