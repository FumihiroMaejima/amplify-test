import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { ContentTexts } from '@/components/modules/about/ContentTexts'
import { PartsLabelHeader } from '@/components/parts/PartsLabelHeader'
import { PartsLabelTable } from '@/components/parts/PartsLabelTable'
import { PartsContentsBoard } from '@/components/parts/PartsContentsBoard'
import { PartsMessageBoard } from '@/components/parts/PartsMessageBoard'
// import '@/assets/scss/index.scss'

export const Sample: React.VFC = () => {
  return (
    <div className="page-container page-container__mx-auto">
      <h1 className="page-header">About</h1>

      {/* <PartsContentsBoard>
        <PartsLabelHeader text="このWebサイトについて" color="blue" />
      </PartsContentsBoard> */}

      <PartsContentsBoard>
        {/* <PartsLabelHeader text="このWebサイトについて" color="blue" /> */}
        <ContentTexts />
      </PartsContentsBoard>

      <div className="">
        <PartsLabelTable text="label header" color="blue" />
        <p>Hello Home!</p>
      </div>

      <div className="">
        <PartsLabelHeader text="label header" color="blue" />
        <PartsContentsBoard>
          <PartsLabelHeader text="Slot label header" color="blue" />
        </PartsContentsBoard>
        <p>Hello Home!</p>
      </div>
      <div className="">
        <p>Hello Home!</p>
        <PartsMessageBoard>
          <PartsLabelHeader text="Slot label header" color="blue" />
        </PartsMessageBoard>
      </div>
      <div className="">
        <Link to={`/about`}>Go To About</Link>
      </div>
      <div className="">
        <Link to={`/sample`}>Go To Sample</Link>
      </div>
    </div>
  )
}

export default Sample
