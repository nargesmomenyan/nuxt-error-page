<template>
    <div class="error-page">
        <h1>Sorry, something went wrong!</h1>    
        <h3>Error: {{error.statusCode}}</h3>
        <p>Back to <a href="/">Safety </a> </p>
    </div>    
</template>

<script>
export default {
    props:{
        error:{
            type:Object,
        }
    },
}
</script>

<style scoped>
.error-page{
    margin-top: 10rem;
    text-align: center;
}

.error-page a{
    text-decoration: none;
    color: red;
}

.error-page a:hover,
.error-page a:active{
    color: salmon;
}
</style>

