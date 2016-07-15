module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "globals": {
  	"angular": false,
  	"define": false,
  	"describe": true,
  	"it": true
	},
  "rules": {
    "indent": [
      "error",
        2,
        { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
      "semi": [
        "error",
        "always"
    ],

    "space-before-function-paren": [
      "error"
    ]
  }
};
