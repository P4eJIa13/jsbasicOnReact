
const Table = () => {
  const rows = [
    {
      name: 'Ilia',
      age: 25,
      salary: 1000,
      city: 'Petrozavodsk'
    },
    {
      name: 'Vasya',
      age: 14,
      salary: 1500,
      city: 'Moscow'
    },
    {
      name: 'Ivan',
      age: 22,
      salary: 100,
      city: 'Bryansk'
    },
    {
      name: 'Petya',
      age: 45,
      salary: 990,
      city: 'Chita'
    }
  ];

  const closeRows = (event) => {
    event.target.closest('tr').remove();
  }
  
  return (
    <table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.age}</td>
            <td>{row.salary}</td>
            <td>{row.city}</td>
            <td>
              <button onClick={closeRows}>X</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;