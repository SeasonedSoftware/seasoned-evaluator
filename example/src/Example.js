import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
} from '@material-ui/core'
import { Favorite, FavoriteBorder } from '@material-ui/icons'

import Evaluator from 'seasoned-evaluator'

const Example = () => {
  const [value, setValue] = useState('')
  const [favorite, setFavorite] = useState(0)
  const changeFavorite = ({ rating }) => {
    setFavorite(rating)
  }
  return (
    <>
      <Card elevation={5} className="rating">
        <CardHeader title="Past reviews" />
        <CardContent>
          <Evaluator disabled length={10} initialRating={8.3} />
        </CardContent>
        <SyntaxHighlighter language="javascript" style={prism}>
          {`
import Evaluator from 'seasoned-evaluator'

// MyComponent
<Evaluator disabled length={10} initialRating={8.3} />
          `}
        </SyntaxHighlighter>
      </Card>
      <Card elevation={5} className="rating">
        <CardHeader title="Rate" />
        <CardContent>
          <Evaluator
            length={3}
            iconEmpty={<FavoriteBorder color="secondary" />}
            iconFull={<Favorite color="secondary" />}
            disabled={!!favorite}
            onChange={changeFavorite}
          />
        </CardContent>
        <SyntaxHighlighter language="javascript" style={prism}>
          {`
import Evaluator from 'seasoned-evaluator'

// MyComponent
const [favorite, setFavorite] = useState(0)
const changeFavorite = ({ rating }) => {
  setFavorite(rating)
}
return (
  <Evaluator
    length={3}
    iconEmpty={<FavoriteBorder color="secondary" />}
    iconFull={<Favorite color="secondary" />}
    disabled={!!favorite}
    onChange={changeFavorite}
  />
)
          `}
        </SyntaxHighlighter>
      </Card>
      <Card elevation={5} className="rating">
        <CardHeader title="Like it!" />
        <CardContent>
          <Evaluator
            length={1}
            iconEmpty={
              <FavoriteBorder style={{ fontSize: 50 }} color="secondary" />
            }
            iconFull={<Favorite style={{ fontSize: 50 }} color="secondary" />}
            onChange={() => {}}
          />
        </CardContent>
        <SyntaxHighlighter language="javascript" style={prism}>
          {`
import Evaluator from 'seasoned-evaluator'

// MyComponent
<Evaluator
  length={1}
  iconEmpty={<FavoriteBorder style={{ fontSize: 50 }} />}
  iconFull={<Favorite style={{ fontSize: 50 }} />}
  onChange={values => tellBackendThatILike(!!values.rating)}
/>
          `}
        </SyntaxHighlighter>
      </Card>
      <Card elevation={5}>
        <CardHeader title="Rate and review" />
        <CardContent>
          <Evaluator
            subjects={[
              'Overral',
              { name: 'Sound', length: 3, initial: 2.4 },
              { name: 'Drinks', title: 'Soft Drinks' },
            ]}
            commentLabel="Review"
            onChange={setValue}
            enableComment
          />
          <Divider />
          <Typography variant="body2">{JSON.stringify(value)}</Typography>
        </CardContent>
        <SyntaxHighlighter language="javascript" style={prism}>
          {`
import Evaluator from 'seasoned-evaluator'

// MyComponent
const [value, setValue] = useState('')
return (
  <>
    <Evaluator
      subjects={[
        'Overral',
        { name: 'Sound', length: 3, initial: 2.4 },
        { name: 'Drinks', title: 'Soft Drinks', initial: 4 },
      ]}
      commentLabel="Review"
      onChange={setValue}
    />
    {JSON.stringify(value)}
  </>
)
          `}
        </SyntaxHighlighter>
      </Card>
    </>
  )
}

export default Example
