<template>
    <div class="btn-container">
        <button class="btn" @click="$emit('userClicked')">Check now!</button>
    </div>
</template>

<script>

export default {
  
}
</script>

<style>
.btn-container {
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
