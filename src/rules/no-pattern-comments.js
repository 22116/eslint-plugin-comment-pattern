module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow certain patterns in comments',
      category: 'Stylistic Issues',
      recommended: false,
    },
    schema: [
      {
        type: 'object',
        properties: {
          patterns: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                pattern: { type: 'string' },
                message: { type: 'string' },
              },
              required: ['pattern', 'message'],
            },
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const patterns = context.options[0]?.patterns || [];

    return {
      Program() {
        patterns.forEach(({ pattern, message }) => {
          const regex = new RegExp(pattern);

          context.getSourceCode().getAllComments().forEach((comment) => {
            if (regex.test(comment.value)) {
              context.report({
                node: comment,
                message: message,
              });
            }
          });
        });
      },
    };
  },
};
