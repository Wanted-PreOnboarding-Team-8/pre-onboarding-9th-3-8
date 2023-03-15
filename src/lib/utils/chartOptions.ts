export const options = (datasets: any) => {
  return {
    responsive: true,
    animation: false,
    interaction: {
      intersect: false,
      mode: 'index',
      axis: 'x',
    },
    hover: {},
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        yAlign: 'bottom',
        filter: function (onMouse: any) {
          const selectedDataset = datasets[onMouse.datasetIndex];
          const matchedValue = selectedDataset.data[onMouse.dataIndex].value;

          return matchedValue === null ? false : true;
        },
        callbacks: {
          title: (onMouse: any) => {
            const [data] = onMouse;

            return `ID : ${data.dataset.label}`;
          },
          label: (onMouse: any) => {
            const selectedDataset = datasets[onMouse.datasetIndex];
            const subject = selectedDataset.yAxisID;
            const matchedValue = selectedDataset.data[onMouse.dataIndex].value;

            return `${subject} : ${matchedValue}`;
          },
        },
        position: 'average', // nearest
      },
    },
    scales: {
      value_bar: {
        position: 'left',
        title: {
          display: true,
          text: 'value_bar',
          font: {
            size: 20,
          },
          padding: {
            top: 20,
            bottom: 20,
          },
        },
      },
      value_area: {
        position: 'right',
        title: {
          display: true,
          text: 'value_area',
          font: {
            size: 20,
          },
          padding: {
            top: 20,
            bottom: 20,
          },
        },
      },
      x: {
        //  기준선의 기준을 서술한다.
        ticks: {
          // ticks로 사용할 값을 리턴
          //        callback: () => {
          //          return 3;
          //        },
          // ticks로 표시 할 수량을 리턴
          maxTicksLimit: () => 30,
          color: 'red',
        },
      },
    },
    parsing: {
      xAxisKey: 'key',
      yAxisKey: 'value',
    },
    barPercentage: 0.5,
    categoryPercentage: 1,
    skipNull: true,
    pointRadius: 0,
    tension: 0.3,
  };
};
