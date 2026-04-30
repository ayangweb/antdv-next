import { describe, expect, it } from 'vitest'
import { reactive } from 'vue'
import Form, { FormItem } from '..'
import { mount } from '/@tests/utils'

describe('form item dom prop collision', () => {
  it('does not throw when name is "tagName"', () => {
    const model = reactive({ tagName: '' })

    expect(() => {
      const wrapper = mount(() => (
        <Form model={model}>
          <FormItem name="tagName" label="tagName">
            <input value={model.tagName} />
          </FormItem>
        </Form>
      ))
      wrapper.unmount()
    }).not.toThrow()
  })

  it('does not throw when name is "id"', () => {
    const model = reactive({ id: '' })

    expect(() => {
      const wrapper = mount(() => (
        <Form model={model}>
          <FormItem name="id" label="id">
            <input value={model.id} />
          </FormItem>
        </Form>
      ))
      wrapper.unmount()
    }).not.toThrow()
  })

  it('does not throw when name is "hidden"', () => {
    const model = reactive({ hidden: '' })

    expect(() => {
      const wrapper = mount(() => (
        <Form model={model}>
          <FormItem name="hidden" label="hidden">
            <input value={model.hidden} />
          </FormItem>
        </Form>
      ))
      wrapper.unmount()
    }).not.toThrow()
  })

  it('does not spread FormItem-specific props onto the row DOM element', () => {
    const model = reactive({ tagName: '' })

    const wrapper = mount(() => (
      <Form model={model}>
        <FormItem name="tagName" label="tagName" rules={[{ required: true }]}>
          <input value={model.tagName} />
        </FormItem>
      </Form>
    ))

    // The row element should not have "name" or "rules" attributes set on it
    const row = wrapper.find('.ant-row')
    expect(row.attributes('name')).toBeUndefined()
    expect(row.attributes('rules')).toBeUndefined()

    wrapper.unmount()
  })
})
