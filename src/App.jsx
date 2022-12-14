import React from "react";
import { Typography,AppBar,Button,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const App = () => {
const Classes = useStyles();


return(
    <>
    <CssBaseline />
    <AppBar position="relative">
        <Toolbar>
            <PhotoCamera className={Classes.icon}/>
            <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
    </AppBar>
    <main>
        <div className={Classes.container}>
            <Container maxWidth ="sm">
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    Photo Album
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Hello everyone . This is a photo album and I'm trying to make this sentence as long as possible so we can see how does it look on screen

                </Typography>
                <div className={Classes.button}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                See my photos
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Secondary Action
                            </Button>
                        </Grid>

                    </Grid>
                </div>

            </Container>
        </div>
        <Container className={Classes.cardgrid} maxWidth="md">
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={Classes.card}>
                        <CardMedia
                        className={Classes.cardmedia}
                        image="https://source.unsplash.com/random"
                        title="Image Title"
                        />
                        <CardContent className={Classes.cardcontent}>
                            <Typography gutterBottom variant="h5">
                                Heading
                            </Typography>
                            <Typography>
                                this is the media card. you can use this section to describe the content.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">View</Button>
                            <Button size="small" color="primary">Edit</Button>
                        </CardActions>
                    </Card>
                </Grid>
                ))}
                
            </Grid>
        </Container>
    </main>
    <footer className={Classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary">
                        This is the footer of the page
                    </Typography>
    </footer>
    </>

);
}

export default App;