describe('Plugin', function() {
  var plugin;
  var fileName = 'app/config.coffee';

  beforeEach(function() {
    plugin = new Plugin({});
  });

  it('should be an object', function() {
    expect(plugin).to.be.ok;
  });

  it('should has #compile method', function() {
    expect(plugin.compile).to.be.an.instanceof(Function);
  });

  it('should compile and produce valid config file', function(done) {
    var content = "config = { shell: '<%= process.env.SHELL %>' }\n"
    var expected = "config = { shell: '" + process.env.SHELL + "' }\n";

    plugin.compile(content, 'config.coffee', function(error, data) {
      expect(error).not.to.be.ok;
      expect(data).to.equal(expected)
      done();
    });
  });
});
