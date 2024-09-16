import React, { useContext } from 'react';
import { ExtractContext } from '../../context/Extract';

const ExtractPage = () => {
  const { extractData } = useContext(ExtractContext);

  return (
    <div>
      <h1>Extrato</h1>
      <ul>
        {extractData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExtractPage;
