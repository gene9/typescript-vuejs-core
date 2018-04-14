<template>
    <b-container>
        {{msg}}
        <Post>
        </Post>
    </b-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Post from './components/Post';

@Component({
    props: {
        propMessage: String
    },
    components: {
        Post
    }
})
export default class App extends Vue {
    data () {
        return {
            msg: 'App'
        }
    }
}
</script>

<style>
</style>
