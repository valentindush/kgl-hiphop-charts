export default{
    name: "slideArticle",
    type: "document",
    title: "Slide Article",
    fields: [
        {
            title: "Image",
            name: "img",
            type: "image",
            options: {
                hotspot: true,
            }      
        },
        {
            name: 'text',
            type: "string",
            title: "Text"
        },
        {
            name: 'cat',
            type: "string",
            title: "Category"
        },
        {
            name: 'date',
            type: "date",
            title: "Date"
        },
        
    ]
}