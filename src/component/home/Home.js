import React from 'react'
import Header from '../header/Header'
import Button from '../button/Button';
import AsanaSection from '../asanaSection/AsanaSection';
import Footer from '../footer/Footer';
import "./Home.css";
function Home() {
  return (
    <div className='home'>
      <Header />

      <article className='headings'>
        <p className='top-heading'> See how <span>monday.com Work OS</span> measures up </p>
        <p className='bottom-heading'>Straightforward monday.com alternatives research from pricing to features and beyond</p>
      </article>

      <div className='centerBtn'>
        <Button
          height={"50px"}
          width={"180px"}
          backgroundColor={"blue"}
          borderRadius={"30px"}
          border={"none"}
          fontColor={"white"}
          fontSize={"16px"}
          hover={"0.7"}


        >
          Get Started
        </Button>

      </div>

      <div className='sections'>
        <div> Asana  </div>
        <div> Airtable </div>
        <div> Jira </div>
        <div> Smartsheet </div>
        <div> Trello </div>
        <div> Wrike </div>
        <div> Basecamp </div>
        <div> Workfront </div>
      </div>
      <AsanaSection />

      <div className='trusted'>
        <h1> Trusted by 180,000+ customers worldwide </h1>
      </div>
      <div className='trusted-logo'>
        <div> <img src='https://w7.pngwing.com/pngs/793/681/png-transparent-the-coca-cola-company-fizzy-drinks-beverages-mangolia-food-text-logo.png ' />  </div>
        <div> <img src='https://getlogo.net/wp-content/uploads/2021/06/mccann-logo-vector.png ' />   </div>
        <div> <img src='https://e7.pngegg.com/pngimages/167/587/png-clipart-universal-music-group-universal-music-publishing-group-music-publisher-music-industry-others-text-logo.png ' />  </div>
        <div>  <img src='https://www.pngfind.com/pngs/m/74-742763_icon-hulu-hulu-logo-transparent-hd-png-download.png ' />  </div>
        <div> <img src='https://w7.pngwing.com/pngs/109/60/png-transparent-wix-logos-and-brands-icon.png ' />  </div>
      </div>

      <div className='badges'>
        <div> <img src='https://www.bucks.edu/media/bcccmedialibrary/academics/UndergraduateResearchB+_1_-1-350x350.png' /> </div>
        <div> <img src='https://www.bucks.edu/media/bcccmedialibrary/academics/UndergraduateResearchB+_1_-1-350x350.png' /> </div>
        <div> <img src='https://www.bucks.edu/media/bcccmedialibrary/academics/UndergraduateResearchB+_1_-1-350x350.png' /> </div>
        <div> <img src='https://www.bucks.edu/media/bcccmedialibrary/academics/UndergraduateResearchB+_1_-1-350x350.png' /> </div>
        <div> <img src='https://www.bucks.edu/media/bcccmedialibrary/academics/UndergraduateResearchB+_1_-1-350x350.png' /> </div>
        <div className='middle-div'> <img className='middle' src='https://www.bucks.edu/media/bcccmedialibrary/academics/UndergraduateResearchB+_1_-1-350x350.png' /> </div>
        <div> <img src='https://www.bucks.edu/media/bcccmedialibrary/academics/UndergraduateResearchB+_1_-1-350x350.png' /> </div>
        <div> <img src='https://www.bucks.edu/media/bcccmedialibrary/academics/UndergraduateResearchB+_1_-1-350x350.png' /> </div>
        <div> <img src='https://www.bucks.edu/media/bcccmedialibrary/academics/UndergraduateResearchB+_1_-1-350x350.png' /> </div>
        <div> <img src='https://www.bucks.edu/media/bcccmedialibrary/academics/UndergraduateResearchB+_1_-1-350x350.png' /> </div>

        <div> <img src='https://www.bucks.edu/media/bcccmedialibrary/academics/UndergraduateResearchB+_1_-1-350x350.png' /> </div>
      </div>
      <div className='monday trusted'>
        <h1> Try monday.com for your team</h1>
      </div>

      <div className='centerBtn'>
        <Button
          height={"50px"}
          width={"180px"}
          backgroundColor={"blue"}
          borderRadius={"30px"}
          border={"none"}
          fontColor={"white"}
          fontSize={"16px"}
          hover={"0.7"}
        >
          Get Started
        </Button>

      </div>

      <div className='roundlogo-container'>
        <div> <img src='https://1000logos.net/wp-content/uploads/2020/09/ISO-Logo.jpg' /> </div>
        <div> <img src='https://1000logos.net/wp-content/uploads/2020/09/ISO-Logo.jpg' /> </div>
        <div> <img src='https://1000logos.net/wp-content/uploads/2020/09/ISO-Logo.jpg' /> </div>
        <div> <img src='https://1000logos.net/wp-content/uploads/2020/09/ISO-Logo.jpg' /> </div>
        <div> <img src='https://1000logos.net/wp-content/uploads/2020/09/ISO-Logo.jpg' /> </div>
      </div>

      <div className='additional-info'>
        <div className='logo-div'> <img className='logo-img' src='https://download.logo.wine/logo/Monday.com/Monday.com-Logo.wine.png' /> </div>

        <div className='col'>
          <p>Pricing</p>
          <p>About us</p>
        </div>
        <div className='col'>
          <p>24/7 support</p>
          <p>customer stories</p>
        </div>
        <div className='col'>
          <p>Contact sales</p>
          <p>Enterprise</p>
        </div>
        <div className='col'>
          <p>Integrations</p>
          <p>Templates</p>
        </div>
        </div>
        <Footer />
      </div>
      )
}

      export default Home;