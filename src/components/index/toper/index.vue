<template>
    <div class="box">
        <div class="bleft">
            <h1>ZVIE</h1>
        </div>
        <div class="bright">
            <input type="text">
            <span>文档</span>
            <span>博客</span>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'toper',
    props: {
        msg: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss" scoped>
.box {
    width: 1200px;
    height: 68px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .bright {
        display: flex;
        align-items: center;

        span {
            margin-left: 20px;
        }
    }
}
</style>