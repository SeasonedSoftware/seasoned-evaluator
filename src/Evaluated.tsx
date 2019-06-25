import React from 'react'
import Rating from './Rating'
import { BaseProps } from './typeDeclarations'

interface EvaluatedProps extends BaseProps {
  initialRating: number
  showinitialRating?: boolean
}

export const Evaluated = ({
  showinitialRating,
  ...props
}: EvaluatedProps): JSX.Element => {
  return <Rating {...props} onChange={() => {}} subject="" disabled />
}
