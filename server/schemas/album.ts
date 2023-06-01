export default{
    name: "album",
    type: "document",
    title: "Album",

    fields: [
        {
            name: "album",
            title: "Album Name",
            type: "string"
        },
        {
            name: "cover",
            title: "Album Cover",
            type: "image",
        },
        {
            name: "artist",
            title: "Artist",
            type: "string"
        },
        {
            name: "number",
            type: "number",
            title: "Position"
        }
    ]
}