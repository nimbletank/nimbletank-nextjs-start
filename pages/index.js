import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import MasterLayout from '../layouts/master'
import styled from 'react-emotion'

const SiteContainer = styled('div')`
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
`

export default () => (
  <MasterLayout>
    <SiteContainer>
    </SiteContainer>
  </MasterLayout>
)
