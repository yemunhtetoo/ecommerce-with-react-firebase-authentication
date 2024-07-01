import React, { useState } from 'react'
import Ratting from "../components/Ratting"
const reviewtitle = "Add a Review";

let ReviewList = [
    {
      imgUrl: "/src/assets/images/instructor/01.jpg",
      imgAlt: "Client thumb",
      name: "Ganelon Boileau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/02.jpg",
      imgAlt: "Client thumb",
      name: "Morgana Cailot",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/03.jpg",
      imgAlt: "Client thumb",
      name: "Telford Bois",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/04.jpg",
      imgAlt: "Client thumb",
      name: "Cher Daviau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", 

    },
  ];
const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);
  return (
    <>
      <ul  className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
        <li className='desc' onClick={()=>setReviewShow(false)}>Description</li>
        <li className='rev' onClick={()=>setReviewShow(true)}>Reviews</li>
      </ul>

      {/* desc and review contents */}
      <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
        <div className='review-showing'>
          <ul className='content lab-ul'>
            {
              ReviewList.map((review, i)=>(
                <li key={i}>
                  <div className='post-thumb'>
                    <img src={review.imgUrl} alt='' />
                  </div>
                  <div className='post-content'>
                    <div className='entry-meta'>
                      <div className='posted-on'>
                        <a href='#'>{review.name}</a>
                        <p>{review.date}</p>
                      </div>
                    </div>

                    <div className='entry-content'>
                      <p>{review.desc}</p>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>

          {/* add review fields */}
          <div className='client-review'>
            <div className='review-form'>
              <div className='review-title'>
                <h5>{reviewtitle}</h5>
              </div>

              <form action='action' className='row'>
                <div className='col-md-4 col-12'>
                  <input type='text' name='name' id='name' placeholder='Full Name' />
                </div>

                <div className='col-md-4 col-12'>
                  <input type='email' name='email' id='name' placeholder='Your Name' />
                </div>
                <div className='col-md-4 col-12'>
                  <div className='rating'>
                    <span className='me-2'>Your rating</span>
                    <Ratting />
                  </div>
                </div>

                <div className='col-md-12 col-12'>
                  <textarea name="message" id="message" rows="8" placeholder='Type Here Message'></textarea>
                </div>
                
                <div className='col-12'>
                  <button type='submit' className='default-button'>
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* description */}
        <div className='description'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae unde molestias explicabo numquam tenetur temporibus nulla quisquam labore. Molestiae consequuntur rem et commodi provident voluptatum debitis in magnam animi sequi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi distinctio libero consequuntur, vero provident placeat atque commodi repellendus molestiae deserunt, perferendis perspiciatis! Animi ullam exercitationem corporis provident earum officia quibusdam!</p> 
          <div className='post-item'>
            <div className='post-thumb'>
              <img src='/src/assets/images/shop/01.jpg' alt='' />
            </div>
            <div className='post-content'>
              <ul className='lab-ul'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li> Suscipit iste similique deleniti quia eos, fugiat consequuntur eaque,</li>
                <li>neque harum laudantium totam commodi nemo numquam earum reprehenderit. </li>
                <li>Distinctio iusto reiciendis earum.</li>
              </ul>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae unde molestias explicabo numquam tenetur temporibus nulla quisquam labore. Molestiae consequuntur rem et commodi provident voluptatum debitis in magnam animi sequi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi distinctio libero consequuntur, vero provident placeat atque commodi repellendus molestiae deserunt, perferendis perspiciatis! Animi ullam exercitationem corporis provident earum officia quibusdam!</p> 
        </div>
      </div>
    </>
  )
}

export default Review