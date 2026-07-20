import React, { useEffect, useState } from "react";

const PrintTable = ({ calculateTable }) => {
  const [row, setRow] = useState([]);
  useEffect(() => {
    console.log("Print Table");
    setRow(calculateTable);
  }, [calculateTable]);
  return (
    <div style={{ padding: "1rem 0" }}>
      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
        useCallback Table Multiples [x2, x3, x4, x5]:
      </p>
      <div className="table-results">
        {row.map((number, index) => {
          return <span key={index} className="table-pill">{number}</span>;
        })}
      </div>
    </div>
  );
};

export default PrintTable;
