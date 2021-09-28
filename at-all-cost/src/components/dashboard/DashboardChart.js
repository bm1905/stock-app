/**
 * Using some portion of code snippet from react stockcharts lib
 * Customized further to accept user input values as props; options props
 */

import React from "react";
import PropTypes from "prop-types";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import { ChartCanvas, Chart } from "react-stockcharts";
import { LineSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { CrossHairCursor, EdgeIndicator, MouseCoordinateX, MouseCoordinateY } from "react-stockcharts/lib/coordinates";
import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import { OHLCTooltip, SingleValueTooltip } from "react-stockcharts/lib/tooltip";
import { compare } from "react-stockcharts/lib/indicator";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";

class DashboardChart extends React.Component {
	render() {

		const { data: initialData, options, width, ratio } = this.props;

		const compareCalculator = compare()
		.options({
			basePath: "close",
			mainKeys: ["open", "high", "low", "close"],
			compareKeys: [options[0], options[1]],
		})
		.accessor(d => d.compare)
		.merge((d, c) => { d.compare = c; });
		
		const xScaleProvider = discontinuousTimeScaleProvider
			.inputDateAccessor(d => d.date);

		const {
			data,
			xScale,
			xAccessor,
			displayXAccessor,
		} = xScaleProvider(initialData);

		const start = xAccessor(last(data));
		const end = xAccessor(data[Math.max(0, data.length - 150)]);
		const xExtents = [start, end];

		return (
			<ChartCanvas height={400}
				width={width}
				ratio={ratio}
				margin={{ left: 70, right: 70, top: 20, bottom: 30 }}
				seriesName="MSFT"
				data={data}
				postCalculator={compareCalculator}
				xScale={xScale}
				xAccessor={xAccessor}
				displayXAccessor={displayXAccessor}
				xExtents={xExtents}
			>
				<Chart id={1} yExtents={d => d.compare} >
					<XAxis axisAt="bottom" orient="bottom" tickStroke="#949494" stroke="#949494"/>
					<YAxis axisAt="right" orient="right" ticks={5} tickFormat={format(".0%")} tickStroke="#949494" stroke="#949494"/>

					<MouseCoordinateX
						at="bottom"
						orient="bottom"
						displayFormat={timeFormat("%Y-%m-%d")} />

					<MouseCoordinateY
						at="right"
						orient="right"
						displayFormat={format(".2f")} />

					<LineSeries yAccessor={d => d['compare'][options[0]]} stroke="#ff7f0e" />
					<LineSeries yAccessor={d => d['compare'][options[1]]} stroke="#2ca02c"/>

					<EdgeIndicator itemType="last" orient="right" edgeAt="right"
						yAccessor={d => d['compare'][options[0]]} fill="#ff7f0e"
						displayFormat={format(".0%")} />

					<EdgeIndicator itemType="last" orient="right" edgeAt="right"
						yAccessor={d => d['compare'][options[1]]} fill="#2ca02c"
						displayFormat={format(".0%")} />

					<OHLCTooltip origin={[-40, 0]} />
					<SingleValueTooltip
						yAccessor={d => d[options[0]]}
						yLabel={options[0].replace('Close', '')}
						yDisplayFormat={format(".2f")}
						labelFill="#949494"
						valueFill="#949494"
						origin={[-40, 20]}/>
					<SingleValueTooltip
						yAccessor={d => d[options[1]]}
						yLabel={options[1].replace('Close', '')}
						yDisplayFormat={format(".2f")}
						labelFill="#949494"
						valueFill="#949494"
						origin={[-40, 35]}/>
				</Chart>
				<CrossHairCursor stroke="#949494"/>
			</ChartCanvas>
		);
	}
}

DashboardChart.propTypes = {
	data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired,
	type: PropTypes.oneOf(["svg"]).isRequired,
};

DashboardChart.defaultProps = {
	type: "svg",
};

DashboardChart = fitWidth(DashboardChart);

export default DashboardChart;