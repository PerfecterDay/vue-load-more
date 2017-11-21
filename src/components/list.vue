<template>
    <div>
        <table class="table table-hover">
            <tbody>
                <tr v-for="item in list">
                    <td><img v-bind:src="item.author.avatar_url"></td>
                    <td>
                        <router-link to="/detail/5433d5e4e737cbe96dcef312">
                            <h2>{{item.title}}</h2>
                        </router-link>
                        <br>
                        <p>By:{{item.author.loginname}}</p>
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <button @click="next">Go next</button>
        <div>CurrentPage:{{page}}</div>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            list: [],
            limit: 10,
            page: 1
        }
    },

    created: function() {
        this.getList();
    },
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
        },
        next: function() {
            this.page += 1;
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
img {
    width: 120px;
    height: 120px;
}
</style>