<script>
  import { collection, limit, limitToLast, onSnapshot, orderBy, query, QuerySnapshot} from "firebase/firestore";
  import { db } from "../../firebase";

  import Card from "./Card.svelte";

  let users = [];
  let userRecorded = false;
  /* onSnapshot(
    collection(db, "users"),
    (querySnapshot) => {
      users = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    },
    (err) => {
      console.log(err);
    }
  ); */
  const update = () =>{
    const q =  query(collection(db,'users'),orderBy('date'), limitToLast(10));
    
    onSnapshot(q,
      (querySnapshot) => {
        users = querySnapshot.docs.map((doc) => {
        
        return { ...doc.data(), id: doc.id };
      });
      },
      (err) => {
        console.log(err);
      }
    )
  }
</script>

<div class="col-6 ml-3 container-module-cards row  justify-content-center ">
  <div class="container-scroll  justify-content-center ">
    <div class="container-title">
      <h2 class="text-center">UPDATE RECORDED DATA</h2>
    </div>
    <div class="container-cards row">
      {#each users.reverse() as user}
        <Card 
            userName = {user.userName}
            email = {user.email} 
            imageLink = {user.imageLink} 
        />
      {/each}
    </div>
  </div>
  <button type="submit" on:click={update}>UPDATE</button>
  
</div>

<style>
  .container-module-cards {
    background-color: #e5e5e5;
    height: 100%;
    margin-left: 24px;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .container-scroll {
    position: relative;
    top: 60px;
    left: 20px;
    overflow-y: scroll;
    height: 530px;
    scrollbar-width: none;
    width: 700px;
    box-shadow: 0px 15px 10px -15px white;
  }
  .container-title {
    width: 600px;
  }

  .container-cards {
    position: relative;
    top: 90px;
    height: 200px;
  }

  h2 {
    color: black;
    font-weight: 400;
    font-size: 60px;
  }
  button {
    background-color: black;
    border-radius: 2px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    width: 25%;
    height: 7%;
    border: none;
    position: relative;
    top: -15px;
  }
</style>
