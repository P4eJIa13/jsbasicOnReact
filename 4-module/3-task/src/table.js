import { useState } from "react";

const Table = () => {
  const rows = [
    { name: 'Ilia', age: 30, gender: 'm', status: 'Free', available: true },
    { name: 'Tim', age: 39, gender: 'm', status: 'On duty', available: false },
    { name: 'Marina', age: 25, gender: 'f', status: 'Ready to teach', available: true },
    { name: 'Klivden', age: 42, gender: 'm', status: 'Leeeroy Jenkins!', available: undefined },
    { name: 'Ivan', age: 17, gender: 'm', status: 'Ready to teach', available: true }
  ];

  const [isHighligth, setIsHighligth] = useState(false);

  const highlight = () => {
    const target = document.querySelectorAll('tbody tr');
    target.forEach(row =>{
      const statusCell = row.querySelector('td[data-available]');
      const genderCell = row.querySelector('td:nth-child(3)');
      const ageCell = row.querySelector('td:nth-child(2)');
        
      if (statusCell && statusCell.getAttribute('data-available') !== null) {
        const isAvailable = statusCell.getAttribute('data-available') === 'true';
        row.classList.add(isAvailable ? 'available' : 'unavailable');
      } 
      if (statusCell == null) {
        row.setAttribute('hidden', true);
      }

      if (genderCell) {
        const gender = genderCell.textContent;
        row.classList.add(gender === 'm' ? 'male' : 'female');
      }

      if (ageCell && parseInt(ageCell.textContent) < 18) {
        row.style.textDecoration = 'line-through';
      }
    });

    setIsHighligth(true);
  };

  const resetChanges = () => {
    const target = document.querySelectorAll('tbody tr');
    target.forEach((row) => {
      row.classList.remove('available', 'unavailable', 'male', 'female');
      row.removeAttribute('hidden');
      const statusCell = row.querySelector('td[data-available]');
      if (statusCell && statusCell.getAttribute('data-available') === null) {
        statusCell.setAttribute('data-available', 'true');
      }
      const ageCell = row.querySelector('td:nth-child(2)');
      if (ageCell) {
        row.style.textDecoration = '';
      }
    });

    setIsHighligth(false);
  }

  const handleButtonClick = () => {
    if (isHighligth) {
      resetChanges();
    } else {
      highlight();
    }
  };

  return (
    <table className="js-teachers">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.age}</td>
            <td>{row.gender}</td>
            <td data-available={row.available}>{row.status}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="4">
            <button className="button" onClick={handleButtonClick}>
              {isHighligth ? 'Отменить' : 'Включить HighLight'}
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;
