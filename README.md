## config-env-brunch
Adds ability to configure apps via env vars to
[brunch](http://brunch.io).

## Usage
Add `"config-env-brunch": "x.y.z"` to `package.json` of your brunch app.

Pick a plugin version that corresponds to your minor (y) brunch version.

If you want to use git version of plugin, add
`"config-env-brunch": "git+ssh://git@github.com:goshakkk/config-env-brunch.git"`.

(Requires to be placed before
`javascript-brunch`/`coffee-script-brunch`.)

The plugin will process your `app/config.coffee`. Include env vars like
this:

    shell = "<%= process.env.SHELL %>"
