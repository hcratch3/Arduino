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

Blockly.Dart.include = function(block) {
  var text_library = block.getFieldValue('LIBRARY');
  var code = '#include <' + text_library + '>\n';
  // Include statements should be at the top of the generated code.
  Blockly.Dart.definitions_['include_' + text_library] = code;
  return '';
};

Blockly.Dart.finish = function(code) {
  // Combine the includes at the top of the code.
  var includes = [];
  for (var name in Blockly.Dart.definitions_) {
    if (name.startsWith('include_')) {
      includes.push(Blockly.Dart.definitions_[name]);
    }
  }

  // Combine all the code.
  return includes.join('\n') + '\n' + code;
};

Blockly.Dart.setup = function(block) {
  const statement_void_setup = Blockly.Dart.statementToCode(block, 'void setup');

  // TODO: Assemble dart into the code variable.
  const code = 'void setup () {\n'+statement_void_setup+'\n}';
  return code;
}