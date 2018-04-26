<template>
    <p v-html="content"></p>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            content: ''
        }
    },

    created:function(){
    	this.getDetail();
    },

    methods: {
        getDetail: function() {
            var ajax = new XMLHttpRequest();
            ajax.open('GET', 'https://cnodejs.org/api/v1/topic/'+this.$route.query.id);
            ajax.send();
            var vm = this;
            ajax.onreadystatechange = function() {
                if (ajax.readyState == 4 && ajax.status == 200) {
                    var obj = JSON.parse(ajax.responseText);
                   	var data = obj.data;
                   	var content = data.content;
                   	vm.content = content;
                }
            }
        }
    }
}
</script>

