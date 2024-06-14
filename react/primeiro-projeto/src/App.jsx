import React from "react";
import "./styles/App.css";
import { Article } from "./components/Article/Article";
import { Navbar } from "./components/Navbar/Navbar";
import { Counter } from "./components/Counter/Counter";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        {/* <Counter /> */} {/* usado apenas para testar uma aplicação de contador */}

         <section id="articles">
          <Article 
            title="Designing Dashboards" 
            provider="NASA" 
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            image="https://s3-alpha-sig.figma.com/img/1c6b/bc0b/e719e9d93c02a87ba51308ebb0297cdf?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FyxuHwUrSzHq2Bo5P4Z6O9LH6NkMXOfXbcqODUEsiWhumx-nwA4wt-1BupIjPEJyDqnyxD5~uMYx5pjuXZLBq7WQzL~hoXTiZsuvSr31xRcVgER2Ncz4QcrAuEzfceaeqCyf74XFkPFd4WRqBfrfSk6g1Q7mx-XDTrYaykhBCyR3naFWcjYZV6gKZqQN6g-sC-w2eOuMy81Qcn8ATB3ocBA~LPeYOxU10O7RQ7bviWeEDHl4bhV4CkY2Y6G4LRillxjSk6ePfhP5tZ8GWXweZId0eDRXMTWzbCFp-jxDNixpPiewxmK3mvZ1YhV~UJwwIdBgQRziWQ5khazdeelipQ__"
          />

          <Article 
            title="Vibrant Portraits of 2020" 
            provider="Space News" 
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus exercitationem cum optio illo animi odit. Repudiandae, enim vitae, maxime officia amet accusantium dolorem ullam eligendi voluptatem cum tenetur eaque iure?"
            image="https://s3-alpha-sig.figma.com/img/44dc/7799/6f359e2db24fc4e08bfd61cf50427139?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ojaVZ6JR6KHq0NDCAKgQjkmQHOUGRmkSDy1tGbbsIPdJtMuqM3P9d~kRLsDewfMk5ueLPQRvU2y2WzE-KbgYHLkjKBLI~gABKyxv030YGwSjx0Y-dBCxmGyl4jRfT47f5Uunx80p8U8wJ7e6xIj2NJ5sZGIanCtb7Jmu2hrshop9FO-2oFZ7AR7DSUi-gWNt1apdZz-kqmxcKZgZv~8WCXj02IOU1fahpqaG8-MOP2RR5rWAZ-~LfSQhn4VnNRk5WWOBAjVChoCihgy928wvHW6Ew-1W9aX7wjEUNcu2fxjZAa2PC8gPb-JOvdeqM9lPdIbIplZgUybJ6T-Ve1BYMQ__"
          />

          <Article 
            title="36 Days of Malayalam type" 
            provider="Spaceflight Now" 
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            image="https://s3-alpha-sig.figma.com/img/a511/7cdc/a561b38768fbe6667854fc00641b25fb?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c1OPDdl~nz-4CdHpYQ5zDpCq2POOothz~epKDNZ72Jj0smi0RUBTRcNUongObh5J0FBeuLGaPw6fC3tzrQdm7D4cqT0pUL5JZQl5b9IyFxLb5Rx4SUEF-hAVeMJcuy9RSj8vli-eemKNGud40BqalilRM-fMompQN7E3ynV73nhkCu1K0jYlCIrkHoBDlZN5lAAY6p2VH8x0qe-WLsn~SIKC7-9BPfQgZaIpTk~PkIhyFjs5j769qkn~VgSC6h59t81ttMOr66DxWWwqk1UZqheuirJLQs3V9ddtMt6NUp~o9A0EUqmf2HRYMD3jOXJSusC0nIpIWzkYaGbDVt7DYg__"
          />

          <Article 
            title="Designing Dashboards" 
            provider="NASA" 
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            image="https://s3-alpha-sig.figma.com/img/1c6b/bc0b/e719e9d93c02a87ba51308ebb0297cdf?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FyxuHwUrSzHq2Bo5P4Z6O9LH6NkMXOfXbcqODUEsiWhumx-nwA4wt-1BupIjPEJyDqnyxD5~uMYx5pjuXZLBq7WQzL~hoXTiZsuvSr31xRcVgER2Ncz4QcrAuEzfceaeqCyf74XFkPFd4WRqBfrfSk6g1Q7mx-XDTrYaykhBCyR3naFWcjYZV6gKZqQN6g-sC-w2eOuMy81Qcn8ATB3ocBA~LPeYOxU10O7RQ7bviWeEDHl4bhV4CkY2Y6G4LRillxjSk6ePfhP5tZ8GWXweZId0eDRXMTWzbCFp-jxDNixpPiewxmK3mvZ1YhV~UJwwIdBgQRziWQ5khazdeelipQ__"
          />

        </section> 
      </>
    );   
  }
}

export default App;

