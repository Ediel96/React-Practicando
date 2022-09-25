import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayount } from '../Layout'

export const RegisterPage = () => {
  return (
    <AuthLayount title="Register">

       <form>
            <Grid container>

              <Grid item xs={12} sx={{mt:2}}>
                <TextField
                  label="Nombre completo"
                  type="text"
                  placeholder='Nombre Completo'
                  fullWidth>
                </TextField>
              </Grid>

              <Grid item xs={12} sx={{mt:2}}>
                <TextField
                  label="Correo"
                  type="email"
                  placeholder='correo@gmail.com'
                  fullWidth>
                </TextField>
              </Grid>

              <Grid item xs={12} sx={{mt:2}}>
                <TextField
                  label="Contrasena"
                  type="password"
                  placeholder='Contrasena'
                  fullWidth>

                </TextField>
              </Grid>

              <Grid container spacing={2} sx={{md:2 , mt:1}}>
                <Grid item sm={12}>
                  <Button variant='contained' fullWidth> 
                    Crear cuenta
                 </Button>
                </Grid>

              </Grid>

              <Grid container direction='row' justifyContent='end'>
                <Typography sx={{mr:1}}>Ya tienes cuentas?</Typography>
                <Link component={RouterLink} color='inherit' to='/auth/login' >
                  Ingresar
                </Link>
              </Grid>

            </Grid>
          </form>

    </AuthLayount>
           
    )
}
