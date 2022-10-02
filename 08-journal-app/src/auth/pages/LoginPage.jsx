import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayount } from '../Layout'
import { useForm } from '../../hook'
import { ckeckingAuthentication, startGoogleSingIn } from '../../store/auth'

export const LoginPage = () => {

  const { status } = useSelector( state => state.auth);

  const dispatch = useDispatch();
  
  const {email, password, onInputChange, formState} = useForm({
    email: 'hamilton@email.com',
    password: '123456'
  });

  const isAuthenticating = useMemo( () => status === 'ckecking', [status]);

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log({email, password});

    dispatch(ckeckingAuthentication())
  }

  const onGoogleSingIn = () => {
    dispatch(startGoogleSingIn());
  }

  return (
    <AuthLayount title="Login">

       <form onSubmit={ onSubmit }>
            <Grid container>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField
                  label="Correo"
                  type="email"
                  placeholder='correo@gmail.com'
                  fullWidth
                  name='email'
                  value={email}
                  onChange={onInputChange}
                  >

                </TextField>
              </Grid>

              <Grid item xs={12} sx={{mt:2}}>
                <TextField
                  label="Contrasena"
                  type="password"
                  placeholder='Password'
                  fullWidth
                  name='password'
                  value={password}
                  onChange={onInputChange}
                  >

                </TextField>
              </Grid>

              <Grid container spacing={2} sx={{md:2 , mt:1}}>
                <Grid item xs={12} sm={6}>
                  <Button 
                  disabled={ isAuthenticating }
                  type='submit'
                  variant='contained' 
                  fullWidth
                  > 
                    Login 
                 </Button>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                  disabled={ isAuthenticating } 
                  variant='contained' 
                  onClick={() => onGoogleSingIn()}
                  fullWidth> 
                    <Google />
                    <Typography sx={{ml:1}}> Google</Typography>
                 </Button>
                </Grid>
              </Grid>

              <Grid container direction='row' justifyContent='end'>
                <Link component={RouterLink} color='inherit' to='/auth/register' >
                  Crear una cuenta
                </Link>
              </Grid>

            </Grid>
          </form>

    </AuthLayount>
           
    )
}
