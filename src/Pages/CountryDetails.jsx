import { useParams, Link } from 'react-router-dom'
import data from '../data.json'

const CountryDetails = () => {
  const { name } = useParams()
  const country = data.find((c) => c.name.toLowerCase() === name.toLowerCase())

  if (!country) {
    return <div>Country not found</div>
  }

  return (
    <div>
      <div className='m-6'>
        <Link
          to='/'
          className='bg-gray-100 py-2 px-4 border border-gray-400 rounded-md dark:bg-gray-700 dark:text-white cursor-pointer hover:bg-gray-200 dark:border-gray-800 dark:hover:bg-gray-600'
        >
          Go back
        </Link>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 m-6'>
        <div className='flex-1'>
          <img
            src={country.flag}
            alt={country.name}
            className='w-full h-auto'
          />
        </div>
        <div className='flex-1'>
          <h1 className='dark:text-white font-bold text-2xl'>{country.name}</h1>
          <div className='flex gap-8 mt-4 flex-col md:flex-row'>
            <div>
              <p className='dark:text-white mb-2'>
                <span className='font-bold dark:text-white'>Native Name:</span>{' '}
                {country.nativeName}
              </p>

              <p className='dark:text-white mb-2'>
                <span className='font-bold dark:text-white'>Population:</span>{' '}
                {country.population}
              </p>
              <p className='dark:text-white mb-2'>
                <span className='font-bold dark:text-white'>Region:</span>{' '}
                {country.region}
              </p>

              <p className='dark:text-white mb-2'>
                <span className='font-bold dark:text-white'>Subregion:</span>{' '}
                {country.subregion}
              </p>
              <p className='dark:text-white mb-2'>
                <span className='font-bold dark:text-white'>Capital:</span>{' '}
                {country.capital}
              </p>
            </div>
            <div>
              <p className='dark:text-white mb-2'>
                <span className='font-bold dark:text-white'>
                  Top Level Domain:
                </span>{' '}
                {country.topLevelDomain}
              </p>
              <p className='dark:text-white mb-2'>
                <span className='font-bold dark:text-white'>Currencies:</span>{' '}
                {country.currencies.map((c) => c.name).join(', ')}
              </p>
              <p className='dark:text-white mb-2'>
                <span className='font-bold dark:text-white'>Languages:</span>{' '}
                {country.languages.map((l) => l.name).join(', ')}
              </p>
            </div>
          </div>

          <div className='mt-8'>
            <span className='font-bold dark:text-white'>Borders:</span>
            <div className='flex gap-4 mt-2'>
              {country.borders.map((border) => (
                <p
                  key={border}
                  className='border dark:border-gray-800 dark:bg-gray-700 rounded-md py-1 px-4 dark:text-white cursor-pointer'
                >
                  {border}{' '}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetails
