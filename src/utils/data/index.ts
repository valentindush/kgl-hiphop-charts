export const locations:string[] = [
    'Kigali',
    'Kenya',
    'Tanzania',
    'Uganda',
    'East Africa',
]

export type ISlider={
    img: string,
    text: string,
    cat: Categories,
    date: Date
}

export enum Categories{
    WEEKLY_SONGS = "Weekly Top Songs",
    WEEKLY_ALBUMS = "Weekly Top Albums",
    WEEKLY_ARTISTS = "Weekly Top Artists",
}

export const sliders:ISlider[] = [
    {
        img: "https://th.bing.com/th/id/R.051025f3ed6b47246a4e599d270bed18?rik=aJiuqqKbSNs%2fMA&pid=ImgRaw&r=0",
        text: "“Dos Prédios Deluxe” by Veigh and Supernova Ent is the highest new entry on Top Albums Global at #26.",
        cat: Categories.WEEKLY_ALBUMS,
        date: new Date(Date.now())
    },
    {
        img: "https://th.bing.com/th/id/R.051025f3ed6b47246a4e599d270bed18?rik=aJiuqqKbSNs%2fMA&pid=ImgRaw&r=0",
        text: "“Dos Prédios Deluxe” by Veigh and Supernova Ent is the highest new entry on Top Albums Global at #26.",
        cat: Categories.WEEKLY_ALBUMS,
        date: new Date(Date.now())
    },
    {
        img: "https://th.bing.com/th/id/R.051025f3ed6b47246a4e599d270bed18?rik=aJiuqqKbSNs%2fMA&pid=ImgRaw&r=0",
        text: "“Dos Prédios Deluxe” by Veigh and Supernova Ent is the highest new entry on Top Albums Global at #26.",
        cat: Categories.WEEKLY_ALBUMS,
        date: new Date(Date.now())
    },
    {
        img: "https://th.bing.com/th/id/R.051025f3ed6b47246a4e599d270bed18?rik=aJiuqqKbSNs%2fMA&pid=ImgRaw&r=0",
        text: "“Dos Prédios Deluxe” by Veigh and Supernova Ent is the highest new entry on Top Albums Global at #26.",
        cat: Categories.WEEKLY_ALBUMS,
        date: new Date(Date.now())
    },
    {
        img: "https://th.bing.com/th/id/R.051025f3ed6b47246a4e599d270bed18?rik=aJiuqqKbSNs%2fMA&pid=ImgRaw&r=0",
        text: "“Dos Prédios Deluxe” by Veigh and Supernova Ent is the highest new entry on Top Albums Global at #26.",
        cat: Categories.WEEKLY_ALBUMS,
        date: new Date(Date.now())
    },
    {
        img: "https://th.bing.com/th/id/R.051025f3ed6b47246a4e599d270bed18?rik=aJiuqqKbSNs%2fMA&pid=ImgRaw&r=0",
        text: "“Dos Prédios Deluxe” by Veigh and Supernova Ent is the highest new entry on Top Albums Global at #26.",
        cat: Categories.WEEKLY_ALBUMS,
        date: new Date(Date.now())
    },

]
type Song = {
    song: string,
    artist: string,
    position: number
}
export const topSongs:Song[] = [
    {
        song: "SAGA",
        artist: "Ish Kevin",
        position: 1
    },
    {
        song: "Bact to it",
        artist: "Shim in Cut",
        position: 2
    },
    {
        song: "Muri BAG",
        artist: "JOKA$$H, Trizzie Ninety Six, Bobby Bangs, Og2tonw",
        position: 3
    },
    {
        song: "Ya Nigga",
        artist: "JOKA$$H, Sobermind, Bobby Bangs",
        position: 4
    },
    {
        song: "SAGA",
        artist: "Ish Kevin",
        position: 1
    },
    {
        song: "Bact to it",
        artist: "Shim in Cut",
        position: 2
    },
    {
        song: "Muri BAG",
        artist: "JOKA$$H, Trizzie Ninety Six, Bobby Bangs, Og2tonw",
        position: 3
    },
    {
        song: "Ya Nigga",
        artist: "JOKA$$H, Sobermind, Bobby Bangs",
        position: 4
    },
]