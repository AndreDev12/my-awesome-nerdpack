// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction
import React, { useState, useEffect } from 'react';
import { BillboardChart } from 'nr1';

const HomeNerdlet = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(() => count + 1);
    }, 1000);
  });

  const clickCount = {
    metadata: {
      id: '1',
      name: 'Count',
      viz: 'main',
    },
    data: [{ y: count }],
  };

  return (
    <div>
      <BillboardChart data={[clickCount]} />
      {/* <button onClick={() => setCount(count + 1)}>Increment count</button> */}
    </div>
  );
};

export default HomeNerdlet;
