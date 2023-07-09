import React from "react";

function Categoriesslider() {
    return (
        <div class="container d-flex w-100 justify-content-between">
            <button className="btn w-100 my-2  me-1 fs-6 fw-bold" style={{ background: "linear-gradient(0deg, rgba(90, 90, 90, 0.75) 0%, rgba(90, 90, 90, 0.75) 100%), url(https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/l-intro-1643403830.jpg), lightgray 50% / cover no-repeat", color: "White", minHeight:'4em' }}>Italian</button>
            <button className="btn w-100 my-2  ms-1 me-1 fs-6 fw-bold" style={{ backgroundImage: " linear-gradient(0deg, rgba(90, 90, 90, 0.75) 0%, rgba(90, 90, 90, 0.75) 100%), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJ5CXwg6En3UFvctYHol0skg6-dHrCnD1kE3BtzE6AF1K1auu8gEWRspqS2E02tqpqE0&usqp=CAU)", color: "White", minHeight:'4em' }}>Chinese</button>
            <button className="btn w-100 my-2  ms-1 me-1 fs-6 fw-bold" style={{ backgroundImage: "linear-gradient(0deg, rgba(90, 90, 90, 0.75) 0%, rgba(90, 90, 90, 0.75) 100%), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3FNB_XkhndbsUqq9fkxmYKota5sD2pkokA&usqp=CAU)", color: "White" , minHeight:'4em'}}>Desserts</button>
            <button className="btn w-100 my-2  ms-1 me-1 fs-6 fw-bold" style={{ backgroundImage: "linear-gradient(0deg, rgba(90, 90, 90, 0.75) 0%, rgba(90, 90, 90, 0.75) 100%), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIljsFP9OEwRHExsZ-7GOOPUITNh7HWR8-UsAvsTSI9_n89p8bHNpLjuLcywyDu7zh0NA&usqp=CAU)", color: "White", minHeight:'4em' }}>Mexican</button>
            <button className="btn w-100 my-2  ms-1 me-1 fs-6 fw-bold" style={{ backgroundImage: "linear-gradient(0deg, rgba(90, 90, 90, 0.75) 0%, rgba(90, 90, 90, 0.75) 100%), url(https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg)", color: "White" }}>Indian</button>
            <button className="btn w-100 my-2  ms-1 me-1 fs-6 fw-bold" style={{ backgroundImage: "linear-gradient(0deg, rgba(90, 90, 90, 0.75) 0%, rgba(90, 90, 90, 0.75) 100%), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mU-a_m8nRWEDtlrftm1RuDBCb4F5PtZrEw&usqp=CAU)", color: "White" }}>Middle Eastern</button>
            <button className="btn w-100 my-2  ms-1 fs-6 fw-bold" style={{ backgroundImage: "linear-gradient(0deg, rgba(90, 90, 90, 0.75) 0%, rgba(90, 90, 90, 0.75) 100%), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpYUm8vzKFvL133cFGKqM1yOA5paOl-0KKY-lEnS-pSjWjdFENx9uAeUZXFO-5YL84Lh4&usqp=CAU)", color: "White", minHeight:'4em' }}>Fast Food</button>
        </div>
    );
}
export default Categoriesslider;