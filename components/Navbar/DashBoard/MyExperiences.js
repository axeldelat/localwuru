
import React, { Component } from 'react'
import Link from 'next/link'
import ExperienceCard from '../../ExperienceCard'

class MyExperiences extends Component{
  constructor(props) {
    super(props);
    this.state = {
      experiences: []
    };
  }

  async componentDidMount(){
    const token = localStorage.getItem('token')
    const response = await fetch('https://belocalwuru-turbulent-hippopotamus-vp.mybluemix.net/auth/profile',{
      method:'POST',
      headers:{
        authorization: token,
        'content-type':"application/json"
      }
    })
    const responseJSON = await response.json()

    const profile = this.setState( {profile: responseJSON.profile} )

    const experiences = await fetch(`https://belocalwuru-turbulent-hippopotamus-vp.mybluemix.net/experiences/author/${this.state.profile._id}`,{
      method:'GET',
      headers:{
        'content-type':"application/json"
      }
    })
    const experiencesJSON = await experiences.json()

    const exp = this.setState( {experiences: experiencesJSON.data.experience} )
  }
  render() {
    return (
      <>
        {this.state.experiences.map(experience=>(
          <div className="col-span-3">
            <Link key={experience._id} href={`/experiences/${encodeURIComponent(experience._id)}`} passHref>
              <a>
                <ExperienceCard experience={experience} />
              </a>
            </Link>
          </div>
        ))}
      </>

        );
    }
}

export default MyExperiences
