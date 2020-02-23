module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "rules": {
		"no-console":"off"
	},
  "env": {
    "browser": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"]
}