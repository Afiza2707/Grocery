import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';

function ProductCard({ product }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography color="text.secondary">₹{product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" fullWidth>Add to Cart</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
