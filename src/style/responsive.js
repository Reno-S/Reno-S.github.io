import { EhState } from "@foursk/eh";
import { Dimensions } from "react-native";
// import { NOT } from '../lib/utils';

/**
 * @typedef {{minResolution: number, maxResolution: number}} ResolutionRange
 *
 *
 * @typedef {{width: ResolutionRange, height: ResolutionRange}} DimensionRanges
 *
 * @typedef {{minVal: number, maxVal: number, maxLim: number, minLim: number}} ResponsiveDefinitions
 *
 * @typedef {"width" | "height"} FunctionOfDimension
 *
 * @typedef {ResolutionRange & ResponsiveDefinitions & {
 * baseUnit: "px" | "%",
 * functionOf: FunctionOfDimension
 * }} ResponsiveOptions
 *
 * @typedef {{[dim in keyof DIMENSION_OPTS]: ResponsiveDefinitions}} ResponsivenessArgument
 */

/**
 *
 * @param {number} minResolution
 * @param {number} maxResolution
 * @returns {ResolutionRange}
 */
const resRange = (minResolution, maxResolution) => ({
	minResolution,
	maxResolution,
});

/**
 *
 * @param {number} minWidth
 * @param {number} minHeight
 * @param {number} maxWidth
 * @param {number} maxHeight
 * @returns {DimensionRanges}
 */
const whResRange = (minWidth, minHeight, maxWidth, maxHeight) => ({
	width: resRange(minWidth, maxWidth),
	height: resRange(minHeight, maxHeight),
});

export const DIMENSION_OPTS = {
	mobile: whResRange(320, 568, 375, 812),
	mobileLandscape: whResRange(568, 320, 812, 375),
	tablet: whResRange(375, 812, 768, 1024),
	tabletLandscape: whResRange(812, 375, 1024, 768),
	tabletXL: whResRange(768, 1024, 1366, 1366),
	tabletXLLandscape: whResRange(1024, 768, 1366, 1366),
	laptop: whResRange(1440, 800, 1920, 900),
	_4K: whResRange(1920, 900, 2560, 1000),
	global: whResRange(320, 568, 1920, 900),
};

/**
 *
 * @param {import('react-native').ScaledSize} dimensions
 */
function createDimensionsObject(dimensions) {
	const isPortrait = dimensions.height > dimensions.width;
	return {
		dimensions,
		isPortrait,
		isLandscape: !isPortrait,
	};
}

function createDimensionsInitialState() {
	const dimensions = Dimensions.get("window");
	const initialState = {
		...createDimensionsObject(dimensions),
		/**
		 * Set size as percentage of window height
		 * @param {number} percentage
		 * @param {number?} min
		 * @param {number?} max
		 */
		ph(percentage, min, max, numeric = false) {
			return ph(percentage, min, max, this.dimensions, numeric);
		},
		/**
		 * Set size as percentage of window width
		 * @param {number} percentage
		 * @param {number?} min
		 * @param {number?} max
		 */
		pw(percentage, min, max, numeric = false) {
			return pw(percentage, min, max, this.dimensions, numeric);
		},
		/**
		 *
		 * @param {FunctionOfDimension} functionOf
		 * @param {ResponsivenessArgument} rspArg
		 */
		rsp(functionOf, rspArg) {
			return rsp(this.dimensions, functionOf, false, rspArg);
		},
	};

	initialState.ph = initialState.ph.bind(initialState);
	initialState.pw = initialState.pw.bind(initialState);
	return initialState;
}

export const sDimensions = EhState.fromInitialState(
	createDimensionsInitialState()
);

Dimensions.addEventListener("change", ({ window }) => {
	const newDim = createDimensionsObject(window);
	sDimensions.fire(newDim);
});

export function styledPortrait(portraitVal, landscapeVal) {
	return ({ isPortrait }) => (isPortrait ? portraitVal : landscapeVal);
}

/**
 *
 * @param {ResponsiveOptions} options
 * @param {boolean} numeric
 */
export function responsive(options, numeric) {
	const {
		minResolution,
		maxResolution,
		minVal,
		maxVal,
		maxLim,
		minLim,
		baseUnit,
		functionOf,
	} = options;

	// console.log('RSP', {
	//   minResolution,
	//   maxResolution,
	//   minVal,
	//   maxVal,
	//   maxLim,
	//   minLim,
	//   baseUnit,
	//   functionOf
	// });
	// const functionOf =
	//   functionOfStr === 'width' ? dimensions.width : dimensions.height;

	let res =
		minVal +
		((functionOf - minResolution) * (maxVal - minVal)) /
			(maxResolution - minResolution);
	const resOrig = res;

	if (minLim) res = Math.max(minLim, res);
	if (maxLim) res = Math.min(maxLim, res);
	if (numeric) return res;

	// console.log('RSP', {
	//   resOrig,
	//   res,
	//   minResolution,
	//   maxResolution,
	//   minVal,
	//   maxVal,
	//   maxLim,
	//   minLim,
	//   baseUnit,
	//   functionOf
	// });

	const strRes = `${res}${baseUnit || "px"}`;
	return strRes;
}

