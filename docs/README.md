# first page

first

~~~js{3}
const test = 1;

const log = (...args) => {
    console.log(args);
};
~~~

~~~html
<div></div>
~~~

~~~go{1}
func main() {
    log.Println("log")
}
~~~

::: tip
test
:::

## diagram

::: margin-top

<mermaid>
graph TD
    A[Cool] -->|Get money| B(Go shopping)
</mermaid>

## timeline

::: margin-top

<timeline title="test">
    <timeline-item>asdfasdf</timeline-item>
    <timeline-item bg-color="#A71490">1111</timeline-item>
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

## contribute 

기여하는 방법.
