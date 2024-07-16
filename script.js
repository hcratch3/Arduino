Blockly.Blocks['setup'] = {
  init: function() {
    this.appendStatementInput("setup")
        .setCheck(null)
        .appendField("void setup");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['loop'] = {
  init: function() {
    this.appendStatementInput("void loop")
        .setCheck(null)
        .appendField("void loop");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pinmode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pinMode(")
        .appendField(new Blockly.FieldTextInput("0"), "pin")
        .appendField(",")
        .appendField(new Blockly.FieldDropdown([["INPUT","INPUT"], ["OUTPUT","OUTPUT"]]), "Mode")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};