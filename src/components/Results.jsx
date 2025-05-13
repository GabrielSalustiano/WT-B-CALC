import React from 'react';

function Results({ bomb, plane }) {
  if (!bomb || !plane) {
    return <p>Selecione um avião e uma bomba para ver os resultados.</p>;
  }

  const bombLoad = plane.maxBombLoadKg;
  const bombWeight = bomb.weightKg;

  const bombsPerRun = Math.floor(bombLoad / bombWeight);
  const bombsNeeded = Math.ceil(6 / bomb.damage); // assumindo que 6 é o total de dano necessário

  const runsNeeded = Math.ceil(bombsNeeded / bombsPerRun);

  return (
    <div>
      <h2>Resultado:</h2>
      <p>Bombas necessárias: {bombsNeeded}</p>
      <p>Bombas por corrida: {bombsPerRun}</p>
      <p>Corridas necessárias: {runsNeeded}</p>
    </div>
  );
}

export default Results;
