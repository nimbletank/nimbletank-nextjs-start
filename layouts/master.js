import Link from 'next/link'
import Head from 'next/head'
import { injectGlobal } from 'emotion'
import { theme } from '../theme'
import globalStyles from '../theme/globalStyles'
import { ThemeProvider } from 'emotion-theming'

injectGlobal`
  ${globalStyles}
`

export default ({ children, title = 'This is the default title' }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      {children}

    </div>
  </ThemeProvider>
)
