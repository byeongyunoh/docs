<template>
    <timeline timeline-theme="lightblue">
        <timeline-title :bg-color="bgColor">{{ title }}</timeline-title>
        <slot></slot>
    </timeline>
</template>

<script>
import { Timeline, TimelineTitle } from 'vue-cute-timeline';

export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        bgColor: {
            type: String,
            default: '#09FFAA'
        }
    },
    components: {
        Timeline,
        TimelineTitle,
    },
};
</script>
