import React from 'react'
import { OptionalEventProperties, createRenderer } from 'react-dom/test-utils'
import { render } from '@testing-library/react'
import { GlobalFooter } from '@/components/_global/GlobalFooter'

import 'jest'
// import { shallowMount } from '@types/jest'

describe('GlobalFooter.vue', () => {
  it('test message', () => {
    /* const renderResult = render(<GlobalFooter />)
    expect(renderResult.innerHTML).toBe('hoge') */
    const msg = 'new message'
    const wrapper = GlobalFooter
    createRenderer()
    expect(wrapper.name).match('GlobalFooter')
  })
})
