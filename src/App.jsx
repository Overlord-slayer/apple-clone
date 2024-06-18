import NavBar from "@components/navBar"
import Hero from "@components/hero"
import HighLights from "@components/highLights"
import Model from "@components/model"

const App = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <HighLights />
      <Model />
    </main>
  )
}

export default App
