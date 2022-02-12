import CircularProgress from '@mui/material/CircularProgress';
import Box from "@mui/material/Box"

const Loader = () => {
    return ( 
        <Box sx={{ display: 'grid', placeItems: "center", height:"100%", }}>
            <CircularProgress />
        </Box>
     );
}
 
export default Loader;