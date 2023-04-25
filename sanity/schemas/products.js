export default {
    name: 'products',
    type: 'document',
    title: 'Produkter',
    fields: [
        {
            name: 'product_title',
            type: 'string',
            title: 'Produktnavn'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'URL_tittel',
            options: {
                source: 'product_title',
                slugify: input => input.toLowerCase()
                .replace((/\s+/g,/[^w-]+/g), '-')
                .slice(0,150)
            }
        },
        {
            name: 'product_price',
            type: 'number',
            title: 'Pris'
        },
        {
            name: 'product_quantity',
            type: 'number',
            title: 'Lagerstatus'
        },
        {
            name: 'product_image',
            type: 'image',
            title: 'Produktbilde'
        },
        {
            name: 'category',
            title: 'Kategori',
            type: 'reference',
            to: [{type: 'categories'}]
        }

    ],
}
