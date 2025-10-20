import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

function CategoryCard({ category }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={category.image}
          alt={category.name}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {category.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CategoryCard;
