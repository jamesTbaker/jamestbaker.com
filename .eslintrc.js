module.exports = {
	extends: "airbnb",
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 8,
	},
	plugins: ["standard", "react"],
	rules: {
		"no-unused-vars": [
			"error",
			{
				"vars": "local",
				"args": "none"
			}
		],
		"indent": [
			"error",
			"tab"
		],
		"no-tabs": "off",
		"prefer-promise-reject-errors": "off",
		"class-methods-use-this": "off",
		"linebreak-style": "off",
		"react/jsx-filename-extension": "off",
		"react/jsx-indent-props": "off",
		"react/jsx-indent": "off",
		"react/prop-types": "off",
		"jsx-a11y/alt-text": "off",
		"no-trailing-spaces": "off",
		"no-underscore-dangle": [
			"error",
			{
				"allow": [
					"_id",
					"_user"
				]
			}
		]
	},
}