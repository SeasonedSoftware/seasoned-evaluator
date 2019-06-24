import React, { useState } from 'react'
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
        </CardContent>
      </Card>
      <Card elevation={5} className="rating">
        <CardHeader title="Rate" />
        <CardContent>
          <Evaluator
            length={10}
            iconEmpty={<FavoriteBorder color="secondary" />}
            iconFull={<Favorite color="secondary" />}
            disableComment={true}
            disabled={!!favorite}
            onChange={changeFavorite}
          />
        </CardContent>
      </Card>
      <Card elevation={5} className="rating">
        <CardHeader title="Past reviews" />
        <CardContent>
          <Evaluated length={5} average={3.3} />
        </CardContent>
      </Card>
    </>
  )
}

export default Example
