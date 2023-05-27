import Slider from "../components/home/slider"
import { sliders } from "../utils/data"

const Home = () => {
  return (
    <div className="">
        <Slider sliders={sliders} />
    </div>
  )
}

export default Home