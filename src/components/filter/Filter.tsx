import { IFilterProps } from '@/interface/props';
import React from 'react';

const Filter = ({ data, setFilterParams }: IFilterProps) => {
  const valueArea = [...new Set(data.map((element) => element.id))];

  return (
    <div>
      <div>
        <button onClick={() => setFilterParams({ id: 'all' })}>전체</button>
        {valueArea.map((id, index) => (
          <button
            key={`${id}${index}`}
            onClick={() => setFilterParams({ id: id })}
          >
            {id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
