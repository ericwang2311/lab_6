import AreaChart from "./AreaChart.js";
import StackedAreaChart from "./StackedAreaChart.js";

d3.csv("unemployment.csv", d3.autoType).then((data) => {
  data.map(
    (d) =>
      (d.total = Object.values(d)
        .slice(1)
        .reduce((a, b) => a + b, 0))
  );

  const AreaChart1 = AreaChart(".chart-container1");
  AreaChart1.update(data);

  const AreaChart2 = StackedAreaChart(".chart-container2");
  AreaChart2.update(data);

  AreaChart1.on("brushed", (range) => {
    AreaChart2.filterByDate(range);
  });
});
