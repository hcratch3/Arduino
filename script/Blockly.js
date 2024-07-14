// Passes the ID.
workspace = Blockly.inject('blocklyDiv', { /* config */ });

// Passes the injection div.
workspace = Blockly.inject(document.getElementById('blocklyDiv'), { /* config */ });

const toolbox = {
    // There are two kinds of toolboxes. The simpler one is a flyout toolbox.
    kind: 'flyoutToolbox',
    // The contents is the blocks and other items that exist in your toolbox.
    contents: [
      {
        kind: 'block',
        type: 'controls_if'
      },
      {
        kind: 'block',
        type: 'controls_whileUntil'
      }
      // You can add more blocks to this array.
    ]
  };
  
  // The toolbox gets passed to the configuration struct during injection.
workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});