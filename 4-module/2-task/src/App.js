const table = [
  ['1:1', '2:1', '3:1', '4:1', '5:1'],
  ['1:2', '2:2', '3:2', '4:2', '5:2'],
  ['1:3', '2:3', '3:3', '4:3', '5:3'],
  ['1:4', '2:4', '3:4', '4:4', '5:4'],
  ['1:5', '2:5', '3:5', '4:5', '5:5'],
];

const App = () => {
  const styles = {
    diagonalCell: {
      backgroundColor: 'red',
    },
  };

  const isDiagonalCell = (rowIndex, colIndex) => {
    return rowIndex === colIndex;
  };

  return (
    <>
      <table>
        <tbody>
          {table.map((row, rowIndex) =>(
            <tr key={rowIndex}>
              {row.map((cell, colIndex) =>(
                <td 
                  key={`${rowIndex}-${colIndex}`}
                  style={isDiagonalCell(rowIndex, colIndex) ? styles.diagonalCell : null}
                  >
                    {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
