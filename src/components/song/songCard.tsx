type IpropTypes = {
    song: string,
    artist: string,
    position: number
}

export  const SongCard = ({song, artist, position}: IpropTypes) => {
    const colors: string[] = [
        'text-[#bf9953]',
        'text-[#36D1DC]',
        'text-[#2d4064]',
        'text-[#bf63f2]',
    ]
    const colors2: string[] = [
        'border-[#bf9953]',
        'border-[#36D1DC]',
        'border-[#2d4064]',
        'border-[#bf63f2]',
    ]

    const color = colors[Math.floor(Math.random() * colors.length)]
    const color2 = "border-"+color.split("-")[1]
  return (
    <div className={`h-[8rem] border-2 ${color2} border-opacity-40 shadow-lg p-6`}>
        <div className="flex items-center gap-4">
            <div className={`text-5xl font-bold ${color}`}>
                #{position}
            </div>
            <div className={`text-3xl font-bold ${color}`}>
                {song}
                <div className="text-sm font-bold">
                    {artist}
                </div>
            </div>
        </div>
    </div>
  )
}


export default SongCard