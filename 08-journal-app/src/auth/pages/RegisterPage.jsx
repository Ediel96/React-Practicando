import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayount } from '../Layout'
import { useForm } from '../../hook'

const formData = {
  displayName:'hamilton',
  email: 'hamilton@email.com',
  password: '123456'
}

const formValidations = {
  email: [(value) => value.include('@'), 'El correo deberia de tener una @.'],
  password: [(value) => value.length >= 6, 'El password debe de tner mas de 6 letras.'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations);

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log(formState)
  }

  return (
    <AuthLayount title="Register">

       <form onSubmit={onSubmit}>
            <Grid container>

              <Grid item xs={12} sx={{mt:2}}>
                <TextField
                  label="Nombre completo"
                  type="text"
                  placeholder='Nombre Completo'
                  fullWidth
                  name='displayName'
                  value={displayName}
                  onChange={onInputChange}
                  error={!displayNameValid}
                  helperText={displayNameValid}
                  >
                </TextField>
              </Grid>

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
                  placeholder='Contrasena'
                  fullWidth
                  name='password'
                  value={password}
                  onChange={onInputChange}
                  >

                </TextField>
              </Grid>

              <Grid container spacing={2} sx={{md:2 , mt:1}}>
                <Grid item sm={12}>
                  <Button type='submit'
                  variant='contained' 
                  fullWidth
                  > 
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
