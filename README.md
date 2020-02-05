# IXCX_CountUp (v1.0.0)
IXCX_CountUp is a very lightweight (883bytes!) vanilla javascript library that easily counts an integer incrementally!

# How to use
1. Add the script inside the head tag  
`<script src="assets/IXCX_CountUp.js"></script>`  
2. Create an IXCX_CountUp object  
`let counter = new IXCX_CountUp({target: null, end: 100, loopDelay: 50, loopAmount: null});`  
3. Fill in the following data:  
   **![#00FA9A](https://placehold.it/15/00FA9A/000000?text=+) target (required) :**  `Your target element via getElementById, querySelector, etc..`  
   **![#00FA9A](https://placehold.it/15/00FA9A/000000?text=+) end (optional; default 100) :**  `The number you want to count up to`  
   **![#00FA9A](https://placehold.it/15/00FA9A/000000?text=+) loopDelay (optional; default 50) :**  `Delay in milliseconds, 1000 = 1 second`  
   **![#00FA9A](https://placehold.it/15/00FA9A/000000?text=+) loopAmount (required) :**  `The number of times the script will count to reach your end number`  
      * example: if `end: 100` and `loopAmount: 20` , the script will count 20 times to reach 100
  ```
  let counter = new IXCX_CountUp({  
     target: myTargetElement,  
     end: 35032,  
     loopDelay: 50,  
     loopAmount: 20,  
  });
  ```
4. Call start() method  
`counter.start();`
