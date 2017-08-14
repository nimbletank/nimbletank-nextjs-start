import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import Car from '../svg/car.svg'

export default () =>
  <div>
    <Head>
      <title>My page title</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <p>Hello world!</p>
    <div>
      Click <span onClick={() => Router.push('/about')}>here</span> to read more
    </div>
    <Car />
    <style jsx>{`
      p {
        color: red;
      }
    `}</style>
  </div>
