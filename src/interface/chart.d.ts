interface IChart {
  chartDate: string[];
  chartValue: IChartResponse[];
}

interface IChartResponse {
  id: string;
  value_area: number;
  value_bar: number;
}
