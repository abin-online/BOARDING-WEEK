function getUser(userId, callback) {
    setTimeout(() => {
      console.log("Fetched User");
      callback({ id: userId, name: "Abin" });
    }, 1000);
  }
  
  function getPosts(userId, callback) {
    setTimeout(() => {
      console.log("Fetched Posts");
      callback(["Post 1", "Post 2"]);
    }, 1000);
  }
  
  getUser(1, (user) => {
    getPosts(user.id, (posts) => {
      console.log(user, posts);
    });
  });
  
  function getUser(ID) {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            console.log(`Fetched User`)
            resolve({ id: ID, name: "Abin" })
        }, 1000)
    })
  }

  function getPosts(userId){
    return new Promise((resolve)=> {
        setTimeout(()=> {
            console.log(`Fetched Posts`)
            resolve(["Post 1", "Post 2"])
        },1000)
    })
  }

  getUser(1)
  .then((user) => {
        getPosts(user.id).then((posts)=> {
            console.log(user, posts)
        })
  }).catch((err) => {
    console.log(err)
  });


async function fetchUserAndPosts() {
    const user = await getUser(1);
    const posts = await getPosts(user.id)
    console.log(user, posts)
}
fetchUserAndPosts()

//callback -> promise -> async await