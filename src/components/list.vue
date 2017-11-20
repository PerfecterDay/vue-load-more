<template>
    <ol>
        <li v-for="item in list">
            <img v-bind:src="item.author.avatar_url"> 
            <h2>{{item.title}}</h2>
            <br> By:{{item.author.loginname}}
        </li>
    </ol>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            list: [],
            limit: 10
        }
    },

    created: function() {
        this.getList();
    },
    props: ['page'],

    methods: {
        getList: function() {
            var ajax = new XMLHttpRequest();
            ajax.open('GET', 'https://cnodejs.org/api/v1/topics?page=' + this.page + '&limit=' + this.limit);
            ajax.send();
            var vm = this;
            ajax.onreadystatechange = function() {
                if (ajax.readyState == 4 && ajax.status == 200) {
                    var obj = JSON.parse(ajax.responseText);
                    var content = obj.data;
                    vm.list = content;
                }
            }
        }
    },

    watch: {
        page: function(val) {
            this.getList();
        }
    }

}
</script>
<style type="text/css" scoped>
ol {
    margin-left: 2rem;
    list-style: outside decimal;
    padding: 0;
}

li {
    border-top: 1px solid;
    vertical-align: baseline;
    height: 125px;
}

img {
    width: 120px;
    height: 120px;
    float: left;
}
</style>