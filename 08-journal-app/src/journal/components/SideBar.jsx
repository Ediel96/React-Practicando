import { Box, Drawer } from '@mui/material'

export const SideBar = () => {
  return (
    <Box 
        component='nav'
        sx={{width:{ sm:drawerWidth, flexShrink:{ ssm: 0 } }}}>
        <Drawer 
        variant='parmannen'>

        </Drawer>
        
    </Box>
  )
}
