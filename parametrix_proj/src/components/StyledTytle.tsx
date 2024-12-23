import { Box } from '@mui/material'

type tytleProps = {tytle: string}

export default function StyledTytle(props: tytleProps) {
  return (
    <Box sx={{ backgroundColor: '#3f51b5',color: 'white', borderRadius: '20%', padding: '16px'}}>
        {props.tytle}
    </Box>
  )
}