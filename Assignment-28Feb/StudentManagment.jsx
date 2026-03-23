import React from "react";

function StudentManager() {

  const students = [
    { name: "Monisha", marks: [85, 90, 88] },
    { name: "Rahul", marks: [70, 75, 80] },
    { name: "Anita", marks: [92, 89, 95] }
  ];

  const calculateAverage = (marks) => {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return (total / marks.length).toFixed(2);
  };

  return (
    <div style={{textAlign:"center", fontFamily:"Arial"}}>
      <h2>Student Manager</h2>

      <table border="1" style={{margin:"auto", padding:"10px"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Marks</th>
            <th>Average</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.marks.join(", ")}</td>
              <td>{calculateAverage(student.marks)}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default StudentManager;