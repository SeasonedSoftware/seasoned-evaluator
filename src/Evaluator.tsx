import React, { useState, ChangeEvent } from 'react'
import map from 'lodash/map'
import { TextField } from '@material-ui/core'
import { initSubjects } from './utils'
import Rating from './Rating'
import { Subject, PossibleNumbers, BaseProps } from './typeDeclarations'

interface EvaluatorProps extends BaseProps {
  onChange: (t: any) => void
  disableComment?: boolean
  commentLabel?: string
}

export const Evaluator = ({
  onChange,
  subjects,
  commentLabel,
  disableComment,
  ...props
}: EvaluatorProps): JSX.Element => {
  const allSubjects = initSubjects(subjects, props.length)
  const [state, setState] = useState(allSubjects)

  const setStatePart = (object: Object) => {
    const newState = { ...state, ...object }
    setState(newState)
    onChange(newState)
  }

  const onChangeRating = (name: string, rating: 0 | PossibleNumbers) => {
    setStatePart({ [name]: rating })
  }

  const updateComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setStatePart({ comment: event.target.value })
  }

  return (
    <>
      {subjects ? (
        map(subjects, (subject: Subject, index: number) => (
          <Rating
            key={index}
            onChange={onChangeRating}
            subject={subject}
            {...props}
          />
        ))
      ) : (
        <Rating onChange={onChangeRating} subject="" {...props} />
      )}
      {disableComment || (
        <TextField
          value={state.comment}
          onChange={updateComment}
          label={commentLabel}
          multiline
          fullWidth
        />
      )}
    </>
  )
}

Evaluator.defaultProps = {
  commentLabel: 'Leave your comment',
  disableComment: false,
  disabled: false,
}
