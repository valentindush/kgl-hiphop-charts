export default {
    name: "weeklysong",
    type: "document",
    title: "Weekly Song",
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