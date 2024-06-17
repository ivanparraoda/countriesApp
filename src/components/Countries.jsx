import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Countries = ({ countries }) => {
  return (
    <>
      <section className='px-12 py-6  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 dark:bg-gray-800 '>
        {countries.map((country) => {
          return (
            <div
              key={country.name}
              className='rounded-lg shadow-xl flex-1  dark:bg-gray-700 dark:text-white'
            >
              <img
                src={country.flag}
                alt={country.name}
                className='overflow-hidden object-cover w-full h-48 rounded-t-lg'
              />

              <div className='p-4'>
                <Link
                  to={`/country/${country.name
                    .replace(/\s+/g, '-')
                    .toLowerCase()}`}
                  className='font-bold hover:text-gray-700 dark:hover:text-gray-200'
                >
                  {' '}
                  {country.name}
                </Link>
                <p>
                  {' '}
                  <span className='font-semibold'>Population:</span>{' '}
                  {country.population}
                </p>
                <p>
                  {' '}
                  <span className='font-semibold'>Region:</span>{' '}
                  {country.region}
                </p>
                <p>
                  {' '}
                  <span className='font-semibold'>Capital:</span>{' '}
                  {country.capital}
                </p>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

Countries.propTypes = {
  countries: PropTypes.array.isRequired
}

export default Countries
