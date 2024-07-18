Blockly.Dart.pinmode = function (block, generator) {
  var text_pin = block.getFieldValue('Pin');
  var dropdown_mode = block.getFieldValue('Mode');
  // TODO: Assemble dart into code variable.
  var code = 'pinMode('+text_pin+','+dropdown_mode+')\n';
  return code;
};