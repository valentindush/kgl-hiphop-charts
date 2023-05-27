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