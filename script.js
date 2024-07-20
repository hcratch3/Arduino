Blockly.Blocks['pinmode'] = {
    init: function () {
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
    init: function () {
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

Blockly.Blocks['include'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("#include")
          .appendField(new Blockly.FieldTextInput("library"), "LIBRARY");
      this.setColour(230);
      this.setTooltip("Include an Arduino library");
      this.setHelpUrl("");
      this.setPreviousStatement(false);
      this.setNextStatement(false);
    }
  };

  Blockly.Blocks['setup'] = {
    init: function() {
        this.appendStatementInput('void setup')
          .appendField('void setup (')
          .appendField(new Blockly.FieldTextInput(''), 'v')
          .appendField(')');
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(225);
      }
  };
  
  Blockly.Blocks['loop'] = {
    init: function() {
        this.appendStatementInput('void loop')
          .appendField('void loop (')
          .appendField(new Blockly.FieldTextInput(''), 'v')
          .appendField(')');
        this.setTooltip('');
        this.setHelpUrl('');
        this.setColour(225);
      }
  };
  