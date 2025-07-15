module.exports = {
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-config-recommended-vue/scss",
  ],
  customSyntax: "postcss-html",

  rules: {
    "at-rule-empty-line-before": null,
    "at-rule-no-unknown": null,
    "block-no-empty": null,
    "declaration-empty-line-before": null,
    "no-descending-specificity": null,
    "rule-empty-line-before": null,
    "selector-pseudo-element-colon-notation": null,
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"],
      },
    ],
  },
};
