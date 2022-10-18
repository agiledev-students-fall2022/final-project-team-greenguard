import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function EditProfile(props) {
    return (
      <>
        <div className="EditProfile">
            <h1> Edit Profile Page </h1>

            <div className="TopPart">
              <img className="ProfilePicture" src = "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
              alt = "userimage"/>
              <h2 className="FullName"> {props.fullname} </h2>
              <p className="Username"> @{props.username} </p>
            </div>

            <Box sx={{ width: '100%', height: "100%"}} className = "UserDetails">
              <Stack direction= "column" alignItems="center">
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              </Stack>
            </Box>

            <Box sx={{m: 2}}>
              <Stack spacing={2} direction = "row" alignItems="center" justifyContent="center">
                <Button color="success" href="/UserProfile" variant="contained">Save Changes</Button>
                <Button color="success" href="/UserProfile" variant="contained">Revert Changes</Button>
              </Stack>
            </Box>
        </div>
      </>
      
    );
  }
  
  export default EditProfile;




  
  
  