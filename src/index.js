module.exports = {
  meta: {
    name: "eslint-plugin-comment-pattern",
  },
  rules: {
    'no-pattern-comments': require('./rules/no-pattern-comments'),
  },
};