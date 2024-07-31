import { useEffect } from "react";

const TimerFunction = () => {
  /** 
   * //* Behaviour of setInterval without writing the clearInterval (Problem)
    -> Timer will begin after the intial render of the About component.
    -> When you go to the another page, the timer will not stop. Instead when we go to another page, timer starts from begin
    -> When you come back to About component page, this time two setIntervals will start executing  
    -> Again When you go to another page and come back to the About Us page, this time three setIntervals will start executing. The more you do switch between the pages, the more setIntervals will start executing. this reduces performance. As it is the natural behaviour of user to switch between web pages in a website
     */

  /** ---- (IMP) The usage of unmount of the function: When you return function from the useEffect's callback function, it will be executed before the component is unmounted
   * //* Behaviour of setInterval with the clearInterval (Problem solved)
   * In order to stop the Timer, when you go to another page we need to clear the setInterval when the copmonent is unmounted(removed from the web page).
   * In order to clear the particular timer, we need to assign it to a variable.
   * The function returned from the callback function of the useEffect will be executed when the component is unmounted.
   * Now the Timer will work properly i.e. it will be stopped when you go to another page. And when you come back to the about us page only one setInterval will be started.
   */
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer Function..");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log(" Component unmounted...");
    };
  }, []);

  return (
    <div>
      <h1>Functional Component</h1>
    </div>
  );
};

export default TimerFunction;
