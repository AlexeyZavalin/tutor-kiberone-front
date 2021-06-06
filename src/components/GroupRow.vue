<template>
    <tr>
        <td>{{ time }}</td>
        <td>{{ location }}</td>
        <td>{{ students_count }}</td>
        <td>
            <button class="btn btn_enter" v-on="enter(id)"></button>
            <button class="btn btn_edit" v-on="edit(id)"></button>
            <button class="btn btn_remove" v-on="remove(id)"></button>
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        time: String,
        location: String,
        students_count: Int,
        id: Int
    },
    data() {
        return {

        }
    },
    methods: {
        enter: function(id) {
            console.log(id);
        },
        edit: function(id) {
            console.log(id);
        },        
        remove: function(id) {
            console.log(id);
        }
    }
}
</script>

<style>
    .btn {
        color: #fff;
        font-size: 14px;
        padding: 5px 15px;
    }
</style>