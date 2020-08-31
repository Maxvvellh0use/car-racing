module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        'eslint-config-airbnb-base',
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "import/prefer-default-export": "off",
        "import/no-default-export": "error"
    }
};
