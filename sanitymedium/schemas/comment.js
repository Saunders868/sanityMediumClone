export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        title: 'Approved',
        name: 'approved',
        description: 'Comments wont show on site without approval',
        type: 'boolean',
      },
      {
        name: 'email',
        type: 'string',
      },
      {
        name: 'comment',
        type: 'text',
      },
      {
        name: 'post',
        type: 'reference',
        to: [{type: 'post'}],
      },
    ],
  };