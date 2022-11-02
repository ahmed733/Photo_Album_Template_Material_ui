import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ( {
container: {
backgroundColor:'white',
padding: '20px'
},
icon:{
    marginRight:'20px',
},
button:{
    marginTop:'40px',
},
cardgrid: {
padding:'20px 0'
},
card: {
height:'100%',
display:'flex',
flexDirection:'column'
},
cardmedia: {
paddingTop:'56.25%'
},
cardcontent: {
flexGrow:1,
},
footer: {
    backgroundColor:'white',
    padding:'50px 0',
    marginBottom:'20px'
}
}));

export default useStyles;