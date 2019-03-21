import React, { Component } from 'react';
import StudentTable from './StudentTable';
import './App.css';

class App extends Component {
  readonly state:any;
  constructor(props: any) {
    super(props);
    this.state = {
      keys: ['student_id', 'name', 'grade', 'avgpoint'],
      studentsInfo: [{
        'student_id': '2018091608010',
        'name': 'tom',
        'grade': '18级',
        'avgpoint': 1
      }]
    }
  }

  render() {
    return (
      <div>
        <StudentTable keys={ this.state.keys} studentsInfo={this.state.studentsInfo}></StudentTable>
      </div>
    );
  }
}

interface Square {
  value: string;
}

const Square = (props: Square) => <button>{props.value}</button>

export default App;
