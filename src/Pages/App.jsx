import Countries from '../components/Countries'
import Filters from '../components/Filters'
import data from '../data.json'
import { useState } from 'react'
import { ThemeProvider } from '../ThemeContext'

function App() {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')

  const handleChangeCountry = (e) => {
    setSelectedCountry(e.target.value)
  }

  const handleChangeRegion = (e) => {
    setSelectedRegion(e.target.value)
  }

  const filteredCountries = data.filter((country) => {
    return (
      (selectedCountry === '' ||
        country.name.toLowerCase().includes(selectedCountry.toLowerCase())) &&
      (selectedRegion === '' || country.region === selectedRegion)
    )
  })
  return (
    <ThemeProvider>
      <Filters
        handleChangeCountry={handleChangeCountry}
        handleChangeRegion={handleChangeRegion}
        selectedCountry={selectedCountry}
        selectedRegion={selectedRegion}
      />
      <Countries countries={filteredCountries} />
    </ThemeProvider>
  )
}

export default App
