
<script>
    import Card from './Card.svelte';
</script>
<div class="col-6 ml-3 container-module-cards row  justify-content-center">
    <div class="container-title">
        <h2 class="text-center">UPDATE RECORDED DATA</h2>
    </div>
    <div class="container-cards row justify-content-center">
       <Card />
       <Card />
    </div>
</div>

<style>
   
    .container-module-cards{
        background-color:  #E5E5E5;
        height: 100%;
        margin-left: 24px;

    }
    .container-title{
        width: 600px;
    }
    .container-cards{
        margin-top: -80px;
    }    
    
    h2{
        margin-top: 100px;
        color: black;
        font-weight:400;
        font-size: 60px;
    }
</style>