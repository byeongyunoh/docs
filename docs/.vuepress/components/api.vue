<template>
    <div>
        <div v-if="!existSrc">
            must set api path.
        </div>
        <div class="api" v-if="existSrc">
            <div class="title">Client</div>
            <div class="description">wormhole server api. wormhole client의 등록과 매지니먼트를 관리합니다.</div>
            <div class="url">URL</div>
            <pre v-highlightjs><code class="http">POST /clients/id?name=name&foo=bar HTTP/1.1</code></pre>
            <div class="request-body">request</div>
            <pre v-highlightjs><code class="json">{
    "a":"b",
    "123": [
        {
            "sadfasd": "asdfads",
            "asdfadsf": 123
        }
    ]
}</code></pre>
            <div class="request-body">response</div>
            <pre v-highlightjs><code class="json">{
    "a":"b",
    "123": [
        {
            "sadfasd": "asdfads",
            "asdfadsf": 123,
            "result": true
        }
    ]
}</code></pre>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';
Vue.use(VueHighlightJS);

export default {
    props: {
        src: {
            type: String,
            default: '',
        }
    },
    computed: {
        existSrc() {
            return !(this.src === undefined && this.src === null && this.src === '');
        },
    },
    data() {
        return {
            message: 'aaa'
        }
    },
    mounted() {
        if (this.src === undefined || this.src === null || this.src === '') {
            return;
        }

        const api = require(`../assets/api/${this.src}.json`);
    }
};
</script>

<style lang="css" scoped>
.api .url, .api .request-body {
    font-weight: 600;
}
<style>
