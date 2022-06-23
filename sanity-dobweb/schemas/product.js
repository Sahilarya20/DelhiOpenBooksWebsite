export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'originalprice',
        title: 'Original Price',
        type: 'number',
      }
      ,

      { 
        name: 'details',
        title: 'Details',
        type: 'string',
      },
      { 
        name: 'author',
        title: 'Author',
        type: 'string',
      }
      ,
      {
        name: 'language',
        title: 'Language',
        type: 'string',
      },
      {
        name: 'publisher',
        title: 'Publisher',
        type: 'string',
      },    
      {
        name: 'isbn',
        title: 'ISBN',
        type: 'string',
      },
      {
        name: 'pages',
        title: 'Pages',
        type: 'number',
      },
      
      {
        name: 'binding',
        title: 'Binding',
        type: 'string',
      },
      
      {
        name: 'dimension',
        title: 'Dimension',
        type: 'string',
      }
      
    ]
  }