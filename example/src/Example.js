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

import { Evaluator, Evaluated } from 'seasoned-evaluator'

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
          <Evaluated length={10} average={8.3} />
          <SyntaxHighlighter language="javascript" style={prism}>
            {`
import { Evaluated } from 'seasoned-evaluator'

// MyComponent
<Evaluated length={10} average={8.3} />
            `}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      <Card elevation={5} className="rating">
        <CardHeader title="Rate" />
        <CardContent>
          <Evaluator
            length={3}
            iconEmpty={<FavoriteBorder color="secondary" />}
            iconFull={<Favorite color="secondary" />}
            disableComment={true}
            disabled={!!favorite}
            onChange={changeFavorite}
          />
          <SyntaxHighlighter language="javascript" style={prism}>
            {`
import { Evaluator } from 'seasoned-evaluator'

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
    disableComment={true}
    disabled={!!favorite}
    onChange={changeFavorite}
  />
)
            `}
          </SyntaxHighlighter>
        </CardContent>
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
            disableComment={true}
            onChange={() => {}}
          />
          <SyntaxHighlighter language="javascript" style={prism}>
            {`
import { Evaluator } from 'seasoned-evaluator'

// MyComponent
<Evaluator
  length={1}
  iconEmpty={<FavoriteBorder style={{ fontSize: 50 }} />}
  iconFull={<Favorite style={{ fontSize: 50 }} />}
  disableComment={true}
  onChange={values => tellBackendThatILike(!!values.rating)}
/>
            `}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
      <Card elevation={5}>
        <CardHeader title="Rate and review" />
        <CardContent>
          <Evaluator
            subjects={[
              'Overral',
              { name: 'Sound', length: 3 },
              { name: 'Drinks', title: 'Soft Drinks' },
            ]}
            commentLabel="Review"
            onChange={setValue}
          />
          <Divider />
          <Typography variant="body2">{JSON.stringify(value)}</Typography>
          <SyntaxHighlighter language="javascript" style={prism}>
            {`
import { Evaluator } from 'seasoned-evaluator'

// MyComponent
const [value, setValue] = useState('')
return (
  <>
    <Evaluator
      subjects={[
        'Overral',
        { name: 'Sound', length: 3 },
        { name: 'Drinks', title: 'Soft Drinks' },
      ]}
      commentLabel="Review"
      onChange={setValue}
    />
    {JSON.stringify(value)}
  </>
)
            `}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
    </>
  )
}

export default Example
