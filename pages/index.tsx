import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Navbar, Text, Button, Grid, Col } from "@nextui-org/react";
import InfoCard from '../components/InfoCard';

const Home: NextPage = () => {
  return (
    <Container>
      {/* Navbar */}
      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Text b color="inherit">
            learn
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn='md'>
          <Navbar.Link href='#'>Home</Navbar.Link>
          <Navbar.Link href='#'>Contact</Navbar.Link>
          <Navbar.Link href='#'>About </Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          <Navbar.Link href='#'>Login</Navbar.Link>
          <Navbar.Item>
            <Button auto flat href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>

      </Navbar>
      {/* Jumborton */}
      <Grid.Container justify="center" css={{ "height": "500px", "backgroundImage": "url(https://littlevisuals.co/images/i.o.jpg)" }}>
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{ "width": "100%" }}>
            <Text weight={"bold"} size={70} css={{ "textAlign": "centre" }}>The Education Platform</Text>
            <Text weight={"bold"} size={70} css={{ "textAlign": "centre" }}>of the Future  </Text>
            <Button size="md" shadow color="gradient" css={{ "width": "100%", "marginTop": "10px" }}>Join For Free</Button>
          </Col>
        </Grid>
      </Grid.Container>
      {/* 3 displaying Product Card */}
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <InfoCard
            label='Course'
            title='Learn Next.js'
            imageUrl='https://littlevisuals.co/images/red_dawn.jpg'
            studentCount='3,500'
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label='Course'
            title='Learn Next.js'
            imageUrl='https://littlevisuals.co/images/sunset.jpg'
            studentCount='3,500'
          />
        </Grid>

        <Grid xs={12} sm={4}>
          <InfoCard
            label='Course'
            title='Learn Next.js'
            imageUrl='https://littlevisuals.co/images/tail.jpg'
            studentCount='3,500'
          />
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <InfoCard
            label='Course'
            title='Learn Next.js'
            imageUrl='https://littlevisuals.co/images/red_dawn.jpg'
            studentCount='3,500'
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label='Course'
            title='Learn Next.js'
            imageUrl='https://littlevisuals.co/images/sunset.jpg'
            studentCount='3,500'
          />
        </Grid>

        <Grid xs={12} sm={4}>
          <InfoCard
            label='Course'
            title='Learn Next.js'
            imageUrl='https://littlevisuals.co/images/tail.jpg'
            studentCount='3,500'
          />
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <InfoCard
            label='Course'
            title='Learn Next.js'
            imageUrl='https://littlevisuals.co/images/red_dawn.jpg'
            studentCount='3,500'
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label='Course'
            title='Learn Next.js'
            imageUrl='https://littlevisuals.co/images/sunset.jpg'
            studentCount='3,500'
          />
        </Grid>

        <Grid xs={12} sm={4}>
          <InfoCard
            label='Course'
            title='Learn Next.js'
            imageUrl='https://littlevisuals.co/images/tail.jpg'
            studentCount='3,500'
          />
        </Grid>
      </Grid.Container>
   

    </Container>
  )
}

export default Home
