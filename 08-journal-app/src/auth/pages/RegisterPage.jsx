import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { AuthLayount } from '../Layout'
import { useForm } from '../../hook'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWhithEmailPassword } from '../../store/auth'

const formData = {
  displayName:'hamilton',
  email: 'hamilton@email.com',
  password: '123456'
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const {status, errorMessage} = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations);


  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if(!isFormValid) return;
    
    dispatch( startCreatingUserWhithEmailPassword(formState) )

  }

  return (
    <AuthLayount title="Register">
      <h1>FormValid {isFormValid? 'valido' : 'Incorrecto'}</h1>


       <form onSubmit={onSubmit} className='animate__animated animete__fadeIn animete__faster'>
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
                  error={!!displayNameValid && formSubmitted}
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
                  error={!!emailValid && formSubmitted}
                  helperText={emailValid}
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
                  error={!!passwordValid && formSubmitted}
                  helperText={passwordValid}
                  >

                </TextField>
              </Grid>

              <Grid container spacing={2} sx={{md:2 , mt:1}}>

                <Grid 
                item 
                xs={12}
                display={!!errorMessage ? '': 'none'}
                >
                  <Alert severity='error'>{errorMessage}</Alert>
                </Grid>


                <Grid item sm={12}>
                  <Button
                  disabled={isCheckingAuthentication} 
                  type='submit'
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
