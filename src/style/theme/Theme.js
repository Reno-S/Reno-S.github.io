export class Colors {
	constructor(
		main,
		text,
		link,
		header,
		secondary,
		disabled,
		font,
		ablack,
		instructions,
		background,
		recording
	) {
		this.main = main;
		this.text = text;
		this.link = link;
		this.header = header;
		this.secondary = secondary;
		this.disabled = disabled;
		this.font = font;
		this.aBlack = ablack;
		this.instructions = instructions;
		this.background = background;
		this.recording = recording;
		this.YES = "yes";
		this.NO = "no";
		this.SOMEWHAT = "somewhat";
	}
}

export class Layout {
	constructor(paddingHorizontal) {
		this.paddingHorizontal = paddingHorizontal;
	}
}

export class Theme {
	/**
	 *
	 * @param {Colors} colors
	 * @param {Layout} layout
	 */
	constructor(colors, layout) {
		this.colors = colors;
		this.layout = layout;
	}
}
