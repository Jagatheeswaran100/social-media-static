import React from 'react'
import Posts from './Posts'
import { Box } from '@mui/material'

const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <Posts image="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.2102235624.1707488286&semt=sph" />
            <Posts image="https://img.freepik.com/free-photo/beautiful-shot-small-lake-with-wooden-rowboat-focus-breathtaking-clouds-sky_181624-2490.jpg?size=626&ext=jpg&ga=GA1.1.2102235624.1707488286&semt=sph" />
            <Posts image="https://img.freepik.com/free-photo/fog-dark-clouds-mountains_1204-503.jpg?size=626&ext=jpg&ga=GA1.1.2102235624.1707488286&semt=sph" />
            <Posts image="https://img.freepik.com/free-photo/shiraito-waterfall-autumn-japan_335224-193.jpg?size=626&ext=jpg&ga=GA1.1.2102235624.1707488286&semt=sph" />
            <Posts image="https://img.freepik.com/free-photo/green-field-tree-blue-skygreat-as-backgroundweb-banner-generative-ai_1258-153069.jpg?size=626&ext=jpg&ga=GA1.1.2102235624.1707488286&semt=sph" />
            <Posts image="https://img.freepik.com/free-photo/young-woman-walking-wooden-path-with-green-rice-field-vang-vieng-laos_335224-1258.jpg?size=626&ext=jpg&ga=GA1.1.2102235624.1707488286&semt=sph" />
        </Box>
    )
}

export default Feed
