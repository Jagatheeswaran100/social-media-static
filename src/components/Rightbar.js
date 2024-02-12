import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width={300}>
                <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </AvatarGroup>

                <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>

                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img
                            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1060&t=st=1707729751~exp=1707730351~hmac=64f9d2ce0690af88c7f51e53a79c4b075b5fea2a20a8dca2165996b3f7344733"
                            alt=""
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://img.freepik.com/free-photo/fog-dark-clouds-mountains_1204-503.jpg?w=996&t=st=1707729812~exp=1707730412~hmac=62b1cd430680cdc5f9522fa302f729fafb401fbb5e63e21e456c814361fadb66"
                            alt=""
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=996&t=st=1707729830~exp=1707730430~hmac=61ce908b54a963ea089ec2791ff56f4049edcea58c8e0b3df8f6a09083f7d430"
                            alt=""
                            loading="lazy"
                        />
                    </ImageListItem>
                </ImageList>

                <Typography variant='h6' fontWeight={100} mt={2}>Latest Conversations</Typography>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Rightbar