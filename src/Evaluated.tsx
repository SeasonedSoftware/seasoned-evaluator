import React from 'react'
import Rating from './Rating'
import { BaseProps } from './typeDeclarations'

interface EvaluatedProps extends BaseProps {
  average: number
  showAverage?: boolean
}

export const Evaluated = ({
  showAverage,
  ...props
}: EvaluatedProps): JSX.Element => {
  return <Rating {...props} onChange={() => {}} subject="" disabled />
}
