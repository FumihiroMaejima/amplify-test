import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { ContentTexts } from '@/components/modules/about/ContentTexts'
import { PartsLabelHeader } from '@/components/parts/PartsLabelHeader'
import { PartsContentsBoard } from '@/components/parts/PartsContentsBoard'

export const About: React.VFC = () => {
  return (
    <div className="page-container page-container__mx-auto">
      <h1 className="page-header">About</h1>

      <PartsContentsBoard>
        <ContentTexts />
      </PartsContentsBoard>

      <div>
        <PartsLabelHeader text="label header" color="blue" />
        <PartsContentsBoard>
          <PartsLabelHeader text="Slot label header" color="blue" />
        </PartsContentsBoard>
        <p>Hello Home!</p>
      </div>
      <div className="">
        <Link to={`/`}>Go To Home</Link>
      </div>
    </div>
  )
}

export default About
