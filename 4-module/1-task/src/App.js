
function App() {
  let friends = [
    {
      firstName: 'Artsiom',
      lastName: 'Mezin'
    },
    {
      firstName: 'Ilia',
      lastName: 'Kantor'
    },
    {
      firstName: 'Christopher',
      lastName: 'Michael'
    }
  ];

  let res = friends.map((item, index) =>
    <li key={index}>
      {item.firstName} {item.lastName}
    </li>
  );

  return (
    <>
      <ul>
        {res}
      </ul>
    </>
  );
}

export default App;
