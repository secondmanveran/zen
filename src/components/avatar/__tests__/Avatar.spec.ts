import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Avatar from '../Avatar.vue'

describe('Avatar', () => {
  it('renders without errors', () => {
    const wrapper = mount(Avatar, {
      props: {
        name: 'Joe Jones'
      }
    })

    expect(wrapper).toBeTruthy()
  })
})
