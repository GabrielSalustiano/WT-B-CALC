import React from 'react';

function BombSelector({ bombs, selectedBomb, onChange, selectedPlane }) {
  // Filtra as bombas com base no avião selecionado
  const filteredBombs = selectedPlane
    ? bombs.filter(b => {
        const canCarryByWeight = b.weightKg <= selectedPlane.maxBombLoadKg;
        const canCarryBySpecificList =
          !selectedPlane.bombs || selectedPlane.bombs.includes(b.id);
        return canCarryByWeight && canCarryBySpecificList;
      })
    : [];

  return (
    <div>
      <h2>Selecione a bomba</h2>
      <select
        id="bomb"
        value={selectedBomb ? selectedBomb.id : ''}
        onChange={(e) => {
          const bombId = parseInt(e.target.value);
          const bomb = bombs.find(b => b.id === bombId);
          onChange(bomb);
        }}
        disabled={!selectedPlane} // Desabilita o dropdown se nenhum avião estiver selecionado
      >
        <option value="">-- Escolha uma bomba --</option>
        {filteredBombs.map(bomb => (
          <option key={bomb.id} value={bomb.id}>
            {bomb.name} ({bomb.weightKg}kg)
          </option>
        ))}
      </select>
    </div>
  );
}

export default BombSelector;