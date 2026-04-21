import type { App } from 'vue'
import type { MasonryProps, MasonrySlots } from './Masonry'
import Masonry from './Masonry'

export type { MasonryEmits, MasonryProps, MasonryRef, MasonrySlots } from './Masonry'
export type { MasonryItemType } from './MasonryItem'

interface MasonryComponent {
  new<T = any>(): {
    $props: MasonryProps<T>
    $slots: MasonrySlots<T>
  }
  install: (app: App) => void
}

const _Masonry = Masonry as unknown as MasonryComponent

_Masonry.install = (app: App) => {
  app.component('AMasonry', Masonry)
}

export default _Masonry
