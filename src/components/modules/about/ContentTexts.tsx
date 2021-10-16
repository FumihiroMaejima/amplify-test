import React from 'react'
import { PartsLabelHeader } from '@/components/parts/PartsLabelHeader'
import { PartsTextContens } from '@/components/parts/PartsTextContens'
import { appConfig } from '@/config/data'
import { IAppConfig } from '@/types'

/* type Props = {
  children: ReactElement
} */

export const ContentTexts: React.VFC = () => {
  return (
    <div className="content-texts">
      <PartsLabelHeader text="このWebサイトについて" color="blue" />
      <PartsTextContens>
        <div
          className="page-text-contents__area"
          dangerouslySetInnerHTML={{ __html: appConfig.aboutMessage.main }}
        ></div>
      </PartsTextContens>

      <PartsLabelHeader text="このサイトを作った人" color="blue" />
      <PartsTextContens>
        <div
          className="page-text-contents__area"
          dangerouslySetInnerHTML={{ __html: appConfig.aboutMessage.author }}
        ></div>
      </PartsTextContens>
      <PartsLabelHeader text="お問合せについて" color="blue" />
      <PartsTextContens>
        <div
          className="page-text-contents__area"
          dangerouslySetInnerHTML={{ __html: appConfig.aboutMessage.contact }}
        ></div>
      </PartsTextContens>
    </div>
  )
}

export default ContentTexts
