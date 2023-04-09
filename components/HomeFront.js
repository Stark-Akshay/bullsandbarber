import { Avatar, Box, Card } from "@mui/material";

const HomeFront = () =>{
    return(
        <>
        <Card
        elevation={0}
            sx={{
                height:'20rem',
                margin:'20px',
                bgcolor:'transparent'
            }}
        >
            <Box
            label="inner"
                sx={{
                    display: 'flex',
                    justifyContent:'center'
                }}
            >
            <Avatar
                sx={{
                    bgcolor: '#3f51b5'
                }}
            >
                A
            </Avatar>
            </Box>
       
        </Card>
           


        </>
    )
};

export default HomeFront;