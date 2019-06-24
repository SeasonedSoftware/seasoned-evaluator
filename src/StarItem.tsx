import React from 'react'
import get from 'lodash/get'
import { Star, StarBorder, StarHalf } from '@material-ui/icons'
import { PossibleNumbers, BaseProps } from './typeDeclarations'
import { ratingIconType } from './utils'

interface ItemProps extends BaseProps {
  index: PossibleNumbers
  chosen: PossibleNumbers
  hovered: PossibleNumbers
  setChosen: (t: 0 | PossibleNumbers) => void
  setHovered: (t: number) => void
}

export const StarItem = ({
  index,
  average,
  setChosen,
  setHovered,
  iconEmpty,
  iconHalf,
  iconFull,
  hovered,
  chosen,
  disabled,
}: ItemProps) => {
  const onMouseEnter = () => setHovered && setHovered(index)
  const onMouseLeave = () => setHovered && setHovered(0)
  const onClick = () => setChosen && setChosen(chosen === index ? 0 : index)
  const isChosen = index <= chosen || (index <= hovered && !disabled)
  const isTransparent = disabled && !isChosen
  const getIcon = (type: 'full' | 'empty' | 'half') =>
    get({ full: iconFull, half: iconHalf, empty: iconEmpty }, type, iconEmpty)!
  return typeof average === 'number' ? (
    getIcon(ratingIconType(index, average))
  ) : (
    <span
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{ opacity: isTransparent ? 0.6 : 1 }}
    >
      {isChosen ? getIcon('full') : getIcon('empty')}
    </span>
  )
}

StarItem.defaultProps = {
  iconEmpty: <StarBorder color="secondary" />,
  iconHalf: <StarHalf color="secondary" />,
  iconFull: <Star color="secondary" />,
}
