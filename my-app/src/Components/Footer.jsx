import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#043873', color: '#fff', padding: { xs: '20px 16px', sm: '40px 16px' } }}>
      <Box className="container" sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        
        <Box
          sx={{
            backgroundColor: '#043873',
            color: '#fff',
            padding: { xs: '20px 16px', sm: '40px 16px' },
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
            Try Whitespace Today
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '16px' }}>
            Get started for free. Add your whole team as your needs grow.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#489cf9',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 'bold',
            }}
          >
            Try Taskey Free →
          </Button>
          <Typography variant="body2" sx={{ marginTop: '16px' }}>
            For larger teams, contact sales.
          </Typography>
          <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
            <Box component="img" src="./Images/android-logo 1.png" alt="Android" sx={{ height: '30px' }} />
            <Box component="img" src="/path/to/apple-black-logo2.png" alt="Apple" sx={{ height: '30px' }} />
            <Box component="img" src="/path/to/windows-logo1.png" alt="Windows" sx={{ height: '30px' }} />
          </Box>
        </Box>

      
        <Grid container spacing={4}>
          
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
              whitespace
            </Typography>
            <Typography variant="body2">
              Whitespace was created for the new ways we live and work. We make a better workspace
              around the world.
            </Typography>
          </Grid>

        
          <Grid item xs={12} sm={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
              Product
            </Typography>
            <Typography variant="body2">Overview</Typography>
            <Typography variant="body2">Pricing</Typography>
            <Typography variant="body2">Customer Stories</Typography>
          </Grid>

        
          <Grid item xs={12} sm={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
              Resources
            </Typography>
            <Typography variant="body2">Blog</Typography>
            <Typography variant="body2">Guides & Tutorials</Typography>
            <Typography variant="body2">Help Center</Typography>
          </Grid>

          
          <Grid item xs={12} sm={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
              Company
            </Typography>
            <Typography variant="body2">About Us</Typography>
            <Typography variant="body2">Careers</Typography>
            <Typography variant="body2">Media Kit</Typography>
          </Grid>

          
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: '16px', backgroundColor:'#043873', padding: '8px' }}>
              Try It Today
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '16px' }}>
              Get started for free. Add your whole team as your needs grow.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#043873',
                color: '#fff',
                textTransform: 'none',
                fontWeight: 'bold',
              }}
            >
              Start Today →
            </Button>
          </Grid>
        </Grid>

       
        <Box
          sx={{
            marginTop: '40px',
            borderTop: '1px solid #4A5568',
            paddingTop: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <LanguageIcon sx={{ fontSize: '18px', marginRight: '8px' }} />
            <Typography variant="body2" sx={{ marginRight: '16px' }}>
              English
            </Typography>
            <Typography variant="body2" sx={{ marginRight: '16px' }}>
              Terms & Privacy
            </Typography>
            <Typography variant="body2" sx={{ marginRight: '16px' }}>
              Security
            </Typography>
            <Typography variant="body2">Status</Typography>
          </Box>
          <Typography variant="body2" sx={{ textAlign: { xs: 'center', sm: 'left' }, marginTop: { xs: '16px', sm: '0' } }}>
            ©2024 Whitespace LLC
          </Typography>
          <Box sx={{ display: 'flex', gap: '8px', marginTop: { xs: '16px', sm: '0' } }}>
            <FacebookIcon sx={{ fontSize: '20px', cursor: 'pointer' }} />
            <TwitterIcon sx={{ fontSize: '20px', cursor: 'pointer' }} />
            <LinkedInIcon sx={{ fontSize: '20px', cursor: 'pointer' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
