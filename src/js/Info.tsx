import Ballot from "./Ballot"
import '../css/info.scss'

const Info = () => {
    return (
        <div className="info-container">
            {/* Flexbox containing ballot (left) and article (right) */}
            <Ballot />
            <div className="main-article-container">
        
            </div>
        </div>
    )
}

export default Info;