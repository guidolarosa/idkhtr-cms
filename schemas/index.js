const ItemTypes = [
  {value: 'text', title: 'Text'},
  {value: 'image', title: 'Image'},
  {value: 'link', title: 'Link'},
]

export const schemaTypes = [
  {
    title: 'Issue',
    name: 'issue',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
      {
        title: 'Description',
        name: 'description',
        type: 'array',
        of: [{type: 'block'}],
      },
      {
        title: 'Items',
        name: 'items',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'item',
            title: 'Item',
            fields: [
              {name: 'x', type: 'number', title: 'X Position'},
              {name: 'y', type: 'number', title: 'Y Position'},
              {
                name: 'itemType',
                type: 'string',
                title: 'Type',
                options: {
                  list: ItemTypes.map(({title, value}) => ({title, value})),
                  layout: 'radio'
                }
              },
              {name: 'width', type: 'number', title: 'Width'},
              {name: 'height', type: 'number', title: 'Height'},
              {name: 'image', type: 'image', title: 'Image'},
              {name: 'url', type: 'url', title: 'URL'},
            ],
          },
        ],
      },
    ],
  },
]
