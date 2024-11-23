import React, { useState } from 'react';

function EmployeesForm() {
  const [employees, setEmployees] = useState([]);

  const getEmployeesFromServer = async () => {
    const reqOptions = {
      method: "GET",
    };

    const JSONData = await fetch("http://localhost:1516/getEmployees", reqOptions);
    const JSOData = await JSONData.json();
    setEmployees(JSOData);
    console.log(JSOData);
  };

  return (
    <div>
      <form>
        <button type="button" onClick={getEmployeesFromServer}>
          Get Employees
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>S.NO.</th>
            <th>id</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Country</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((ele, i) => (
            <tr key={ele.id}> {/* Use a unique key for each row */}
              <td>{i + 1}</td>
              <td>{ele.id}</td>
              <td>
                <img src={ele.profilePic} alt={ele.FirstName} style={{ width: 50, height: 50 }} />
              </td>
              <td>{ele.FirstName}</td>
              <td>{ele.LastName}</td>
              <td>{ele.Age}</td>
              <td>{ele.Email}</td>
              <td>{ele.Gender}</td>
              <td>{ele.Department}</td>
              <td>{ele.Country}</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          {/* If you want to show some footer content like total employees or summary */}
          <tr>
            <td colSpan="10">Total Employees: {employees.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default EmployeesForm;