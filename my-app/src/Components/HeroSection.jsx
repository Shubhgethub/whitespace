import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroSectionImg from '../Images/Image-container.png';
import Element from '../Images/Element.png';

const HeroSection = () => {
  return (
    <>
    
      <Box
        className="HeroSectionContainer"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#043873', 
          color: '#fff',
          padding: { xs: '40px 16px', md: '80px 16px' }, 
          position: 'relative', 
          overflow: 'hidden',
          backgroundImage: `url(${Element})`, 
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain', 
          backgroundPosition: 'center', 
        }}
      >
        
        <Box
          sx={{
            color: '#fff',
            textAlign: 'center',
            padding: { xs: '20px', md: '0' },
            marginBottom: { xs: '20px', md: '0' }, 
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
            Get More Done with Whitespace
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '24px' }}>
            High-performance applications that help teams to collaborate and <br />
            complete enterprise-grade tasks.
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: '#FFD700', color: '#000' }}>
            Try Whitespace Free
          </Button>
        </Box>

        
        <Box
          sx={{
            width: '100%',
            textAlign: 'center',
            '& img': {
              width: '100%',
              maxWidth: '600px',
              height: 'auto',
            },
          }}
        >
          <img src={HeroSectionImg} alt="HeroSection" />
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
