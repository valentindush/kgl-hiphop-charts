export default {
    name: "song",
    type: "document",
    title: "Song",
    fields: [
        {
            name: "song", 
            type: "string",
            title: "SongName"
        },
        {
            name: "artist",
            type: "string",
            title: "Artist"
        },
        {
            name: "number",
            type: "number",
            title: "Position"
        }
    ]
}