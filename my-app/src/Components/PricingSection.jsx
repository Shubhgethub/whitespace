import React, { useState } from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, List, ListItem, ListItemIcon } from '@mui/material';
import CheckIcon from '../Images/Icon.png';
import CheckIconBlack from '../Images/Iconblack.png';

const PricingSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); 

  const plans = [
    {
      title: 'Free',
      price: '$0',
      features: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks',
      ],
      isHighlighted: false,
    },
    {
      title: 'Personal',
      price: '$11.99',
      features: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks',
      ],
      isHighlighted: false,
    },
    {
      title: 'Organization',
      price: '$49.99',
      features: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks',
      ],
      isHighlighted: false,
    },
  ];

  return (
    <Box sx={{ padding: '80px 16px' }} className="container">
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '40px' }}>
        Choose Your Plan
      </Typography>
      <Grid container spacing={4}>
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              sx={{
                border: '2px solid #FFD700', 
                textAlign: 'center',
                backgroundColor: (hoveredIndex === index) ? '#043873' : 'white', 
                color: (hoveredIndex === index) ? 'white' : 'black', 
                transform: 'scale(1)', // Default scale
                transition: 'transform 0.3s, background-color 0.3s, box-shadow 0.3s, color 0.3s', // Smooth animation
                boxShadow: (hoveredIndex === index) ? '0px 8px 16px rgba(0, 0, 0, 0.3)' : '0px 4px 8px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  transform: 'scale(1.1)', 
                  boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.4)', 
                  backgroundColor: '#043873',
                  color: 'white', 
                },
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)} 
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: (hoveredIndex === index) ? 'white' : 'inherit',
                  }}
                >
                  {plan.title}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    margin: '16px 0',
                    color: (hoveredIndex === index) ? '#FFD700' : 'inherit', 
                    '&:hover': { color: '#FFD700' }, 
                  }}
                >
                  {plan.price}
                </Typography>
                <List sx={{ padding: 0 }}>
                  {plan.features.map((feature, i) => (
                    <ListItem key={i} sx={{ paddingLeft: 0 }}>
                      <ListItemIcon sx={{ minWidth: '30px' }}>
                        <img
                          src={(hoveredIndex === index) ? CheckIcon : CheckIconBlack}
                          alt="icon"
                          style={{
                            width: '20px',
                            height: '20px',
                            transition: 'transform 0.3s', 
                          }}
                        />
                      </ListItemIcon>
                      <Typography variant="body1">{feature}</Typography>
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: (hoveredIndex === index) ? '#FFD700' : '#1E3A8A', 
                    color: (hoveredIndex === index) ? '#000' : '#fff', 
                    '&:hover': {
                      backgroundColor: '#FFD700', 
                      color: '#000',
                    },
                    transition: 'background-color 0.3s, color 0.3s', 
                  }}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingSection;
