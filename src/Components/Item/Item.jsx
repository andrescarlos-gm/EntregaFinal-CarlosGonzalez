import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Item({ item }) {


  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#E5D0CC", width: 450 }}>
      <Link to={`/item/${item.id}`} style={{ textDecoration: "none" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={item.ProductImage}
            alt="image"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="black">
              {item.ProductName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.ProductDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <Grid
        container
        spacing={1}
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link to={`/item/${item.id}`}>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </Grid>
    </Card>
  );
}
