Blockly.Dart.pinmode = function (block, generator) {
  var text_pin = block.getFieldValue('Pin');
  var dropdown_mode = block.getFieldValue('Mode');
  // TODO: Assemble dart into code variable.
  var code = 'pinMode('+text_pin+','+dropdown_mode+')\n';
  return code;
};

Blockly.Dart.digitalwrite = function(block, generator) {
  const text_pin = block.getFieldValue('pin');
  const dropdown_mode = block.getFieldValue('Mode');

  // TODO: Assemble dart into the code variable.
  const code = 'digitalWrite('+text_pin+','+dropdown_mode+')\n';
  return code;
}