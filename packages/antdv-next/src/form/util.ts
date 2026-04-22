import type { ValidateStatus } from './FormItem'

import type { InternalNamePath, Meta } from './types'
import { cloneDeep } from 'es-toolkit'

// form item name black list. in form, you can use form.id get the form item element.
// use object hasOwnProperty will get better performance if black list is longer.
//
// HTMLFormElement supports `[LegacyOverrideBuiltIns]`, so a form control's
// `id` (or `name`) shadows built-in properties on the form element. e.g. with
// `<input id="tagName">` inside `<form>`, `form.tagName` returns the matched
// input element instead of the string `"FORM"`. Vue's runtime-dom calls
// `el.tagName.includes('-')` during prop patching, which then throws
// `TypeError: el.tagName.includes is not a function`.
//
// To avoid this, we prefix any field id whose name collides with the
// DOM/Node/Element properties that the renderer is known to read on the
// underlying `<form>` element during patching.
const formItemNameBlackList = [
  'tagName',
  'nodeName',
  'nodeType',
  'nodeValue',
  'parentNode',
  'parentElement',
  'previousSibling',
  'nextSibling',
  'firstChild',
  'lastChild',
  'childNodes',
  'children',
  'ownerDocument',
  'attributes',
  'namespaceURI',
]

// default form item id prefix.
const defaultItemNamePrefixCls: string = 'form_item'

export function toArray<T>(candidate?: T | T[] | false): T[] {
  if (candidate === undefined || candidate === false) {
    return []
  }
  return Array.isArray(candidate) ? candidate : [candidate]
}

export function getFieldId(namePath: InternalNamePath, formName?: string): string | undefined {
  if (!namePath.length) {
    return undefined
  }

  const mergedId = namePath.join('_')

  if (formName) {
    return `${formName}_${mergedId}`
  }

  const isIllegalName = formItemNameBlackList.includes(mergedId)

  return isIllegalName ? `${defaultItemNamePrefixCls}_${mergedId}` : mergedId
}

/**
 * Get merged status by meta or passed `validateStatus`.
 */
export function getStatus<DefaultValue>(
  errors: any[],
  warnings: any[],
  meta: Meta,
  defaultValidateStatus: ValidateStatus | DefaultValue,
  hasFeedback?: boolean,
  validateStatus?: ValidateStatus,
): ValidateStatus | DefaultValue {
  let status = defaultValidateStatus

  if (validateStatus !== undefined) {
    status = validateStatus
  }
  else if (meta.validating) {
    status = 'validating'
  }
  else if (errors.length) {
    status = 'error'
  }
  else if (warnings.length) {
    status = 'warning'
  }
  else if (meta.touched || (hasFeedback && meta.validated)) {
    // success feedback should display when pass hasFeedback prop and current value is valid value
    status = 'success'
  }
  return status
}

export function initialValueFormat(value: any) {
  if (value === undefined || value === null || value === '') {
    return value
  }
  if (Array.isArray(value) || typeof value === 'object') {
    return cloneDeep(value)
  }
  return value
}
