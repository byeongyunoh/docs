---
sidebarDepth: 4
---

# 들어가며

## 사용기를 올립니다

### 문서를 작성하는 방법

#### 컴포넌트

~~~js
const log = (...args) => {
    console.log(args);
};
~~~

::: tip
이것은 팁을 보여줄 수 있어요.
:::

## diagram

::: margin-top

<mermaid>
graph TD
    A[Cool] -->|Get money| B(Go shopping)
</mermaid>

## timeline

::: margin-top

<timeline title="시작">
    <timeline-item>첫 커밋</timeline-item>
    <timeline-item bg-color="#A71490">두번째 계획</timeline-item>
</timeline>

## live code

::: margin-top

```vue live
<template>
    <div>{{ label }}</div>
</template>

<script>
export default {
    data() {
        return {
            label: "title"
        };
    }
};
</script>
```

## contributes

기여하는 방법.
