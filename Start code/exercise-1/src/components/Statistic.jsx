function Statistics({ results }) {
  const scores = results.map(student => student.score);

  const average =
    scores.reduce((sum, value) => sum + value, 0) / scores.length;

  const min = Math.min(...scores);
  const max = Math.max(...scores);

  return (
    <div className="statistics">
      <p>Average: {average.toFixed(2)}</p>
      <p>Min: {min}</p>
      <p>Max: {max}</p>
    </div>
  );
}

export default Statistics;