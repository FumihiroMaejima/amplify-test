import React from 'react'

/* type Props = {
  open: boolean
} */

export const PartsModal: React.VFC = () => {
  return (
    <div className="parts-modal">
      <div className="parts-modal__dialog">
        <div className="parts-modal__content">
          <h1>modal header</h1>
          <p>test 1234 modal content!</p>
          <button className="parts-modal__close">
            <svg className="" viewBox="0 0 24 24">
              <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
              <path d="M0 0h24v24h-24z" fill="none" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PartsModal
