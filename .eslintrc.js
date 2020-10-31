module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "settings": {
    "react": {
      "version": "latest"
    },
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
  ],
  "rules": {
    "brace-style": ["error", "1tbs", {"allowSingleLine": true}],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "always-multiline"
    }],
    "comma-spacing": ["error", {"before": false, "after": true}],
    "curly": ["error"],
    "default-case": ["error"],
    "eol-last": ["error"],
    "eqeqeq": ["error", "always", {"null": "ignore"}],
    "func-call-spacing": ["error"],
    "guard-for-in": ["error"],
    "indent": ["error", 2, {
      "VariableDeclarator": {"var": 2, "let": 2, "const": 3},
      "SwitchCase": 1,
      "FunctionExpression": {"parameters": "first"}
    }],
    "key-spacing": ["error"],
    "keyword-spacing": ["error", {"after": true, "before": true, "overrides": {
      "this": {"before": false, "after": false}
    }}],
    "max-len": ["error", {"code": 120}],
    "no-bitwise": ["error"],
    "no-fallthrough": ["error"],
    "no-caller": ["error"],
    "no-console": ["error", {"allow": ["error", "log"]}],
    "no-debugger": ["error"],
    "no-empty": ["error"],
    "no-eval": ["error"],
    "no-labels": ["error", {"allowLoop": true, "allowSwitch": true}],
    "no-multiple-empty-lines": ["error", {"max": 1}],
    "no-multi-spaces": ["error"],
    "no-new-wrappers": ["error"],
    "no-throw-literal": ["error"],
    "no-trailing-spaces": ["error"],
    "no-unused-vars": "off",
    "padding-line-between-statements": ["error",
      {"blankLine": "always", "prev": "*", "next": "return"},
      {"blankLine": "always", "prev": "*", "next": ["const", "let", "var"]},
      {"blankLine": "always", "prev": ["const", "let", "var"], "next": "*"},
      {"blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"]}
    ],
    "quotes": ["error", "single", {"allowTemplateLiterals": true}],
    "radix": ["error"],
    "semi": ["error"],
    "space-before-blocks": ["error"],
    "space-before-function-paren": ["error", {"anonymous": "never", "named": "never", "asyncArrow": "always"}],
    "space-in-parens": ["error"],
    "space-infix-ops": ["error"],
    "space-unary-ops": ["error"],
    "spaced-comment": ["error", "always", {"markers": ["/"]}],
  }
};