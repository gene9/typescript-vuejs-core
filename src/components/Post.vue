<template>
    <div>
        {{msg}}
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Post extends Vue {
    data () {
        return {
            msg: 'Post'
        }
    }
}
</script>

<style>
</style>
