<template>
    <nuxt-link class="main-header" to="/test">
        <h1 >Did your numbers EVER win? 😬</h1>

    </nuxt-link>
</template>

<script>

export default {
    name: "TheHeader",
};
</script>

<style>

.main-header {
    grid-column: 1/-1;
    text-align: center;
    margin: 20px 0;
    font-size: 15px;
    text-decoration: none;
}

</style>