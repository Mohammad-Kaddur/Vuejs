<template>
    <base-button link :to="productsDetailsLink">
        <div>{{ title }}</div>
    </base-button>
</template>

<script>

export default {
    data() {
        return {}
    },
    props: ["id", "title", "desc", "image"],
    computed: {
        productsDetailsLink() {
            // return "/category/" + this.title.toLowerCase();
            return { name: 'category', params: { title: this.title.toLowerCase() } };
        },
    }
}

</script>