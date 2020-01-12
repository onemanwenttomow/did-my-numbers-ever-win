<template>
    <div class="btn-container">
        <button :disabled="numbersLeft > 0" class="btn" @click="$emit('userClicked')">Check now!</button>
    </div>
</template>

<script>

export default {
    props: ['numbersLeft'],
}
</script>


<style>
.btn-container {
    background-color: #F8E7E7;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
}

.btn {
    font-size: 20px;
}


</style>
