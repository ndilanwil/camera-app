import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import connectClient from '../../../functions/test'
import AppTasks from '../app-tasks';
import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppTrafficBySite from '../app-traffic-by-site';
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';
// ----------------------------------------------------------------------

export default function AppView() {
  const [message, setMessage] = useState('')
  const [refresh, setRefresh] = useState(false)
  const [ref, setRef] = useState('');

  useEffect(() => { 
    connectClient();
  }, []);

  useEffect(() => { 
    setMessage(localStorage.getItem('message'))
    function changeVariable() {
      setRefresh(!refresh);
    }
    setInterval(changeVariable, 1000)
  }, [refresh]);
  useEffect(() => { 
    // const thres = localStorage.getItem('threshold')
    // const ti = localStorage.getItem('timelimit')
    // console.log('erere : ' + thres)
    // if(thres && message > thres){
    // }
    // if(time && 100 > time){

    // }
  }, [ref]);
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Counts"
            total={12}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Admins"
            total={2}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Counts per day"
            chart={{
              labels: [
                '01/01/2024',
                '02/01/2024',
                '03/01/2024',
                '04/01/2024',
                '05/01/2024',
                '06/01/2024',
                '07/01/2024',
                '08/01/2024',
                '09/01/2024',
                '10/01/2024',
                '11/01/2024',
              ],
              series: [
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Current highest count per zone"
            chart={{
              series: [
                { label: 'Zone A', value: 4344 },
                { label: 'Zone B', value: 5435 },
                { label: 'Zone C', value: 1443 },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
