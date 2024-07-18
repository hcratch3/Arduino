Blockly.Blocks['pinmode'] = {
    init: function() {
      this.appendDummyInput('pinmode')
        .appendField('pinMode(')
        .appendField(new Blockly.FieldTextInput('1'), 'Pin')
        .appendField(',')
        .appendField(new Blockly.FieldDropdown([
            ['INPUT', 'INPUT'],
            ['OUTPUT', 'OUTPUT']
          ]), 'Mode')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
      this.setHelpUrl('');
      this.setColour(60);
    }
  };