import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { PieChart as PieChartPkg } from 'react-minimal-pie-chart';

const PieChart = ({ data, title }) => {
  const [hovered, setHovered] = useState(undefined);

  const dataMap = data.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        // color: 'var(--primary)',
      };
    }
    return entry;
  });

  const lineWidth = 60;

  function makeTooltipContent({ title, value }) {
    return `${value} people answered ${title}`;
  }

  return (
    <div
      className="flex w-full items-center space-x-4"
      data-tip=""
      data-for="chart"
    >
      <h4 className="w-2/3">{title}</h4>
      <div className="w-1/2">
        <PieChartPkg
          style={{
            fontSize: '12px',
          }}
          data={dataMap}
          radius={50}
          lineWidth={60}
          paddingAngle={1}
          segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
          // segmentsShift={(index) => (index === selected ? 6 : 1)}
          animate
          label={({ dataEntry }) => dataEntry.title}
          labelPosition={100 - lineWidth / 2}
          labelStyle={{
            fill: 'var(--background)',
            opacity: 1,
            pointerEvents: 'none',
          }}
          // onClick={(_, index) => {
          //   setSelected(index === selected ? undefined : index);
          // }}
          onMouseOver={(_, index) => {
            setHovered(index);
          }}
          onMouseOut={() => {
            setHovered(undefined);
          }}
          // viewBoxSize={[400, 400]}
        />
      </div>
      <Tooltip
        aria-haspopup="true"
        id="chart"
        type="light"
        effect="float"
        getContent={() =>
          typeof hovered === 'number'
            ? makeTooltipContent(dataMap[hovered])
            : null
        }
      />
    </div>
  );
};

const Tooltip = styled(ReactTooltip)`
  border: 5px solid var(--primaryLight) !important;
  border-radius: 1rem !important;
  padding: 1rem !important;
  /* width: max(20%, 12rem); */
`;

export default PieChart;
