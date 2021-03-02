import React, { useEffect } from 'react'
import { Container, Heading, Button, Flex } from 'theme-ui'
import netlifyIdentity from 'netlify-identity-widget'

const Index = () => {

  useEffect(() => {
    netlifyIdentity.init({})
  })
  return (
    <Container>
      <Flex sx={{ flexDirection: 'column' }}>
        <Heading as="h1" sx={{ p: 10 }}>Add your Todo to track your tasks!</Heading>
        <Button onClick={() => netlifyIdentity.open()}>Login</Button>
      </Flex>
    </Container>
  )
}

export default Index
