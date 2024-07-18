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

  Blockly.Blocks['digitalwrite'] = {
    init: function() {
        this.appendDummyInput('digitalwrite')
          .appendField('digitalWrite(')
          .appendField(new Blockly.FieldTextInput('1'), 'pin')
          .appendField(',')
          .appendField(new Blockly.FieldDropdown([
              ['HIGH', 'HIGH'],
              ['LOW', 'LOW']
            ]), 'Mode')
          .appendField(')');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(60);
      }
  };