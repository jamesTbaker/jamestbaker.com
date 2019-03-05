
module.exports = {

	
	// FONT
	// for large screens
	// augmented fourth scale above 1
	// minor thirs scale below 1
	FontSize: (token, screenType) => {
		if (screenType !== 'small') {
			switch (token) {
				case 'xxxl':
					return `${1.8 * 3.998}rem`;
				case 'xxl':
					return `${1.8 * 2.827}rem`;
				case 'xl':
					return `${1.8 * 1.999}rem`;
				case 'l':
					return `${1.8 * 1.414}rem`;
				case 'm':
				default:
					return `${1.8 * 1}rem`;
				case 's':
					return `${1.8 * 0.833}rem`;
				case 'xs':
					return `${1.8 * 0.694}rem`;
				case 'xxs':
					return `${1.8 * 0.579}rem`;
			}
		} else {
			switch (token) {
				case 'xxxl':
					return `${1.8 * 2.441}rem`;
				case 'xxl':
					return `${1.8 * 1.728}rem`;
				case 'xl':
					return `${1.8 * 1.44}rem`;
				case 'l':
					return `${1.8 * 1.2}rem`;
				case 'm':
				default:
					return `${1.8 * 1}rem`;
				case 's':
					return `${1.8 * 0.833}rem`;
				case 'xs':
					return `${1.8 * 0.694}rem`;
				case 'xxs':
					return `${1.8 * 0.579}rem`;			}
		}
	},

	FontWeight: (token) => {
		switch (token) {
			default:
			case 'light':
				return '300';
			case 'regular':
				return '400';
			case 'bold':
				return '500';
		}
	},

	FontStyle: (token) => {
		switch (token) {
			default:
			case 'normal':
				return 'normal';
			case 'italic':
				return 'italic';
		}
	},

	
	// COLORS

	Color: (token) => {
		switch (token) {
			case 'yellow-1':
				return '#ffa200';
			case 'yellow-2':
				return '#fdb027';
			case 'yellow-3':
				return '#fbbd4e';
			case 'yellow-4':
				return '#fcc86a';
			case 'yellow-5':
				return '#fed285';
			case 'yellow-6':
				return '#ffdda1';
			case 'yellow-7':
				return '#ffe2b0';
			case 'yellow-8':
				return '#ffe8bf';
			case 'yellow-9':
				return '#ffedcd';
			case 'yellow-10':
				return '#fff3dc';
			case 'yellow-11':
				return '#fff8eb';








			case 'blue-1':
				return '#081015';
			case 'blue-1-10-percent':
				return 'rgba(8,16,21,.1)';
			case 'blue-1-20-percent':
				return 'rgba(8,16,21,.2)';
			case 'blue-1-30-percent':
				return 'rgba(8,16,21,.3)';
			case 'blue-1-40-percent':
				return 'rgba(8,16,21,.4)';
			case 'blue-1-50-percent':
				return 'rgba(8,16,21,.5)';
			case 'blue-1-60-percent':
				return 'rgba(8,16,21,.6)';
			case 'blue-1-70-percent':
				return 'rgba(8,16,21,.7)';
			case 'blue-1-80-percent':
				return 'rgba(8,16,21,.8)';
			case 'blue-1-90-percent':
				return 'rgba(8,16,21,.9)';
			case 'blue-2':
				return '#0e1b22';
			case 'blue-3':
				return '#14262f';
			case 'blue-4':
				return '#203c49';
			case 'blue-5':
				return '#2c5163';
			case 'blue-6':
				return '#38677d';
			case 'blue-7':
				return '#437d97';
			case 'blue-8':
				return '#4f93b1';
			case 'blue-9':
				return '#5ba8cb';
			case 'blue-10':
				return '#67bee5';
			case 'blue-10-10-percent':
				return 'rgba(103,190,229,.1)';
			case 'blue-10-20-percent':
				return 'rgba(103,190,229,.2)';
			case 'blue-10-30-percent':
				return 'rgba(103,190,229,.3)';
			case 'blue-10-40-percent':
				return 'rgba(103,190,229,.4)';
			case 'blue-10-50-percent':
				return 'rgba(103,190,229,.5)';
			case 'blue-10-60-percent':
				return 'rgba(103,190,229,.6)';
			case 'blue-10-70-percent':
				return 'rgba(103,190,229,.7)';
			case 'blue-10-80-percent':
				return 'rgba(103,190,229,.8)';
			case 'blue-10-90-percent':
				return 'rgba(103,190,229,.9)';
			case 'blue-11':
				return '#73d4ff';
			case 'blue-12':
				return '#87daff';
			case 'blue-13':
				return '#9ce0ff';
			case 'blue-14':
				return '#b0e7ff';
			case 'blue-15':
				return '#c4edff';
			case 'blue-16':
				return '#d9f3ff';
			case 'blue-17':
				return '#edf9ff';
				
				
				
				
				
				
				
			case 'red-1':
				return '#380609';
			case 'red-2':
				return '#4d0509';
			case 'red-3':
				return '#510c18';
			case 'red-4':
				return '#760209';
			case 'red-5':
				return '#8a0009';
			case 'interactive-on-light-active':
			case 'red-6':
				return '#a10b15';
			case 'interactive-on-light-default':
			case 'red-7':
				return '#b91a1e';
			case 'red-8':
				return '#d02a27';
			case 'red-9':
				return '#e8392f';
			case 'interactive-on-dark-default':
			case 'red-10':
				return '#ff4938';
			case 'interactive-on-dark-active':
			case 'red-11':
				return '#ff6c5f';
			case 'red-12':
				return '#ff8277';
			case 'red-13':
				return '#ff988e';
			case 'red-14':
				return '#ffaea6';
			case 'red-15':
				return '#ffc3be';
			case 'red-16':
				return '#ffd9d5';
			case 'red-17':
				return '#ffefed';






			case 'white':
				return '#fff';
			case 'white-10-percent':
				return 'rgba(255,255,255,.1)';
			case 'white-20-percent':
				return 'rgba(255,255,255,.2)';
			case 'white-30-percent':
				return 'rgba(255,255,255,.3)';
			case 'white-40-percent':
				return 'rgba(255,255,255,.4)';
			case 'white-50-percent':
				return 'rgba(255,255,255,.5)';
			case 'white-60-percent':
				return 'rgba(255,255,255,.6)';
			case 'white-70-percent':
				return 'rgba(255,255,255,.7)';
			case 'white-80-percent':
				return 'rgba(255,255,255,.8)';
			case 'white-90-percent':
				return 'rgba(255,255,255,.9)';






			case 'grey-1':
				return '#eee';
			case 'grey-2':
				return '#e6e6e6';
			case 'grey-3':
				return '#ddd';
			case 'grey-4':
				return '#d4d4d4';
			case 'body-copy':
			case 'grey-5':
				return '#ccc';
			case 'grey-6':
				return '#c3c3c3';
			case 'grey-7':
				return '#bbb';
			case 'grey-8':
				return '#b2b2b2';
			case 'grey-9':
				return '#aaa';
			case 'grey-10':
				return '#999';
			case 'grey-11':
				return '#888';
			case 'grey-12':
				return '#777';
			case 'grey-13':
				return '#666';
			case 'grey-14':
				return '#555';
			case 'grey-15':
				return '#444';
			case 'grey-16':
				return '#333';
			case 'grey-17':
				return '#222';
			case 'grey-18':
				return '#111';
		}
	},


	// TRANSITIONS, ANIMATION

	StandardTransitionTime: () => '.25s',


	// HIDDEN

	BlockHidden: () =>
		`display: block;
		width: 0;
		height: 0;
		padding: 0;
		text-indent: 100%;
		white-space: nowrap;
		overflow: hidden;`,
	OverrideBlockHidden: () =>
		`display: block;
		width: auto;
		height: auto;
		text-indent: 0;
		white-space: normal;
		overflow: visible;`,
	InlineHidden: () =>
		`display: inline-block;
		width: 0;
		height: 0;
		text-indent: 100%;
		white-space: nowrap;
		overflow: hidden;`,
	TableColumnHidden: () =>
		`display: table-cell;
		width: 0;
		height: 0;
		text-indent: 100%;
		white-space: nowrap;
		overflow: hidden;`,


	// ALIGNMENT


	VerticalAlignMiddle: () =>
		`position: relative;
		top: 50%;
		transform: translateY(-50%);`,


	// Z-INDEX

	ZIndex: (token) => {
		switch (token) {
			case 'smallNav':
				return 1000;
			default: 'auto'
		}
	},
};
