<template>
    <div>
        <list v-bind:page="page"></list>
        <button @click="next">Go next</button>
        <div>CurrentPage:{{page}}</div>
    </div>
</template>
<script type="text/javascript">
import list from "components/list.vue"
export default {
    data() {
        return {
            page: 1 
        }
    },
    components: { list },
    methods: {
        next() {
            this.page += 1;
        }
    }
}
</script>