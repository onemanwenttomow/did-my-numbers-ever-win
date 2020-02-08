<template>
    <footer>Built with  <a href="https://nuxtjs.org/">Nuxt</a>. Made with 💟 by <a href="https://pwanderson.com/">Peter Anderson</a> | Imprint</footer>
</template>

<script>

export default {
    name: "TheFooter",
};
</script>

<style>
footer {
    position: fixed;
    bottom: 0;
    background-color: #F8E7E7;
    width: 100vw;
    padding: 5px;
    text-align: center;
}
a {
    color: inherit; 
}

@media screen and (min-width: 320px) and (max-width: 667px) {

    footer {
        width: 100vw;
        position: relative;
    }

}


</style>