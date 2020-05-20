<template>
    <timeline-item :bg-color="bgColor">
        <slot></slot>
    </timeline-item>
</template>

<script>
import { TimelineItem } from 'vue-cute-timeline';

export default {
    props: {
        bgColor: {
            type: String,
            default: '#9dd8e0'
        }
    },
    components: {
        TimelineItem,
    },
};
</script>
