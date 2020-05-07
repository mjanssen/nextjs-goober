import React, { useRef, useState } from 'react';

// import { Grid } from '@domparty/fe/components';
import Grid from './Grid';
import Link from 'next/link';

export default function DataTable({ heads = [], data = [], filter = null }) {
  const inputRef = useRef(null);
  const filterFields = Array.isArray(filter) ? filter : [filter];
  const [visibleData, setVisibleData] = useState(data);

  const G = ({ children }) => <Grid columns={heads.length}>{children}</Grid>;

  function onFilter() {
    const { value } = inputRef.current;
    if (value === '') return setVisibleData(data);

    const nextData = data.filter((f) => {
      let show = false;
      filterFields.forEach((field) => {
        if (show === false) {
          show = `${f[field]}`.indexOf(value) > -1;
        }
      });

      return show;
    });

    setVisibleData(nextData);
  }

  return (
    <>
      <div>
        <input
          label="Filter"
          ref={inputRef}
          placeholder={`Filtfer on ${filterFields.join(', ')}`}
          onKeyUp={onFilter}
        />
      </div>
      <div>
        <G>
          {heads.map((head) => (
            <div key={head.label}>{head.label}</div>
          ))}
        </G>
      </div>
      {visibleData.map((d, i) => (
        <Link key={d.url} block disableHover href={d.url}>
          <G>
            {heads.map((h, hi) => (
              <div key={`${i}-${h.selector}`}>{d[h.selector]}</div>
            ))}
          </G>
        </Link>
      ))}
    </>
  );
}
