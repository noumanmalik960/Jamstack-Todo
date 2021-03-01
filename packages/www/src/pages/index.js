import React from 'react'
import { Container, Heading, Button, Flex } from 'theme-ui'
const Index = () => {
  return (
    <Container>
      <Flex sx={{ flexDirection: 'column' }}>
        <Heading as="h1" sx={{ p: 10 }}>Add your Todo to track your tasks!</Heading>
        <Button onClick={() => alert("clicked")}>Login</Button>
      </Flex>
    </Container>
  )
}

export default Index
