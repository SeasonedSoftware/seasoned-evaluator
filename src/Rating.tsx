import React, { useState } from 'react'
import times from 'lodash/times'
import { InputLabel } from '@material-ui/core'
import { formatSubject } from './utils'
import { StarItem } from './StarItem'
import {
  Subject,
  PossibleNumbers,
  SubjectObject,
  BaseProps,
} from './typeDeclarations'

interface RatingProps extends BaseProps {
  subject: Subject
  onChange: (a: string, b: 0 | PossibleNumbers) => void
}
const Rating = ({
  length = 5,
  onChange,
  subject,
  ...props
}: RatingProps): JSX.Element => {
  const [hovered, setHovered] = useState(0)
  const [chosen, setChosen] = useState(0)

  const data: SubjectObject = formatSubject(subject, length)

  const onChoice = (value: 0 | PossibleNumbers) => {
    if (!props.disabled) {
      setChosen(value)
      onChange(data.name || 'rating', value)
    }
  }

  return (
    <div>
      {data.title && <InputLabel>{data.title}</InputLabel>}
      {times(data.length!, (index: number) => (
        <StarItem
          {...props}
          key={`rating=${index}`}
          index={(index + 1) as PossibleNumbers}
          setChosen={onChoice}
          setHovered={setHovered}
          hovered={hovered as PossibleNumbers}
          chosen={chosen as PossibleNumbers}
        />
      ))}
    </div>
  )
}

export default Rating
