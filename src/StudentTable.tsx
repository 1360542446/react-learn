import React, { Component } from 'react';

interface StudentTableProps {
  keys: Array<string>;
  studentsInfo: Array<object>;
}
interface StudentInfo {
  student_id: string;
  name: string;
  grade: string | null;
  avgpoint: number;
}
class StudentTable extends Component<StudentTableProps>{
  private renderStudentsInfoTr(value: StudentInfo, index: number) {
    const { student_id: studentID, name, grade, avgpoint } = value;
    return (
      <tr key={index}>
        <td>{studentID}</td>
        <td>{name}</td>
        <td>{grade}</td>
        <td>{avgpoint}</td>
      </tr>
    )
  }
  public render() {
    return (
      <table def={"1"}>
        <thead>
          <tr>
            {this.props.keys.map((val, index) => (<th key={index}>{val}</th>))}
          </tr>
        </thead>
        <tbody>
          {this.props.studentsInfo.map((val: StudentInfo | any, index) => this.renderStudentsInfoTr(val, index))}
        </tbody>
      </table>
    );
  }
}

export default StudentTable;
