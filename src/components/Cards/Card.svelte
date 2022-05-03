<script>
    export let userName;
    export let email;
    export let imageLink;
</script>

<!-- ----------------------------------------------HTML CARD COMPONENT----------------------------------->
    
    <div class="col-6 shadow p-3 bg-body ">
        <div class="img-container">
            <img src={imageLink} class="card-img img-fluid" alt="...">
        </div>
        <div class="name text-center">
            <h5 class="card-title">{userName}</h5>
        </div>
        <div class="name text-center">
            <p>{email}</p>
        </div>
        
      </div>
    

<!-- ---------------------------------------------------------------------------------------------------->

<style>
    .col-6{
        width: 300px;
        height: 280px;
        margin-left: 15px;
        border-radius: 10px;
        margin-bottom: 15px;
    }
    img{
        width: 100%;
        height: 170px;
        position: relative;
        right:16px;
        top: -16px;
        object-fit:inherit;
        border-radius: 10px 10px 0px 0px;

    }
    .name{
        position:relative;
        top: -80px
    }
    .img-container{
        width: inherit;
        height: 250px;
    }
    
</style>