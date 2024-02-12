import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

const Posts = () => {
    return (
        // <Box flex={4} p={2}>
        <Card sx={{ margin: 5 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        J
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Jagatheeswaran"
                subheader="Jan 14, 2024"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://img.freepik.com/free-photo/beautiful-shot-small-lake-with-wooden-rowboat-focus-breathtaking-clouds-sky_181624-2490.jpg?w=996&t=st=1707726900~exp=1707727500~hmac=c40fc2f54c8fe0e4d74dfe8b7b1d65d70fe9e67e4ac53233a5e14ad1542771ca"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
        // </Box>
    )
}

export default Posts