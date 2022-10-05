    import React from 'react'
    import { Button, Grid, Link, TextField, Typography } from '@mui/material'
    
    export const AuthLayount = ({children, title = ''}) => {
      return (
        <Grid className='animate__animated animete__fadeIn animete__faster' 
        container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ 
              minHeight:'100vh', 
              backgroundColor: 'primary.main', 
              padding:4
            }}
            >
            {/* (sx) are the style (xs, md, xl) but size */}

            <Grid item
                className='box-shadow'
                xs={3}
                sx={{
                  width:{ sm:450 },
                  backgroundColor:'white', 
                  padding: 3, 
                  borderRadius: 2
                }}
                >
                <Typography variant='h5' sx={{mb:1}}>{ title }</Typography>
                {children}
            </Grid>
        </Grid>
      )
    }
    