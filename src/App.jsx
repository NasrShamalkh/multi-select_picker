import React from 'react';
import './App.css';
import MultiSelectPicker from './components/picker';


const App = () => {
    var options = ['Budget', 'Alergies', 'Number of people',
     'Special restrictions', 'Active times', 'Shift times', 'whats for today']
    return (
        <div>
            <MultiSelectPicker options={options}  />
        </div>
    )
}

export default App;