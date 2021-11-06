<template>
        <header class="flex">
          <div class="branding flex"> 
              <img src="@/assets/file-invoice-dollar-solid.png" alt="">
          </div>
        </header>
</template>

<script>
    export default {
        name:'navigations',
    }
</script>

<style lang="scss" scoped>
header{
    z-index: 99;
    flex-direction: row;
    background-color: #1e2139;
    @media (min-wwidth:900px) {
        min-height: 100%;
        min-width: 90%;
        flex-direction: column ;
        border-radius: 0px 20px 20px 0px;
    }


    .branding{ 
        border-radius: 0 20px 20px 0;
        background-color: #7c5dfa;
        justify-content: center;
        padding: 24px;
        height: 80px;

        @media (min-width: 900px) {
            width: 100%;
        }

        img{
            width: auto;
            height: 30px;
        }
    }
}
</style>