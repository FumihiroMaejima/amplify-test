import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PartsSimpleButton } from '@/components/parts/button/PartsSimpleButton'
import { PartsLabelHeading } from '@/components/parts/heading/PartsLabelHeading'
import { PartsSimpleHeading } from '@/components/parts/heading/PartsSimpleHeading'

export const Picsum: React.VFC = () => {
  return (
    <div className="page-container page-container__mx-auto">
      <PartsSimpleHeading text="サンプル 画像 ページ" color="dark-grey" />
      <div className="m-x2">
        <PartsLabelHeading text="サブヘッダー1" color="blue" />
        <div className="util-text__contents-area util-border-full-solid-2p__color--dark-grey util-border-radius__round--5p util-color__text--dark-grey">
          <p>test1</p>
          <p>test2</p>
          <p>test3</p>
        </div>

        <PartsLabelHeading text="サブヘッダー2" color="red" />
        <div className="util-text__contents-area util-border-full-solid-2p__color--dark-grey util-border-radius__round--5p util-color__text--dark-grey">
          <p>test1</p>
          <p>test2</p>
          <p>test3</p>
        </div>

        <PartsLabelHeading text="サブヘッダー3" color="green" />
        <div className="util-text__contents-area util-border-full-solid-2p__color--dark-grey util-border-radius__round--5p util-color__text--dark-grey">
          <p>test1</p>
          <p>test2</p>
          <p>test3</p>
        </div>

        <PartsLabelHeading text="サブヘッダーTest" color="green" />
        <div className="util-text__contents-area util-border-full-solid-2p__color--dark-grey util-border-radius__round--5p util-color__text--dark-grey">
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt="sample image"
          ></img>
        </div>
        <img
          src="https://picsum.photos/id/237/200/300"
          alt="sample image"
        ></img>
      </div>

      <div className="">
        <Link to={`/`}>Go To Home</Link>
      </div>
    </div>
  )
}

export default Picsum
