export default {
    name: "upcomingArtist",
    title: "Upcoming Artist",
    type: "document",

    fields: [
        {
            name: "image",
            title: "Artist Image",
            type: "image"
        },
        {
            name: "name",
            title: "Artist Name",
            type: "string"
        },
        {
            name: "position",
            title: "Position",
            type: "number"
        }
    ]
}