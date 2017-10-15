import { ds } from './index'

export default `
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html,
body {
  font-family: ${ds.get('type.fontFamily.system')};
  line-height: 1.4;
  color: ${ds.color('text')};
  font-weight: normal;
}

html {
  background: ${ds.color('bright')};
}
`
