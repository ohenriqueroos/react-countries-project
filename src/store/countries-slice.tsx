import { createSlice } from "@reduxjs/toolkit";
interface ICountryState {
  countries: any[];
  filterCountries: any[];
  filter: {
    region: string | null;
    name: string;
  };
}

const COUNTRIES_INITIAL_STATE: ICountryState = {
  countries: [],
  filterCountries: [],
  filter: {
    region: null,
    name: "",
  },
};

const countriesSlice = createSlice({
  name: "countries",
  initialState: COUNTRIES_INITIAL_STATE,
  reducers: {
    setCountries(state, action) {
      state.countries = action.payload;
      state.filterCountries = action.payload;
    },

    setFilterRegion(state, action) {
      state.filter.region = action.payload;

      if (state.filter.name) {
        state.filterCountries = state.countries
          .filter((country: any) => {
            return country.name
              .toLowerCase()
              .includes(state.filter.name.toLowerCase());
          })
          .filter((country: any) => {
            return country.region === action.payload;
          });
      } else {
        state.filterCountries = state.countries.filter((country: any) => {
          return country.region === action.payload;
        });
      }
    },

    setFilterName(state, action) {
      state.filter.name = action.payload;

      if (state.filter.region) {
        state.filterCountries = state.countries
          .filter((country: any) => {
            return country.region === state.filter.region;
          })
          .filter((country: any) => {
            return country.name
              .toLowerCase()
              .includes(action.payload.toLowerCase());
          });
      } else {
        state.filterCountries = state.countries.filter((country: any) => {
          return country.name
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        });
      }
    },

    setFilterClean(state) {
      if (state.filter.region) {
        state.filterCountries = state.countries;
        state.filter.region = null;
      }

      if (state.filter.name) {
        state.filterCountries = state.countries;
        state.filter.name = "";
      }
    },
  },
});

export const countriesActions = countriesSlice.actions;
export default countriesSlice;

export const fetchCountriesData = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-countries-f253f-default-rtdb.firebaseio.com/country.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const responseData = await response.json();

      return responseData;
    };

    try {
      const countryData = await fetchData();
      dispatch(countriesActions.setCountries(countryData));
    } catch (error) {
      console.log(error);
    }
  };
};