/**
 *
 * @param {ResponsivenessArgument} rspArg
 * @param {FunctionOfDimension} functionOf
 * @returns {[ResponsiveDefinitions, keyof DIMENSION_OPTS]}
 */
export function selectDefinition(
	rspArg,
	functionOf,
	dimensions = sDimensions.state
) {
	/** @type {[keyof DIMENSION_OPTS]} */
	const keys = Object.keys(rspArg);
	const firstKey = keys[0];
	if (keys.length === 1) {
		return [rspArg[firstKey], firstKey];
	}

	const windowDim = dimensions[functionOf];
	// console.log('windowDim', windowDim);

	for (const key of keys) {
		const dims = DIMENSION_OPTS[key][functionOf];
		if (windowDim <= dims.maxResolution && windowDim >= dims.minResolution) {
			return [rspArg[key], key];
		}
	}

	return [rspArg[firstKey], firstKey];
}

/**
 * @param {import('react-native').ScaledSize} dimensions
 * @param {FunctionOfDimension} functionOf
 * @param {boolean} numeric
 * @param {ResponsivenessArgument} rspArg
 * @param {...ResponsivenessArgument} rspArgs
 */
export function rsp(dimensions, functionOf, numeric, rspArg, ...rspArgs) {
	// console.log('RSP', { dimensions, functionOf, rspArg });
	if (rspArgs.length > 0) Object.assign(rspArg, ...rspArgs);
	const [definition, dimensionName] = selectDefinition(
		rspArg,
		functionOf,
		dimensions
	);
	// console.log('definition', { definition, dimensionName });
	Object.assign(definition, DIMENSION_OPTS[dimensionName][functionOf]);
	// console.log('dimensions[functionOf]', { dimensions, functionOf });
	definition.functionOf = dimensions[functionOf];
	return responsive(definition, numeric);
}

/**
 * Make rsp function for component that is rendered with sDimensions [withEhState(sDimensions)]
 * @param {FunctionOfDimension} functionOf
 * @param {ResponsivenessArgument} rspArg
 * @param {...ResponsivenessArgument} rspArgs
 */
export function makeRsp(functionOf, rspArg, ...rspArgs) {
	/**
	 *
	 * @param {{dimensions: import('react-native').ScaledSize}} param0
	 * @param {boolean} numeric
	 */
	const func = function ({ dimensions }, numeric) {
		return rsp(dimensions, functionOf, numeric, rspArg, ...rspArgs);
	};
	return func;
}

/**
 * @typedef {({dimensions: ScaledSize}, numeric:boolean) => string | number} RSPFunction
 * @param {RSPFunction} portrait
 * @param {RSPFunction} landscape
 */
export function makeLandscapableRsp(portrait, landscape) {
	/**
	 *
	 * @param {{dimensions: import('react-native').ScaledSize}} param0
	 * @param {boolean} numeric
	 */
	const func = function (dimState, numeric) {
		const { isPortrait } = dimState;
		const rspFunc = isPortrait ? portrait : landscape;
		return rspFunc(dimState, numeric);
	};
	return func;
}

/**
 *
 * @param {keyof DIMENSION_OPTS} size
 * @param {number} minVal
 * @param {number} maxVal
 * @param {number} minLim
 * @param {number} maxLim
 * @returns {ResponsivenessArgument}
 */
export const plugRsp = (size, minVal, maxVal, minLim, maxLim) => ({
	[size]: {
		minVal,
		maxVal,
		minLim,
		maxLim,
	},
});

/**
 *
 * @param {number} minResolution
 * @param {number} maxResolution
 * @returns {ResolutionRange}
 */
export const customRange = (minResolution, maxResolution) => ({
	minResolution,
	maxResolution,
});

/**
 *
 * @param {number} percentage
 * @param {number} dim
 * @param {number?} min
 * @param {number?} max
 */
function percentageDimension(percentage, dim, min, max, numeric = false) {
	let res = (percentage * dim) / 100;
	if (min) res = Math.max(min, res);
	if (max) res = Math.min(max, res);
	if (numeric) return res;
	return `${res}px`;
}

/**
 *
 * @param {number} percentage
 * @param {number?} min
 * @param {number?} max
 * @param {DimensionRanges} dimensions
 */
export function ph(
	percentage,
	min,
	max,
	dimensions = sDimensions.state,
	numeric = false
) {
	return percentageDimension(percentage, dimensions.height, min, max, numeric);
}

/**
 *
 * @param {number} percentage
 * @param {number?} min
 * @param {number?} max
 * * @param {DimensionRanges} dimensions
 */
export function pw(
	percentage,
	min,
	max,
	dimensions = sDimensions.state,
	numeric = false
) {
	return percentageDimension(percentage, dimensions.width, min, max, numeric);
}
