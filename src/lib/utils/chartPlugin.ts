export const annotationline = (color: string) => {
  return {
    id: 'annotationline',
    beforeDraw: (chart: any) => {
      //  hovering event
      if (chart.tooltip?._active && chart.tooltip?._active.length) {
        const { ctx } = chart;
        ctx.save(); //  save ctx data to canvas
        ctx.beginPath();
        ctx.moveTo(chart.tooltip._active[0].element.x, chart.chartArea.top);
        ctx.lineTo(chart.tooltip._active[0].element.x, chart.chartArea.bottom);
        ctx.lineWidth = 10;
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.restore();
        ctx.closePath();
      }
    },
  };
};

export const backgroundColor = (color: string) => {
  return {
    id: 'backgroundXaix',
    beforeDraw: (chart: any) => {
      const ctx = chart.canvas.getContext('2d');
      ctx.save(); //  save ctx data to canvas

      ctx.fillStyle = color;
      ctx.fillRect(
        chart.chartArea.left,
        chart.chartArea.top,
        chart.chartArea.width,
        chart.chartArea.height,
      );
      ctx.restore();
    },
  };
};
