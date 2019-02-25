const postcss = require('postcss');
const path = require('path');
const breakpoint = require(`${path.resolve('./src')}/configs/breakpoint`);

const overrideAtRule = mediaStr => mixin => {
	const parent = mixin.parent;
	const root = mixin.root();
	const rule = postcss.rule({ selector: parent.selector });
	const atRule = postcss.atRule({ name: mediaStr });
	rule.append(mixin.nodes);
	atRule.append(rule);
	root.append(atRule);
	mixin.remove();
}

module.exports = {
	plugins: [
		require('autoprefixer'),
		require('postcss-mixins')({
			mixins: {
				isMobile: overrideAtRule(`media screen and (max-width: ${breakpoint.mobileBreakPoint}px)`),
				isPad: overrideAtRule(`media screen and (min-width: ${breakpoint.mobileBreakPoint + 1}px) and (max-width: ${breakpoint.padBreakPoint}px)`),
			}
		}),
		require('postcss-nested'),
	]
}