eco = require 'eco'

module.exports = class ConfigEnvCompiler
  brunchPlugin: yes
  type: 'javascript'
  extension: 'coffee'
  pattern: /config.coffee/

  constructor: (@config) ->
    null

  compile: (data, path, callback) ->
    try
      result = eco.compile(data)()
    catch err
      error = err

    callback error, result
