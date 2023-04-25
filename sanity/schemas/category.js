export default {
    type: 'document',
    name: 'categories',
    title: 'Kategorier',
    fields: [
        {
            name: 'category_title',
            type: 'string',
            title: 'Kategorinavn'
        },
        {
            name: 'category_image',
            type: 'image',
            title: 'Bilde'
        }
    ],
}