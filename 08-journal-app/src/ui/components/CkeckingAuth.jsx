import { CircularProgress, Grid } from "@mui/material"

export const CkeckingAuth = () => {
  return (
    <Grid container
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

        <Grid container
            direction='row'
            justifyContent='center'
            >
                <CircularProgress color="warning"></CircularProgress>
        </Grid>

    </Grid>
  )
}
