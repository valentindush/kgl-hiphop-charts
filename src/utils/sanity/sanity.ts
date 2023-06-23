import { createClient } from "@sanity/client";


export const client = createClient({
    projectId: import.meta.env.VITE_PROJECT_ID,
    dataset: "charts",
    useCdn: true,
    apiVersion:'2023-05-03' 
})

export async function getWeeklyTopAlbums (){
    const albums =  await client.fetch(`*[_type=="weeklyAlbum"]`)
    return albums
}

export async function getWeeklyTopArtists(){
    const artists = await client.fetch(`*[_type=="weeklyArtist"]`)
    return artists
}

export async function getWeeklyTopSongs(){
    const songs = await client.fetch(`*[_type=="weeklyTopSons"]`)
    return songs
}