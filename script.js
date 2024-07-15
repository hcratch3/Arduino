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