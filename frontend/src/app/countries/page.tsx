"use client";

import {
  Box,
  CircularProgress,
  List,
  ListItem,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import superagent from "superagent";
import type { AvailableCountryType } from "../../types/available-country.type";

const CountryListPage = () => {
  const [countries, setCountries] = useState<AvailableCountryType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const countriesPerPage = 10;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: AvailableCountryType[] = (
          await superagent.get("http://localhost:3000/countries")
        ).body;

        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry,
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };

  if (loading) {
    return (
      <Box textAlign="center" alignContent="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box textAlign="center" alignContent="center">
      <Typography variant="h1" align="center">
        Country List
      </Typography>
      {countries.length === 0 ? (
        <Typography variant="body1">No countries available.</Typography>
      ) : (
        <List>
          {currentCountries.map((country) => (
            <ListItem
              key={country.countryCode}
              alignItems="center"
              sx={{ justifyContent: "center" }}
            >
              <Link href={`/countries/${country.countryCode}`} passHref>
                <Typography variant="body1" component="div" align="center">
                  {country.name}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      )}
      <Stack spacing={2} alignItems="center" marginTop={4}>
        <Pagination
          count={Math.ceil(countries.length / countriesPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>
    </Box>
  );
};

export default CountryListPage;
