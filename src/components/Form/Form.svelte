<script>
	
</script>

  <div class="col-6 all-form row justify-content-center">

    <div class="container-title">
      <h2 class="text-center">ENTER THE DATA TO THE REGISTER</h2>
    </div>
    <form class="d-flex align-items-center flex-column mb-3">
      <div class="mb-3 p-2 inputs d-flex justify-content-center">
        <input type="text" class="border border-light"id="InputName" aria-describedby="user-name" placeholder="User Name">
      </div>
      <div class="mb-3 p-2 inputs d-flex justify-content-center">
        <input type="email" class="border border-light" id="InputEmail" aria-describedby="user-email" placeholder="Email">
      </div>
      <div class="mb-3 p-2 inputs d-flex justify-content-center">
        <input type="text"  class="border border-light" id="InputImage" aria-describedby="image-user-link" placeholder="Image Link">
      </div>
      <button type="submit">SEND</button>
    </form>
  </div>

<style>
  .container-title{
    width: 600px;
  }
  .col-6{
    margin-top: 100px;
  }

  h2{
    color: white;
    font-weight:400;
    font-size: 60px;
  }
  form{
    width: 100%;
    height: 100%;
    margin-top: 80px;
  }

  .inputs{
    width: 100%;
  }

  input{
    background-color: black;
    color: white;
    font-weight: 400;
    border-radius: 2px;
    width: 70%;
    height: 100%; 
    padding-left: 20px;
  }

  .p-2{
    height: 10%;
  }

  button{
    background-color: white;
    border-radius: 2px;
    color: black;
    font-weight:600;
    font-size: 20px;
    width: 25%;
    height: 7%;
    margin-top: 60px;
  }
  ::-webkit-input-placeholder{
    color:white;
   
  }
  :-moz-placeholder{ /* Firefox 18- */
    color:white; 
  }

  ::-moz-placeholder{ /* Firefox 19+ */
    color:white;
  
  }
  :-ms-input-placeholder{
    color:white;
  }
</style>