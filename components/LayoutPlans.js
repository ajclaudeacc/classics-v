// Simple top-down floor plans for the three meeting layouts.
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2 };

export function TraditionalPlan() {
  const seats = [];
  for (let i = 0; i < 6; i++) {
    seats.push(<circle key={`t${i}`} cx={70 + i * 26} cy={44} r={7} className="seat" />);
    seats.push(<circle key={`b${i}`} cx={70 + i * 26} cy={116} r={7} className="seat" />);
  }
  return (
    <svg viewBox="0 0 280 160" role="img" aria-label="Floor plan: one long boardroom table with chairs on both sides and one at each end">
      <rect x="54" y="58" width="164" height="44" rx="8" className="table" />
      {seats}
      <circle cx="38" cy="80" r="7" className="seat" />
      <circle cx="234" cy="80" r="7" className="seat" />
    </svg>
  );
}

export function TheaterPlan() {
  const seats = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 9; c++) {
      if (c === 4) continue; // center aisle
      seats.push(<rect key={`${r}-${c}`} x={46 + c * 22} y={66 + r * 22} width={14} height={14} rx={3} className="seat" />);
    }
  }
  return (
    <svg viewBox="0 0 280 160" role="img" aria-label="Floor plan: rows of chairs with a center aisle, all facing a stage and screen">
      <rect x="70" y="16" width="140" height="10" rx="3" className="screen" />
      <rect x="90" y="32" width="100" height="18" rx="4" {...stroke} className="stage" />
      {seats}
    </svg>
  );
}

export function TradeShowPlan() {
  const booths = [];
  for (let c = 0; c < 5; c++) {
    booths.push(<rect key={`t${c}`} x={28 + c * 46} y={22} width={38} height={34} rx={4} className="booth" />);
    booths.push(<rect key={`b${c}`} x={28 + c * 46} y={104} width={38} height={34} rx={4} className="booth" />);
  }
  return (
    <svg viewBox="0 0 280 160" role="img" aria-label="Floor plan: two rows of exhibitor booths along a central walking aisle">
      {booths}
      <path d="M24 80h232" className="aisle" />
      <path d="M244 72l12 8-12 8" className="aisle" />
    </svg>
  );
}
