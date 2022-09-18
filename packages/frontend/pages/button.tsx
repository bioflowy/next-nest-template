import React from 'react'
import { Layout } from '../components/Layout'
import {Button,Group} from '@mantine/core'
const ButtonDemo = () => {
  return (
    <Layout title="button">
      <Group position='center'>
        <Button>Press</Button>
      </Group>
    </Layout>
  )
}

export default ButtonDemo