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
    width: 250px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    grid-row: 3 / 4;
    grid-column: 2 / 3;
}

.btn {
    border: 2px solid #aa2d27;
    color: #AA2D26;
    border-radius: 5px;
    padding: 5px 20px;
    font-weight: 700;
    font-size: 24px;
    cursor: pointer;
}

.btn[disabled] {
    border: 2px solid #ffd1cd;
    color:#ffd1cd;
    cursor: auto;
}


</style>
