import { useState } from 'react'
import './App.css'
import { 
  useFetchCountriesQuery, 
  useFetchCountryDetailQuery,
  useFetchGlobalQuery,
} from './features/covid/covidApi';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { CovidCard } from './components/Card';
import { buildDisplayObject } from './app/utils';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

function App() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>('Belgium');

  const { data = { countries: [] }, isFetching: isFetchingCountries } = useFetchCountriesQuery();
  const { data: countryDetailObject, isFetching: isFetchingCountryDetails} = useFetchCountryDetailQuery(selectedCountry);
  const { data: globalObject, isFetching: isFetchingGlobal} = useFetchGlobalQuery();

  
  const countryDetails = buildDisplayObject(countryDetailObject);
  const globalDetails = buildDisplayObject(globalObject);

  return (
    <div className="App">
      <section className="App-body">
          <>
          {!isFetchingGlobal && (
              <>
                <Typography variant="h5" component="div" sx={{marginY: '20px'}}>
                  Global numbers
                </Typography>
                <Stack spacing={2} direction="row" sx={{}}>
                  {globalDetails.cases.map((global) => (
                    <CovidCard 
                        key={global.title}
                        title={global.title} 
                        count={global.value}
                        subTitle={global.title}
                        lastUpdate={globalDetails.lastUpdate}
                      />
                  ))}
                </Stack>
              </>
            )}

            {isFetchingCountryDetails && 
              <CircularProgress color="inherit" size={20} />}

            <Stack spacing={2} width={200} sx={{mt: '30px'}}>
              <Autocomplete
                disableClearable
                loading={isFetchingCountries}
                id="country"
                options={data.countries}
                getOptionLabel={(option) => option.name}
                onChange={(event, country) => setSelectedCountry(country?.name)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label={`Countries(${data.countries.length})`}
                    placeholder="Select a country"
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <>
                          {isFetchingCountries ? <CircularProgress color="inherit" size={20} /> : null}
                          {params.InputProps.endAdornment}
                        </>
                      ),
                    }}
                  />
                )}
              />
            </Stack>

              {selectedCountry && 
              !isFetchingCountryDetails && (
                <>
                  <Typography variant="h5" component="div" sx={{marginY: '20px'}}>
                    {selectedCountry}
                  </Typography>
                  <Stack spacing={2} direction="row">
                    {countryDetails.cases.map((caseDetail) => (
                      <CovidCard 
                          key={caseDetail.title}
                          title={caseDetail.title} 
                          count={caseDetail.value}
                          subTitle={caseDetail.title}
                          lastUpdate={countryDetails.lastUpdate}
                        />
                    ))}
                  </Stack>
                </>
              )}

              
          </>
      </section>
    </div>
  )
}

export default App

