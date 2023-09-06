let About=[
    {
        image:"img/about1.png",
        first: "HOW IT ALL STARTED?",
        second: "HomeEdge was started with a vision to provide quality furniture pieces to millions of Indian households at affordable prices. It all started when our founder was furnishing his house. Frustrated at the lack of well-designed, good quality and affordable furniture, he set about redefining the process.",
       
      },
      {
        image:"img/about2.png",
        first: "WHAT DO WE DO?",
        second: "We have developed a seamless online method that cultivated a network of professional furniture designers and developed a talent for matching clients for their styles and budget with the ideal craftsman. Our 100% No Hassle Guarantee gives you peace of mind knowing that we're going to deliver... a beautiful piece of furniture every time.",
      },
      {
        image:"img/about3.png",
        first: " HOW IT ALL STARTED?",
        second: " HomeEdge was started with a vision to provide quality furniture pieces to millions of Indian households at affordable prices. It all started when our founder was furnishing his house. Frustrated at the lack of well-designed, good quality and affordable furniture, he set about redefining the process.",
      },
  ];
  function about(){
    let about = document.getElementById("story");

    for(let j=0;j<About.length;j++){
      about.innerHTML +=`<div
      class="row featurette d-flex justify-content-center align-items-center aboutimg" >
      <div class="col-md-7 order-md-2 ">
        <h5 class="featurette-heading">
            ${About[j].first}
        </h5>
        <br>
        <p class="lead">
        ${About[j].second}
        </p>
      </div>
      <div class="col-md-5 order-md-1">
        <img class="img-fluid" src="${About[j].image}" alt="" />
      </div>
    </div>`
    }
  };
    about();