import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
function ShowCard(props) {
    var url = props.url;
    var main = props.main;
    var cityname = props.cityname;
    var desc = props.desc;
    var temp = props.temp;

  return (
    <div><Card sx={{ maxWidth: 345, margin: "auto" }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="170"
        sx={{ margin: "auto", width: "150px" }}
        image={url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {main} in {cityname}
        </Typography>
        <Typography variant="body1" color="text.primary" id="degree">
          {temp}
        </Typography>
        <Typography variant="body2" color="text.secondary" id="desc">
          {desc}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card></div>
  )
}

export default ShowCard