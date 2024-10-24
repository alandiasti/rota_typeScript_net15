import React from 'react'

export default function Post({ params }: {slug:string}) {
  return (
    <div>Post {params.slug}</div>
  )
}
