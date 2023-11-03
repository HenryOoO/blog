---
title: TestArticle
path: /qwe
description: 页面的描述，将显示在标题下方并注入元数据中
icon: i-line-md-account
---

看到朋友分享的這篇 [Vue: When a computed property can be the wrong tool](https://dev.to/linusborg/vue-when-a-computed-property-can-be-the-wrong-tool-195j)，「 當 computed 可能是錯誤的工具」，綜合我對 Vue 的理解，來寫一下筆記。

## [computed 快取 & 懶計算可以降低效能成本](https://rock070.me/notes/vue/2023-03-22-vue-use-computed-eager#computed-快取-懶計算可以降低效能成本)

因此，computed 因為「快取」與「懶計算」，在節省效能成本上，有很大的優勢。 如果具有昂貴計算的計算屬性未被任何東西使用，甚至不會完成該昂貴的計算。

> 昂貴的計算：複雜高的演算法、很高的渲染成本（大元件）、....等等

這是一個 computed 的範例：

```js
const foo = function () {
    console.log('Hello World')
}
```

`Inline Code`

-   无序列表
-   222
-

1. 有序列表
2. 222
3.
