module.exports = {
	env: {
	  browser: true,
	  es2021: true,
	},
	extends: [
	  'plugin:react/recommended',
	  'airbnb',
	],
	parserOptions: {
	  ecmaFeatures: {
		jsx: true,
	  },
	  ecmaVersion: 12,
	  sourceType: 'module',
	},
	plugins: [
	  'react',
	],
	rules: {
	  "semi": ["error", "always"],
	  "padded-blocks": ["error", "always"],
	  "quotes": ["error", "double"],
	  "implicit-arrow-linebreak": ["error", "beside"],
	  "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
	  "react/jsx-props-no-spreading": "off",
	  "indent": [2, "tab"],
	  "react/jsx-indent": [2, "tab"],
	  "react/jsx-indent-props": [2, "tab"],
	  "no-tabs": 0,
	  "import/no-unresolved": "off",
	  "react/react-in-jsx-scope": "off",
	  "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
	  "prefer-template": "error",

	},
  };
