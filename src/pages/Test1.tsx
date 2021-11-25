import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PartsSimpleButton } from '@/components/parts/button/PartsSimpleButton'
import { PartsLabelHeading } from '@/components/parts/heading/PartsLabelHeading'
import { PartsSimpleHeading } from '@/components/parts/heading/PartsSimpleHeading'
import { PartsCircleLoading } from '@/components/parts/PartsCircleLoading'

export const Test1: React.VFC = () => {
  const baseImageHost = 'https://picsum.photos/'

  return (
    <div className="page-container page-container__mx-auto">
      <PartsCircleLoading />
      <PartsSimpleHeading text="サンプル 画像 ページ" color="dark-grey" />
      <div className="m-x2">
        <PartsLabelHeading text="サブヘッダー1" color="blue" />
        <div className="util-text__contents-area util-border-full-solid-2p__color--dark-grey util-border-radius__round--5p util-color__text--dark-grey">
          <p>test1</p>
          <p>test2</p>
          <p>test3</p>
        </div>

        <PartsLabelHeading text="サンプル画像 200px * 200px" color="green" />
        <div className="util-text__contents-area util-border-full-solid-2p__color--dark-grey util-border-radius__round--5p util-color__text--dark-grey">
          <img src={`${baseImageHost}id/290/200/200`} alt="sample image"></img>
        </div>
      </div>

      <div className="">
        <Link to={`/`}>Go To Home</Link>
      </div>
    </div>
  )
}

export default Test1
