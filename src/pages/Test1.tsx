import React, { MouseEventHandler, useState } from 'react'
import { Link } from 'react-router-dom'
import { PartsSimpleButton } from '@/components/parts/button/PartsSimpleButton'
import { PartsLabelHeading } from '@/components/parts/heading/PartsLabelHeading'
import { PartsSimpleHeading } from '@/components/parts/heading/PartsSimpleHeading'
import { PartsCircleLoading } from '@/components/parts/PartsCircleLoading'
import { PartsSimpleModal } from '@/components/parts/PartsSimpleModal'

export const Test1: React.VFC = () => {
  const baseImageHost = 'https://picsum.photos/'

  // let testOpenValue = false
  /* const testClickHandler: MouseEventHandler<HTMLButtonElement> = (
    event: MouseEvent<HTMLButtonElement>
  ): void => {
    // console.log('click event: ', JSON.stringify(event, null, 2))
    console.log('click event befor: ', JSON.stringify(testOpenValue, null, 2))
    testOpenValue = true
    console.log(
      'click event after: ',
      JSON.stringify(testOpenValue, null, 2)
    )
  } */

  const [testval, setTest] = useState(false)
  const testClickHandler: MouseEventHandler<HTMLButtonElement> = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setTest(!testval)
  }

  return (
    <div className="page-container page-container__mx-auto">
      {/* <PartsCircleLoading /> */}
      <PartsSimpleModal isOpen={testval} />
      <PartsSimpleHeading text="サンプル 画像 ページ" color="dark-grey" />
      <div className="m-x2">
        <PartsLabelHeading text="サブヘッダー1" color="blue" />
        <div className="util-text__contents-area util-border-full-solid-2p__color--dark-grey util-border-radius__round--5p util-color__text--dark-grey">
          <p>test1</p>
          <p>test2</p>
          <p>test3</p>
        </div>

        <div className="util-text__contents-area util-border-full-solid-2p__color--dark-grey util-border-radius__round--5p util-color__text--dark-grey">
          <PartsSimpleButton text="blue" color="blue" />
          <button onClick={testClickHandler}>test button</button>
        </div>

        <PartsLabelHeading text="サンプル画像 200px * 200px" color="green" />
        <div className="util-text__contents-area util-border-full-solid-2p__color--dark-grey util-border-radius__round--5p util-color__text--dark-grey">
          {/* <img src={`${baseImageHost}id/290/200/200`} alt="sample image"></img> */}
          <img src={`${baseImageHost}id/292/200/200`} alt="sample image"></img>
        </div>
      </div>

      <div className="">
        <Link to={`/`}>Go To Home</Link>
      </div>
    </div>
  )
}

export default Test1
