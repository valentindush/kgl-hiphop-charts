import { useEffect, useState } from "react"
import { Card } from "../components/home/card"
import Slider from "../components/home/slider"
import { sliders } from "../utils/data"

const Home = () => {
  const colors: string[] = [
    'bg-[#bf9953]',
    'bg-[#36D1DC]',
    'bg-[#2d4064]',
    'bg-[#bf63f2]',
  ]
  const cards: {
    title: string,
    description: string,
    img: string,
    to: string,
    no: string
  }[] = [
      {
        title: "Weekly Top Songs",
        description: "Ish Kevin's \“SAGA\“ pick #1 from #29 last week",
        img: "https://th.bing.com/th/id/R.051025f3ed6b47246a4e599d270bed18?rik=aJiuqqKbSNs%2fMA&pid=ImgRaw&r=0",
        to: "weeklyTopSongs",
        no: "SAGA - Ish Kevin"
      },
      {
        title: "Weekly Top Artists",
        description: "Ish Kevin's \"SAGA\" pick #1 from #29 last week",
        img: "https://th.bing.com/th/id/R.051025f3ed6b47246a4e599d270bed18?rik=aJiuqqKbSNs%2fMA&pid=ImgRaw&r=0",
        to: "weeklyTopArtists",
        no: "Ish Kevin"
      },
      {
        title: "Weekly Top Albums",
        description: "Ish Kevin's \"Long Way\" pick #1 from #29 last week",
        img: "https://th.bing.com/th/id/R.051025f3ed6b47246a4e599d270bed18?rik=aJiuqqKbSNs%2fMA&pid=ImgRaw&r=0",
        to: "weeklyTopAlbums",
        no: "Long Way - Ish Kevin"
      },
      {
        title: "Upcoming Artists",
        description: "Ish Kevin's \"SAGA\" pick #1 from #29 last week",
        img: "https://th.bing.com/th/id/R.051025f3ed6b47246a4e599d270bed18?rik=aJiuqqKbSNs%2fMA&pid=ImgRaw&r=0",
        to: "dailyTopSongs",
        no: "SAGA - Ish Kevin"
      },
    ]

  const tabs: { name: string, to: string, commingSoon?: true }[]
    = [
      {
        name: "All",
        to: "all",
      },
      {
        name: "City",
        to: "city",
        commingSoon: true
      }
    ]

    const [activeTab, setActiveTab] = useState(tabs[0]) 

  return (
    <div className="w-screen">
      <Slider sliders={sliders} />

      <div className="mt-3 py-5">
        <div className="flex gap-4 px-12 md:px-4">
          {tabs.map((tab, index) => (
            <div key={index} className="">
              <a href="#" onClick={()=>setActiveTab(tab)} className="font-semibold text-gray-500">{tab.name}</a>
              {activeTab == tab && <div className="w-1/2 h-1 bg-gray-600 rounded-full"></div>}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-3 px-12 md:px-4 md:grid-cols-1 pb-4">
        {cards.map((card, index) => (
          <Card key={index} card={{ ...card, color: colors[index] }} />
        ))}
      </div>
    </div>
  )
}

export default Home