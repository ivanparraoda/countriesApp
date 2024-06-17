import PropTypes from 'prop-types'

const Filters = ({
  handleChangeCountry,
  handleChangeRegion,
  selectedCountry,
  selectedRegion
}) => {
  return (
    <div className='w-full flex flex-col md:flex-row md:justify-between justify-center mt-6 px-12  gap-4 py-6 dark:bg-gray-800'>
      <div className='w-full md:w-80'>
        <label htmlFor='country-search' className='sr-only'>
          Search for a country
        </label>
        <input
          type='text'
          id='country-search'
          placeholder='Search for a country...'
          className='p-2  rounded-md w-full shadow-md focus:outline-none focus:ring dark:bg-gray-700 dark:text-white font-semibold'
          onChange={handleChangeCountry}
          value={selectedCountry}
        />
      </div>
      <div className='w-full md:w-80'>
        <label htmlFor='region-filter' className='sr-only'>
          Filter by Region
        </label>
        <select
          id='region-filter'
          className='p-2   rounded-md w-full shadow-md focus:outline-none focus:ring  dark:bg-gray-700 dark:text-white'
          onChange={handleChangeRegion}
          value={selectedRegion}
        >
          <option hidden value=''>
            Filter by Region
          </option>
          <option value='Africa'>Africa</option>
          <option value='Americas'>Americas</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>
      </div>
    </div>
  )
}

Filters.propTypes = {
  handleChangeCountry: PropTypes.func.isRequired,
  handleChangeRegion: PropTypes.func.isRequired,
  selectedCountry: PropTypes.string.isRequired,
  selectedRegion: PropTypes.string.isRequired
}

export default Filters
