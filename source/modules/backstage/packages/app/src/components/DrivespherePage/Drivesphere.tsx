import {
    Page,
    Header,
    Content,
    ContentHeader,
} from "@backstage/core-components";
import { Grid, Card, CardContent, CardActions, Link } from '@mui/material';
import React from 'react';

export const MyDevToolsPage = () => {
    return (
        <Page themeId="home">
            <Header
                title="Browse Launched Assets"
                subtitle="A list of launched assets that have been deployed on AWS"
                pageTitleOverride="Launched Assets"
            />
            <Content>
                <ContentHeader title="Available Launched Assets" />

                <Grid container spacing={2}>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <h2>GitLab Project Repo</h2>
                            <p>Launch code refactoring</p>
                        </CardContent>
                        <CardActions>
                            <Link href="https://lab1.gitlab-qdev.ai.aws.dev/demos/kanzi-demo#" target="_blank" rel="noopener noreferrer">
                                Search
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>                      
                <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <h2>AWS - GenAI-powered Search</h2>
                                <p>Search for your ADAS scene dataset</p>
                            </CardContent>
                            <CardActions>
                                <Link href="https://d15puwge5ieiuh.cloudfront.net/metadata-scenario" target="_blank" rel="noopener noreferrer">
                                Search
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>                    
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <h2>Genymotion</h2>
                                <p>Link to Running Genymotion instance</p>
                            </CardContent>
                            <CardActions>
                                <Link href="https://54.224.249.196/" target="_blank" rel="noopener noreferrer">
                                Genymotion Virtual Instance
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <h2>Panasonic vSkipGen</h2>
                                <p>Link to Running vSkipGen instance:</p>
                            </CardContent>
                            <CardActions>
                                <Link href="https://54.196.101.23:8443" target="_blank" rel="noopener noreferrer">
                                vSkipGen instance
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Content>
        </Page>
    );
};