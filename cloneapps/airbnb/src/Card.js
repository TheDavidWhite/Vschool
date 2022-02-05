import React from "react"


function Card(props) {
    return (
        <div className="card">
            <img src="https://ridestoremagazine.imgix.net/http%3A%2F%2Fwordpress-604950-1959020.cloudwaysapps.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fweb-version-jon09100-v2.jpg?ixlib=gatsbySourceUrl-1.6.9&auto=format%2Ccompress&w=689&h=861&s=63004b572897461f66c518b8a3da8472" className="card--image" />
            <div className="card--stats">
                <img src="https://pngimg.com/uploads/red_star/red_star_PNG31.png" className="star" />
                <span>5.0</span>
                <span className="gray">(6) - </span>
                <span className="gray">USA</span>
            </div>
            <p>Snowboarding lessons with David White</p>
            <p><span className="bold" >From $136</span> / person</p>
        </div>
    )
}
export default Card