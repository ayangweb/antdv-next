---
title: Component Changelog
---

## V1.1.1

This release focuses on **improving API parity with Ant Design**, **expanding slot/SFC support for more components**, and **fixing behavior issues across Modal, Menu, Tree, Slider, Switch, Skeleton, and more**. It also adds broader unit test coverage and updates the documentation site.

**✨ Features**

* feat: support SFC item components for Timeline / Descriptions / Breadcrumb, and enhance Menu slot rendering with docs/tests by @aibayanyu20 in [#295](https://github.com/antdv-next/antdv-next/pull/295)
* feat: Form.Item now supports `tooltip` / `help` / `label` / `extra` slots by @aibayanyu20 in [#301](https://github.com/antdv-next/antdv-next/pull/301)
* feat: add `MaskType` by @mengxianghan in [#318](https://github.com/antdv-next/antdv-next/pull/318)
* feat: sync Progress and theme preview behavior with antd by @han1548772930 in [#329](https://github.com/antdv-next/antdv-next/pull/329)
* feat: sync `sizeType` by @aibayanyu20 in [#338](https://github.com/antdv-next/antdv-next/pull/338)

**🐞 Fixes**

* fix(tour): preserve step-level semantic classes in `panelRender` by @shiqkuangsan in [#291](https://github.com/antdv-next/antdv-next/pull/291)
* fix(slider): correct `tabindex` prop name to `tabIndex` by @shiqkuangsan in [#296](https://github.com/antdv-next/antdv-next/pull/296)
* fix: validate Message uses label correctly by @Rascal-Coder in [#305](https://github.com/antdv-next/antdv-next/pull/305)
* fix: fix Menu keyPath order being reversed by @aibayanyu20 in [#311](https://github.com/antdv-next/antdv-next/pull/311)
* fix(modal): fix default blur mode not taking effect and update related description by @mengxianghan in [#314](https://github.com/antdv-next/antdv-next/pull/314)
* fix: fix Tooltip icon rendering by @aibayanyu20 in [#313](https://github.com/antdv-next/antdv-next/pull/313)
* fix(modal): add `KeyboardEvent` support to `onCancel` type by @utianhuan666 in [#324](https://github.com/antdv-next/antdv-next/pull/324)
* fix: fix Form.Item ref inheritance by @aibayanyu20 in [#325](https://github.com/antdv-next/antdv-next/pull/325)
* fix: fix Switch controlled mode by @aibayanyu20 in [#328](https://github.com/antdv-next/antdv-next/pull/328)
* fix: fix Tree `checkedKeys` object handling by @aibayanyu20 in [#333](https://github.com/antdv-next/antdv-next/pull/333)
* fix: fix Segmented motion by @aibayanyu20 in [#334](https://github.com/antdv-next/antdv-next/pull/334)
* fix: fix Skeleton size not taking effect by @aibayanyu20 in [#337](https://github.com/antdv-next/antdv-next/pull/337)

**🧪 Tests**

This release adds unit tests for Tabs, Tour, ColorPicker, cssinjs, Slider, Table, Image, FloatButton, and TimePicker.

* test(tabs): add unit tests by @shiqkuangsan in [#290](https://github.com/antdv-next/antdv-next/pull/290)
* test: add ColorPicker unit tests and cssinjs unit tests by @aibayanyu20 in [#292](https://github.com/antdv-next/antdv-next/pull/292)
* test(tour): add unit tests by @shiqkuangsan in [#294](https://github.com/antdv-next/antdv-next/pull/294)
* test(slider): add unit tests by @shiqkuangsan in [#298](https://github.com/antdv-next/antdv-next/pull/298)
* test(table): add unit tests by @shiqkuangsan in [#302](https://github.com/antdv-next/antdv-next/pull/302)
* test(image): add unit tests by @darkingtail in [#307](https://github.com/antdv-next/antdv-next/pull/307)
* test(float-button): add unit tests by @darkingtail in [#306](https://github.com/antdv-next/antdv-next/pull/306)
* test(time-picker): add unit tests by @shiqkuangsan in [#308](https://github.com/antdv-next/antdv-next/pull/308)

**📝 Documentation**

* docs: add SEO performance improvements by @aibayanyu20 in [#293](https://github.com/antdv-next/antdv-next/pull/293)
* docs(covers): correct the QRCode property name to `QrCode` (camel case) by @utianhuan666 in [#299](https://github.com/antdv-next/antdv-next/pull/299)
* docs: update docs and LLM script by @aibayanyu20 in [#322](https://github.com/antdv-next/antdv-next/pull/322)
* docs(table): add column documentation by @cc-hearts in [#336](https://github.com/antdv-next/antdv-next/pull/336)

**🛠 Refactor & Maintenance**

* chore(cascader): bump version by @cc-hearts in [#304](https://github.com/antdv-next/antdv-next/pull/304)
* fix: remove duplicate `initMotionCommonLeave` function by @utianhuan666 in [#323](https://github.com/antdv-next/antdv-next/pull/323)
* fix(deps): bump `@v-c/select` to `^1.0.17` by @shiqkuangsan in [#326](https://github.com/antdv-next/antdv-next/pull/326)

---

**👏 New Contributors**

Thanks to the following contributor for their first contribution:

* @mengxianghan in [#314](https://github.com/antdv-next/antdv-next/pull/314)

**Full Changelog**
https://github.com/antdv-next/antdv-next/compare/antdv-next@1.1.0...antdv-next@1.1.1


## V1.1.0

This release focuses on **syncing with antd v6.3.1**, **fixing component behavior and accessibility issues**, and **expanding unit test coverage** across more components. It also includes documentation updates, CI/script maintenance, and sponsor/readme improvements.

**✨ Features**

* feat(sponsor): optimize the style of the custom amount input box by @ffgenius in [#250](https://github.com/antdv-next/antdv-next/pull/250)
* feat: sync antd 6.3.1 by @ffgenius in [#269](https://github.com/antdv-next/antdv-next/pull/269)
* feat(readme): change contributor image to Open Collective link by @ffgenius in [#274](https://github.com/antdv-next/antdv-next/pull/274)
* feat: perf prop types by @aibayanyu20 in [#278](https://github.com/antdv-next/antdv-next/pull/278)

**🐞 Fixes**

* fix(cascader): add missing deprecated warning for `popupClassName` by @darkingtail in [#242](https://github.com/antdv-next/antdv-next/pull/242)
* fix(collapse): use `prefixCls.value` in CollapsePanel no-arrow class by @shiqkuangsan in [#244](https://github.com/antdv-next/antdv-next/pull/244)
* fix: fix form directive not effect & add test unit by @aibayanyu20 in [#243](https://github.com/antdv-next/antdv-next/pull/243)
* fix(tree): relax `treeData` type to accept custom data nodes by @darkingtail in [#260](https://github.com/antdv-next/antdv-next/pull/260)
* fix(pagination): fix change event trigger by @cc-hearts in [#265](https://github.com/antdv-next/antdv-next/pull/265)
* fix(image): cover slot not rendered when preview mask is configured by @shiqkuangsan in [#272](https://github.com/antdv-next/antdv-next/pull/272)
* fix(skeleton): synchronise the DOM element styles of Skeleton by @utianhuan666 in [#258](https://github.com/antdv-next/antdv-next/pull/258)
* fix(checkbox): support controlled state for checkbox by @cc-hearts in [#275](https://github.com/antdv-next/antdv-next/pull/275)
* fix(notification): correct expose key mismatch for `classNames` by @shiqkuangsan in [#279](https://github.com/antdv-next/antdv-next/pull/279)
* fix(a11y): apply `prefers-reduced-motion` to Radio and Segmented by @darkingtail in [#281](https://github.com/antdv-next/antdv-next/pull/281)
* fix(auto-complete): fix default display of custom input placeholder by @cc-hearts in [#283](https://github.com/antdv-next/antdv-next/pull/283)
* fix(tabs): fix dead onPrevClick/onNextClick deprecation warning by @shiqkuangsan in [#287](https://github.com/antdv-next/antdv-next/pull/287)
* fix(tabs): fix `renderTabBar` prop variable shadowing by @shiqkuangsan in [#286](https://github.com/antdv-next/antdv-next/pull/286)
* fix: fix slick height by @aibayanyu20 in [#288](https://github.com/antdv-next/antdv-next/pull/288)
* fix: fix table loading & no data empty state by @aibayanyu20 in [#289](https://github.com/antdv-next/antdv-next/pull/289)

**🧪 Tests**

This release adds unit tests for DatePicker, Progress, Collapse, Popconfirm, Drawer, Message, Dropdown, Mentions, and Notification.

* test(date-picker): add unit test by @aibayanyu20 in [#233](https://github.com/antdv-next/antdv-next/pull/233)
* test(progress): add unit tests for Progress component by @darkingtail in [#246](https://github.com/antdv-next/antdv-next/pull/246)
* test(collapse): add unit tests for Collapse component by @shiqkuangsan in [#247](https://github.com/antdv-next/antdv-next/pull/247)
* test(popconfirm): add unit tests for Popconfirm component by @darkingtail in [#248](https://github.com/antdv-next/antdv-next/pull/248)
* test(drawer): add unit tests for Drawer component by @darkingtail in [#252](https://github.com/antdv-next/antdv-next/pull/252)
* test(message): add unit tests for Message component by @darkingtail in [#263](https://github.com/antdv-next/antdv-next/pull/263)
* test(dropdown): add unit tests for Dropdown component by @shiqkuangsan in [#266](https://github.com/antdv-next/antdv-next/pull/266)
* test(mentions): add unit tests for Mentions component by @shiqkuangsan in [#270](https://github.com/antdv-next/antdv-next/pull/270)
* test(notification): add unit tests for Notification component by @shiqkuangsan in [#284](https://github.com/antdv-next/antdv-next/pull/284)

**📝 Documentation**

* fix(docs): adjust scrollbar width styling for modal lock by @han1548772930 in [#245](https://github.com/antdv-next/antdv-next/pull/245)
* docs: add examples for browser import by @selicens in [#255](https://github.com/antdv-next/antdv-next/pull/255)
* docs(typography): fix formatting of `enterIcon` prop description by @wujighostking in [#262](https://github.com/antdv-next/antdv-next/pull/262)
* docs(cascader): supplement semantic DOM and add unit tests by @ffgenius in [#261](https://github.com/antdv-next/antdv-next/pull/261)
* chore(docs): add sponsor qrcode for shiqkuangsan by @shiqkuangsan in [#271](https://github.com/antdv-next/antdv-next/pull/271)

**🛠 Refactor & Maintenance**

* ci: change docs scripts generate by @aibayanyu20 in [#249](https://github.com/antdv-next/antdv-next/pull/249)
* chore(select/image/util): bump version by @cc-hearts in [#277](https://github.com/antdv-next/antdv-next/pull/277)

---

**👏 New Contributors**

Thanks to the following contributors for their first contributions:

* @han1548772930 in [#245](https://github.com/antdv-next/antdv-next/pull/245)
* @utianhuan666 in [#258](https://github.com/antdv-next/antdv-next/pull/258)

**Full Changelog**
https://github.com/antdv-next/antdv-next/compare/antdv-next@1.0.5...antdv-next@1.1.0


## V1.0.5

This release focuses on **fixing component interaction and data flow issues**, while also **expanding unit test coverage** for more components. It includes fixes for Tooltip, DatePicker, Autocomplete, Select, Descriptions, and app-level class/style handling.

**🐞 Fixes**

* fix: passive clear of `v-model` value not working by @aibayanyu20 in [#228](https://github.com/antdv-next/antdv-next/pull/228)
* fix(tooltip): fix incorrect position calculation when arrow is displayed by @cc-hearts in [#231](https://github.com/antdv-next/antdv-next/pull/231)
* fix: improve two-way binding and one-way data flow handling by @aibayanyu20 in [#230](https://github.com/antdv-next/antdv-next/pull/230)
* fix: fix app class & style ref deconstruction by @aibayanyu20 in [#232](https://github.com/antdv-next/antdv-next/pull/232)
* fix: Autocomplete input clears automatically when pressing Enter by @aibayanyu20 in [#234](https://github.com/antdv-next/antdv-next/pull/234)
* fix(descriptions): render `id` prop on root element by @shiqkuangsan in [#236](https://github.com/antdv-next/antdv-next/pull/236)
* fix: DatePicker manual clear not working by @aibayanyu20 in [#237](https://github.com/antdv-next/antdv-next/pull/237)
* fix: fix Select `showSearchConfig` by @aibayanyu20 in [#240](https://github.com/antdv-next/antdv-next/pull/240)

**🧪 Tests**

This release adds unit tests for Splitter, Steps, and Popover to improve regression protection.

* test(splitter): add unit test by @cc-hearts in [#227](https://github.com/antdv-next/antdv-next/pull/227)
* test(steps): add unit tests by @z-kunf in [#222](https://github.com/antdv-next/antdv-next/pull/222)
* test(popover): add unit tests for Popover component by @shiqkuangsan in [#239](https://github.com/antdv-next/antdv-next/pull/239)

---

**👏 New Contributors**

Thanks to the following contributors for their first contributions:

* @z-kunf in [#222](https://github.com/antdv-next/antdv-next/pull/222)

**Full Changelog**
https://github.com/antdv-next/antdv-next/compare/antdv-next@1.0.4...antdv-next@1.0.5


## V1.0.4

This release focuses on **expanding unit test coverage**, **fixing component behavior issues**, and **improving docs/playground tooling**. It also includes style sync updates, project structure refinements, and **improved Nuxt compatibility**.

**✨ Features**

* feat: add ts & js code source by @cc-hearts in [#187](https://github.com/antdv-next/antdv-next/pull/187)
* feat(playground): add playground for debugging by @cc-hearts in [#192](https://github.com/antdv-next/antdv-next/pull/192)
* feat: sync antd style by @aibayanyu20 in [#223](https://github.com/antdv-next/antdv-next/pull/223)
* Nuxt compatibility improvements (cssinjs priority / order attr fix) by @aibayanyu20 in [#217](https://github.com/antdv-next/antdv-next/pull/217)

**🐞 Fixes**

* fix(colorPicker): `arrow` is invalid by @ffgenius in [#182](https://github.com/antdv-next/antdv-next/pull/182)
* fix: resolve `verify-commit.js` failure in git worktrees by @shiqkuangsan in [#193](https://github.com/antdv-next/antdv-next/pull/193)
* fix(config-provider): add missing masonry config to `PASSED_PROPS` by @shiqkuangsan in [#198](https://github.com/antdv-next/antdv-next/pull/198)
* fix(tabs): unresponsive `content` and slot `content` behavior by @ming4762 in [#197](https://github.com/antdv-next/antdv-next/pull/197)
* fix: update `demoTest` path after playground restructure by @shiqkuangsan in [#201](https://github.com/antdv-next/antdv-next/pull/201)
* fix(calendar): use correct `Dayjs` type and `v-model:value` in select demo by @shiqkuangsan in [#202](https://github.com/antdv-next/antdv-next/pull/202)
* fix: fix select hover range by @aibayanyu20 in [#207](https://github.com/antdv-next/antdv-next/pull/207)
* fix(card): emit `update:activeTabKey` and add unit tests by @darkingtail in [#213](https://github.com/antdv-next/antdv-next/pull/213)
* fix(tree-select): avoid duplicate event transmission by @ming4762 in [#210](https://github.com/antdv-next/antdv-next/pull/210)

**🧪 Tests**

This release adds and expands unit tests for multiple components, improving overall test coverage and regression protection.

* test(skeleton): add unit tests by @shiqkuangsan in [#183](https://github.com/antdv-next/antdv-next/pull/183)
* test(typography): add wrapper and semantic tests by @shiqkuangsan in [#194](https://github.com/antdv-next/antdv-next/pull/194)
* test(statistic): add unit tests by @shiqkuangsan in [#191](https://github.com/antdv-next/antdv-next/pull/191)
* test(spin): add unit tests by @shiqkuangsan in [#189](https://github.com/antdv-next/antdv-next/pull/189)
* test(tag): add unit tests by @shiqkuangsan in [#190](https://github.com/antdv-next/antdv-next/pull/190)
* test(masonry): add unit tests by @shiqkuangsan in [#204](https://github.com/antdv-next/antdv-next/pull/204)
* test(timeline): add unit tests by @shiqkuangsan in [#205](https://github.com/antdv-next/antdv-next/pull/205)
* test(tooltip): add tooltip unit test by @cc-hearts in [#211](https://github.com/antdv-next/antdv-next/pull/211)
* test(checkbox): add unit tests for Checkbox and CheckboxGroup by @darkingtail in [#216](https://github.com/antdv-next/antdv-next/pull/216)
* test(cascader): add unit tests for Cascader and CascaderPanel by @darkingtail in [#215](https://github.com/antdv-next/antdv-next/pull/215)
* test(carousel): add unit tests for Carousel by @darkingtail in [#214](https://github.com/antdv-next/antdv-next/pull/214)
* test(grid): add unit tests for Row and Col components by @shiqkuangsan in [#218](https://github.com/antdv-next/antdv-next/pull/218)
* test(radio): add unit tests for Radio, RadioGroup, RadioButton by @shiqkuangsan in [#219](https://github.com/antdv-next/antdv-next/pull/219)
* test(descriptions): add unit tests for Descriptions component by @shiqkuangsan in [#220](https://github.com/antdv-next/antdv-next/pull/220)

**📝 Documentation**

* docs: support layer mode by @aibayanyu20 in [#186](https://github.com/antdv-next/antdv-next/pull/186)
* docs: support sponsor by @aibayanyu20 in [#208](https://github.com/antdv-next/antdv-next/pull/208)

**🛠 Refactor & Maintenance**

* refactor: optimize project structure by @ffgenius in [#195](https://github.com/antdv-next/antdv-next/pull/195)

---

**👏 New Contributors**

Thanks to the following contributors for their first contributions:

* @ming4762 in [#197](https://github.com/antdv-next/antdv-next/pull/197)

**Full Changelog**
https://github.com/antdv-next/antdv-next/compare/antdv-next@1.0.3...antdv-next@1.0.4


## V1.0.3

This release mainly focuses on **improving test coverage, fixing documentation issues, and enhancing overall stability**. It also syncs with antd v6.3.0 and includes performance optimizations for css-in-js.

**✨ Features**

* Sync with **antd v6.3.0** and optimize css-in-js performance (#163)
* SSR support, and add `valueFormat` support for ColorPicker / TimePicker / DatePicker (#177)
* Sync Skeleton component (#171)
* Documentation site now supports custom themes (#166, #178)
* Add unit tests for Avatar and AvatarGroup (#126)

**🐞 Fixes**

* Fix trigger not closing on click (#134)
* Fix hidden cancel button in info/success/warning modals (#167)
* Fix TreeSelect multi-checkbox style issues (#169)
* Fix progress animation overflow (#173)
* Fix inverted responsive collapse logic in Layout Sider (#158, #155)
* Fix eslint config type errors (#142)
* Fix incorrect variable reference (#180)

**🧪 Tests**

This release significantly expands component test coverage and semantic DOM tests, including:

Avatar, Badge, Breadcrumb, Button, Calendar, Divider, Empty, Flex, Input, InputNumber, Layout, QRCode, Rate, Result, Segmented, Space, Switch, Transfer, Tree, TreeSelect, and more.

Related PRs: #128, #130, #136, #137, #140, #143, #145, #147, #148, #151, #154, #156, #159, #160, #161, #162, #172, #175, #176

**📝 Documentation**

* Fix API documentation formatting issues for DatePicker, Select, Upload, Drawer, Image, Anchor, Pagination, and more
* Update breakpoint and collapse callback types in Layout documentation
* Fix Grid documentation syntax
* Fix FloatButton API examples
* Update Button documentation links

Related PRs: #131, #132, #133, #135, #138, #139, #144, #146, #150, #153, #164, #181

---

**👏 New Contributors**

Thanks to the following contributors for their first contributions:

* @Darkingtail
* @shiqkuangsan
* @wujighostking
* @rookie-orange

**Full Changelog**
https://github.com/antdv-next/antdv-next/compare/antdv-next@1.0.2...antdv-next@1.0.3


## V1.0.2 

**Features**

* feat: Sync with Ant Design v6.2.3 by @aibayanyu20 in [#102](https://github.com/antdv-next/antdv-next/pull/102)
* feat: Add `prepare` script by @qianYuanJ in [#109](https://github.com/antdv-next/antdv-next/pull/109)
* docs: Add global search by @aibayanyu20 in [#122](https://github.com/antdv-next/antdv-next/pull/122)

**Bug Fixes**

* fix(input-number): Resolve min/max responsiveness issue and remove console output by @selicens in [#104](https://github.com/antdv-next/antdv-next/pull/104)
* fix: Correct CSS variable calculation error by @ffgenius in [#107](https://github.com/antdv-next/antdv-next/pull/107)
* fix: Restore Vue Language Tools event hints by @aibayanyu20 in [#108](https://github.com/antdv-next/antdv-next/pull/108)
* fix: Fix RangePicker issues by @aibayanyu20 in [#112](https://github.com/antdv-next/antdv-next/pull/112)
* fix(popconfirm): Fix invalid async close behavior when using Promise by @selicens in [#114](https://github.com/antdv-next/antdv-next/pull/114)
* fix: Set default menu title to avoid `null` by @aibayanyu20 in [#125](https://github.com/antdv-next/antdv-next/pull/125)

**Refactor & Maintenance**

* refactor(i18n): Centralize i18n files by @ffgenius in [#116](https://github.com/antdv-next/antdv-next/pull/116)
* chore(i18n): Extract inline locales into centralized files by @ffgenius in [#124](https://github.com/antdv-next/antdv-next/pull/124)
* chore: Update documentation by @yushi0114 in [#111](https://github.com/antdv-next/antdv-next/pull/111)

**Tests**

* test(typography): Add tests by @cc-hearts in [#115](https://github.com/antdv-next/antdv-next/pull/115)
* test(auto-complete): Add unit tests and improve semantic DOM coverage by @ffgenius in [#119](https://github.com/antdv-next/antdv-next/pull/119)
* test(select): Add unit tests and improve semantic DOM coverage by @ffgenius in [#121](https://github.com/antdv-next/antdv-next/pull/121)

**Documentation**

* docs: Fix typo in the Vite usage section by @dzzzzzy in [#118](https://github.com/antdv-next/antdv-next/pull/118)
* fix(docs): Correct typo in the i18n chapter by @dzzzzzy in [#120](https://github.com/antdv-next/antdv-next/pull/120)

**New Contributors**

* @qianYuanJ made their first contribution in [#109](https://github.com/antdv-next/antdv-next/pull/109)
* @yushi0114 made their first contribution in [#111](https://github.com/antdv-next/antdv-next/pull/111)
* @dzzzzzy made their first contribution in [#118](https://github.com/antdv-next/antdv-next/pull/118)

**Full Changelog**
[https://github.com/antdv-next/antdv-next/compare/antdv-next@1.0.1...antdv-next@1.0.2](https://github.com/antdv-next/antdv-next/compare/antdv-next@1.0.1...antdv-next@1.0.2)



## V1.0.0 - 2026-02-03

- Synchronized update to Ant Design v6.2.2
- Fixed several known issues and improved component stability
- Replaced `classNames` → `classes`
- Optimized `Select.Option` to use `options` instead, with the same optimization applied to all Select-type components
- Optimized `Checkbox.Group` to use `options` instead
- Optimized `Radio.Group` to use `options` instead
- For more details, please refer to the [Migration Guide](/docs/vue/migration-antdv-next)
