module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    'font-family-no-missing-generic-family-keyword': [
      true,
      {ignoreFontFamilies: 'element-icons'}
    ],
    'no-descending-specificity': null,
    'at-rule-empty-line-before': [
      'always',
      {ignoreAtRules: ['import']}
    ],
    'color-hex-case': 'upper',
    'comment-empty-line-before': [
      'always',
      {ignoreComments: ["/./"]}
    ]
  }
}
