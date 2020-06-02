import { styleMap } from 'treat'
import * as O from 'fp-ts/es6/Option'
import * as R from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty, mapToResponsive } from './utils'

export const width = styleMap((theme) =>
  pipe(
    theme.rules.width,
    O.fromNullable,
    O.map(mapToProperty('width')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const widthTablet = styleMap((theme) =>
  pipe(
    theme.rules.width,
    O.fromNullable,
    O.map(mapToProperty('width')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const widthDesktop = styleMap((theme) =>
  pipe(
    theme.rules.width,
    O.fromNullable,
    O.map(mapToProperty('width')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const widthDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.width,
    O.fromNullable,
    O.map(mapToProperty('width')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const maxWidth = styleMap((theme) =>
  pipe(
    theme.rules.width,
    O.fromNullable,
    O.map(mapToProperty('maxWidth')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const maxWidthTablet = styleMap((theme) =>
  pipe(
    theme.rules.width,
    O.fromNullable,
    O.map(mapToProperty('maxWidth')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const maxWidthDesktop = styleMap((theme) =>
  pipe(
    theme.rules.width,
    O.fromNullable,
    O.map(mapToProperty('maxWidth')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const maxWidthDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.width,
    O.fromNullable,
    O.map(mapToProperty('maxWidth')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const height = styleMap((theme) =>
  pipe(
    theme.rules.height,
    O.fromNullable,
    O.map(mapToProperty('height')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const heightTablet = styleMap((theme) =>
  pipe(
    theme.rules.height,
    O.fromNullable,
    O.map(mapToProperty('height')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const heightDesktop = styleMap((theme) =>
  pipe(
    theme.rules.height,
    O.fromNullable,
    O.map(mapToProperty('height')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const heightDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.height,
    O.fromNullable,
    O.map(mapToProperty('height')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const display = styleMap((theme) =>
  pipe(
    theme.rules.display,
    O.fromNullable,
    O.map(mapToProperty('display')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const displayTablet = styleMap((theme) =>
  pipe(
    theme.rules.display,
    O.fromNullable,
    O.map(mapToProperty('display')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const displayDesktop = styleMap((theme) =>
  pipe(
    theme.rules.display,
    O.fromNullable,
    O.map(mapToProperty('display')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const displayDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.display,
    O.fromNullable,
    O.map(mapToProperty('display')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const overflow = styleMap((theme) =>
  pipe(
    theme.rules.overflow,
    O.fromNullable,
    O.map(mapToProperty('overflow')),
    O.getOrElseW(() => R.empty),
  ),
)
export const overflowX = styleMap((theme) =>
  pipe(
    theme.rules.overflow,
    O.fromNullable,
    O.map(mapToProperty('overflowX')),
    O.getOrElseW(() => R.empty),
  ),
)
export const overflowY = styleMap((theme) =>
  pipe(
    theme.rules.overflow,
    O.fromNullable,
    O.map(mapToProperty('overflowY')),
    O.getOrElseW(() => R.empty),
  ),
)

export const position = styleMap((theme) =>
  pipe(
    theme.rules.position,
    O.fromNullable,
    O.map(mapToProperty('position')),
    O.getOrElseW(() => R.empty),
  ),
)

export const zIndex = styleMap((theme) =>
  pipe(
    theme.rules.zIndex,
    O.fromNullable,
    O.map(mapToProperty('zIndex')),
    O.getOrElseW(() => R.empty),
  ),
)
