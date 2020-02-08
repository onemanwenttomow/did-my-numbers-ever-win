<template>
    <a class="main-header" href="/">
        <h1>Did your numbers EVER win? 😬</h1>
    </a>
</template>

<script>

export default {
    name: "TheHeader",
};
</script>

<style>

.main-header {
    grid-column: 1/-1;
    grid-row: 1;
    text-align: center;
    margin: 20px 0;
    font-size: 15px;
    text-decoration: none;
}

@media screen and (min-width: 320px) and (max-width: 667px) {

    .main-header {
        width: 100vw;
    }

}

</style>