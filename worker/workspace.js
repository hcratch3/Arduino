/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var options = {
	toolbox: toolbox,
	collapse: true,
	comments: true,
	disable: true,
	maxBlocks: Infinity,
	trashcan: true,
	horizontalLayout: false,
	toolboxPosition: 'start',
	css: true,
	media: 'https://blockly-demo.appspot.com/static/media/',
	rtl: false,
	scrollbars: true,
	sounds: true,
	oneBasedIndex: true,
	grid: {
		spacing: 20,
		length: 1,
		colour: '#888',
		snap: false
	},
	zoom: {
		controls: true,
		wheel: true,
		startScale: 1,
		maxScale: 3,
		minScale: 0.3,
		scaleSpeed: 1.2
	}
};

/* Inject your workspace */
var workspace = Blockly.inject(blocklyDiv, options);

/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
//var workspaceBlocks = document.getElementById("workspaceBlocks");

/* Load blocks to workspace. */
//Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

var source = document.getElementById('source'); //ソース表示先
var language = document.getElementById('language'); //言語選択のselectタグ
var task = null; //１秒以内の連続実行を抑制
var updatePreview = function () { //ソースコード更新
	if (task != null) clearTimeout(task);
	task = setTimeout(function () {
		source.textContent = Blockly[language.value].workspaceToCode(workspace);
	}, 1000);
};
workspace.addChangeListener(updatePreview); //ブロックが変更された時ソースコード更新
language.addEventListener('change', updatePreview, false); //言語を切り替えた時ソースコード更新