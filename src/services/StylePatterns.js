
module.exports = {

	
	// FONT

	FontSize: (token) => {
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
				return `${1.8 * 0.579}rem`;
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
			case 'yellow':
			case 'yellow-1':
				return '#fbbd4e';
			case 'yellow-2':
				return '#fcc86a';
			case 'yellow-3':
				return '#fed285';
			case 'yellow-4':
				return '#ffdda1';

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
			case 'blue-11':
				return '#73d4ff';






			case 'red-1':
				return '#1f0002';
			case 'red-2':
				return '#38060d';
			case 'red-3':
				return '#510c18';
			case 'red-4':
				return '#6a1324';
			case 'red-5':
				return '#83192f';
			case 'red-6':
				return '#9b1f3a';
			case 'red-7':
				return '#b42545';
			case 'red-8':
				return '#cd2c51';
			case 'interactive-active':
			case 'red-9':
				return '#e6325c';
			case 'interactive-default':
			case 'red-10':
				return '#ff3867';



			case 'white':
				return '#fff';


			case 'grey-1':
				return '#eee';
			case 'grey-2':
				return '#e6e6e6';
			case 'grey-3':
				return '#ddd';
			case 'grey-4':
				return '#d4d4d4';
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
