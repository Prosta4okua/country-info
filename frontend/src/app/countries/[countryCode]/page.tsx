"use client";

import { Box, CircularProgress, Link, List, ListItem, Typography } from "@mui/material";
import { CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js';
import Image from 'next/image';
import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import superagent from "superagent";
import type { CountryInfoType } from "../../../types/country-info.type";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Props = {
  params: Promise<{
    countryCode: string;
  }>;
};

const CountryPage = ({ params }: Props) => {
  const { countryCode } = React.use(params);
  const [country, setCountry] = useState<CountryInfoType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await superagent.get("http://localhost:3000/countries/${countryCode}").retry(5);
        const data: CountryInfoType = response.body;
        setCountry(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [countryCode]);

  if (loading) {
    return (
      <Box textAlign="center" alignContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (!country) {
    return (
      <Box textAlign="center" alignContent="center">
        <Typography variant="body1">Country not found.</Typography>
      </Box>
    );
  }

  const populationData = {
    labels: country.populationCounts.map((entry) => entry.year),
    datasets: [
      {
        label: 'Population Over Time',
        data: country.populationCounts.map((entry) => entry.value),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <Box textAlign="center" alignContent="center" sx={{ maxWidth: '1200px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        {country.countryName}
      </Typography>
      <Image src={country.flag} alt={`${country.countryName} flag`} width={500} height={300} />

      <Typography variant="h6" gutterBottom>
        Bordering Countries:
      </Typography>
<List sx={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
  {country.borders.length > 0 ? (
    country.borders.map((border) => (
      <ListItem key={border.countryCode} sx={{ display: 'flex', justifyContent: 'center', padding: '0 10px' }}>
        <Link href={`/countries/${border.countryCode}`} variant="body1" color="primary">
          {border.commonName}
        </Link>
      </ListItem>
    ))
  ) : (
    <Typography>No neighboring countries found.</Typography>
  )}
</List>


      <Typography variant="h6" gutterBottom>
        Population Over Time:
      </Typography>
      <Box sx={{ width: '80%', margin: 'auto' }}>
        <Line data={populationData} />
      </Box>
    </Box>
  );
};

export default CountryPage;