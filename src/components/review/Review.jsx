import './review.css';

const Review = () => {
  return (
    <div className='review-container' id="review">
      <div className='review-header'>
        <div className='review-header-header'>
          <h2>Client Reviews</h2>
          <svg className='svg-services' width="137" height="8" viewBox="0 0 137 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3.87676C4.375 -0.211524 11.125 -0.211524 14.5 3.87676C17.875 7.96504 24.625 7.96504 28 3.87676C31.375 -0.211524 38.125 -0.211524 41.5 3.87676C44.875 7.96504 51.625 7.96504 55 3.87676C58.375 -0.211524 65.125 -0.211524 68.5 3.87676C71.875 7.96504 78.625 7.96504 82 3.87676C85.375 -0.211524 92.125 -0.211524 95.5 3.87676C98.875 7.96504 105.625 7.96504 109 3.87676C112.375 -0.211524 119.125 -0.211524 122.5 3.87676C125.875 7.96504 132.625 7.96504 136 3.87676" stroke="#FFC60D" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
         <h4>
          We are happy to receive feedback from satisfied clients. We sincerely thank you for each review.
        </h4>
      </div>
      <div className='review-cards'>
        <div className='review-card'>
          <h5>Mike</h5>
          <p>
            "I used a handyman service for door repair and was impressed by their professionalism, quality of work, and reasonable pricing."
          </p>
        </div>
        <div className='review-card'>
          <h5>James Gallagher</h5>
          <p>
            "I hired a team to repair my porch, and they exceeded my expectations. They were punctual, worked efficiently, and paid attention to every detail. My porch looks better than ever, and the entire process was hassle-free. Highly recommend their services!"
          </p>
        </div>
        <div className='review-card'>
          <h5>Emily Carter</h5>
          <p>
            "I recently had my living room painted, and I couldn't be happier with the results. The painters were professional, meticulous, and worked efficiently. The attention to detail and the smooth finish really transformed the space. I would definitely hire them again!"
          </p>
        </div>
      </div>
    </div>
  )
}

export default Review;
