function PlaneSelector({ planes, selectedPlane, onChange }) {
  return (
    <div>
      <h2>Selecione o avião</h2>
      <select
        value={selectedPlane ? selectedPlane.id : ''}
        onChange={(e) => {
          const selectedId = parseInt(e.target.value);
          const plane = planes.find(p => p.id === selectedId);
          onChange(plane);
        }}
      >
        <option value="">-- Escolha um avião --</option>
        {planes.map((plane) => (
          <option key={plane.id} value={plane.id}>
            {plane.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PlaneSelector;
