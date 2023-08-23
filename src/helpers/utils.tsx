import reduce from 'lodash/reduce'
import { ElementType } from 'react'

export const combineProviders = (providers: ElementType[]) =>
  // eslint-disable-next-line react/display-name
  reduce(providers, (Combined, Provider) => ({ children }) => (
    <Combined>
      <Provider>{children}</Provider>
    </Combined>
  )) as ElementType
