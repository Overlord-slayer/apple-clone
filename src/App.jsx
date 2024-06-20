import * as Sentry from '@sentry/react'

import NavBar from "@components/navBar"
import Hero from "@components/hero"
import HighLights from "@components/highLights"
import Model from "@components/model"
import Features from '@components/features'
import HowItWorks from '@components/howItWorks'
import Footer from '@components/footer'

const App = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <HighLights />
      <Model />
      <Features/>
      <HowItWorks />
      <Footer/>
    </main>
  )
}

export default Sentry.withProfiler(App)
