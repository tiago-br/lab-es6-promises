// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code

// Iteration 1 using callbacks
addFood(steak[0], '#steak',()=>{
  addFood(steak[1],'#steak',()=>{
    addFood(steak[2],'#steak',()=>{
      addFood(steak[3],'#steak',()=>{
        addFood(steak[4],'#steak',()=>{
          addFood(steak[5],'#steak',()=>{
            addFood(steak[6],'#steak',()=>{
              addFood(steak[7],'#steak')
            })
          })
        })
      })
    })
  })
});




// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes').then(()=>{
    addFood(mashPotatoes[2], '#mashPotatoes').then(()=>{
      addFood(mashPotatoes[3], '#mashPotatoes').then(()=>{
        addFood(mashPotatoes[4], '#mashPotatoes').then(()=>{
        })
      })
    })
  })
});

// Iteration 3 using async/await

  async function makeFood(step) {
    // step.forEach(element => {
    //   await addFood(element,'#brusselSprouts')
    // })
    for(let i = 0; i<step.length; i+=1){
      await addFood(step[i],'#brusselSprouts')
    }
  }
  makeFood(brusselSprouts);