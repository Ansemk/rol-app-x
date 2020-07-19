import React from 'react';

import './CustomBar.scss';

type CustomBarParams = {
  order?: Array<Array<any>>;
  defaultOrder?: any;
  filter?: Array<Array<any>>;
  defaultFilter?: any;
  handleOrder?: any;
  handleFilter?: any;
};

export default function CustomBar({
  order,
  defaultOrder,
  filter,
  defaultFilter,
  handleOrder,
  handleFilter,
}: CustomBarParams) {
  // Cambiar selects por webcomponents personalizados

  return (
    <div className="custom-bar">
      {!!order && (
        <select
          defaultValue={defaultOrder}
          onChange={(evt) => handleOrder(evt.target.value)}
        >
          {order?.map(([key, value]) => (
            <option key={key} value={value}>
              {key}
            </option>
          ))}
        </select>
      )}
      {!!filter && (
        <select
          value={defaultFilter}
          onChange={(evt) => handleFilter(evt.target.value)}
        >
          {filter?.map(([key, value]) => (
            <option value={value}>{key}</option>
          ))}
        </select>
      )}

      <span>🎈</span>
    </div>
  );
}
