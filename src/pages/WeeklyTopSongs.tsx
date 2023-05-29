import SongCard from "../components/song/songCard"
import { topSongs } from "../utils/data"

const WeeklyTopSongs = () => {

  const colors: string[] = [
    'bg-[#bf9953]',
    'bg-[#36D1DC]',
    'bg-[#2d4064]',
    'bg-[#bf63f2]',
  ]

  const topSong = {
    description: "“Dos Prédios Deluxe” by Veigh and Supernova Ent is the highest new entry on Top Albums Global at #26.",
    img: "https://th.bing.com/th/id/R.051025f3ed6b47246a4e599d270bed18?rik=aJiuqqKbSNs%2fMA&pid=ImgRaw&r=0",
    song: "SAGA - Ish Kevin"
  }

  return (
    <div className="">
      <div className={`pt-[10rem] ${colors[Math.floor(Math.random() * colors.length)]} px-12`}>
        <div className="flex justify-between items-start">
          <div className="">
            <div className="text-5xl font-bold text-white-primary max-w-4xl">{topSong.description}</div>
            <div className="text-xl font-bold text-white-primary mt-4">#1 {topSong.song}</div>
          </div>
          <div className="min-w-[15rem] w-[15rem] h-[15rem] min-h-[15rem] object-cover md:w-full">
            <img src={topSong.img} alt="" />
          </div>
        </div>
      </div>
      <div className="px-12 py-4">
        <h2 className="text-3xl font-semibold text-gray-600">Weekly Top Songs</h2>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-3 px-12">
          {topSongs.map((song, index) => (
            <SongCard key={index} {...song} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WeeklyTopSongs