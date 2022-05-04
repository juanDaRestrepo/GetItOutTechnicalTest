<script>
  import {addDoc,  collection} from 'firebase/firestore';
  import {db} from '../../firebase';
  
  import validations from './validations';
  

  let formState = {userName: '', email: '', imageLink: '', date: new Date().toString()};
  $:({ userName_error, email_error, imageUrl_error } = validations(formState))
  let recordedUser = false;

  const handleSubmit =  () => {
    if(userName_error.length<1 && email_error.length<1 && imageUrl_error<1 ){
      const resp =  addDoc( collection(db,'users'), formState)
      formState = {userName: '', email: '', imageLink: ''};
      recordedUser = true;
      setTimeout(()=>{
        recordedUser = false;
      },1000)
    }
  }

</script>

  <div class="col-6 all-form row justify-content-center">

    <div class="container-title">
      <h2 class="text-center">ENTER THE DATA TO THE REGISTER</h2>
    </div>
    
    <form class="d-flex align-items-center flex-column mb-3" on:submit|preventDefault={handleSubmit}>
      <div class="mb-3 p-2 inputs d-flex justify-content-center">
        <input 
          type="text" 
          class="border border-light"
          id="InputName" 
          aria-describedby="user-name" 
          placeholder="User Name" 
          bind:value={formState.userName}
          
        >
      </div>
      {#if userName_error.length>0 && formState.userName.length > 0}
      <div class="alert-error">
        <span>{userName_error}</span>
      </div>
      {/if}
      
      <div class="mb-3 p-2 inputs d-flex justify-content-center">
        <input 
          type="email" 
          class="border border-light" 
          id="InputEmail" 
          aria-describedby="user-email" 
          placeholder="Email" 
          bind:value={formState.email}
          
        >
        
      </div>
      {#if email_error.length>0 && formState.email.length > 0}
      <div class="alert-error-email">
        <span>{email_error}</span> 
      </div>
      {/if}
      <div class="mb-3 p-2 inputs d-flex justify-content-center">
        <input 
          type="text"  
          class="border border-light" 
          id="InputImage" 
          aria-describedby="image-user-link" 
          placeholder="Image Link" 
          bind:value={formState.imageLink}
          
        >
      </div>
      {#if imageUrl_error.length>0 && formState.imageLink.length > 0}
      <div class="alert-error-image">
        <span>{imageUrl_error}</span>
      </div>
      {/if}
      {#if recordedUser}
      <div class="alert-success">
        <span>User registered correctly</span>
      </div>
      {/if}
      <button type="submit">SEND</button>
      
    </form>
  </div>

<style>
  .container-title{
    width: 600px;
  }
  .col-6{
    margin-top: 60px;
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
    border:none;
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
 
	.alert-error{
    color: red;
    font-weight: 500;
    background-color: black;
    margin-right: 160px;
    margin-top: -10px;
  }
  .alert-error-email{
    color: red;
    font-weight: 500;
    background-color: black;
    margin-right: 400px;
    margin-top: -10px;
  }
  .alert-error-image{
    color: red;
    font-weight: 500;
    background-color: black;
    margin-right: 420px;
    margin-top: -10px;
  }
  .alert-success{
    color:green;
    font-weight: 500;
    background-color: black;
  }
  
</style>