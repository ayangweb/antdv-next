import { describe, expect, it } from 'vitest'
import { nextTick, reactive } from 'vue'
import Form, { FormItem } from '..'
import Button from '../../button'
import Input from '../../input'
import { mount } from '/@tests/utils'

describe('issue 488: FormItem name conflicting with DOM properties', () => {
  it('renders and submits without TypeError when name is "tagName"', async () => {
    const model = reactive({ tagName: '' })
    const wrapper = mount(() => (
      <Form model={model}>
        <FormItem name="tagName" label="tagName" rules={[{ required: true, message: 'Please input your tagName!' }]}>
          <Input v-model:value={model.tagName} />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    ))
    await nextTick()
    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)
    // The generated id should be prefixed to avoid colliding with the
    // `tagName` built-in property of HTMLFormElement.
    expect(input.attributes('id')).toBe('form_item_tagName')
    await input.setValue('hello')
    await nextTick()
    expect(model.tagName).toBe('hello')
  })
})
