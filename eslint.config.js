// @ts-check
import { defineConfig } from "eslint/config";
import angular from "angular-eslint";
import jsdoc from "eslint-plugin-jsdoc";
import arrow from "eslint-plugin-prefer-arrow";
import tseslint from "typescript-eslint";

export default defineConfig([
	{
		files: ["**/*.ts"],
		plugins: {
			jsdoc,
			"prefer-arrow": arrow,
			"@angular-eslint": angular.tsPlugin,
			"@typescript-eslint": tseslint.plugin,
		},
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				sourceType: "module",
				projectService: true,
			},
		},
		processor: angular.processInlineTemplates,
		rules: {
				"@typescript-eslint/interface-name-prefix": "off",
				"@angular-eslint/component-class-suffix": "error",
				"@angular-eslint/contextual-lifecycle": "error",
				"@angular-eslint/directive-class-suffix": "error",
				"@angular-eslint/no-input-rename": "error",
				"@angular-eslint/no-inputs-metadata-property": "error",
				"@angular-eslint/no-output-native": "error",
				"@angular-eslint/no-output-on-prefix": "error",
				"@angular-eslint/no-output-rename": "error",
				"@angular-eslint/no-outputs-metadata-property": "error",
				"@angular-eslint/use-lifecycle-interface": "error",
				"@angular-eslint/use-pipe-transform-interface": "error",
				"@typescript-eslint/adjacent-overload-signatures": "error",
				"@typescript-eslint/no-namespace": "error",
				"@typescript-eslint/no-parameter-properties": "off",
				"@typescript-eslint/prefer-namespace-keyword": "error",
				"@typescript-eslint/unified-signatures": "error",
				"complexity": "off",
				"constructor-super": "error",
				"no-mixed-spaces-and-tabs": "error",
				"eqeqeq": [
					"error",
					"smart"
				],
				"guard-for-in": "error",
				"id-blacklist": [
					"error",
					"any",
					"Number",
					"number",
					"String",
					"string",
					"Boolean",
					"boolean",
					"Undefined",
					"undefined"
				],
				"id-match": "error",
				"max-classes-per-file": "off",
				"no-caller": "error",
				"no-cond-assign": "error",
				"no-console": [
					"error",
					{
						"allow": [
							"error",
							"warn",
							"trace",
							"dir",
							"timeLog",
							"assert",
							"clear",
							"count",
							"countReset",
							"group",
							"groupEnd",
							"table",
							"groupCollapsed",
							"Console",
							"profile",
							"profileEnd",
							"timeStamp",
							"context"
						]
					}
				],
				"no-debugger": "error",
				"no-eval": "error",
				"no-new-wrappers": "error",
				"no-throw-literal": "error",
				"no-undef-init": "error",
				"no-underscore-dangle": "error",
				"no-unsafe-finally": "error",
				"no-unused-labels": "error",
				"no-var": "error",
				"object-shorthand": "error",
				"one-var": [
					"error",
					"never"
				],
				"prefer-const": "error",
				"radix": "error",
				"use-isnan": "error",
				"valid-typeof": "off",
				"arrow-body-style": "error",
				"comma-dangle": "off",
				"curly": "error",
				"eol-last": "error",
				"jsdoc/check-alignment": "error",
				"max-len": [
					"error",
					{
						"code": 140
					}
				],
				"new-parens": "error",
				"no-trailing-spaces": "error",
				"quote-props": [
					"error",
					"as-needed"
				],
				"space-before-function-paren": [
					"error",
					{
						"anonymous": "never",
						"asyncArrow": "always",
						"named": "never"
					}
				],
				"quotes": "off",
				"@angular-eslint/component-selector": [
					"error",
					{
						"type": "element",
						"prefix": "",
						"style": "kebab-case"
					}
				],
				"@angular-eslint/directive-selector": [
					"error",
					{
						"type": "attribute",
						"prefix": "",
						"style": "camelCase"
					}
				],
				"@typescript-eslint/array-type": "off",
				"@typescript-eslint/await-thenable": "error",
				"@typescript-eslint/consistent-type-assertions": "error",
				"@typescript-eslint/consistent-type-definitions": "error",
				"@typescript-eslint/dot-notation": "error",
				"@typescript-eslint/explicit-function-return-type": "error",
				"@typescript-eslint/explicit-member-accessibility": [
					"error",
					{
						"accessibility": "explicit",
						"overrides": {
							"constructors": "off"
						}
					}
				],
				"@typescript-eslint/explicit-module-boundary-types": "error",
				"@typescript-eslint/member-ordering": "off",
				"@typescript-eslint/naming-convention": [
					"error",
					{
						"selector": "enumMember",
						"format": [
							"UPPER_CASE"
						]
					},
					{
						"selector": "property",
						"modifiers": [
							"static",
							"readonly"
						],
						"format": [
							"UPPER_CASE"
						]
					},
					{
						"selector": "default",
						"format": [
							"camelCase"
						],
						"leadingUnderscore": "allow",
						"trailingUnderscore": "allow"
					},
					{
						"selector": "variable",
						"format": [
							"camelCase",
							"UPPER_CASE"
						],
						"leadingUnderscore": "allow",
						"trailingUnderscore": "allow"
					},
					{
						"selector": "typeLike",
						"format": [
							"PascalCase"
						]
					}
				],
				"@typescript-eslint/no-empty-function": "error",
				"@typescript-eslint/no-empty-interface": "error",
				"@typescript-eslint/no-empty-object-type": "error",
				"@typescript-eslint/no-explicit-any": "error",
				"@typescript-eslint/no-extraneous-class": [
					"error",
					{
						"allowWithDecorator": true
					}
				],
				"@typescript-eslint/no-dynamic-delete": "error",
				"@typescript-eslint/no-floating-promises": "off",
				"@typescript-eslint/no-inferrable-types": [
					"warn",
					{
						"ignoreParameters": true
					}
				],
				"@typescript-eslint/no-invalid-this": [
					"error",
					{
						"capIsConstructor": false
					}
				],
				"@typescript-eslint/no-invalid-void-type": "error",
				"@typescript-eslint/no-misused-new": "error",
				"@typescript-eslint/no-misused-promises": "error",
				"@typescript-eslint/no-non-null-assertion": "error",
				"@typescript-eslint/no-redeclare": "error",
				"@typescript-eslint/no-require-imports": "error",
				"@typescript-eslint/no-restricted-types": [
					"error",
					{
						"types": {
							"Object": {
								"message": "Avoid using the `Object` type. Did you mean `object`?"
							},
							"Function": {
								"message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
							},
							"Boolean": {
								"message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
							},
							"Number": {
								"message": "Avoid using the `Number` type. Did you mean `number`?"
							},
							"String": {
								"message": "Avoid using the `String` type. Did you mean `string`?"
							},
							"Symbol": {
								"message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
							},
							"BigInt": {
								"message": "Avoid using the `BigInt` type. Did you mean `bigint`?"
							}
						}
					}
				],
				"@typescript-eslint/no-shadow": "error",
				"@typescript-eslint/no-this-alias": "error",
				"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
				"@typescript-eslint/no-unnecessary-qualifier": "error",
				"@typescript-eslint/no-unnecessary-type-arguments": "error",
				"@typescript-eslint/no-unnecessary-type-assertion": "error",
				"@typescript-eslint/no-unsafe-function-type": "error",
				"@typescript-eslint/no-unused-expressions": "error",
				"@typescript-eslint/no-unused-vars": "error",
				"@typescript-eslint/no-use-before-define": "error",
				"@typescript-eslint/no-var-requires": "off",
				"@typescript-eslint/prefer-for-of": "error",
				"@typescript-eslint/prefer-function-type": "error",
				"@typescript-eslint/prefer-readonly": "error",
				"@typescript-eslint/promise-function-async": "error",
				"@typescript-eslint/typedef": "off",
				"jsdoc/no-types": "error",
				"jsdoc/require-description": "error",
				"jsdoc/require-jsdoc": [
					"error",
					{
						"contexts": [
							"ClassProperty",
							"TSInterfaceDeclaration",
							"TSTypeAliasDeclaration",
							"TSEnumDeclaration",
							"TSEnumMember",
							"TSAbstractClassProperty"
						],
						"require": {
							"ClassDeclaration": true,
							"MethodDefinition": true
						},
						"checkConstructors": false,
						"checkGetters": true,
						"checkSetters": false,
						"enableFixer": false
					}
				],
				"@typescript-eslint/unbound-method": "error",
				"@typescript-eslint/restrict-plus-operands": "error",
				"@typescript-eslint/triple-slash-reference": "error",
				"arrow-parens": [
					"off",
					"always"
				],
				"brace-style": [
					"error",
					"1tbs"
				],
				"class-methods-use-this": "off",
				// eslint-plugin-import does not yet support eslint v10: https://github.com/import-js/eslint-plugin-import/issues/3278
				// "import/export": "error",
				// "import/first": "error",
				// "import/newline-after-import": "error",
				// "import/no-cycle": [
				// 	"error",
				// 	{
				// 		"ignoreExternal": true
				// 	}
				// ],
				// "import/no-deprecated": "warn",
				// "import/no-duplicates": [
				// 	"error",
				// 	{
				// 		"prefer-inline": true
				// 	}
				// ],
				// "import/no-self-import": "error",
				// "import/no-useless-path-segments": [
				// 	"error",
				// 	{
				// 		"commonjs": true,
				// 		"noUselessIndex": true
				// 	}
				// ],
				// "import/order": [
				// 	"error",
				// 	{
				// 		"alphabetize": {
				// 			"order": "asc"
				// 		},
				// 		"groups": [
				// 			"builtin",
				// 			"external",
				// 			"internal",
				// 			"parent",
				// 			"sibling"
				// 		],
				// 		"pathGroups": [
				// 			{
				// 				"group": "builtin",
				// 				"pattern": "zone.js/**/*",
				// 				"position": "before"
				// 			},
				// 			{
				// 				"group": "external",
				// 				"pattern": "(@(angular|fortawesome)|chart.js|rxjs)*/**/*",
				// 				"position": "before"
				// 			},
				// 			{
				// 				"group": "internal",
				// 				"pattern": "src/**/*"
				// 			}
				// 		],
				// 		"pathGroupsExcludedImportTypes": [
				// 			"zone.js/**/*",
				// 			"@angular*/**/*",
				// 			"@fortawesome*/**/*",
				// 			"chart.js",
				// 			"rxjs"
				// 		],
				// 		"newlines-between": "always",
				// 		"warnOnUnassignedImports": true
				// 	}
				// ],
				"linebreak-style": [
					"error",
					"unix"
				],
				"no-bitwise": "off",
				"no-duplicate-case": "error",
				"no-duplicate-imports": "off",
				"no-else-return": "error",
				"no-empty": "error",
				"no-extra-bind": "error",
				"no-fallthrough": "off",
				"no-invalid-this": "off",
				"no-multiple-empty-lines": [
					"error",
					{
						"max": 1,
						"maxBOF": 0,
						"maxEOF": 0
					}
				],
				"no-new-func": "error",
				"no-redeclare": "off",
				"no-restricted-imports": [
					"error",
					{
						"patterns": [
							{
								"message": "Going up more than one directory for an import is overly complex; use an import path that starts with 'src/' instead",
								"group": [
									"../../*"
								]
							}
						]
					}
				],
				"no-return-await": "error",
				"no-sparse-arrays": "error",
				"no-template-curly-in-string": "error",
				"no-shadow": "off",
				"prefer-arrow/prefer-arrow-functions": "off",
				"prefer-object-spread": "error",
				"prefer-template": "error",
				"sort-keys": [
					"error",
					"asc",
					{
						"natural": true
					}
				],
			},
	},
	{
		files: ["**/*.html"],
		extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility],
		rules: {
				"@angular-eslint/template/alt-text": "error",
				"@angular-eslint/template/elements-content": "error",
				"@angular-eslint/template/interactive-supports-focus": "error",
				"@angular-eslint/template/label-has-associated-control": "error",
				"@angular-eslint/template/role-has-required-aria": "error",
				"@angular-eslint/template/table-scope": "error",
				"@angular-eslint/template/valid-aria": "error",
				"@angular-eslint/template/attributes-order": "error",
				"@angular-eslint/template/banana-in-box": "error",
				"@angular-eslint/template/button-has-type": "error",
				"@angular-eslint/template/click-events-have-key-events": "error",
				"@angular-eslint/template/conditional-complexity": [
					"error",
					{
						"maxComplexity": 2
					}
				],
				// Warning because it's difficult to know exactly when a
				// refactor is strictly necessary.
				"@angular-eslint/template/cyclomatic-complexity": [
					"warn",
					{
						"maxComplexity": 8
					}
				],
				"@angular-eslint/template/eqeqeq": "error",
				"@angular-eslint/template/mouse-events-have-key-events": "error",
				"@angular-eslint/template/no-any": "error",
				"@angular-eslint/template/no-autofocus": "error",
				"@angular-eslint/template/no-distracting-elements": "error",
				"@angular-eslint/template/no-duplicate-attributes": "error",
				"@angular-eslint/template/no-inline-styles": "warn",
				"@angular-eslint/template/no-interpolation-in-attributes": "error",
				"@angular-eslint/template/no-negated-async": "error",
				"@angular-eslint/template/no-positive-tabindex": "error",
				// Warning because not always necessary, and appears to have no
				// options to control when it is required.
				"@angular-eslint/template/use-track-by-function": "warn"
			},
	},
]);
