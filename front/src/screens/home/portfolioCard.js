import React from 'react'

import {Card, Button, Badge} from 'react-bootstrap'

export default function PortfolioCard(){
  const sample_img_src = 'https://dqdjl38y4xiob.cloudfront.net/assets/matchbox-logo-header-c0efd950a90b442736a9a7e88a117c260e627b7309618d9ce45f4c97435bbc21.png'
  const text_info = {
    title: 'ポートフォリオのタイトル',
    summary: 'ポートフォリオのサマリー',
    tags: ['React','AWS','Dynamo']
  }
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sample_img_src} />
      <Card.Body>
        <Card.Title>{text_info.title}</Card.Title>
        <Card.Text>
          {text_info.summary}
        </Card.Text>
        {text_info.tags.map((tag) => {
          return <Badge variant='info'>{tag}</Badge>
        })}
        <Button variant="primary">詳細</Button>
      </Card.Body>
    </Card>
  )
}