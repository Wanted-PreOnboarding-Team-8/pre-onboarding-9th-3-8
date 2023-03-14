import React from 'react';
import useChart from '@/lib/hooks/useChart';
import ApexChart from 'react-apexcharts';

const Chart = () => {
  const { chartDate, chartValue } = useChart();

  return (
    <div>
      <ApexChart
        series={[
          {
            name: 'value_area',
            type: 'area',
            data: chartValue.map((element) => element.value_area),
          },
          {
            name: 'value_bar',
            type: 'column',
            data: chartValue.map((element) => element.value_bar),
          },
        ]}
        options={{
          chart: {
            height: 350,
            type: 'line',
            stacked: false,
          },
          stroke: {
            width: [0, 2],
            curve: 'smooth',
          },
          plotOptions: {
            bar: {
              columnWidth: '100%',
            },
          },
          fill: {
            opacity: [0.85, 0.25],
            gradient: {
              inverseColors: false,
              shade: 'light',
              type: 'vertical',
              opacityFrom: 0.85,
              opacityTo: 0.55,
              stops: [0, 100, 100, 100],
            },
          },
          title: {
            text: 'Flexsys',
          },

          labels: chartDate.map((element) => element),
          xaxis: {
            type: 'datetime',
          },
          yaxis: [
            {
              title: {
                text: 'Area',
              },
            },
            {
              opposite: true,
              title: {
                text: 'Bar',
              },
            },
          ],
          tooltip: {
            shared: true,
            intersect: false,
            custom: function ({ dataPointIndex }) {
              return (
                '<ul>' +
                '<li><b>id</b>: ' +
                chartValue[dataPointIndex].id +
                '</li>' +
                '<li><b>value_area</b>: ' +
                chartValue[dataPointIndex].value_area +
                '</li>' +
                '<li><b>value_bar</b>: ' +
                chartValue[dataPointIndex].value_bar +
                '</li>' +
                '</ul>'
              );
            },
          },
        }}
      ></ApexChart>
    </div>
  );
};

export default Chart;
